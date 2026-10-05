# 🏥 Monitor Epidemiológico & Alertas Sanitários Globais

> **Foco Primário:** Acompanhamento em tempo real do incidente biológico no **Instituto de Pesquisa Anti-Peste de Irkutsk** (Sibéria, Rússia - Outubro 2026), status de contenção hospitalar, declarações de agências de saúde e vigilância de disseminação internacional.

---

## 🚀 Como Executar

O servidor já está ativo no seu computador em:
👉 **[http://localhost:3000](http://localhost:3000)**

Para iniciar manualmente no futuro:
* Dê um duplo clique no arquivo [`iniciar_dashboard.bat`](file:///c:/Users/Admin/Documents/Russia%20Plague/iniciar_dashboard.bat)
* Ou no terminal:
  ```bash
  npm start
  ```

---

## 📡 Recursos do Dashboard

1. **Agregação de Notícias em Tempo Real:**
   * Conectado a canais ao vivo de notícias (Google News Global & Brasil, Reuters, Washington Post, OMS, Medical Xpress).
   * Mais de 200 notícias e comunicados monitorados e categorizados por severidade (🔴 Crítico, 🟡 Moderado, 🟢 Informativo).
   * Ticker contínuo no topo da tela com notícias de alta prioridade.

2. **Dossiê Completo do Incidente (Irkutsk - Outubro 2026):**
   * **Local:** Instituto de Pesquisa Anti-Peste de Irkutsk da Sibéria e Extremo Oriente.
   * **Vítima:** Darya Shipilova (28 anos), falecida no início de outubro de 2026.
   * **Quarentena:** ~200 pessoas (equipe médica, contatos e familiares) sob quarentena e isolamento em Shelekhov e Irkutsk.
   * **Versão Oficial:** Rospotrebnadzor classifica como "pneumonia de etiologia desconhecida" e nega quebra de protocolo.
   * **Investigação:** Inquérito criminal aberto pelo Comitê de Investigação da Rússia por suposta violação sanitária.

3. **Vigilância de Disseminação Internacional:**
   * Indicador de risco global em tempo real.
   * Status de fronteiras terrestres (Mongólia, China) e acompanhamento por organismos internacionais (OMS em Genebra, Departamento de Estado dos EUA).

4. **Mapa Tático Interativo (Leaflet):**
   * Visualização com tema escuro mostrando pontos críticos, raios de quarentena na Sibéria e postos de vigilância de fronteira.

5. **Alertas Sonoros & Notificações:**
   * Sintetizador de áudio integrado (Web Audio API) que emite alerta acústico quando novas ocorrências críticas são recebidas.
   * Suporte a Notificações na área de trabalho via API do navegador.
   * Atualização contínua via **Server-Sent Events (SSE)** e contagem regressiva de sincronização automática a cada 60 segundos.
