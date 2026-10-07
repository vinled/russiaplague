// ============================================================================
// OUTBREAK INTELLIGENCE · SITUATION ROOM PLATFORM (v5.0.0)
// Professional Global Epidemiological Intelligence / CTI Architecture
// ============================================================================

// Bilingual Translation Dictionary (Default: English)
const TRANSLATIONS = {
  en: {
    brandTitle: 'OUTBREAK INTELLIGENCE',
    brandSubtitle: 'Global Epidemiological Monitoring',
    brandContext: 'Irkutsk Incident · Russia · Live Intelligence',
    liveIntelligenceTag: 'Live Intelligence Wire',
    incidentContextSub: 'Irkutsk Incident · Russia',
    tickerPlaceholder: 'Surveillance active • No secondary transmission detected • Contacts monitored',
    navOverview: 'OVERVIEW',
    navTimeline: 'TIMELINE',
    navMap: 'MAP',
    navIntelligence: 'INTELLIGENCE',
    navSources: 'SOURCES',
    quickSearchPlaceholder: 'Quick search...',
    refreshText: 'Refresh',
    lastUpdatedLabel: 'Last updated:',
    whatChangedTitle: 'WHAT CHANGED SINCE LAST VISIT:',
    currentThreatTitle: 'CURRENT THREAT',
    threatSecTrans: 'Secondary Transmission',
    threatExtSpread: 'External Spread',
    threatContInfect: 'Contacts Infected',
    threatGeoExpand: 'Geographic Expansion',
    threatQuarantine: 'Quarantine Status',
    kpiConfirmedLabel: 'CONFIRMED',
    kpiInvestigatedLabel: 'UNDER INVESTIGATION',
    kpiDeathsLabel: 'DEATHS',
    kpiContactsLabel: 'CONTACTS MONITORED',
    kpiSecondaryLabel: 'SECONDARY CASES',
    kpiCountriesLabel: 'COUNTRIES AFFECTED',
    kpiExternalLabel: 'EXTERNAL CASES',
    incidentTimelineTitle: 'INCIDENT TIMELINE',
    viewCompleteTimelineBtn: 'View complete timeline',
    outbreakEvolutionTitle: 'OUTBREAK EVOLUTION',
    containmentCurveLabel: 'Containment & Progression',
    geographicStatusTitle: 'GEOGRAPHIC STATUS',
    openMapBtn: 'Open interactive map',
    geoLocalSpread: 'Local spread',
    geoRussia: 'Russia',
    geoIntlSpread: 'International spread',
    geoBorders: 'Borders',
    riskIndicatorsTitle: 'RISK INDICATORS',
    riskHumanSpread: 'Human transmission',
    riskContactInfect: 'Contact infections',
    riskGeoExpansion: 'Geographic spread',
    riskBordersStatus: 'Borders',
    riskFacilityContain: 'Facility Biocontainment',
    latestVerifiedTitle: 'LATEST VERIFIED INTELLIGENCE',
    latestVerifiedSub: 'Top verified official & wire dispatches',
    viewAllIntelligenceLink: 'View all intelligence →',
    rumorWatchTitle: 'RUMOR WATCH · VIRALITY VS. EVIDENCE',
    rumorWatchSub: 'Separating social spread from epidemiological data',
    timelineArchiveTitle: 'Incident Chronology Archive',
    timelineArchiveSub: 'Complete chronological progression of the Irkutsk Anti-Plague Institute incident (Autumn 2026).',
    fullMapTitle: 'Epidemiological Situation Map',
    fullMapSub: 'Epicenter focus: Irkutsk / Lake Baikal / Siberia · Real-world validated geographic coordinates.',
    airTravelTitle: 'AIR TRAVEL · IRKUTSK AIRPORT (IKT)',
    borderMonitoringTitle: 'BORDER & TRANSIT MONITORING',
    socialRumorTitle: 'SOCIAL MEDIA & RUMOR WATCH (TIKTOK / X / REDDIT)',
    intlResponseTitle: 'INTERNATIONAL SURVEILLANCE & DIPLOMATIC STATEMENTS',
    biosecurityDossierTitle: 'BIOSECURITY DOSSIER · IRKUTSK ANTI-PLAGUE INSTITUTE',
    sourcesNewsroomTitle: 'Global Sources Wire & Intelligence Feed',
    sourcesNewsroomSub: 'All monitored dispatches from WHO, Reuters, Russian sanitarians, international newsrooms, and scientific feeds.',
    footerNotice: 'OUTBREAK INTELLIGENCE · Situation Room Surveillance Protocol',
    readArticle: 'Read Dispatch',
    timeAgo: {
      now: 'Just now',
      seconds: '{n}s ago',
      minutes: '{n}m ago',
      hours: '{n}h ago',
      days: '{n}d ago'
    },
    themeDark: 'Dark',
    themeContrast: 'Contrast',
    themeLight: 'Light',
    threatLow: 'LOW',
    threatGuarded: 'GUARDED',
    threatElevated: 'ELEVATED',
    threatHigh: 'HIGH',
    threatCritical: 'CRITICAL',
    geoStatusLocalVal: 'Contained',
    geoStatusRussiaVal: 'Monitoring',
    geoStatusIntlVal: 'None detected',
    geoStatusBordersVal: 'Screening / Monitoring',
    criteriaSecTransVal: 'None',
    criteriaExtSpreadVal: 'None',
    criteriaGeoExpandVal: 'None',
    criteriaQuarantineVal: 'Active',
    riskHumanSpreadVal: 'None',
    riskGeoExpansionVal: 'None',
    riskBordersVal: 'Monitoring',
    riskFacilityVal: 'BSL-3 Inspected',
    pathogenIntelTitle: 'PATHOGEN INTELLIGENCE',
    pathogenAgentLabel: 'Etiological Classification',
    pathogenAgentBadge: 'Under Investigation',
    pathogenAiSummaryTitle: 'AI EPIDEMIOLOGICAL SYNTHESIS (REAL TIME)',
    pathogenDispatchesAnalyzed: 'Monitored from {n} dispatches',
    pathogenSyncing: 'Synchronizing neural analysis of monitored dispatches...',

    kpiConfirmedSub: '0 lab verified',
    kpiInvestigatedSub: '+1 in isolation ward',
    kpiDeathsSub: '+1 in last 24h (disputed)',
    kpiContactsSub: 'Hospital ring cordon',
    kpiSecondarySub: '0 community clusters',
    kpiCountriesSub: 'Russian Fed. only',

    deltaFatalitiesLabel: 'Fatalities Toll',
    deltaFatalitiesVal: '1 → 2 Deaths',
    deltaFatalitiesTag: '▲ +1 CLAIMED',
    deltaFatalitiesSub: 'Shelekhov Hospital',
    deltaContactsLabel: 'Contacts Monitored',
    deltaContactsVal: '190 → ~200 Contacts',
    deltaContactsTag: 'QUARANTINED',
    deltaContactsSub: '5 Hospitals Isolated',
    deltaSpreadLabel: 'External Spread',
    deltaSpreadVal: 'No Change Detected',
    deltaSpreadTag: 'CONTAINED',
    deltaSpreadSub: 'Zero Spillover',
    deltaResponseLabel: 'Official Response',
    deltaResponseVal: 'Quarantine Maintained',
    deltaResponseTag: 'DENIAL',
    deltaResponseSub: 'Rospotrebnadzor',

    snapshotTitle: 'SITUATION SNAPSHOT',
    snapshotInspectDossier: 'Inspect Dossier',
    snapshotLeadText: 'Possible pneumonic plague incident under active investigation following accidental exposure at Irkutsk Anti-Plague Institute. Five hospitals in Shelekhov placed under quarantine cordon.',
    snapshotEvidenceConfidence: 'Evidence Confidence',
    snapshotConfidenceScoreVal: '78% (Corroborated by UK & Local Press)',
    snapshotH2HLabel: 'Human-to-Human',
    snapshotH2HValText: 'NOT CONFIRMED',
    snapshotGeoLabel: 'Geographic Spread',
    snapshotGeoValText: 'LOCALIZED',
    snapshotIntlLabel: 'International',
    snapshotIntlValText: 'NONE DETECTED',
    snapshotContainLabel: 'Containment',
    snapshotContainValText: 'ACTIVE CORDON',

    geoSubtitle: 'Irkutsk / Shelekhov Epicenter · Lake Baikal Region · Siberia',
    geoFocusEpicenter: 'Focus Epicenter',
    mapLegendLabel: 'Legend:',
    mapLegendRed: 'Red = Confirmed/Critical',
    mapLegendAmber: 'Amber = Cordon / Investigation',
    mapLegendYellow: 'Yellow = Contact Watch',
    mapLegendGreen: 'Green = Contained',
    mapLegendBlue: 'Blue = Official Command',

    evoTableHeading: 'Quantitative Progression Table',
    evoTooltipNote: 'Tooltips active on curve',
    evoColDate: 'Date',
    evoColPhase: 'Phase',
    evoColSuspected: 'Suspected',
    evoColConfirmed: 'Confirmed',
    evoColDeaths: 'Deaths',
    evoColContacts: 'Contacts',
    evoRange24h: '24H',
    evoRange7d: '7D',
    evoRange30d: '30D',
    evoRangeAll: 'ALL',

    timelineFooterNote: 'Click any event node to inspect source intelligence',
    timelineLiveChain: 'Live Chain Active',
    timelineFilterAll: 'All Events',
    timelineFilterConfirmed: 'Confirmed',
    timelineFilterOfficial: 'Official',
    timelineFilterReported: 'Reported',
    timelineFilterUnverified: 'Unverified',
    timelineFilterDisputed: 'Disputed',

    pathogenAgentEtiologyLabel: 'Etiological Agent',
    pathogenAgentIdentityVal: 'Yersinia pestis (Pneumonic Strain)',
    pathogenAgentBadgeText: 'Under Investigation',
    pathogenFullDossierBtn: 'Full Pathogen Dossier',

    tierPriorityLabel: 'Tier 1 & Tier 2 Prioritized',
    corroboratedLabel: 'Corroborated',
    viralityVsCredibility: 'Virality vs Credibility',
    rumorPlatformsMonitored: 'TikTok / X / Telegram Monitored',
    rumorSeparatedFromFacts: 'Separated from facts',
    rumorVirality: 'Virality',
    rumorCredibility: 'Credibility',
    rumorCorroboration: 'Corroboration',
    rumorTrend: 'Trend',
    rumorIntelNote: 'Intelligence Note',

    sourcesCategoryLabel: 'Category:',
    sourcesTierLabel: 'Trust Tier:',
    sourcesRegionLabel: 'Region:',
    sourcesSearchPlaceholder: 'Filter dispatches by keyword, entity, or source...',
    catAll: 'All Categories',
    catOfficial: 'Official',
    catEpidemiology: 'Epidemiology',
    catLaboratory: 'Laboratory',
    catRussia: 'Russia',
    catInternational: 'International',
    catWHO: 'WHO',
    catSocial: 'Social',
    catScientific: 'Scientific',
    tierAll: 'All Tiers',
    tier1Label: 'Tier 1 (WHO / Reuters / Gov)',
    tier2Label: 'Tier 2 (Major Press)',
    tier3Label: 'Tier 3 (Regional)',
    tier4Label: 'Tier 4 (Social / OSINT)',
    regionAll: 'All Regions',
    regionRussia: 'Russia / Siberia',
    regionWHO: 'WHO / Global',
    regionMongolia: 'Mongolia',
    regionChina: 'China',
    regionBrazil: 'Brazil / Lusophone',
    paginationPrev: '← Previous',
    paginationNext: 'Next →'
  },
  pt: {
    brandTitle: 'OUTBREAK INTELLIGENCE',
    brandSubtitle: 'Monitoramento Epidemiológico Global',
    brandContext: 'Incidente de Irkutsk · Rússia · Inteligência em Tempo Real',
    liveIntelligenceTag: 'Plantão de Inteligência ao Vivo',
    incidentContextSub: 'Incidente de Irkutsk · Rússia',
    tickerPlaceholder: 'Vigilância ativa • Nenhuma transmissão secundária detectada • Contatos sob quarentena',
    navOverview: 'PANORAMA',
    navTimeline: 'LINHA DO TEMPO',
    navMap: 'MAPA',
    navIntelligence: 'INTELIGÊNCIA',
    navSources: 'FONTES',
    quickSearchPlaceholder: 'Busca rápida...',
    refreshText: 'Atualizar',
    lastUpdatedLabel: 'Última atualização:',
    whatChangedTitle: 'O QUE MUDOU DESDE SUA ÚLTIMA VISITA:',
    currentThreatTitle: 'AMEAÇA ATUAL',
    threatSecTrans: 'Transmissão Secundária',
    threatExtSpread: 'Disseminação Externa',
    threatContInfect: 'Contatos Infectados',
    threatGeoExpand: 'Expansão Geográfica',
    threatQuarantine: 'Status de Quarentena',
    kpiConfirmedLabel: 'CONFIRMADOS',
    kpiInvestigatedLabel: 'SOB INVESTIGAÇÃO',
    kpiDeathsLabel: 'ÓBITOS',
    kpiContactsLabel: 'CONTATOS MONITORADOS',
    kpiSecondaryLabel: 'CASOS SECUNDÁRIOS',
    kpiCountriesLabel: 'PAÍSES AFETADOS',
    kpiExternalLabel: 'CASOS EXTERNOS',
    incidentTimelineTitle: 'CRONOLOGIA DO INCIDENTE',
    viewCompleteTimelineBtn: 'Ver cronologia completa',
    outbreakEvolutionTitle: 'EVOLUÇÃO DO INCIDENTE',
    containmentCurveLabel: 'Contenção & Progressão',
    geographicStatusTitle: 'STATUS GEOGRÁFICO',
    openMapBtn: 'Abrir mapa interativo',
    geoLocalSpread: 'Disseminação local',
    geoRussia: 'Rússia',
    geoIntlSpread: 'Disseminação internacional',
    geoBorders: 'Fronteiras',
    riskIndicatorsTitle: 'INDICADORES DE RISCO',
    riskHumanSpread: 'Transmissão humana',
    riskContactInfect: 'Infecções de contatos',
    riskGeoExpansion: 'Disseminação geográfica',
    riskBordersStatus: 'Fronteiras',
    riskFacilityContain: 'Biocontenção da Unidade',
    latestVerifiedTitle: 'ÚLTIMAS APURAÇÕES VERIFICADAS',
    latestVerifiedSub: 'Despachos oficiais e de agências de maior confiança',
    viewAllIntelligenceLink: 'Ver todas as fontes →',
    rumorWatchTitle: 'RADAR DE RUMORES · VIRALIZAÇÃO VS. EVIDÊNCIA',
    rumorWatchSub: 'Separando viralização social de evidência epidemiológica',
    timelineArchiveTitle: 'Arquivo Cronológico do Incidente',
    timelineArchiveSub: 'Progressão temporal completa do incidente no Instituto Anti-Peste de Irkutsk (Outono 2026).',
    fullMapTitle: 'Mapa da Situação Epidemiológica',
    fullMapSub: 'Foco epicentral: Irkutsk / Lago Baikal / Sibéria · Coordenadas geográficas reais validadas.',
    airTravelTitle: 'TRÁFEGO AÉREO · AEROPORTO DE IRKUTSK (IKT)',
    borderMonitoringTitle: 'VIGILÂNCIA DE FRONTEIRAS & TRÂNSITO',
    socialRumorTitle: 'REDES SOCIAIS & RADAR DE RUMORES (TIKTOK / X / REDDIT)',
    intlResponseTitle: 'VIGILÂNCIA INTERNACIONAL & RESPOSTA DIPLOMÁTICA',
    biosecurityDossierTitle: 'DOSSIÊ DE BIOSSEGURANÇA · INSTITUTO ANTI-PESTE DE IRKUTSK',
    sourcesNewsroomTitle: 'Feed Geral de Fontes & Notícias',
    sourcesNewsroomSub: 'Todos os despachos apurados de OMS, Reuters, sanitários russos, imprensa internacional e fontes científicas.',
    footerNotice: 'OUTBREAK INTELLIGENCE · Protocolo de Vigilância em Sala de Situação',
    readArticle: 'Ler Artigo',
    timeAgo: {
      now: 'Agora',
      seconds: 'Há {n}s',
      minutes: 'Há {n}m',
      hours: 'Há {n}h',
      days: 'Há {n}d'
    },
    themeDark: 'Escuro',
    themeContrast: 'Contraste',
    themeLight: 'Claro',
    threatLow: 'BAIXO',
    threatGuarded: 'MODERADO',
    threatElevated: 'ELEVADO',
    threatHigh: 'ALTO',
    threatCritical: 'CRÍTICO',
    geoStatusLocalVal: 'Contido',
    geoStatusRussiaVal: 'Monitoramento',
    geoStatusIntlVal: 'Nenhum detectado',
    geoStatusBordersVal: 'Triagem / Monitoramento',
    criteriaSecTransVal: 'Nenhuma',
    criteriaExtSpreadVal: 'Nenhuma',
    criteriaGeoExpandVal: 'Nenhuma',
    criteriaQuarantineVal: 'Ativa',
    riskHumanSpreadVal: 'Nenhuma',
    riskGeoExpansionVal: 'Nenhuma',
    riskBordersVal: 'Monitoramento',
    riskFacilityVal: 'BSL-3 Inspecionado',
    pathogenIntelTitle: 'INTELIGÊNCIA DO PATÓGENO',
    pathogenAgentLabel: 'Classificação Etiológica',
    pathogenAgentBadge: 'Sob Investigação',
    pathogenAiSummaryTitle: 'SÍNTESE EPIDEMIOLÓGICA POR IA (TEMPO REAL)',
    pathogenDispatchesAnalyzed: 'Monitorado a partir de {n} despachos',
    pathogenSyncing: 'Sincronizando análise neural dos despachos monitorados...',

    kpiConfirmedSub: '0 verificado em laboratório',
    kpiInvestigatedSub: '+1 em ala de isolamento',
    kpiDeathsSub: '+1 nas últimas 24h (disputado)',
    kpiContactsSub: 'Cordão sanitário hospitalar',
    kpiSecondarySub: '0 surtos comunitários',
    kpiCountriesSub: 'Apenas Federação Russa',

    deltaFatalitiesLabel: 'Total de Óbitos',
    deltaFatalitiesVal: '1 → 2 Óbitos',
    deltaFatalitiesTag: '▲ +1 RELATADO',
    deltaFatalitiesSub: 'Hospital de Shelekhov',
    deltaContactsLabel: 'Contatos Monitorados',
    deltaContactsVal: '190 → ~200 Contatos',
    deltaContactsTag: 'QUARENTENA',
    deltaContactsSub: '5 Hospitais Isolados',
    deltaSpreadLabel: 'Disseminação Externa',
    deltaSpreadVal: 'Nenhuma Mudança',
    deltaSpreadTag: 'CONTIDO',
    deltaSpreadSub: 'Zero Dispersão',
    deltaResponseLabel: 'Resposta Oficial',
    deltaResponseVal: 'Quarentena Mantida',
    deltaResponseTag: 'NEGATIVA',
    deltaResponseSub: 'Rospotrebnadzor',

    snapshotTitle: 'SÍNTESE DA SITUAÇÃO',
    snapshotInspectDossier: 'Inspecionar Dossiê',
    snapshotLeadText: 'Incidente de possível peste pneumônica sob investigação ativa após quebra acidental no Instituto Anti-Peste de Irkutsk. Cinco hospitais em Shelekhov sob cordão de quarentena.',
    snapshotEvidenceConfidence: 'Confiança das Evidências',
    snapshotConfidenceScoreVal: '78% (Corroborado por Imprensa Britânica e Local)',
    snapshotH2HLabel: 'Humano para Humano',
    snapshotH2HValText: 'NÃO CONFIRMADA',
    snapshotGeoLabel: 'Disseminação Geográfica',
    snapshotGeoValText: 'LOCALIZADA',
    snapshotIntlLabel: 'Disseminação Internacional',
    snapshotIntlValText: 'NENHUMA DETECTADA',
    snapshotContainLabel: 'Contenção',
    snapshotContainValText: 'CORDÃO ATIVO',

    geoSubtitle: 'Epicentro Irkutsk / Shelekhov · Região do Lago Baikal · Sibéria',
    geoFocusEpicenter: 'Focar Epicentro',
    mapLegendLabel: 'Legenda:',
    mapLegendRed: 'Vermelho = Confirmado / Crítico',
    mapLegendAmber: 'Âmbar = Cordão / Investigação',
    mapLegendYellow: 'Amarelo = Vigilância de Contatos',
    mapLegendGreen: 'Verde = Contido',
    mapLegendBlue: 'Azul = Comando Oficial',

    evoTableHeading: 'Tabela de Progressão Quantitativa',
    evoTooltipNote: 'Tooltips ativos na curva',
    evoColDate: 'Data',
    evoColPhase: 'Fase',
    evoColSuspected: 'Suspeitos',
    evoColConfirmed: 'Confirmados',
    evoColDeaths: 'Óbitos',
    evoColContacts: 'Contatos',
    evoRange24h: '24H',
    evoRange7d: '7D',
    evoRange30d: '30D',
    evoRangeAll: 'TODOS',

    timelineFooterNote: 'Clique em qualquer marco para inspecionar fontes de inteligência',
    timelineLiveChain: 'Cadeia de Fatos Ativa',
    timelineFilterAll: 'Todos os Eventos',
    timelineFilterConfirmed: 'Confirmados',
    timelineFilterOfficial: 'Oficiais',
    timelineFilterReported: 'Relatados',
    timelineFilterUnverified: 'Não Verificados',
    timelineFilterDisputed: 'Disputados',

    pathogenAgentEtiologyLabel: 'Agente Etiológico',
    pathogenAgentIdentityVal: 'Yersinia pestis (Cepa Pneumônica)',
    pathogenAgentBadgeText: 'Sob Investigação',
    pathogenFullDossierBtn: 'Dossiê Completo do Patógeno',

    tierPriorityLabel: 'Prioridade Tier 1 & Tier 2',
    corroboratedLabel: 'Corroborado',
    viralityVsCredibility: 'Viralidade vs Credibilidade',
    rumorPlatformsMonitored: 'TikTok / X / Telegram Monitorados',
    rumorSeparatedFromFacts: 'Separado dos Fatos',
    rumorVirality: 'Viralidade',
    rumorCredibility: 'Credibilidade',
    rumorCorroboration: 'Corroboração',
    rumorTrend: 'Tendência',
    rumorIntelNote: 'Nota de Inteligência',

    sourcesCategoryLabel: 'Categoria:',
    sourcesTierLabel: 'Nível de Confiança:',
    sourcesRegionLabel: 'Região:',
    sourcesSearchPlaceholder: 'Filtrar despachos por palavra-chave, entidade ou fonte...',
    catAll: 'Todas as Categorias',
    catOfficial: 'Oficial',
    catEpidemiology: 'Epidemiologia',
    catLaboratory: 'Laboratório',
    catRussia: 'Rússia',
    catInternational: 'Internacional',
    catWHO: 'OMS',
    catSocial: 'Redes Sociais',
    catScientific: 'Científico',
    tierAll: 'Todos os Níveis',
    tier1Label: 'Tier 1 (OMS / Reuters / Governos)',
    tier2Label: 'Tier 2 (Grande Imprensa)',
    tier3Label: 'Tier 3 (Regional)',
    tier4Label: 'Tier 4 (Redes / OSINT)',
    regionAll: 'Todas as Regiões',
    regionRussia: 'Rússia / Sibéria',
    regionWHO: 'OMS / Global',
    regionMongolia: 'Mongólia',
    regionChina: 'China',
    regionBrazil: 'Brasil / Lusófono',
    paginationPrev: '← Anterior',
    paginationNext: 'Próxima →'
  }
};

