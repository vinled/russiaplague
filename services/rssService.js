const Parser = require('rss-parser');
const parser = new Parser({
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 HealthMonitor/3.0'
  },
  timeout: 8000
});

const FEEDS = [
  {
    name: "Reuters & Global Wire",
    url: 'https://news.google.com/rss/search?q=Reuters+OR+AP+Irkutsk+OR+"plague"+Russia&hl=en-US&gl=US&ceid=US:en',
    category: "International",
    priority: "official"
  },
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
    url: 'https://news.google.com/rss/search?q=site:reddit.com+Irkutsk+OR+plague+OR+"Russia+virus"&hl=en-US&gl=US&ceid=US:en',
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

const RELEVANT_KEYWORDS = [
  'irkutsk', 'plague', 'peste', 'yersinia', 'shipilova', 'rospotrebnadzor',
  'shelekhov', 'siberia', 'sibéria', 'quarantine', 'quarentena', 'surto',
  'outbreak', 'pneumonic', 'pneumônica', 'biolab', 'bactéria', 'bacteria',
  'epidemic', 'epidemia', 'contágio', 'contagion', 'infection', 'infecção',
  'pathogen', 'patógeno', 'disease', 'doença', 'sanitary', 'sanitária',
  'bno news', 'health', 'saúde', 'who', 'oms'
];

// Cache em memória
let cachedNews = [];
let lastFetchTime = null;
const CACHE_DURATION_MS = 60 * 1000; // 60 segundos de cache

/**
 * Severidade calibrada rigorosamente conforme especificação:
 * VERMELHO (high) é reservado exclusivamente para mudanças epidemiológicas críticas.
 */
function determineSeverity(title, content) {
  const text = (title + " " + (content || "")).toLowerCase();
  
  // Reservado exclusivamente para mudanças críticas
  if (
    text.includes("secondary transmission confirmed") ||
    text.includes("transmissão secundária confirmada") ||
    text.includes("secondary infection detected") ||
    text.includes("international spread detected") ||
    text.includes("disseminação internacional confirmada") ||
    text.includes("new cluster detected") ||
    text.includes("abrupt surge in cases") ||
    text.includes("emergency state declared") ||
    text.includes("severe risk level upgrade")
  ) {
    return "high";
  }

  // Notícias de apuração, quarentena, hospitalização ou investigação oficial
  if (
    text.includes("quarantine") || text.includes("quarentena") ||
    text.includes("death") || text.includes("morte") || text.includes("fatal") ||
    text.includes("investigation") || text.includes("inquérito") ||
    text.includes("hospital") || text.includes("rospotrebnadzor") ||
    text.includes("plague") || text.includes("peste") || text.includes("yersinia")
  ) {
    return "medium";
  }

  return "low";
}

function determineClassification(title, source, content) {
  const text = (title + " " + (content || "")).toLowerCase();
  const src = (source || "").toLowerCase();

  if (src.includes("who") || src.includes("oms") || src.includes("rospotrebnadzor") || text.includes("official statement") || text.includes("declaração oficial")) {
    return "OFFICIAL";
  }
  if (text.includes("confirmed") || text.includes("confirma") || text.includes("morre") || text.includes("died") || text.includes("óbito") || text.includes("200 contatos") || text.includes("200 contacts")) {
    return "CONFIRMED";
  }
  if (text.includes("disputed") || text.includes("denies") || text.includes("nega") || text.includes("contradicts") || text.includes("dúvida")) {
    return "DISPUTED";
  }
  if (src.includes("reddit") || text.includes("tiktok") || text.includes("rumor") || text.includes("unverified") || text.includes("alega")) {
    return "UNVERIFIED";
  }
  return "REPORTED";
}

function determineTrustTier(source, link) {
  const src = (source || "").toLowerCase();
  const url = (link || "").toLowerCase();

  // TIER 1: WHO, Reuters, Autoridades Sanitárias Oficiais
  if (
    src.includes("who") || src.includes("oms") ||
    src.includes("reuters") || url.includes("reuters.com") ||
    src.includes("rospotrebnadzor") || src.includes("cdc") ||
    url.includes("who.int")
  ) {
    return { tier: "TIER 1", tierCode: "tier-1", label: "Tier 1 · Official / Wire" };
  }

  // TIER 2: Grandes veículos internacionais
  if (
    src.includes("bbc") || src.includes("cnn") || src.includes("bno") ||
    src.includes("moscow times") || src.includes("the guardian") ||
    src.includes("time") || src.includes("medical xpress") ||
    url.includes("bbc.") || url.includes("cnn.")
  ) {
    return { tier: "TIER 2", tierCode: "tier-2", label: "Tier 2 · Major Press" };
  }

  // TIER 4: Redes sociais / Fontes não verificadas
  if (
    src.includes("reddit") || src.includes("tiktok") ||
    url.includes("reddit.com") || url.includes("tiktok.com")
  ) {
    return { tier: "TIER 4", tierCode: "tier-4", label: "Tier 4 · Social / OSINT" };
  }

  // TIER 3: Mídia regional / Agregadores
  return { tier: "TIER 3", tierCode: "tier-3", label: "Tier 3 · Regional / Web" };
}

function determineCategory(title, source, content) {
  const text = (title + " " + (content || "")).toLowerCase();
  const src = (source || "").toLowerCase();

  if (src.includes("who") || src.includes("oms") || text.includes("who") || text.includes("oms")) return "WHO";
  if (src.includes("reddit") || text.includes("tiktok") || text.includes("viral")) return "Social";
  if (text.includes("lab") || text.includes("laborat") || text.includes("institute") || text.includes("instituto") || text.includes("bioprotection")) return "Laboratory";
  if (src.includes("medical xpress") || text.includes("yersinia") || text.includes("pathogen") || text.includes("scientific")) return "Scientific";
  if (src.includes("rospotrebnadzor") || text.includes("autoridades") || text.includes("inquérito") || text.includes("investigative committee")) return "Official";
  if (text.includes("border") || text.includes("fronteira") || text.includes("mongolia") || text.includes("china") || text.includes("rubio") || text.includes("international")) return "International";
  if (text.includes("irkutsk") || text.includes("shelekhov") || text.includes("siberia") || text.includes("russia")) return "Russia";
  return "Epidemiology";
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

function determineCountry(title, source, content) {
  const text = (title + " " + (content || "")).toLowerCase();
  const src = (source || "").toLowerCase();
  if (text.includes("mongolia") || text.includes("mongólia")) return "Mongolia";
  if (text.includes("china") || text.includes("pequim") || text.includes("beijing") || text.includes("harbin")) return "China";
  if (text.includes("who") || text.includes("oms") || src.includes("who") || src.includes("oms")) return "Multilateral / WHO";
  if (src.includes("português") || src.includes("lusófona") || text.includes("brasil") || text.includes("brazil")) return "Brazil / Lusophone";
  if (text.includes("russia") || text.includes("rússia") || text.includes("irkutsk") || text.includes("siberia") || text.includes("sibéria") || text.includes("shelekhov") || text.includes("moscow") || text.includes("moscou") || text.includes("rospotrebnadzor")) return "Russia";
  return "International";
}

function determineLanguage(feedName, title, content) {
  const text = title + " " + (content || "");
  if (feedName.includes("PT") || feedName.includes("Português") || /[áàãâéêíóôõúç]/i.test(text)) {
    return "pt";
  }
  return "en";
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
          const combined = (title + " " + summary).toLowerCase();
          const isEpidemicRelated = RELEVANT_KEYWORDS.some(kw => combined.includes(kw));
          if (!isEpidemicRelated) {
            continue;
          }

          const severity = determineSeverity(title, summary);
          const classification = determineClassification(title, feedInfo.name, summary);
          const trustTier = determineTrustTier(feedInfo.name, link);
          const category = determineCategory(title, feedInfo.name, summary);
          const country = determineCountry(title, feedInfo.name, summary);
          const language = determineLanguage(feedInfo.name, title, summary);
          const locationTags = extractLocationTags(title, summary);
          const pubDate = item.pubDate || item.isoDate || new Date().toISOString();

          allItems.push({
            id: Buffer.from(link || title).toString('base64').substring(0, 16),
            title,
            link,
            source: feedInfo.name,
            category,
            country,
            language,
            priority: feedInfo.priority,
            summary: summary.slice(0, 300) + (summary.length > 300 ? "..." : ""),
            pubDate,
            pubTimestamp: new Date(pubDate).getTime() || Date.now(),
            severity,
            classification,
            trustTier,
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
