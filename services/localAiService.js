/**
 * Serviço de Integração com LLM Local (LM Studio / OpenAI-compatible endpoint em http://localhost:1234/v1)
 * Delega o trabalho pesado de IA para economizar créditos e cotas da API do Gemini.
 * Realiza fallback transparente para o Gemini ou para os motores determinísticos caso o endpoint local não responda.
 */

const LOCAL_AI_BASE_URL = process.env.LOCAL_AI_URL || 'http://localhost:1234/v1';
const DEFAULT_LOCAL_MODEL = process.env.LOCAL_AI_MODEL || 'google/gemma-3-1b';
const TIMEOUT_MS = 15000;

let cachedActiveModel = null;
let lastModelCheck = 0;
const MODEL_CACHE_TTL = 60 * 1000;

/**
 * Verifica se o LM Studio / endpoint local está ativo e retorna o ID do modelo disponível
 */
async function getAvailableLocalModel() {
  const now = Date.now();
  if (cachedActiveModel && (now - lastModelCheck < MODEL_CACHE_TTL)) {
    return cachedActiveModel;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const res = await fetch(`${LOCAL_AI_BASE_URL}/models`, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data?.data && Array.isArray(data.data) && data.data.length > 0) {
        // Preferencialmente procura por gemma, ministral ou lfm, senão pega o primeiro
        const preferred = data.data.find(m => 
          m.id.includes('gemma') || 
          m.id.includes('ministral') || 
          m.id.includes('lfm')
        );
        cachedActiveModel = preferred ? preferred.id : data.data[0].id;
        lastModelCheck = now;
        return cachedActiveModel;
      }
    }
  } catch (e) {
    // Endpoint local offline ou inacessível
  }

  cachedActiveModel = null;
  return null;
}

/**
 * Envia um prompt para o endpoint local do LM Studio esperando resposta estruturada
 * @param {string} prompt Texto do prompt
 * @param {object} options Opções de geração (temperatura, max_tokens, etc.)
 * @returns {Promise<string|null>} Resposta de texto ou null se indisponível
 */
async function generateLocalChatCompletion(prompt, options = {}) {
  const modelId = await getAvailableLocalModel();
  if (!modelId) {
    return null;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    const response = await fetch(`${LOCAL_AI_BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: modelId,
        messages: [
          {
            role: 'system',
            content: 'You are an epidemiological intelligence officer. Respond with precise, accurate JSON only when requested. Do not invent facts.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: options.temperature || 0.2,
        max_tokens: options.max_tokens || 800
      })
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`[Local AI] Resposta com erro ${response.status}: ${response.statusText}`);
      return null;
    }

    const json = await response.json();
    const content = json?.choices?.[0]?.message?.content || null;
    return content;
  } catch (err) {
    console.warn(`[Local AI] Falha na comunicação com LM Studio (${err.message}). Fazendo fallback...`);
    return null;
  }
}

/**
 * Analisa e extrai JSON de uma resposta do modelo local
 */
function extractJsonFromText(rawText) {
  if (!rawText) return null;
  try {
    const clean = rawText
      .replace(/```json/gi, '')
      .replace(/```/g, '')
      .trim();
    
    // Tentar parse direto
    return JSON.parse(clean);
  } catch (err) {
    // Tentar localizar bloco {...}
    const match = rawText.match(/\{[\s\S]*\}/);
    if (match) {
      try {
        return JSON.parse(match[0]);
      } catch (e) {}
    }
    return null;
  }
}

module.exports = {
  LOCAL_AI_BASE_URL,
  getAvailableLocalModel,
  generateLocalChatCompletion,
  extractJsonFromText
};