// Threat Level Localized Names Dictionary
const THREAT_LEVEL_NAMES = {
  en: {
    LOW: 'LOW',
    GUARDED: 'GUARDED',
    ELEVATED: 'ELEVATED',
    HIGH: 'HIGH',
    CRITICAL: 'CRITICAL'
  },
  pt: {
    LOW: 'BAIXO',
    GUARDED: 'MODERADO',
    ELEVATED: 'ELEVADO',
    HIGH: 'ALTO',
    CRITICAL: 'CRÍTICO'
  }
};

// Classification Badge Labels Dictionary
const CLASSIFICATION_LABELS = {
  en: {
    CONFIRMED: 'CONFIRMED',
    OFFICIAL: 'OFFICIAL',
    REPORTED: 'REPORTED',
    UNVERIFIED: 'UNVERIFIED',
    DISPUTED: 'DISPUTED',
    CRITICAL: 'CRITICAL'
  },
  pt: {
    CONFIRMED: 'CONFIRMADO',
    OFFICIAL: 'OFICIAL',
    REPORTED: 'RELATADO',
    UNVERIFIED: 'NÃO VERIFICADO',
    DISPUTED: 'DISPUTADO',
    CRITICAL: 'CRÍTICO'
  }
};

// Map Tile Layer Configurations per Theme
const TILE_CONFIGS = {
  dark: {
    url: 'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Esri World Dark'
  },
  'high-contrast': {
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; CartoDB &copy; OpenStreetMap'
  },
  light: {
    url: 'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Esri World Light Gray'
  }
};

// Global Application State
const state = {
  news: [],
  social: null,
  incident: null,
  briefing: null,
  flights: null,
  pathogenIntel: null,
  currentTab: 'navOverview',
  currentLang: 'en',
  currentTheme: localStorage.getItem('theme_preference') || 'dark',
  audioEnabled: true,
  countdown: 60,
  countdownInterval: null,
  
  // Audio & Escalation State Tracking
  lastKnownThreatLevelRank: null,
  lastKnownDeaths: null,
  
  // Sources Filter & Pagination State
  sourcesCategory: 'all',
  sourcesTier: 'all',
  sourcesCountry: 'all',
  sourcesSource: 'all',
  sourcesLang: 'all',
  sourcesSearch: '',
  sourcesPage: 1,
  sourcesPerPage: 15,
  
  // Timeline Filter State
  timelineFilter: 'all',

  // Map Filter & Instance State
  mapLayer: 'all',
  overviewMap: null,
  mainMap: null,
  overviewMarkerGroup: null,
  mainMarkerGroup: null,
  overviewTileLayer: null,
  mainTileLayer: null,

  // Last State Tracking for "What Changed"
  lastVisitState: null,
  lastKnownFirstId: null
};

