const Parser = require('rss-parser');
const parser = new Parser({
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 HealthMonitor/3.0'
  },
  timeout: 8000
});

const FEEDS = [
  {
    name: "Alerta Irkutsk & Laboratório (Google News EN)",
    url: 'https://news.google.com/rss/search?q=Irkutsk+OR+Shipilova+OR+"Anti-Plague"+OR+Rospotrebnadzor&hl=en-US&gl=US&ceid=US:en',
    category: "Foco Irkutsk / Sibéria",
    priority: "high"
  },
  {
    name: "Surtos & Vírus na Rússia (Google News EN)",
    url: 'https://news.google.com/rss/search?q=Russia+outbreak+OR+plague+OR+virus+OR+pneumonia&hl=en-US&gl=US&ceid=US:en',
    category: "Rússia / Regional",
    priority: "high"
  },
  {
    name: "BNO News & Alertas Urgentes de Surtos",
    url: 'https://news.google.com/rss/search?q=BNO+News+OR+outbreak+Russia+Irkutsk&hl=en-US&gl=US&ceid=US:en',
    category: "Alertas de Desastres / BNO",
    priority: "high"
  },
  {
    name: "Reddit OSINT WorldNews",
    url: 'https://www.reddit.com/r/worldnews/search.rss?q=Irkutsk+OR+plague+OR+"Russia+virus"&sort=new',
    category: "Comunidade OSINT / Reddit",
    priority: "medium"
  },
  {
    name: "Notícias em Português (Google News PT)",
    url: 'https://news.google.com/rss/search?q=Irkutsk+OR+peste+Rússia+OR+vírus+Sibéria&hl=pt-BR&gl=BR&ceid=BR:pt-419',
    category: "Mídia Lusófona",
    priority: "medium"
  },
  {
    name: "Organização Mundial da Saúde (OMS / WHO)",
    url: 'https://www.who.int/rss-feeds/news-english.xml',
    category: "Vigilância Internacional",
    priority: "official"
  },
  {
    name: "Medical Xpress (Virologia & Epidemiologia)",
    url: 'https://medicalxpress.com/rss-feed/',
    category: "Ciência & Epidemiologia",
    priority: "science"
  }
];

// Cache em memória
let cachedNews = [];
let lastFetchTime = null;
const CACHE_DURATION_MS = 60 * 1000; // 60 segundos de cache

function determineSeverity(title, content) {
  const text = (title + " " + (content || "")).toLowerCase();
  if (text.includes("quarantine") || text.includes("quarentena") || text.includes("death") || text.includes("morte") || text.includes("plague") || text.includes("peste") || text.includes("yersinia") || text.includes("emergency") || text.includes("investigation") || text.includes("fatal")) {
    return "high";
  }
  if (text.includes("alert") || text.includes("alerta") || text.includes("rospotrebnadzor") || text.includes("hospital") || text.includes("virus") || text.includes("pneumonia") || text.includes("outbreak") || text.includes("surto") || text.includes("contagion")) {
    return "medium";
  }
  return "low";
}

function extractLocationTags(title, content) {
  const text = (title + " " + (content || "")).toLowerCase();
  const tags = [];
  if (text.includes("irkutsk") || text.includes("irktusk")) tags.push("Irkutsk");
  if (text.includes("shelekhov")) tags.push("Shelekhov");
  if (text.includes("siberia") || text.includes("sibéria")) tags.push("Sibéria");
  if (text.includes("russia") || text.includes("rússia") || text.includes("moscow") || text.includes("moscou")) tags.push("Rússia");
  if (text.includes("who") || text.includes("oms") || text.includes("global") || text.includes("international")) tags.push("Global / OMS");
  if (text.includes("united states") || text.includes("eua") || text.includes("rubio") || text.includes("washington")) tags.push("EUA / Diplomacia");
  if (text.includes("mongolia") || text.includes("mongólia")) tags.push("Mongólia");
  if (text.includes("reddit") || text.includes("tiktok")) tags.push("Redes Sociais");
  if (tags.length === 0) tags.push("Internacional");
  return tags;
}

function cleanHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim();
}

async function fetchAllFeeds() {
  const now = Date.now();
  if (cachedNews.length > 0 && lastFetchTime && (now - lastFetchTime < CACHE_DURATION_MS)) {
    return { news: cachedNews, fromCache: true, lastUpdated: new Date(lastFetchTime).toISOString() };
  }

  const allItems = [];
  const seenUrls = new Set();
  const seenTitles = new Set();

  const fetchPromises = FEEDS.map(async (feedInfo) => {
    try {
      const feed = await parser.parseURL(feedInfo.url);
      if (feed && feed.items) {
        for (const item of feed.items) {
          const title = item.title ? item.title.trim() : "";
          const link = item.link || "";

          const normalizedTitle = title.toLowerCase().replace(/[^\w\s]/gi, '').slice(0, 50);
          if (!title || seenUrls.has(link) || seenTitles.has(normalizedTitle)) {
            continue;
          }

          seenUrls.add(link);
          seenTitles.add(normalizedTitle);

          const summary = cleanHtml(item.contentSnippet || item.content || item.summary || "");
          const severity = determineSeverity(title, summary);
          const locationTags = extractLocationTags(title, summary);
          const pubDate = item.pubDate || item.isoDate || new Date().toISOString();

          allItems.push({
            id: Buffer.from(link || title).toString('base64').substring(0, 16),
            title,
            link,
            source: feedInfo.name,
            category: feedInfo.category,
            priority: feedInfo.priority,
            summary: summary.slice(0, 300) + (summary.length > 300 ? "..." : ""),
            pubDate,
            pubTimestamp: new Date(pubDate).getTime() || Date.now(),
            severity,
            locationTags
          });
        }
      }
    } catch (err) {
      console.warn(`[RSS Warning] Falha ao coletar ${feedInfo.name}: ${err.message}`);
    }
  });

  await Promise.all(fetchPromises);
  allItems.sort((a, b) => b.pubTimestamp - a.pubTimestamp);

  cachedNews = allItems;
  lastFetchTime = now;

  return {
    news: cachedNews,
    fromCache: false,
    lastUpdated: new Date(lastFetchTime).toISOString(),
    total: cachedNews.length
  };
}

module.exports = {
  fetchAllFeeds,
  getCachedNews: () => cachedNews,
  getLastFetchTime: () => lastFetchTime
};
