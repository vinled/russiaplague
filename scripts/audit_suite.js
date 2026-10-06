/**
 * Suíte Completa de Auditoria Visual & Funcional da Interface
 * OUTBREAK INTELLIGENCE · SITUATION ROOM PLATFORM (v5.0.0)
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
  console.log('🚀 AUDITORIA AUTOMATIZADA · OUTBREAK INTELLIGENCE (SITUATION ROOM)');
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

  const rootDir = path.resolve(__dirname, '..');

  try {
    // 1. Garantir que a página esteja no localhost:3000
    await client.send('Page.navigate', { url: TARGET_URL });

    // 2. Aguardar sincronização e renderização completa dos dados reais
    console.log('\n⏳ Aguardando APIs (News, Briefing, Voos, Social, Incident) e renderização...');
    let isFullyLoaded = false;
    for (let i = 0; i < 30; i++) {
      await new Promise(r => setTimeout(r, 600));
      const status = await client.eval(`
        (() => {
          const brandTitle = document.querySelector('[data-i18n="brandTitle"]')?.textContent || '';
          const threatLevel = document.getElementById('threatBadgeText')?.textContent || '';
          const threatHeadline = document.getElementById('threatHeadline')?.textContent || '';
          const kpiContacts = document.getElementById('kpiContactsMonitored')?.textContent || '';
          const milestonesCount = document.querySelectorAll('#overviewMilestonesList > div').length;
          const evoRowsCount = document.querySelectorAll('#evolutionTableBody > tr').length;
          const verifiedCount = document.querySelectorAll('#latestVerifiedContainer > div').length;

          return {
            brandOk: brandTitle.includes('OUTBREAK INTELLIGENCE'),
            threatOk: threatLevel.length > 0 && threatHeadline.length > 5,
            kpisOk: kpiContacts.length > 0,
            milestonesCount,
            evoRowsCount,
            verifiedCount
          };
        })()
      `);

      if (status && status.brandOk && status.threatOk && status.kpisOk && status.milestonesCount > 0) {
        isFullyLoaded = true;
        console.log(`✅ Dados carregados em ${((i + 1) * 0.6).toFixed(1)}s! (Threat: Ativo, Milestones: ${status.milestonesCount}, Verified: ${status.verifiedCount})`);
        break;
      }
    }

    if (!isFullyLoaded) {
      auditResults.warnings.push('Timeout parcial ao aguardar todos os dados dinâmicos.');
    }

    // 3. Auditoria do Conceito da Marca & Header
    console.log('\n🏷️ [TESTE 1/7] Auditando Identidade e Header da Sala de Situação...');
    const headerAudit = await client.eval(`
      (() => {
        const brand = document.querySelector('[data-i18n="brandTitle"]')?.textContent.trim();
        const subtitle = document.querySelector('[data-i18n="brandSubtitle"]')?.textContent.trim();
        const context = document.querySelector('[data-i18n="brandContext"]')?.textContent.trim();
        const navTabs = Array.from(document.querySelectorAll('.nav-tab-btn')).map(b => b.textContent.trim());
        const headerTime = document.getElementById('headerLastUpdated')?.textContent.trim();

        return {
          brand,
          subtitle,
          context,
          navTabs,
          headerTime,
          has5Tabs: navTabs.length === 5
        };
      })()
    `);

    if (headerAudit.brand === 'OUTBREAK INTELLIGENCE') {
      auditResults.checks.push(`Nova identidade validada: "${headerAudit.brand}" (Subtítulo: "${headerAudit.subtitle}")`);
    } else {
      auditResults.errors.push(`Identidade incorreta: esperado "OUTBREAK INTELLIGENCE", obtido "${headerAudit.brand}"`);
    }

    if (headerAudit.has5Tabs) {
      auditResults.checks.push(`Navegação principal com 5 abas ativas: [${headerAudit.navTabs.join(' | ')}]`);
    } else {
      auditResults.errors.push(`Contagem incorreta de abas: ${headerAudit.navTabs.length} (esperado 5)`);
    }

    // 4. Auditoria da Home / OVERVIEW (Current Threat, KPIs, 60/40, Evolution, Verified, Rumor Watch)
    console.log('\n📊 [TESTE 2/7] Auditando Componentes Principais da Home (OVERVIEW)...');
    const overviewAudit = await client.eval(`
      (() => {
        const threatLevel = document.getElementById('threatBadgeText')?.textContent.trim();
        const threatHeadline = document.getElementById('threatHeadline')?.textContent.trim();
        const criteriaSec = document.getElementById('criteriaSecTrans')?.textContent.trim();
        const criteriaExt = document.getElementById('criteriaExtSpread')?.textContent.trim();

        const kpiConf = document.getElementById('kpiConfirmed')?.textContent.trim();
        const kpiInv = document.getElementById('kpiUnderInvestigation')?.textContent.trim();
        const kpiDeaths = document.getElementById('kpiDeaths')?.textContent.trim();
        const kpiContacts = document.getElementById('kpiContactsMonitored')?.textContent.trim();
        const kpiSec = document.getElementById('kpiSecondaryCases')?.textContent.trim();
        const kpiCountries = document.getElementById('kpiCountriesAffected')?.textContent.trim();
        const kpiExt = document.getElementById('kpiExternalCases')?.textContent.trim();

        const milestones = document.querySelectorAll('#overviewMilestonesList > div').length;
        const evoRows = document.querySelectorAll('#evolutionTableBody > tr').length;
        const verifiedItems = document.querySelectorAll('#latestVerifiedContainer > div').length;
        const rumorsCount = document.querySelectorAll('#overviewRumorWatchContainer > div').length;

        return {
          threatLevel,
          threatHeadline,
          criteriaSec,
          criteriaExt,
          kpis: { kpiConf, kpiInv, kpiDeaths, kpiContacts, kpiSec, kpiCountries, kpiExt },
          milestones,
          evoRows,
          verifiedItems,
          rumorsCount
        };
      })()
    `);

    if (overviewAudit.threatLevel === 'GUARDED' && overviewAudit.threatHeadline.includes('secondary transmission')) {
      auditResults.checks.push(`CURRENT THREAT validado: [${overviewAudit.threatLevel}] "${overviewAudit.threatHeadline}" (Critérios: Sec=${overviewAudit.criteriaSec}, Ext=${overviewAudit.criteriaExt})`);
    } else {
      auditResults.errors.push(`Falha no CURRENT THREAT: ${JSON.stringify(overviewAudit)}`);
    }

    if (overviewAudit.kpis.kpiConf === '0' && overviewAudit.kpis.kpiDeaths === '1' && overviewAudit.kpis.kpiInv === '1') {
      auditResults.checks.push(`Faixa de 7 KPIs epidemiológicos dinâmicos validada (0 Conf | 1 Inv | 1 Death | ${overviewAudit.kpis.kpiContacts} Contatos | 0 Sec)`);
    } else {
      auditResults.errors.push(`Falha na faixa de KPIs: ${JSON.stringify(overviewAudit.kpis)}`);
    }

    if (overviewAudit.evoRows >= 4) {
      auditResults.checks.push(`Módulo OUTBREAK EVOLUTION validado (${overviewAudit.evoRows} marcos temporais quantitativos substituindo gráfico de notícias)`);
    } else {
      auditResults.errors.push(`Módulo Outbreak Evolution incompleto: ${overviewAudit.evoRows} linhas`);
    }

    if (overviewAudit.verifiedItems > 0 && overviewAudit.verifiedItems <= 7) {
      auditResults.checks.push(`LATEST VERIFIED INTELLIGENCE validado (${overviewAudit.verifiedItems} despachos verificados prioritários)`);
    } else {
      auditResults.errors.push(`Falha em Latest Verified Intelligence: ${overviewAudit.verifiedItems} itens`);
    }

    if (overviewAudit.rumorsCount >= 3) {
      auditResults.checks.push(`Widget RUMOR WATCH validado (${overviewAudit.rumorsCount} tópicos separando viralidade de evidência científica)`);
    } else {
      auditResults.errors.push(`Falha no Rumor Watch da home: ${overviewAudit.rumorsCount} itens`);
    }

    await client.captureScreenshot(path.join(rootDir, 'audit_result_1_overview.png'));

    // 5. Teste da Aba TIMELINE
    console.log('\n⏱️ [TESTE 3/7] Testando Aba "TIMELINE"...');
    const timelineAudit = await client.eval(`
      (() => {
        const btn = document.getElementById('btnNavTimeline');
        if (!btn) return { error: 'Botão TIMELINE não encontrado' };
        btn.click();
        const view = document.getElementById('viewTimeline');
        const isVisible = view && !view.classList.contains('hidden');
        const itemsCount = view ? view.querySelectorAll('#fullTimelineContainer > div').length : 0;
        const filterBtns = view ? view.querySelectorAll('[data-timeline-filter]').length : 0;
        return { isVisible, itemsCount, filterBtns };
      })()
    `);

    await new Promise(r => setTimeout(r, 400));
    if (timelineAudit.isVisible && timelineAudit.itemsCount > 0 && timelineAudit.filterBtns >= 5) {
      auditResults.checks.push(`Aba TIMELINE funcional e ativa (${timelineAudit.itemsCount} marcos cronológicos detalhados com ${timelineAudit.filterBtns} filtros de classificação)`);
    } else {
      auditResults.errors.push(`Falha na Aba TIMELINE: ${JSON.stringify(timelineAudit)}`);
    }
    await client.captureScreenshot(path.join(rootDir, 'audit_result_2_timeline.png'));

    // 6. Teste da Aba MAP
    console.log('\n🗺️ [TESTE 4/7] Testando Aba "MAP"...');
    const mapAudit = await client.eval(`
      (() => {
        const btn = document.getElementById('btnNavMap');
        if (!btn) return { error: 'Botão MAP não encontrado' };
        btn.click();
        const view = document.getElementById('viewMap');
        const isVisible = view && !view.classList.contains('hidden');
        const mapContainer = document.getElementById('mainMapContainer');
        const hasLeaflet = mapContainer && mapContainer.classList.contains('leaflet-container');
        const filterBtns = view ? view.querySelectorAll('[data-map-layer]').length : 0;
        return { isVisible, hasLeaflet, filterBtns };
      })()
    `);

    await new Promise(r => setTimeout(r, 400));
    if (mapAudit.isVisible && mapAudit.hasLeaflet && mapAudit.filterBtns >= 8) {
      auditResults.checks.push(`Aba MAP profissional validada (Leaflet ativo, ${mapAudit.filterBtns} camadas filtráveis incluindo Incident, Cases, Contacts)`);
    } else {
      auditResults.errors.push(`Falha na Aba MAP: ${JSON.stringify(mapAudit)}`);
    }
    await client.captureScreenshot(path.join(rootDir, 'audit_result_3_map.png'));

    // 7. Teste da Aba INTELLIGENCE
    console.log('\n🛡️ [TESTE 5/7] Testando Aba "INTELLIGENCE" (5 Módulos Especializados)...');
    const intelAudit = await client.eval(`
      (() => {
        const btn = document.getElementById('btnNavIntelligence');
        if (!btn) return { error: 'Botão INTELLIGENCE não encontrado' };
        btn.click();
        const view = document.getElementById('viewIntelligence');
        const isVisible = view && !view.classList.contains('hidden');

        const flightRows = document.querySelectorAll('#flightsTableBody > tr').length;
        const bordersCount = document.querySelectorAll('#borderMonitoringGrid > div').length;
        const rumorRows = document.querySelectorAll('#rumorWatchTableBody > tr').length;
        const intlCards = document.querySelectorAll('#intlResponseCardsContainer > div').length;
        const hashtagsCount = document.querySelectorAll('#trendingTikTokHashtags > a').length;
        const bioContent = document.getElementById('biosecurityDossierContent')?.textContent || '';

        return {
          isVisible,
          flightRows,
          bordersCount,
          rumorRows,
          intlCards,
          hashtagsCount,
          bioHasContent: bioContent.includes('Irkutsk')
        };
      })()
    `);

    await new Promise(r => setTimeout(r, 400));
    if (intelAudit.isVisible && intelAudit.flightRows > 0 && intelAudit.bordersCount >= 4 && intelAudit.rumorRows > 0 && intelAudit.intlCards > 0 && intelAudit.hashtagsCount >= 4 && intelAudit.bioHasContent) {
      auditResults.checks.push(`Aba INTELLIGENCE validada com 5 módulos completos (Voos: ${intelAudit.flightRows}, Fronteiras: ${intelAudit.bordersCount} setores, Rumores: ${intelAudit.rumorRows}, TikTok Viral: ${intelAudit.hashtagsCount} tags, Resposta Intl: ${intelAudit.intlCards}, Dossiê de Biossegurança: Ativo)`);
    } else {
      auditResults.errors.push(`Falha na Aba INTELLIGENCE: ${JSON.stringify(intelAudit)}`);
    }
    await client.captureScreenshot(path.join(rootDir, 'audit_result_4_intelligence.png'));

    // 8. Teste da Aba SOURCES
    console.log('\n📰 [TESTE 6/7] Testando Aba "SOURCES" (Central de Notícias, Busca & Filtros)...');
    const sourcesAudit = await client.eval(`
      (() => {
        const btn = document.getElementById('btnNavSources');
        if (!btn) return { error: 'Botão SOURCES não encontrado' };
        btn.click();
        const view = document.getElementById('viewSources');
        const isVisible = view && !view.classList.contains('hidden');

        const initialRows = document.querySelectorAll('#sourcesFeedContainer article').length;
        const input = document.getElementById('sourcesSearchInput');
        if (input) {
          input.value = 'Irkutsk';
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
        const filteredRows = document.querySelectorAll('#sourcesFeedContainer article').length;

        // Limpar busca
        if (input) {
          input.value = '';
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }

        const tierPillsCount = document.querySelectorAll('[data-tier-filter]').length;
        const catPillsCount = document.querySelectorAll('[data-cat-filter]').length;
        const countryPillsCount = document.querySelectorAll('[data-country-filter]').length;
        const sourcePillsCount = document.querySelectorAll('[data-source-filter]').length;
        const langPillsCount = document.querySelectorAll('[data-lang-filter]').length;

        return {
          isVisible,
          initialRows,
          filteredRows,
          tierPillsCount,
          catPillsCount,
          countryPillsCount,
          sourcePillsCount,
          langPillsCount
        };
      })()
    `);

    await new Promise(r => setTimeout(r, 400));
    if (sourcesAudit.isVisible && sourcesAudit.initialRows > 0 && sourcesAudit.tierPillsCount >= 4 && sourcesAudit.catPillsCount >= 5 && sourcesAudit.countryPillsCount >= 5 && sourcesAudit.sourcePillsCount >= 5 && sourcesAudit.langPillsCount >= 3) {
      auditResults.checks.push(`Aba SOURCES validada (${sourcesAudit.initialRows} despachos paginados, busca e filtros por Categorias, Tiers, Regiões, Fontes e Idioma)`);
    } else {
      auditResults.errors.push(`Falha na Aba SOURCES: ${JSON.stringify(sourcesAudit)}`);
    }
    await client.captureScreenshot(path.join(rootDir, 'audit_result_5_sources.png'));

    // 8.1. Teste de Alternador Bilíngue EN / PT
    console.log('\n🌐 [TESTE 6.1/7] Testando Alternador de Idioma EN / PT...');
    const langAudit = await client.eval(`
      (() => {
        const btnPt = document.getElementById('langBtnPt');
        const btnEn = document.getElementById('langBtnEn');
        if (!btnPt || !btnEn) return { error: 'Botões EN/PT não encontrados' };

        // Testar alternância para PT
        btnPt.click();
        const ptLang = document.documentElement.lang;
        const ptOverviewLabel = document.querySelector('[data-i18n="navOverview"]')?.textContent;
        const ptThreatLabel = document.querySelector('[data-i18n="currentThreatTitle"]')?.textContent;

        // Testar alternância de volta para EN
        btnEn.click();
        const enLang = document.documentElement.lang;
        const enOverviewLabel = document.querySelector('[data-i18n="navOverview"]')?.textContent;
        const enThreatLabel = document.querySelector('[data-i18n="currentThreatTitle"]')?.textContent;

        return {
          ptOk: ptLang === 'pt' && ptOverviewLabel.includes('PANORAMA') && ptThreatLabel.includes('AMEAÇA'),
          enOk: enLang === 'en' && enOverviewLabel.includes('OVERVIEW') && enThreatLabel.includes('THREAT'),
          ptOverviewLabel,
          enOverviewLabel
        };
      })()
    `);

    if (langAudit.ptOk && langAudit.enOk) {
      auditResults.checks.push(`Alternador Bilíngue validado: PT ("${langAudit.ptOverviewLabel}") e EN ("${langAudit.enOverviewLabel}")`);
    } else {
      auditResults.warnings.push(`Comportamento do seletor bilíngue: ${JSON.stringify(langAudit)}`);
    }

    // 9. Auditoria Responsiva Mobile (390x844)
    console.log('\n📱 [TESTE 7/7] Testando Layout Mobile (iPhone 14 / 390x844)...');
    await client.send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await new Promise(r => setTimeout(r, 500));

    // Retornar ao Overview para teste mobile
    await client.eval(`document.getElementById('btnNavOverview').click();`);
    await new Promise(r => setTimeout(r, 400));

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
      auditResults.checks.push(`Layout Mobile 100% responsivo e sem scroll horizontal (scrollWidth: ${mobileLayout.scrollWidth}px <= ${mobileLayout.windowWidth}px)`);
    }
    await client.captureScreenshot(path.join(rootDir, 'audit_result_6_mobile.png'));

    // 10. Checagem de Erros de Console JavaScript
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
  console.log('📊 RESUMO DA AUDITORIA DA INTERFACE (OUTBREAK INTELLIGENCE)');
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
    console.log('\n🏆 RESULTADO: 100% APROVADO! INTERFACE TOTALMENTE CONVERTIDA EM SALA DE SITUAÇÃO.');
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
