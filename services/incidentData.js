/**
 * Dados estruturados do incidente de Irkutsk (Outubro 2026) e monitoramento internacional
 * Global Epidemiological Intelligence / Outbreak Intelligence
 */
module.exports = {
  incident: {
    title: "Alerta Biológico: Incidente no Instituto Anti-Peste de Irkutsk (Sibéria, Rússia)",
    titleEn: "Biological Alert: Incident at Irkutsk Anti-Plague Institute (Siberia, Russia)",
    dateReported: "Outubro 2026 (Início dos sintomas: ~25-29 de Setembro / Óbito: 1-2 de Outubro de 2026)",
    dateReportedEn: "October 2026 (Onset: ~Sept 25-29 / Deceased: Oct 1-2, 2026)",
    location: {
      city: "Irkutsk / Shelekhov",
      region: "Oblast de Irkutsk, Sibéria, Federação Russa",
      coordinates: [52.2869, 104.3050],
      facility: "Instituto de Pesquisa Anti-Peste de Irkutsk da Sibéria e Extremo Oriente",
      facilityEn: "Irkutsk Anti-Plague Research Institute of Siberia and Far East"
    },
    riskAssessment: {
      globalSpreadStatus: "NENHUMA DISSEMINAÇÃO INTERNACIONAL DETECTADA",
      globalSpreadStatusEn: "NO EXTERNAL SPREAD DETECTED",
      globalSpreadLevel: "Contido Localmente / Vigilância Internacional Ativa",
      globalSpreadLevelEn: "Locally Contained / Active International Surveillance",
      alertLevel: "ELEVADO REGIONAL / ATENÇÃO GLOBAL",
      alertLevelEn: "REGIONAL ELEVATED / GLOBAL WATCH",
      containmentStatus: "Quarentena Hospitalar e Isolamento de Contatos em Andamento",
      containmentStatusEn: "Hospital Quarantine and Contact Isolation Active"
    },
    keyMetrics: {
      quarantinedContacts: "190 - 200 pessoas sob observação médica",
      quarantinedContactsEn: "190 - 200 people under medical observation",
      hospitalWardsIsolated: "Hospital Distrital de Shelekhov e unidades médicas de Irkutsk",
      hospitalWardsIsolatedEn: "Shelekhov District Hospital and Irkutsk regional wards",
      officialClassification: "Pneumonia de etiologia desconhecida (Rospotrebnadzor)",
      officialClassificationEn: "Pneumonia of unknown etiology (Rospotrebnadzor)",
      suspectedPathogen: "Yersinia pestis (Peste pneumônica) - Investigado por mídias independentes",
      suspectedPathogenEn: "Yersinia pestis (Pneumonic plague) - Investigated by independent media",
      criminalInvestigation: "Aberta (Art. 236 do Código Penal Russo - Violação de regras sanitárias)",
      criminalInvestigationEn: "Opened (Art. 236 Criminal Code RF - Violation of sanitary rules)"
    },
    threatAssessment: {
      level: "GUARDED",
      scale: ["LOW", "GUARDED", "ELEVATED", "HIGH", "CRITICAL"],
      headline: "No evidence of secondary transmission",
      headlinePt: "Sem evidência de transmissão secundária",
      reasons: {
        secondaryTransmission: "None",
        secondaryTransmissionPt: "Nenhuma",
        externalSpread: "None",
        externalSpreadPt: "Nenhuma",
        contactsInfected: 0,
        geographicExpansion: "None",
        geographicExpansionPt: "Nenhuma",
        quarantine: "Active",
        quarantinePt: "Ativa"
      }
    },
    kpis: {
      confirmed: 0,
      underInvestigation: 1,
      deaths: 1,
      contactsMonitored: 200,
      secondaryCases: 0,
      countriesAffected: 1,
      externalCases: 0
    },
    outbreakEvolution: [
      {
        date: "2026-09-25",
        dateLabel: "Sep 25",
        title: "Laboratory Exposure",
        titlePt: "Exposição Laboratorial",
        confirmed: 0,
        suspected: 1,
        deaths: 0,
        contacts: 0,
        secondary: 0,
        locations: 1,
        status: "Initial Incident",
        description: "Accidental vial breach at Anti-Plague Institute bio-block"
      },
      {
        date: "2026-09-29",
        dateLabel: "Sep 29",
        title: "Hospital Admission",
        titlePt: "Internação Hospitalar",
        confirmed: 0,
        suspected: 1,
        deaths: 0,
        contacts: 14,
        secondary: 0,
        locations: 1,
        status: "Clinical Care",
        description: "Admission to Shelekhov District Hospital with severe acute pneumonia"
      },
      {
        date: "2026-10-02",
        dateLabel: "Oct 02",
        title: "Fatal Outcome & Quarantine Trigger",
        titlePt: "Óbito e Disparo de Quarentena",
        confirmed: 0,
        suspected: 1,
        deaths: 1,
        contacts: 45,
        secondary: 0,
        locations: 1,
        status: "Isolation Order",
        description: "Patient passes away. Medical ward isolation protocols immediately enacted"
      },
      {
        date: "2026-10-04",
        dateLabel: "Oct 04",
        title: "Comprehensive Contact Tracing",
        titlePt: "Rastreio Abrangente de Contatos",
        confirmed: 0,
        suspected: 1,
        deaths: 1,
        contacts: 195,
        secondary: 0,
        locations: 1,
        status: "Containment Ring",
        description: "Rospotrebnadzor Commission arrives; ~200 contacts placed under prophylactic watch"
      },
      {
        date: "2026-10-06",
        dateLabel: "Oct 06",
        title: "Prophylactic Surveillance Active",
        titlePt: "Vigilância Profilática Ativa",
        confirmed: 0,
        suspected: 1,
        deaths: 1,
        contacts: 200,
        secondary: 0,
        locations: 1,
        status: "Zero Secondary Cases",
        description: "All monitored contacts remain asymptomatic. Zero secondary contagion confirmed"
      }
    ],
    rumorWatch: [
      {
        topic: "#RussiaPlague",
        platform: "TikTok / X",
        virality: "High",
        credibility: "Low",
        corroboration: "None",
        trend: "rising",
        note: "Viral claims exaggerating Siberian containment breach without scientific evidence."
      },
      {
        topic: "#Irkutsk",
        platform: "TikTok / VK",
        virality: "High",
        credibility: "Medium",
        corroboration: "Partial",
        trend: "rising",
        note: "Local accounts discussing hospital cordon in Shelekhov and presence of federal sanitarians."
      },
      {
        topic: "#DaryaShipilova",
        platform: "Web / Telegram",
        virality: "Medium",
        credibility: "High",
        corroboration: "Verified",
        trend: "stable",
        note: "Reports concerning the deceased 28-year-old laboratory technician; memorial references."
      },
      {
        topic: "#SiberiaOutbreak",
        platform: "Reddit OSINT",
        virality: "Moderate",
        credibility: "Low",
        corroboration: "None",
        trend: "stable",
        note: "Speculative threads conflating historic plague reservoirs with active contagion."
      },
      {
        topic: "#QuarentenaRússia",
        platform: "Lusophone Web",
        virality: "Moderate",
        credibility: "Medium",
        corroboration: "Partial",
        trend: "rising",
        note: "International summaries tracking Russian sanitary notifications."
      }
    ],
    internationalSurveillance: [
      {
        agency: "World Health Organization (WHO / GOARN)",
        status: "Active Monitoring",
        level: "info",
        assessment: "Evaluates global risk as Low. No international cross-border transmission detected.",
        lastStatement: "October 05, 2026"
      },
      {
        agency: "United States (Dept of State / CDC)",
        status: "Diplomatic Watch",
        level: "info",
        assessment: "Monitoring biosafety protocol compliance and transparency in Siberia.",
        lastStatement: "October 05, 2026"
      },
      {
        agency: "China (GACC / Northern Customs)",
        status: "Port Screening Active",
        level: "normal",
        assessment: "Routine entry thermal checks at Manzhouli & Harbin. Normal freight flow.",
        lastStatement: "October 04, 2026"
      },
      {
        agency: "Mongolia (NCZD / Border Health)",
        status: "Heightened Vigilance",
        level: "warning",
        assessment: "Enhanced health screening on Trans-Siberian corridor and Altanbulag border.",
        lastStatement: "October 05, 2026"
      },
      {
        agency: "European Union (ECDC)",
        status: "Informational Review",
        level: "normal",
        assessment: "Reviewing regional reports. No recommendations for travel restrictions.",
        lastStatement: "October 04, 2026"
      }
    ],
    biosecurity: {
      facility: "Irkutsk Anti-Plague Research Institute of Siberia and the Far East",
      classification: "Federal State Research Institution / BSL-3 Pathogen Repository",
      founded: "1934 (Historic Siberian Plague Surveillance Center)",
      agentUnderInvestigation: "Yersinia pestis (Pneumonic plague strain)",
      officialPosition: "Rospotrebnadzor: 'Pneumonia of unknown etiology'; denies physical breach of laboratory containment.",
      independentReporting: "Lyudi Baikala / Reuters reports: technician exposed during broken test tube incident around Sept 25.",
      legalAction: "Russian Investigative Committee opened criminal case under Art. 236 RF CC (violation of sanitary rules).",
      containmentMeasures: "Deep biological disinfection of Institute facilities; strictly isolated hospital wards in Shelekhov."
    },
    borderMonitoring: [
      {
        id: "mongolia",
        region: "Mongolia Border (Altanbulag)",
        regionPt: "Fronteira com Mongólia (Altanbulag)",
        status: "Heightened Check",
        statusPt: "Triagem Reforçada",
        tagClass: "tag-unverified",
        details: "Thermal and clinical screening at southern Baikal land crossing. Trans-Siberian freight inspection maintained.",
        detailsPt: "Triagem térmica e clínica na travessia terrestre ao sul do Baikal. Inspeção de cargas na Transiberiana mantida."
      },
      {
        id: "china",
        region: "China Border (Manzhouli / Harbin)",
        regionPt: "Fronteira com a China (Manzhouli / Harbin)",
        status: "Customs Surveillance",
        statusPt: "Vigilância Aduaneira",
        tagClass: "tag-official",
        details: "Customs port health controls operational. Entry declarations required; normal cross-border trade without bans.",
        detailsPt: "Controles sanitários portuários aduaneiros operacionais. Declarações exigidas; fluxo normal sem proibições."
      },
      {
        id: "russia",
        region: "Russian Domestic Corridors",
        regionPt: "Corredores Domésticos Russos",
        status: "Local Cordon Only",
        statusPt: "Cordão Local Restrito",
        tagClass: "tag-confirmed",
        details: "Cordon restricted strictly to Shelekhov hospital and Institute wards. Irkutsk Oblast civilian transit remains open.",
        detailsPt: "Cordão restrito estritamente ao hospital de Shelekhov e Instituto. Trânsito civil no Oblast de Irkutsk permanece liberado."
      },
      {
        id: "neighboring",
        region: "Neighboring Siberian Regions (Buryatia / Zabaykalsky)",
        regionPt: "Regiões Vizinhas da Sibéria (Buriátia / Zabaikalie)",
        status: "Passive Monitoring",
        statusPt: "Monitoramento Passivo",
        tagClass: "tag-confirmed",
        details: "Regional healthcare networks in Ulan-Ude and Chita placed on passive pneumonia alert; zero clinical spillover detected.",
        detailsPt: "Redes médicas em Ulan-Ude e Chita sob alerta preventivo de pneumonias; nenhuma disseminação clínica detectada."
      }
    ],
    timeline: [
      {
        date: "25 de Setembro de 2026",
        datePt: "25 Set 2026",
        dateEn: "Sep 25, 2026",
        dateLabel: "Sep 25",
        isoDate: "2026-09-25T08:00:00Z",
        timestamp: 1790323200000,
        title: "Possível Incidente no Laboratório",
        titlePt: "Incidente de Exposição Laboratorial",
        titleEn: "Laboratory Exposure Incident",
        description: "Relatos independentes (incluindo Lyudi Baikala) apontam que a técnica Darya Shipilova (28 anos) teria sofrido exposição acidental após quebra de tubo de ensaio no Instituto Anti-Peste de Irkutsk.",
        descriptionPt: "Relatos independentes apontam que a técnica Darya Shipilova (28 anos) sofreu exposição acidental após quebra de tubo de ensaio no Instituto Anti-Peste de Irkutsk.",
        descriptionEn: "Independent sources report technician Darya Shipilova (28) suffered accidental exposure following a test tube breakage at the Irkutsk Anti-Plague Institute.",
        source: "Lyudi Baikala / Reuters",
        classification: "REPORTED"
      },
      {
        date: "29 de Setembro de 2026",
        datePt: "29 Set 2026",
        dateEn: "Sep 29, 2026",
        dateLabel: "Sep 29",
        isoDate: "2026-09-29T12:00:00Z",
        timestamp: 1790683200000,
        title: "Hospitalização com Quadro Grave",
        titlePt: "Internação com Insuficiência Respiratória",
        titleEn: "Severe Symptoms & Admission",
        description: "A funcionária é internada no Hospital Distrital de Shelekhov apresentando insuficiência respiratória severa e pneumonia fulminante.",
        descriptionPt: "A funcionária é internada no Hospital Distrital de Shelekhov apresentando insuficiência respiratória severa e pneumonia fulminante.",
        descriptionEn: "The employee is admitted to Shelekhov District Hospital presenting severe respiratory distress and fulminant pneumonia.",
        source: "Shelekhov Hospital Records",
        classification: "CONFIRMED"
      },
      {
        date: "1–2 de Outubro de 2026",
        datePt: "01–02 Out 2026",
        dateEn: "Oct 01–02, 2026",
        dateLabel: "Oct 01",
        isoDate: "2026-10-01T18:00:00Z",
        timestamp: 1790877600000,
        title: "Confirmação do Óbito",
        titlePt: "Confirmação do Óbito e Ordem de Quarentena",
        titleEn: "Fatal Outcome & Quarantine Order",
        description: "Darya Shipilova falece no hospital. As autoridades locais acionam protocolos de quarentena de emergência e isolam as alas hospitalares.",
        descriptionPt: "Darya Shipilova falece no hospital. As autoridades locais acionam protocolos de quarentena de emergência e isolam as alas hospitalares.",
        descriptionEn: "Darya Shipilova passes away. Local authorities trigger emergency quarantine protocols and isolate hospital wings.",
        source: "Regional Health Ministry",
        classification: "CONFIRMED"
      },
      {
        date: "3 de Outubro de 2026",
        datePt: "03 Out 2026",
        dateEn: "Oct 03, 2026",
        dateLabel: "Oct 03",
        isoDate: "2026-10-03T09:00:00Z",
        timestamp: 1791018000000,
        title: "Isolamento de Contatos e Investigação Criminal",
        titlePt: "Isolamento de Contatos e Investigação Criminal",
        titleEn: "Contact Isolation & Criminal Inquiry",
        description: "Cerca de 200 pessoas (médicos, enfermeiros, familiares e funcionários do laboratório) são colocadas em quarentena estrita. O Comitê de Investigação da Rússia abre inquérito criminal.",
        descriptionPt: "Cerca de 200 pessoas (médicos, enfermeiros, familiares e equipe do laboratório) são colocadas em quarentena estrita. Comitê de Investigação abre inquérito criminal sob Art. 236.",
        descriptionEn: "Around 200 people (physicians, nurses, family, and lab staff) placed under strict quarantine. Investigative Committee opens criminal probe under Art. 236.",
        source: "Investigative Committee of Russia",
        classification: "OFFICIAL"
      },
      {
        date: "4 de Outubro de 2026",
        datePt: "04 Out 2026",
        dateEn: "Oct 04, 2026",
        dateLabel: "Oct 04",
        isoDate: "2026-10-04T11:00:00Z",
        timestamp: 1791111600000,
        title: "Posicionamento do Rospotrebnadzor e Dra. Anna Popova",
        titlePt: "Inspeção Federal e Declaração da Dra. Anna Popova",
        titleEn: "Rospotrebnadzor Inspection & Statement",
        description: "A chefe da vigilância sanitária russa viaja emergencialmente a Irkutsk para comandar a Comissão Sanitária Anti-Epidêmica. Declaração oficial nega quebra de contenção ou peste, classificando como 'pneumonia de etiologia desconhecida'.",
        descriptionPt: "A chefe da vigilância sanitária russa viaja a Irkutsk para comandar a comissão. Declaração oficial nega quebra de biossegurança, classificando como pneumonia de etiologia desconhecida.",
        descriptionEn: "Chief Sanitary Inspector Dr. Anna Popova travels to Irkutsk to direct the commission. Official statement classifies case as 'pneumonia of unknown etiology'.",
        source: "Rospotrebnadzor",
        classification: "OFFICIAL"
      },
      {
        date: "5 de Outubro de 2026",
        datePt: "05 Out 2026",
        dateEn: "Oct 05, 2026",
        dateLabel: "Oct 05",
        isoDate: "2026-10-05T15:00:00Z",
        timestamp: 1791212400000,
        title: "Monitoramento pelo Departamento de Estado dos EUA e OMS",
        titlePt: "Vigilância Internacional (OMS / Departamento de Estado)",
        titleEn: "International Watch (WHO / US State Dept)",
        description: "Autoridades internacionais, incluindo o Secretário de Estado Marco Rubio e analistas da OMS, afirmam estar monitorando ativamente a situação para garantir transparência e avaliar riscos de biossegurança.",
        descriptionPt: "Autoridades internacionais, incluindo o Secretário de Estado Marco Rubio e analistas da OMS, afirmam estar monitorando ativamente a situação para garantir transparência de biossegurança.",
        descriptionEn: "International authorities including US Secretary of State Marco Rubio and WHO analysts confirm active monitoring to assess biosafety risks.",
        source: "WHO / US Dept of State",
        classification: "OFFICIAL"
      },
      {
        date: "6 de Outubro de 2026",
        datePt: "06 Out 2026",
        dateEn: "Oct 06, 2026",
        dateLabel: "Oct 06",
        isoDate: "2026-10-06T07:00:00Z",
        timestamp: 1791270000000,
        title: "Vigilância Ativa: Zero Casos Secundários",
        titlePt: "Atualização de Vigilância: Zero Casos Secundários",
        titleEn: "Surveillance Update: Zero Secondary Cases",
        description: "Testes periódicos em todos os contatos isolados continuam negativos. Sem disseminação fora do perímetro médico estabelecido na Sibéria.",
        descriptionPt: "Testes periódicos de PCR em todos os contatos isolados continuam negativos. Sem disseminação fora do perímetro médico estabelecido na Sibéria.",
        descriptionEn: "Periodic PCR testing across all quarantined contacts continues negative. Zero spread detected beyond the Siberian hospital perimeter.",
        source: "Rospotrebnadzor / Regional Commission",
        classification: "CONFIRMED"
      }
    ],
    monitoringPoints: [
      {
        id: "irkutsk",
        name: "Irkutsk & Shelekhov (Foco do Alerta)",
        nameEn: "Irkutsk & Shelekhov (Epicenter Focus)",
        layer: "incident",
        lat: 52.2869,
        lng: 104.3050,
        status: "critical",
        statusText: "Quarentena & Isolamento de Contatos",
        statusTextEn: "Quarantine & Contact Ring",
        details: "~200 pessoas sob observação médica; alas hospitalares isoladas em Shelekhov e Irkutsk.",
        detailsEn: "~200 individuals under prophylactic medical observation; isolated wards active."
      },
      {
        id: "lab-irkutsk",
        name: "Instituto Anti-Peste de Irkutsk",
        nameEn: "Irkutsk Anti-Plague Institute",
        layer: "laboratories",
        lat: 52.2869,
        lng: 104.3050,
        status: "critical",
        statusText: "Laboratório BSL-3 Sob Inspeção",
        statusTextEn: "BSL-3 Bio-Block Under Inspection",
        details: "Instalação onde ocorreu o incidente reportado. Descontaminação concluída.",
        detailsEn: "Facility where initial vial breakage was reported. Biosafety decontamination complete."
      },
      {
        id: "hosp-shelekhov",
        name: "Hospital Distrital de Shelekhov",
        nameEn: "Shelekhov District Hospital",
        layer: "hospitals",
        lat: 52.2045,
        lng: 104.1011,
        status: "warning",
        statusText: "Ala de Isolamento Hospitalar",
        statusTextEn: "Hospital Isolation Perimeter",
        details: "Local de internação inicial da paciente; equipe médica sob profilaxia preventiva.",
        detailsEn: "Primary hospital admission unit; attending medical staff on preventative regimen."
      },
      {
        id: "case-index",
        name: "Unidade Clínica de Shelekhov (Caso Índice Fatal)",
        nameEn: "Shelekhov Clinical Unit (Fatal Index Case)",
        layer: "cases",
        lat: 52.2045,
        lng: 104.1011,
        status: "critical",
        statusText: "Caso Índice Investigado",
        statusTextEn: "Investigated Index Case",
        details: "1 óbito confirmado (técnica de laboratório); 0 casos secundários confirmados.",
        detailsEn: "1 confirmed death (laboratory technician); 0 secondary cases confirmed."
      },
      {
        id: "contacts-perimeter",
        name: "Perímetro de Quarentena de Contatos",
        nameEn: "Contacts Quarantine Perimeter",
        layer: "contacts",
        lat: 52.2450,
        lng: 104.2000,
        status: "warning",
        statusText: "~200 Contatos em Vigilância Profilática",
        statusTextEn: "~200 Contacts Under Prophylactic Watch",
        details: "Cerca de 200 médicos, enfermeiros e contatos isolados; testagem PCR segue negativa.",
        detailsEn: "~200 quarantined medical staff and contacts; PCR testing remains negative."
      },
      {
        id: "airport-ikt",
        name: "Aeroporto Internacional de Irkutsk (IKT)",
        nameEn: "Irkutsk International Airport (IKT)",
        layer: "airports",
        lat: 52.2680,
        lng: 104.3890,
        status: "normal",
        statusText: "Triagem Sanitária Ativa",
        statusTextEn: "Thermal Screening Active",
        details: "Operações normais de voo; triagem de temperatura de passageiros em vigor.",
        detailsEn: "Normal flight operations; thermal passenger screening in terminals."
      },
      {
        id: "border-mongolia",
        name: "Fronteira com Mongólia (Altanbulag)",
        nameEn: "Mongolia Border (Altanbulag)",
        layer: "borders",
        lat: 50.3150,
        lng: 106.4950,
        status: "warning",
        statusText: "Vigilância de Fronteira Terrestre",
        statusTextEn: "Land Border Health Screening",
        details: "Inspeção sanitária de veículos e trânsito transfronteiriço no sul do Baikal.",
        detailsEn: "Sanitary inspection of vehicles and cross-border transit in South Baikal."
      },
      {
        id: "border-china",
        name: "Porto de Entrada Manzhouli (China)",
        nameEn: "China Border Checkpoint (Manzhouli)",
        layer: "borders",
        lat: 49.5980,
        lng: 117.4360,
        status: "normal",
        statusText: "Controle Aduaneiro Preventivo",
        statusTextEn: "Customs Health Screening",
        details: "Triagem preventiva alfandegária ativa para cargas e viajantes da Sibéria.",
        detailsEn: "Preventive port screening active for transit and cargo from Siberia."
      },
      {
        id: "moscow",
        name: "Moscou (Centro Regulatório)",
        nameEn: "Moscow (Regulatory Command)",
        layer: "international",
        lat: 55.7558,
        lng: 37.6173,
        status: "warning",
        statusText: "Vigilância Rospotrebnadzor",
        statusTextEn: "Rospotrebnadzor Command",
        details: "Comissão Sanitária Anti-Epidêmica centralizando laudos laboratoriais e relatórios de contenção.",
        detailsEn: "Anti-Epidemic Sanitary Commission centralizing lab assays and containment reports."
      },
      {
        id: "geneva",
        name: "Genebra (Sede da OMS / WHO)",
        nameEn: "Geneva (WHO Headquarters)",
        layer: "international",
        lat: 46.2044,
        lng: 6.1432,
        status: "info",
        statusText: "Monitoramento de Biossegurança",
        statusTextEn: "WHO Global Biosafety Watch",
        details: "Organização Mundial da Saúde acompanhando através da rede global de alerta e resposta a surtos (GOARN).",
        detailsEn: "WHO tracking via Global Outbreak Alert and Response Network (GOARN)."
      },
      {
        id: "washington",
        name: "Washington D.C. (EUA)",
        nameEn: "Washington D.C. (US Gov)",
        layer: "international",
        lat: 38.9072,
        lng: -77.0369,
        status: "info",
        statusText: "Acompanhamento Governamental",
        statusTextEn: "US Diplomatic Monitoring",
        details: "Declaração de atenção redobrada emitida em 5 de outubro; risco geral avaliado como baixo/localizado.",
        detailsEn: "Heightened attention statement issued Oct 5; general risk evaluated as low/localized."
      },
      {
        id: "beijing",
        name: "Pequim (Fronteira Norte / Ásia)",
        nameEn: "Beijing (GACC Asia)",
        layer: "international",
        lat: 39.9042,
        lng: 116.4074,
        status: "normal",
        statusText: "Vigilância Sanitária Portuária",
        statusTextEn: "Port Health Surveillance",
        details: "Vigilância em portos e rotas terrestres transfronteiriças da Sibéria; sem restrições ativas de viagem.",
        detailsEn: "Sanitary surveillance along Siberian cross-border transport; zero travel bans."
      }
    ]
  }
};