// Emergency Situation Room Alarm (Intense Klaxon / Horn for Escalation or Death Increases)
function playCriticalEmergencyAlarm() {
  if (!state.audioEnabled) return;
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const now = audioCtx.currentTime;

    const playKlaxonBurst = (startTime, duration) => {
      const osc = audioCtx.createOscillator();
      const oscSub = audioCtx.createOscillator();
      const filter = audioCtx.createBiquadFilter();
      const gain = audioCtx.createGain();

      osc.type = 'sawtooth';
      oscSub.type = 'square';

      // Pitch sweep downward: tactical situation-room emergency horn / klaxon
      osc.frequency.setValueAtTime(880, startTime);
      osc.frequency.exponentialRampToValueAtTime(440, startTime + duration);

      oscSub.frequency.setValueAtTime(440, startTime);
      oscSub.frequency.exponentialRampToValueAtTime(220, startTime + duration);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1600, startTime);
      filter.Q.setValueAtTime(3.5, startTime);

      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.linearRampToValueAtTime(0.28, startTime + 0.04);
      gain.gain.setValueAtTime(0.24, startTime + duration - 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(filter);
      oscSub.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(startTime);
      oscSub.start(startTime);
      osc.stop(startTime + duration);
      oscSub.stop(startTime + duration);
    };

    // 3 rapid, powerful klaxon wails
    playKlaxonBurst(now, 0.38);
    playKlaxonBurst(now + 0.45, 0.38);
    playKlaxonBurst(now + 0.90, 0.55);

    console.warn('[OUTBREAK INTELLIGENCE] CRITICAL EMERGENCY ALARM TRIGGERED (ESCALATION / DEATH EVENT)');
  } catch (e) {
    console.warn('AudioContext alarm error:', e);
  }
}

// Audio notification (subtle discrete intelligence tone for new dispatches)
function playNotificationChime() {
  if (!state.audioEnabled) return;
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const playTone = (freq, delay, duration) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime + delay);
      gain.gain.setValueAtTime(0.03, audioCtx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + delay + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(audioCtx.currentTime + delay);
      osc.stop(audioCtx.currentTime + delay + duration);
    };
    playTone(523.25, 0, 0.2);     // C5
    playTone(783.99, 0.08, 0.3);  // G5
  } catch (e) {
    console.warn('AudioContext notice:', e);
  }
}

// Relative time formatting
function formatRelativeTime(timestamp) {
  const diffSec = Math.floor((Date.now() - timestamp) / 1000);
  const t = TRANSLATIONS[state.currentLang].timeAgo;
  if (isNaN(diffSec) || diffSec < 0) return t.now;
  if (diffSec < 60) return t.seconds.replace('{n}', diffSec);
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return t.minutes.replace('{n}', diffMin);
  const diffHours = Math.floor(diffMin / 60);
  if (diffHours < 24) return t.hours.replace('{n}', diffHours);
  const diffDays = Math.floor(diffHours / 24);
  return t.days.replace('{n}', diffDays);
}

// Navigation Tab Switching
function switchTab(tabId) {
  state.currentTab = tabId;

  // Update nav buttons
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
  });

  // Mapping from nav button to view container
  const tabMapping = {
    'navOverview': 'viewOverview',
    'navTimeline': 'viewTimeline',
    'navMap': 'viewMap',
    'navIntelligence': 'viewIntelligence',
    'navSources': 'viewSources'
  };

  const targetViewId = tabMapping[tabId] || 'viewOverview';
  document.querySelectorAll('.tab-view').forEach(view => {
    view.classList.toggle('hidden', view.id !== targetViewId);
  });

  // Re-render and resize maps if relevant tab was selected
  if (tabId === 'navOverview' && state.overviewMap) {
    setTimeout(() => state.overviewMap.invalidateSize(), 100);
  } else if (tabId === 'navMap') {
    if (!state.mainMap) {
      initMainMap();
    } else {
      setTimeout(() => state.mainMap.invalidateSize(), 100);
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Language System
function applyTranslations(lang) {
  state.currentLang = lang;
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  // Language buttons
  const btnEn = document.getElementById('langBtnEn');
  const btnPt = document.getElementById('langBtnPt');
  if (btnEn && btnPt) {
    if (lang === 'en') {
      btnEn.className = 'px-2 py-0.5 rounded bg-white/10 text-white font-bold';
      btnPt.className = 'px-2 py-0.5 rounded text-white/50 hover:text-white';
    } else {
      btnEn.className = 'px-2 py-0.5 rounded text-white/50 hover:text-white';
      btnPt.className = 'px-2 py-0.5 rounded bg-white/10 text-white font-bold';
    }
  }

  // Re-render views with translated elements
  renderOverviewThreatAndKPIs();
  renderOverviewMilestones();
  renderOutbreakEvolution();
  renderLatestVerifiedIntelligence();
  renderRumorWatch();
  renderPathogenIntelligence();
  renderTimelineArchive();
  renderIntelligenceModules();
  renderSourcesFeed();
}

function setLanguage(lang) {
  localStorage.setItem('preferred_language', lang);
  applyTranslations(lang);
  loadData(false);
}

// Map Tile Layer Updater for Theme Switching
function updateMapTileLayers(theme) {
  const config = TILE_CONFIGS[theme] || TILE_CONFIGS.dark;

  if (state.overviewMap) {
    if (state.overviewTileLayer) {
      state.overviewMap.removeLayer(state.overviewTileLayer);
    }
    state.overviewTileLayer = L.tileLayer(config.url, {
      maxZoom: 16,
      attribution: config.attribution
    }).addTo(state.overviewMap);
  }

  if (state.mainMap) {
    if (state.mainTileLayer) {
      state.mainMap.removeLayer(state.mainTileLayer);
    }
    state.mainTileLayer = L.tileLayer(config.url, {
      maxZoom: 16,
      attribution: config.attribution
    }).addTo(state.mainMap);
  }
}

// Theme Switcher (Dark, High Contrast, Light)
function setTheme(themeName) {
  const validThemes = ['dark', 'high-contrast', 'light'];
  const theme = validThemes.includes(themeName) ? themeName : 'dark';
  state.currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme_preference', theme);

  // Update theme buttons
  const btnDark = document.getElementById('themeBtnDark');
  const btnContrast = document.getElementById('themeBtnContrast');
  const btnLight = document.getElementById('themeBtnLight');

  [btnDark, btnContrast, btnLight].forEach(btn => {
    if (!btn) return;
    const val = btn.getAttribute('data-theme-val');
    if (val === theme) {
      btn.className = 'px-2 py-0.5 rounded flex items-center gap-1 transition bg-white/10 text-white font-bold active-theme';
    } else {
      btn.className = 'px-2 py-0.5 rounded flex items-center gap-1 transition text-white/50 hover:text-white';
    }
  });

    updateMapTileLayers(theme);
  if (typeof renderOutbreakEvolution === 'function') {
    renderOutbreakEvolution();
  }
}

// ============================================================================
// RENDERERS
// ============================================================================

// 1. Current Threat Hero & Epidemiological KPIs
function renderOverviewThreatAndKPIs() {
  const incident = state.incident;
  const briefing = state.briefing;
  const isEn = state.currentLang === 'en';

  const threatLevel = incident?.threatAssessment?.level || 'GUARDED';
  const threatBadgeText = document.getElementById('threatBadgeText');
  const threatHeadline = document.getElementById('threatHeadline');

  const levelNames = THREAT_LEVEL_NAMES[state.currentLang] || THREAT_LEVEL_NAMES.en;
  const translatedLevel = levelNames[threatLevel] || threatLevel;

  if (threatBadgeText) threatBadgeText.textContent = translatedLevel;
  if (threatHeadline) {
    threatHeadline.textContent = isEn
      ? (incident?.threatAssessment?.headline || 'No evidence of secondary transmission')
      : (incident?.threatAssessment?.headlinePt || 'Sem evidência de transmissão secundária');
  }

  // Highlight active level in horizontal track and translate step labels
  document.querySelectorAll('.threat-step').forEach(step => {
    const levelKey = step.getAttribute('data-level');
    step.textContent = levelNames[levelKey] || levelKey;
    step.className = 'threat-step';
    if (levelKey === threatLevel) {
      if (levelKey === 'LOW') step.classList.add('active-low');
      else if (levelKey === 'GUARDED') step.classList.add('active-guarded');
      else if (levelKey === 'ELEVATED') step.classList.add('active-elevated');
      else if (levelKey === 'HIGH') step.classList.add('active-high');
      else if (levelKey === 'CRITICAL') step.classList.add('active-critical');
    }
  });

  // Criteria indicators
  const reasons = incident?.threatAssessment?.reasons || {};
  const elSecTrans = document.getElementById('criteriaSecTrans');
  const elExtSpread = document.getElementById('criteriaExtSpread');
  const elContInfect = document.getElementById('criteriaContInfect');
  const elGeoExpand = document.getElementById('criteriaGeoExpand');
  const elQuarantine = document.getElementById('criteriaQuarantine');

  if (elSecTrans) elSecTrans.textContent = isEn ? (reasons.secondaryTransmission || 'None') : (reasons.secondaryTransmissionPt || 'Nenhuma');
  if (elExtSpread) elExtSpread.textContent = isEn ? (reasons.externalSpread || 'None') : (reasons.externalSpreadPt || 'Nenhuma');
  if (elContInfect) elContInfect.textContent = reasons.contactsInfected !== undefined ? reasons.contactsInfected : 0;
  if (elGeoExpand) elGeoExpand.textContent = isEn ? (reasons.geographicExpansion || 'None') : (reasons.geographicExpansionPt || 'Nenhuma');
  if (elQuarantine) elQuarantine.textContent = isEn ? (reasons.quarantine || 'Active') : (reasons.quarantinePt || 'Ativa');

  // KPIs
  const kpis = incident?.kpis || {};
  const elConfirmed = document.getElementById('kpiConfirmed');
  const elInvestigation = document.getElementById('kpiUnderInvestigation');
  const elDeaths = document.getElementById('kpiDeaths');
  const elContacts = document.getElementById('kpiContactsMonitored');
  const elSecondary = document.getElementById('kpiSecondaryCases');
  const elCountries = document.getElementById('kpiCountriesAffected');
  const elExternal = document.getElementById('kpiExternalCases');

  if (elConfirmed) elConfirmed.textContent = kpis.confirmed !== undefined ? kpis.confirmed : 0;
  if (elInvestigation) elInvestigation.textContent = kpis.underInvestigation !== undefined ? kpis.underInvestigation : 1;
  
  const elDeathsCell = document.getElementById('kpiDeathsCell');
  if (elDeaths) {
    elDeaths.textContent = kpis.deaths !== undefined ? kpis.deaths : 1;
    if (Number(kpis.deaths) > 1) {
      elDeaths.className = 'kpi-num text-[#F85149] font-bold';
    } else {
      elDeaths.className = 'kpi-num text-white/90';
    }
  }

  if (elDeathsCell) {
    const tooltipText = isEn
      ? (incident?.deathDetailsEn || `${kpis.deaths || 1} Reported Fatalities`)
      : (incident?.deathDetailsPt || `${kpis.deaths || 1} Óbitos Registrados`);
    elDeathsCell.setAttribute('title', tooltipText);
  }

  // Check for Situation Escalation or Increased Deaths to trigger emergency situation-room alarm
  const threatLevelRanks = {
    LOW: 1,
    GUARDED: 2,
    ELEVATED: 3,
    HIGH: 4,
    CRITICAL: 5
  };

  const currentLevelRank = threatLevelRanks[threatLevel] || 2;
  const currentDeaths = kpis.deaths !== undefined ? Number(kpis.deaths) : 1;

  if (state.lastKnownThreatLevelRank !== null && currentLevelRank > state.lastKnownThreatLevelRank) {
    console.log(`[ALERT] Threat level escalated from rank ${state.lastKnownThreatLevelRank} to ${currentLevelRank}`);
    playCriticalEmergencyAlarm();
  } else if (state.lastKnownDeaths !== null && currentDeaths > state.lastKnownDeaths) {
    console.log(`[ALERT] Deaths increased from ${state.lastKnownDeaths} to ${currentDeaths}`);
    playCriticalEmergencyAlarm();
  }

  // Update last known state
  state.lastKnownThreatLevelRank = currentLevelRank;
  state.lastKnownDeaths = currentDeaths;

  // Contacts monitored dynamically from briefing NLP if present
  let dynamicContacts = briefing?.patientMetrics?.detectedCount;
  if (!dynamicContacts) dynamicContacts = '~200';
  else {
    dynamicContacts = dynamicContacts.replace(/\s*(People|Pessoas)/i, '').trim();
    if (!dynamicContacts.startsWith('~')) dynamicContacts = '~' + dynamicContacts;
  }
  if (elContacts) elContacts.textContent = dynamicContacts;

  if (elSecondary) elSecondary.textContent = kpis.secondaryCases !== undefined ? kpis.secondaryCases : 0;
  if (elCountries) elCountries.textContent = kpis.countriesAffected !== undefined ? kpis.countriesAffected : 1;
  if (elExternal) elExternal.textContent = kpis.externalCases !== undefined ? kpis.externalCases : 0;

  // Geographic preview status
  const geoStatusLocal = document.getElementById('geoStatusLocal');
  const geoStatusRussia = document.getElementById('geoStatusRussia');
  const geoStatusIntl = document.getElementById('geoStatusIntl');
  const geoStatusBorders = document.getElementById('geoStatusBorders');
  if (geoStatusLocal) geoStatusLocal.textContent = isEn ? (currentDeaths > 1 ? 'Cordon Active' : 'Contained') : (currentDeaths > 1 ? 'Cordão Ativo' : 'Contido');
  if (geoStatusRussia) geoStatusRussia.textContent = isEn ? 'Monitoring' : 'Monitoramento';
  if (geoStatusIntl) geoStatusIntl.textContent = isEn ? 'None detected' : 'Nenhum detectado';
  if (geoStatusBorders) geoStatusBorders.textContent = isEn ? 'Screening / Monitoring' : 'Triagem / Monitoramento';

  // Risk matrix indicators
  const riskHuman = document.getElementById('riskHumanSpreadVal');
  const riskContact = document.getElementById('riskContactInfectVal');
  const riskGeo = document.getElementById('riskGeoExpansionVal');
  const riskBorders = document.getElementById('riskBordersVal');
  const riskFacility = document.getElementById('riskFacilityVal');
  if (riskHuman) riskHuman.textContent = isEn ? (reasons.secondaryTransmission || 'None') : (reasons.secondaryTransmissionPt || 'Nenhuma');
  if (riskContact) riskContact.textContent = reasons.contactsInfected !== undefined ? reasons.contactsInfected : 0;
  if (riskGeo) riskGeo.textContent = isEn ? (reasons.geographicExpansion || 'None') : (reasons.geographicExpansionPt || 'Nenhuma');
  if (riskBorders) riskBorders.textContent = isEn ? 'Monitoring' : 'Monitoramento';
  if (riskFacility) riskFacility.textContent = isEn ? 'BSL-3 Inspected' : 'BSL-3 Inspecionado';

  // Significant Change Alert System (Req 25)
  const changeAlert = document.getElementById('significantChangeAlert');
  const changeTextEl = document.getElementById('significantChangeText');
  const isDismissed = sessionStorage.getItem('dismissed_significant_change');

  let significantChangeTrigger = null;
  if (currentDeaths > 1) {
    significantChangeTrigger = isEn
      ? 'Second fatality reported at Shelekhov District Hospital (under official dispute).'
      : 'Segunda vítima fatal relatada no Hospital Distrital de Shelekhov (sob apuração / contestada pelo Kremlin).';
  } else if (threatLevel === 'ELEVATED') {
    significantChangeTrigger = isEn
      ? 'Threat level escalated to ELEVATED due to hospital quarantine and reported fatalities.'
      : 'Nível de ameaça elevado para ELEVADO devido à quarentena hospitalar e relatos de óbitos.';
  } else if (kpis.secondaryCases > 0) {
    significantChangeTrigger = isEn ? 'Secondary transmission detected in monitored contacts.' : 'Transmissão secundária detectada entre contatos monitorados.';
  } else if (kpis.externalCases > 0) {
    significantChangeTrigger = isEn ? 'International spread / cross-border case reported.' : 'Disseminação internacional / caso transfronteiriço reportado.';
  } else if (kpis.confirmed > 0) {
    significantChangeTrigger = isEn ? 'New confirmed plague case verified by health authorities.' : 'Novo caso confirmado de peste verificado pelas autoridades de saúde.';
  } else if (kpis.countriesAffected > 1) {
    significantChangeTrigger = isEn ? 'New region/country affected outside Russian Federation.' : 'Nova região/país afetado fora da Federação Russa.';
  } else if (incident?.internationalSurveillance?.some(s => s.agency.includes('WHO') && (s.level === 'warning' || s.level === 'critical'))) {
    significantChangeTrigger = isEn ? 'World Health Organization (WHO) upgraded regional risk assessment.' : 'Organização Mundial da Saúde (OMS) elevou avaliação de risco regional.';
  } else if (state.news.some(n => n.severity === 'high')) {
    significantChangeTrigger = isEn ? 'Critical epidemiological milestone reported by official wire.' : 'Marco epidemiológico crítico reportado por agência oficial.';
  }

  if (changeAlert) {
    if (significantChangeTrigger && !isDismissed) {
      if (changeTextEl) changeTextEl.textContent = significantChangeTrigger;
      changeAlert.classList.remove('hidden');
    } else {
      changeAlert.classList.add('hidden');
    }
  }
}

// 2. What Changed Since Last Visit Delta (Req 26)
function updateWhatChangedDelta() {
  const currentCount = state.news.length;
  const currentVerified = state.news.filter(n => n.trustTier?.tier === 'TIER 1' || n.trustTier?.tier === 'TIER 2' || n.classification === 'OFFICIAL' || n.classification === 'CONFIRMED').length;
  const savedState = localStorage.getItem('outbreak_intel_session_state');
  let deltaNews = 0;
  let previousTimestamp = null;

  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      if (parsed.lastChecked) previousTimestamp = parsed.lastChecked;
      if (parsed.verifiedCount !== undefined && currentVerified >= parsed.verifiedCount) {
        deltaNews = currentVerified - parsed.verifiedCount;
      } else if (parsed.newsCount && currentCount >= parsed.newsCount) {
        deltaNews = currentCount - parsed.newsCount;
      }
    } catch (e) {}
  }

  const isEn = state.currentLang === 'en';
  const summaryEl = document.getElementById('whatChangedSummary');
  const timestampEl = document.getElementById('lastVisitTimestamp');

  const levelNames = THREAT_LEVEL_NAMES[state.currentLang] || THREAT_LEVEL_NAMES.en;
  const threatLevel = state.incident?.threatAssessment?.level || 'GUARDED';
  const translatedLevel = levelNames[threatLevel] || threatLevel;

  if (summaryEl) {
    const currentDeaths = state.incident?.kpis?.deaths || 1;
    let riskSnippet = '';
    if (currentDeaths > 1 || threatLevel === 'ELEVATED') {
      riskSnippet = isEn
        ? `Alert escalated to ${translatedLevel} (+1 fatality claimed in Shelekhov) · 5 hospitals quarantined`
        : `Alerta elevado para ${translatedLevel} (+1 óbito relatado em Shelekhov) · 5 hospitais sob quarentena`;
    } else {
      riskSnippet = isEn
        ? `Risk level (${translatedLevel}) · Contact testing remains negative`
        : `Nível (${translatedLevel}) · Testagem de contatos permanece negativa`;
    }

    const text = isEn
      ? `+${deltaNews} new verified reports · ${riskSnippet}`
      : `+${deltaNews} novos despachos verificados · ${riskSnippet}`;
    summaryEl.textContent = text;
  }

  if (timestampEl) {
    if (previousTimestamp) {
      const timeStr = new Date(previousTimestamp).toLocaleTimeString(isEn ? 'en-US' : 'pt-BR', { hour12: false });
      timestampEl.textContent = isEn ? `Previous check: ${timeStr} UTC` : `Registro anterior: ${timeStr} UTC`;
    } else {
      timestampEl.textContent = isEn ? 'Reference: Baseline Active' : 'Referência: Linha de Base Ativa';
    }
  }

  // Update session state
  localStorage.setItem('outbreak_intel_session_state', JSON.stringify({
    newsCount: currentCount,
    verifiedCount: currentVerified,
    lastChecked: previousTimestamp || Date.now()
  }));
}

