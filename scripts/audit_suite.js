/**
 * Suíte Completa de Auditoria Visual & Funcional da Interface
 * Conecta via Chrome DevTools Protocol (CDP) com WebSocket nativo do Node.js
 */

const fs = require('fs');
const path = require('path');

const PORT = 9222;
const TARGET_URL = 'http://localhost:3000';

class CdpClient {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.reqId = 0;
    this.pending = new Map();
    this.consoleLogs = [];
    this.failedRequests = [];

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
      } else if (data.method) {
        this.handleEvent(data.method, data.params);
      }
    };
  }

  handleEvent(method, params) {
    if (method === 'Runtime.consoleAPICalled') {
      const text = params.args.map(a => a.value || a.description || JSON.stringify(a)).join(' ');
      this.consoleLogs.push({ type: params.type, text });
    } else if (method === 'Runtime.exceptionThrown') {
      this.consoleLogs.push({ type: 'error', text: params.exceptionDetails.text + ' ' + (params.exceptionDetails.exception?.description || '') });
    } else if (method === 'Network.loadingFailed') {
      this.failedRequests.push(params);
    }
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
      const errText = res.exceptionDetails.exception?.description || res.exceptionDetails.text;
      throw new Error(errText);
    }
    return res.result?.value;
  }

  async captureScreenshot(filename) {
    const res = await this.send('Page.captureScreenshot', { format: 'png' });
    const buffer = Buffer.from(res.data, 'base64');
    fs.writeFileSync(filename, buffer);
    console.log(`📸 [Screenshot Salvo]: ${path.basename(filename)} (${(buffer.length / 1024).toFixed(1)} KB)`);
  }

  close() {
    this.ws.close();
  }
}

