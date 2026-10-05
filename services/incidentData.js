/**
 * Dados estruturados do incidente de Irkutsk (Outubro 2026) e monitoramento internacional
 */
module.exports = {
  incident: {
    title: "Alerta Biológico: Incidente no Instituto Anti-Peste de Irkutsk (Sibéria, Rússia)",
    dateReported: "Outubro 2026 (Início dos sintomas: ~25-29 de Setembro / Óbito: 1-2 de Outubro de 2026)",
    location: {
      city: "Irkutsk / Shelekhov",
      region: "Oblast de Irkutsk, Sibéria, Federação Russa",
      coordinates: [52.2869, 104.3050],
      facility: "Instituto de Pesquisa Anti-Peste de Irkutsk da Sibéria e Extremo Oriente"
    },
    riskAssessment: {
      globalSpreadStatus: "NENHUMA DISSEMINAÇÃO INTERNACIONAL DETECTADA",
      globalSpreadLevel: "Contido Localmente / Vigilância Internacional Ativa",
      alertLevel: "ELEVADO REGIONAL / ATENÇÃO GLOBAL",
      containmentStatus: "Quarentena Hospitalar e Isolamento de Contatos em Andamento"
    },
    keyMetrics: {
      quarantinedContacts: "190 - 200 pessoas sob observação médica",
      hospitalWardsIsolated: "Hospital Distrital de Shelekhov e unidades médicas de Irkutsk",
      officialClassification: "Pneumonia de etiologia desconhecida (Rospotrebnadzor)",
      suspectedPathogen: "Yersinia pestis (Peste pneumônica) - Investigado por mídias independentes",
      criminalInvestigation: "Aberta (Art. 236 do Código Penal Russo - Violação de regras sanitárias)"
    },
    timeline: [
      {
        date: "25 de Setembro de 2026",
        title: "Possível Incidente no Laboratório",
        description: "Relatos independentes (incluindo Lyudi Baikala) apontam que a técnica Darya Shipilova (28 anos) teria sofrido exposição acidental após quebra de tubo de ensaio no Instituto Anti-Peste de Irkutsk."
      },
      {
        date: "29 de Setembro de 2026",
        title: "Hospitalização com Quadro Grave",
        description: "A funcionária é internada no Hospital Distrital de Shelekhov apresentando insuficiência respiratória severa e pneumonia fulminante."
      },
      {
        date: "1–2 de Outubro de 2026",
        title: "Confirmação do Óbito",
        description: "Darya Shipilova falece no hospital. As autoridades locais acionam protocolos de quarentena de emergência e isolam as alas hospitalares."
      },
      {
        date: "3 de Outubro de 2026",
        title: "Isolamento de Contatos e Investigação Criminal",
        description: "Cerca de 200 pessoas (médicos, enfermeiros, familiares e funcionários do laboratório) são colocadas em quarentena estrita. O Comitê de Investigação da Rússia abre inquérito criminal."
      },
      {
        date: "4 de Outubro de 2026",
        title: "Posicionamento do Rospotrebnadzor e Dra. Anna Popova",
        description: "A chefe da vigilância sanitária russa viaja emergencialmente a Irkutsk para comandar a Comissão Sanitária Anti-Epidêmica. Declaração oficial nega quebra de contenção ou peste, classificando como 'pneumonia de etiologia desconhecida'."
      },
      {
        date: "5 de Outubro de 2026",
        title: "Monitoramento pelo Departamento de Estado dos EUA e OMS",
        description: "Autoridades internacionais, incluindo o Secretário de Estado Marco Rubio e analistas da OMS, afirmam estar monitorando ativamente a situação para garantir transparência e avaliar riscos de biossegurança."
      }
    ],
    monitoringPoints: [
      {
        id: "irkutsk",
        name: "Irkutsk & Shelekhov (Foco do Alerta)",
        lat: 52.2869,
        lng: 104.3050,
        status: "critical",
        statusText: "Quarentena & Isolamento de Contatos",
        details: "~200 pessoas sob observação médica; alas hospitalares isoladas em Shelekhov e Irkutsk."
      },
      {
        id: "moscow",
        name: "Moscou (Centro Regulatório)",
        lat: 55.7558,
        lng: 37.6173,
        status: "warning",
        statusText: "Vigilância Rospotrebnadzor",
        details: "Comissão Sanitária Anti-Epidêmica centralizando laudos laboratoriais e relatórios de contenção."
      },
      {
        id: "geneva",
        name: "Genebra (Sede da OMS / WHO)",
        lat: 46.2044,
        lng: 6.1432,
        status: "info",
        statusText: "Monitoramento de Biossegurança",
        details: "Organização Mundial da Saúde acompanhando através da rede global de alerta e resposta a surtos (GOARN)."
      },
      {
        id: "washington",
        name: "Washington D.C. (EUA)",
        lat: 38.9072,
        lng: -77.0369,
        status: "info",
        statusText: "Acompanhamento Governamental",
        details: "Declaração de atenção redobrada emitida em 5 de outubro; avaliação de risco para a população geral considerada baixa/localizada."
      },
      {
        id: "beijing",
        name: "Pequim (Fronteira Norte / Ásia)",
        lat: 39.9042,
        lng: 116.4074,
        status: "normal",
        statusText: "Vigilância Sanitária Portuária",
        details: "Vigilância em portos e rotas terrestres transfronteiriças da Sibéria; sem restrições ativas de viagem até o momento."
      },
      {
        id: "ulaanbaatar",
        name: "Ulan Bator (Mongólia)",
        lat: 47.8864,
        lng: 106.9057,
        status: "warning",
        statusText: "Monitoramento de Fronteira Terrestre",
        details: "Proximidade geográfica com o Lago Baikal e Irkutsk; triagem sanitária de trânsito regional reforçada."
      }
    ]
  }
};
