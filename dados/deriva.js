'use strict';
// Valores em MN, transcritos das colunas entre parênteses nas fotos fornecidas.
// Não há extrapolação nem interpolação automática das tabelas.
window.SAR_DRIFT_TABLES = {
  "version": 1,
  "unit": "MN",
  "platforms": {
    "merchant": {
      "label": "Navio mercante — tabela da foto",
      "visibility": [
        "3 MN (6 km)",
        "5 MN (9 km)",
        "10 MN (19 km)",
        "15 MN (28 km)",
        "20 MN (37 km)"
      ],
      "rows": [
        {
          "id": "person",
          "label": "Pessoa na água",
          "weatherGroup": "person",
          "values": [
            0.4,
            0.5,
            0.6,
            0.7,
            0.7
          ]
        },
        {
          "id": "raft4",
          "label": "Balsa para 4 pessoas",
          "weatherGroup": "raft",
          "values": [
            2.3,
            3.2,
            4.2,
            4.9,
            5.5
          ]
        },
        {
          "id": "raft6",
          "label": "Balsa para 6 pessoas",
          "weatherGroup": "raft",
          "values": [
            2.5,
            3.6,
            5.0,
            6.2,
            6.9
          ]
        },
        {
          "id": "raft15",
          "label": "Balsa para 15 pessoas",
          "weatherGroup": "raft",
          "values": [
            2.6,
            4.0,
            5.1,
            6.4,
            7.3
          ]
        },
        {
          "id": "raft25",
          "label": "Balsa para 25 pessoas",
          "weatherGroup": "raft",
          "values": [
            2.7,
            4.2,
            5.2,
            6.5,
            7.5
          ]
        },
        {
          "id": "boat5",
          "label": "Embarcação miúda < 5 m",
          "weatherGroup": null,
          "values": [
            1.1,
            1.4,
            1.9,
            2.1,
            2.3
          ]
        },
        {
          "id": "boat7",
          "label": "Embarcação miúda < 7 m",
          "weatherGroup": null,
          "values": [
            2.0,
            2.9,
            4.3,
            5.2,
            5.8
          ]
        },
        {
          "id": "boat12",
          "label": "Embarcação de 12 m",
          "weatherGroup": null,
          "values": [
            2.8,
            4.5,
            7.6,
            9.4,
            11.6
          ]
        },
        {
          "id": "boat24",
          "label": "Embarcação de 24 m",
          "weatherGroup": null,
          "values": [
            3.2,
            5.6,
            10.7,
            14.7,
            18.1
          ]
        }
      ]
    },
    "helicopter": {
      "label": "Helicóptero — tabela da foto",
      "visibility": [
        "1 MN (1,9 km)",
        "5 MN (9,3 km)",
        "> 20 MN (> 37 km)"
      ],
      "rows": [
        {
          "id": "person",
          "label": "Pessoa na água",
          "weatherGroup": "person",
          "values": [
            0,
            0.1,
            0.1
          ]
        },
        {
          "id": "raft4",
          "label": "Balsa para 4 pessoas",
          "weatherGroup": "raft",
          "values": [
            0.5,
            1.7,
            2.9
          ]
        },
        {
          "id": "raft8",
          "label": "Balsa para 8 pessoas",
          "weatherGroup": "raft",
          "values": [
            0.5,
            2.1,
            3.8
          ]
        },
        {
          "id": "raft15",
          "label": "Balsa para 15 pessoas",
          "weatherGroup": "raft",
          "values": [
            0.6,
            2.4,
            4.5
          ]
        },
        {
          "id": "raft25",
          "label": "Balsa para 25 pessoas",
          "weatherGroup": "raft",
          "values": [
            0.6,
            2.8,
            5.7
          ]
        },
        {
          "id": "boat5",
          "label": "Embarcação < 5 m",
          "weatherGroup": null,
          "values": [
            0.5,
            1.6,
            2.5
          ]
        },
        {
          "id": "boat6",
          "label": "Embarcação de 6 m",
          "weatherGroup": null,
          "values": [
            0.7,
            3.0,
            5.9
          ]
        },
        {
          "id": "boat10",
          "label": "Embarcação de 10 m",
          "weatherGroup": null,
          "values": [
            0.7,
            3.9,
            9.1
          ]
        },
        {
          "id": "boat24",
          "label": "Embarcação de 24 m",
          "weatherGroup": null,
          "values": [
            0.8,
            5.7,
            18.5
          ]
        }
      ]
    },
    "fixed": {
      "label": "Aeronave de asa fixa — tabela da foto",
      "visibility": [
        "1 MN (1,9 km)",
        "5 MN (9,3 km)",
        "> 20 MN (> 37 km)"
      ],
      "rows": [
        {
          "id": "person",
          "label": "Pessoa na água",
          "weatherGroup": "person",
          "values": [
            0,
            0.1,
            0.1
          ]
        },
        {
          "id": "raft4",
          "label": "Balsa para 4 pessoas",
          "weatherGroup": "raft",
          "values": [
            0.3,
            1.3,
            2.3
          ]
        },
        {
          "id": "raft8",
          "label": "Balsa para 8 pessoas",
          "weatherGroup": "raft",
          "values": [
            0.4,
            1.7,
            3.0
          ]
        },
        {
          "id": "raft15",
          "label": "Balsa para 15 pessoas",
          "weatherGroup": "raft",
          "values": [
            0.4,
            2.0,
            3.7
          ]
        },
        {
          "id": "raft25",
          "label": "Balsa para 25 pessoas",
          "weatherGroup": "raft",
          "values": [
            0.4,
            2.3,
            4.7
          ]
        },
        {
          "id": "boat5",
          "label": "Embarcação < 5 m",
          "weatherGroup": null,
          "values": [
            0.4,
            1.3,
            2.0
          ]
        },
        {
          "id": "boat6",
          "label": "Embarcação de 6 m",
          "weatherGroup": null,
          "values": [
            0.5,
            2.5,
            5.0
          ]
        },
        {
          "id": "boat10",
          "label": "Embarcação de 10 m",
          "weatherGroup": null,
          "values": [
            0.5,
            3.4,
            7.8
          ]
        },
        {
          "id": "boat24",
          "label": "Embarcação de 24 m",
          "weatherGroup": null,
          "values": [
            0.6,
            5.1,
            16.7
          ]
        }
      ]
    }
  },
  "weatherBands": [
    {
      "label": "Faixa 1 · vento 0–15 nós ou mar 0–1 m",
      "person": 1,
      "raft": 1
    },
    {
      "label": "Faixa 2 · vento 15–25 nós ou mar 1–1,5 m",
      "person": 0.5,
      "raft": 0.9
    },
    {
      "label": "Faixa 3 · vento > 25 nós ou mar > 1,5 m",
      "person": 0.25,
      "raft": 0.6
    }
  ],
  "leewayConditions": [
    {
      "id": "without",
      "label": "Balsa sem âncora flutuante (without drogue)"
    },
    {
      "id": "ballast",
      "label": "Balsa com sistema de lastro melhorado (improved ballast)"
    },
    {
      "id": "drogue",
      "label": "Balsa com âncora flutuante (with drogue)"
    },
    {
      "id": "uncovered",
      "label": "Balsa com âncora flutuante, cobertura não armada"
    },
    {
      "id": "manual",
      "label": "Outro objeto / valor obtido de outra fonte"
    }
  ],
  "sources": [
    {
      "label": "Fotos fornecidas: fórmulas, larguras de varredura, fatores do tempo e gráfico de leeway.",
      "url": null
    },
    {
      "label": "US Coast Guard — CGADD 16130.2H: fator de cobertura e espaçamento.",
      "url": "https://www.dco.uscg.mil/Portals/9/CG-5R/MassRescueOps/CGADD%20COMDINST%2016130_2H.pdf"
    },
    {
      "label": "AMSA — NATSAR 2026, apêndices: referências complementares sobre leeway e vetores.",
      "url": "https://www.amsa.gov.au/sites/default/files/2026-03/NATSAR-Manual-February-2026-Appendices.pdf"
    }
  ]
};