async function runAudit() {
  console.log('===============================================================');
  console.log('🚀 AUDITORIA AUTOMATIZADA COMPLETA DA INTERFACE (CDP + NODE)');
  console.log('===============================================================');

  // Conectar ao Edge rodando na porta 9222
  let wsUrl = null;
  for (let i = 0; i < 20; i++) {
    try {
      const res = await fetch(`http://localhost:${PORT}/json`, {
        headers: { Host: 'localhost' }
      });
      if (res.ok) {
        const pages = await res.json();
        const targetPage = pages.find(p => p.url && p.url.includes('localhost:3000')) || pages.find(p => p.type === 'page' && !p.url.startsWith('edge://'));
        if (targetPage && targetPage.webSocketDebuggerUrl) {
          wsUrl = targetPage.webSocketDebuggerUrl;
          console.log(`🎯 Conectado à página: "${targetPage.title}" (${targetPage.url})`);
          break;
        }
      }
    } catch (e) {}
    await new Promise(r => setTimeout(r, 400));
  }

  if (!wsUrl) {
    throw new Error('Não foi possível conectar ao navegador via porta 9222.');
  }

  const client = new CdpClient(wsUrl);
  await client.ready;

  await client.send('Page.enable');
  await client.send('Runtime.enable');
  await client.send('Network.enable');

  const auditResults = {
    checks: [],
    errors: [],
    warnings: [],
    layoutMetrics: {}
  };

  try {
    // 1. Garantir que a página esteja no localhost:3000
    await client.send('Page.navigate', { url: TARGET_URL });

    // 2. Aguardar sincronização e renderização completa dos dados reais
    console.log('\n⏳ Aguardando APIs (News, Briefing, Voos, Social) e renderização...');
    let isFullyLoaded = false;
    for (let i = 0; i < 30; i++) {
      await new Promise(r => setTimeout(r, 600));
      const status = await client.eval(`
        (() => {
          const newsCount = document.querySelectorAll('.news-row').length;
          const headline = document.getElementById('briefingHeadline')?.textContent || '';
          const cardQuarantine = document.getElementById('cardQuarantine')?.textContent || '';
          return {
            newsCount,
            headlineReady: !headline.includes('Carregando') && headline.length > 5,
            cardQuarantineReady: !cardQuarantine.includes('--'),
            cardQuarantine
          };
        })()
      `);

      if (status && status.newsCount > 0 && status.headlineReady && status.cardQuarantineReady) {
        isFullyLoaded = true;
        console.log(`✅ Dados carregados em ${((i + 1) * 0.6).toFixed(1)}s! (${status.newsCount} notícias, card: ${status.cardQuarantine})`);
        break;
      }
    }

    if (!isFullyLoaded) {
      auditResults.warnings.push('Timeout parcial ao aguardar todos os dados dinâmicos.');
    }

    // 3. Auditoria de Layout, Proporção das Colunas e Segmented Control
    console.log('\n📐 [TESTE 1/6] Auditando Estrutura de Grid e Proporções...');
    const layout = await client.eval(`
      (() => {
        const leftCol = document.querySelector('[class*="lg:col-span-7"]');
        const rightCol = document.querySelector('[class*="lg:col-span-5"]');
        const mainGrid = document.querySelector('main');
        const segmentedControl = document.querySelector('.segmented-control');
        const body = document.body;

        return {
          windowWidth: window.innerWidth,
          mainGridWidth: mainGrid ? mainGrid.offsetWidth : 0,
          leftColWidth: leftCol ? leftCol.offsetWidth : 0,
          rightColWidth: rightCol ? rightCol.offsetWidth : 0,
          segmentedWidth: segmentedControl ? segmentedControl.offsetWidth : 0,
          bodyScrollWidth: body.scrollWidth,
          hasHorizontalScrollbar: body.scrollWidth > window.innerWidth,
          tabsCount: document.querySelectorAll('.segmented-btn').length,
          segmentedButtons: Array.from(document.querySelectorAll('.segmented-btn')).map(b => b.textContent.trim())
        };
      })()
    `);

    auditResults.layoutMetrics = layout;

    // Verificar se a coluna da direita NÃO está espremida
    if (layout.rightColWidth < 350) {
      auditResults.errors.push(`Coluna da direita comprometida! Largura: ${layout.rightColWidth}px (esperado >= 350px)`);
    } else {
      auditResults.checks.push(`Coluna da direita íntegra e proporcional: ${layout.rightColWidth}px (Coluna da esquerda: ${layout.leftColWidth}px)`);
    }

    if (layout.hasHorizontalScrollbar) {
      auditResults.errors.push(`Scrollbar horizontal detectada no desktop (${layout.bodyScrollWidth}px > ${layout.windowWidth}px)`);
    } else {
      auditResults.checks.push('Sem overflow horizontal indesejado no desktop');
    }

    if (layout.tabsCount === 5) {
      auditResults.checks.push(`5 abas do Segmented Control alinhadas: [${layout.segmentedButtons.join(' | ')}]`);
    } else {
      auditResults.errors.push(`Contagem incorreta de abas: ${layout.tabsCount} (esperado 5)`);
    }

    // Screenshot da tela principal populada com Mapa
    const rootDir = path.resolve(__dirname, '..');
    await client.captureScreenshot(path.join(rootDir, 'audit_result_1_mapa.png'));

    // 4. Teste de Interação: Aba Voos (IKT)
    console.log('\n✈️ [TESTE 2/6] Testando Aba "Voos (IKT)"...');
    const flightsAudit = await client.eval(`
      (() => {
        const btn = document.querySelector('button[data-tab="tabFlights"]');
        if (!btn) return { error: 'Botão não encontrado' };
        btn.click();
        const tabFlights = document.getElementById('tabFlights');
        const flightCards = tabFlights ? tabFlights.querySelectorAll('#flightsContainer .news-row').length : 0;
        const isVisible = tabFlights && !tabFlights.classList.contains('hidden');
        return { isVisible, flightCards };
      })()
    `);

    await new Promise(r => setTimeout(r, 400));
    if (flightsAudit.isVisible && flightsAudit.flightCards > 0) {
      auditResults.checks.push(`Aba Voos ativa e funcional (${flightsAudit.flightCards} conexões aéreas monitoradas com status sanitário)`);
    } else {
      auditResults.errors.push(`Falha na Aba Voos: ${JSON.stringify(flightsAudit)}`);
    }
    await client.captureScreenshot(path.join(rootDir, 'audit_result_2_voos.png'));

    // 5. Teste de Interação: Aba TikTok / Redes
    console.log('\n📱 [TESTE 3/6] Testando Aba "TikTok / Redes"...');
    const socialAudit = await client.eval(`
      (() => {
        const btn = document.querySelector('button[data-tab="tabSocial"]');
        btn.click();
        const tabSocial = document.getElementById('tabSocial');
        const posts = tabSocial ? tabSocial.querySelectorAll('#socialPostsContainer > *').length : 0;
        const hashtags = tabSocial ? tabSocial.querySelectorAll('#trendingHashtagsContainer > *').length : 0;
        const isVisible = tabSocial && !tabSocial.classList.contains('hidden');
        return { isVisible, posts, hashtags };
      })()
    `);

    await new Promise(r => setTimeout(r, 400));
    if (socialAudit.isVisible && (socialAudit.posts > 0 || socialAudit.hashtags > 0)) {
      auditResults.checks.push(`Aba TikTok ativa e funcional (${socialAudit.posts} postagens e ${socialAudit.hashtags} hashtags ativas)`);
    } else {
      auditResults.errors.push(`Falha na Aba TikTok: ${JSON.stringify(socialAudit)}`);
    }
    await client.captureScreenshot(path.join(rootDir, 'audit_result_3_tiktok.png'));

    // 6. Teste de Interação: Aba Dossiê
    console.log('\n📄 [TESTE 4/6] Testando Aba "Dossiê"...');
    const dossierAudit = await client.eval(`
      (() => {
        const btn = document.querySelector('button[data-tab="tabDossier"]');
        btn.click();
        const tabDossier = document.getElementById('tabDossier');
        const timelineItems = tabDossier ? tabDossier.querySelectorAll('#timelineContainer > div').length : 0;
        const isVisible = tabDossier && !tabDossier.classList.contains('hidden');
        return { isVisible, timelineItems };
      })()
    `);

    await new Promise(r => setTimeout(r, 400));
    if (dossierAudit.isVisible && dossierAudit.timelineItems > 0) {
      auditResults.checks.push(`Aba Dossiê ativa e funcional (${dossierAudit.timelineItems} marcos cronológicos exibidos)`);
    } else {
      auditResults.errors.push(`Falha na Aba Dossiê: ${JSON.stringify(dossierAudit)}`);
    }
    await client.captureScreenshot(path.join(rootDir, 'audit_result_4_dossie.png'));

    // 7. Retornar ao Mapa
    await client.eval(`document.querySelector('button[data-tab="tabMap"]').click();`);
    await new Promise(r => setTimeout(r, 400));

    // 8. Teste de Busca e Filtros
    console.log('\n🔍 [TESTE 5/6] Testando Mecanismo de Busca & Filtros...');
    const searchAudit = await client.eval(`
      (() => {
        const input = document.getElementById('searchInput');
        input.value = 'Irkutsk';
        input.dispatchEvent(new Event('input', { bubbles: true }));
        const countText = document.getElementById('filteredCountText')?.textContent;
        const items = document.querySelectorAll('#newsFeedContainer .news-row').length;

        // Limpar busca
        input.value = '';
        input.dispatchEvent(new Event('input', { bubbles: true }));

        return { searchOk: items > 0, countText, items };
      })()
    `);

    if (searchAudit.searchOk) {
      auditResults.checks.push(`Filtro de busca em tempo real validado: "${searchAudit.countText}" (${searchAudit.items} notícias filtradas)`);
    } else {
      auditResults.warnings.push('Busca por termo retornou 0 resultados');
    }

    // 8.1. Teste de Alternador Bilíngue EN / PT
    console.log('\n🌐 [TESTE 5.1/6] Testando Alternador Bilíngue EN / PT...');
    const langAudit = await client.eval(`
      (() => {
        const btnEn = document.getElementById('langBtnEn');
        const btnPt = document.getElementById('langBtnPt');
        if (!btnEn || !btnPt) return { error: 'Botões EN/PT não encontrados' };

        // Testar alternância para EN
        btnEn.click();
        const enLang = document.documentElement.lang;
        const enTitle = document.querySelector('[data-i18n="appTitle"]')?.textContent;
        const enSearchHolder = document.getElementById('searchInput')?.placeholder;
        const enPref = localStorage.getItem('preferred_language');

        // Testar alternância de volta para PT
        btnPt.click();
        const ptLang = document.documentElement.lang;
        const ptTitle = document.querySelector('[data-i18n="appTitle"]')?.textContent;
        const ptPref = localStorage.getItem('preferred_language');

        return {
          enOk: enLang === 'en' && enTitle.includes('Health') && enPref === 'en',
          ptOk: ptLang === 'pt-BR' && ptTitle.includes('Sanitária') && ptPref === 'pt',
          enTitle,
          ptTitle
        };
      })()
    `);

    if (langAudit.enOk && langAudit.ptOk) {
      auditResults.checks.push(`Sistema Bilíngue validado: EN ("${langAudit.enTitle}") e PT ("${langAudit.ptTitle}")`);
    } else {
      auditResults.errors.push(`Falha na alternância de idioma: ${JSON.stringify(langAudit)}`);
    }

    // 9. Auditoria Responsiva: Mobile Viewport (iPhone 14 / 390x844)
    console.log('\n📱 [TESTE 6/6] Testando Layout Mobile (iPhone 14 / 390x844)...');
    await client.send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await new Promise(r => setTimeout(r, 500));

    const mobileLayout = await client.eval(`
      (() => {
        return {
          windowWidth: window.innerWidth,
          scrollWidth: document.body.scrollWidth,
          overflow: document.body.scrollWidth > window.innerWidth
        };
      })()
    `);

    if (mobileLayout.overflow) {
      auditResults.errors.push(`Mobile com quebra de layout: largura ${mobileLayout.scrollWidth}px > ${mobileLayout.windowWidth}px`);
    } else {
      auditResults.checks.push(`Layout Mobile 100% responsivo e alinhado (scrollWidth: ${mobileLayout.scrollWidth}px)`);
    }

    await client.captureScreenshot(path.join(rootDir, 'audit_result_5_mobile.png'));

    // 10. Checagem de Erros de Console
    const consoleErrors = client.consoleLogs.filter(l => l.type === 'error');
    if (consoleErrors.length > 0) {
      auditResults.warnings.push(`Console registrou erros: ${consoleErrors.map(e => e.text).slice(0, 3).join(' | ')}`);
    } else {
      auditResults.checks.push('Console JavaScript sem erros de runtime');
    }

  } catch (err) {
    auditResults.errors.push(`Erro durante a suíte de testes: ${err.message}`);
  } finally {
    client.close();
  }

  console.log('\n===============================================================');
  console.log('📊 RESUMO DA AUDITORIA DA INTERFACE');
  console.log('===============================================================');
  console.log(`✅ APROVADOS (${auditResults.checks.length}):`);
  auditResults.checks.forEach(c => console.log(`   ✓ ${c}`));

  if (auditResults.warnings.length > 0) {
    console.log(`\n⚠️ OBSERVAÇÕES (${auditResults.warnings.length}):`);
    auditResults.warnings.forEach(w => console.log(`   ! ${w}`));
  }

  if (auditResults.errors.length > 0) {
    console.log(`\n❌ FALHAS IDENTIFICADAS (${auditResults.errors.length}):`);
    auditResults.errors.forEach(e => console.log(`   ✗ ${e}`));
  } else {
    console.log('\n🏆 RESULTADO: 100% APROVADO! INTERFACE TOTALMENTE CORRIGIDA E AUDITADA.');
  }
  console.log('===============================================================');

  return auditResults;
}

runAudit().then(res => {
  if (res.errors.length > 0) process.exit(1);
  process.exit(0);
}).catch(err => {
  console.error('Falha de execução:', err);
  process.exit(1);
});
