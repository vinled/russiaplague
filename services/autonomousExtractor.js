/**
 * Motor Autônomo de Inteligência Epidemiológica (Gemini 1.5 Flash + Fallback Heurístico)
 * Analisa o fluxo contínuo de notícias e atualiza autonomamente o estado da situação,
 * incluindo contagem de mortes (oficiais vs alegadas), nível de ameaça, justificativas,
 * marcos cronológicos e zona de contenção de Shelekhov.
 */

const incidentData = require('./incidentData');
const { getAvailableLocalModel, generateLocalChatCompletion, extractJsonFromText } = require('./localAiService');

// Cache em memória para evitar chamadas excessivas à API (TTL de 90 segundos)
let autonomousCache = null;
let lastAnalysisTimestamp = 0;
const CACHE_TTL_MS = 90 * 1000;

function buildAutonomousPrompt(newsItems) {
  const topNews = newsItems.slice(0, 20).map((n, i) =>
    `${i + 1}. [${n.source} | ${n.classification || 'REPORTED'}] ${n.title} - ${n.summary || ''}`
  ).join('\n\n');

  return `You are a Chief Epidemiological Intelligence Officer operating in a Situation Room.
Analyze the following incoming news dispatches regarding the biological incident in Irkutsk/Shelekhov (Siberia, Russia):

Dispatches:
${topNews}

Baseline Incident Facts:
- First casualty: Darya Shipilova (28, lab worker at Irkutsk Anti-Plague Institute, deceased Oct 2).
- Quarantined contacts: ~200 people.
- Russian government (Rospotrebnadzor/Kremlin) position: insists initial death was "unspecified pneumonia", denies plague outbreak.
- Disputed/independent reports: investigate if further patients (second, third, fourth, or multiple victims) have died in Shelekhov or Irkutsk hospitals.

Task:
Extract and synthesize the CURRENT situation dynamically. Do NOT hardcode numbers.
1. "deaths": Integer. Compute the total cumulative death count reported across all news dispatches (including official and claimed/disputed). If 1, return 1. If 2, return 2. If 3, 4, 10, 20 or more are reported, return that EXACT integer.
2. "deathStatus": "CONFIRMED" if all are confirmed by official health agencies, or "DISPUTED" if any fatalities are reported by media but denied/withheld by authorities.
3. "deathDetailsEn": Text breakdown (e.g. "1 Official · 1 Disputed" or "1 Official · 4 Reported" or "20 Reported Fatalities").
4. "deathDetailsPt": Text breakdown in Portuguese.
5. "threatAssessment.level": Dynamically scale threat level based on epidemiological findings:
   - 1 fatality, contained: "GUARDED"
   - 2 fatalities or suspected hospital spread: "ELEVATED"
   - 3 to 9 fatalities or hospital cluster: "HIGH"
   - 10+ fatalities or community spread: "CRITICAL"
6. "headline" & "headlinePt": Dynamic 1-line headline summarizing the current death toll and containment state.
7. "newMilestones": Array of chronological milestone objects for any newly identified casualty or major epidemiological change.

Generate a JSON object strictly following this structure:
{
  "kpis": {
    "deaths": 2,
    "deathStatus": "DISPUTED",
    "deathDetailsEn": "1 Official · 1 Disputed",
    "deathDetailsPt": "1 Oficial · 1 Em Apuração",
    "underInvestigation": 2,
    "confirmed": 0,
    "contactsMonitored": 200,
    "secondaryCases": 0,
    "countriesAffected": 1,
    "externalCases": 0
  },
  "threatAssessment": {
    "level": "ELEVATED",
    "headline": "Dynamic English headline matching extracted deaths and threat level",
    "headlinePt": "Manchete dinâmica em português correspondente",
    "reasons": {
      "secondaryTransmission": "Suspected in Hospital / Unverified",
      "secondaryTransmissionPt": "Suspeita Hospitalar / Não Confirmada",
      "externalSpread": "None",
      "externalSpreadPt": "Nenhuma",
      "contactsInfected": 0,
      "geographicExpansion": "Shelekhov Satellite Cordon",
      "geographicExpansionPt": "Cordão Sanitário em Shelekhov",
      "quarantine": "Active",
      "quarantinePt": "Ativa"
    }
  },
  "newMilestones": [],
  "shelekhovCordon": {
    "status": "Active Quarantine",
    "statusPt": "Quarentena Ativa",
    "hospitalsAffected": 5,
    "details": "Hospital and containment status"
  }
}

Respond ONLY with valid JSON. No markdown backticks, no preamble.`;
}