// 3. Incident Milestones (Top 5-7 events on Overview)
function renderOverviewMilestones() {
  const container = document.getElementById('overviewMilestonesList');
  if (!container) return;

  const rawTimeline = [...(state.incident?.timeline || [])];
  // Strictly chronological order (earliest to newest)
  rawTimeline.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));

  const isEn = state.currentLang === 'en';
  const displayItems = rawTimeline.slice(0, 7);
  const classLabels = CLASSIFICATION_LABELS[state.currentLang] || CLASSIFICATION_LABELS.en;

  container.innerHTML = displayItems.map((item, idx) => {
    let tagClass = 'tag-reported';
    if (item.classification === 'CONFIRMED') tagClass = 'tag-confirmed';
    else if (item.classification === 'OFFICIAL') tagClass = 'tag-official';
    else if (item.classification === 'DISPUTED') tagClass = 'tag-disputed';
    else if (item.classification === 'UNVERIFIED') tagClass = 'tag-unverified';

    const dateStr = isEn ? (item.dateEn || item.date) : (item.datePt || item.date);
    const titleStr = isEn ? (item.titleEn || item.title) : (item.titlePt || item.title);
    const descStr = isEn ? (item.descriptionEn || item.description) : (item.descriptionPt || item.description);
    const localizedClass = classLabels[item.classification] || item.classification;

    return `
      <div class="cursor-pointer flex items-start space-x-3 p-2.5 bg-white/[0.02] hover:bg-white/[0.05] rounded border border-white/[0.04] transition group" onclick="window.openIntelligenceDrawer('event', window.outbreakState?.incident?.timeline?.[${idx}])">
        <div class="w-2 h-2 rounded-full bg-[#388BFD] group-hover:bg-[#58A6FF] mt-1.5 shrink-0 transition shadow-sm"></div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between gap-3 mb-1">
            <div class="flex items-center space-x-2 min-w-0 flex-1">
              <span class="font-mono text-[11px] font-bold text-white/90 shrink-0">${dateStr}</span>
              <span class="text-white/30 text-[10px]">·</span>
              <span class="font-semibold text-white/90 text-xs group-hover:text-[#58A6FF] transition truncate">${titleStr}</span>
            </div>
            <span class="tag-badge ${tagClass} text-[9px] shrink-0">${localizedClass}</span>
          </div>
          <p class="text-white/60 text-[11px] leading-relaxed line-clamp-2">${descStr}</p>
        </div>
      </div>
    `;
  }).join('');
}

// 4. Outbreak Evolution (Interactive Chart.js Stepped Curve + Quantitative Table)
let evolutionChartInstance = null;

function renderEvolutionChart(filteredData) {
  const canvas = document.getElementById('evolutionChartCanvas');
  if (!canvas || typeof Chart === 'undefined') return;

  const ctx = canvas.getContext('2d');
  const labels = filteredData.map(d => d.dateLabel || d.title);
  const suspected = filteredData.map(d => Number(d.suspected) || 0);
  const confirmed = filteredData.map(d => Number(d.confirmed) || 0);
  const deaths = filteredData.map(d => Number(d.deaths) || 0);
  const contacts = filteredData.map(d => Number(d.contacts) || 0);

  if (evolutionChartInstance) {
    evolutionChartInstance.destroy();
    evolutionChartInstance = null;
  }

  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const textColor = isLight ? '#24292F' : '#8B949E';
  const gridColor = isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)';

  evolutionChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: state.currentLang === 'en' ? 'Fatalities' : 'Óbitos',
          data: deaths,
          borderColor: '#F85149',
          backgroundColor: 'rgba(248, 81, 73, 0.12)',
          borderWidth: 2.5,
          stepped: 'after',
          fill: true,
          tension: 0,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointBackgroundColor: '#F85149',
          yAxisID: 'y'
        },
        {
          label: state.currentLang === 'en' ? 'Confirmed' : 'Confirmados',
          data: confirmed,
          borderColor: '#388BFD',
          backgroundColor: 'transparent',
          borderWidth: 2,
          stepped: 'after',
          tension: 0,
          pointRadius: 3,
          pointBackgroundColor: '#388BFD',
          yAxisID: 'y'
        },
        {
          label: state.currentLang === 'en' ? 'Under Investigation' : 'Sob Investigação',
          data: suspected,
          borderColor: '#D29922',
          backgroundColor: 'transparent',
          borderWidth: 2,
          stepped: 'after',
          tension: 0,
          pointRadius: 3,
          pointBackgroundColor: '#D29922',
          yAxisID: 'y'
        },
        {
          label: state.currentLang === 'en' ? 'Contacts (~)' : 'Contatos (~)',
          data: contacts,
          borderColor: '#6E7681',
          borderDash: [3, 3],
          backgroundColor: 'transparent',
          borderWidth: 1.5,
          tension: 0.1,
          pointRadius: 2,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        legend: {
          position: 'top',
          align: 'end',
          labels: {
            boxWidth: 8,
            boxHeight: 8,
            color: textColor,
            font: {
              family: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              size: 10
            }
          }
        },
        tooltip: {
          backgroundColor: isLight ? '#FFFFFF' : '#151E29',
          titleColor: isLight ? '#090D13' : '#F0F6FC',
          bodyColor: isLight ? '#24292F' : '#C9D1D9',
          borderColor: isLight ? '#E1E4E8' : '#243040',
          borderWidth: 1,
          padding: 8,
          bodyFont: {
            family: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            size: 11
          }
        }
      },
      scales: {
        x: {
          grid: { color: gridColor },
          ticks: {
            color: textColor,
            font: { family: 'ui-monospace, SFMono-Regular, Menlo, monospace', size: 10 }
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          grid: { color: gridColor },
          ticks: {
            color: textColor,
            stepSize: 1,
            font: { family: 'ui-monospace, SFMono-Regular, Menlo, monospace', size: 10 }
          },
          title: {
            display: false
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: { drawOnChartArea: false },
          ticks: {
            color: '#6E7681',
            font: { family: 'ui-monospace, SFMono-Regular, Menlo, monospace', size: 9 }
          },
          title: {
            display: false
          }
        }
      }
    }
  });
}

