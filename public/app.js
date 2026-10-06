// Application State
const state = {
  news: [],
  social: null,
  incident: null,
  activeFilter: 'all',
  searchQuery: '',
  audioEnabled: true,
  countdown: 60,
  countdownInterval: null,
  map: null,
  currentTileLayer: null,
  activeMapStyle: localStorage.getItem('osm_map_style') || 'osm-standard',
  customApiKey: localStorage.getItem('osm_api_key') || '',
  briefing: null,
  flights: null,
  chart: null,
  lastKnownFirstId: null
};

// Som Sutil de Notificação (Estilo Notificação macOS)
function playNotificationChime() {
  if (!state.audioEnabled) return;
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    // Acorde duplo sutil (estilo Glass Chime da Apple)
    const playTone = (freq, delay, duration) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime + delay);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + delay + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(audioCtx.currentTime + delay);
      osc.stop(audioCtx.currentTime + delay + duration);
    };

    playTone(587.33, 0, 0.25);    // D5
    playTone(880.00, 0.08, 0.35);  // A5
  } catch (e) {
    console.warn('AudioContext falhou:', e);
  }
}

// Formatação de Tempo Relativo
function formatRelativeTime(timestamp) {
  const diffSec = Math.floor((Date.now() - timestamp) / 1000);
  if (isNaN(diffSec) || diffSec < 0) return "Agora";
  if (diffSec < 60) return `Há ${diffSec}s`;
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `Há ${diffMin}m`;
  const diffHours = Math.floor(diffMin / 60);
  if (diffHours < 24) return `Há ${diffHours}h`;
  const diffDays = Math.floor(diffHours / 24);
  return `Há ${diffDays}d`;
}

// Configuração de Camadas OpenStreetMap
function applyMapTileLayer(styleKey, apiKey) {
  if (!state.map) return;
  if (state.currentTileLayer) {
    state.map.removeLayer(state.currentTileLayer);
  }

  let tileUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
  let attribution = '&copy; OpenStreetMap & CARTO';
  let subdomains = 'abcd';
  let labelText = 'Carto Dark (OSM)';

  if (styleKey === 'osm-standard') {
    tileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
    attribution = '&copy; OpenStreetMap contributors';
    subdomains = 'abc';
    labelText = 'OpenStreetMap Padrão';
  } else if (styleKey === 'maptiler-dark') {
    const key = apiKey || 'get_your_own_OpIi9ZULNHzrESv6T2vL';
    tileUrl = `https://api.maptiler.com/maps/dataviz-dark/{z}/{x}/{y}.png?key=${key}`;
    attribution = '&copy; MapTiler & OpenStreetMap';
    subdomains = 'abc';
    labelText = 'MapTiler Dark';
  } else if (styleKey === 'stadia-dark') {
    const keyParam = apiKey ? `?api_key=${apiKey}` : '';
    tileUrl = `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png${keyParam}`;
    attribution = '&copy; Stadia Maps & OpenStreetMap';
    subdomains = 'abcd';
    labelText = 'Stadia Dark';
  }

  state.currentTileLayer = L.tileLayer(tileUrl, {
    maxZoom: 19,
    subdomains,
    attribution
  }).addTo(state.map);

  const labelEl = document.getElementById('currentMapTileLabel');
  if (labelEl) labelEl.textContent = labelText;
}

// Inicializar Mapa
function initMap() {
  if (state.map) return;
  const mapElement = document.getElementById('mapContainer');
  if (!mapElement) return;

  state.map = L.map('mapContainer', {
    zoomControl: true,
    attributionControl: false
  }).setView([52.2869, 104.3050], 3);

  L.control.attribution({ position: 'bottomright' }).addTo(state.map);
  applyMapTileLayer(state.activeMapStyle, state.customApiKey);
}

