/**
 * Motor Autônomo de Inteligência Epidemiológica (Gemini 1.5 Flash + Fallback Heurístico)
 * Analisa o fluxo contínuo de notícias e atualiza autonomamente o estado da situação,
 * incluindo contagem de mortes (oficiais vs alegadas), nível de ameaça, justificativas,
 * marcos cronológicos e zona de contenção de Shelekhov.
 */

const incidentData = require('./incidentData');

// Cache em memória para evitar chamadas excessivas à API (TTL de 90 segundos)
let autonomousCache = null;
let lastAnalysisTimestamp = 0;
const CACHE_TTL_MS = 90 * 1000;

/**
 * Chamada à API do Gemini 1.5 Flash para análise estruturada do incidente
 */
async function callGeminiAutonomousAnalyzer(newsItems, apiKey) {
  const topNews = newsItems.slice(0, 20).map((n, i) =>
    `${i + 1}. [${n.source} | ${n.classification || 'REPORTED'}] ${n.title} - ${n.summary || ''}`
  ).join('\n\n');

  const prompt = `You are a Chief Epidemiological Intelligence Officer operating in a Situation Room.
Analyze the following incoming news dispatches regarding the biological incident in Irkutsk/Shelekhov (Siberia, Russia):

Dispatches:
${topNews}

Baseline Incident Facts:
- First casualty: Darya Shipilova (28, lab worker at Irkutsk Anti-Plague Institute, deceased Oct 2).
- Quarantined contacts: ~200 people.
- Russian government (Rospotrebnadzor/Kremlin) position: insists death was "unspecified pneumonia", denies plague outbreak.
- Local/independent media & international reports: claim a second patient has died at Shelekhov District Hospital; five hospitals placed in quarantine; local government in Baikalsk issued/deleted travel warning; US State Dept monitoring.

Generate a JSON object strictly following this structure:
{
  "kpis": {
    "deaths": 2,
    "deathStatus": "DISPUTED",
    "deathDetailsEn": "1 Official (Lab Worker) · 1 Disputed (Shelekhov Hospital)",
    "deathDetailsPt": "1 Oficial (Técnica Lab) · 1 Em Apuração (Hospital de Shelekhov)",
    "underInvestigation": 2,
    "confirmed": 0,
    "contactsMonitored": 200,
    "secondaryCases": 0,
    "countriesAffected": 1,
    "externalCases": 0
  },
  "threatAssessment": {
    "level": "ELEVATED",
    "headline": "Elevated Alert: Second Fatality Reported at Shelekhov Hospital; Russian Authorities Maintain Denial",
    "headlinePt": "Alerta Elevado: Segunda Vítima Fatal Relatada no Hospital de Shelekhov; Autoridades Mantêm Negativa",
    "reasons": {
      "secondaryTransmission": "Suspected in Hospital / Unverified",
      "secondaryTransmissionPt": "Suspeita Hospitalar / Não Confirmada",
      "externalSpread": "None",
      "externalSpreadPt": "Nenhuma",
      "contactsInfected": 0,
      "geographicExpansion": "Shelekhov Satellite Cordon",
      "geographicExpansionPt": "Cordão Sanitário em Shelekhov",
      "quarantine": "Active (5 Hospitals Locked Down)",
      "quarantinePt": "Ativa (5 Hospitais em Quarentena)"
    }
  },
  "newMilestones": [
    {
      "date": "2026-10-06",
      "dateLabel": "Oct 06",
      "title": "Second Fatality Reported at Shelekhov Hospital",
      "titlePt": "Segunda Morte Relatada no Hospital de Shelekhov",
      "source": "Daily Mail / Local Russian Media",
      "classification": "DISPUTED",
      "description": "Reports claim a second patient died from plague-like symptoms at Shelekhov District Hospital; Kremlin disputes diagnosis and maintains unspecified pneumonia classification.",
      "descriptionPt": "Relatos afirmam que um segundo paciente faleceu com sintomas de peste no Hospital Distrital de Shelekhov; Kremlin contesta diagnóstico e mantém classificação de pneumonia inespecífica."
    },
    {
      "date": "2026-10-06",
      "dateLabel": "Oct 06",
      "title": "US State Dept & International Monitoring Activated",
      "titlePt": "Monitoramento Ativado pelo Departamento de Estado dos EUA",
      "source": "Daily Mail / State Dept Wire",
      "classification": "OFFICIAL",
      "description": "Secretary of State Marco Rubio confirms US surveillance of Siberian biological reports; bilateral diplomatic exchanges on biosecurity containment.",
      "descriptionPt": "Secretário de Estado Marco Rubio confirma vigilância americana sobre relatórios biológicos na Sibéria; trocas diplomáticas bilaterais sobre contenção de biossegurança."
    }
  ],
  "shelekhovCordon": {
    "status": "Active Quarantine",
    "statusPt": "Quarentena Ativa",
    "hospitalsAffected": 5,
    "details": "City Clinical Hospitals No1, No3, No10 and Ivano-Matreninskaya Children Hospital cordoned off for 3-week observation"
  }
}

Respond ONLY with valid JSON. No markdown backticks, no preamble.`;

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
 * Fallback de NLP Heurístico e Extração Determinística
 * Executado quando a API do Gemini não estiver acessível ou sem chave em testes locais.
 */
function analyzeNewsHeuristically(newsItems) {
  let hasSecondDeathClaim = false;
  let secondDeathSource = "Daily Mail / Mídia Regional";
  let hasRubioDiplomacy = false;

  for (const item of newsItems) {
    const text = ((item.title || "") + " " + (item.summary || "")).toLowerCase();

    if (
      text.includes("second victim") ||
      text.includes("second death") ||
      text.includes("segunda vítima") ||
      text.includes("segunda vitima") ||
      text.includes("second person has died") ||
      text.includes("segundo óbito") ||
      text.includes("segundo obito") ||
      text.includes("two dead") ||
      text.includes("duas mortes")
    ) {
      hasSecondDeathClaim = true;
      secondDeathSource = item.source || secondDeathSource;
    }

    if (text.includes("rubio") || text.includes("marco rubio") || text.includes("state department") || text.includes("trump")) {
      hasRubioDiplomacy = true;
    }
  }

  const result = {
    kpis: {
      deaths: hasSecondDeathClaim ? 2 : 1,
      deathStatus: hasSecondDeathClaim ? "DISPUTED" : "CONFIRMED",
      deathDetailsEn: hasSecondDeathClaim ? "1 Official (Lab Worker) · 1 Disputed (Shelekhov Hospital)" : "1 Official Deceased",
      deathDetailsPt: hasSecondDeathClaim ? "1 Oficial (Técnica Lab) · 1 Em Apuração (Hospital de Shelekhov)" : "1 Óbito Oficial",
      underInvestigation: hasSecondDeathClaim ? 2 : 1,
      confirmed: 0,
      contactsMonitored: 200,
      secondaryCases: 0,
      countriesAffected: 1,
      externalCases: 0
    },
    threatAssessment: {
      level: hasSecondDeathClaim ? "ELEVATED" : "GUARDED",
      headline: hasSecondDeathClaim
        ? "Elevated Alert: Second Fatality Reported at Shelekhov Hospital; Russian Authorities Maintain Denial"
        : "No evidence of secondary transmission",
      headlinePt: hasSecondDeathClaim
        ? "Alerta Elevado: Segunda Vítima Fatal Relatada no Hospital de Shelekhov; Autoridades Mantêm Negativa"
        : "Sem evidência de transmissão secundária",
      reasons: {
        secondaryTransmission: hasSecondDeathClaim ? "Suspected in Hospital / Unverified" : "None",
        secondaryTransmissionPt: hasSecondDeathClaim ? "Suspeita Hospitalar / Não Confirmada" : "Nenhuma",
        externalSpread: "None",
        externalSpreadPt: "Nenhuma",
        contactsInfected: 0,
        geographicExpansion: hasSecondDeathClaim ? "Shelekhov Satellite Cordon" : "None",
        geographicExpansionPt: hasSecondDeathClaim ? "Cordão Sanitário em Shelekhov" : "Nenhuma",
        quarantine: hasSecondDeathClaim ? "Active (5 Hospitals Locked Down)" : "Active",
        quarantinePt: hasSecondDeathClaim ? "Ativa (5 Hospitais em Quarentena)" : "Ativa"
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

  if (hasSecondDeathClaim) {
    result.newMilestones.push({
      date: "2026-10-06",
      dateLabel: "Oct 06",
      title: "Second Fatality Reported at Shelekhov Hospital",
      titlePt: "Segunda Morte Relatada no Hospital de Shelekhov",
      source: secondDeathSource,
      classification: "DISPUTED",
      description: "Reports claim a second patient died from plague-like symptoms at Shelekhov District Hospital; Kremlin disputes diagnosis and maintains unspecified pneumonia classification.",
      descriptionPt: "Relatos afirmam que um segundo paciente faleceu com sintomas de peste no Hospital Distrital de Shelekhov; Kremlin contesta diagnóstico e mantém classificação de pneumonia inespecífica."
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

  if (apiKey) {
    try {
      extracted = await callGeminiAutonomousAnalyzer(newsItems, apiKey);
      extracted.engine = "Gemini 1.5 Flash (Autonomous Situation Room)";
    } catch (err) {
      console.warn(`[Autonomous Extractor] Falha no Gemini API (${err.message}), utilizando fallback NLP heurístico.`);
      extracted = analyzeNewsHeuristically(newsItems);
      extracted.engine = "Deterministic NLP Engine (Heuristic Fallback)";
    }
  } else {
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