function renderOutbreakEvolution() {
  const tbody = document.getElementById('evolutionTableBody');
  const evoData = state.incident?.outbreakEvolution || [];
  const isEn = state.currentLang === 'en';

  let displayData = [...evoData];
  const range = state.evolutionRange || 'all';

  if (range === '24h' && evoData.length > 2) {
    displayData = evoData.slice(-2);
  } else if (range === '7d' && evoData.length > 4) {
    displayData = evoData.slice(-4);
  } else if (range === '30d' && evoData.length > 6) {
    displayData = evoData.slice(-6);
  }

  // Render Chart
  renderEvolutionChart(displayData);

  // Render Table
  if (tbody) {
    tbody.innerHTML = evoData.map(step => `
      <tr class="hover:bg-white/[0.02] transition">
        <td class="py-2 px-2.5 text-white/90 font-bold">${step.dateLabel}</td>
        <td class="py-2 px-2.5 text-white/70">
          <div class="font-medium">${isEn ? step.title : (step.titlePt || step.title)}</div>
          <div class="text-[10px] text-white/40 font-sans">${step.description}</div>
        </td>
        <td class="py-2 px-2.5 text-right text-[#D29922] font-semibold">${step.suspected}</td>
        <td class="py-2 px-2.5 text-right text-[#2EA043] font-semibold">${step.confirmed}</td>
        <td class="py-2 px-2.5 text-right ${Number(step.deaths) > 1 ? 'text-[#F85149] font-bold' : 'text-white/90'}">${step.deaths}</td>
        <td class="py-2 px-2.5 text-right text-white/90 font-bold">~${step.contacts}</td>
      </tr>
    `).join('');
  }
}