// Marcadores no Mapa
function renderMapMarkers() {
  if (!state.map || !state.incident || !state.incident.monitoringPoints) return;

  state.map.eachLayer((layer) => {
    if (layer instanceof L.Marker || layer instanceof L.Circle) {
      state.map.removeLayer(layer);
    }
  });

  state.incident.monitoringPoints.forEach(point => {
    let pinColor = '#0A84FF';
    if (point.status === 'critical') {
      pinColor = '#FF453A';
      L.circle([point.lat, point.lng], {
        color: '#FF453A',
        fillColor: '#FF453A',
        fillOpacity: 0.14,
        radius: 350000
      }).addTo(state.map);
    } else if (point.status === 'warning') {
      pinColor = '#FF9F0A';
    } else if (point.status === 'normal') {
      pinColor = '#30D158';
    }

    const customIcon = L.divIcon({
      className: 'custom-apple-marker',
      html: `
        <div style="
          width: 14px; 
          height: 14px; 
          background: ${pinColor}; 
          border: 2px solid #FFFFFF; 
          border-radius: 50%; 
          box-shadow: 0 2px 8px rgba(0,0,0,0.5);">
        </div>
      `,
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    });

    const popupContent = `
      <div style="font-size: 12px; font-family: -apple-system, sans-serif; padding: 2px;">
        <div style="display: flex; align-items: center; gap: 6px; font-weight: 700; color: ${pinColor}; margin-bottom: 3px;">
          <span style="width: 7px; height: 7px; border-radius: 50%; background: ${pinColor};"></span>
          <span>${point.name}</span>
        </div>
        <div style="color: #FFFFFF; font-weight: 600; font-size: 11px; margin-bottom: 2px;">${point.statusText}</div>
        <p style="color: #A1A1A6; font-size: 11px; line-height: 1.4; margin: 0;">${point.details}</p>
      </div>
    `;

    L.marker([point.lat, point.lng], { icon: customIcon })
      .bindPopup(popupContent)
      .addTo(state.map);
  });
}

// Linha do Tempo
function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container || !state.incident || !state.incident.timeline) return;

  container.innerHTML = state.incident.timeline.map((item, index) => `
    <div class="relative pl-3 pb-3 ${index === state.incident.timeline.length - 1 ? '' : 'border-b border-white/[0.06]'}">
      <div class="absolute -left-[17px] top-1.5 w-2 h-2 rounded-full ${index === state.incident.timeline.length - 1 ? 'bg-[#0A84FF] ring-4 ring-[#0A84FF]/20' : 'bg-white/30'}"></div>
      <div class="font-semibold text-[#0A84FF] text-[11px]">${item.date}</div>
      <div class="font-medium text-white text-xs mt-0.5">${item.title}</div>
      <p class="text-white/60 text-[11px] mt-0.5 leading-relaxed">${item.description}</p>
    </div>
  `).join('');
}

// Barra Marquee
function renderTicker() {
  const track1 = document.getElementById('marqueeTrack1');
  const track2 = document.getElementById('marqueeTrack2');
  if (!track1 || !track2) return;

  const urgentNews = state.news.filter(n => n.severity === 'high').slice(0, 8);
  if (urgentNews.length === 0) {
    const fallback = `<span>Vigilância ativa • Incidente de Irkutsk sob monitoramento profilático • Nenhum caso externo</span>`;
    track1.innerHTML = fallback;
    track2.innerHTML = fallback;
    return;
  }

  const itemsHtml = urgentNews.map(n => `
    <a href="${n.link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-xs text-white/80 hover:text-white transition shrink-0 group">
      <span class="pill-badge bg-[#FF453A]/15 text-[#FF453A] border border-[#FF453A]/20">Alerta</span>
      <span class="text-white/90 group-hover:text-[#0A84FF]">${n.title}</span>
      <span class="text-white/40 text-[11px]">${formatRelativeTime(n.pubTimestamp)}</span>
    </a>
    <span class="text-white/20">•</span>
  `).join('');

  track1.innerHTML = itemsHtml;
  track2.innerHTML = itemsHtml;
}

