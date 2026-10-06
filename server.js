const express = require('express');
const cors = require('cors');
const path = require('path');
const { fetchAllFeeds, getCachedNews, getLastFetchTime } = require('./services/rssService');
const { fetchSocialFeed } = require('./services/socialService');
const { generateHourlyBriefing, extractDynamicPatientMetrics } = require('./services/briefingService');
const { fetchFlightSurveillance } = require('./services/flightService');
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

    if (req.query.tag && req.query.tag !== 'all') {
      filtered = filtered.filter(item => item.locationTags.includes(req.query.tag));
    }

    const limit = parseInt(req.query.limit, 10) || 100;
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
    const { news } = await fetchAllFeeds();
    const briefing = await generateHourlyBriefing(news);
    res.json(briefing);
  } catch (error) {
    console.error('Erro na rota /api/briefing:', error);
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

// Endpoint de dados do incidente
app.get('/api/incident', (req, res) => {
  res.json({
    success: true,
    data: incidentData.incident,
    lastChecked: new Date().toISOString()
  });
});

// Endpoint de estatísticas em tempo real com contagem dinâmica
app.get('/api/stats', async (req, res) => {
  try {
    const { news, lastUpdated } = await fetchAllFeeds();
    const highAlerts = news.filter(n => n.severity === 'high').length;
    const mediumAlerts = news.filter(n => n.severity === 'medium').length;
    const patientMetrics = extractDynamicPatientMetrics(news);

    res.json({
      success: true,
      lastUpdated,
      totalNewsTracked: news.length,
      highAlerts,
      mediumAlerts,
      patientMetrics,
      incidentSummary: {
        location: incidentData.incident.location.city,
        facility: incidentData.incident.location.facility,
        globalSpreadStatus: incidentData.incident.riskAssessment.globalSpreadStatus,
        quarantined: patientMetrics.detectedCount,
        quarantinedSource: patientMetrics.verifiedSource,
        monitoringPointsCount: incidentData.incident.monitoringPoints.length
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Atualização periódica a cada 90 segundos
setInterval(async () => {
  try {
    const result = await fetchAllFeeds();
    broadcastSSE('background_refresh', {
      total: result.news.length,
      lastUpdated: result.lastUpdated
    });
  } catch (e) {
    console.error('[Background Poll Error]', e.message);
  }
}, 90 * 1000);

if (require.main === module || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(`🏥 DASHBOARD DE VIGILÂNCIA EPIDEMIOLÓGICA v4.0 (macOS) `);
    console.log(`📡 Servidor ativo em: http://localhost:${PORT}`);
    console.log(`📱 Módulo TikTok & Redes Sociais: ATIVO`);
    console.log(`=======================================================`);
  });
}

module.exports = app;