/**
 * Chamada à API do Gemini 1.5 Flash para análise estruturada do incidente
 */
async function callGeminiAutonomousAnalyzer(newsItems, apiKey) {
  const prompt = buildAutonomousPrompt(newsItems);
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  });

  if (!response.ok) {
    throw new Error(`Gemini API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
  const cleanJson = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
  return JSON.parse(cleanJson);
}

/**
 * Fallback de NLP Heurístico e Extração Determinística Totalmente Dinâmica
 * Analisa qualquer número de mortes (2ª, 3ª, 4ª, 10ª, 20ª, etc.) via Regex e Expressões Numéricas
 */
function analyzeNewsHeuristically(newsItems) {
  let maxDeathsDetected = 1;
  let isDisputed = false;
  let deathSource = "Despachos Verificados";
  let hasRubioDiplomacy = false;

  // Padrões de ordinais em inglês e português
  const ordinalRules = [
    { regex: /(?:second|segund[ao]|2nd|two|duas|dois)\s*(?:victim|v[íi]tima|death|morte|[óo]bito|patient|paciente|person|pessoa)/i, num: 2 },
    { regex: /(?:third|terceir[ao]|3rd|three|tr[êe]s)\s*(?:victim|v[íi]tima|death|morte|[óo]bito|patient|paciente|person|pessoa)/i, num: 3 },
    { regex: /(?:fourth|quart[ao]|4th|four|quatro)\s*(?:victim|v[íi]tima|death|morte|[óo]bito|patient|paciente|person|pessoa)/i, num: 4 },
    { regex: /(?:fifth|quint[ao]|5th|five|cinco)\s*(?:victim|v[íi]tima|death|morte|[óo]bito|patient|paciente|person|pessoa)/i, num: 5 },
    { regex: /(?:sixth|sext[ao]|6th|six|seis)\s*(?:victim|v[íi]tima|death|morte|[óo]bito|patient|paciente|person|pessoa)/i, num: 6 },
    { regex: /(?:seventh|s[ée]tim[ao]|7th|seven|sete)\s*(?:victim|v[íi]tima|death|morte|[óo]bito|patient|paciente|person|pessoa)/i, num: 7 },
    { regex: /(?:eighth|oitav[ao]|8th|eight|oito)\s*(?:victim|v[íi]tima|death|morte|[óo]bito|patient|paciente|person|pessoa)/i, num: 8 },
    { regex: /(?:ninth|non[ao]|9th|nine|nove)\s*(?:victim|v[íi]tima|death|morte|[óo]bito|patient|paciente|person|pessoa)/i, num: 9 },
    { regex: /(?:tenth|d[ée]cim[ao]|10th|ten|dez)\s*(?:victim|v[íi]tima|death|morte|[óo]bito|patient|paciente|person|pessoa)/i, num: 10 },
    { regex: /(?:twentieth|vig[ée]sim[ao]|20th|twenty|vinte)\s*(?:victim|v[íi]tima|death|morte|[óo]bito|patient|paciente|person|pessoa)/i, num: 20 }
  ];

  // Expressões numéricas para contagem de mortes
  const deathCountPatterns = [
    /(?:death toll|tolls?|número de mortos|total de mortes|número de óbitos)\s*(?:rises to|climbs to|reaches|hits|sobe para|atinge|chega a)?\s*(\d+)/i,
    /(\d+)\s*(?:people|patients|victims|pacientes|pessoas|vítimas|vitimas)?\s*(?:have died|died|dead|killed|morreram|mortos|mortas|óbitos|obitos)/i,
    /(\d+)\s*(?:deaths|fatalities|mortes|óbitos|obitos)/i
  ];

  for (const item of newsItems) {
    const rawText = (item.title || "") + " " + (item.summary || "");
    const text = rawText.toLowerCase();

    // 1. Verificar padrões numéricos diretos (ex: "death toll rises to 15", "4 people died", "20 mortes")
    for (const pattern of deathCountPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const count = parseInt(match[1], 10);
        // Filtrar anos ou números absurdos que não sejam de pacientes
        if (count >= 2 && count <= 500) {
          if (count > maxDeathsDetected) {
            maxDeathsDetected = count;
            deathSource = item.source || deathSource;
            isDisputed = true;
          }
        }
      }
    }

    // 2. Verificar ordinais com flexão de gênero e número
    for (const rule of ordinalRules) {
      if (rule.regex.test(text)) {
        if (rule.num > maxDeathsDetected) {
          maxDeathsDetected = rule.num;
          deathSource = item.source || deathSource;
          isDisputed = true;
        }
      }
    }

    if (text.includes("rubio") || text.includes("marco rubio") || text.includes("state department") || text.includes("trump")) {
      hasRubioDiplomacy = true;
    }
  }

  // Escalonamento dinâmico de ameaça conforme a contagem real de vítimas
  let dynamicThreatLevel = "GUARDED";
  let dynamicHeadline = "No evidence of secondary transmission";
  let dynamicHeadlinePt = "Sem evidência de transmissão secundária";

  if (maxDeathsDetected >= 10) {
    dynamicThreatLevel = "CRITICAL";
    dynamicHeadline = `Critical Outbreak Alert: ${maxDeathsDetected} Fatalities Reported; Severe Containment Measures Active`;
    dynamicHeadlinePt = `Alerta Crítico de Surto: ${maxDeathsDetected} Óbitos Relatados; Medidas Severas de Contenção Ativas`;
  } else if (maxDeathsDetected >= 3) {
    dynamicThreatLevel = "HIGH";
    dynamicHeadline = `High Threat: ${maxDeathsDetected} Fatalities Reported in Regional Hospital Cluster`;
    dynamicHeadlinePt = `Ameaça Alta: ${maxDeathsDetected} Óbitos Relatados em Cluster Hospitalar Regional`;
  } else if (maxDeathsDetected === 2) {
    dynamicThreatLevel = "ELEVATED";
    dynamicHeadline = "Elevated Alert: Second Fatality Reported at Shelekhov Hospital; Russian Authorities Maintain Denial";
    dynamicHeadlinePt = "Alerta Elevado: Segunda Vítima Fatal Relatada no Hospital de Shelekhov; Autoridades Mantêm Negativa";
  }

  const deathDetailsEn = maxDeathsDetected > 1
    ? `1 Official · ${maxDeathsDetected - 1} Reported/Disputed`
    : "1 Official Deceased";
  const deathDetailsPt = maxDeathsDetected > 1
    ? `1 Oficial · ${maxDeathsDetected - 1} em Apuração/Disputados`
    : "1 Óbito Oficial";

  const result = {
    kpis: {
      deaths: maxDeathsDetected,
      deathStatus: isDisputed ? "DISPUTED" : "CONFIRMED",
      deathDetailsEn,
      deathDetailsPt,
      underInvestigation: Math.max(2, maxDeathsDetected),
      confirmed: 0,
      contactsMonitored: Math.max(200, maxDeathsDetected * 70),
      secondaryCases: Math.max(0, maxDeathsDetected - 1),
      countriesAffected: 1,
      externalCases: 0
    },
    threatAssessment: {
      level: dynamicThreatLevel,
      headline: dynamicHeadline,
      headlinePt: dynamicHeadlinePt,
      reasons: {
        secondaryTransmission: maxDeathsDetected > 1 ? "Suspected in Hospital / Under Investigation" : "None",
        secondaryTransmissionPt: maxDeathsDetected > 1 ? "Suspeita Hospitalar / Em Apuração" : "Nenhuma",
        externalSpread: "None",
        externalSpreadPt: "Nenhuma",
        contactsInfected: maxDeathsDetected > 1 ? (maxDeathsDetected - 1) : 0,
        geographicExpansion: maxDeathsDetected > 1 ? "Shelekhov Satellite Cordon" : "None",
        geographicExpansionPt: maxDeathsDetected > 1 ? "Cordão Sanitário em Shelekhov" : "Nenhuma",
        quarantine: "Active (Hospitals Locked Down)",
        quarantinePt: "Ativa (Hospitais sob Quarentena)"
      }
    },
    newMilestones: [],
    shelekhovCordon: {
      status: "Active Quarantine",
      statusPt: "Quarentena Ativa",
      hospitalsAffected: 5,
      details: "Shelekhov District Hospital and regional clinics isolated under sanitary cordon"
    }
  };

  if (maxDeathsDetected > 1) {
    const milestoneTitle = maxDeathsDetected === 2
      ? "Second Fatality Reported at Shelekhov Hospital"
      : `Cumulative Fatalities Rise to ${maxDeathsDetected} Patients`;
    const milestoneTitlePt = maxDeathsDetected === 2
      ? "Segunda Morte Relatada no Hospital de Shelekhov"
      : `Total de Vítimas Fatais Sobe para ${maxDeathsDetected} Pacientes`;

    result.newMilestones.push({
      date: "2026-10-06",
      dateLabel: "Oct 06",
      title: milestoneTitle,
      titlePt: milestoneTitlePt,
      source: deathSource,
      classification: "DISPUTED",
      description: `Dispatches report cumulative casualties have reached ${maxDeathsDetected} individuals under observation or hospital quarantine; authorities maintain strict information cordon.`,
      descriptionPt: `Despachos reportam que o total de vítimas fatais atingiu ${maxDeathsDetected} indivíduos sob observação ou quarentena hospitalar; autoridades mantêm rigoroso controle informativo.`
    });
  }

  if (hasRubioDiplomacy) {
    result.newMilestones.push({
      date: "2026-10-06",
      dateLabel: "Oct 06",
      title: "US State Dept & International Monitoring Activated",
      titlePt: "Monitoramento Ativado pelo Departamento de Estado dos EUA",
      source: "Daily Mail / State Dept Wire",
      classification: "OFFICIAL",
      description: "Secretary of State Marco Rubio confirms US surveillance of Siberian biological reports; bilateral diplomatic exchanges on biosecurity containment.",
      descriptionPt: "Secretário de Estado Marco Rubio confirma vigilância americana sobre relatórios biológicos na Sibéria; trocas diplomáticas bilaterais sobre contenção de biossegurança."
    });
  }

  return result;
}

/**
 * Obtém a síntese epidemiológica autônoma dinâmica e mescla com os dados base
 */
async function getAutonomousIncidentState(newsItems, forceRefresh = false) {
  const now = Date.now();
  const apiKey = process.env.GEMINI_API_KEY;

  if (!forceRefresh && autonomousCache && (now - lastAnalysisTimestamp < CACHE_TTL_MS)) {
    return autonomousCache;
  }

  let extracted = null;

  // 1. Tentar primeiro via LLM Local (LM Studio) para economizar créditos
  const localModel = await getAvailableLocalModel();
  if (localModel) {
    try {
      const prompt = buildAutonomousPrompt(newsItems);
      const rawText = await generateLocalChatCompletion(prompt, { max_tokens: 800 });
      const parsed = extractJsonFromText(rawText);
      if (parsed && parsed.kpis && parsed.threatAssessment) {
        extracted = parsed;
        extracted.engine = `Local AI (${localModel})`;
        console.log(`[Autonomous Extractor] Extração concluída com sucesso via LLM Local: ${localModel}`);
      }
    } catch (err) {
      console.warn('[Autonomous Extractor] Falha no LLM local:', err.message);
    }
  }

  // 2. Se local não respondeu e houver chave do Gemini, tentar sintetizar via Gemini
  if (!extracted && apiKey) {
    try {
      extracted = await callGeminiAutonomousAnalyzer(newsItems, apiKey);
      extracted.engine = "Gemini 1.5 Flash (Autonomous Situation Room)";
    } catch (err) {
      console.warn(`[Autonomous Extractor] Falha no Gemini API (${err.message}), utilizando fallback NLP heurístico.`);
      extracted = analyzeNewsHeuristically(newsItems);
      extracted.engine = "Deterministic NLP Engine (Heuristic Fallback)";
    }
  } else if (!extracted) {
    extracted = analyzeNewsHeuristically(newsItems);
    extracted.engine = "Deterministic NLP Engine (Heuristic Fallback)";
  }

  // Clone dos dados base do incidente para manter integridade
  const baseIncident = JSON.parse(JSON.stringify(incidentData.incident));

  // Mesclagem dos KPIs dinâmicos
  if (extracted.kpis) {
    baseIncident.kpis = {
      ...baseIncident.kpis,
      ...extracted.kpis
    };
    baseIncident.deathStatus = extracted.kpis.deathStatus;
    baseIncident.deathDetailsEn = extracted.kpis.deathDetailsEn;
    baseIncident.deathDetailsPt = extracted.kpis.deathDetailsPt;
  }

  // Mesclagem do Nível de Ameaça e Justificativas
  if (extracted.threatAssessment) {
    baseIncident.threatAssessment = {
      ...baseIncident.threatAssessment,
      level: extracted.threatAssessment.level || baseIncident.threatAssessment.level,
      headline: extracted.threatAssessment.headline || baseIncident.threatAssessment.headline,
      headlinePt: extracted.threatAssessment.headlinePt || baseIncident.threatAssessment.headlinePt,
      reasons: {
        ...baseIncident.threatAssessment.reasons,
        ...(extracted.threatAssessment.reasons || {})
      }
    };
  }

  // Injeção de novos marcos na Timeline se ainda não existirem
  if (extracted.newMilestones && Array.isArray(extracted.newMilestones)) {
    for (const milestone of extracted.newMilestones) {
      const exists = baseIncident.timeline.some(t =>
        t.title.toLowerCase().includes(milestone.title.toLowerCase().slice(0, 20)) ||
        t.date === milestone.date && t.classification === milestone.classification
      );
      if (!exists) {
        // Insere no topo ou na posição cronológica correta
        baseIncident.timeline.unshift(milestone);
      }
    }
  }

  // Atualização dos pontos de monitoramento com Shelekhov Hospital e Cordão Sanitário
  const hasShelekhovPoint = baseIncident.monitoringPoints.some(p => p.id === "shelekhov-cordon-hospital");
  if (!hasShelekhovPoint) {
    baseIncident.monitoringPoints.push({
      id: "shelekhov-cordon-hospital",
      name: "Hospital Distrital de Shelekhov (Zona de Infecção)",
      nameEn: "Shelekhov District Hospital (Infection Cordon)",
      layer: "hospitals",
      lat: 52.2045,
      lng: 104.1011,
      status: "critical",
      statusText: "Cordão Epidêmico Rigoroso (5 Hospitais)",
      statusTextEn: "Strict Epidemic Cordon (5 Hospitals)",
      details: "Centro de Assistência e Resgate. Quarentena epidêmica rigorosa para ~200 funcionários e pacientes; relato de 2º óbito sob apuração.",
      detailsEn: "Medical Assistance and Rescue Centre. Strict epidemic quarantine of ~200 staff and patients; reported 2nd fatality under investigation."
    });
  }

  const hasBaikalskPoint = baseIncident.monitoringPoints.some(p => p.id === "baikalsk-warning-point");
  if (!hasBaikalskPoint) {
    baseIncident.monitoringPoints.push({
      id: "baikalsk-warning-point",
      name: "Baikalsk (Aviso de Trânsito / Margem do Baikal)",
      nameEn: "Baikalsk (Transit Warning / Lake Baikal)",
      layer: "incident",
      lat: 51.5208,
      lng: 104.1500,
      status: "warning",
      statusText: "Alerta Municipal de Deslocamento",
      statusTextEn: "Municipal Travel Advisory",
      details: "Prefeitura emitiu e apagou alerta recomendando evitar deslocamentos a Shelekhov.",
      detailsEn: "Municipal administration issued and deleted post advising residents to avoid travel to Shelekhov."
    });
  }

  // Informações de Cordon e Metadados de IA
  baseIncident.autonomousAnalysis = {
    lastAnalyzed: new Date().toISOString(),
    engine: extracted.engine,
    shelekhovCordon: extracted.shelekhovCordon
  };

  autonomousCache = baseIncident;
  lastAnalysisTimestamp = now;

  return baseIncident;
}

module.exports = {
  getAutonomousIncidentState,
  clearCache: () => {
    autonomousCache = null;
    lastAnalysisTimestamp = 0;
  }
};