// Módulo TikTok & Redes Sociais
function renderSocialModule() {
  if (!state.social) return;

  // Atualizar Widget
  const socialWidgetStatus = document.getElementById('socialWidgetStatus');
  const socialWidgetPanic = document.getElementById('socialWidgetPanic');
  if (socialWidgetStatus) socialWidgetStatus.textContent = state.social.panicStatus.replace(' nas Redes', '');
  if (socialWidgetPanic) socialWidgetPanic.textContent = `${state.social.panicIndex}% Alerta`;

  // Barra de Pânico
  const panicStatusEl = document.getElementById('socialPanicStatus');
  const panicBarEl = document.getElementById('socialPanicBar');
  if (panicStatusEl) panicStatusEl.textContent = `${state.social.panicStatus} (${state.social.panicIndex}%)`;
  if (panicBarEl) panicBarEl.style.width = `${state.social.panicIndex}%`;

  // Hashtags
  const hashtagsContainer = document.getElementById('trendingHashtagsContainer');
  if (hashtagsContainer && state.social.trendingHashtags) {
    hashtagsContainer.innerHTML = state.social.trendingHashtags.map(h => `
      <a href="${h.searchUrl}" target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] hover:bg-[#BF5AF2]/15 text-white/90 hover:text-[#BF5AF2] border border-white/[0.08] hover:border-[#BF5AF2]/30 transition group">
        <i data-lucide="hash" class="w-3 h-3 text-[#BF5AF2]"></i>
        <span class="font-medium">${h.tag.replace('#', '')}</span>
        <span class="text-[10px] text-white/40 font-normal">(${h.volume})</span>
      </a>
    `).join('');
  }

  // Posts
  const postsContainer = document.getElementById('socialPostsContainer');
  if (postsContainer && state.social.posts) {
    postsContainer.innerHTML = state.social.posts.map(post => {
      let platPill = 'bg-white/10 text-white/80';
      if (post.platform.includes('TikTok')) platPill = 'bg-[#BF5AF2]/15 text-[#BF5AF2] border border-[#BF5AF2]/20';
      else if (post.platform.includes('Reddit')) platPill = 'bg-[#FF9F0A]/15 text-[#FF9F0A] border border-[#FF9F0A]/20';

      return `
        <div class="news-row flex flex-col space-y-1">
          <div class="flex items-center justify-between text-[11px]">
            <span class="pill-badge ${platPill} font-semibold">
              ${post.platform}
            </span>
            <span class="text-white/40">${formatRelativeTime(post.pubTimestamp)}</span>
          </div>
          <a href="${post.link}" target="_blank" rel="noopener noreferrer" class="text-white/90 hover:text-[#0A84FF] font-medium text-xs leading-snug">
            ${post.title}
          </a>
          <div class="flex items-center justify-between pt-1 text-[11px] text-white/40">
            <span>Visualizações est.: ~${post.estimatedViews.toLocaleString('pt-BR')}</span>
            <a href="${post.link}" target="_blank" rel="noopener noreferrer" class="text-[#0A84FF] hover:underline flex items-center gap-0.5">
              <span>Abrir</span>
              <i data-lucide="chevron-right" class="w-3 h-3"></i>
            </a>
          </div>
        </div>
      `;
    }).join('');
  }

  lucide.createIcons();
}