// 5. Latest Verified Intelligence (Top ~5 items on Overview, Req 8 & 16)
function renderLatestVerifiedIntelligence() {
  const container = document.getElementById('latestVerifiedContainer');
  if (!container) return;

  // Filter and prioritize top dispatches with highest confidence tiers first (Tier 1 > Tier 2 > Tier 3)
  const tierRank = (item) => {
    if (item.trustTier?.tier === 'TIER 1') return 1;
    if (item.trustTier?.tier === 'TIER 2') return 2;
    if (item.classification === 'OFFICIAL' || item.classification === 'CONFIRMED') return 2.5;
    if (item.trustTier?.tier === 'TIER 3') return 3;
    return 4;
  };

  const prioritized = [...state.news]
    .filter(n => n.trustTier?.tier === 'TIER 1' || n.trustTier?.tier === 'TIER 2' || n.classification === 'OFFICIAL' || n.classification === 'CONFIRMED')
    .sort((a, b) => {
      const rA = tierRank(a);
      const rB = tierRank(b);
      if (rA !== rB) return rA - rB;
      return b.pubTimestamp - a.pubTimestamp;
    });

  const topItems = prioritized.slice(0, 5);
  const itemsToRender = topItems.length >= 3 ? topItems : state.news.slice(0, 5);
  const dict = TRANSLATIONS[state.currentLang];
  const classLabels = CLASSIFICATION_LABELS[state.currentLang] || CLASSIFICATION_LABELS.en;

  if (itemsToRender.length === 0) {
    container.innerHTML = '<div class="py-6 text-center text-white/40">Synchronizing verified dispatches...</div>';
    return;
  }

  container.innerHTML = itemsToRender.map(item => {
    let tagClass = 'tag-reported';
    if (item.classification === 'CONFIRMED') tagClass = 'tag-confirmed';
    else if (item.classification === 'OFFICIAL') tagClass = 'tag-official';
    else if (item.classification === 'DISPUTED') tagClass = 'tag-disputed';
    else if (item.classification === 'UNVERIFIED') tagClass = 'tag-unverified';

    const tierCode = item.trustTier?.tierCode || 'tier-3';
    const tierName = item.trustTier?.tier || 'TIER 3';
    const localizedClass = classLabels[item.classification || 'REPORTED'] || (item.classification || 'REPORTED');

    return `
      <div class="intel-row flex flex-col space-y-1">
        <div class="flex items-center justify-between gap-2 flex-wrap text-[11px]">
          <div class="flex items-center space-x-2">
            <span class="tier-pill ${tierCode}">${tierName}</span>
            <span class="font-bold text-[#388BFD] font-mono">${item.source}</span>
            <span class="text-white/20">|</span>
            <span class="tag-badge ${tagClass} text-[9px]">${localizedClass}</span>
          </div>
          <span class="text-white/40 font-mono text-[10px]">${formatRelativeTime(item.pubTimestamp)}</span>
        </div>

        <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="text-xs sm:text-sm font-semibold text-white/90 hover:text-[#388BFD] leading-snug flex items-start gap-1.5 group">
          <span>${item.title}</span>
          <i data-lucide="external-link" class="w-3 h-3 text-white/30 group-hover:text-[#388BFD] shrink-0 mt-1 transition"></i>
        </a>

        ${item.summary ? `<p class="text-[11px] text-white/50 leading-relaxed line-clamp-1 font-normal">${item.summary}</p>` : ''}
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// 6. Rumor Watch (Overview Highlight & Intelligence Full Matrix)
function renderRumorWatch() {
  const overviewContainer = document.getElementById('overviewRumorWatchContainer');
  const fullTableBody = document.getElementById('rumorWatchTableBody');
  const rumorData = state.incident?.rumorWatch || [];
  const isEn = state.currentLang === 'en';

  const mapTrend = (t) => {
    if (t === 'rising') return isEn ? '↑ Rising' : '↑ Em Alta';
    return isEn ? '→ Stable' : '→ Estável';
  };
  const mapValue = (v) => {
    if (isEn) return v;
    if (v === 'High') return 'Alta';
    if (v === 'Medium') return 'Média';
    if (v === 'Low') return 'Baixa';
    if (v === 'Verified') return 'Verificado';
    if (v === 'Partial') return 'Parcial';
    if (v === 'None') return 'Nenhuma';
    return v;
  };

  if (overviewContainer) {
    overviewContainer.innerHTML = rumorData.slice(0, 3).map(r => `
      <div class="p-3 bg-white/[0.02] rounded border border-white/[0.06] flex flex-col justify-between">
        <div class="flex items-center justify-between mb-2">
          <span class="font-mono text-xs font-bold text-white/90">${r.topic}</span>
          <span class="text-[10px] font-mono ${r.trend === 'rising' ? 'text-[#D29922]' : 'text-white/50'}">
            ${mapTrend(r.trend)}
          </span>
        </div>
        <div class="grid grid-cols-3 gap-1 text-[10px] font-mono text-center mb-2">
          <div class="bg-white/[0.02] p-1 rounded">
            <span class="text-white/40 block">${isEn ? 'Virality' : 'Viralidade'}</span>
            <span class="text-[#D29922] font-bold">${mapValue(r.virality)}</span>
          </div>
          <div class="bg-white/[0.02] p-1 rounded">
            <span class="text-white/40 block">${isEn ? 'Credibility' : 'Credibilidade'}</span>
            <span class="${r.credibility === 'High' ? 'text-[#2EA043]' : (r.credibility === 'Medium' ? 'text-[#D29922]' : 'text-white/50')} font-bold">${mapValue(r.credibility)}</span>
          </div>
          <div class="bg-white/[0.02] p-1 rounded">
            <span class="text-white/40 block">${isEn ? 'Corroboration' : 'Corroboração'}</span>
            <span class="${r.corroboration === 'Verified' ? 'text-[#2EA043]' : 'text-white/50'} font-bold">${mapValue(r.corroboration)}</span>
          </div>
        </div>
        <p class="text-[10px] text-white/50 leading-tight">${isEn ? (r.noteEn || r.note) : (r.notePt || r.note)}</p>
      </div>
    `).join('');
  }

  if (fullTableBody) {
    fullTableBody.innerHTML = rumorData.map(r => `
      <tr class="hover:bg-white/[0.02] transition">
        <td class="py-2 px-2 text-white/90 font-bold font-mono">${r.topic}</td>
        <td class="py-2 px-2 text-white/60 font-mono text-[10px]">${r.platform}</td>
        <td class="py-2 px-2 font-mono text-[#D29922] font-semibold">${mapValue(r.virality)}</td>
        <td class="py-2 px-2 font-mono ${r.credibility === 'High' ? 'text-[#2EA043]' : (r.credibility === 'Medium' ? 'text-[#D29922]' : 'text-white/50')} font-semibold">${mapValue(r.credibility)}</td>
        <td class="py-2 px-2 font-mono ${r.corroboration === 'Verified' ? 'text-[#2EA043]' : 'text-white/50'}">${mapValue(r.corroboration)}</td>
        <td class="py-2 px-2 font-mono ${r.trend === 'rising' ? 'text-[#D29922]' : 'text-white/40'}">${mapTrend(r.trend)}</td>
        <td class="py-2 px-2 text-white/60 font-sans text-xs">${isEn ? (r.noteEn || r.note) : (r.notePt || r.note)}</td>
      </tr>
    `).join('');
  }
}

// 6.1. Pathogen Intelligence (Overview Card, Powered by Gemini AI)
function renderPathogenIntelligence() {
  const card = document.getElementById('pathogenIntelCard');
  if (!card) return;

  const data = state.pathogenIntel;
  const isEn = state.currentLang === 'en';
  const dict = TRANSLATIONS[state.currentLang];

  if (!data) return;

  const engineLabel = document.getElementById('pathogenEngineLabel');
  const agentIdentity = document.getElementById('pathogenAgentIdentity');
  const aiSummaryText = document.getElementById('pathogenAiSummaryText');
  const keyFindingsContainer = document.getElementById('pathogenKeyFindings');
  const dispatchesEl = document.getElementById('pathogenDispatchesAnalyzed');
  const lastUpdatedEl = document.getElementById('pathogenLastUpdated');

  if (engineLabel) engineLabel.textContent = data.engine || (isEn ? 'GEMINI 1.5 FLASH' : 'GEMINI 1.5 FLASH');
  if (agentIdentity) agentIdentity.textContent = data.agentIdentity || (isEn ? 'Yersinia pestis (Suspected) / Unknown Etiology' : 'Yersinia pestis (Suspeita) / Etiologia Desconhecida');
  if (aiSummaryText) aiSummaryText.textContent = data.executiveSummary || dict.pathogenSyncing;

  if (dispatchesEl && data.dispatchesAnalyzedCount) {
    dispatchesEl.textContent = dict.pathogenDispatchesAnalyzed.replace('{n}', data.dispatchesAnalyzedCount);
  }

  if (lastUpdatedEl && data.lastAnalyzed) {
    const timeStr = new Date(data.lastAnalyzed).toLocaleTimeString(isEn ? 'en-US' : 'pt-BR', { hour12: false });
    lastUpdatedEl.textContent = `${isEn ? 'Updated' : 'Atualizado'}: ${timeStr}`;
  }

  if (keyFindingsContainer && Array.isArray(data.findings)) {
    keyFindingsContainer.innerHTML = data.findings.map(f => {
      let badgeClass = 'tag-reported';
      if (f.statusType === 'safe') badgeClass = 'tag-confirmed';
      else if (f.statusType === 'warning') badgeClass = 'tag-unverified';
      else if (f.statusType === 'danger') badgeClass = 'tag-disputed';
      else if (f.statusType === 'info') badgeClass = 'tag-official';

      return `
        <div class="p-2.5 bg-white/[0.02] hover:bg-white/[0.04] rounded-md border border-white/[0.04] transition mb-1.5">
          <div class="flex items-center justify-between gap-3 mb-1">
            <span class="text-[11px] font-bold text-white/90 font-mono tracking-tight min-w-0 flex-1 truncate">${f.label}</span>
            <span class="tag-badge ${badgeClass} text-[9px] font-mono shrink-0">${f.status}</span>
          </div>
          <p class="text-[11px] text-white/60 leading-relaxed font-sans">${f.details}</p>
        </div>
      `;
    }).join('');
  }

  lucide.createIcons();
}

// 7. Full Timeline Archive (Tab 2)
function renderTimelineArchive() {
  const container = document.getElementById('fullTimelineContainer');
  if (!container) return;

  const rawTimeline = [...(state.incident?.timeline || [])];
  // Strictly chronological order (earliest to newest)
  rawTimeline.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));

  const isEn = state.currentLang === 'en';
  const classLabels = CLASSIFICATION_LABELS[state.currentLang] || CLASSIFICATION_LABELS.en;
  const sourcePrefix = isEn ? 'Source:' : 'Fonte:';

  let filtered = [...rawTimeline];
  if (state.timelineFilter !== 'all') {
    filtered = filtered.filter(item => item.classification === state.timelineFilter);
  }

  container.innerHTML = filtered.map((item, idx) => {
    let dotColor = 'bg-[#388BFD]';
    let tagClass = 'tag-reported';
    if (item.classification === 'CONFIRMED') {
      dotColor = 'bg-[#2EA043]';
      tagClass = 'tag-confirmed';
    } else if (item.classification === 'OFFICIAL') {
      dotColor = 'bg-[#388BFD]';
      tagClass = 'tag-official';
    } else if (item.classification === 'DISPUTED') {
      dotColor = 'bg-[#F85149]';
      tagClass = 'tag-disputed';
    } else if (item.classification === 'UNVERIFIED') {
      dotColor = 'bg-[#D29922]';
      tagClass = 'tag-unverified';
    }

    const dateStr = isEn ? (item.dateEn || item.date) : (item.datePt || item.date);
    const titleStr = isEn ? (item.titleEn || item.title) : (item.titlePt || item.title);
    const descStr = isEn ? (item.descriptionEn || item.description) : (item.descriptionPt || item.description);
    const localizedClass = classLabels[item.classification] || item.classification;

    return `
      <div class="relative pl-4 pb-4">
        <div class="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full ${dotColor} ring-4 ring-black"></div>
        <div class="intel-panel p-3">
          <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center space-x-2">
              <span class="font-mono text-xs font-bold text-white/90">${dateStr}</span>
              <span class="text-white/20">|</span>
              <span class="text-xs font-bold text-white">${titleStr}</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="tag-badge ${tagClass} text-[9px]">${localizedClass}</span>
              ${item.source ? `<span class="text-[10px] text-white/40 font-mono">${sourcePrefix} ${item.source}</span>` : ''}
            </div>
          </div>
          <p class="text-xs text-white/70 leading-relaxed">${descStr}</p>
        </div>
      </div>
    `;
  }).join('');
}

// 8. Specialized Intelligence Modules (Tab 4)
function renderIntelligenceModules() {
  // Flights table
  const flightsTableBody = document.getElementById('flightsTableBody');
  const routes = state.flights?.scheduledRoutes || [];
  if (flightsTableBody && routes.length > 0) {
    flightsTableBody.innerHTML = routes.map(f => `
      <tr class="hover:bg-white/[0.02] transition">
        <td class="py-2 px-2 text-white/90 font-bold">${f.flightNumber}</td>
        <td class="py-2 px-2 text-white/60">${f.airline}</td>
        <td class="py-2 px-2 text-white/80">${f.origin} ➔ ${f.destination}</td>
        <td class="py-2 px-2 text-white/60">${f.scheduledDeparture}</td>
        <td class="py-2 px-2 text-[#388BFD] text-[10px]">${f.healthStatus}</td>
        <td class="py-2 px-2 text-right">
          <span class="tag-badge tag-confirmed text-[9px]">${f.status}</span>
        </td>
      </tr>
    `).join('');
  }

  // Airspace transponder badge
  const transponderBadge = document.getElementById('airspaceTransponderBadge');
  if (transponderBadge && state.flights?.liveAirspace) {
    const active = state.flights.liveAirspace.activeTranspondersOverhead || 0;
    transponderBadge.textContent = `OpenSky: ${active} Aircraft Tracked in Vicinity`;
  }

  // Panic Status
  const fullPanicStatus = document.getElementById('fullPanicStatus');
  if (fullPanicStatus && state.social) {
    fullPanicStatus.textContent = `${state.social.panicStatus} (${state.social.panicIndex}%)`;
  }

  // Social Video & Post tracking
  const socialPostsContainer = document.getElementById('trackedSocialPostsContainer');
  if (socialPostsContainer && state.social?.posts) {
    socialPostsContainer.innerHTML = state.social.posts.slice(0, 6).map(p => `
      <div class="p-2.5 bg-white/[0.02] rounded border border-white/[0.04] flex flex-col justify-between">
        <div class="flex items-center justify-between text-[10px] font-mono mb-1">
          <span class="tag-badge tag-unverified text-[9px]">${p.platform}</span>
          <span class="text-white/40">${formatRelativeTime(p.pubTimestamp)}</span>
        </div>
        <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="text-xs font-medium text-white/90 hover:text-[#388BFD] leading-snug mb-1">
          ${p.title}
        </a>
        <div class="flex items-center justify-between text-[10px] text-white/40 font-mono pt-1 border-t border-white/[0.04]">
          <span>Est. views: ~${p.estimatedViews.toLocaleString()}</span>
          <span class="text-[#388BFD]">Signal Active</span>
        </div>
      </div>
    `).join('');
  }

  // International Response Cards
  const intlContainer = document.getElementById('intlResponseCardsContainer');
  const intlData = state.incident?.internationalSurveillance || [];
  if (intlContainer) {
    intlContainer.innerHTML = intlData.map(d => `
      <div class="p-3 bg-white/[0.02] rounded border border-white/[0.04] flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between font-mono text-white/90 font-bold text-xs mb-1">
            <span>${d.agency}</span>
            <span class="tag-badge tag-official text-[9px]">${d.status}</span>
          </div>
          <p class="text-white/70 text-[11px] leading-relaxed my-1.5">${d.assessment}</p>
        </div>
        <div class="text-[10px] text-white/40 font-mono pt-1.5 border-t border-white/[0.04]">
          Statement: ${d.lastStatement}
        </div>
      </div>
    `).join('');
  }

  // Biosecurity Dossier
  const bioContainer = document.getElementById('biosecurityDossierContent');
  const bio = state.incident?.biosecurity;
  if (bioContainer && bio) {
    bioContainer.innerHTML = `
      <div class="bg-white/[0.02] p-3 rounded border border-white/[0.04] space-y-2">
        <h4 class="font-bold text-white text-xs font-mono">Official Regulatory Findings</h4>
        <div class="text-[11px] text-white/70 leading-relaxed">
          <strong>Facility:</strong> ${bio.facility}<br>
          <strong>Classification:</strong> ${bio.classification}<br>
          <strong>Pathogen under investigation:</strong> ${bio.agentUnderInvestigation}
        </div>
        <div class="p-2 rounded bg-white/[0.02] border border-white/[0.04] text-[11px] text-white/60">
          <strong class="text-white/80">Position:</strong> ${bio.officialPosition}
        </div>
      </div>

      <div class="bg-white/[0.02] p-3 rounded border border-white/[0.04] space-y-2">
        <h4 class="font-bold text-white text-xs font-mono">Independent Inquiry & Measures</h4>
        <div class="text-[11px] text-white/70 leading-relaxed">
          ${bio.independentReporting}
        </div>
        <div class="p-2 rounded bg-white/[0.02] border border-white/[0.04] text-[11px] text-white/60">
          <strong class="text-[#D29922]">Legal Action:</strong> ${bio.legalAction}<br>
          <strong class="text-[#2EA043]">Containment:</strong> ${bio.containmentMeasures}
        </div>
      </div>
    `;
  }

  // Border Monitoring (Req 13)
  const borderGrid = document.getElementById('borderMonitoringGrid');
  const borderData = state.incident?.borderMonitoring || [];
  const isEn = state.currentLang === 'en';
  if (borderGrid && borderData.length > 0) {
    borderGrid.innerHTML = borderData.map(b => `
      <div class="bg-white/[0.02] p-3 rounded border border-white/[0.04] flex flex-col justify-between">
        <div class="flex items-center justify-between font-mono text-white/90 font-bold mb-1 text-xs">
          <span>${isEn ? b.region : (b.regionPt || b.region)}</span>
          <span class="tag-badge ${b.tagClass || 'tag-confirmed'} text-[9px]">${isEn ? b.status : (b.statusPt || b.status)}</span>
        </div>
        <p class="text-white/60 text-[11px] leading-relaxed mt-1">
          ${isEn ? b.details : (b.detailsPt || b.details)}
        </p>
      </div>
    `).join('');
  }

  // Viral Hashtags & TikTok Direct Signals (Req 3, 12, 13)
  const hashtagsContainer = document.getElementById('trendingTikTokHashtags');
  const hashtags = state.social?.trendingHashtags || [
    { tag: "#Irkutsk", searchUrl: "https://www.tiktok.com/tag/irkutsk", volume: "High (Regional)", trend: "up" },
    { tag: "#RussiaPlague", searchUrl: "https://www.tiktok.com/tag/russiaplague", volume: "Viral Surge", trend: "up" },
    { tag: "#DaryaShipilova", searchUrl: "https://www.tiktok.com/tag/daryashipilova", volume: "Trending", trend: "up" },
    { tag: "#SiberiaOutbreak", searchUrl: "https://www.tiktok.com/tag/siberia", volume: "Moderate", trend: "stable" },
    { tag: "#QuarentenaRússia", searchUrl: "https://www.tiktok.com/search?q=quarentena+russia+virus", volume: "Rising", trend: "up" }
  ];

  if (hashtagsContainer) {
    hashtagsContainer.innerHTML = hashtags.map(h => {
      const vol = isEn ? (h.volumeEn || h.volume.replace('Alto', 'High').replace('Viralizando', 'Viral Surge').replace('Em alta', 'Trending').replace('Moderado', 'Moderate').replace('Crescente', 'Rising')) : h.volume;
      return `
        <a href="${h.searchUrl}" target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.03] hover:bg-[#388BFD]/15 text-white/90 hover:text-[#388BFD] border border-white/[0.06] hover:border-[#388BFD]/30 transition group font-mono text-[11px]">
          <span class="font-bold">${h.tag}</span>
          <span class="text-[9px] px-1 py-0.2 rounded bg-white/[0.06] text-white/50">${vol}</span>
          <span class="text-[#D29922] text-[10px]">${h.trend === 'up' ? '↑' : '→'}</span>
        </a>
      `;
    }).join('');
  }
}

// 9. Sources / Newsroom Feed (Tab 5, Req 15)
function renderSourcesFeed() {
  const container = document.getElementById('sourcesFeedContainer');
  const countSummary = document.getElementById('sourcesCountSummary');
  const pageInfo = document.getElementById('paginationInfo');
  const btnPrev = document.getElementById('btnPrevPage');
  const btnNext = document.getElementById('btnNextPage');
  if (!container) return;

  let filtered = [...state.news];

  // Category Filter
  if (state.sourcesCategory !== 'all') {
    filtered = filtered.filter(item => item.category === state.sourcesCategory);
  }

  // Trust Tier Filter
  if (state.sourcesTier !== 'all') {
    filtered = filtered.filter(item => item.trustTier?.tier === state.sourcesTier);
  }

  // Country / Region Filter (Req 15)
  if (state.sourcesCountry !== 'all') {
    filtered = filtered.filter(item => item.country === state.sourcesCountry);
  }

  // Source Filter (Req 15)
  if (state.sourcesSource !== 'all') {
    const srcQuery = state.sourcesSource.toLowerCase();
    filtered = filtered.filter(item => item.source && item.source.toLowerCase().includes(srcQuery));
  }

  // Language Filter (Req 15)
  if (state.sourcesLang !== 'all') {
    filtered = filtered.filter(item => item.language === state.sourcesLang);
  }

  // Search Query
  if (state.sourcesSearch.trim()) {
    const q = state.sourcesSearch.toLowerCase().trim();
    filtered = filtered.filter(item =>
      (item.title && item.title.toLowerCase().includes(q)) ||
      (item.summary && item.summary.toLowerCase().includes(q)) ||
      (item.source && item.source.toLowerCase().includes(q))
    );
  }

  const isEn = state.currentLang === 'en';
  const classLabels = CLASSIFICATION_LABELS[state.currentLang] || CLASSIFICATION_LABELS.en;

  // Total summary
  if (countSummary) {
    countSummary.textContent = isEn
      ? `${filtered.length} of ${state.news.length} total dispatches`
      : `${filtered.length} de ${state.news.length} despachos no total`;
  }

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filtered.length / state.sourcesPerPage));
  if (state.sourcesPage > totalPages) state.sourcesPage = totalPages;
  if (state.sourcesPage < 1) state.sourcesPage = 1;

  const startIndex = (state.sourcesPage - 1) * state.sourcesPerPage;
  const pageItems = filtered.slice(startIndex, startIndex + state.sourcesPerPage);

  if (pageInfo) {
    pageInfo.textContent = isEn
      ? `Page ${state.sourcesPage} of ${totalPages} (${filtered.length} items)`
      : `Página ${state.sourcesPage} de ${totalPages} (${filtered.length} itens)`;
  }
  if (btnPrev) btnPrev.disabled = state.sourcesPage <= 1;
  if (btnNext) btnNext.disabled = state.sourcesPage >= totalPages;

  if (pageItems.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-white/40">
        <i data-lucide="filter-x" class="w-8 h-8 mx-auto mb-2 text-white/20"></i>
        <p class="text-xs font-mono">${isEn ? 'No intelligence dispatches match the selected filters.' : 'Nenhum despacho de inteligência corresponde aos filtros selecionados.'}</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = pageItems.map(item => {
    let tagClass = 'tag-reported';
    if (item.classification === 'CONFIRMED') tagClass = 'tag-confirmed';
    else if (item.classification === 'OFFICIAL') tagClass = 'tag-official';
    else if (item.classification === 'DISPUTED') tagClass = 'tag-disputed';
    else if (item.classification === 'UNVERIFIED') tagClass = 'tag-unverified';

    const tierCode = item.trustTier?.tierCode || 'tier-3';
    const tierName = item.trustTier?.tier || 'TIER 3';
    const tierLabel = item.trustTier?.label || tierName;
    const localizedClass = classLabels[item.classification || 'REPORTED'] || (item.classification || 'REPORTED');

    const tagsHtml = (item.locationTags || []).map(t => `
      <span class="px-1.5 py-0.5 rounded text-[9px] bg-white/[0.04] text-white/60 font-mono">${t}</span>
    `).join('');

    return `
      <article class="intel-row flex flex-col space-y-1.5">
        <div class="flex items-center justify-between gap-2 flex-wrap text-[11px]">
          <div class="flex items-center space-x-2">
            <span class="tier-pill ${tierCode}" title="${tierLabel}">${tierName}</span>
            <span class="font-bold text-[#388BFD] font-mono">${item.source}</span>
            <span class="text-white/20">|</span>
            <span class="tag-badge ${tagClass} text-[9px]">${localizedClass}</span>
            <span class="px-1.5 py-0.5 rounded text-[9px] bg-white/[0.04] text-white/50 font-mono">${item.category || 'General'}</span>
          </div>
          <span class="text-white/40 font-mono text-[10px]">${formatRelativeTime(item.pubTimestamp)}</span>
        </div>

        <h3 class="text-xs sm:text-sm font-semibold text-white/90 hover:text-[#388BFD] leading-snug">
          <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="flex items-start gap-1 group">
            <span>${item.title}</span>
            <i data-lucide="external-link" class="w-3.5 h-3.5 text-white/30 group-hover:text-[#388BFD] shrink-0 mt-0.5 transition"></i>
          </a>
        </h3>

        ${item.summary ? `<p class="text-xs text-white/50 leading-relaxed line-clamp-2 font-normal">${item.summary}</p>` : ''}

        <div class="flex items-center justify-between pt-1 border-t border-white/[0.03] text-[10px]">
          <div class="flex items-center space-x-1">
            ${tagsHtml}
          </div>
          <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="text-[#388BFD] hover:underline font-mono inline-flex items-center gap-0.5">
            <span>Access Dispatch</span>
            <i data-lucide="chevron-right" class="w-3 h-3"></i>
          </a>
        </div>
      </article>
    `;
  }).join('');

  lucide.createIcons();
}

// 10. Top Marquee Bar
function renderTicker() {
  const track1 = document.getElementById('marqueeTrack1');
  const track2 = document.getElementById('marqueeTrack2');
  if (!track1 || !track2) return;

  const topNews = state.news.filter(n => n.classification === 'OFFICIAL' || n.classification === 'CONFIRMED' || n.trustTier?.tier === 'TIER 1').slice(0, 8);
  if (topNews.length === 0) {
    const fallback = '<span>Surveillance active • No secondary transmission detected • Contacts monitored</span>';
    track1.innerHTML = fallback;
    track2.innerHTML = fallback;
    return;
  }

  const itemsHtml = topNews.map(n => `
    <a href="${n.link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-white/80 hover:text-white transition shrink-0">
      <span class="tag-badge tag-official text-[9px]">${n.source}</span>
      <span class="text-white/90 font-medium">${n.title}</span>
      <span class="text-white/40 text-[10px] font-mono">${formatRelativeTime(n.pubTimestamp)}</span>
    </a>
    <span class="text-white/20">•</span>
  `).join('');

  track1.innerHTML = itemsHtml;
  track2.innerHTML = itemsHtml;
}

// ============================================================================
// MAPS (PREVIEW ON OVERVIEW + FULL SITUATION MAP)
// ============================================================================

function createCustomMarker(point, isEn) {
  let pinColor = '#388BFD';
  if (point.status === 'critical' || point.status === 'incident' || point.layer === 'cases') pinColor = '#F85149';
  else if (point.status === 'warning' || point.status === 'quarantine' || point.layer === 'contacts') pinColor = '#D29922';
  else if (point.status === 'normal') pinColor = '#2EA043';

  const name = isEn ? (point.nameEn || point.name) : point.name;
  const statusText = isEn ? (point.statusTextEn || point.statusText) : point.statusText;
  const details = isEn ? (point.detailsEn || point.details) : point.details;

  const icon = L.divIcon({
    className: 'custom-intel-marker',
    html: `
      <div style="
        width: 12px;
        height: 12px;
        background: ${pinColor};
        border: 2px solid #FFFFFF;
        border-radius: 50%;
        box-shadow: 0 0 8px ${pinColor};
      "></div>
    `,
    iconSize: [12, 12],
    iconAnchor: [6, 6]
  });

  const popupContent = `
    <div style="font-size: 11px; font-family: 'Inter', sans-serif; padding: 2px; line-height: 1.4;">
      <div style="font-weight: 700; color: ${pinColor}; font-family: 'JetBrains Mono', monospace; margin-bottom: 2px;">
        ${name}
      </div>
      <div style="color: #FFFFFF; font-weight: 600; font-size: 10px; margin-bottom: 2px;">${statusText}</div>
      <p style="color: #8B949E; margin: 0; font-size: 10px;">${details}</p>
    </div>
  `;

  const marker = L.marker([point.lat, point.lng], { icon });
  marker.bindPopup(popupContent);
  return { marker, pinColor };
}

// Overview Mini Preview Map
function initOverviewMap() {
  const container = document.getElementById('overviewMapPreview');
  if (!container || state.overviewMap || container._leaflet_id) return;

  state.overviewMap = L.map('overviewMapPreview', {
    zoomControl: true,
    attributionControl: false
  }).setView([52.2869, 104.3050], 4);

  const config = TILE_CONFIGS[state.currentTheme] || TILE_CONFIGS.dark;
  state.overviewTileLayer = L.tileLayer(config.url, {
    maxZoom: 16,
    attribution: config.attribution
  }).addTo(state.overviewMap);

  // Add subtle ring around epicenter
  L.circle([52.2869, 104.3050], {
    color: '#D29922',
    fillColor: '#D29922',
    fillOpacity: 0.15,
    radius: 200000
  }).addTo(state.overviewMap);

  state.overviewMarkerGroup = L.layerGroup().addTo(state.overviewMap);
  renderOverviewMapMarkers();
}

function renderOverviewMapMarkers() {
  if (!state.overviewMap || !state.overviewMarkerGroup || !state.incident?.monitoringPoints) return;
  state.overviewMarkerGroup.clearLayers();

  const isEn = state.currentLang === 'en';
  state.incident.monitoringPoints.forEach(point => {
    const { marker } = createCustomMarker(point, isEn);
    marker.addTo(state.overviewMarkerGroup);
  });
}

// Full Situation Map (Tab 3)
function initMainMap() {
  const container = document.getElementById('mainMapContainer');
  if (!container || state.mainMap || container._leaflet_id) return;

  state.mainMap = L.map('mainMapContainer', {
    zoomControl: true,
    attributionControl: false
  }).setView([52.2869, 104.3050], 4);

  const config = TILE_CONFIGS[state.currentTheme] || TILE_CONFIGS.dark;
  state.mainTileLayer = L.tileLayer(config.url, {
    maxZoom: 16,
    attribution: config.attribution
  }).addTo(state.mainMap);

  state.mainMarkerGroup = L.layerGroup().addTo(state.mainMap);
  renderMainMapMarkers();
  setTimeout(() => {
    if (state.mainMap) state.mainMap.invalidateSize();
  }, 150);
}

function renderMainMapMarkers() {
  if (!state.mainMap || !state.mainMarkerGroup || !state.incident?.monitoringPoints) return;
  state.mainMarkerGroup.clearLayers();

  const isEn = state.currentLang === 'en';
  let points = state.incident.monitoringPoints;

  if (state.mapLayer !== 'all') {
    points = points.filter(p => p.layer === state.mapLayer);
  }

  points.forEach(point => {
    const { marker } = createCustomMarker(point, isEn);
    marker.addTo(state.mainMarkerGroup);
  });
}

// ============================================================================
// DATA FETCHING & SYNCHRONIZATION
// ============================================================================

async function loadData(forceRefresh = false) {
  const refreshIcon = document.getElementById('refreshIcon');
  if (refreshIcon) refreshIcon.classList.add('animate-spin');

  try {
    const lang = state.currentLang;
    const [newsRes, socialRes, incidentRes, briefingRes, flightsRes, pathogenRes] = await Promise.all([
      fetch(`/api/news${forceRefresh ? '?refresh=true' : ''}`),
      fetch('/api/social'),
      fetch('/api/incident'),
      fetch(`/api/briefing?lang=${lang}`),
      fetch('/api/flights'),
      fetch(`/api/pathogen-intel?lang=${lang}${forceRefresh ? '&refresh=true' : ''}`)
    ]);

    const newsData = await newsRes.json();
    const socialData = await socialRes.json();
    const incidentData = await incidentRes.json();
    const briefingData = await briefingRes.json();
    const flightsData = await flightsRes.json();
    const pathogenData = await pathogenRes.json();

    if (newsData.success) {
      if (state.news.length > 0 && newsData.data.length > 0) {
        const newestId = newsData.data[0].id;
        if (state.lastKnownFirstId && newestId !== state.lastKnownFirstId) {
          playNotificationChime();
        }
      }
      state.news = newsData.data;
      if (newsData.data.length > 0) {
        state.lastKnownFirstId = newsData.data[0].id;
      }
    }

    if (socialData.success) state.social = socialData;
    if (incidentData.success) state.incident = incidentData.data;
    if (briefingData && briefingData.success) state.briefing = briefingData;
    if (flightsData && flightsData.success) state.flights = flightsData;
    if (pathogenData && pathogenData.success) state.pathogenIntel = pathogenData.data;

    // Update timestamp
    const nowTimeStr = new Date().toLocaleTimeString('en-US', { hour12: false });
    const headerTime = document.getElementById('headerLastUpdated');
    const footerTime = document.getElementById('footerClock');
    if (headerTime) headerTime.textContent = nowTimeStr;
    if (footerTime) footerTime.textContent = `${nowTimeStr} UTC`;

    // Render all components
    renderOverviewThreatAndKPIs();
    renderOverviewMilestones();
    renderOutbreakEvolution();
    renderLatestVerifiedIntelligence();
    renderRumorWatch();
    renderPathogenIntelligence();
    renderTimelineArchive();
    renderIntelligenceModules();
    renderSourcesFeed();
    renderTicker();
    updateWhatChangedDelta();
    renderOverviewMapMarkers();
    renderMainMapMarkers();

  } catch (err) {
    console.error('[Outbreak Intel Fetch Error]', err);
  } finally {
    if (refreshIcon) refreshIcon.classList.remove('animate-spin');
  }
}

// Server-Sent Events (SSE)
function setupSSE() {
  try {
    const eventSource = new EventSource('/api/stream');
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'news_updated' || data.type === 'background_refresh') {
          loadData(false);
        }
      } catch (e) {}
    };
  } catch (e) {
    console.warn('[SSE notice]', e);
  }
}

// Countdown loop
function startCountdown() {
  state.countdown = 60;
  const syncCountdown = document.getElementById('syncCountdown');

  if (state.countdownInterval) clearInterval(state.countdownInterval);
  state.countdownInterval = setInterval(() => {
    state.countdown--;
    if (syncCountdown) {
      syncCountdown.textContent = `SYNC: ${state.countdown}s`;
    }
    if (state.countdown <= 0) {
      state.countdown = 60;
      loadData(true);
    }
  }, 1000);
}

// ============================================================================
// SLIDE-OUT INTELLIGENCE DRAWER CONTROLLER
// ============================================================================

function openIntelligenceDrawer(type, payload) {
  const drawer = document.getElementById('intelligenceDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  const title = document.getElementById('drawerTitle');
  const body = document.getElementById('drawerBody');
  if (!drawer || !backdrop || !title || !body) return;

  const isEn = state.currentLang === 'en';

  if (type === 'pathogen') {
    title.textContent = isEn ? 'Pathogen & Laboratory Intelligence Dossier' : 'Dossiê Laboratorial e Patológico do Agente';
    const p = state.pathogenIntel || {};
    body.innerHTML = `
      <div class="space-y-4 text-xs font-sans">
        <div class="p-3.5 bg-white/[0.03] border border-[#243040] rounded-lg">
          <div class="text-[11px] font-mono uppercase text-white/50 mb-1">${isEn ? 'Etiological Classification' : 'Classificação Etiológica'}</div>
          <div class="text-sm font-bold text-white font-mono">${p.agentIdentity || 'Yersinia pestis (Suspected)'}</div>
          <div class="text-[11px] text-[#388BFD] font-mono mt-0.5">${p.engine || 'Neural Extraction: Gemini 1.5 Flash'}</div>
        </div>

        <div class="p-3.5 bg-white/[0.03] border border-[#243040] rounded-lg">
          <div class="text-[11px] font-mono uppercase text-[#388BFD] mb-1 font-bold">${isEn ? 'Executive AI Synthesis' : 'Síntese Executiva de IA'}</div>
          <p class="text-white/85 leading-relaxed">${p.executiveSummary || (isEn ? 'Synchronizing dispatches...' : 'Sincronizando despachos...')}</p>
        </div>

        <div class="p-3.5 bg-white/[0.03] border border-[#243040] rounded-lg">
          <div class="text-[11px] font-mono uppercase text-white/50 mb-2 font-bold">${isEn ? 'Biosecurity & Clinical Verification Matrix' : 'Matriz de Verificação Clínica e Biossegurança'}</div>
          <div class="space-y-2">
            ${(p.findings || []).map(f => `
              <div class="p-2.5 bg-white/[0.02] border border-[#243040] rounded">
                <div class="flex items-center justify-between font-mono text-[11px] mb-1">
                  <span class="font-bold text-white">${f.label}</span>
                  <span class="text-white/60">${f.status}</span>
                </div>
                <div class="text-[11px] text-white/70 leading-relaxed">${f.details}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="p-3 bg-white/[0.03] border border-[#243040] rounded-lg text-[11px] text-white/60 font-mono space-y-1">
          <div>Facility: Irkutsk Anti-Plague Research Institute of Siberia and the Far East</div>
          <div>Jurisdiction: Rospotrebnadzor / Russian Academy of Medical Sciences</div>
          <div>Biocontainment Standard: BSL-3 / Specialized Plague Outbreak Response Unit</div>
        </div>
      </div>
    `;
  } else if (type === 'snapshot') {
    title.textContent = isEn ? 'Comprehensive Situation Audit' : 'Auditoria Abrangente da Situação';
    const inc = state.incident || {};
    const kpis = inc.kpis || {};
    body.innerHTML = `
      <div class="space-y-4 text-xs font-sans">
        <div class="p-3.5 bg-white/[0.03] border border-[#243040] rounded-lg">
          <div class="text-[11px] font-mono uppercase text-[#388BFD] mb-1.5 font-bold">${isEn ? 'Containment Perimeter Status' : 'Status do Perímetro de Contenção'}</div>
          <p class="text-white/85 leading-relaxed mb-3">${isEn ? 'Quarantine cordons remain enforced at Shelekhov District Hospital and affiliated clinics. Medical personnel undergoing daily streptomycin/doxycycline prophylactic monitoring.' : 'Cordões de isolamento continuam vigentes no Hospital Distrital de Shelekhov e clínicas associadas. Equipes sob monitoramento profilático.'}</p>
          <div class="grid grid-cols-2 gap-2 font-mono text-[11px]">
            <div class="p-2 bg-[#090D13] border border-[#243040] rounded flex justify-between"><span>Confirmed:</span> <span class="text-white font-bold">${kpis.confirmed || 0}</span></div>
            <div class="p-2 bg-[#090D13] border border-[#243040] rounded flex justify-between"><span>Suspected:</span> <span class="text-[#D29922] font-bold">${kpis.underInvestigation || 1}</span></div>
            <div class="p-2 bg-[#090D13] border border-[#243040] rounded flex justify-between"><span>Deaths:</span> <span class="text-[#F85149] font-bold">${kpis.deaths || 1}</span></div>
            <div class="p-2 bg-[#090D13] border border-[#243040] rounded flex justify-between"><span>Contacts:</span> <span class="text-white font-bold">${kpis.contactsMonitored || '~200'}</span></div>
          </div>
        </div>

        <div class="p-3.5 bg-white/[0.03] border border-[#243040] rounded-lg">
          <div class="text-[11px] font-mono uppercase text-white/50 mb-1 font-bold">${isEn ? 'Contested Intelligence Assessment' : 'Avaliação de Inteligência Contestada'}</div>
          <p class="text-white/80 leading-relaxed">${isEn ? 'Local Siberian publications report a second fatality among hospital contacts, while official Russian federal sanitarians maintain only one confirmed laboratory transmission. Threat level is kept ELEVATED pending bilateral clarification.' : 'Veículos regionais siberianos relatam uma segunda vítima fatal entre contatos, enquanto autoridades sanitárias federais sustentam apenas uma transmissão em laboratório.'}</p>
        </div>
      </div>
    `;
  } else if (type === 'event' && payload) {
    title.textContent = isEn ? 'Timeline Incident Node Detail' : 'Detalhe do Evento da Linha do Tempo';
    body.innerHTML = `
      <div class="space-y-4 text-xs font-sans">
        <div class="p-3.5 bg-white/[0.03] border border-[#243040] rounded-lg">
          <div class="font-mono text-xs text-[#388BFD] font-bold mb-1">${payload.dateEn || payload.date}</div>
          <div class="text-sm font-bold text-white mb-2">${isEn ? (payload.titleEn || payload.title) : (payload.titlePt || payload.title)}</div>
          <p class="text-white/85 leading-relaxed mb-3">${isEn ? (payload.descriptionEn || payload.description) : (payload.descriptionPt || payload.description)}</p>
          <div class="flex items-center gap-2 font-mono text-[11px]">
            <span class="text-white/40">Classification:</span>
            <span class="tag-badge text-[10px] ${payload.classification === 'CONFIRMED' ? 'tag-confirmed' : payload.classification === 'OFFICIAL' ? 'tag-official' : payload.classification === 'DISPUTED' ? 'tag-disputed' : 'tag-unverified'}">${payload.classification}</span>
          </div>
          ${payload.source ? `<div class="mt-2 text-white/60 font-mono text-[11px]">Primary Source Wire: <span class="text-white/90">${payload.source}</span></div>` : ''}
        </div>
      </div>
    `;
  }

  drawer.classList.add('open');
  backdrop.classList.add('open');
  lucide.createIcons();
}

function closeIntelligenceDrawer() {
  const drawer = document.getElementById('intelligenceDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  if (drawer) drawer.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
}

// ============================================================================
// EVENT LISTENERS & WIRING
// ============================================================================

function setupEventListeners() {
  // Navigation Tabs
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  // Outbreak evolution range selector
  document.querySelectorAll('[data-evo-range]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('[data-evo-range]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.evolutionRange = pill.getAttribute('data-evo-range');
      renderOutbreakEvolution();
    });
  });

  // Slide-out intelligence drawer
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeIntelligenceDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeIntelligenceDrawer);

  const btnOpenSnapshot = document.getElementById('btnOpenSnapshotDossier');
  if (btnOpenSnapshot) btnOpenSnapshot.addEventListener('click', () => openIntelligenceDrawer('snapshot'));

  const btnOpenPathogen = document.getElementById('btnOpenPathogenDrawer');
  if (btnOpenPathogen) btnOpenPathogen.addEventListener('click', () => openIntelligenceDrawer('pathogen'));

  const btnOpenRumor = document.getElementById('btnOpenRumorMatrix');
  if (btnOpenRumor) {
    btnOpenRumor.addEventListener('click', () => {
      switchTab('navIntelligence');
      setTimeout(() => {
        document.getElementById('secRumorWatch')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  }

  // Jump buttons on Overview
  const btnGoToTimeline = document.getElementById('btnGoToTimeline');
  if (btnGoToTimeline) {
    btnGoToTimeline.addEventListener('click', () => switchTab('navTimeline'));
  }

  const btnGoToMap = document.getElementById('btnGoToMap');
  if (btnGoToMap) {
    btnGoToMap.addEventListener('click', () => switchTab('navMap'));
  }

  const btnGoToSources = document.getElementById('btnGoToSources');
  if (btnGoToSources) {
    btnGoToSources.addEventListener('click', () => switchTab('navSources'));
  }

  // Language buttons
  const btnEn = document.getElementById('langBtnEn');
  const btnPt = document.getElementById('langBtnPt');
  if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
  if (btnPt) btnPt.addEventListener('click', () => setLanguage('pt'));

  // Theme Selector buttons
  const btnDark = document.getElementById('themeBtnDark');
  const btnContrast = document.getElementById('themeBtnContrast');
  const btnLight = document.getElementById('themeBtnLight');
  if (btnDark) btnDark.addEventListener('click', () => setTheme('dark'));
  if (btnContrast) btnContrast.addEventListener('click', () => setTheme('high-contrast'));
  if (btnLight) btnLight.addEventListener('click', () => setTheme('light'));

  // Audio toggle
  const toggleAudioBtn = document.getElementById('toggleAudioBtn');
  const audioIcon = document.getElementById('audioIcon');
  if (toggleAudioBtn) {
    toggleAudioBtn.addEventListener('click', () => {
      state.audioEnabled = !state.audioEnabled;
      if (audioIcon) {
        audioIcon.className = state.audioEnabled ? 'w-3.5 h-3.5 text-[#388BFD]' : 'w-3.5 h-3.5 text-white/30';
      }
      if (state.audioEnabled) playNotificationChime();
    });
  }

  // Refresh button
  const refreshBtn = document.getElementById('refreshBtn');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      startCountdown();
      loadData(true);
    });
  }

  // Quick search
  const quickSearch = document.getElementById('quickSearchInput');
  if (quickSearch) {
    quickSearch.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        state.sourcesSearch = quickSearch.value.trim();
        const sourcesSearchInput = document.getElementById('sourcesSearchInput');
        if (sourcesSearchInput) sourcesSearchInput.value = quickSearch.value;
        switchTab('navSources');
        state.sourcesPage = 1;
        renderSourcesFeed();
      }
    });
  }

  // Sources search input
  const sourcesSearch = document.getElementById('sourcesSearchInput');
  const clearSourcesSearch = document.getElementById('clearSourcesSearchBtn');
  if (sourcesSearch) {
    sourcesSearch.addEventListener('input', (e) => {
      state.sourcesSearch = e.target.value;
      if (clearSourcesSearch) {
        clearSourcesSearch.classList.toggle('hidden', !e.target.value);
      }
      state.sourcesPage = 1;
      renderSourcesFeed();
    });
  }

  if (clearSourcesSearch) {
    clearSourcesSearch.addEventListener('click', () => {
      if (sourcesSearch) sourcesSearch.value = '';
      state.sourcesSearch = '';
      clearSourcesSearch.classList.add('hidden');
      state.sourcesPage = 1;
      renderSourcesFeed();
    });
  }

  // Sources category filter pills
  document.querySelectorAll('[data-cat-filter]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('[data-cat-filter]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.sourcesCategory = pill.getAttribute('data-cat-filter');
      state.sourcesPage = 1;
      renderSourcesFeed();
    });
  });

  // Sources trust tier filter pills
  document.querySelectorAll('[data-tier-filter]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('[data-tier-filter]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.sourcesTier = pill.getAttribute('data-tier-filter');
      state.sourcesPage = 1;
      renderSourcesFeed();
    });
  });

  // Sources country/region filter pills (Req 15)
  document.querySelectorAll('[data-country-filter]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('[data-country-filter]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.sourcesCountry = pill.getAttribute('data-country-filter');
      state.sourcesPage = 1;
      renderSourcesFeed();
    });
  });

  // Sources source filter pills (Req 15)
  document.querySelectorAll('[data-source-filter]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('[data-source-filter]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.sourcesSource = pill.getAttribute('data-source-filter');
      state.sourcesPage = 1;
      renderSourcesFeed();
    });
  });

  // Sources language filter pills (Req 15)
  document.querySelectorAll('[data-lang-filter]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('[data-lang-filter]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.sourcesLang = pill.getAttribute('data-lang-filter');
      state.sourcesPage = 1;
      renderSourcesFeed();
    });
  });

  // Sources pagination buttons
  const btnPrev = document.getElementById('btnPrevPage');
  const btnNext = document.getElementById('btnNextPage');
  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (state.sourcesPage > 1) {
        state.sourcesPage--;
        renderSourcesFeed();
      }
    });
  }
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      state.sourcesPage++;
      renderSourcesFeed();
    });
  }

  // Timeline filters
  document.querySelectorAll('[data-timeline-filter]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('[data-timeline-filter]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.timelineFilter = pill.getAttribute('data-timeline-filter');
      renderTimelineArchive();
    });
  });

  // Map layer filters
  document.querySelectorAll('[data-map-layer]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('[data-map-layer]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.mapLayer = pill.getAttribute('data-map-layer');
      renderMainMapMarkers();
    });
  });

  // Map focus shortcuts
  const btnFocusIrkutsk = document.getElementById('btnFocusIrkutsk');
  const btnFocusRussia = document.getElementById('btnFocusRussia');
  const btnFocusGlobal = document.getElementById('btnFocusGlobal');

  if (btnFocusIrkutsk) {
    btnFocusIrkutsk.addEventListener('click', () => {
      if (state.mainMap) state.mainMap.setView([52.2869, 104.3050], 7);
    });
  }
  if (btnFocusRussia) {
    btnFocusRussia.addEventListener('click', () => {
      if (state.mainMap) state.mainMap.setView([55.0, 95.0], 4);
    });
  }
  if (btnFocusGlobal) {
    btnFocusGlobal.addEventListener('click', () => {
      if (state.mainMap) state.mainMap.setView([45.0, 50.0], 2);
    });
  }

  // Dismiss change alert
  const dismissAlert = document.getElementById('dismissChangeAlert');
  if (dismissAlert) {
    dismissAlert.addEventListener('click', () => {
      sessionStorage.setItem('dismissed_significant_change', 'true');
      const banner = document.getElementById('significantChangeAlert');
      if (banner) banner.classList.add('hidden');
    });
  }
}

// Initial bootstrap
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferred_language') || (navigator.language && navigator.language.startsWith('pt') ? 'pt' : 'en');
  state.currentLang = savedLang;
  state.currentTheme = localStorage.getItem('theme_preference') || 'dark';

  lucide.createIcons();
  setupEventListeners();
  setTheme(state.currentTheme);
  initOverviewMap();
  applyTranslations(state.currentLang);
  loadData();
  setupSSE();
  startCountdown();
});

// Test / audit helpers
window.playCriticalEmergencyAlarm = playCriticalEmergencyAlarm;
window.setTheme = setTheme;
window.openIntelligenceDrawer = openIntelligenceDrawer;
window.closeIntelligenceDrawer = closeIntelligenceDrawer;
window.outbreakState = state;
