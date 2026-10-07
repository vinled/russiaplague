const express = require('express');
const cors = require('cors');
const path = require('path');
const { fetchAllFeeds, getCachedNews, getLastFetchTime } = require('./services/rssService');
const { fetchSocialFeed } = require('./services/socialService');
const { generateHourlyBriefing, extractDynamicPatientMetrics } = require('./services/briefingService');
const { fetchFlightSurveillance } = require('./services/flightService');
const { getPathogenIntelligence } = require('./services/pathogenService');
const { getAutonomousIncidentState } = require('./services/autonomousExtractor');
const incidentData = require('./services/incidentData');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Middleware para evitar cache em desenvolvimento/tempo real
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

// Clientes SSE
const sseClients = new Set();

app.get('/api/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  res.write(`data: ${JSON.stringify({ type: 'connected', timestamp: new Date().toISOString() })}\n\n`);
  sseClients.add(res);

  req.on('close', () => {
    sseClients.delete(res);
  });
});

function broadcastSSE(eventType, data) {
  const payload = JSON.stringify({ type: eventType, data, timestamp: new Date().toISOString() });
  for (const client of sseClients) {
    try {
      client.write(`data: ${payload}\n\n`);
    } catch (e) {
      sseClients.delete(client);
    }
  }
}

// Endpoint de notícias
app.get('/api/news', async (req, res) => {
  try {
    const forceRefresh = req.query.refresh === 'true';
    if (forceRefresh) {
      const result = await fetchAllFeeds();
      broadcastSSE('news_updated', { total: result.news.length });
    }

    const { news, lastUpdated } = await fetchAllFeeds();
    let filtered = [...news];

    if (req.query.q) {
      const q = req.query.q.toLowerCase();
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.source.toLowerCase().includes(q)
      );
    }

    if (req.query.severity && req.query.severity !== 'all') {
      filtered = filtered.filter(item => item.severity === req.query.severity);
    }

    if (req.query.category && req.query.category !== 'all') {
      filtered = filtered.filter(item => item.category === req.query.category);
    }

    if (req.query.tier && req.query.tier !== 'all') {
      filtered = filtered.filter(item => item.trustTier && (item.trustTier.tier === req.query.tier || item.trustTier.tierCode === req.query.tier));
    }

    if (req.query.country && req.query.country !== 'all') {
      filtered = filtered.filter(item => item.country === req.query.country);
    }

    if (req.query.source && req.query.source !== 'all') {
      const srcQuery = req.query.source.toLowerCase();
      filtered = filtered.filter(item => item.source.toLowerCase().includes(srcQuery));
    }

    if (req.query.lang && req.query.lang !== 'all') {
      filtered = filtered.filter(item => item.language === req.query.lang);
    }

    const limit = parseInt(req.query.limit, 10) || 200;
    const paginated = filtered.slice(0, limit);

    res.json({
      success: true,
      count: paginated.length,
      totalAvailable: news.length,
      lastUpdated,
      data: paginated
    });
  } catch (error) {
    console.error('Erro na rota /api/news:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Endpoint do Radar Social & TikTok
app.get('/api/social', async (req, res) => {
  try {
    const socialData = await fetchSocialFeed();
    res.json(socialData);
  } catch (error) {
    console.error('Erro na rota /api/social:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// NOVO: Endpoint do Resumo Executivo / Headline da Última Hora
app.get('/api/briefing', async (req, res) => {
  try {
    const lang = req.query.lang === 'en' ? 'en' : 'pt';
    const { news } = await fetchAllFeeds();
    const briefing = await generateHourlyBriefing(news, null, lang);
    res.json(briefing);
  } catch (error) {
    console.error('Erro na rota /api/briefing:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// NOVO: Endpoint do Patógeno / Síntese via Gemini AI (com cache inteligente)
app.get('/api/pathogen-intel', async (req, res) => {
  try {
    const lang = req.query.lang === 'en' ? 'en' : 'pt';
    const forceRefresh = req.query.refresh === 'true';
    const { news } = await fetchAllFeeds();
    const pathogenData = await getPathogenIntelligence(news, null, lang, forceRefresh);
    res.json({
      success: true,
      data: pathogenData
    });
  } catch (error) {
    console.error('Erro na rota /api/pathogen-intel:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// NOVO: Endpoint do Monitor de Voos e Rotas Aéreas (Hub de Irkutsk)
app.get('/api/flights', async (req, res) => {
  try {
    const flightData = await fetchFlightSurveillance();
    res.json(flightData);
  } catch (error) {
    console.error('Erro na rota /api/flights:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Endpoint de dados do incidente (Processado Autonomamente com Gemini AI + NLP)
app.get('/api/incident', async (req, res) => {
  try {
    const forceRefresh = req.query.refresh === 'true';
    const { news } = await fetchAllFeeds();
    const liveIncident = await getAutonomousIncidentState(news, forceRefresh);
    res.json({
      success: true,
      data: liveIncident,
      lastChecked: new Date().toISOString()
    });
  } catch (error) {
    console.error('Erro na rota /api/incident:', error);
    res.json({
      success: true,
      data: incidentData.incident,
      lastChecked: new Date().toISOString()
    });
  }
});

// Endpoint de estatísticas em tempo real com contagem dinâmica
app.get('/api/stats', async (req, res) => {
  try {
    const lang = req.query.lang === 'en' ? 'en' : 'pt';
    const { news, lastUpdated } = await fetchAllFeeds();
    const liveIncident = await getAutonomousIncidentState(news);
    const highAlerts = news.filter(n => n.severity === 'high').length;
    const mediumAlerts = news.filter(n => n.severity === 'medium').length;
    const patientMetrics = extractDynamicPatientMetrics(news, lang);

    res.json({
      success: true,
      lastUpdated,
      totalNewsTracked: news.length,
      highAlerts,
      mediumAlerts,
      patientMetrics,
      threatLevel: liveIncident.threatAssessment?.level || 'GUARDED',
      deaths: liveIncident.kpis?.deaths || 1,
      deathStatus: liveIncident.deathStatus || 'CONFIRMED',
      incidentSummary: {
        location: liveIncident.location.city,
        facility: liveIncident.location.facility,
        globalSpreadStatus: liveIncident.riskAssessment.globalSpreadStatus,
        quarantined: patientMetrics.detectedCount,
        quarantinedSource: patientMetrics.verifiedSource,
        monitoringPointsCount: liveIncident.monitoringPoints.length
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Atualização periódica a cada 90 segundos com inteligência autônoma
setInterval(async () => {
  try {
    const result = await fetchAllFeeds();
    const liveIncident = await getAutonomousIncidentState(result.news, true);
    broadcastSSE('background_refresh', {
      total: result.news.length,
      threatLevel: liveIncident.threatAssessment?.level,
      deaths: liveIncident.kpis?.deaths,
      lastUpdated: result.lastUpdated
    });
  } catch (e) {
    console.error('[Background Poll Error]', e.message);
  }
}, 90 * 1000);

process.on('uncaughtException', (err) => {
  console.error('[Uncaught Exception]', err.message);
});

process.on('unhandledRejection', (reason) => {
  console.error('[Unhandled Rejection]', reason);
});

if (require.main === module || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(`🎯 OUTBREAK INTELLIGENCE v5.0 · SITUATION ROOM PLATFORM `);
    console.log(`📡 Servidor ativo em: http://localhost:${PORT}`);
    console.log(`🛡️ Global Epidemiological Monitoring: ATIVO`);
    console.log(`=======================================================`);
  });
}

module.exports = app;