// Feed de Notícias
function renderNewsFeed() {
  const container = document.getElementById('newsFeedContainer');
  const filteredCountText = document.getElementById('filteredCountText');
  if (!container) return;

  let filtered = [...state.news];

  if (state.activeFilter === 'irkutsk') {
    filtered = filtered.filter(n =>
      n.locationTags.includes('Irkutsk') ||
      n.locationTags.includes('Shelekhov') ||
      n.locationTags.includes('Sibéria') ||
      n.title.toLowerCase().includes('irkutsk') ||
      n.title.toLowerCase().includes('shipilova')
    );
  } else if (state.activeFilter === 'russia') {
    filtered = filtered.filter(n =>
      n.locationTags.includes('Rússia') ||
      n.locationTags.includes('Irkutsk') ||
      n.locationTags.includes('Sibéria') ||
      n.title.toLowerCase().includes('russia') ||
      n.title.toLowerCase().includes('rússia')
    );
  } else if (state.activeFilter === 'high') {
    filtered = filtered.filter(n => n.severity === 'high');
  } else if (state.activeFilter === 'who') {
    filtered = filtered.filter(n =>
      n.source.includes('OMS') ||
      n.source.includes('WHO') ||
      n.locationTags.includes('Global / OMS')
    );
  } else if (state.activeFilter === 'social') {
    filtered = filtered.filter(n =>
      n.source.includes('Reddit') ||
      n.locationTags.includes('Redes Sociais') ||
      n.title.toLowerCase().includes('reddit') ||
      n.title.toLowerCase().includes('tiktok')
    );
  }

  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase().trim();
    filtered = filtered.filter(n =>
      n.title.toLowerCase().includes(q) ||
      n.summary.toLowerCase().includes(q) ||
      n.source.toLowerCase().includes(q)
    );
  }

  if (filteredCountText) {
    filteredCountText.textContent = `${filtered.length} de ${state.news.length} artigos`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 text-white/40">
        <i data-lucide="filter-x" class="w-8 h-8 mx-auto mb-2 text-white/20"></i>
        <p class="text-xs">Nenhum resultado para os filtros atuais.</p>
        <button onclick="clearAllFilters()" class="mt-2 text-xs text-[#0A84FF] hover:underline">Limpar filtros</button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(item => {
    let pillStyle = 'bg-white/10 text-white/70 border-white/10';
    let severityTag = 'Informativo';
    if (item.severity === 'high') {
      pillStyle = 'bg-[#FF453A]/15 text-[#FF453A] border-[#FF453A]/25';
      severityTag = 'Alta Atenção';
    } else if (item.severity === 'medium') {
      pillStyle = 'bg-[#FF9F0A]/15 text-[#FF9F0A] border-[#FF9F0A]/25';
      severityTag = 'Moderado';
    }

    const tagsHtml = item.locationTags.map(tag => `
      <span class="px-2 py-0.5 rounded-full text-[10px] bg-white/[0.05] text-white/60">${tag}</span>
    `).join('');

    return `
      <article class="news-row flex flex-col space-y-1.5">
        <div class="flex items-center justify-between gap-2 flex-wrap text-[11px]">
          <div class="flex items-center space-x-2">
            <span class="pill-badge ${pillStyle} border font-semibold">
              ${severityTag}
            </span>
            <span class="text-[#0A84FF] font-medium">${item.source}</span>
          </div>
          <span class="text-white/40">${formatRelativeTime(item.pubTimestamp)}</span>
        </div>

        <h3 class="text-xs sm:text-sm font-semibold text-white/90 hover:text-[#0A84FF] leading-snug">
          <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="flex items-start gap-1 group">
            <span>${item.title}</span>
            <i data-lucide="external-link" class="w-3.5 h-3.5 text-white/30 group-hover:text-[#0A84FF] shrink-0 mt-0.5 transition"></i>
          </a>
        </h3>

        ${item.summary ? `<p class="text-xs text-white/50 leading-relaxed line-clamp-2">${item.summary}</p>` : ''}

        <div class="flex items-center justify-between pt-1 border-t border-white/[0.04] text-[11px]">
          <div class="flex items-center space-x-1">
            ${tagsHtml}
          </div>
          <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="text-[#0A84FF] hover:underline font-medium text-xs flex items-center gap-1">
            <span>Ler artigo</span>
            <i data-lucide="chevron-right" class="w-3 h-3"></i>
          </a>
        </div>
      </article>
    `;
  }).join('');

  lucide.createIcons();
}

