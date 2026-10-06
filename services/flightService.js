/**
 * Serviço de Monitoramento de Voos e Rotas Aéreas (Hub de Irkutsk - IKT)
 * Acompanha conexões aéreas regionais e internacionais do Aeroporto Internacional de Irkutsk.
 */

const SCHEDULED_FLIGHTS = [
  {
    flightNumber: "SU 1441",
    airline: "Aeroflot",
    origin: "IKT (Irkutsk)",
    destination: "SVO (Moscou Sheremetyevo)",
    aircraft: "Boeing 737-800",
    scheduledDeparture: "06:10",
    status: "Decolou / Em Rota",
    healthStatus: "Triagem Sanitária em Moscou",
    riskLevel: "Monitorado"
  },
  {
    flightNumber: "S7 3018",
    airline: "S7 Airlines",
    origin: "IKT (Irkutsk)",
    destination: "DME (Moscou Domodedovo)",
    aircraft: "Airbus A320neo",
    scheduledDeparture: "08:35",
    status: "No Portão / Embarque",
    healthStatus: "Triagem Térmica Preventiva",
    riskLevel: "Normal"
  },
  {
    flightNumber: "HU 7968",
    airline: "Hainan Airlines",
    origin: "IKT (Irkutsk)",
    destination: "PEK (Pequim Capital, China)",
    aircraft: "Boeing 737-800",
    scheduledDeparture: "11:20",
    status: "Programado",
    healthStatus: "Vigilância Portuária Chinesa Reforçada",
    riskLevel: "Atenção de Fronteira"
  },
  {
    flightNumber: "MR 882",
    airline: "Hunnu Air",
    origin: "IKT (Irkutsk)",
    destination: "UBN (Ulan Bator, Mongólia)",
    aircraft: "ATR 72-500",
    scheduledDeparture: "13:45",
    status: "Programado",
    healthStatus: "Inspeção de Passageiros Terrestre/Aérea",
    riskLevel: "Monitorado"
  },
  {
    flightNumber: "S7 5228",
    airline: "S7 Airlines",
    origin: "IKT (Irkutsk)",
    destination: "OVB (Novosibirsk)",
    aircraft: "Embraer E170",
    scheduledDeparture: "15:10",
    status: "Programado",
    healthStatus: "Vigilância Epidemiológica Rospotrebnadzor",
    riskLevel: "Normal"
  },
  {
    flightNumber: "IO 105",
    airline: "IrAero",
    origin: "IKT (Irkutsk)",
    destination: "HRB (Harbin, China)",
    aircraft: "Superjet 100",
    scheduledDeparture: "18:00",
    status: "Programado",
    healthStatus: "Controle Aduaneiro de Saúde",
    riskLevel: "Monitorado"
  },
  {
    flightNumber: "SU 6344",
    airline: "Rossiya",
    origin: "IKT (Irkutsk)",
    destination: "LED (São Petersburgo)",
    aircraft: "Airbus A319",
    scheduledDeparture: "19:30",
    status: "Programado",
    healthStatus: "Triagem de Rotina",
    riskLevel: "Normal"
  },
  {
    flightNumber: "S7 6384",
    airline: "S7 Airlines",
    origin: "IKT (Irkutsk)",
    destination: "BKK (Bangkok, Tailândia)",
    aircraft: "Boeing 737-800",
    scheduledDeparture: "22:15",
    status: "Programado",
    healthStatus: "Monitoramento de Saúde Internacional",
    riskLevel: "Normal"
  }
];

async function fetchFlightSurveillance() {
  let liveOverheadCount = 0;
  let liveAircraftStates = [];

  try {
    // Consulta ao OpenSky Network para aeronaves no raio de Irkutsk
    const openskyRes = await fetch('https://opensky-network.org/api/states/all?lamin=51.5&lomin=103.5&lamax=53.0&lomax=105.5', {
      headers: { 'User-Agent': 'HealthSurveillance/1.0' },
      signal: AbortSignal.timeout(4000)
    });

    if (openskyRes.ok) {
      const data = await openskyRes.json();
      if (data && data.states) {
        liveOverheadCount = data.states.length;
        liveAircraftStates = data.states.map(s => ({
          icao24: s[0],
          callsign: s[1] ? s[1].trim() : 'N/A',
          country: s[2],
          altitude: s[7] ? `${Math.round(s[7])}m` : 'N/A',
          velocity: s[9] ? `${Math.round(s[9] * 3.6)} km/h` : 'N/A'
        }));
      }
    }
  } catch (e) {
    // Fallback gracioso caso a API do OpenSky atinja rate-limit temporário
    console.warn('[OpenSky Network Notice]', e.message);
  }

  return {
    success: true,
    airport: {
      name: "Aeroporto Internacional de Irkutsk",
      code: "IKT / UIII",
      location: "Irkutsk, Sibéria, Federação Russa",
      coordinates: [52.2680, 104.3890],
      status: "Operação Normal",
      sanitaryMeasure: "Triagem Preventiva de Temperatura Ativa nos Terminais",
      groundHolds: "Nenhum bloqueio ou cancelamento sanitário emitido"
    },
    liveAirspace: {
      activeTranspondersOverhead: liveOverheadCount,
      aircraft: liveAircraftStates
    },
    scheduledRoutes: SCHEDULED_FLIGHTS,
    lastUpdated: new Date().toISOString()
  };
}

module.exports = {
  fetchFlightSurveillance
};
