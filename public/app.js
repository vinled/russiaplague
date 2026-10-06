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
    threatSecTrans: 'Secondary transmission:',
    threatExtSpread: 'Confirmed external spread:',
    threatContInfect: 'Contacts infected:',
    threatGeoExpand: 'Geographic expansion:',
    threatQuarantine: 'Quarantine:',
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
    }
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
    threatSecTrans: 'Transmissão secundária:',
    threatExtSpread: 'Disseminação externa confirmada:',
    threatContInfect: 'Contatos infectados:',
    threatGeoExpand: 'Expansão geográfica:',
    threatQuarantine: 'Quarentena:',
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
    }
  }
};

// Global Application State
const state = {
  news: [],
  social: null,
  incident: null,
  briefing: null,
  flights: null,
  currentTab: 'navOverview',
  currentLang: 'en',
  audioEnabled: true,
  countdown: 60,
  countdownInterval: null,
  
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

  // Last State Tracking for "What Changed"
  lastVisitState: null,
  lastKnownFirstId: null
};

// Audio notification (subtle discrete intelligence tone)
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
  renderTimelineArchive();
  renderIntelligenceModules();
  renderSourcesFeed();
}

function setLanguage(lang) {
  localStorage.setItem('preferred_language', lang);
  applyTranslations(lang);
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

  if (threatBadgeText) threatBadgeText.textContent = threatLevel;
  if (threatHeadline) {
    threatHeadline.textContent = isEn
      ? (incident?.threatAssessment?.headline || 'No evidence of secondary transmission')
      : (incident?.threatAssessment?.headlinePt || 'Sem evidência de transmissão secundária');
  }

  // Highlight active level in horizontal track
  document.querySelectorAll('.threat-step').forEach(step => {
    const level = step.getAttribute('data-level');
    step.className = 'threat-step';
    if (level === threatLevel) {
      if (level === 'LOW') step.classList.add('active-low');
      else if (level === 'GUARDED') step.classList.add('active-guarded');
      else if (level === 'ELEVATED') step.classList.add('active-elevated');
      else if (level === 'HIGH') step.classList.add('active-high');
      else if (level === 'CRITICAL') step.classList.add('active-critical');
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
  if (elDeaths) elDeaths.textContent = kpis.deaths !== undefined ? kpis.deaths : 1;

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
  if (geoStatusLocal) geoStatusLocal.textContent = isEn ? 'Contained' : 'Contido';
  if (geoStatusRussia) geoStatusRussia.textContent = isEn ? 'Monitoring' : 'Monitoramento';
  if (geoStatusIntl) geoStatusIntl.textContent = isEn ? 'None detected' : 'Nenhuma detectada';
  if (geoStatusBorders) geoStatusBorders.textContent = isEn ? 'Screening / Monitoring' : 'Triagem Ativa';

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
  if (kpis.secondaryCases > 0) {
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

  if (summaryEl) {
    const text = isEn
      ? `+${deltaNews} new verified reports · 0 new cases · Risk level unchanged (GUARDED) · Contact testing remains negative`
      : `+${deltaNews} novos despachos verificados · 0 novos casos · Nível inalterado (GUARDED) · Testagem de contatos permanece negativa`;
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

  const timeline = state.incident?.timeline || [];
  const isEn = state.currentLang === 'en';
  const displayItems = timeline.slice(0, 6);

  container.innerHTML = displayItems.map((item, idx) => {
    let tagClass = 'tag-reported';
    if (item.classification === 'CONFIRMED') tagClass = 'tag-confirmed';
    else if (item.classification === 'OFFICIAL') tagClass = 'tag-official';
    else if (item.classification === 'DISPUTED') tagClass = 'tag-disputed';
    else if (item.classification === 'UNVERIFIED') tagClass = 'tag-unverified';

    const dateStr = isEn ? (item.dateEn || item.date) : item.date;
    const titleStr = isEn ? (item.titleEn || item.title) : item.title;
    const descStr = isEn ? (item.descriptionEn || item.description) : item.description;

    return `
      <div class="flex items-start space-x-3 p-2 bg-white/[0.02] hover:bg-white/[0.04] rounded border border-white/[0.04] transition">
        <div class="w-1.5 h-1.5 rounded-full bg-[#388BFD] mt-2 shrink-0"></div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between gap-2 flex-wrap mb-1">
            <div class="flex items-center space-x-2">
              <span class="font-mono text-[11px] font-bold text-white/90">${dateStr}</span>
              <span class="text-white/30 text-[10px]">·</span>
              <span class="font-semibold text-white/80 text-xs">${titleStr}</span>
            </div>
            <span class="tag-badge ${tagClass} text-[9px]">${item.classification}</span>
          </div>
          <p class="text-white/60 text-[11px] leading-relaxed line-clamp-2">${descStr}</p>
        </div>
      </div>
    `;
  }).join('');
}

// 4. Outbreak Evolution (Replaces Severity Chart)
function renderOutbreakEvolution() {
  const tbody = document.getElementById('evolutionTableBody');
  if (!tbody) return;

  const evoData = state.incident?.outbreakEvolution || [];
  const isEn = state.currentLang === 'en';

  tbody.innerHTML = evoData.map(step => `
    <tr class="hover:bg-white/[0.02] transition">
      <td class="py-2 px-2 text-white/90 font-bold">${step.dateLabel}</td>
      <td class="py-2 px-2 text-white/70">
        <div class="font-medium">${isEn ? step.title : (step.titlePt || step.title)}</div>
        <div class="text-[10px] text-white/40 font-sans">${step.description}</div>
      </td>
      <td class="py-2 px-2 text-right text-[#D29922] font-semibold">${step.suspected}</td>
      <td class="py-2 px-2 text-right text-[#2EA043] font-semibold">${step.confirmed}</td>
      <td class="py-2 px-2 text-right text-white/90">${step.deaths}</td>
      <td class="py-2 px-2 text-right text-white/90 font-bold">~${step.contacts}</td>
      <td class="py-2 px-2 text-right text-[#2EA043] font-bold">${step.secondary}</td>
      <td class="py-2 px-2 text-right font-mono text-white/70">${step.locations || 1}</td>
    </tr>
  `).join('');
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

    return `
      <div class="intel-row flex flex-col space-y-1">
        <div class="flex items-center justify-between gap-2 flex-wrap text-[11px]">
          <div class="flex items-center space-x-2">
            <span class="tier-pill ${tierCode}">${tierName}</span>
            <span class="font-bold text-[#388BFD] font-mono">${item.source}</span>
            <span class="text-white/20">|</span>
            <span class="tag-badge ${tagClass} text-[9px]">${item.classification || 'REPORTED'}</span>
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

  if (overviewContainer) {
    overviewContainer.innerHTML = rumorData.slice(0, 3).map(r => `
      <div class="p-3 bg-white/[0.02] rounded border border-white/[0.06] flex flex-col justify-between">
        <div class="flex items-center justify-between mb-2">
          <span class="font-mono text-xs font-bold text-white/90">${r.topic}</span>
          <span class="text-[10px] font-mono ${r.trend === 'rising' ? 'text-[#D29922]' : 'text-white/50'}">
            ${r.trend === 'rising' ? '↑ Rising' : '→ Stable'}
          </span>
        </div>
        <div class="grid grid-cols-3 gap-1 text-[10px] font-mono text-center mb-2">
          <div class="bg-white/[0.02] p-1 rounded">
            <span class="text-white/40 block">Virality</span>
            <span class="text-[#D29922] font-bold">${r.virality}</span>
          </div>
          <div class="bg-white/[0.02] p-1 rounded">
            <span class="text-white/40 block">Credibility</span>
            <span class="${r.credibility === 'High' ? 'text-[#2EA043]' : (r.credibility === 'Medium' ? 'text-[#D29922]' : 'text-white/50')} font-bold">${r.credibility}</span>
          </div>
          <div class="bg-white/[0.02] p-1 rounded">
            <span class="text-white/40 block">Corroboration</span>
            <span class="${r.corroboration === 'Verified' ? 'text-[#2EA043]' : 'text-white/50'} font-bold">${r.corroboration}</span>
          </div>
        </div>
        <p class="text-[10px] text-white/50 leading-tight">${r.note}</p>
      </div>
    `).join('');
  }

  if (fullTableBody) {
    fullTableBody.innerHTML = rumorData.map(r => `
      <tr class="hover:bg-white/[0.02] transition">
        <td class="py-2 px-2 text-white/90 font-bold font-mono">${r.topic}</td>
        <td class="py-2 px-2 text-white/60 font-mono text-[10px]">${r.platform}</td>
        <td class="py-2 px-2 font-mono text-[#D29922] font-semibold">${r.virality}</td>
        <td class="py-2 px-2 font-mono ${r.credibility === 'High' ? 'text-[#2EA043]' : (r.credibility === 'Medium' ? 'text-[#D29922]' : 'text-white/50')} font-semibold">${r.credibility}</td>
        <td class="py-2 px-2 font-mono ${r.corroboration === 'Verified' ? 'text-[#2EA043]' : 'text-white/50'}">${r.corroboration}</td>
        <td class="py-2 px-2 font-mono ${r.trend === 'rising' ? 'text-[#D29922]' : 'text-white/40'}">${r.trend === 'rising' ? '↑ Rising' : '→ Stable'}</td>
        <td class="py-2 px-2 text-white/60 font-sans text-xs">${r.note}</td>
      </tr>
    `).join('');
  }
}

// 7. Full Timeline Archive (Tab 2)
function renderTimelineArchive() {
  const container = document.getElementById('fullTimelineContainer');
  if (!container) return;

  const timeline = state.incident?.timeline || [];
  const isEn = state.currentLang === 'en';

  let filtered = [...timeline];
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

    const dateStr = isEn ? (item.dateEn || item.date) : item.date;
    const titleStr = isEn ? (item.titleEn || item.title) : item.title;
    const descStr = isEn ? (item.descriptionEn || item.description) : item.description;

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
              <span class="tag-badge ${tagClass} text-[9px]">${item.classification}</span>
              ${item.source ? `<span class="text-[10px] text-white/40 font-mono">Source: ${item.source}</span>` : ''}
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

  // Total summary
  if (countSummary) {
    countSummary.textContent = `${filtered.length} of ${state.news.length} total dispatches`;
  }

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filtered.length / state.sourcesPerPage));
  if (state.sourcesPage > totalPages) state.sourcesPage = totalPages;
  if (state.sourcesPage < 1) state.sourcesPage = 1;

  const startIndex = (state.sourcesPage - 1) * state.sourcesPerPage;
  const pageItems = filtered.slice(startIndex, startIndex + state.sourcesPerPage);

  if (pageInfo) pageInfo.textContent = `Page ${state.sourcesPage} of ${totalPages} (${filtered.length} items)`;
  if (btnPrev) btnPrev.disabled = state.sourcesPage <= 1;
  if (btnNext) btnNext.disabled = state.sourcesPage >= totalPages;

  if (pageItems.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-white/40">
        <i data-lucide="filter-x" class="w-8 h-8 mx-auto mb-2 text-white/20"></i>
        <p class="text-xs font-mono">No intelligence dispatches match the selected filters.</p>
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
            <span class="tag-badge ${tagClass} text-[9px]">${item.classification || 'REPORTED'}</span>
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
    zoomControl: false,
    attributionControl: false
  }).setView([52.2869, 104.3050], 4);

  L.tileLayer('https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 16,
    attribution: 'Esri World Dark'
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

  L.tileLayer('https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 16,
    attribution: 'Esri World Dark'
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
    const [newsRes, socialRes, incidentRes, briefingRes, flightsRes] = await Promise.all([
      fetch(`/api/news${forceRefresh ? '?refresh=true' : ''}`),
      fetch('/api/social'),
      fetch('/api/incident'),
      fetch(`/api/briefing?lang=${lang}`),
      fetch('/api/flights')
    ]);

    const newsData = await newsRes.json();
    const socialData = await socialRes.json();
    const incidentData = await incidentRes.json();
    const briefingData = await briefingRes.json();
    const flightsData = await flightsRes.json();

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
  const savedLang = localStorage.getItem('preferred_language') || 'en';
  state.currentLang = savedLang;

  lucide.createIcons();
  setupEventListeners();
  initOverviewMap();
  applyTranslations(state.currentLang);
  loadData();
  setupSSE();
  startCountdown();
});