// Atualizar Métricas dos Widgets
function updateMetrics() {
  const cardSpreadStatus = document.getElementById('cardSpreadStatus');
  const cardQuarantine = document.getElementById('cardQuarantine');
  const cardHighAlerts = document.getElementById('cardHighAlerts');
  const feedCountBadge = document.getElementById('feedCountBadge');
  const countAll = document.getElementById('countAll');

  if (state.incident && cardSpreadStatus) {
    cardSpreadStatus.textContent = state.incident.riskAssessment.globalSpreadStatus.toLowerCase().replace(/^\w/, c => c.toUpperCase());
  }

  if (cardQuarantine) {
    const dynamicCount = state.briefing?.patientMetrics?.detectedCount || (state.incident?.keyMetrics?.quarantinedContacts?.split(' ')[0] + ' Pessoas');
    const dynamicSource = state.briefing?.patientMetrics?.verifiedSource;
    cardQuarantine.textContent = dynamicCount;

    const quarantineSourceEl = document.getElementById('cardQuarantineSource');
    if (quarantineSourceEl) {
      quarantineSourceEl.textContent = dynamicSource ? `Apurado: ${dynamicSource}` : 'Apurado em Tempo Real';
    }
  }

  const highCount = state.news.filter(n => n.severity === 'high').length;
  if (cardHighAlerts) cardHighAlerts.textContent = highCount;

  if (feedCountBadge) {
    const lastHourCount = state.briefing?.lastHourCount || 0;
    feedCountBadge.textContent = lastHourCount > 0
      ? `Total: ${state.news.length} fontes (${lastHourCount} na última hora)`
      : `Total: ${state.news.length} fontes ativas`;
  }
  if (countAll) countAll.textContent = state.news.length;
}

// Renderizar Gráfico Minimalista
function renderChart() {
  const canvas = document.getElementById('alertSeverityChart');
  if (!canvas) return;

  const high = state.news.filter(n => n.severity === 'high').length;
  const medium = state.news.filter(n => n.severity === 'medium').length;
  const low = state.news.filter(n => n.severity === 'low').length;

  if (state.chart) {
    state.chart.data.datasets[0].data = [high, medium, low];
    state.chart.update();
    return;
  }

  const ctx = canvas.getContext('2d');
  state.chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Alta Atenção', 'Moderada', 'Informativa'],
      datasets: [{
        label: 'Notícias',
        data: [high, medium, low],
        backgroundColor: [
          'rgba(255, 69, 58, 0.85)',
          'rgba(255, 159, 10, 0.85)',
          'rgba(10, 132, 255, 0.85)'
        ],
        borderRadius: 6,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: 'rgba(255, 255, 255, 0.5)', font: { size: 10, family: '-apple-system' } }
        },
        y: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: 'rgba(255, 255, 255, 0.5)', font: { size: 10, family: '-apple-system' }, stepSize: 15 }
        }
      }
    }
  });
}

// Renderizar Headline & Briefing Executivo
function renderBriefing() {
  if (!state.briefing) return;

  const headlineEl = document.getElementById('briefingHeadline');
  const timeBadgeEl = document.getElementById('briefingTimeWindowBadge');
  const statusBadgeEl = document.getElementById('briefingStatusBadge');
  const engineBadgeEl = document.getElementById('briefingEngineBadge');
  const bulletsContainer = document.getElementById('briefingBulletsContainer');

  if (headlineEl) {
    headlineEl.textContent = state.briefing.headline;
  }
  if (timeBadgeEl) {
    timeBadgeEl.textContent = state.briefing.timeWindow;
  }
  if (statusBadgeEl) {
    statusBadgeEl.textContent = state.briefing.statusBadge;
  }
  if (engineBadgeEl) {
    engineBadgeEl.textContent = state.briefing.engine || 'IA em Tempo Real';
  }

  if (bulletsContainer && state.briefing.bullets) {
    bulletsContainer.innerHTML = state.briefing.bullets.map(b => `
      <div class="flex items-start space-x-2.5 bg-white/[0.03] hover:bg-white/[0.05] p-3 rounded-xl border border-white/[0.05] transition">
        <div class="w-2 h-2 rounded-full bg-[#0A84FF] mt-1.5 shrink-0 shadow-sm shadow-[#0A84FF]/40"></div>
        <div class="flex-1">
          <div class="flex items-center justify-between gap-2 mb-1">
            <strong class="text-white/90 font-semibold text-xs">${b.topic}</strong>
            ${b.source ? `<span class="pill-badge bg-white/[0.06] text-white/50 text-[10px] font-medium">${b.source}</span>` : ''}
          </div>
          <p class="text-white/70 leading-relaxed text-xs m-0 font-normal">${b.text}</p>
        </div>
      </div>
    `).join('');
  }
}

