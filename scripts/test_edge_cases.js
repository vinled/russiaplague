const fs = require('fs');
const path = require('path');

const PORT = 9222;
const TARGET_URL = 'http://localhost:3000';

class CdpClient {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.reqId = 0;
    this.pending = new Map();
    this.consoleErrors = [];

    this.ready = new Promise((resolve, reject) => {
      this.ws.onopen = resolve;
      this.ws.onerror = reject;
    });

    this.ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      if (data.id && this.pending.has(data.id)) {
        const { resolve, reject } = this.pending.get(data.id);
        this.pending.delete(data.id);
        if (data.error) reject(data.error);
        else resolve(data.result);
      } else if (data.method === 'Runtime.exceptionThrown') {
        this.consoleErrors.push(data.params.exceptionDetails);
      }
    };
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = ++this.reqId;
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async eval(expression) {
    const res = await this.send('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true
    });
    if (res.exceptionDetails) {
      throw new Error(res.exceptionDetails.exception?.description || res.exceptionDetails.text);
    }
    return res.result?.value;
  }

  close() {
    this.ws.close();
  }
}

async function runEdgeCases() {
  console.log('🧪 Testing Edge Cases and Stress Interactions...');
  let wsUrl = null;
  for (let i = 0; i < 20; i++) {
    try {
      const res = await fetch(`http://localhost:${PORT}/json`, { headers: { Host: 'localhost' } });
      if (res.ok) {
        const pages = await res.json();
        const targetPage = pages.find(p => p.url && p.url.includes('localhost:3000')) || pages.find(p => p.type === 'page' && !p.url.startsWith('edge://'));
        if (targetPage && targetPage.webSocketDebuggerUrl) {
          wsUrl = targetPage.webSocketDebuggerUrl;
          break;
        }
      }
    } catch (e) {}
    await new Promise(r => setTimeout(r, 400));
  }

  if (!wsUrl) throw new Error('No browser CDP session found.');

  const client = new CdpClient(wsUrl);
  await client.ready;
  await client.send('Page.enable');
  await client.send('Runtime.enable');

  try {
    // 1. Test Map Rapid Switching
    console.log('1. Rapid Tab Switching (Map <-> Overview)...');
    for (let i = 0; i < 5; i++) {
      await client.eval(`document.getElementById('btnNavMap').click();`);
      await new Promise(r => setTimeout(r, 50));
      await client.eval(`document.getElementById('btnNavOverview').click();`);
      await new Promise(r => setTimeout(r, 50));
    }
    const mapError = await client.eval(`(() => {
      const mc = document.getElementById('mainMapContainer');
      const oc = document.getElementById('overviewMapPreview');
      return { mcOk: !!mc._leaflet_id, ocOk: !!oc._leaflet_id };
    })()`);
    console.log('   Map instances healthy:', mapError);

    // 2. Test Layer Filters on Map
    console.log('2. Testing All Map Layers...');
    await client.eval(`document.getElementById('btnNavMap').click();`);
    const layers = ['cases', 'contacts', 'incident', 'hospitals', 'laboratories', 'airports', 'borders', 'international', 'all'];
    for (const layer of layers) {
      const count = await client.eval(`(() => {
        const pill = document.querySelector('[data-map-layer="${layer}"]');
        if (pill) pill.click();
        return state.mainMarkerGroup ? state.mainMarkerGroup.getLayers().length : 0;
      })()`);
      console.log(`   Layer "${layer}" rendered ${count} markers.`);
      if (count === 0 && layer !== 'all') {
        throw new Error(`Layer ${layer} rendered 0 markers!`);
      }
    }

    // 3. Test Sources Filter Combinations
    console.log('3. Testing Sources Multi-Dimension Filters...');
    await client.eval(`document.getElementById('btnNavSources').click();`);
    
    // Country filter
    const countryCount = await client.eval(`(() => {
      const p = document.querySelector('[data-country-filter="Russia"]');
      if (p) p.click();
      return document.querySelectorAll('#sourcesFeedContainer article').length;
    })()`);
    console.log(`   Country filter "Russia": ${countryCount} articles.`);

    // Language filter
    const langCount = await client.eval(`(() => {
      const p = document.querySelector('[data-lang-filter="pt"]');
      if (p) p.click();
      return document.querySelectorAll('#sourcesFeedContainer article').length;
    })()`);
    console.log(`   Language filter "pt": ${langCount} articles.`);

    // Reset filters
    await client.eval(`(() => {
      document.querySelector('[data-country-filter="all"]')?.click();
      document.querySelector('[data-lang-filter="all"]')?.click();
    })()`);

    // 4. Test Quick Search jump to Sources
    console.log('4. Quick search jumping...');
    await client.eval(`document.getElementById('btnNavOverview').click();`);
    await client.eval(`(() => {
      const qs = document.getElementById('quickSearchInput');
      qs.value = 'Popova';
      qs.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    })()`);
    const activeTab = await client.eval(`state.currentTab`);
    console.log(`   Quick Search routed to tab: ${activeTab}`);
    if (activeTab !== 'navSources') throw new Error('Quick Search failed to route to Sources!');

    // 5. Test TikTok hashtag links
    console.log('5. TikTok trending hashtags links...');
    await client.eval(`document.getElementById('btnNavIntelligence').click();`);
    const hashtagUrls = await client.eval(`(() => {
      return Array.from(document.querySelectorAll('#trendingTikTokHashtags a')).map(a => a.href);
    })()`);
    console.log(`   Found ${hashtagUrls.length} TikTok direct links:`, hashtagUrls.slice(0, 3));
    if (hashtagUrls.length < 4 || !hashtagUrls[0].includes('tiktok.com')) {
      throw new Error('TikTok hashtag URLs missing or invalid!');
    }

    console.log('✅ ALL EDGE CASE TESTS PASSED!');
  } finally {
    client.close();
  }
}

runEdgeCases().catch(err => {
  console.error('❌ Edge case error:', err);
  process.exit(1);
});