// Renderizar Monitor de Voos & Conexões Aéreas (IKT)
function renderFlights() {
  if (!state.flights) return;

  const overheadBadge = document.getElementById('overheadAirspaceBadge');
  const container = document.getElementById('flightsContainer');

  if (overheadBadge && state.flights.liveAirspace) {
    const count = state.flights.liveAirspace.activeTranspondersOverhead;
    overheadBadge.textContent = count > 0 ? `OpenSky: ${count} no Raio` : 'OpenSky: Espaço Aéreo Calmo';
  }

  if (container && state.flights.scheduledRoutes) {
    container.innerHTML = state.flights.scheduledRoutes.map(f => {
      let statusColor = 'bg-[#30D158]/15 text-[#30D158] border-[#30D158]/30';
      if (f.status.includes('Decolou') || f.status.includes('Em Rota')) {
        statusColor = 'bg-[#0A84FF]/15 text-[#0A84FF] border-[#0A84FF]/30';
      } else if (f.status.includes('Embarque') || f.status.includes('Portão')) {
        statusColor = 'bg-[#FF9F0A]/15 text-[#FF9F0A] border-[#FF9F0A]/30';
      }

      return `
        <div class="news-row flex flex-col space-y-1.5 p-3">
          <div class="flex items-center justify-between text-[11px]">
            <div class="flex items-center space-x-2">
              <span class="font-bold text-white/90">${f.flightNumber}</span>
              <span class="text-white/40">•</span>
              <span class="text-white/70 font-medium">${f.airline}</span>
            </div>
            <span class="pill-badge ${statusColor} text-[10px] font-semibold">
              ${f.status}
            </span>
          </div>

          <div class="flex items-center justify-between text-xs py-0.5">
            <span class="text-white/90 font-medium">${f.origin} ✈️ ${f.destination}</span>
            <span class="text-white/50 text-[11px]">${f.scheduledDeparture}</span>
          </div>

          <div class="flex items-center justify-between pt-1 border-t border-white/[0.04] text-[10px]">
            <span class="text-white/40">${f.aircraft}</span>
            <span class="text-[#0A84FF] font-medium flex items-center gap-1">
              <i data-lucide="shield-check" class="w-3 h-3"></i>
              ${f.healthStatus}
            </span>
          </div>
        </div>
      `;
    }).join('');
    lucide.createIcons();
  }
}

// Carregar Dados das APIs
async function loadData(forceRefresh = false) {
  const refreshIcon = document.getElementById('refreshIcon');
  if (refreshIcon) refreshIcon.classList.add('animate-spin');

  try {
    const [newsRes, socialRes, incidentRes, briefingRes, flightsRes] = await Promise.all([
      fetch(`/api/news${forceRefresh ? '?refresh=true' : ''}`),
      fetch('/api/social'),
      fetch('/api/incident'),
      fetch('/api/briefing'),
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

    if (socialData.success) {
      state.social = socialData;
    }

    if (incidentData.success) {
      state.incident = incidentData.data;
    }

    if (briefingData && briefingData.success) {
      state.briefing = briefingData;
    }

    if (flightsData && flightsData.success) {
      state.flights = flightsData;
    }

    updateMetrics();
    renderBriefing();
    renderFlights();
    renderTicker();
    renderNewsFeed();
    renderSocialModule();
    renderMapMarkers();
    renderTimeline();
    renderChart();

    const footerLastSync = document.getElementById('footerLastSync');
    if (footerLastSync) {
      footerLastSync.textContent = new Date().toLocaleTimeString('pt-BR');
    }
  } catch (err) {
    console.error('Falha ao carregar dados:', err);
  } finally {
    if (refreshIcon) refreshIcon.classList.remove('animate-spin');
  }
}

// Setup Server-Sent Events (SSE)
function setupSSE() {
  const eventSource = new EventSource('/api/stream');
  eventSource.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      if (data.type === 'news_updated' || data.type === 'background_refresh') {
        loadData(false);
      }
    } catch (e) {
      console.warn('SSE:', e);
    }
  };
}

// Countdown
function startCountdown() {
  state.countdown = 60;
  const syncStatusText = document.getElementById('syncStatusText');

  if (state.countdownInterval) clearInterval(state.countdownInterval);

  state.countdownInterval = setInterval(() => {
    state.countdown--;
    if (syncStatusText) {
      syncStatusText.textContent = `Atualiza em ${state.countdown}s`;
    }
    if (state.countdown <= 0) {
      state.countdown = 60;
      loadData(true);
    }
  }, 1000);
}

// Event Listeners
function setupEventListeners() {
  const refreshBtn = document.getElementById('refreshBtn');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      startCountdown();
      loadData(true);
    });
  }

  // Audio Toggle
  const toggleAudioBtn = document.getElementById('toggleAudioBtn');
  const audioText = document.getElementById('audioText');
  if (toggleAudioBtn) {
    toggleAudioBtn.addEventListener('click', () => {
      state.audioEnabled = !state.audioEnabled;
      if (audioText) audioText.textContent = state.audioEnabled ? 'Som Ativo' : 'Mudo';
      if (state.audioEnabled) playNotificationChime();
    });
  }

  // Search input
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.classList.toggle('hidden', !e.target.value);
      }
      renderNewsFeed();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      state.searchQuery = '';
      clearSearchBtn.classList.add('hidden');
      renderNewsFeed();
    });
  }

  // Filter pills
  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeFilter = pill.getAttribute('data-filter');
      renderNewsFeed();
    });
  });

  // Segmented control tabs
  const segmentedBtns = document.querySelectorAll('.segmented-btn');
  segmentedBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      segmentedBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetTab = btn.getAttribute('data-tab');
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
      });

      const activeContent = document.getElementById(targetTab);
      if (activeContent) {
        activeContent.classList.remove('hidden');
      }

      if (targetTab === 'tabMap' && state.map) {
        setTimeout(() => state.map.invalidateSize(), 100);
      }
    });
  });

  // Map settings modal
  const openMapSettingsBtn = document.getElementById('openMapSettingsBtn');
  const mapSettingsModal = document.getElementById('mapSettingsModal');
  const closeMapSettingsBtn = document.getElementById('closeMapSettingsBtn');
  const saveMapSettingsBtn = document.getElementById('saveMapSettingsBtn');
  const mapStyleSelect = document.getElementById('mapStyleSelect');
  const customApiKeyInput = document.getElementById('customApiKeyInput');

  if (openMapSettingsBtn && mapSettingsModal) {
    openMapSettingsBtn.addEventListener('click', () => {
      if (mapStyleSelect) mapStyleSelect.value = state.activeMapStyle;
      if (customApiKeyInput) customApiKeyInput.value = state.customApiKey;
      mapSettingsModal.classList.remove('hidden');
    });
  }

  if (closeMapSettingsBtn && mapSettingsModal) {
    closeMapSettingsBtn.addEventListener('click', () => {
      mapSettingsModal.classList.add('hidden');
    });
  }

  if (saveMapSettingsBtn && mapSettingsModal) {
    saveMapSettingsBtn.addEventListener('click', () => {
      const selectedStyle = mapStyleSelect.value;
      const key = customApiKeyInput.value.trim();

      state.activeMapStyle = selectedStyle;
      state.customApiKey = key;
      localStorage.setItem('osm_map_style', selectedStyle);
      localStorage.setItem('osm_api_key', key);

      applyMapTileLayer(selectedStyle, key);
      mapSettingsModal.classList.add('hidden');
    });
  }
}

function clearAllFilters() {
  state.activeFilter = 'all';
  state.searchQuery = '';
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  if (clearSearchBtn) clearSearchBtn.classList.add('hidden');

  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.classList.toggle('active', pill.getAttribute('data-filter') === 'all');
  });

  renderNewsFeed();
}

// Bootstrap
window.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  initMap();
  setupEventListeners();
  loadData();
  setupSSE();
  startCountdown();
});
