'use strict';

// Perguntas, referências e configurações deste curso.
// Preserve os IDs existentes ao corrigir questões, para manter a compatibilidade do progresso salvo.
window.SAR_COURSES = window.SAR_COURSES || {};
window.SAR_COURSES.clsar = {
  "id": "clsar",
  "label": "CLSAR",
  "description": "Condutor de Lancha SAR",
  "key": "missao-lsar-clsar-v1",
  "sources": [
    {
      "id": 0,
      "title": "Fundamentos e referências SAR",
      "file": "1.0 - VISÃO GERAL DO SERVIÇO SAR 2026.pdf"
    },
    {
      "id": 1,
      "title": "Organização, meios e prontidão",
      "file": "1.1- VISÃO GERL DO SERVIÇO SAR- Organização  SAR 2026.pdf"
    },
    {
      "id": 2,
      "title": "Mensagens SAR",
      "file": "1.2 - VISÃO GERAL DO SERVIÇO SAR-MSG SAR.pdf"
    },
    {
      "id": 3,
      "title": "Missão SAR e sistemas de alerta",
      "file": "2.0-MISSÃO SAR (2026).pdf"
    },
    {
      "id": 4,
      "title": "Balizamento",
      "file": "Aula 1.1 - Navegação - Balizamento (C-Exp-CLSAR).pdf"
    },
    {
      "id": 5,
      "title": "RIPEAM",
      "file": "Aula 1.2 - Navegação - RIPEAM (C-Exp-CLSAR).pdf"
    },
    {
      "id": 6,
      "title": "Luzes de Navegação",
      "file": "Aula 1.3 - Navegação - Luzes de Navegação (C-Exp-CLSAR).pdf"
    },
    {
      "id": 7,
      "title": "Publicações de auxílio à navegação",
      "file": "Aula 1.4 - Navegação - Publicações de auxílio à navegação (C-Exp-CLSAR).pdf"
    },
    {
      "id": 8,
      "title": "Planejamento e traçado da derrota",
      "file": "Aula 1.5 - Navegação - Planejamento e traçado da derrota (C-Exp-CLSAR).pdf"
    },
    {
      "id": 9,
      "title": "Tipos e métodos de navegação",
      "file": "Aula 1.6 - Navegação - Tipos e Métodos de Navegação (C-Exp-CLSAR).pdf"
    },
    {
      "id": 10,
      "title": "Entrada e saída de porto",
      "file": "Aula 1.7 - Navegação - Entrada e Saída de Porto (C-Exp-CLSAR).pdf"
    },
    {
      "id": 11,
      "title": "Navegação em baixa visibilidade",
      "file": "Aula 1.8 - Navegação - Navegação em Baixa Visibilidade (C-Exp-CLSAR).pdf"
    },
    {
      "id": 12,
      "title": "Navegação com mau tempo",
      "file": "Aula 1.9 - Navegação - Mau tempo (C-Exp-CLSAR).pdf"
    },
    {
      "id": 13,
      "title": "Noções de meteorologia",
      "file": "Aula 1.10 - Navegação - Noções de Meteorologia (C-Exp-CLSAR).pdf"
    },
    {
      "id": 14,
      "title": "Avarias operacionais",
      "file": "Aula 1.11 - Navegação - Avarias Operacionais (C-Exp-CLSAR).pdf"
    },
    {
      "id": 15,
      "title": "Deriva, áreas e padrões de busca",
      "file": "Aula Planejamento -DERIVA-CCA-2023.pdf"
    }
  ],
  "bank": [
    {
      "id": "c001",
      "topic": 0,
      "page": "5",
      "question": "Segundo a visão geral da aula, qual princípio fundamenta a prestação de socorro no mar?",
      "options": [
        "Razões humanitárias, prestando auxílio sempre que for possível fazê-lo com segurança.",
        "Interesse comercial, mesmo que a manobra seja insegura.",
        "Prioridade exclusiva a embarcações da mesma nacionalidade.",
        "Necessidade de remuneração antes de qualquer auxílio."
      ],
      "answer": 0,
      "explanation": "O slide associa o dever de socorro às tradições do mar, às convenções internacionais e às razões humanitárias, observada a segurança."
    },
    {
      "id": "c002",
      "topic": 0,
      "page": "6",
      "question": "Qual convenção é associada à aviação civil internacional no material?",
      "options": [
        "Convenção de Chicago, de 1944.",
        "Convenção de Hamburgo, de 1979.",
        "Convenção da Jamaica, de 1982.",
        "SOLAS, de 1974/1988."
      ],
      "answer": 0,
      "explanation": "Chicago é a convenção de aviação civil internacional relacionada no slide."
    },
    {
      "id": "c003",
      "topic": 0,
      "page": "6",
      "question": "Qual convenção trata da salvaguarda da vida humana no mar?",
      "options": [
        "SOLAS.",
        "Convenção de Chicago.",
        "Convenção da Jamaica como título da SOLAS.",
        "Apenas a Carta de Instrução do ComOpNav."
      ],
      "answer": 0,
      "explanation": "O material identifica a SOLAS como Convenção Internacional para a Salvaguarda da Vida Humana no Mar."
    },
    {
      "id": "c004",
      "topic": 0,
      "page": "6",
      "question": "A Convenção SAR de 1979 também recebe qual nome?",
      "options": [
        "Convenção de Hamburgo.",
        "Convenção de Chicago.",
        "Convenção da Jamaica.",
        "Convenção de Tanguá."
      ],
      "answer": 0,
      "explanation": "O slide associa a Convenção Internacional de Busca e Salvamento Marítimo a Hamburgo, em 1979."
    },
    {
      "id": "c005",
      "topic": 0,
      "page": "6",
      "question": "Qual associação da CNUDM está correta, conforme a aula?",
      "options": [
        "Convenção da Jamaica, de 1982.",
        "Convenção de Hamburgo, de 1979.",
        "Convenção de Chicago, de 1944.",
        "SOLAS, de 1988, como único nome."
      ],
      "answer": 0,
      "explanation": "A CNUDM é apresentada como Convenção das Nações Unidas sobre o Direito do Mar, ou Convenção da Jamaica de 1982."
    },
    {
      "id": "c006",
      "topic": 0,
      "page": "7",
      "question": "Qual é o objetivo central de uma operação de busca?",
      "options": [
        "Localizar pessoas em perigo.",
        "Negociar a remuneração do salvamento de bens.",
        "Emitir exclusivamente boletins meteorológicos.",
        "Transportar suprimentos sem tentar localizar pessoas."
      ],
      "answer": 0,
      "explanation": "A definição de busca envolve o uso dos recursos disponíveis para localizar pessoas em perigo, normalmente sob coordenação de RCC ou RSC."
    },
    {
      "id": "c007",
      "topic": 0,
      "page": "7",
      "question": "Qual conjunto descreve o salvamento, segundo a definição apresentada?",
      "options": [
        "Resgatar, prestar atendimento médico inicial e atender necessidades, conduzindo as pessoas a local seguro.",
        "Somente localizar uma embarcação e encerrar a operação.",
        "Apenas remover carga comercial de um navio.",
        "Emitir alertas sem prestar assistência aos sobreviventes."
      ],
      "answer": 0,
      "explanation": "A definição abrange resgate, cuidados iniciais e remoção para um local seguro."
    },
    {
      "id": "c008",
      "topic": 0,
      "page": "7",
      "question": "O que significa SRR?",
      "options": [
        "Região de Busca e Salvamento, de dimensões definidas e com serviços SAR.",
        "Uma embarcação de sobrevivência.",
        "Um rádio de chamada seletiva.",
        "Um relatório de encerramento de incidente."
      ],
      "answer": 0,
      "explanation": "SRR corresponde a Search and Rescue Region, área em que são proporcionados serviços de busca e salvamento."
    },
    {
      "id": "c009",
      "topic": 0,
      "page": "8",
      "question": "Como a SRS se relaciona com a SRR?",
      "options": [
        "É uma área específica dentro de uma SRR associada a um RCC.",
        "É sempre maior do que a SRR.",
        "É uma unidade aérea e não uma área.",
        "É exclusivamente a área de atuação do radar de um navio."
      ],
      "answer": 0,
      "explanation": "SRS significa Search and Rescue Sub-region e é uma sub-região de uma SRR."
    },
    {
      "id": "c010",
      "topic": 0,
      "page": "8",
      "question": "Qual responsabilidade é atribuída ao RCC/MRCC?",
      "options": [
        "Promover a organização e coordenar os serviços SAR dentro de uma SRR.",
        "Executar apenas a manutenção dos rádios dos navios.",
        "Substituir todas as SRU por estações meteorológicas.",
        "Cuidar exclusivamente da remuneração de bens salvos."
      ],
      "answer": 0,
      "explanation": "O RCC é o centro responsável pela organização e coordenação dos serviços na região correspondente."
    },
    {
      "id": "c011",
      "topic": 0,
      "page": "8",
      "question": "Qual é a relação entre RSC/MRSC e RCC/MRCC?",
      "options": [
        "O subcentro é subordinado ao centro e complementa os serviços SAR.",
        "O centro é subordinado a qualquer unidade de busca.",
        "São nomes de dois tipos de baliza de emergência.",
        "O subcentro existe apenas para emitir previsões do tempo."
      ],
      "answer": 0,
      "explanation": "A aula define o RSC como unidade subordinada ao RCC, estabelecida para complementar os serviços."
    },
    {
      "id": "c012",
      "topic": 0,
      "page": "9",
      "question": "O que caracteriza uma Unidade de Busca e Salvamento (SRU)?",
      "options": [
        "Pessoal treinado e equipamentos adequados para pronta realização das operações SAR.",
        "Qualquer passageiro que observe o mar, sem treinamento.",
        "Um cadastro de embarcações, sem meios de atuação.",
        "Somente um prédio administrativo de supervisão."
      ],
      "answer": 0,
      "explanation": "A definição de SRU combina pessoal treinado e equipamentos adequados."
    },
    {
      "id": "c013",
      "topic": 0,
      "page": "9",
      "question": "Qual definição corresponde a facilidade de busca e salvamento?",
      "options": [
        "Qualquer meio móvel utilizado nas operações SAR, inclusive SRU designadas.",
        "Somente centros fixos de coordenação.",
        "Somente aeronaves militares.",
        "Apenas o formulário de abertura do incidente."
      ],
      "answer": 0,
      "explanation": "O conceito de facilidade SAR abrange meios móveis e inclui as SRU designadas."
    },
    {
      "id": "c014",
      "topic": 0,
      "page": "9",
      "question": "Qual é a função de um posto de alerta?",
      "options": [
        "Intermediar a informação de emergência entre o informante e um RCC ou RSC.",
        "Assumir automaticamente a função de OSC em toda missão.",
        "Cobrar pelo resgate da pessoa em perigo.",
        "Substituir o RCC em toda a SRR."
      ],
      "answer": 0,
      "explanation": "O posto de alerta é uma instalação intermediária entre quem informa a emergência e o centro ou subcentro."
    },
    {
      "id": "c015",
      "topic": 0,
      "page": "10",
      "question": "Qual função corresponde ao Coordenador SAR (SC)?",
      "options": [
        "Garantir a devida coordenação do planejamento dos serviços SAR.",
        "Coordenar exclusivamente duas aeronaves durante um incidente.",
        "Ser o único operador de cada rádio portátil.",
        "Executar somente a faina de recolhimento de náufragos."
      ],
      "answer": 0,
      "explanation": "A definição de SC trata da coordenação do planejamento dos serviços."
    },
    {
      "id": "c016",
      "topic": 0,
      "page": "10",
      "question": "Quem é o Coordenador de Missão SAR (SMC)?",
      "options": [
        "Oficial temporariamente designado para coordenar uma situação real ou aparente de perigo.",
        "Somente o comandante permanente de qualquer navio mercante.",
        "Um técnico responsável apenas pelas balizas.",
        "Qualquer passageiro que faça a primeira ligação."
      ],
      "answer": 0,
      "explanation": "O SMC é designado temporariamente para coordenar o incidente real ou aparente."
    },
    {
      "id": "c017",
      "topic": 0,
      "page": "10",
      "question": "Qual função corresponde ao Coordenador na Cena de Ação (OSC)?",
      "options": [
        "Coordenar as operações na área do incidente SAR.",
        "Elaborar exclusivamente normas nacionais de navegação.",
        "Ser responsável apenas pela cobrança dos serviços.",
        "Operar somente satélites de busca."
      ],
      "answer": 0,
      "explanation": "O OSC é temporariamente designado para coordenar as operações na área do incidente."
    },
    {
      "id": "c018",
      "topic": 0,
      "page": "11",
      "question": "Em que situação a função de ACO é descrita na aula?",
      "options": [
        "Coordenação de duas ou mais aeronaves simultâneas em um incidente SAR.",
        "Exclusivamente no reboque de uma embarcação por outra.",
        "Apenas na supervisão financeira de um RCC.",
        "Somente quando nenhum recurso aéreo é utilizado."
      ],
      "answer": 0,
      "explanation": "O ACO coordena o emprego simultâneo de duas ou mais aeronaves e assessora o SC/SMC e/ou OSC."
    },
    {
      "id": "c019",
      "topic": 0,
      "page": "10–11",
      "question": "Uma questão trata de coordenação na área do incidente; outra, do emprego simultâneo de aeronaves. Quais funções correspondem, respectivamente?",
      "options": [
        "OSC e ACO.",
        "ACO e posto de alerta.",
        "SC e EPIRB.",
        "RSC e LUT."
      ],
      "answer": 0,
      "explanation": "OSC atua na cena de ação; ACO é o coordenador de aeronaves."
    },
    {
      "id": "c020",
      "topic": 0,
      "page": "13",
      "question": "Qual marco de criação do serviço SAR marítimo brasileiro é apresentado?",
      "options": [
        "Aviso Ministerial N-0201 de 20/02/1970, em vigor em 01/03/1970.",
        "Convenção de Chicago de 1944, com início em 1979.",
        "Lei de 1984, em vigor apenas a partir de 2009.",
        "Criação junto à IMO em 2026."
      ],
      "answer": 0,
      "explanation": "Essas são as datas de criação e de entrada em vigor apresentadas na aula."
    },
    {
      "id": "c021",
      "topic": 0,
      "page": "14–16",
      "question": "Qual associação entre leis e temas corresponde ao material?",
      "options": [
        "Lei 7.203/84: assistência e salvamento de embarcação; Lei 7.273/84: busca e salvamento de vida humana.",
        "Lei 7.203/84: somente aviação; Lei 7.273/84: somente patrimônio.",
        "As duas leis tratam apenas de remuneração do resgate de pessoas.",
        "Lei 7.273/84: somente manutenção de motores."
      ],
      "answer": 0,
      "explanation": "A aula distingue a assistência a embarcações e bens da busca e salvamento de vida humana."
    },
    {
      "id": "c022",
      "topic": 0,
      "page": "14–17",
      "question": "Qual distinção entre assistência a embarcação e socorro à vida humana é apresentada?",
      "options": [
        "Assistência à embarcação é indenizável; o socorro à vida humana é gratuito.",
        "Ambos dependem de pagamento prévio pelo náufrago.",
        "Socorro à vida humana é indenizável e assistência a bens é sempre gratuita.",
        "Ambos são exclusivamente serviços comerciais."
      ],
      "answer": 0,
      "explanation": "Essa distinção está expressa nos slides; a questão reproduz a classificação didática do material."
    },
    {
      "id": "c023",
      "topic": 0,
      "page": "16",
      "question": "Segundo o trecho da Lei 7.273/84 apresentado, o que é devido pela pessoa salva?",
      "options": [
        "Nada, independentemente de nacionalidade, posição, importância ou circunstâncias.",
        "Taxa definida pelo número de meios empregados.",
        "Pagamento obrigatório do combustível do navio.",
        "Remuneração proporcional ao tempo de busca."
      ],
      "answer": 0,
      "explanation": "O artigo reproduzido na aula estabelece que nada é devido pela pessoa salva."
    },
    {
      "id": "c024",
      "topic": 0,
      "page": "17",
      "question": "Como o socorro marítimo é caracterizado na aula?",
      "options": [
        "Serviço gratuito, de urgência, com emprego dos recursos disponíveis, inclusive extra-Marinha.",
        "Serviço rotineiro prestado apenas após acordo comercial.",
        "Atividade exclusiva de navios militares, sem recursos externos.",
        "Serviço restrito a embarcações que já estejam atracadas."
      ],
      "answer": 0,
      "explanation": "A definição enfatiza urgência, gratuidade e uso dos recursos disponíveis para rápido resgate."
    },
    {
      "id": "c025",
      "topic": 0,
      "page": "18–19",
      "question": "Qual é a finalidade geral do IAMSAR apresentada?",
      "options": [
        "Ajudar os Estados a desenvolver serviços SAR e cumprir compromissos internacionais de busca e salvamento.",
        "Substituir a necessidade de qualquer recurso de resgate.",
        "Tratar exclusivamente de salvamento de submarinos.",
        "Padronizar apenas a cobrança por bens salvos."
      ],
      "answer": 0,
      "explanation": "O manual apoia as necessidades SAR dos Estados e as obrigações assumidas em convenções."
    },
    {
      "id": "c026",
      "topic": 0,
      "page": "19",
      "question": "Quais organizações publicam conjuntamente o IAMSAR e em quantos volumes?",
      "options": [
        "ICAO e IMO, em três volumes.",
        "Somente a OTAN, em dois volumes.",
        "Somente a Marinha do Brasil, em um volume.",
        "COSPAS e SARSAT, em quatro volumes."
      ],
      "answer": 0,
      "explanation": "A aula apresenta o IAMSAR como publicação conjunta ICAO/IMO em três volumes."
    },
    {
      "id": "c027",
      "topic": 0,
      "page": "21",
      "question": "Qual é o foco do Volume I do IAMSAR?",
      "options": [
        "Organização e gerenciamento dos sistemas SAR, incluindo cooperação entre Estados.",
        "Exclusivamente a operação da plataforma de popa de uma lancha.",
        "Somente o uso de coletes e pirotécnicos.",
        "Apenas a redação de mensagens de rádio de rotina."
      ],
      "answer": 0,
      "explanation": "O Volume I trata do sistema global e do estabelecimento e aperfeiçoamento dos sistemas nacionais e regionais."
    },
    {
      "id": "c028",
      "topic": 0,
      "page": "22",
      "question": "Qual volume orienta o planejamento e a coordenação de operações e exercícios SAR?",
      "options": [
        "Volume II.",
        "Volume I exclusivamente.",
        "Volume III exclusivamente.",
        "Nenhum dos volumes."
      ],
      "answer": 0,
      "explanation": "O Volume II, Coordenação e Missão, fornece teorias, cálculos, formulários e procedimentos para planejamento e coordenação."
    },
    {
      "id": "c029",
      "topic": 0,
      "page": "23",
      "question": "Qual volume é destinado a bordo de SRU, aeronaves e embarcações e auxilia também na função de OSC?",
      "options": [
        "Volume III — Meios Móveis.",
        "Volume I — Organização e Gerenciamento.",
        "Volume II como único volume permitido a bordo.",
        "ATP-57.2, apresentado como quarto volume do IAMSAR."
      ],
      "answer": 0,
      "explanation": "O Volume III trata da execução da busca e do salvamento, da função de OSC e das próprias emergências dos meios."
    },
    {
      "id": "c030",
      "topic": 0,
      "page": "24–27",
      "question": "Qual associação entre referência e tema está correta no material?",
      "options": [
        "CI 001/2019: orientar e coordenar o SAR da MB; CIRCEA 64-10: acordo operacional SAR MB/FAB.",
        "ATP-57: manual exclusivo de motores da LSAR; CIRCEA 64-10: tabela de consumo.",
        "CI 001/2019: projeto do radar; IAMSAR: somente manutenção naval.",
        "NTTP 3-50.1: norma de atracação em portos brasileiros, exclusivamente."
      ],
      "answer": 0,
      "explanation": "A CI é apresentada como instrumento de orientação e coordenação; o acordo MB/FAB visa agilizar as providências de salvaguarda."
    },
    {
      "id": "c031",
      "topic": 1,
      "page": "5",
      "question": "Na organização mundial simplificada apresentada, quem normalmente controla os recursos SAR?",
      "options": [
        "Os centros de coordenação RCC/MRCC.",
        "Somente as empresas seguradoras.",
        "Qualquer embarcação que ouvir uma chamada.",
        "Exclusivamente estações de meteorologia."
      ],
      "answer": 0,
      "explanation": "Os recursos com pessoal adestrado e equipamentos especializados são normalmente controlados pelos centros de coordenação."
    },
    {
      "id": "c032",
      "topic": 1,
      "page": "7",
      "question": "Qual sequência corresponde à estrutura mundial simplificada apresentada?",
      "options": [
        "Autoridade, chefe do serviço SAR, RCC, RSC e recurso SAR.",
        "Recurso SAR, satélite, seguradora, porto e alfândega.",
        "Capitão de porto, meteorologista e fabricante do navio, apenas.",
        "ACO, baliza e gerador, como níveis administrativos."
      ],
      "answer": 0,
      "explanation": "O organograma apresenta esses níveis, com RCC e RSC ligados ao emprego dos recursos SAR."
    },
    {
      "id": "c033",
      "topic": 1,
      "page": "8",
      "question": "Em que ano o Brasil oficializou junto à IMO a responsabilidade citada pela coordenação SAR no Atlântico?",
      "options": [
        "1978.",
        "1944.",
        "2009.",
        "2026."
      ],
      "answer": 0,
      "explanation": "O slide apresenta 1978 como o ano da oficialização junto à IMO."
    },
    {
      "id": "c034",
      "topic": 1,
      "page": "13",
      "question": "Qual dimensão aproximada e limite a leste da RSAR-BR são apresentados?",
      "options": [
        "15 milhões de km² e meridiano de 10°W.",
        "22 milhões de km² e meridiano de 70°S.",
        "1,5 milhão de km² e meridiano de 100°W.",
        "15 mil km² e limite apenas no mar territorial."
      ],
      "answer": 0,
      "explanation": "A aula descreve área de cerca de 15 milhões de km², da costa brasileira até 10°W a leste."
    },
    {
      "id": "c035",
      "topic": 1,
      "page": "10",
      "question": "Quem é a autoridade SAR marítima no organograma brasileiro apresentado?",
      "options": [
        "Comandante da Marinha.",
        "Comandante de cada embarcação de recreio.",
        "Operador da estação costeira.",
        "Coordenador de aeronaves em qualquer incidente."
      ],
      "answer": 0,
      "explanation": "O organograma identifica o Comandante da Marinha como autoridade SAR marítima."
    },
    {
      "id": "c036",
      "topic": 1,
      "page": "10",
      "question": "Qual órgão aparece como órgão central da estrutura SAR marítima?",
      "options": [
        "ComOpNav.",
        "Uma agência marítima comercial.",
        "Cada SRU isoladamente.",
        "CIAAN."
      ],
      "answer": 0,
      "explanation": "O ComOpNav está identificado como órgão central."
    },
    {
      "id": "c037",
      "topic": 1,
      "page": "10",
      "question": "Qual associação institucional está correta no organograma da aula?",
      "options": [
        "COMPAAz / SALVAMAR BRASIL: órgão de supervisão.",
        "SRU: órgão central normativo.",
        "Capitanias: autoridade SAR marítima nacional.",
        "GTAR: único centro de coordenação do país."
      ],
      "answer": 0,
      "explanation": "O slide associa o COMPAAz e o SALVAMAR BRASIL/MRCC BRAZIL ao órgão de supervisão."
    },
    {
      "id": "c038",
      "topic": 1,
      "page": "10",
      "question": "Na estrutura apresentada, qual é o papel dos Distritos Navais/SALVAMAR regionais?",
      "options": [
        "Órgãos de coordenação.",
        "Somente fornecedores comerciais de equipamentos.",
        "Elementos subordinados a cada náufrago.",
        "Postos exclusivamente de cobrança."
      ],
      "answer": 0,
      "explanation": "Os SALVAMAR regionais/MRCC/RCC aparecem como órgãos de coordenação."
    },
    {
      "id": "c039",
      "topic": 1,
      "page": "10",
      "question": "Qual função é associada a Capitanias, Delegacias e Agências no organograma?",
      "options": [
        "Subcentros de coordenação.",
        "Segmento espacial do COSPAS-SARSAT.",
        "Organizações internacionais de aviação.",
        "Estações terrenas de navios."
      ],
      "answer": 0,
      "explanation": "Capitanias, Delegacias e Agências aparecem como subcentros de coordenação."
    },
    {
      "id": "c040",
      "topic": 1,
      "page": "10",
      "question": "Como as unidades/equipes de busca são classificadas na estrutura?",
      "options": [
        "Elementos de execução.",
        "Autoridade SAR marítima nacional.",
        "Órgãos de revisão de convenções internacionais.",
        "Centros exclusivamente de supervisão administrativa."
      ],
      "answer": 0,
      "explanation": "O organograma distingue os elementos de execução dos órgãos de coordenação e supervisão."
    },
    {
      "id": "c041",
      "topic": 1,
      "page": "14",
      "question": "Em quantas regiões de coordenação marítima a SRR oceânica brasileira foi dividida no material?",
      "options": [
        "Seis.",
        "Três.",
        "Cinco.",
        "Nove."
      ],
      "answer": 0,
      "explanation": "O slide relaciona seis SALVAMAR regionais na parte oceânica, distintos dos três centros fluviais citados depois."
    },
    {
      "id": "c042",
      "topic": 1,
      "page": "14",
      "question": "Qual associação do 1º DN está correta?",
      "options": [
        "SALVAMAR SUESTE, Rio de Janeiro/RJ.",
        "SALVAMAR LESTE, Salvador/BA.",
        "SALVAMAR NORTE, Belém/PA.",
        "SALVAMAR SUL-SUESTE, São Paulo/SP."
      ],
      "answer": 0,
      "explanation": "O 1º DN corresponde ao SALVAMAR SUESTE, sediado no Rio de Janeiro."
    },
    {
      "id": "c043",
      "topic": 1,
      "page": "14",
      "question": "Qual associação do 2º DN está correta?",
      "options": [
        "SALVAMAR LESTE, Salvador/BA.",
        "SALVAMAR NORDESTE, Natal/RN.",
        "SALVAMAR SUL, Rio Grande/RS.",
        "SALVAMAR OESTE, Ladário/MS."
      ],
      "answer": 0,
      "explanation": "O 2º DN corresponde ao SALVAMAR LESTE em Salvador."
    },
    {
      "id": "c044",
      "topic": 1,
      "page": "14",
      "question": "Qual associação do 3º DN está correta?",
      "options": [
        "SALVAMAR NORDESTE, Natal/RN.",
        "SALVAMAR SUESTE, Rio de Janeiro/RJ.",
        "SALVAMAR NORTE, Belém/PA.",
        "SALVAMAR CENTRO-OESTE, Brasília/DF."
      ],
      "answer": 0,
      "explanation": "O SALVAMAR NORDESTE está relacionado ao 3º DN, em Natal."
    },
    {
      "id": "c045",
      "topic": 1,
      "page": "14",
      "question": "Qual associação do 4º DN está correta?",
      "options": [
        "SALVAMAR NORTE, Belém/PA.",
        "SALVAMAR NOROESTE, Manaus/AM.",
        "SALVAMAR SUL, Rio Grande/RS.",
        "SALVAMAR LESTE, Salvador/BA."
      ],
      "answer": 0,
      "explanation": "O 4º DN corresponde ao SALVAMAR NORTE em Belém."
    },
    {
      "id": "c046",
      "topic": 1,
      "page": "14",
      "question": "Qual associação do 5º DN está correta?",
      "options": [
        "SALVAMAR SUL, Rio Grande/RS.",
        "SALVAMAR SUL-SUESTE, São Paulo/SP.",
        "SALVAMAR SUESTE, Rio de Janeiro/RJ.",
        "SALVAMAR NORDESTE, Natal/RN."
      ],
      "answer": 0,
      "explanation": "O SALVAMAR SUL é apresentado como sediado em Rio Grande e associado ao 5º DN."
    },
    {
      "id": "c047",
      "topic": 1,
      "page": "14",
      "question": "Qual associação do 8º DN está correta?",
      "options": [
        "SALVAMAR SUL-SUESTE, São Paulo/SP.",
        "SALVAMAR SUL, Rio Grande/RS.",
        "SALVAMAR CENTRO-OESTE, Brasília/DF.",
        "SALVAMAR NORTE, Belém/PA."
      ],
      "answer": 0,
      "explanation": "O 8º DN corresponde ao SALVAMAR SUL-SUESTE em São Paulo."
    },
    {
      "id": "c048",
      "topic": 1,
      "page": "15",
      "question": "Qual conjunto apresenta os três centros de coordenação fluvial citados?",
      "options": [
        "Oeste/Ladário, Centro-Oeste/Brasília e Noroeste/Manaus.",
        "Sueste/Rio de Janeiro, Leste/Salvador e Sul/Rio Grande.",
        "Norte/Belém, Nordeste/Natal e Sul-Sueste/São Paulo.",
        "Atlântico, Burum e Falmouth."
      ],
      "answer": 0,
      "explanation": "Os três RCC fluviais citados pertencem aos 6º, 7º e 9º Distritos Navais."
    },
    {
      "id": "c049",
      "topic": 1,
      "page": "15",
      "question": "Qual relação entre distrito, SALVAMAR e sede fluvial está correta?",
      "options": [
        "6º DN: Oeste/Ladário; 7º DN: Centro-Oeste/Brasília; 9º DN: Noroeste/Manaus.",
        "6º DN: Noroeste/Manaus; 7º DN: Oeste/Ladário; 9º DN: Centro-Oeste/Brasília.",
        "6º DN: Sul/Rio Grande; 7º DN: Norte/Belém; 9º DN: Leste/Salvador.",
        "6º DN: Sueste/Rio; 7º DN: Nordeste/Natal; 9º DN: Sul-Sueste/São Paulo."
      ],
      "answer": 0,
      "explanation": "Essa é a distribuição fluvial apresentada na aula."
    },
    {
      "id": "c050",
      "topic": 1,
      "page": "18",
      "question": "O que é SALVAERO, conforme a aula?",
      "options": [
        "Centro de coordenação de salvamento aeronáutico da FAB.",
        "Nome de uma única SRU marítima da MB.",
        "A marca comercial de uma baliza.",
        "Um sistema de propulsão de aeronave."
      ],
      "answer": 0,
      "explanation": "O SALVAERO é apresentado como órgão da FAB para planejar, coordenar e executar missões SAR."
    },
    {
      "id": "c051",
      "topic": 1,
      "page": "18",
      "question": "Quais cinco centros SALVAERO são apresentados?",
      "options": [
        "Brasília, Curitiba, Recife, Amazônico e Atlântico.",
        "Salvador, Natal, Belém, Ladário e Rio Grande.",
        "Rio, São Paulo, Tanguá, Burum e Falmouth.",
        "Oeste, Leste, Sul, Sueste e Noroeste, exclusivamente."
      ],
      "answer": 0,
      "explanation": "A aula lista os cinco centros, incluindo o Atlântico voltado à área oceânica."
    },
    {
      "id": "c052",
      "topic": 1,
      "page": "18",
      "question": "Qual associação SALVAERO/CINDACTA corresponde ao slide?",
      "options": [
        "Brasília/I, Curitiba/II, Recife/III e Amazônico/IV.",
        "Brasília/IV, Curitiba/III, Recife/II e Amazônico/I.",
        "Brasília/II, Curitiba/I, Recife/IV e Amazônico/III.",
        "Todos os centros vinculados somente ao CINDACTA I."
      ],
      "answer": 0,
      "explanation": "A lista relaciona os quatro primeiros centros aos CINDACTA I a IV, respectivamente."
    },
    {
      "id": "c053",
      "topic": 1,
      "page": "22",
      "question": "Uma SRU pode ser de que natureza, segundo a aula?",
      "options": [
        "Aérea, marítima ou terrestre.",
        "Somente marítima e militar.",
        "Somente aeronave de asa rotativa.",
        "Apenas um centro fixo de comunicações."
      ],
      "answer": 0,
      "explanation": "A definição permite recursos aéreos, marítimos ou terrestres, devidamente preparados."
    },
    {
      "id": "c054",
      "topic": 1,
      "page": "22–23",
      "question": "Qual tarefa é compatível com uma SRU?",
      "options": [
        "Buscar, entregar suprimentos, salvar sobreviventes e removê-los para local seguro.",
        "Somente publicar normas administrativas.",
        "Realizar apenas inspeções comerciais de carga.",
        "Cobrar diretamente o atendimento de cada náufrago."
      ],
      "answer": 0,
      "explanation": "A lista de tarefas inclui assistência, busca, entrega de recursos, salvamento e remoção segura."
    },
    {
      "id": "c055",
      "topic": 1,
      "page": "23",
      "question": "Qual conjunto de recursos é citado para equipar uma SRU?",
      "options": [
        "Comunicações, mobilidade, sobrevivência, cartas e equipamentos de plotagem.",
        "Somente pintura especial e sinalização comercial.",
        "Apenas um telefone, sem recursos de mobilidade.",
        "Exclusivamente armamento, sem cartas ou comunicação."
      ],
      "answer": 0,
      "explanation": "A aula relaciona recursos para operar e informações relevantes sobre a SRR."
    },
    {
      "id": "c056",
      "topic": 1,
      "page": "24–25",
      "question": "Qual diferença entre NSE e NSD é apresentada?",
      "options": [
        "NSE subordinado ao ComemCh; NSD subordinado aos Distritos Navais, ambos designados para pronto emprego.",
        "NSE subordinado à FAB; NSD subordinado à IMO.",
        "NSE é uma aeronave; NSD é uma baliza.",
        "Os dois são nomes de estações costeiras sem meios de resgate."
      ],
      "answer": 0,
      "explanation": "A aula distingue Navio de Serviço da Esquadra e Navio de Serviço Distrital por suas subordinações."
    },
    {
      "id": "c057",
      "topic": 1,
      "page": "26–27",
      "question": "Qual associação de meios aéreos está correta?",
      "options": [
        "ASD é de serviço distrital; ASE e ASNSE são mantidas pelo ComemCh para operações de socorro.",
        "ASD é um navio distrital; ASE é um posto de alerta.",
        "ASE e ASNSE são apenas balsas salva-vidas.",
        "ASNSE significa exclusivamente aeronave civil de passageiros."
      ],
      "answer": 0,
      "explanation": "O material distingue Aeronave de Serviço Distrital, da Esquadra e do Navio de Serviço da Esquadra."
    },
    {
      "id": "c058",
      "topic": 1,
      "page": "28",
      "question": "Qual emprego das L-SAR é destacado na aula de organização?",
      "options": [
        "Prioritariamente operações SAR e de socorro, inclusive resgate em mar aberto e mau tempo.",
        "Exclusivamente transporte turístico e administrativo.",
        "Somente apoio à pesca comercial.",
        "Somente operações em águas interiores abrigadas."
      ],
      "answer": 0,
      "explanation": "O slide destaca a contribuição de eficiência e custos das L-SAR nas operações de socorro."
    },
    {
      "id": "c059",
      "topic": 1,
      "page": "29",
      "question": "Qual prontidão é prevista para o NSE durante e fora do expediente?",
      "options": [
        "4 horas e 6 horas.",
        "2 horas e 4 horas.",
        "30 minutos e 4 horas.",
        "2 horas e 2 horas."
      ],
      "answer": 0,
      "explanation": "Na tabela da aula CLSAR, o NSE deve prontificar em 4 horas no expediente e 6 horas fora dele ou em rotina de domingo."
    },
    {
      "id": "c060",
      "topic": 1,
      "page": "29",
      "question": "Qual prontidão é prevista para o NSD durante e fora do expediente na tabela CLSAR?",
      "options": [
        "2 horas e 4 horas.",
        "4 horas e 6 horas.",
        "30 minutos e 60 minutos.",
        "30 minutos e 4 horas."
      ],
      "answer": 0,
      "explanation": "A tabela deste arquivo apresenta 2 horas para o NSD no expediente e 4 horas fora do expediente ou em rotina de domingo."
    },
    {
      "id": "c061",
      "topic": 1,
      "page": "29",
      "question": "Qual prontidão é prevista para L-SAR durante e fora do expediente?",
      "options": [
        "30 minutos e 4 horas.",
        "2 horas e 6 horas.",
        "4 horas e 4 horas.",
        "30 minutos e 60 minutos."
      ],
      "answer": 0,
      "explanation": "Esses são os tempos apresentados para L-SAR na tabela de meios navais."
    },
    {
      "id": "c062",
      "topic": 1,
      "page": "29",
      "question": "Qual prontidão é prevista para AviPa durante e fora do expediente?",
      "options": [
        "2 horas e 4 horas.",
        "4 horas e 6 horas.",
        "30 minutos e 4 horas.",
        "2 horas e 2 horas."
      ],
      "answer": 0,
      "explanation": "A tabela atribui à AviPa os prazos de 2 e 4 horas, respectivamente."
    },
    {
      "id": "c063",
      "topic": 1,
      "page": "30",
      "question": "Qual prontidão para decolagem de ASE e ASDN é apresentada?",
      "options": [
        "2 horas tanto no expediente quanto fora dele.",
        "30 minutos no expediente e 4 horas fora dele.",
        "4 horas no expediente e 6 horas fora dele.",
        "6 horas em qualquer situação."
      ],
      "answer": 0,
      "explanation": "A tabela de meios aeronavais estabelece 2 horas para ASE e ASDN nas duas condições."
    },
    {
      "id": "c064",
      "topic": 1,
      "page": "30",
      "question": "Qual prontidão é apresentada para ASNSE?",
      "options": [
        "Tempo hábil para embarcar no NSE.",
        "30 minutos obrigatórios em qualquer circunstância.",
        "4 horas de dia e 6 horas à noite.",
        "Somente após o retorno do NSE ao porto."
      ],
      "answer": 0,
      "explanation": "A tabela descreve a prontificação da ASNSE em função do embarque no NSE."
    },
    {
      "id": "c065",
      "topic": 1,
      "page": "31",
      "question": "Qual limite de prontidão das equipes SAR de Capitanias, Delegacias e Agências ativadas como subcentro é apresentado?",
      "options": [
        "Até 30 minutos no expediente e até 60 minutos fora dele ou em rotina de domingo.",
        "2 horas no expediente e 4 horas fora dele.",
        "4 horas no expediente e 6 horas fora dele.",
        "O mesmo prazo de embarque da ASNSE."
      ],
      "answer": 0,
      "explanation": "Os ComDN devem normatizar a prontidão conforme a SRS, observando os máximos de 30 e 60 minutos apresentados."
    },
    {
      "id": "c066",
      "topic": 1,
      "page": "32",
      "question": "Como é descrito o GTAR-AerNav e sua subordinação?",
      "options": [
        "Tripulantes aéreos de salvamento habilitados a atuar a partir de aeronaves da MB, subordinados ao CIAAN.",
        "Equipe de controle comercial de portos, subordinada à IMO.",
        "Rede de estações costeiras subordinada à Embratel.",
        "Centro de controle de balizas subordinado ao operador de cada navio."
      ],
      "answer": 0,
      "explanation": "O grupo atua na salvaguarda da vida e no recolhimento de materiais de interesse, com subordinação ao CIAAN."
    },
    {
      "id": "c067",
      "topic": 2,
      "page": "6",
      "question": "Qual é a finalidade da padronização das mensagens SAR?",
      "options": [
        "Facilitar a elaboração e compreensão e definir a responsabilidade dos expedidores.",
        "Tornar as mensagens sigilosas por padrão.",
        "Impedir o compartilhamento entre centros de coordenação.",
        "Substituir os meios de comunicação por formulários físicos."
      ],
      "answer": 0,
      "explanation": "A padronização busca clareza na confecção e interpretação das mensagens e nas responsabilidades."
    },
    {
      "id": "c068",
      "topic": 2,
      "page": "6",
      "question": "Como as mensagens SAR devem ser redigidas, segundo a aula?",
      "options": [
        "Ostensivas, em linguagem clara e evitando abreviaturas.",
        "Sempre secretas e exclusivamente em código.",
        "Somente por abreviaturas, sem linguagem clara.",
        "Sem identificar o incidente ou o órgão expedidor."
      ],
      "answer": 0,
      "explanation": "A orientação explícita é linguagem clara, caráter ostensivo e redução das abreviaturas."
    },
    {
      "id": "c069",
      "topic": 2,
      "page": "6",
      "question": "Como solicitar recurso aéreo da FAB para um incidente marítimo, conforme o material?",
      "options": [
        "Por formulário próprio enviado ao ARCC/SALVAERO por fac-símile ou e-mail.",
        "Somente por ordem verbal a qualquer aeronave em voo.",
        "Pela substituição do SITREP por uma mensagem de rotina comercial.",
        "Por ligação exclusiva ao fabricante da aeronave."
      ],
      "answer": 0,
      "explanation": "O slide estabelece uso de formulário próprio e encaminhamento ao ARCC."
    },
    {
      "id": "c070",
      "topic": 2,
      "page": "7",
      "question": "Qual é a precedência da mensagem de abertura SAR?",
      "options": [
        "Imediata (O).",
        "Preferencial (P).",
        "Rotina (R), sempre.",
        "Sem precedência definida."
      ],
      "answer": 0,
      "explanation": "Abertura é apresentada com precedência imediata, código O."
    },
    {
      "id": "c071",
      "topic": 2,
      "page": "7",
      "question": "Qual é a precedência de encerramento, SITREP ou suspensão?",
      "options": [
        "Preferencial (P).",
        "Imediata (O), obrigatoriamente em todos os casos.",
        "Rotina (R), obrigatoriamente.",
        "Sempre sem classificação."
      ],
      "answer": 0,
      "explanation": "O slide agrupa encerramento, SITREP e suspensão na precedência preferencial."
    },
    {
      "id": "c072",
      "topic": 2,
      "page": "7",
      "question": "Para outras mensagens de rotina de um evento SAR, o que o material orienta?",
      "options": [
        "Avaliar precedência preferencial (P) ou rotina (R).",
        "Utilizar sempre imediata (O), sem avaliação.",
        "Não transmitir mensagens relacionadas ao evento.",
        "Deixar a precedência a cargo do náufrago."
      ],
      "answer": 0,
      "explanation": "O material prevê avaliação entre preferencial e rotina para essas outras mensagens."
    },
    {
      "id": "c073",
      "topic": 2,
      "page": "7",
      "question": "De quem é a responsabilidade pela emissão das mensagens SAR?",
      "options": [
        "SMC.",
        "Somente o operador da baliza.",
        "Qualquer passageiro, independentemente de coordenação.",
        "Exclusivamente o ACO, mesmo sem aeronaves."
      ],
      "answer": 0,
      "explanation": "A responsabilidade é atribuída explicitamente ao Coordenador da Missão SAR."
    },
    {
      "id": "c074",
      "topic": 2,
      "page": "8",
      "question": "Qual referência de tempo deve constar nos dados essenciais do incidente?",
      "options": [
        "Data e hora em UTC, com resumo do histórico.",
        "Somente a hora local, sem data.",
        "Somente a data da compra da embarcação.",
        "Apenas o horário de chegada previsto da SRU."
      ],
      "answer": 0,
      "explanation": "O slide relaciona data/hora UTC do incidente e resumo do histórico como dados essenciais."
    },
    {
      "id": "c075",
      "topic": 2,
      "page": "8",
      "question": "Qual conjunto contém apenas dados essenciais da mensagem SAR?",
      "options": [
        "Identificação do objeto, POB, LKP e condições meteorológicas/estado do mar.",
        "Somente telefones do agente e custo da operação.",
        "Apenas providências do MRCC e ETA dos meios.",
        "Somente os meios de comunicação e auxílios de sobrevivência."
      ],
      "answer": 0,
      "explanation": "Esses quatro elementos constam da relação de dados essenciais."
    },
    {
      "id": "c076",
      "topic": 2,
      "page": "8",
      "question": "O que significam POB e LKP no contexto da mensagem?",
      "options": [
        "Pessoas a bordo e última posição conhecida.",
        "Porto de origem e limite de combustível.",
        "Ponto de observação e código do transmissor.",
        "Previsão do tempo e localização da estação costeira."
      ],
      "answer": 0,
      "explanation": "A aula apresenta POB como pessoas a bordo e LKP como última posição conhecida."
    },
    {
      "id": "c077",
      "topic": 2,
      "page": "8",
      "question": "Quais características do objeto de busca devem ser informadas?",
      "options": [
        "Identificação, dimensões da embarcação, características e cores.",
        "Somente o nome do proprietário.",
        "Somente a seguradora.",
        "Apenas a nacionalidade, sem qualquer característica visual."
      ],
      "answer": 0,
      "explanation": "Esses dados ajudam a identificar o objeto durante a busca e constam como essenciais."
    },
    {
      "id": "c078",
      "topic": 2,
      "page": "8",
      "question": "A delimitação da área de probabilidade é classificada como quê?",
      "options": [
        "Dado essencial.",
        "Dado apenas comercial.",
        "Dado dispensável em toda operação.",
        "Uma precedência de transmissão."
      ],
      "answer": 0,
      "explanation": "Ela integra a relação de dados essenciais das mensagens para operações SAR."
    },
    {
      "id": "c079",
      "topic": 2,
      "page": "9",
      "question": "Qual informação temporal é relacionada como dado complementar?",
      "options": [
        "Data/hora UTC em que o MRCC foi acionado.",
        "Somente data de registro da embarcação.",
        "Apenas hora de fabricação do rádio.",
        "Data da última inspeção de pintura."
      ],
      "answer": 0,
      "explanation": "O acionamento do MRCC é um dado complementar, distinto da data/hora do incidente, classificada como essencial."
    },
    {
      "id": "c080",
      "topic": 2,
      "page": "9",
      "question": "Qual conjunto reúne auxílios do objeto da busca citados nos dados complementares?",
      "options": [
        "EPIRB, kit de sobrevivência, bote, comida, água e fumígeno.",
        "Apenas o tipo de tinta do casco.",
        "Somente o valor da carga transportada.",
        "Exclusivamente o número de estações costeiras do país."
      ],
      "answer": 0,
      "explanation": "Os auxílios de comunicação e sobrevivência ajudam a caracterizar os recursos disponíveis aos envolvidos."
    },
    {
      "id": "c081",
      "topic": 2,
      "page": "9",
      "question": "O que deve ser informado sobre NSD/NSE engajado na operação?",
      "options": [
        "Meio engajado, posição atual e ETA até a área de probabilidade.",
        "Somente a data de incorporação do navio.",
        "Apenas a quantidade de camarotes.",
        "Somente o valor comercial do navio."
      ],
      "answer": 0,
      "explanation": "O slide inclui a identificação do meio, posição e tempo estimado de chegada nos dados complementares."
    },
    {
      "id": "c082",
      "topic": 2,
      "page": "8–9",
      "question": "Qual distinção entre dado essencial e complementar corresponde à aula?",
      "options": [
        "LKP é essencial; os meios de comunicação com o objeto e o MRCC são complementares.",
        "LKP é complementar; o nome da seguradora é essencial.",
        "Todos os auxílios de sobrevivência substituem a posição do incidente.",
        "O horário de acionamento do MRCC substitui a data/hora do incidente."
      ],
      "answer": 0,
      "explanation": "As listas diferenciam os elementos sem que um substitua o outro."
    },
    {
      "id": "c083",
      "topic": 2,
      "page": "10",
      "question": "Qual campo do modelo de abertura identifica a origem da mensagem?",
      "options": [
        "DE, seguido do órgão expedidor.",
        "PARA, seguido dos destinatários de ação.",
        "INFO, seguido dos destinatários de informação.",
        "Apenas o número de pessoas a bordo."
      ],
      "answer": 0,
      "explanation": "No modelo, DE SALVAMAR SUESTE identifica a origem; PARA e INFO identificam destinatários."
    },
    {
      "id": "c084",
      "topic": 2,
      "page": "10",
      "question": "Qual é a distinção entre PARA e INFO no modelo apresentado?",
      "options": [
        "PARA relaciona destinatários de ação; INFO relaciona destinatários de informação.",
        "INFO indica a origem e PARA indica a baliza.",
        "Ambos indicam exclusivamente o objeto da busca.",
        "PARA é a última posição conhecida e INFO é o rumo."
      ],
      "answer": 0,
      "explanation": "O cabeçalho do modelo separa os destinatários nessas duas categorias."
    },
    {
      "id": "c085",
      "topic": 2,
      "page": "11",
      "question": "No exemplo de abertura, o que é solicitado ao CHM?",
      "options": [
        "Divulgação em avisos aos navegantes e previsão meteorológica especial.",
        "Remoção física de todos os tripulantes pelo operador da estação.",
        "Emissão de passagens aéreas comerciais.",
        "Desligamento das estações costeiras."
      ],
      "answer": 0,
      "explanation": "São as solicitações apresentadas no exemplo. Não se trata de regra de horários ou destinatários para toda missão."
    },
    {
      "id": "c086",
      "topic": 2,
      "page": "12",
      "question": "No exemplo, qual tarefa é atribuída ao navio destacado além de demandar a posição?",
      "options": [
        "Manter o SALVAMAR informado, enviar SITREP, registrar fotos e assumir a coordenação na cena.",
        "Apenas observar de longe e manter silêncio rádio.",
        "Encerrar o incidente antes de chegar ao local.",
        "Transferir toda decisão ao agente marítimo."
      ],
      "answer": 0,
      "explanation": "O exemplo reúne socorro, informação, SITREP, registro e atuação na cena. São tarefas daquele modelo."
    },
    {
      "id": "c087",
      "topic": 2,
      "page": "12",
      "question": "No exemplo, quando deve ser enviado SITREP além dos horários programados?",
      "options": [
        "Quando houver fato relevante.",
        "Apenas no mês seguinte.",
        "Somente ao terminar toda a busca.",
        "Nunca fora dos horários indicados."
      ],
      "answer": 0,
      "explanation": "O modelo prevê SITREP diário em horários definidos e também diante de fatos relevantes. Os horários são do exemplo."
    },
    {
      "id": "c088",
      "topic": 2,
      "page": "13–14",
      "question": "Que grupos de dados aparecem no modelo de abertura para EVAM?",
      "options": [
        "Dados do navio, do enfermo e do agente marítimo.",
        "Apenas o custo da aeronave e do combustível.",
        "Somente a cor da aeronave.",
        "Exclusivamente a temperatura do mar."
      ],
      "answer": 0,
      "explanation": "O modelo organiza as informações da embarcação, do paciente e do agente para apoiar a coordenação."
    },
    {
      "id": "c089",
      "topic": 2,
      "page": "14",
      "question": "Quais dados de navegação do navio aparecem no exemplo de EVAM?",
      "options": [
        "Posição com data/hora, velocidade e rumo.",
        "Somente boca e calado.",
        "Somente o número do extintor.",
        "Apenas o nome do terminal portuário."
      ],
      "answer": 0,
      "explanation": "O modelo inclui posição temporizada, velocidade e rumo do navio."
    },
    {
      "id": "c090",
      "topic": 2,
      "page": "15",
      "question": "No exemplo de EVAM, qual coordenação favorece a retirada segura do tripulante?",
      "options": [
        "Contato do agente com o comandante e a praticagem para retirada em local seguro e abrigado.",
        "Retirada obrigatória em qualquer posição, sem avaliação.",
        "Esperar a mudança de nacionalidade da embarcação.",
        "Dispensar qualquer informação de posição e ETA."
      ],
      "answer": 0,
      "explanation": "O exemplo orienta articular comandante, praticagem e agente para facilitar a retirada em local seguro e abrigado."
    },
    {
      "id": "c091",
      "topic": 3,
      "page": "5",
      "question": "Qual capacidade deve ser estabelecida ao desenvolver um sistema SAR em uma SRR?",
      "options": [
        "Receber alertas e comunicá-los imediatamente a RCC/MRCC e/ou RSC/MRSC.",
        "Garantir comunicação somente após o fim da missão.",
        "Usar exclusivamente correio físico.",
        "Dispensar qualquer sistema de alerta quando houver navios na área."
      ],
      "answer": 0,
      "explanation": "A introdução destaca a recepção e o rápido encaminhamento dos alertas aos centros e subcentros."
    },
    {
      "id": "c092",
      "topic": 3,
      "page": "6",
      "question": "Quais são exemplos de comunicações por satélite citados no sistema de alerta SAR?",
      "options": [
        "INMARSAT e COSPAS-SARSAT.",
        "Somente VHF canal 16 e telefone.",
        "Apenas estação costeira e rádio portátil.",
        "Somente MF e HF terrestres."
      ],
      "answer": 0,
      "explanation": "Esses dois sistemas aparecem na categoria de comunicações por satélite."
    },
    {
      "id": "c093",
      "topic": 3,
      "page": "6",
      "question": "Qual opção reúne meios terrestres e outras comunicações citados?",
      "options": [
        "HF-DSC, estações costeiras, telefone e fac-símile.",
        "Somente satélites geoestacionários.",
        "Apenas EPIRB, ELT e PLB, sem outros meios.",
        "Somente sinais de radar SART."
      ],
      "answer": 0,
      "explanation": "O slide reúne comunicações terrestres por rádio e alternativas como telefone e fac-símile."
    },
    {
      "id": "c094",
      "topic": 3,
      "page": "8",
      "question": "Qual é o conceito básico do GMDSS apresentado na aula?",
      "options": [
        "Alertar rapidamente os RCC e navios próximos para viabilizar busca e salvamento coordenados.",
        "Eliminar a necessidade de coordenação entre os meios.",
        "Garantir que apenas navios em terra recebam alertas.",
        "Transmitir apenas informações comerciais."
      ],
      "answer": 0,
      "explanation": "O conceito central é o alerta rápido às autoridades e aos navios próximos ao sinistro."
    },
    {
      "id": "c095",
      "topic": 3,
      "page": "9",
      "question": "Qual organização é indicada como responsável pela implantação mundial do GMDSS?",
      "options": [
        "IMO.",
        "Somente ICAO.",
        "Somente cada empresa de navegação.",
        "GTAR-AerNav."
      ],
      "answer": 0,
      "explanation": "O material atribui a implantação mundial à IMO."
    },
    {
      "id": "c096",
      "topic": 3,
      "page": "9",
      "question": "Qual é o papel atribuído à DCTIM na aula?",
      "options": [
        "Implantação do GMDSS na Marinha do Brasil.",
        "Coordenação de todas as aeronaves em cada cena.",
        "Remuneração dos serviços de salvamento.",
        "A operação exclusiva do ferro da LSAR."
      ],
      "answer": 0,
      "explanation": "O slide distingue responsabilidades internacionais, nacionais e internas à MB, atribuindo esta última à DCTIM."
    },
    {
      "id": "c097",
      "topic": 3,
      "page": "9",
      "question": "Qual publicação divulga os recursos terrestres que os países se comprometem a disponibilizar para o GMDSS?",
      "options": [
        "Master Plan of Shore Based Facilities for the GMDSS.",
        "Somente o diário de máquinas de cada navio.",
        "Apenas o cadastro do agente marítimo.",
        "Exclusivamente o plano de carga comercial."
      ],
      "answer": 0,
      "explanation": "O material apresenta o plano diretor das instalações em terra para o GMDSS."
    },
    {
      "id": "c098",
      "topic": 3,
      "page": "12",
      "question": "Além do socorro, quais informações o GMDSS pode disseminar?",
      "options": [
        "Avisos-rádio náuticos, avisos-rádio SAR e boletins meteorológicos.",
        "Somente propaganda comercial.",
        "Apenas o histórico de manutenção dos motores.",
        "Exclusivamente relações de passageiros pagantes."
      ],
      "answer": 0,
      "explanation": "O slide destaca comunicações de segurança, socorro e informações de segurança marítima."
    },
    {
      "id": "c099",
      "topic": 3,
      "page": "12",
      "question": "O que são os RMC mencionados na aula?",
      "options": [
        "Requisitos Mínimos de Comunicações, que estabelecem os recursos GMDSS de cada navio da MB.",
        "Registros de Manutenção do Casco, sem relação com comunicação.",
        "Relação de Mercadorias Comerciais.",
        "Regras exclusivas para cobrança do resgate."
      ],
      "answer": 0,
      "explanation": "O slide atribui à DCTIM a elaboração dos RMC após a orientação apresentada sobre os navios da MB."
    },
    {
      "id": "c100",
      "topic": 3,
      "page": "13",
      "question": "No quadro didático da aula, quais canais VHF são associados ao alerta digital e à voz em A1?",
      "options": [
        "Canal 70 para digital e canal 16 para voz.",
        "Canal 16 para digital e canal 70 para voz.",
        "Canal 13 para digital e canal 12 para voz.",
        "Canal 421 para ambos."
      ],
      "answer": 0,
      "explanation": "A tabela relaciona o canal 70 ao alerta digital e o 16 ao serviço por voz."
    },
    {
      "id": "c101",
      "topic": 3,
      "page": "13",
      "question": "No quadro da aula, quais frequências MF são associadas a alerta digital e voz em A2?",
      "options": [
        "2187,5 kHz para digital e 2182 kHz para voz.",
        "2182 kHz para digital e 2187,5 kHz para voz.",
        "406 MHz para ambos.",
        "121,5 MHz para digital e 123,1 MHz para voz."
      ],
      "answer": 0,
      "explanation": "Esses são os valores apresentados no quadro para a área A2."
    },
    {
      "id": "c102",
      "topic": 3,
      "page": "13",
      "question": "Como o quadro da aula representa a área A3?",
      "options": [
        "Alto-mar entre aproximadamente 70°N e 70°S, com HF e INMARSAT.",
        "Somente rios navegáveis brasileiros.",
        "Somente a cobertura de VHF junto à costa.",
        "Apenas uma zona de 1 MN ao redor de cada porto."
      ],
      "answer": 0,
      "explanation": "A questão reproduz o enquadramento didático do quadro fornecido no curso."
    },
    {
      "id": "c103",
      "topic": 3,
      "page": "13",
      "question": "Como o quadro da aula caracteriza a área A4?",
      "options": [
        "Regiões polares, associadas ao COSPAS-SARSAT, sem cobertura de voz assegurada.",
        "Somente a área coberta por VHF costeiro.",
        "Apenas a Baía de Guanabara.",
        "Zona com voz garantida por INMARSAT em qualquer latitude."
      ],
      "answer": 0,
      "explanation": "Essa é a representação da tabela do material; não é uma garantia operacional de cobertura."
    },
    {
      "id": "c104",
      "topic": 3,
      "page": "14",
      "question": "Qual conjunto aparece em todas as colunas de áreas do quadro de equipamentos SOLAS?",
      "options": [
        "VHF com DSC, Navtex, EPIRB, SART e VHF portátil.",
        "Somente INMARSAT SES em todas as áreas.",
        "Apenas radiotelex, dispensando balizas.",
        "Somente comunicação por telefone celular."
      ],
      "answer": 0,
      "explanation": "Esses equipamentos estão marcados nas colunas do quadro apresentado na aula."
    },
    {
      "id": "c105",
      "topic": 3,
      "page": "16",
      "question": "Quais três caminhos básicos de alerta de perigo GMDSS são relacionados?",
      "options": [
        "INMARSAT, COSPAS-SARSAT/EPIRB e DSC.",
        "Somente telefone, correio e mensageiro.",
        "Apenas luzes, apito e foguetes.",
        "Exclusivamente radar, ecobatímetro e agulha."
      ],
      "answer": 0,
      "explanation": "O slide apresenta esses três caminhos de alerta, com complemento da RENEC no Brasil."
    },
    {
      "id": "c106",
      "topic": 3,
      "page": "17",
      "question": "Quais são os três componentes principais do INMARSAT apresentados?",
      "options": [
        "Segmento espacial, estações terrenas costeiras (LES) e estações terrenas de navios (SES).",
        "RCC, SRS e equipe de mergulho.",
        "Apenas EPIRB, ELT e PLB.",
        "VHF portátil, SART e luz de busca."
      ],
      "answer": 0,
      "explanation": "O material divide o INMARSAT nesses três componentes."
    },
    {
      "id": "c107",
      "topic": 3,
      "page": "17",
      "question": "Qual descrição do segmento espacial INMARSAT é apresentada?",
      "options": [
        "Satélites geoestacionários a cerca de 36.000 km sobre o Equador.",
        "Satélites apenas terrestres a 36 m do solo.",
        "Satélites exclusivamente polares a 406 km.",
        "Antenas móveis instaladas somente nas balsas."
      ],
      "answer": 0,
      "explanation": "A aula descreve os satélites geoestacionários e a cobertura aproximada entre 70°N e 70°S."
    },
    {
      "id": "c108",
      "topic": 3,
      "page": "19",
      "question": "No fluxo INMARSAT descrito, quais centros estrangeiros retransmitem o alerta ao SALVAMAR BRASIL?",
      "options": [
        "MRCC Falmouth e/ou JRCC Den Helder.",
        "Somente SALVAERO Brasília e Curitiba.",
        "Apenas CIAAN e DCTIM.",
        "Somente os RCC fluviais de Ladário e Manaus."
      ],
      "answer": 0,
      "explanation": "O exemplo descreve passagem pela LES de Burum e recebimento em Falmouth e/ou Den Helder antes do encaminhamento ao Brasil."
    },
    {
      "id": "c109",
      "topic": 3,
      "page": "19",
      "question": "Segundo a descrição didática da aula, como é tratado o custo do alerta INMARSAT?",
      "options": [
        "O sinal de alerta é gratuito, mas as chamadas subsequentes são cobradas.",
        "Todo alerta exige pagamento antecipado.",
        "O sistema não permite emitir alertas.",
        "Apenas a pessoa resgatada paga o sinal de alerta."
      ],
      "answer": 0,
      "explanation": "Essa é a distinção de custos expressa no slide, apresentada como conteúdo do curso."
    },
    {
      "id": "c110",
      "topic": 3,
      "page": "21",
      "question": "Quais países participaram do memorando de 1979 ligado ao COSPAS-SARSAT?",
      "options": [
        "Estados Unidos, Canadá, França e União Soviética.",
        "Brasil, Portugal, Espanha e Itália.",
        "Somente Brasil e Estados Unidos.",
        "Japão, Austrália, Índia e África do Sul."
      ],
      "answer": 0,
      "explanation": "A aula relaciona as agências desses quatro países no memorando de intenções."
    },
    {
      "id": "c111",
      "topic": 3,
      "page": "22",
      "question": "Qual é a finalidade do COSPAS-SARSAT?",
      "options": [
        "Fornecer alertas de emergência e dados de localização para apoiar o socorro a pessoas em perigo.",
        "Transmitir apenas notícias comerciais.",
        "Substituir todo atendimento aos sobreviventes.",
        "Realizar exclusivamente previsões meteorológicas."
      ],
      "answer": 0,
      "explanation": "O material enfatiza dados de localização precisos, oportunos e confiáveis para autoridades SAR."
    },
    {
      "id": "c112",
      "topic": 3,
      "page": "22",
      "question": "Quais componentes do COSPAS-SARSAT são apresentados?",
      "options": [
        "Balizas de emergência, segmento espacial e segmento terrestre.",
        "Somente navios de guerra e submarinos.",
        "Apenas rádios VHF e redes celulares.",
        "Somente estações de cobrança."
      ],
      "answer": 0,
      "explanation": "A aula apresenta esses três componentes."
    },
    {
      "id": "c113",
      "topic": 3,
      "page": "24",
      "question": "Qual associação entre balizas e emprego está correta?",
      "options": [
        "EPIRB marítima, ELT aeronáutica e PLB pessoal.",
        "EPIRB pessoal, ELT marítima e PLB aeronáutica.",
        "EPIRB aeronáutica, ELT pessoal e PLB marítima.",
        "Todas são exclusivamente balizas de carga."
      ],
      "answer": 0,
      "explanation": "O slide distingue as três aplicações das balizas."
    },
    {
      "id": "c114",
      "topic": 3,
      "page": "24",
      "question": "Qual frequência de operação é indicada para EPIRB, ELT e PLB nesse sistema?",
      "options": [
        "406 MHz.",
        "9 GHz.",
        "2182 kHz.",
        "156,8 MHz."
      ],
      "answer": 0,
      "explanation": "O slide relaciona a frequência de 406 MHz às balizas apresentadas."
    },
    {
      "id": "c115",
      "topic": 3,
      "page": "25",
      "question": "Qual é a função de um LUT no COSPAS-SARSAT?",
      "options": [
        "Receber os sinais dos satélites por sistemas de antenas.",
        "Coordenar exclusivamente a cena de ação no mar.",
        "Emitir a mensagem de abertura em nome do náufrago.",
        "Operar apenas a propulsão das SRU."
      ],
      "answer": 0,
      "explanation": "LUT significa terminal local do usuário e integra o segmento terrestre."
    },
    {
      "id": "c116",
      "topic": 3,
      "page": "25",
      "question": "Qual é a função do MCC no fluxo COSPAS-SARSAT?",
      "options": [
        "Receber informações do LUT e disseminar o alerta ao RCC correspondente.",
        "Receber passageiros e transportá-los ao porto.",
        "Emitir somente notas de manutenção dos equipamentos.",
        "Substituir a baliza no convés da embarcação."
      ],
      "answer": 0,
      "explanation": "O MCC, Centro de Controle da Missão, distribui os alertas recebidos dos LUT aos centros competentes."
    },
    {
      "id": "c117",
      "topic": 3,
      "page": "25",
      "question": "Segundo a aula, quem responde pela interligação brasileira com o COSPAS-SARSAT?",
      "options": [
        "FAB.",
        "Somente os proprietários de navios.",
        "Exclusivamente a IMO em cada porto.",
        "A empresa de praticagem de cada terminal."
      ],
      "answer": 0,
      "explanation": "O material atribui essa interligação à FAB e apresenta o MCC e os LUT em Brasília e Recife."
    },
    {
      "id": "c118",
      "topic": 3,
      "page": "27",
      "question": "Quais são as quatro prioridades de um pacote DSC apresentadas?",
      "options": [
        "Distress, Urgency, Safety e Routine.",
        "Busca, chegada, abastecimento e manutenção.",
        "A1, A2, A3 e A4, como prioridades de mensagem.",
        "LUT, MCC, LES e SES, como níveis de urgência."
      ],
      "answer": 0,
      "explanation": "As prioridades são perigo, urgência, segurança e rotina, respectivamente."
    },
    {
      "id": "c119",
      "topic": 3,
      "page": "28",
      "question": "Qual característica de escuta do equipamento DSC é apresentada?",
      "options": [
        "Escuta contínua na frequência de socorro e varredura automática nas demais.",
        "Escuta apenas quando um telefone celular está conectado.",
        "Ausência de vigilância das frequências de socorro.",
        "Recepção limitada ao momento da atracação."
      ],
      "answer": 0,
      "explanation": "A aula destaca a escuta contínua de socorro e a varredura automática."
    },
    {
      "id": "c120",
      "topic": 3,
      "page": "31–32",
      "question": "Qual é o papel da RENEC destacado no material?",
      "options": [
        "Apoiar a salvaguarda da vida humana por radiocomunicações, em colaboração com a MB.",
        "Substituir exclusivamente o serviço médico do navio.",
        "Fiscalizar apenas o pagamento do combustível.",
        "Executar somente o reboque de embarcações comerciais."
      ],
      "answer": 0,
      "explanation": "A RENEC é apresentada como rede de estações costeiras com facilidades de comunicação para proteção da vida."
    },
    {
      "id": "c121",
      "topic": 3,
      "page": "32",
      "question": "Quais mensagens são exemplos de comunicações gratuitas da RENEC citadas?",
      "options": [
        "Pedidos de socorro, consultas médicas urgentes, avisos-rádio SAR e boletins meteorológicos.",
        "Somente reservas comerciais e publicidade.",
        "Apenas mensagens particulares sem relação com a missão.",
        "Exclusivamente instruções financeiras entre armadores."
      ],
      "answer": 0,
      "explanation": "A aula relaciona essas mensagens à salvaguarda da vida humana."
    },
    {
      "id": "c122",
      "topic": 3,
      "page": "35",
      "question": "Como funciona o SART radar apresentado?",
      "options": [
        "Responde à interrogação de um radar na faixa de 9 GHz.",
        "Emite exclusivamente mensagens de voz no canal 16.",
        "Mede apenas a profundidade sob a balsa.",
        "Envia exclusivamente e-mails pelo telefone do náufrago."
      ],
      "answer": 0,
      "explanation": "O SART é um transponder radar, distinto das balizas de alerta por satélite."
    },
    {
      "id": "c123",
      "topic": 3,
      "page": "35",
      "question": "Que resposta o SART produz no radar e qual altura mínima é indicada?",
      "options": [
        "Série de 12 pulsos e instalação pelo menos 1 m acima do mar.",
        "Um único pulso e instalação submersa.",
        "24 pulsos e instalação 30 m abaixo da água.",
        "Somente voz e nenhuma exigência de altura."
      ],
      "answer": 0,
      "explanation": "A aula descreve os 12 sinais e a colocação do SART a pelo menos um metro acima do nível do mar."
    },
    {
      "id": "c124",
      "topic": 3,
      "page": "35",
      "question": "Qual emprego do SART é destacado?",
      "options": [
        "Localização de navios em perigo ou embarcações de sobrevivência, inclusive com unidade portátil.",
        "Controle da cobrança por resgate.",
        "Medição de consumo dos motores.",
        "Determinação exclusiva da pressão atmosférica."
      ],
      "answer": 0,
      "explanation": "O slide enfatiza a localização por radar e a possibilidade de transportar o SART para uma embarcação de sobrevivência."
    },
    {
      "id": "c125",
      "topic": 3,
      "page": "38",
      "question": "Qual associação de frequências aeronáuticas está correta no material?",
      "options": [
        "121,5 MHz para emergência e 123,1 MHz para operações na cena.",
        "123,1 MHz para emergência e 406 MHz para voz na cena.",
        "9 GHz para emergência e 2182 kHz para voz aeronáutica na cena.",
        "156,8 MHz para ambas as finalidades aeronáuticas."
      ],
      "answer": 0,
      "explanation": "As duas frequências VHF-AM têm essas finalidades na relação do slide."
    },
    {
      "id": "c126",
      "topic": 3,
      "page": "31, 38",
      "question": "Qual é a frequência do canal 16 do VHF citada nas comunicações de chamada e socorro?",
      "options": [
        "156,8 MHz.",
        "406 MHz.",
        "121,5 MHz.",
        "9 GHz."
      ],
      "answer": 0,
      "explanation": "O material relaciona o canal 16 do VHF à frequência de 156,8 MHz."
    },
    {
      "id": "c127",
      "topic": 3,
      "page": "25, 39",
      "question": "Qual sequência representa o caminho de um alerta de baliza por satélite no fluxograma?",
      "options": [
        "EPIRB, satélite, LUT, MCC e RCC competente.",
        "EPIRB, guincho, extintor e gerador.",
        "LUT, tripulante, agulha e cabo de reboque.",
        "MCC, casco, rádio comercial e seguradora."
      ],
      "answer": 0,
      "explanation": "O fluxo de alerta passa pelos segmentos espacial e terrestre antes de chegar à coordenação SAR."
    },
    {
      "id": "c128",
      "topic": 3,
      "page": "24, 35",
      "question": "Qual distinção entre EPIRB e SART radar está correta?",
      "options": [
        "EPIRB participa do alerta via satélite; SART auxilia a localização por resposta ao radar.",
        "SART é a baliza marítima de 406 MHz e EPIRB só responde a radar.",
        "Ambos são exclusivamente rádios de voz portáteis.",
        "Nenhum deles auxilia operações SAR."
      ],
      "answer": 0,
      "explanation": "O material apresenta funções complementares: alerta de baliza no COSPAS-SARSAT e localização por resposta radar."
    },
    {
      "id": "c129",
      "topic": 4,
      "page": "7",
      "question": "Qual região do sistema IALA é adotada no Brasil, segundo a aula de balizamento?",
      "options": [
        "Região A.",
        "Região B.",
        "Região C.",
        "Região D."
      ],
      "answer": 1,
      "explanation": "O material identifica o balizamento brasileiro como IALA B; A e B são as duas regiões do sistema."
    },
    {
      "id": "c130",
      "topic": 4,
      "page": "9",
      "question": "Uma LSAR entra em um porto brasileiro, vindo do mar no sentido convencional do balizamento. Em que bordo deve deixar os sinais encarnados laterais?",
      "options": [
        "Boreste.",
        "Qualquer bordo, pois a cor não indica lateralidade.",
        "Bombordo.",
        "O bordo determinado apenas pela direção do vento."
      ],
      "answer": 0,
      "explanation": "Na região B, entrando do mar, o encarnado fica a boreste e o verde a bombordo."
    },
    {
      "id": "c131",
      "topic": 4,
      "page": "9",
      "question": "Ao sair de um porto brasileiro em direção ao mar, como ficam os sinais laterais no IALA B?",
      "options": [
        "Ambas as cores sempre a bombordo.",
        "Ambas as cores sempre a boreste.",
        "Encarnados a boreste e verdes a bombordo.",
        "Encarnados a bombordo e verdes a boreste."
      ],
      "answer": 3,
      "explanation": "A saída inverte os bordos usados na entrada: encarnado por BB e verde por BE."
    },
    {
      "id": "c132",
      "topic": 4,
      "page": "11",
      "question": "Qual combinação caracteriza o sinal lateral de bombordo do IALA B na entrada do porto?",
      "options": [
        "Cor encarnada e, se houver tope, cone encarnado.",
        "Cor amarela e, se houver tope, X amarelo.",
        "Cor verde e, se houver tope, cilindro verde.",
        "Faixas encarnadas e brancas e tope esférico."
      ],
      "answer": 2,
      "explanation": "O slide de bombordo apresenta o sinal verde e o cilindro verde como marca de tope."
    },
    {
      "id": "c133",
      "topic": 4,
      "page": "12",
      "question": "Qual marca de tope identifica o sinal lateral de boreste do IALA B?",
      "options": [
        "Esfera encarnada sobre faixas verticais.",
        "Cone encarnado com o vértice para cima.",
        "Cilindro verde com eixo vertical.",
        "Duas esferas pretas sobrepostas."
      ],
      "answer": 1,
      "explanation": "O sinal de boreste pode apresentar um cone encarnado apontado para cima."
    },
    {
      "id": "c134",
      "topic": 4,
      "page": "11-12",
      "question": "Por que o grupo de lampejos (2+1) não é usado como ritmo comum dos sinais laterais apresentados?",
      "options": [
        "Ele distingue sinais de canal preferencial.",
        "Ele é empregado apenas em perigos isolados.",
        "Ele é reservado exclusivamente aos sinais cardinais.",
        "Ele identifica somente sinal de águas seguras."
      ],
      "answer": 0,
      "explanation": "Os slides reservam o grupo composto (2+1) aos sinais laterais modificados que indicam canal preferencial."
    },
    {
      "id": "c135",
      "topic": 4,
      "page": "13",
      "question": "Na região B, qual sinal indica canal preferencial a boreste no sentido convencional?",
      "options": [
        "Faixas verticais encarnadas e brancas.",
        "Preto com faixa larga horizontal encarnada.",
        "Encarnado com faixa larga horizontal verde.",
        "Verde com faixa larga horizontal encarnada."
      ],
      "answer": 3,
      "explanation": "O sinal de bombordo modificado é predominantemente verde, com faixa encarnada, e indica canal preferencial a boreste."
    },
    {
      "id": "c136",
      "topic": 4,
      "page": "14",
      "question": "Qual característica luminosa é indicada para canal preferencial a bombordo no IALA B?",
      "options": [
        "Luz verde com lampejos compostos (2+1).",
        "Luz amarela em código Morse A.",
        "Luz encarnada com lampejos compostos (2+1).",
        "Luz branca com dois lampejos por período."
      ],
      "answer": 2,
      "explanation": "O slide relaciona canal preferencial a bombordo à luz encarnada em grupos (2+1)."
    },
    {
      "id": "c137",
      "topic": 4,
      "page": "15",
      "question": "Qual é uma finalidade dos sinais cardinais?",
      "options": [
        "Identificar exclusivamente as margens de um canal de entrada.",
        "Indicar o lado seguro de passagem em relação a um perigo.",
        "Assinalar exclusivamente uma área de recreação.",
        "Identificar somente a posição de embarcações fundeadas."
      ],
      "answer": 1,
      "explanation": "Os sinais cardinais podem indicar águas mais profundas e o bordo safo para passar por um perigo."
    },
    {
      "id": "c138",
      "topic": 4,
      "page": "15-16",
      "question": "Um sinal cardinal norte indica passagem segura em qual lado do sinal?",
      "options": [
        "Ao norte.",
        "A leste.",
        "A oeste.",
        "Ao sul."
      ],
      "answer": 0,
      "explanation": "O nome do cardinal indica o quadrante seguro: no cardinal norte, deve-se passar pelo lado norte."
    },
    {
      "id": "c139",
      "topic": 4,
      "page": "16",
      "question": "Duas marcas de tope cônicas pretas, ambas com vértices para cima, identificam qual cardinal?",
      "options": [
        "Sul.",
        "Oeste.",
        "Leste.",
        "Norte."
      ],
      "answer": 3,
      "explanation": "Na figura, os dois cones apontados para cima identificam o cardinal norte."
    },
    {
      "id": "c140",
      "topic": 4,
      "page": "16",
      "question": "Duas marcas de tope cônicas pretas, ambas com vértices para baixo, identificam qual cardinal?",
      "options": [
        "Oeste.",
        "Leste.",
        "Sul.",
        "Norte."
      ],
      "answer": 2,
      "explanation": "O cardinal sul apresenta os dois cones com os vértices voltados para baixo."
    },
    {
      "id": "c141",
      "topic": 4,
      "page": "16",
      "question": "Cones pretos com as bases voltadas uma para a outra identificam qual sinal cardinal?",
      "options": [
        "Norte.",
        "Leste.",
        "Sul.",
        "Oeste."
      ],
      "answer": 1,
      "explanation": "No cardinal leste os cones ficam base com base, com os vértices apontados para fora."
    },
    {
      "id": "c142",
      "topic": 4,
      "page": "16",
      "question": "Cones pretos com os vértices voltados um para o outro identificam qual sinal cardinal?",
      "options": [
        "Oeste.",
        "Leste.",
        "Sul.",
        "Norte."
      ],
      "answer": 0,
      "explanation": "No cardinal oeste os vértices dos cones se encontram, ao contrário do cardinal leste."
    },
    {
      "id": "c143",
      "topic": 4,
      "page": "16",
      "question": "Qual cardinal se associa ao grupo de três lampejos rápidos ou muito rápidos?",
      "options": [
        "Oeste.",
        "Sul.",
        "Norte.",
        "Leste."
      ],
      "answer": 3,
      "explanation": "A figura associa leste a três lampejos; sul usa seis e um longo, e oeste usa nove."
    },
    {
      "id": "c144",
      "topic": 4,
      "page": "16",
      "question": "Qual característica ajuda a diferenciar a luz do cardinal sul?",
      "options": [
        "Lampejos rápidos contínuos sem agrupamento.",
        "Três lampejos rápidos sem lampejo longo.",
        "Seis lampejos rápidos ou muito rápidos seguidos de um longo.",
        "Nove lampejos rápidos sem lampejo longo."
      ],
      "answer": 2,
      "explanation": "O lampejo longo após os seis rápidos distingue o cardinal sul no esquema apresentado."
    },
    {
      "id": "c145",
      "topic": 4,
      "page": "17",
      "question": "Qual combinação identifica o sinal de perigo isolado?",
      "options": [
        "Encarnado e branco em faixas verticais e uma esfera encarnada.",
        "Preto com faixas encarnadas e duas esferas pretas no tope.",
        "Amarelo com faixa verde e um cilindro no tope.",
        "Verde com faixa encarnada e um cone verde no tope."
      ],
      "answer": 1,
      "explanation": "O perigo isolado é preto com faixa(s) encarnada(s), tendo duas esferas pretas sobrepostas."
    },
    {
      "id": "c146",
      "topic": 4,
      "page": "17",
      "question": "O que o sinal de perigo isolado informa sobre as águas ao redor?",
      "options": [
        "Existe um perigo localizado, com águas navegáveis à sua volta.",
        "Apenas o quadrante norte é seguro para passagem.",
        "Toda a área ao redor é imprópria à navegação.",
        "O canal preferencial está sempre a bombordo."
      ],
      "answer": 0,
      "explanation": "O sinal é colocado sobre ou junto a um perigo isolado que possui águas navegáveis em torno."
    },
    {
      "id": "c147",
      "topic": 4,
      "page": "17",
      "question": "Se luminoso, qual ritmo e cor aparecem no sinal de perigo isolado da aula?",
      "options": [
        "Verde, com três lampejos por período.",
        "Encarnada, com nove lampejos por período.",
        "Amarela, com seis lampejos e um longo.",
        "Branca, com dois lampejos por período."
      ],
      "answer": 3,
      "explanation": "O slide apresenta luz branca com grupo de dois lampejos para o perigo isolado."
    },
    {
      "id": "c148",
      "topic": 4,
      "page": "18",
      "question": "Qual combinação é própria de sinal de águas seguras?",
      "options": [
        "Cor verde uniforme; tope cilíndrico verde, se houver.",
        "Cor amarela uniforme; tope em X amarelo, se houver.",
        "Faixas verticais encarnadas e brancas; tope esférico encarnado, se houver.",
        "Faixas horizontais pretas e encarnadas; duas esferas pretas."
      ],
      "answer": 2,
      "explanation": "O sinal de águas seguras usa faixas verticais encarnadas e brancas e pode ter uma esfera encarnada no tope."
    },
    {
      "id": "c149",
      "topic": 4,
      "page": "18",
      "question": "Qual é a função dos sinais de águas seguras apresentados?",
      "options": [
        "Indicar exclusivamente um perigo sobre o qual não se pode passar.",
        "Indicar águas navegáveis em torno do sinal, inclusive em meio de canal.",
        "Indicar área militar onde a navegação é proibida.",
        "Indicar exclusivamente a margem de boreste de um canal."
      ],
      "answer": 1,
      "explanation": "O slide inclui sinais de meio de canal e de linha de centro entre os de águas seguras."
    },
    {
      "id": "c150",
      "topic": 4,
      "page": "19",
      "question": "Qual cor e marca de tope se associam ao balizamento especial?",
      "options": [
        "Amarela e X amarelo.",
        "Verde e cilindro verde.",
        "Encarnada e cone encarnado.",
        "Preta e duas esferas pretas."
      ],
      "answer": 0,
      "explanation": "Os sinais especiais indicam áreas ou características especiais e empregam amarelo, com tope em X quando existente."
    },
    {
      "id": "c151",
      "topic": 4,
      "page": "22",
      "question": "Ao navegar por um canal estreito, qual orientação de posicionamento é dada na aula?",
      "options": [
        "Manter-se obrigatoriamente na margem a bombordo.",
        "Manter-se no centro mesmo que isso impeça outro navio.",
        "Alternar as margens a cada mudança do vento.",
        "Manter-se tão próximo quanto seguro da margem a boreste."
      ],
      "answer": 3,
      "explanation": "O material orienta manter o lado de boreste, observando segurança e perigos como pedras e bancos de areia."
    },
    {
      "id": "c152",
      "topic": 4,
      "page": "23",
      "question": "Nas hidrovias que usam o balizamento marítimo, qual é o sentido convencional indicado?",
      "options": [
        "De montante para jusante.",
        "Sempre do leste para o oeste.",
        "De jusante para montante.",
        "Sempre do norte para o sul."
      ],
      "answer": 2,
      "explanation": "O slide define a direção convencional, nesse caso, como o sentido de jusante para montante."
    },
    {
      "id": "c153",
      "topic": 5,
      "page": "7",
      "question": "Duas embarcações se aproximam com distância diminuindo e marcação quase constante. O que se deve presumir?",
      "options": [
        "O risco só existe se a marcação variar rapidamente.",
        "Existe risco de colisão.",
        "Não há risco enquanto a marcação não for zero.",
        "A aproximação já constitui uma ultrapassagem."
      ],
      "answer": 1,
      "explanation": "A Regra 7 apresentada associa aproximação com marcação praticamente constante à existência de risco."
    },
    {
      "id": "c154",
      "topic": 5,
      "page": "7",
      "question": "Segundo a aula de RIPEAM, como proceder quando houver dúvida sobre a existência de risco de colisão?",
      "options": [
        "Considerar que o risco existe.",
        "Aguardar a distância chegar a zero para decidir.",
        "Considerar que o risco inexiste.",
        "Aplicar automaticamente a regra de ultrapassagem."
      ],
      "answer": 0,
      "explanation": "A orientação da Regra 7 é presumir o risco em caso de dúvida; variação da marcação não elimina todos os casos de risco."
    },
    {
      "id": "c155",
      "topic": 5,
      "page": "11",
      "question": "Qual conjunto descreve uma manobra adequada para evitar colisão?",
      "options": [
        "Tardia, pequena e repetida em sucessivas correções.",
        "Substancial, porém iniciada somente no último instante.",
        "Antecipada, mas imperceptível à outra embarcação.",
        "Antecipada, substancial e perceptível à outra embarcação."
      ],
      "answer": 3,
      "explanation": "A Regra 8 pede uma ação positiva, ampla e feita com antecedência, visando distância segura."
    },
    {
      "id": "c156",
      "topic": 5,
      "page": "11",
      "question": "Uma manobra para evitar colisão pode empregar quais alterações, segundo o material?",
      "options": [
        "Somente aumento de velocidade, sem mudar o rumo.",
        "Somente sinais luminosos, sem alterar o movimento.",
        "Alteração de rumo e/ou velocidade.",
        "Somente alteração de rumo, mantendo sempre a velocidade."
      ],
      "answer": 2,
      "explanation": "A aula admite alteração de rumo e/ou velocidade conforme a situação e a boa marinharia."
    },
    {
      "id": "c157",
      "topic": 5,
      "page": "13",
      "question": "Em um canal estreito, qual é a orientação geral de posicionamento da embarcação?",
      "options": [
        "Exatamente no centro, independentemente do tráfego.",
        "Próxima ao limite exterior a boreste, quando seguro.",
        "Próxima ao limite exterior a bombordo, em qualquer caso.",
        "Na margem de menor profundidade, independentemente do calado."
      ],
      "answer": 1,
      "explanation": "A Regra 9 apresentada prevê manter-se a boreste, tão próximo do limite exterior quanto seguro e praticável."
    },
    {
      "id": "c158",
      "topic": 5,
      "page": "13",
      "question": "Uma lancha com menos de 20 m cruza um canal diante de navio que só pode navegar dentro dele. Qual obrigação é destacada?",
      "options": [
        "Não impedir a passagem do navio restrito ao canal.",
        "Cruzar a proa do navio mantendo a velocidade.",
        "Exigir que o navio saia do canal para lhe dar passagem.",
        "Aplicar prioridade automática por ser menor."
      ],
      "answer": 0,
      "explanation": "O comprimento reduzido não dispensa a lancha de não atrapalhar embarcações que só possam navegar dentro do canal."
    },
    {
      "id": "c159",
      "topic": 5,
      "page": "14",
      "question": "Qual conduta em relação ao fundeio em canal estreito é indicada?",
      "options": [
        "Fundear sempre no eixo para facilitar a identificação.",
        "Fundear antes de qualquer ultrapassagem.",
        "Fundear obrigatoriamente em toda curva.",
        "Evitar fundear no canal."
      ],
      "answer": 3,
      "explanation": "A Regra 9, conforme resumida na aula, orienta evitar o fundeio no canal."
    },
    {
      "id": "c160",
      "topic": 5,
      "page": "16",
      "question": "Na ultrapassagem, qual embarcação tem a obrigação de se manter fora do caminho da outra?",
      "options": [
        "A de menor comprimento, mesmo se for ultrapassada.",
        "A embarcação ultrapassada.",
        "A embarcação que ultrapassa.",
        "A de menor velocidade, mesmo se for ultrapassada."
      ],
      "answer": 2,
      "explanation": "A obrigação de manter-se fora do caminho é de quem realiza a ultrapassagem."
    },
    {
      "id": "c161",
      "topic": 5,
      "page": "16",
      "question": "Uma embarcação tem dúvida se está ultrapassando outra. Como deve tratar a situação?",
      "options": [
        "Tratar automaticamente como roda a roda.",
        "Assumir que está ultrapassando e agir como tal.",
        "Ignorar a dúvida se a sua velocidade for maior.",
        "Assumir que está sendo ultrapassada e manter prioridade."
      ],
      "answer": 1,
      "explanation": "A Regra 13 apresentada manda considerar-se alcançadora em caso de dúvida."
    },
    {
      "id": "c162",
      "topic": 5,
      "page": "18",
      "question": "Duas embarcações de propulsão mecânica estão em situação de roda a roda, com risco de colisão. Qual manobra é prevista?",
      "options": [
        "Ambas guinam para boreste, passando bombordo com bombordo.",
        "Ambas guinam para bombordo, passando boreste com boreste.",
        "Somente a embarcação mais rápida guina para bombordo.",
        "Somente a embarcação menor guina para boreste."
      ],
      "answer": 0,
      "explanation": "Na situação descrita pela Regra 14, ambas alteram o rumo para BE e passam a BB uma da outra."
    },
    {
      "id": "c163",
      "topic": 5,
      "page": "20",
      "question": "Duas embarcações de propulsão mecânica se cruzam à vista, com risco de colisão. Você avista a outra por boreste. Qual é sua obrigação?",
      "options": [
        "Aumentar a velocidade até passar adiante da proa dela.",
        "Guinar obrigatoriamente para bombordo, cruzando a proa dela.",
        "Manter a derrota e exigir que a outra manobre.",
        "Manobrar e, se possível, evitar cruzar a proa da outra."
      ],
      "answer": 3,
      "explanation": "A Regra 15 atribui a manobra à embarcação que tem a outra pelo próprio boreste, evitando cruzar-lhe a proa."
    },
    {
      "id": "c164",
      "topic": 5,
      "page": "23",
      "question": "Como deve agir a embarcação obrigada a manobrar, segundo a Regra 16 apresentada?",
      "options": [
        "Aguardar o cruzamento das proas para reduzir a velocidade.",
        "Executar apenas alterações mínimas de rumo.",
        "Agir cedo e de forma substancial para manter distância safa.",
        "Aguardar a outra embarcação iniciar sua manobra."
      ],
      "answer": 2,
      "explanation": "A ação deve ser antecipada e substancial, permitindo passagem a uma distância segura."
    },
    {
      "id": "c165",
      "topic": 5,
      "page": "24",
      "question": "Fora das exceções das Regras 9, 10 e 13, uma embarcação de propulsão mecânica deve manter-se fora do caminho de qual grupo?",
      "options": [
        "Somente navios com maior velocidade.",
        "Sem governo, manobra restrita, pesca e vela.",
        "Somente navios de maior comprimento.",
        "Somente embarcações com rumo vindo de bombordo."
      ],
      "answer": 1,
      "explanation": "A relação apresentada na Regra 18 inclui esses quatro grupos e ressalva as regras especiais citadas."
    },
    {
      "id": "c166",
      "topic": 5,
      "page": "25",
      "question": "Ressalvadas as exceções citadas na Regra 18, uma embarcação a vela em movimento deve manter-se fora do caminho de qual outra?",
      "options": [
        "Uma embarcação engajada na pesca.",
        "Qualquer embarcação de propulsão mecânica, sem exceção.",
        "Somente embarcações a vela menores que ela.",
        "Apenas embarcações que a avistem por bombordo."
      ],
      "answer": 0,
      "explanation": "A relação da aula inclui sem governo, capacidade de manobra restrita e engajada na pesca."
    },
    {
      "id": "c167",
      "topic": 5,
      "page": "26",
      "question": "Uma embarcação engajada na pesca em movimento deve, tanto quanto possível, manter-se afastada de quais embarcações?",
      "options": [
        "Apenas lanchas de recreio.",
        "Apenas veleiros em movimento.",
        "Apenas embarcações de propulsão mecânica mais velozes.",
        "Sem governo ou com capacidade de manobra restrita."
      ],
      "answer": 3,
      "explanation": "A Regra 18 resumida no slide relaciona sem governo e capacidade de manobra restrita."
    },
    {
      "id": "c168",
      "topic": 5,
      "page": "27",
      "question": "Uma embarcação restrita devido ao calado deve navegar de que modo, segundo a aula?",
      "options": [
        "Mantendo velocidade máxima para reduzir o tempo no canal.",
        "Sem observar o tráfego porque tem prioridade absoluta.",
        "Com cuidado redobrado, considerando suas condições especiais.",
        "Sempre pelo lado de bombordo para evitar embarcações pequenas."
      ],
      "answer": 2,
      "explanation": "O material exige cuidado redobrado e não atribui prioridade absoluta em qualquer circunstância."
    },
    {
      "id": "c169",
      "topic": 5,
      "page": "29",
      "question": "Em visibilidade restrita, ao detectar apenas pelo radar outra embarcação em rumo de colisão, qual é a orientação?",
      "options": [
        "Desligar o radar e utilizar somente sinais sonoros.",
        "Manobrar com antecedência para evitar o risco.",
        "Manter o rumo por ter detectado o contato primeiro.",
        "Esperar obrigatoriamente o contato visual."
      ],
      "answer": 1,
      "explanation": "A Regra 19 apresentada exige velocidade segura e ação antecipada quando a situação de aproximação perigosa é identificada."
    },
    {
      "id": "c170",
      "topic": 5,
      "page": "30",
      "question": "Em visibilidade restrita, para alvo detectado só pelo radar a vante do través, qual alteração deve ser evitada, salvo ultrapassagem?",
      "options": [
        "Guinada para bombordo.",
        "Toda alteração de rumo maior que 5°.",
        "Qualquer redução de velocidade.",
        "Guinada para boreste em qualquer situação."
      ],
      "answer": 0,
      "explanation": "O slide da Regra 19 manda evitar alteração para BB para embarcação a vante do través, salvo se estiver sendo ultrapassada."
    },
    {
      "id": "c171",
      "topic": 5,
      "page": "30",
      "question": "Em visibilidade restrita, para alvo detectado só pelo radar no través ou a ré dele, o que deve ser evitado?",
      "options": [
        "Manter vigilância dos sinais de cerração.",
        "Reduzir a velocidade da própria embarcação.",
        "Avaliar a evolução da distância.",
        "Guinar na direção do alvo."
      ],
      "answer": 3,
      "explanation": "A alteração de rumo não deve ser feita em direção à embarcação situada no través ou a ré do través."
    },
    {
      "id": "c172",
      "topic": 5,
      "page": "29-30",
      "question": "É adequado aplicar automaticamente a ideia de embarcação com preferência visual quando ambas só se detectam pelo radar em cerração?",
      "options": [
        "Sim; a embarcação a boreste sempre mantém o rumo.",
        "Sim; a embarcação maior sempre aguarda a manobra da menor.",
        "Não; devem avaliar o risco e agir conforme a Regra 19.",
        "Sim; a embarcação mais rápida conserva a preferência."
      ],
      "answer": 2,
      "explanation": "A aula enfatiza que, em visibilidade restrita sem contato visual, cada embarcação deve agir cedo conforme a Regra 19."
    },
    {
      "id": "c173",
      "topic": 6,
      "page": "7",
      "question": "Em que período as regras de luzes de navegação se aplicam normalmente?",
      "options": [
        "Apenas durante a entrada em porto.",
        "Do pôr ao nascer do Sol.",
        "Apenas após a meia-noite.",
        "Do nascer ao pôr do Sol."
      ],
      "answer": 1,
      "explanation": "A Regra 20 apresentada estabelece o emprego das luzes do pôr ao nascer do Sol."
    },
    {
      "id": "c174",
      "topic": 6,
      "page": "7",
      "question": "Durante o dia com visibilidade restrita, qual é a orientação sobre as luzes prescritas, se instaladas?",
      "options": [
        "Também devem ser exibidas.",
        "Devem ser apagadas para não confundir as marcas.",
        "Só podem ser exibidas em águas oceânicas.",
        "Só devem ser exibidas quando a embarcação está fundeada."
      ],
      "answer": 0,
      "explanation": "A Regra 20 prevê a exibição dessas luzes também entre nascer e pôr do Sol em visibilidade restrita."
    },
    {
      "id": "c175",
      "topic": 6,
      "page": "7",
      "question": "As regras referentes às marcas de navegação se aplicam a qual período?",
      "options": [
        "Somente quando a embarcação usa radar.",
        "Somente à madrugada.",
        "Somente ao período entre pôr e nascer do Sol.",
        "Ao período diurno."
      ],
      "answer": 3,
      "explanation": "O item sobre marcas no slide da Regra 20 refere-se ao período diurno."
    },
    {
      "id": "c176",
      "topic": 6,
      "page": "8",
      "question": "Quais são as cores das luzes de bordo?",
      "options": [
        "Amarela a bombordo e branca a boreste.",
        "Verde a bombordo e encarnada a boreste.",
        "Encarnada a bombordo e verde a boreste.",
        "Branca a bombordo e amarela a boreste."
      ],
      "answer": 2,
      "explanation": "A legenda da figura identifica a luz encarnada de BB e a verde de BE."
    },
    {
      "id": "c177",
      "topic": 6,
      "page": "8",
      "question": "Qual é o setor de visibilidade de cada luz de bordo, indicado na figura da aula?",
      "options": [
        "90°.",
        "112,5°.",
        "135°.",
        "225°."
      ],
      "answer": 1,
      "explanation": "Cada luz de bordo cobre 112,5°, do rumo da proa até 22,5° por ante-a-ré do través do respectivo bordo."
    },
    {
      "id": "c178",
      "topic": 6,
      "page": "8",
      "question": "Qual cor e setor caracterizam a luz de mastro mostrada na aula?",
      "options": [
        "Branca, cobrindo 225° centrados na proa.",
        "Branca, cobrindo 135° centrados na popa.",
        "Verde, cobrindo 112,5° a boreste.",
        "Encarnada, cobrindo 360°."
      ],
      "answer": 0,
      "explanation": "O esquema apresenta luz de mastro branca e arco de 225°."
    },
    {
      "id": "c179",
      "topic": 6,
      "page": "8",
      "question": "Uma luz circular, ou all-round light, cobre qual arco?",
      "options": [
        "135°.",
        "112,5°.",
        "225°.",
        "360°."
      ],
      "answer": 3,
      "explanation": "A luz circular é visível em todo o horizonte, conforme a legenda do slide."
    },
    {
      "id": "c180",
      "topic": 6,
      "page": "9",
      "question": "Uma embarcação de propulsão mecânica em movimento, no caso geral da Regra 23, deve exibir que conjunto?",
      "options": [
        "Apenas duas luzes circulares encarnadas.",
        "Apenas luzes de bordo, sem luz de alcançado.",
        "Luz(es) de mastro, luzes de bordo e luz de alcançado.",
        "Apenas luz de fundeio e marca esférica."
      ],
      "answer": 2,
      "explanation": "A Regra 23 relaciona luz de mastro a vante, segunda luz quando exigida, luzes de bordo e luz de alcançado."
    },
    {
      "id": "c181",
      "topic": 6,
      "page": "9",
      "question": "Em embarcação de propulsão mecânica com menos de 50 m, o que a aula diz sobre a segunda luz de mastro?",
      "options": [
        "É proibida em qualquer circunstância.",
        "Não é obrigatória, mas pode ser exibida.",
        "Substitui obrigatoriamente a luz de alcançado.",
        "É obrigatória apenas durante o dia."
      ],
      "answer": 1,
      "explanation": "O slide reproduz a possibilidade de uma embarcação inferior a 50 m exibir voluntariamente a segunda luz de mastro."
    },
    {
      "id": "c182",
      "topic": 6,
      "page": "9",
      "question": "Quando exibida, onde fica a segunda luz de mastro em relação à de vante?",
      "options": [
        "À ré e mais alta.",
        "À ré e obrigatoriamente mais baixa.",
        "No mesmo ponto e na mesma altura.",
        "À vante e mais baixa."
      ],
      "answer": 0,
      "explanation": "A disposição indicada é à ré e mais alta que a luz de mastro de vante."
    },
    {
      "id": "c183",
      "topic": 6,
      "page": "11",
      "question": "Qual cor e arco caracterizam a luz de alcançado no esquema de luzes da aula?",
      "options": [
        "Encarnada, em todo o horizonte.",
        "Verde, em setor de 112,5° a boreste.",
        "Branca, em setor de 225° centrado na proa.",
        "Branca, em setor de 135° centrado na popa."
      ],
      "answer": 3,
      "explanation": "O quadro de luzes mostra a luz de alcançado branca, cobrindo 135° pela popa."
    },
    {
      "id": "c184",
      "topic": 6,
      "page": "3",
      "question": "Ao interpretar luzes de outra embarcação, que informações elas podem ajudar a reconhecer?",
      "options": [
        "Somente o nome e o porto de registro.",
        "Somente a profundidade abaixo da quilha.",
        "Aspecto, direção e atividade da embarcação.",
        "Somente a nacionalidade da tripulação."
      ],
      "answer": 2,
      "explanation": "A aula destaca que as luzes permitem interpretar posição relativa, tamanho, direção e atividade, auxiliando a prevenção de colisões."
    },
    {
      "id": "c185",
      "topic": 7,
      "page": "7",
      "question": "Para selecionar cartas publicadas pela DHN e localizar seus índices, qual publicação é indicada?",
      "options": [
        "Almanaque Náutico.",
        "Catálogo de Cartas e Publicações.",
        "Tábuas das Marés.",
        "Lista de Auxílios-Rádio."
      ],
      "answer": 1,
      "explanation": "O catálogo reúne a relação de cartas, seus índices e as publicações e impressos de interesse da navegação."
    },
    {
      "id": "c186",
      "topic": 7,
      "page": "7",
      "question": "Na organização do Catálogo de Cartas e Publicações apresentada, o que a segunda parte contém?",
      "options": [
        "Índices com a relação detalhada de cartas de cada trecho.",
        "Somente os avisos de interdição por rádio.",
        "As posições diárias dos astros.",
        "Somente as previsões diárias de maré."
      ],
      "answer": 0,
      "explanation": "A segunda parte apresenta os índices dos trechos e a relação das cartas que os cobrem."
    },
    {
      "id": "c187",
      "topic": 7,
      "page": "10",
      "question": "Um símbolo na carta náutica não foi reconhecido. Qual referência é específica para interpretá-lo?",
      "options": [
        "Meteoromarinha.",
        "Tábuas das Marés.",
        "Lista de Auxílios-Rádio.",
        "Carta 12.000, INT 1."
      ],
      "answer": 3,
      "explanation": "A Carta 12.000 reúne símbolos, abreviaturas e termos usados nas cartas náuticas brasileiras."
    },
    {
      "id": "c188",
      "topic": 7,
      "page": "13",
      "question": "Qual é o propósito principal dos Avisos aos Navegantes, segundo a aula?",
      "options": [
        "Registrar exclusivamente os dados dos motores.",
        "Substituir o traçado de qualquer derrota.",
        "Fornecer informações para atualizar cartas e publicações náuticas.",
        "Apresentar apenas previsões astronômicas."
      ],
      "answer": 2,
      "explanation": "Os avisos comunicam alterações e informações destinadas à atualização das cartas e publicações brasileiras."
    },
    {
      "id": "c189",
      "topic": 7,
      "page": "13",
      "question": "Qual periodicidade a aula atribui ao folheto DH21, Área Marítima e Hidrovias em Geral?",
      "options": [
        "Mensal.",
        "Quinzenal.",
        "Trimestral.",
        "Diária."
      ],
      "answer": 1,
      "explanation": "A periodicidade quinzenal corresponde ao DH21 descrito no slide; os outros folhetos possuem periodicidades próprias."
    },
    {
      "id": "c190",
      "topic": 7,
      "page": "13",
      "question": "Qual órgão elabora os Avisos aos Navegantes sob delegação da DHN, no material?",
      "options": [
        "Centro de Hidrografia da Marinha.",
        "Centro de Comunicação Social da Marinha.",
        "Capitania dos Portos de cada destino, isoladamente.",
        "Autoridade portuária de cada terminal, isoladamente."
      ],
      "answer": 0,
      "explanation": "O slide atribui a elaboração ao CHM, sob delegação da DHN."
    },
    {
      "id": "c191",
      "topic": 7,
      "page": "15",
      "question": "Na estrutura dos Avisos aos Navegantes apresentada, qual é o foco da Seção II?",
      "options": [
        "Extrato em inglês.",
        "Correções às publicações náuticas.",
        "Reproduções de trechos de cartas.",
        "Avisos-Rádio Náuticos em vigor."
      ],
      "answer": 3,
      "explanation": "A Seção II é destinada aos Avisos-Rádio Náuticos em vigor, com as exclusões explicadas no slide."
    },
    {
      "id": "c192",
      "topic": 7,
      "page": "16",
      "question": "Em qual seção dos Avisos aos Navegantes são apresentadas as correções às cartas náuticas?",
      "options": [
        "Seção IV.",
        "Seção VII.",
        "Seção III.",
        "Seção I."
      ],
      "answer": 2,
      "explanation": "A Seção III contém avisos temporários, preliminares e permanentes para atualização das cartas."
    },
    {
      "id": "c193",
      "topic": 7,
      "page": "16",
      "question": "Qual seção dos Avisos aos Navegantes trata de correções às publicações náuticas?",
      "options": [
        "Seção VIII.",
        "Seção IV.",
        "Seção II.",
        "Seção III."
      ],
      "answer": 1,
      "explanation": "A Seção IV apresenta informações destinadas à correção das publicações náuticas."
    },
    {
      "id": "c194",
      "topic": 7,
      "page": "17",
      "question": "Onde encontrar reproduções de trechos, quadros e notas a inserir nas cartas, na estrutura ensinada?",
      "options": [
        "Seção VIII dos Avisos aos Navegantes.",
        "Seção VII dos Avisos aos Navegantes.",
        "Seção I dos Avisos aos Navegantes.",
        "Seção II dos Avisos aos Navegantes."
      ],
      "answer": 0,
      "explanation": "A Seção VIII fornece as reproduções para inserção das correções nas cartas."
    },
    {
      "id": "c195",
      "topic": 7,
      "page": "19",
      "question": "Para consultar descrição da costa, demanda de portos, perigos e recursos portuários, qual publicação é mais específica?",
      "options": [
        "Almanaque Náutico.",
        "Carta 12.000.",
        "Catálogo de Cartas e Publicações.",
        "Roteiro."
      ],
      "answer": 3,
      "explanation": "Essas informações descritivas estão entre os conteúdos do Roteiro apresentados na aula."
    },
    {
      "id": "c196",
      "topic": 7,
      "page": "20",
      "question": "Qual volume do Roteiro cobre o trecho entre Cabo Calcanhar e Cabo Frio, segundo o material?",
      "options": [
        "Costa Norte.",
        "Costa Sul.",
        "Costa Leste.",
        "Rio Paraguai."
      ],
      "answer": 2,
      "explanation": "O slide delimita a Costa Leste de Calcanhar a Cabo Frio."
    },
    {
      "id": "c197",
      "topic": 7,
      "page": "22",
      "question": "Onde procurar regras locais de tráfego, limites de calado e velocidade e critérios de fundeio da jurisdição?",
      "options": [
        "Atlas de Cartas Piloto.",
        "NPCP.",
        "Carta 12.000.",
        "Almanaque Náutico."
      ],
      "answer": 1,
      "explanation": "As Normas e Procedimentos das Capitanias dos Portos incluem regras especiais e limitações locais."
    },
    {
      "id": "c198",
      "topic": 7,
      "page": "24",
      "question": "Qual é a finalidade da Lista de Auxílios-Rádio indicada na aula?",
      "options": [
        "Reunir informações sobre serviços-rádio de auxílio à navegação.",
        "Apresentar exclusivamente as alturas previstas da maré.",
        "Apresentar exclusivamente as profundidades sondadas.",
        "Reunir exclusivamente as características de faróis luminosos."
      ],
      "answer": 0,
      "explanation": "A Lista de Auxílios-Rádio reúne os serviços dessa natureza existentes na costa brasileira e no Atlântico Sul."
    },
    {
      "id": "c199",
      "topic": 7,
      "page": "26-27",
      "question": "Para estudar tendências de ventos e correntes marítimas por mês, qual publicação a aula destaca?",
      "options": [
        "Lista de Auxílios-Rádio.",
        "NPCP.",
        "Carta 12.000.",
        "Atlas de Cartas Piloto."
      ],
      "answer": 3,
      "explanation": "As cartas piloto trazem informações meteorológicas e oceanográficas úteis ao planejamento e à execução da derrota."
    },
    {
      "id": "c200",
      "topic": 7,
      "page": "27",
      "question": "Como são organizadas temporalmente as 12 cartas do Atlas de Cartas Piloto apresentado?",
      "options": [
        "Uma carta para cada estação meteorológica.",
        "Uma carta para cada dia da semana.",
        "Uma carta para cada mês do ano.",
        "Uma carta para cada hora da preamar."
      ],
      "answer": 2,
      "explanation": "O atlas descrito é composto por 12 cartas, uma por mês, em projeção de Mercator."
    },
    {
      "id": "c201",
      "topic": 7,
      "page": "30",
      "question": "Qual é o objetivo do RIPEAM, entre as publicações estudadas?",
      "options": [
        "Definir exclusivamente a simbologia cartográfica.",
        "Estabelecer regras para evitar abalroamentos entre embarcações.",
        "Catalogar as cartas publicadas pela DHN.",
        "Prever a altura de maré em cada porto."
      ],
      "answer": 1,
      "explanation": "O RIPEAM trata de manobras, luzes, marcas e sinais relacionados à prevenção de colisões."
    },
    {
      "id": "c202",
      "topic": 7,
      "page": "32",
      "question": "Qual é o propósito das Normas para a Navegação dos Navios da Marinha do Brasil apresentado?",
      "options": [
        "Padronizar procedimentos específicos de navegação dos navios da MB.",
        "Substituir a previsão meteorológica a bordo.",
        "Substituir as cartas náuticas de todos os portos.",
        "Definir exclusivamente os limites dos serviços SAR."
      ],
      "answer": 0,
      "explanation": "Essas normas complementam o manual de navegação adotado pela MB, padronizando seus procedimentos específicos."
    },
    {
      "id": "c203",
      "topic": 7,
      "page": "38",
      "question": "Para obter previsões de maré dos locais contemplados na publicação, qual recurso é apropriado?",
      "options": [
        "Catálogo de Cartas e Publicações.",
        "Carta 12.000.",
        "Lista de Auxílios-Rádio.",
        "Tábuas das Marés."
      ],
      "answer": 3,
      "explanation": "A publicação Tábuas das Marés fornece as previsões dos locais abrangidos em sua edição."
    },
    {
      "id": "c204",
      "topic": 7,
      "page": "40",
      "question": "Nas Cartas de Corrente de Maré, a que referência temporal se relacionam as setas e velocidades indicadas?",
      "options": [
        "À hora local do pôr do Sol.",
        "À hora de saída do último navio.",
        "À hora da preamar.",
        "À hora de emissão do aviso meteorológico."
      ],
      "answer": 2,
      "explanation": "A aula informa que as direções e velocidades de corrente são referidas à hora da preamar (PM)."
    },
    {
      "id": "c205",
      "topic": 8,
      "page": "5",
      "question": "Qual atividade deve anteceder a saída para uma viagem, segundo a aula de planejamento?",
      "options": [
        "Traçado da derrota apenas após a primeira guinada.",
        "Estudo detalhado da área e planejamento da derrota.",
        "Seleção das cartas somente depois da saída do porto.",
        "Definição dos pontos de inflexão ao final da viagem."
      ],
      "answer": 1,
      "explanation": "O planejamento inclui estudar previamente a área de navegação e os documentos pertinentes."
    },
    {
      "id": "c206",
      "topic": 8,
      "page": "5",
      "question": "Quais cartas devem ser consideradas no planejamento da derrota?",
      "options": [
        "De escalas variadas, das gerais às de pequenos trechos e aproximações.",
        "Somente cartas gerais, independentemente da proximidade de perigos.",
        "Somente cartas de pequeno detalhe, sem visão da área total.",
        "Somente a carta de maior extensão disponível, mesmo desatualizada."
      ],
      "answer": 0,
      "explanation": "A aula destaca a combinação de cartas de diferentes escalas, apropriadas às etapas da derrota."
    },
    {
      "id": "c207",
      "topic": 8,
      "page": "5",
      "question": "Que conjunto de documentos auxilia a avaliar marés e correntes de maré durante o planejamento?",
      "options": [
        "Apenas NPCP e relação de equipamentos.",
        "Apenas Carta 12.000 e Lista de Faróis.",
        "Apenas Catálogo de Cartas e Almanaque Náutico.",
        "Tábuas das Marés e Cartas ou Tábuas de Correntes de Maré."
      ],
      "answer": 3,
      "explanation": "O planejamento deve considerar as publicações específicas de marés e correntes citadas na aula."
    },
    {
      "id": "c208",
      "topic": 8,
      "page": "6",
      "question": "Qual recurso citado permite considerar correções recentes nas cartas e publicações usadas na derrota?",
      "options": [
        "Plano de manutenção dos motores.",
        "Lista da tripulação.",
        "Avisos aos Navegantes.",
        "Diário de máquinas."
      ],
      "answer": 2,
      "explanation": "Os Avisos aos Navegantes estão entre os documentos de planejamento e fornecem informações de atualização."
    },
    {
      "id": "c209",
      "topic": 8,
      "page": "7",
      "question": "Após traçar a derrota, que dados devem ser registrados entre os pontos de inflexão?",
      "options": [
        "Apenas a quantidade de passageiros.",
        "Rumos verdadeiros e distâncias a navegar.",
        "Somente o nome do porto de destino.",
        "Somente a potência máxima dos motores."
      ],
      "answer": 1,
      "explanation": "Os rumos verdadeiros e as distâncias entre pontos são registrados após o traçado da derrota."
    },
    {
      "id": "c210",
      "topic": 8,
      "page": "7",
      "question": "Para que serve anotar ETD e ETA previstos junto aos pontos da derrota?",
      "options": [
        "Comparar a execução com o planejamento e identificar adiantamento ou atraso.",
        "Determinar a cor dos sinais de balizamento.",
        "Substituir as coordenadas geográficas dos pontos.",
        "Dispensar a atualização da posição durante a navegação."
      ],
      "answer": 0,
      "explanation": "As previsões de passagem permitem acompanhar a evolução temporal da derrota."
    },
    {
      "id": "c211",
      "topic": 8,
      "page": "7",
      "question": "Que velocidade serve de base aos horários previstos citados na aula?",
      "options": [
        "A velocidade máxima nominal, em qualquer situação.",
        "A velocidade da corrente, sem considerar a embarcação.",
        "A intensidade do vento, independentemente da embarcação.",
        "A velocidade de avanço planejada, ou SOA."
      ],
      "answer": 3,
      "explanation": "A SOA é a velocidade de avanço estabelecida no planejamento e usada nas previsões de horários."
    },
    {
      "id": "c212",
      "topic": 8,
      "page": "8",
      "question": "Qual conjunto deve integrar a tabela da derrota planejada?",
      "options": [
        "Somente a identificação dos tripulantes de serviço.",
        "Somente a relação de faróis avistados na viagem anterior.",
        "Coordenadas, rumos, distâncias, horários e duração das singraduras.",
        "Apenas os horários de manutenção dos equipamentos."
      ],
      "answer": 2,
      "explanation": "A tabela organiza os dados da derrota e observações relevantes para sua execução."
    },
    {
      "id": "c213",
      "topic": 8,
      "page": "8",
      "question": "Antes do briefing da derrota, a tabela e as cartas com o traçado devem ser submetidas a quem, conforme a aula?",
      "options": [
        "Apenas à equipe do porto de destino.",
        "Ao Encarregado, para aprovação.",
        "Somente ao responsável pelo abastecimento.",
        "Somente ao primeiro passageiro embarcado."
      ],
      "answer": 1,
      "explanation": "O material prevê aprovação pelo Encarregado antes do briefing com os tripulantes envolvidos."
    },
    {
      "id": "c214",
      "topic": 8,
      "page": "7",
      "question": "Numa perna de 12 MN, adotando SOA constante de 8 nós, sem outros atrasos, qual é a duração prevista?",
      "options": [
        "1 h 30 min.",
        "1 h 40 min.",
        "2 h 00 min.",
        "1 h 20 min."
      ],
      "answer": 0,
      "explanation": "Duração = distância ÷ velocidade = 12 ÷ 8 = 1,5 h, isto é, 1 h 30 min. É uma aplicação do planejamento por SOA."
    },
    {
      "id": "c215",
      "topic": 9,
      "page": "7",
      "question": "Que fator organiza os tipos principais de navegação apresentados?",
      "options": [
        "O número de motores instalados.",
        "Apenas a nacionalidade da embarcação.",
        "Apenas a marca do equipamento de navegação.",
        "Distância da costa ou do perigo mais próximo."
      ],
      "answer": 3,
      "explanation": "A classificação apresentada considera a distância da costa ou do perigo e as restrições à manobra."
    },
    {
      "id": "c216",
      "topic": 9,
      "page": "7",
      "question": "Qual situação caracteriza navegação em águas restritas?",
      "options": [
        "Navegação em qualquer área com comunicação por satélite.",
        "Navegação obrigatoriamente além de 50 MN da costa.",
        "Manobra limitada pela costa, topografia submarina ou proximidade de perigos.",
        "Navegação realizada exclusivamente com observação dos astros."
      ],
      "answer": 2,
      "explanation": "Portos, canais e proximidades de perigos limitam a liberdade de manobra e caracterizam águas restritas."
    },
    {
      "id": "c217",
      "topic": 9,
      "page": "7",
      "question": "Que característica física da embarcação é destacada ao avaliar navegação em águas restritas?",
      "options": [
        "Número de antenas.",
        "Calado.",
        "Tipo de pintura do convés.",
        "Cor do casco."
      ],
      "answer": 1,
      "explanation": "A aula destaca o calado ao relacionar características da embarcação à configuração da costa e do fundo."
    },
    {
      "id": "c218",
      "topic": 9,
      "page": "8",
      "question": "Segundo a classificação didática da aula, navegar a menos de 3 MN da costa ou de um perigo exige qual tipo de navegação?",
      "options": [
        "Em águas restritas.",
        "Astronômica.",
        "Oceânica.",
        "Transoceânica."
      ],
      "answer": 0,
      "explanation": "O slide associa distância inferior a 3 MN à navegação em águas restritas, que exige maior precisão."
    },
    {
      "id": "c219",
      "topic": 9,
      "page": "8",
      "question": "Uma embarcação está a 10 MN da costa, em 80 m de profundidade e sem perigos próximos. Em qual tipo se enquadra na classificação da aula?",
      "options": [
        "Em águas restritas, apenas por estar a menos de 50 MN.",
        "Oceânica.",
        "Astronômica, independentemente do método empregado.",
        "Costeira."
      ],
      "answer": 3,
      "explanation": "A situação está entre 3 e 50 MN da costa e dentro do limite de 200 m usado na aula para a navegação costeira."
    },
    {
      "id": "c220",
      "topic": 9,
      "page": "8",
      "question": "Uma embarcação está a 60 MN da costa, em 500 m de profundidade e sem perigos próximos. Qual tipo de navegação é indicado pela classificação da aula?",
      "options": [
        "Costeira.",
        "Visual.",
        "Oceânica.",
        "Em águas restritas."
      ],
      "answer": 2,
      "explanation": "A situação ultrapassa os limites de 50 MN e 200 m apresentados para a área costeira."
    },
    {
      "id": "c221",
      "topic": 9,
      "page": "9",
      "question": "O que distingue um método de navegação de um tipo de navegação?",
      "options": [
        "O método depende exclusivamente do comprimento do casco.",
        "O método trata dos meios usados para determinar posição e dirigir os movimentos.",
        "O método é definido somente pela distância da costa.",
        "O método é definido somente pela profundidade local."
      ],
      "answer": 1,
      "explanation": "Tipos classificam a situação de navegação; métodos descrevem como se obtêm posições e se conduzem os movimentos."
    },
    {
      "id": "c222",
      "topic": 9,
      "page": "9",
      "question": "Qual método usa observações de pontos em terra e auxílios representados na carta?",
      "options": [
        "Navegação visual.",
        "Navegação estimada.",
        "Navegação astronômica.",
        "Navegação exclusivamente por satélite."
      ],
      "answer": 0,
      "explanation": "O método visual determina a posição a partir de observações de referências reconhecidas na carta."
    },
    {
      "id": "c223",
      "topic": 9,
      "page": "9",
      "question": "Qual método determina a posição por observações dos astros?",
      "options": [
        "Navegação radar.",
        "Navegação visual costeira.",
        "Navegação estimada.",
        "Navegação astronômica."
      ],
      "answer": 3,
      "explanation": "A posição obtida por observação de astros corresponde ao método astronômico."
    },
    {
      "id": "c224",
      "topic": 9,
      "page": "10",
      "question": "Determinar a posição com radar ou GNSS corresponde a qual método?",
      "options": [
        "Navegação estimada sem correções.",
        "Navegação visual por alinhamentos.",
        "Navegação eletrônica.",
        "Navegação astronômica."
      ],
      "answer": 2,
      "explanation": "Radar e sistemas de navegação por satélite são os exemplos de navegação eletrônica citados na aula."
    },
    {
      "id": "c225",
      "topic": 9,
      "page": "10",
      "question": "Qual conjunto serve à navegação estimada apresentada?",
      "options": [
        "Somente a posição de um astro, sem tempo observado.",
        "Posição conhecida, rumo, velocidade, tempo e corrente, se conhecida.",
        "Apenas a cor e a altura dos sinais laterais.",
        "Somente o nome do porto e a fase da Lua."
      ],
      "answer": 1,
      "explanation": "A estimada prevê a posição futura a partir dos dados de movimento e da corrente, quando disponível."
    },
    {
      "id": "c226",
      "topic": 9,
      "page": "3,9-10",
      "question": "É possível usar mais de um método em um mesmo tipo de navegação?",
      "options": [
        "Sim, combinando métodos conforme condições e necessidade de precisão.",
        "Não, cada tipo admite exclusivamente um método.",
        "Sim, mas apenas em navegação oceânica.",
        "Não, navegação costeira admite somente o método visual."
      ],
      "answer": 0,
      "explanation": "O material admite um ou mais métodos e relaciona sua escolha às condições meteorológicas, aos recursos e à precisão necessária."
    },
    {
      "id": "c227",
      "topic": 10,
      "page": "7",
      "question": "Na orientação de entrada e saída de porto da aula, qual condição exige navegação em águas restritas?",
      "options": [
        "Somente distância superior a 50 MN da costa.",
        "Somente ausência de tráfego na área.",
        "Somente profundidade superior a 200 m.",
        "Perigo a menos de 3 MN ou profundidade local inferior a 20 m."
      ],
      "answer": 3,
      "explanation": "O slide apresenta os critérios de proximidade de perigo e pouca profundidade para a adoção dessa navegação."
    },
    {
      "id": "c228",
      "topic": 10,
      "page": "7",
      "question": "Na orientação geral do slide sobre águas restritas, qual intervalo e precisão são indicados para as posições?",
      "options": [
        "A cada 30 minutos, com precisão de 1 MN.",
        "A cada 20 minutos, com precisão de 500 jardas.",
        "A cada 2 minutos, com precisão de 50 jardas.",
        "A cada hora, com precisão de 3 MN."
      ],
      "answer": 2,
      "explanation": "O slide 7 indica 2 minutos e 50 jds; a orientação específica de cruzamento de marcações é detalhada separadamente no slide 8."
    },
    {
      "id": "c229",
      "topic": 10,
      "page": "7",
      "question": "Qual preparação da equipe é indicada antes da navegação de entrada ou saída de porto?",
      "options": [
        "Definir a derrota apenas depois da desatracação.",
        "Realizar briefing de navegação.",
        "Concentrar todas as referências em um único tripulante.",
        "Distribuir os postos somente após a primeira curva."
      ],
      "answer": 1,
      "explanation": "A aula inclui briefing entre os preparativos para navegação em águas restritas."
    },
    {
      "id": "c230",
      "topic": 10,
      "page": "8",
      "question": "Por que se registram os dados de maré e a direção e intensidade da corrente?",
      "options": [
        "Para avaliar seus efeitos e compensar a corrente quando necessário.",
        "Para definir automaticamente a velocidade máxima da embarcação.",
        "Para dispensar a obtenção de posições.",
        "Para substituir a leitura das cartas náuticas."
      ],
      "answer": 0,
      "explanation": "A corrente pode deslocar a embarcação da derrota e exige avaliação e compensação do rumo."
    },
    {
      "id": "c231",
      "topic": 10,
      "page": "8",
      "question": "Como devem ser escolhidos os pontos para navegação visual na entrada de porto?",
      "options": [
        "Somente depois de passar pelo ponto de inflexão.",
        "Pela proximidade visual, mesmo sem identificação.",
        "Pela cor dos edifícios, sem consulta à carta.",
        "Por seleção prévia, antes de serem necessários à manobra."
      ],
      "answer": 3,
      "explanation": "A aula orienta selecionar antecipadamente os pontos que serão empregados na navegação visual."
    },
    {
      "id": "c232",
      "topic": 10,
      "page": "8",
      "question": "Qual é a preparação indicada para o ferro na entrada e saída de porto?",
      "options": [
        "Usá-lo obrigatoriamente em cada mudança de rumo.",
        "Desmontar o equipamento antes da aproximação.",
        "Deixá-lo pronto para largar.",
        "Mantê-lo indisponível para evitar emprego acidental."
      ],
      "answer": 2,
      "explanation": "A prontidão para largar o ferro é uma das medidas previstas; não significa emprego automático."
    },
    {
      "id": "c233",
      "topic": 10,
      "page": "8",
      "question": "Na orientação específica do slide 8, as posições por cruzamento devem usar pelo menos quantas marcações?",
      "options": [
        "Uma marcação.",
        "Três marcações.",
        "Cinco marcações obrigatoriamente.",
        "Duas marcações."
      ],
      "answer": 1,
      "explanation": "O slide orienta o cruzamento de pelo menos três marcações, em intervalos não superiores a três minutos."
    },
    {
      "id": "c234",
      "topic": 10,
      "page": "9",
      "question": "Após uma guinada, quando deve ser obtida uma nova posição?",
      "options": [
        "Assim que a embarcação estabilizar no novo rumo.",
        "Somente na próxima entrada de porto.",
        "Somente após transcorrer uma hora.",
        "Apenas se o vento estiver acima de 25 nós."
      ],
      "answer": 0,
      "explanation": "O material orienta determinar nova posição logo após estabilizar no rumo adotado."
    },
    {
      "id": "c235",
      "topic": 10,
      "page": "9",
      "question": "Na execução de uma guinada, o que deve ser verificado?",
      "options": [
        "Somente se a velocidade máxima foi atingida.",
        "Somente se o porto de destino já confirmou a chegada.",
        "Se o radar pode ser desligado durante a mudança de rumo.",
        "Se ambos os bordos estão safos e se o leme atende ao bordo e ângulo ordenados."
      ],
      "answer": 3,
      "explanation": "A aula destaca tanto a segurança dos bordos quanto a resposta correta do indicador de ângulo do leme."
    },
    {
      "id": "c236",
      "topic": 10,
      "page": "9",
      "question": "Surge uma dúvida sobre a derrota e ela permanece após a tentativa de esclarecimento. Qual providência é indicada na aula?",
      "options": [
        "Aumentar máquinas até ultrapassar a área duvidosa.",
        "Manter o rumo sem novas verificações.",
        "Parar máquinas.",
        "Guinar sempre para bombordo."
      ],
      "answer": 2,
      "explanation": "O slide orienta sanar a dúvida imediatamente e, se ela persistir, parar máquinas."
    },
    {
      "id": "c237",
      "topic": 10,
      "page": "10",
      "question": "Por que a aula recomenda manter velocidade constante nessa navegação, quando apropriado?",
      "options": [
        "Para garantir prioridade sobre outras embarcações.",
        "Para facilitar o problema de navegação e o acompanhamento da derrota.",
        "Para impedir qualquer compensação da corrente.",
        "Para dispensar a verificação do leme."
      ],
      "answer": 1,
      "explanation": "A constância da velocidade facilita as previsões e o controle da navegação; não elimina as demais obrigações de segurança."
    },
    {
      "id": "c238",
      "topic": 10,
      "page": "10",
      "question": "Em canal dragado, que posição da derrota é recomendada, respeitadas as regras de tráfego?",
      "options": [
        "À direita do centro do canal.",
        "Fora do canal, na região de menor profundidade.",
        "Alternadamente em cada margem, a cada minuto.",
        "Sempre exatamente sobre a margem de bombordo."
      ],
      "answer": 0,
      "explanation": "O slide orienta conduzir sobre derrota à direita do centro do canal, respeitando mão e contramão."
    },
    {
      "id": "c239",
      "topic": 11,
      "page": "7",
      "question": "Qual situação é abrangida pela navegação em baixa visibilidade descrita na aula?",
      "options": [
        "Somente a passagem noturna com horizonte claramente visível.",
        "Apenas navegação além de 50 MN da costa com tempo bom.",
        "Qualquer navegação em que não se use GNSS.",
        "Nevoeiro, cerração ou aguaceiros que impedem avistar navios ou perigos."
      ],
      "answer": 3,
      "explanation": "O slide relaciona baixa visibilidade a condições que impedem o avistamento de contatos ou perigos, como nevoeiro e aguaceiros fortes."
    },
    {
      "id": "c240",
      "topic": 11,
      "page": "7",
      "question": "Em baixa visibilidade, como deve ser preparada a navegação costeira ou em águas restritas?",
      "options": [
        "Com abandono das cartas e uso exclusivo da escuta.",
        "Com redução da frequência das verificações de posição.",
        "Com planejamento detalhado de uma derrota predeterminada e controle preciso.",
        "Com escolha da derrota somente após encontrar um obstáculo."
      ],
      "answer": 2,
      "explanation": "A aula exige planejamento cuidadoso para seguir a derrota com precisão nas áreas mais restritivas."
    },
    {
      "id": "c241",
      "topic": 11,
      "page": "8",
      "question": "Qual método recebe prioridade na orientação da aula para baixa visibilidade?",
      "options": [
        "Navegação exclusivamente visual, sem instrumentos.",
        "Navegação radar, usando também os demais recursos disponíveis.",
        "Navegação apenas pelo ouvido, dispensando o radar.",
        "Navegação exclusivamente estimada, sem verificações externas."
      ],
      "answer": 1,
      "explanation": "O material dá prioridade ao radar, integrado aos recursos de navegação disponíveis."
    },
    {
      "id": "c242",
      "topic": 11,
      "page": "8",
      "question": "Que conjunto de recursos complementares é citado para uso em baixa visibilidade?",
      "options": [
        "Ecobatímetro, AIS e FLIR.",
        "Somente bússola magnética e sinais de mão.",
        "Apenas lâmpadas de cabine e buzina manual.",
        "Apenas apito, cronômetro e bandeiras."
      ],
      "answer": 0,
      "explanation": "O slide cita ecobatímetro, AIS e FLIR e determina o aproveitamento dos recursos disponíveis."
    },
    {
      "id": "c243",
      "topic": 11,
      "page": "8",
      "question": "Em baixa visibilidade, quais sinais devem ser exibidos ou emitidos conforme a aula?",
      "options": [
        "Somente marcas diurnas, em qualquer horário.",
        "Somente sinais de identificação do porto de registro.",
        "Somente sinais luminosos de chamada de prático.",
        "Luzes de navegação e sinais sonoros previstos no RIPEAM."
      ],
      "answer": 3,
      "explanation": "A aula determina a exibição das luzes e a emissão dos sinais sonoros pertinentes à situação."
    },
    {
      "id": "c244",
      "topic": 11,
      "page": "8",
      "question": "Qual regra do RIPEAM é citada na aula para os sinais sonoros em visibilidade restrita?",
      "options": [
        "Regra 7.",
        "Regra 13.",
        "Regra 35.",
        "Regra 23."
      ],
      "answer": 2,
      "explanation": "O slide remete à Regra 35 para os sinais sonoros nessa condição."
    },
    {
      "id": "c245",
      "topic": 11,
      "page": "8",
      "question": "Segundo a orientação específica do slide, como deve ser ajustado o alcance do radar em baixa visibilidade?",
      "options": [
        "Somente para alcance transoceânico.",
        "Para curta distância.",
        "Sempre para o maior alcance disponível.",
        "Com a tela desligada durante os sinais sonoros."
      ],
      "answer": 1,
      "explanation": "A orientação de curta distância visa acompanhar os contatos próximos, sem dispensar os demais recursos e avaliações de tráfego."
    },
    {
      "id": "c246",
      "topic": 11,
      "page": "8",
      "question": "No caso descrito na aula de alvo próximo com tendência a cruzar a proa, qual ação é indicada ao Oficial de Quarto?",
      "options": [
        "Parar máquinas.",
        "Aguardar obrigatoriamente o contato visual.",
        "Desligar o radar para melhorar a escuta.",
        "Aumentar máquinas para cruzar a proa do alvo."
      ],
      "answer": 0,
      "explanation": "O slide destaca parar máquinas nessa situação específica de risco próximo à proa."
    },
    {
      "id": "c247",
      "topic": 11,
      "page": "8",
      "question": "Por que a aula chama atenção para o sincronismo entre os sinais sonoros de dois navios?",
      "options": [
        "Ele torna o sinal do outro sempre mais intenso.",
        "Ele faz com que os dois radares deixem de funcionar.",
        "Ele altera automaticamente o rumo dos dois navios.",
        "O próprio sinal pode abafar o do outro e dificultar sua percepção."
      ],
      "answer": 3,
      "explanation": "A sobreposição dos sinais pode impedir que o contato seja ouvido; os sinais continuam sujeitos aos requisitos do RIPEAM."
    },
    {
      "id": "c248",
      "topic": 11,
      "page": "12",
      "question": "No quadro didático da aula, um sinal fraco que aumenta progressivamente é interpretado de que modo?",
      "options": [
        "Fonte próxima afastando-se.",
        "Fonte mantendo distância necessariamente constante.",
        "Fonte distante aproximando-se.",
        "Fonte distante afastando-se."
      ],
      "answer": 2,
      "explanation": "O quadro associa intensidade fraca à maior distância e aumento da intensidade à aproximação. É a interpretação didática apresentada, não uma medição exata de distância."
    },
    {
      "id": "c249",
      "topic": 12,
      "page": "7",
      "question": "Como deve ser formalizada a qualificação dos tripulantes, segundo a aula de mau tempo?",
      "options": [
        "Somente por tempo de embarque, sem registro.",
        "Por Ordem de Serviço, conforme a função desempenhada.",
        "Apenas por acordo verbal no início da missão.",
        "Apenas pela autodeclaração do tripulante."
      ],
      "answer": 1,
      "explanation": "O material prevê qualificação formal por OS e processo padronizado de acordo com a função."
    },
    {
      "id": "c250",
      "topic": 12,
      "page": "8",
      "question": "Qual é a finalidade da planilha de GRO destacada na aula?",
      "options": [
        "Apoiar a avaliação dos riscos e da exequibilidade da missão.",
        "Registrar apenas a quantidade de combustível embarcado.",
        "Substituir a inspeção e os limites operacionais do meio.",
        "Garantir que qualquer risco se torne automaticamente aceitável."
      ],
      "answer": 0,
      "explanation": "O gerenciamento de riscos orienta a decisão e as medidas de mitigação; não elimina todos os riscos."
    },
    {
      "id": "c251",
      "topic": 12,
      "page": "8",
      "question": "A GRO deve ser aplicada somente às missões com mau tempo?",
      "options": [
        "Sim, somente quando houver ondas quebrando.",
        "Não, mas apenas às missões realizadas à noite.",
        "Sim, somente depois de ocorrer um acidente.",
        "Não, a aula recomenda seu uso em todas as missões."
      ],
      "answer": 3,
      "explanation": "O slide recomenda a planilha de GRO para todas as missões, não apenas em mau tempo."
    },
    {
      "id": "c252",
      "topic": 12,
      "page": "10",
      "question": "Qual sequência de reunião da equipe é recomendada?",
      "options": [
        "Debriefing antes da saída e briefing após o regresso.",
        "Debriefing somente antes da primeira missão do ano.",
        "Briefing antes da saída e debriefing após o regresso.",
        "Briefing somente quando houver um acidente."
      ],
      "answer": 2,
      "explanation": "A aula recomenda a preparação antes de se fazer ao mar e a avaliação após o retorno."
    },
    {
      "id": "c253",
      "topic": 12,
      "page": "10",
      "question": "Quando as ferramentas meteoceanográficas devem ser utilizadas?",
      "options": [
        "Somente antes de embarcar a tripulação.",
        "No planejamento e na execução da missão.",
        "Somente se houver avaria do sistema de governo.",
        "Somente depois da chegada ao destino."
      ],
      "answer": 1,
      "explanation": "As condições podem evoluir, por isso a consulta não se limita à preparação da missão."
    },
    {
      "id": "c254",
      "topic": 12,
      "page": "10",
      "question": "Qual preparação do meio é destacada para mau tempo?",
      "options": [
        "Inspeção minuciosa e teste de propulsão e governo após desatracar.",
        "Inspeção apenas da pintura e da identificação externa.",
        "Teste de governo somente ao regressar da missão.",
        "Dispensa de testes se a embarcação operou no dia anterior."
      ],
      "answer": 0,
      "explanation": "O material relaciona confiabilidade, inspeção e teste dos sistemas essenciais à segurança."
    },
    {
      "id": "c255",
      "topic": 12,
      "page": "11",
      "question": "Qual medida é indicada para o material volante em mau tempo?",
      "options": [
        "Concentrá-lo solto junto às portas.",
        "Distribuí-lo sobre os assentos sem amarração.",
        "Colocá-lo solto no convés para facilitar o acesso.",
        "Mantê-lo devidamente peiado."
      ],
      "answer": 3,
      "explanation": "A peação evita deslocamentos do material e os riscos que eles podem provocar."
    },
    {
      "id": "c256",
      "topic": 12,
      "page": "11",
      "question": "Que orientação de proteção da tripulação é apresentada?",
      "options": [
        "Soltar os cintos sempre que a embarcação acelerar.",
        "Concentrar a tripulação de pé em um único bordo.",
        "Usar a ligação pelo cinto de segurança ou permanecer sentado com o cinto afivelado.",
        "Circular livremente sem pontos de apoio durante as ondas."
      ],
      "answer": 2,
      "explanation": "O slide orienta os tripulantes a permanecerem talingados ou sentados com os cintos afivelados."
    },
    {
      "id": "c257",
      "topic": 12,
      "page": "11",
      "question": "Quanto a portas, escotilhas e ventilações de compartimentos habitáveis, qual medida é prevista na aula?",
      "options": [
        "Abrir as de ambos os bordos para equilibrar o vento.",
        "Fechá-las para enfrentar as condições de mau tempo.",
        "Mantê-las abertas para acompanhar a direção das ondas.",
        "Remover suas vedações antes de entrar na arrebentação."
      ],
      "answer": 1,
      "explanation": "A aula inclui o fechamento dessas aberturas entre os procedimentos de segurança."
    },
    {
      "id": "c258",
      "topic": 12,
      "page": "13",
      "question": "Na entrada descrita na aula de mau tempo, qual orientação sobre as ondas é destacada?",
      "options": [
        "Evitar navegar paralelamente às ondas.",
        "Navegar sempre paralelamente às ondas.",
        "Ignorar as ondas quando o vento estiver fraco.",
        "Definir a direção apenas pela esteira do próprio barco."
      ],
      "answer": 0,
      "explanation": "O slide ressalta conhecer a direção relativa das ondas e do vento e não navegar paralelo às ondas."
    },
    {
      "id": "c259",
      "topic": 12,
      "page": "13",
      "question": "Que orientação é apresentada para a aproximação de uma onda na entrada descrita?",
      "options": [
        "Demandá-la de qualquer ângulo, desde que a velocidade seja máxima.",
        "Demandá-la sempre pela popa e com motores parados.",
        "Demandá-la sempre de través e na maior velocidade.",
        "Demandá-la aproximadamente na diagonal, a 45°, evitando alta velocidade."
      ],
      "answer": 3,
      "explanation": "O slide sugere cerca de 45° para evitar que a embarcação seja lançada, na situação de entrada discutida."
    },
    {
      "id": "c260",
      "topic": 12,
      "page": "13-14",
      "question": "Qual é a ideia central da regulagem de velocidade na entrada com ondas, conforme a aula?",
      "options": [
        "Variar apenas com base na quantidade de combustível.",
        "Manter sempre a potência máxima, independentemente da onda.",
        "Ajustá-la ao momento da onda e à manutenção do controle.",
        "Reduzir sempre ao mínimo, mesmo se houver perda de controle."
      ],
      "answer": 2,
      "explanation": "Os slides rejeitam tanto alta velocidade inadequada quanto velocidade tão baixa que prejudique o controle."
    },
    {
      "id": "c261",
      "topic": 12,
      "page": "19",
      "question": "Se for necessário manter posição nas condições descritas na aula, qual procedimento é indicado?",
      "options": [
        "Manter o través para as ondas e parar os motores.",
        "Aproar as ondas e dosar as máquinas para manter alinhamento e controle.",
        "Manter a popa fixa para as ondas e desligar o governo.",
        "Ficar perpendicular ao vento sem considerar as ondas."
      ],
      "answer": 1,
      "explanation": "O slide orienta aproar as ondas e usar as manetes e os motores para manter o alinhamento."
    },
    {
      "id": "c262",
      "topic": 12,
      "page": "22",
      "question": "Na saída descrita, se a embarcação estiver mais rápida que a onda, qual manobra pode reduzir seu avanço?",
      "options": [
        "Guinadas em zigue-zague, conforme a situação.",
        "Parada obrigatória dos dois motores em qualquer posição.",
        "Guinada fixa de 180°, independentemente da onda.",
        "Aceleração contínua em linha reta, sem considerar a onda."
      ],
      "answer": 0,
      "explanation": "A aula cita o zigue-zague para reduzir o avanço relativo, exigindo atenção ao momento de guinar e ao alinhamento com as ondas."
    },
    {
      "id": "c263",
      "topic": 13,
      "page": "7",
      "question": "O que a meteorologia marítima acompanha e prevê, segundo a aula?",
      "options": [
        "Somente o movimento astronômico dos planetas.",
        "Exclusivamente a variação diária do calado.",
        "Somente o tráfego de navios mercantes.",
        "Condições atmosféricas e estado do mar."
      ],
      "answer": 3,
      "explanation": "A definição inclui o acompanhamento das condições reinantes e a previsão do estado do mar."
    },
    {
      "id": "c264",
      "topic": 13,
      "page": "7",
      "question": "O que é uma METAREA?",
      "options": [
        "Área de manutenção exclusiva de uma embarcação.",
        "Distância máxima de alcance do radar costeiro.",
        "Área marítima de responsabilidade de um país para previsões e avisos meteorológicos.",
        "Região limitada apenas pela autonomia de uma aeronave."
      ],
      "answer": 2,
      "explanation": "A METAREA organiza a responsabilidade pela elaboração e disseminação das previsões e avisos de mau tempo."
    },
    {
      "id": "c265",
      "topic": 13,
      "page": "8",
      "question": "A quem a aula atribui a operação do Serviço Meteorológico Marinho no Brasil?",
      "options": [
        "Aos clubes náuticos, por rodízio mensal.",
        "À Marinha do Brasil, por meio do CHM.",
        "À autoridade de cada terminal, isoladamente.",
        "À empresa de telefonia usada pela embarcação."
      ],
      "answer": 1,
      "explanation": "O material atribui a responsabilidade à MB, por meio do Centro de Hidrografia da Marinha."
    },
    {
      "id": "c266",
      "topic": 13,
      "page": "8",
      "question": "Além de produzir e divulgar análises e previsões, qual atividade integra o SMM descrito?",
      "options": [
        "Estimular a coleta de dados meteorológicos pelos navios.",
        "Emitir apenas os documentos de propriedade dos navios.",
        "Homologar exclusivamente motores de propulsão.",
        "Definir os preços dos serviços portuários."
      ],
      "answer": 0,
      "explanation": "O serviço também incentiva a observação e a coleta de dados meteorológicos a bordo."
    },
    {
      "id": "c267",
      "topic": 13,
      "page": "10",
      "question": "Qual METAREA aparece no mapa da área de responsabilidade brasileira apresentado na aula?",
      "options": [
        "METAREA I.",
        "METAREA XV.",
        "METAREA VII.",
        "METAREA V."
      ],
      "answer": 3,
      "explanation": "O mapa regional está identificado como METAREA V."
    },
    {
      "id": "c268",
      "topic": 13,
      "page": "11",
      "question": "Quais horários de referência do Meteoromarinha são apresentados no material?",
      "options": [
        "0800 e 2000, obrigatoriamente no horário local do porto.",
        "0600 e 1800, obrigatoriamente no horário local do porto.",
        "0000 e 1200 HMG.",
        "0300 e 1500 HMG."
      ],
      "answer": 2,
      "explanation": "A aula apresenta dois boletins diários com referências 0000 e 1200 HMG."
    },
    {
      "id": "c269",
      "topic": 13,
      "page": "11",
      "question": "Qual alcance de previsão é apresentado para o Meteoromarinha?",
      "options": [
        "Exclusivamente os próximos sete dias.",
        "As próximas 24 ou 48 horas.",
        "Somente o próximo mês.",
        "Somente os próximos 30 minutos."
      ],
      "answer": 1,
      "explanation": "O slide descreve previsões para 24 ou 48 horas."
    },
    {
      "id": "c270",
      "topic": 13,
      "page": "13",
      "question": "O que é uma carta sinótica, conforme a aula?",
      "options": [
        "Mapa de elementos meteorológicos e oceanográficos e do campo de pressão em horário de referência.",
        "Tabela exclusiva de alturas de maré de um porto.",
        "Plano de distribuição de equipes em uma busca.",
        "Catálogo de símbolos de equipamentos de salvatagem."
      ],
      "answer": 0,
      "explanation": "A carta sinótica representa graficamente a situação analisada para um horário definido."
    },
    {
      "id": "c271",
      "topic": 13,
      "page": "14",
      "question": "Na simbologia da carta sinótica apresentada, o que indicam as letras A e B?",
      "options": [
        "Área proibida e área liberada, respectivamente.",
        "Água profunda e baixio, respectivamente.",
        "Alvorada e boreste, respectivamente.",
        "Alta pressão e baixa pressão, respectivamente."
      ],
      "answer": 3,
      "explanation": "A legenda associa A à alta pressão e B à baixa pressão."
    },
    {
      "id": "c272",
      "topic": 13,
      "page": "14",
      "question": "Na legenda da carta sinótica, qual símbolo caracteriza uma frente fria?",
      "options": [
        "Linha apenas com a letra A repetida.",
        "Linha com semicírculos.",
        "Linha com triângulos.",
        "Linha com círculos completos."
      ],
      "answer": 2,
      "explanation": "A legenda mostra triângulos para frente fria e semicírculos para frente quente."
    },
    {
      "id": "c273",
      "topic": 13,
      "page": "15",
      "question": "Qual é a finalidade de um Aviso de Mau Tempo, segundo a aula?",
      "options": [
        "Autorizar automaticamente qualquer operação no mar.",
        "Alertar antecipadamente sobre condições ambientais capazes de oferecer risco à navegação.",
        "Registrar apenas condições observadas depois do fim da viagem.",
        "Substituir os limites operacionais de cada embarcação."
      ],
      "answer": 1,
      "explanation": "É uma mensagem formal de alerta, emitida com a máxima antecedência possível."
    },
    {
      "id": "c274",
      "topic": 13,
      "page": "15",
      "question": "Segundo os critérios apresentados na aula, qual força de vento já pode motivar aviso para áreas costeiras?",
      "options": [
        "Força 7, igual ou superior a 28 nós.",
        "Somente força 10, acima de 48 nós.",
        "Apenas força 3, independentemente de outros fatores.",
        "Somente força 12."
      ],
      "answer": 0,
      "explanation": "O slide estabelece força 7 ou superior para áreas costeiras e força 8 ou superior para áreas oceânicas."
    },
    {
      "id": "c275",
      "topic": 13,
      "page": "16",
      "question": "Quais alturas significativas de onda são indicadas como critérios de aviso para área costeira e oceânica, respectivamente?",
      "options": [
        "2 m e 2,5 m.",
        "1 m e 2 m.",
        "5 m e 6 m.",
        "3 m e 4 m."
      ],
      "answer": 3,
      "explanation": "A aula apresenta 3 m na área costeira e 4 m na área oceânica."
    },
    {
      "id": "c276",
      "topic": 13,
      "page": "16",
      "question": "Que condição de visibilidade é indicada entre os critérios de Aviso de Mau Tempo da aula?",
      "options": [
        "Somente acima de 20 km.",
        "Abaixo de 10 MN.",
        "Abaixo de 1 km.",
        "Exatamente 5 MN, sem considerar outras condições."
      ],
      "answer": 2,
      "explanation": "O material cita visibilidade restrita abaixo de 1 km."
    },
    {
      "id": "c277",
      "topic": 13,
      "page": "16",
      "question": "Para ressaca atingindo a costa, qual altura significativa mínima de onda aparece na aula como critério de aviso?",
      "options": [
        "6,0 m.",
        "2,5 m.",
        "1,0 m.",
        "0,5 m."
      ],
      "answer": 1,
      "explanation": "O critério apresentado para ondas de ressaca atingindo a costa é altura significativa igual ou superior a 2,5 m."
    },
    {
      "id": "c278",
      "topic": 13,
      "page": "18",
      "question": "Uma operação SAR necessita de previsão mais detalhada para uma pequena área. Qual produto é indicado?",
      "options": [
        "Previsão especial para área e finalidade específicas.",
        "Somente o atlas mensal de cartas piloto.",
        "Apenas a previsão climatológica anual.",
        "Somente a lista de símbolos cartográficos."
      ],
      "answer": 0,
      "explanation": "A previsão especial atende operações como socorro e salvamento com detalhamento espacial ou temporal adicional."
    },
    {
      "id": "c279",
      "topic": 13,
      "page": "20",
      "question": "Na rotina descrita na aula, com que antecedência a solicitação de BPME deve ser enviada ao CHM?",
      "options": [
        "Exatamente uma hora após a desatracação.",
        "Somente depois do regresso da comissão.",
        "Somente no dia em que o boletim deixar de ser necessário.",
        "Três dias antes do início da comissão."
      ],
      "answer": 3,
      "explanation": "A aula informa solicitação com três dias de antecedência e primeiro envio dois dias antes da comissão."
    },
    {
      "id": "c280",
      "topic": 13,
      "page": "22",
      "question": "Qual conjunto de informações é reunido pelo aplicativo Boletim ao Mar descrito no material?",
      "options": [
        "Apenas o cadastro comercial das embarcações.",
        "Somente os horários de transporte da tripulação.",
        "Boletins meteorológicos, avisos, cartas sinóticas e informações náuticas e SAR.",
        "Somente os preços de combustíveis dos portos."
      ],
      "answer": 2,
      "explanation": "A finalidade apresentada é reunir informações de segurança marítima e apoio à decisão dos navegantes."
    },
    {
      "id": "c281",
      "topic": 14,
      "page": "2",
      "question": "Qual é a finalidade do treinamento para avarias operacionais destacada na aula?",
      "options": [
        "Substituir as inspeções de manutenção por avaliações verbais.",
        "Preparar resposta rápida e reduzir danos à tripulação e à embarcação.",
        "Dispensar a distribuição prévia de tarefas.",
        "Eliminar a necessidade de conhecer os equipamentos."
      ],
      "answer": 1,
      "explanation": "Exercícios e familiarização tornam a tripulação mais preparada para prevenir, combater e reparar avarias."
    },
    {
      "id": "c282",
      "topic": 14,
      "page": "7",
      "question": "No caso de avaria chamado de fora de leme na aula, qual é a característica principal?",
      "options": [
        "O leme não atende aos comandos do timoneiro por falha no sistema de governo.",
        "A velocidade aumenta sem alteração das manetes.",
        "O sistema está normal, mas a visibilidade está reduzida.",
        "O radar perde a identificação dos contatos."
      ],
      "answer": 0,
      "explanation": "Fora de leme é a falha de resposta do sistema de governo aos comandos."
    },
    {
      "id": "c283",
      "topic": 14,
      "page": "7",
      "question": "No caso didático de sistema de governo funcionando, mas com fluxo insuficiente sobre a porta do leme, qual é a causa da perda de efeito descrita?",
      "options": [
        "Mau ajuste exclusivo do radar de navegação.",
        "Excesso obrigatório de pressão hidráulica no circuito.",
        "Erro obrigatório na identificação do balizamento.",
        "Velocidade na superfície insuficiente para produzir ação eficaz do leme."
      ],
      "answer": 3,
      "explanation": "O slide diferencia a insuficiência de fluxo da avaria no sistema de governo; são causas distintas da perda de resposta."
    },
    {
      "id": "c284",
      "topic": 14,
      "page": "8",
      "question": "Como a avaria de governo deve ser comunicada, conforme a aula?",
      "options": [
        "Aguardar o regresso para comunicar.",
        "Informá-la apenas no próximo relatório mensal.",
        "Disseminá-la no fonoclama.",
        "Mantê-la restrita ao timoneiro até a chegada ao porto."
      ],
      "answer": 2,
      "explanation": "A disseminação imediata permite coordenar as providências da tripulação."
    },
    {
      "id": "c285",
      "topic": 14,
      "page": "8",
      "question": "Qual conjunto de ações é listado para fora de leme?",
      "options": [
        "Aumentar a velocidade sem considerar o tráfego ou os perigos.",
        "Manobrar com máquinas, ajustar a velocidade e considerar a estação alternativa.",
        "Manter a velocidade máxima e suspender as comunicações.",
        "Parar todos os equipamentos elétricos sem avaliar a área."
      ],
      "answer": 1,
      "explanation": "O slide reúne manobra com máquinas, velocidade compatível, governo alternativo e preparação para fundear, se necessário e possível."
    },
    {
      "id": "c286",
      "topic": 14,
      "page": "8",
      "question": "O que significa transferir o governo para a estação alternativa no caso apresentado?",
      "options": [
        "Passar a comandá-lo por um controle local disponível.",
        "Mudar a derrota apenas no receptor GNSS.",
        "Transferir a posição do navio para uma carta menor.",
        "Desligar definitivamente o sistema de governo."
      ],
      "answer": 0,
      "explanation": "A aula identifica a estação alternativa como controle local para assumir o governo."
    },
    {
      "id": "c287",
      "topic": 14,
      "page": "9",
      "question": "Que verificação deve preceder a efetiva transferência para a estação alternativa?",
      "options": [
        "Confirmar somente a cor das luzes de navegação.",
        "Testar apenas o equipamento de comunicações por satélite.",
        "Aguardar a atracação sem testar a estação.",
        "Testar a resposta do leme para ambos os bordos e os demais controles previstos."
      ],
      "answer": 3,
      "explanation": "A estação que assumirá precisa demonstrar resposta aos comandos, inclusive carregamento do leme para os dois bordos."
    },
    {
      "id": "c288",
      "topic": 14,
      "page": "9",
      "question": "Por que empregar fraseologia padrão durante a transferência de governo?",
      "options": [
        "Para dispensar a confirmação da resposta do leme.",
        "Para abreviar qualquer ordem mesmo que fique incompreensível.",
        "Para evitar dúvidas na transmissão e execução das ordens.",
        "Para substituir os testes da estação alternativa."
      ],
      "answer": 2,
      "explanation": "A padronização reduz ambiguidades entre os militares envolvidos nas ordens de governo."
    },
    {
      "id": "c289",
      "topic": 14,
      "page": "10",
      "question": "Na perda de propulsão, a ordem de largar o ferro deve ser automática?",
      "options": [
        "Sim; deve preceder qualquer comunicação de avaria.",
        "Não; depende de uma avaliação rápida da situação e das ações necessárias.",
        "Não; o ferro nunca pode ser empregado em emergência.",
        "Sim; deve ocorrer em toda emergência sem avaliar o entorno."
      ],
      "answer": 1,
      "explanation": "O slide ressalta que o emprego do ferro exige exame abreviado da situação e pode ser precedido de outras ações."
    },
    {
      "id": "c290",
      "topic": 14,
      "page": "11",
      "question": "Qual é o propósito dos checklists de avarias operacionais?",
      "options": [
        "Evitar omissões e agilizar a execução correta das providências.",
        "Eliminar a necessidade de exercícios e familiarização.",
        "Registrar apenas os procedimentos após o fim da emergência.",
        "Substituir o conhecimento dos sistemas por memorização de títulos."
      ],
      "answer": 0,
      "explanation": "Os checklists ajudam a não esquecer etapas e a executar os procedimentos de forma precisa e rápida."
    },
    {
      "id": "c291",
      "topic": 15,
      "page": "6",
      "question": "Na determinação da deriva apresentada na aula SAR, como se obtém o vetor resultante?",
      "options": [
        "Pela média aritmética entre velocidade do vento e da embarcação.",
        "Pela subtração da visibilidade do valor da corrente.",
        "Pela soma apenas dos valores numéricos dos rumos.",
        "Pela soma vetorial da corrente de água total e do abatimento."
      ],
      "answer": 3,
      "explanation": "Corrente e leeway têm intensidade e direção; suas componentes são combinadas vetorialmente."
    },
    {
      "id": "c292",
      "topic": 15,
      "page": "7",
      "question": "Qual fonte aparece em primeiro lugar na prioridade de obtenção da corrente de água total (TWC)?",
      "options": [
        "Apenas a direção do vento informada pelo porto.",
        "Carta piloto, antes de qualquer observação local.",
        "Boias marcadoras de datum, DMB.",
        "Apenas estimativa pelo número de pessoas na balsa."
      ],
      "answer": 2,
      "explanation": "A lista da aula prioriza as DMB, seguidas de outras informações e observações da área."
    },
    {
      "id": "c293",
      "topic": 15,
      "page": "7",
      "question": "Entre informações de embarcações próximas e carta piloto, qual tem maior prioridade na lista da aula para a corrente?",
      "options": [
        "Nenhuma delas aparece entre as fontes apresentadas.",
        "Informações de embarcações próximas da área do incidente.",
        "Carta piloto, por ser uma publicação impressa.",
        "As duas têm prioridade inferior à cor da balsa."
      ],
      "answer": 1,
      "explanation": "Na ordem da aula, informações locais de embarcações antecedem a carta piloto."
    },
    {
      "id": "c294",
      "topic": 15,
      "page": "10",
      "question": "O que é abatimento, ou leeway, no planejamento SAR apresentado?",
      "options": [
        "Movimento do objeto na água causado pelo vento sobre suas estruturas expostas.",
        "Deslocamento provocado somente pela propulsão própria.",
        "Movimento provocado exclusivamente pela corrente de maré.",
        "Diferença entre hora local e hora UTC."
      ],
      "answer": 0,
      "explanation": "O abatimento representa o efeito do vento sobre a parte exposta do objeto procurado."
    },
    {
      "id": "c295",
      "topic": 15,
      "page": "10",
      "question": "Um vento é informado como vindo de 135°. No modelo de abatimento alinhado a favor do vento, para que direção atua o leeway?",
      "options": [
        "045°.",
        "135°.",
        "225°.",
        "315°."
      ],
      "answer": 3,
      "explanation": "O leeway vai para onde o vento sopra: 135° + 180° = 315°."
    },
    {
      "id": "c296",
      "topic": 15,
      "page": "11",
      "question": "Mantida a intensidade do vento no gráfico de balsas da aula, qual condição produz o maior abatimento?",
      "options": [
        "Balsa com âncora de lastro.",
        "Balsa com âncora flutuante.",
        "Balsa sem âncora flutuante.",
        "Balsa com âncora flutuante e sem cobertura."
      ],
      "answer": 2,
      "explanation": "A reta mais inclinada do gráfico corresponde à balsa sem âncora flutuante."
    },
    {
      "id": "c297",
      "topic": 15,
      "page": "12",
      "question": "O que pode constituir um datum na definição da aula SAR?",
      "options": [
        "Somente a posição do pôr do Sol.",
        "Um ponto, uma linha ou uma área geográfica de referência para a busca.",
        "Somente o endereço do Centro de Coordenação SAR.",
        "Somente o ponto em que a embarcação de busca desatracou."
      ],
      "answer": 1,
      "explanation": "O datum representa a referência relacionada à posição mais provável do objeto procurado."
    },
    {
      "id": "c298",
      "topic": 15,
      "page": "12",
      "question": "Qual é a sequência básica do planejamento de datum apresentada?",
      "options": [
        "Identificar posição e hora, calcular a deriva e propagá-la pelo atraso.",
        "Usar a hora de acionamento como posição geográfica inicial.",
        "Calcular a área e usar seu raio como se fosse a velocidade do objeto.",
        "Definir primeiro a nota de cobertura e ignorar a posição conhecida."
      ],
      "answer": 0,
      "explanation": "A posição precisa estar associada a uma hora; a deriva e o atraso permitem estimar a nova posição."
    },
    {
      "id": "c299",
      "topic": 15,
      "page": "14-15",
      "question": "No exercício 1, a balsa foi avistada às 11h de 04/04 e o navio chega às 09h de 05/04. Qual é o atraso desde o avistamento?",
      "options": [
        "17 horas.",
        "18 horas.",
        "26 horas.",
        "22 horas."
      ],
      "answer": 3,
      "explanation": "De 11h a 24h são 13 horas; somando 9 horas do dia seguinte, o atraso é de 22 horas."
    },
    {
      "id": "c300",
      "topic": 15,
      "page": "19-20",
      "question": "No exercício 2, o incidente ocorre às 10h e o navio chega às 08h do dia seguinte. Qual é o atraso?",
      "options": [
        "21 horas.",
        "23 horas.",
        "22 horas.",
        "24 horas."
      ],
      "answer": 2,
      "explanation": "Contam-se 14 horas até a meia-noite mais 8 horas no dia seguinte, totalizando 22 horas."
    },
    {
      "id": "c301",
      "topic": 15,
      "page": "19-20",
      "question": "No exercício 2, a busca ocorre das 08h às 21h30 do mesmo dia. Qual é o tempo de busca disponível nesse intervalo?",
      "options": [
        "22 h 00 min.",
        "13 h 30 min.",
        "12 h 30 min.",
        "14 h 30 min."
      ],
      "answer": 1,
      "explanation": "O intervalo entre 08h e 21h30 é de 13 h 30 min, distinto do atraso entre incidente e chegada."
    },
    {
      "id": "c302",
      "topic": 15,
      "page": "13",
      "question": "Uma deriva constante de 2 nós atua por 3 h 30 min. Qual é o deslocamento?",
      "options": [
        "7 MN.",
        "8 MN.",
        "6,6 MN.",
        "6 MN."
      ],
      "answer": 0,
      "explanation": "Converta 3 h 30 min em 3,5 horas: distância = 2 × 3,5 = 7 MN."
    },
    {
      "id": "c303",
      "topic": 15,
      "page": "6,13",
      "question": "Num exercício, a corrente é de 3 nós para 090° e o leeway é de 4 nós para 000°. Qual é a velocidade resultante da deriva?",
      "options": [
        "12 nós.",
        "7 nós.",
        "1 nó.",
        "5 nós."
      ],
      "answer": 3,
      "explanation": "As componentes são perpendiculares: velocidade = √(3² + 4²) = 5 nós."
    },
    {
      "id": "c304",
      "topic": 15,
      "page": "6",
      "question": "Corrente de 1 nó para 090° e leeway de 1 nó para 270° produzem qual resultante no modelo vetorial?",
      "options": [
        "1 nó para 180°.",
        "2 nós para 270°.",
        "Velocidade zero, sem direção única definida.",
        "2 nós para 090°."
      ],
      "answer": 2,
      "explanation": "Os vetores têm o mesmo módulo e sentidos opostos; anulam-se e não definem uma direção resultante única."
    },
    {
      "id": "c305",
      "topic": 15,
      "page": "21",
      "question": "Se o SMC ainda não forneceu um plano de busca, quem deve realizar o planejamento na cena de ação, segundo a aula?",
      "options": [
        "Apenas o observador visual, sem consultar o OSC.",
        "O OSC, até que o SMC assuma o planejamento.",
        "Apenas a embarcação de menor velocidade, sem coordenação.",
        "Ninguém, até que todos os meios regressem."
      ],
      "answer": 1,
      "explanation": "O OSC deve planejar provisoriamente quando não houver plano do SMC; as buscas começam com os meios disponíveis na cena."
    },
    {
      "id": "c306",
      "topic": 15,
      "page": "22",
      "question": "O que a largura de varredura representa no material?",
      "options": [
        "Uma medida da facilidade de detectar um objeto com um sensor e em certas condições.",
        "O raio de alcance do rádio VHF, independentemente do objeto.",
        "A distância entre o porto de origem e o datum.",
        "A largura física do casco da embarcação de busca."
      ],
      "answer": 0,
      "explanation": "W relaciona objeto, sensor e condições ambientais, não sendo a largura física da unidade."
    },
    {
      "id": "c307",
      "topic": 15,
      "page": "22",
      "question": "Com Wu = 1,2 MN e fator de correção fw = 0,5, qual é Wc?",
      "options": [
        "2,4 MN.",
        "1,7 MN.",
        "0,7 MN.",
        "0,6 MN."
      ],
      "answer": 3,
      "explanation": "Wc = Wu × fw = 1,2 × 0,5 = 0,6 MN."
    },
    {
      "id": "c308",
      "topic": 15,
      "page": "23",
      "question": "Na tabela de navios mercantes da aula, para balsa de 15 pessoas e visibilidade de 10 MN, qual Wu é indicado em MN?",
      "options": [
        "6,4 MN.",
        "9,4 MN.",
        "5,1 MN.",
        "4,0 MN."
      ],
      "answer": 2,
      "explanation": "Na linha da balsa de 15 pessoas e coluna de 10 MN, a tabela registra 9,4 km (5,1 MN). Deve-se usar a unidade pedida."
    },
    {
      "id": "c309",
      "topic": 15,
      "page": "24",
      "question": "Na tabela de helicópteros, para balsa de 8 pessoas e visibilidade de 5 MN, qual Wu é indicado em MN?",
      "options": [
        "0,5 MN.",
        "2,1 MN.",
        "3,9 MN.",
        "3,8 MN."
      ],
      "answer": 1,
      "explanation": "O cruzamento da linha e coluna apresenta 3,9 km (2,1 MN); 3,9 é o valor em quilômetros."
    },
    {
      "id": "c310",
      "topic": 15,
      "page": "25",
      "question": "Na tabela de asa fixa, para balsa de 15 pessoas e visibilidade de 5 MN, qual Wu é indicado em MN?",
      "options": [
        "2,0 MN.",
        "3,7 MN.",
        "3,7 km, que corresponde a 3,7 MN.",
        "0,4 MN."
      ],
      "answer": 0,
      "explanation": "A célula é 3,7 km (2,0 MN); a conversão de unidade não pode ser ignorada."
    },
    {
      "id": "c311",
      "topic": 15,
      "page": "26",
      "question": "Para pessoa na água, vento de 30 nós e mar de 2 m, qual fw consta da faixa mais severa da tabela?",
      "options": [
        "0,5.",
        "1,0.",
        "0,6.",
        "0,25."
      ],
      "answer": 3,
      "explanation": "Vento acima de 25 nós ou mar acima de 1,5 m corresponde à última faixa; para pessoa na água, o fator é 0,25."
    },
    {
      "id": "c312",
      "topic": 15,
      "page": "26",
      "question": "Para balsa salva-vidas, vento de 20 nós e mar de 1,2 m, qual fw aparece na tabela?",
      "options": [
        "1,0.",
        "0,25.",
        "0,9.",
        "0,5."
      ],
      "answer": 2,
      "explanation": "Essas condições estão na faixa intermediária; o fator da balsa é 0,9, enquanto o da pessoa na água é 0,5."
    },
    {
      "id": "c313",
      "topic": 15,
      "page": "27",
      "question": "O que significa o espaçamento S em um padrão de busca?",
      "options": [
        "Distância total entre o porto e o datum.",
        "Distância entre trajetórias de busca adjacentes.",
        "Tempo entre o incidente e a chegada à área.",
        "Velocidade de avanço da unidade de busca."
      ],
      "answer": 1,
      "explanation": "S mede a separação entre derrotas ou trajetórias adjacentes do padrão."
    },
    {
      "id": "c314",
      "topic": 15,
      "page": "28",
      "question": "Qual é a expressão do fator de cobertura C apresentada na aula?",
      "options": [
        "C = Wc / S.",
        "C = S × V × T.",
        "C = Wc × S.",
        "C = V / T."
      ],
      "answer": 0,
      "explanation": "O fator é a razão entre largura de varredura corrigida e espaçamento; se ambos estão em MN, C não tem unidade."
    },
    {
      "id": "c315",
      "topic": 15,
      "page": "28",
      "question": "Para Wc = 1,8 MN e cobertura desejada C = 1,2, qual deve ser S?",
      "options": [
        "2,16 MN.",
        "0,6 MN.",
        "3,0 MN.",
        "1,5 MN."
      ],
      "answer": 3,
      "explanation": "Isolando S em C = Wc/S: S = 1,8 ÷ 1,2 = 1,5 MN."
    },
    {
      "id": "c316",
      "topic": 15,
      "page": "28",
      "question": "No caso C = 1,0 destacado na aula, qual relação vale?",
      "options": [
        "S = 2 × Wc.",
        "S = Wc / 2.",
        "S = Wc.",
        "S = 0, independentemente de Wc."
      ],
      "answer": 2,
      "explanation": "Se C = Wc/S = 1, o espaçamento coincide com a largura corrigida."
    },
    {
      "id": "c317",
      "topic": 15,
      "page": "28,32",
      "question": "Mantidos Wc, V e T, aumentar C tem qual efeito sobre S e a área nominal A?",
      "options": [
        "Mantém S e dobra necessariamente A.",
        "Reduz S e reduz A.",
        "Reduz S e aumenta necessariamente A.",
        "Aumenta S e aumenta A."
      ],
      "answer": 1,
      "explanation": "S = Wc/C; aumentar C reduz S. Como A = S × V × T, a área nominal também diminui nessas condições."
    },
    {
      "id": "c318",
      "topic": 15,
      "page": "30",
      "question": "No ábaco didático de traçado BOM apresentado, a qual probabilidade de contato se associa C = 1,0?",
      "options": [
        "86%.",
        "95%.",
        "100%.",
        "50%."
      ],
      "answer": 0,
      "explanation": "O slide relaciona C = 1,0 a P = 86% para o traçado BOM daquele ábaco. É uma estimativa do modelo, não garantia de detecção."
    },
    {
      "id": "c319",
      "topic": 15,
      "page": "32",
      "question": "Com S = 0,5 MN, V = 12 nós e T = 3 horas efetivas de busca, qual é a área nominal A?",
      "options": [
        "72 MN².",
        "36 MN².",
        "6 MN².",
        "18 MN²."
      ],
      "answer": 3,
      "explanation": "A = S × V × T = 0,5 × 12 × 3 = 18 MN²."
    },
    {
      "id": "c320",
      "topic": 15,
      "page": "20,32",
      "question": "Na fórmula A = S × V × T, o que representa T?",
      "options": [
        "Sempre a idade do objeto procurado.",
        "Tempo de transmissão da mensagem SAR.",
        "Tempo efetivo de busca da unidade considerada.",
        "Sempre o atraso entre o incidente e a chegada."
      ],
      "answer": 2,
      "explanation": "T corresponde ao tempo em que o meio pode executar a busca; atraso e autonomia não devem ser confundidos automaticamente."
    },
    {
      "id": "c321",
      "topic": 15,
      "page": "33",
      "question": "Dois meios têm áreas nominais independentes de 18 e 32 MN². Qual soma nominal At é obtida pela fórmula da aula?",
      "options": [
        "576 MN².",
        "50 MN².",
        "25 MN².",
        "14 MN²."
      ],
      "answer": 1,
      "explanation": "At = A1 + A2 = 18 + 32 = 50 MN²; a soma nominal, por si só, não desconta eventuais sobreposições."
    },
    {
      "id": "c322",
      "topic": 15,
      "page": "33",
      "question": "Três meios possuem, cada um, área nominal A = 20 MN². Qual é At?",
      "options": [
        "60 MN².",
        "6,67 MN².",
        "23 MN².",
        "20 MN²."
      ],
      "answer": 0,
      "explanation": "Como as três áreas individuais são iguais, At = N × A = 3 × 20 = 60 MN²."
    },
    {
      "id": "c323",
      "topic": 15,
      "page": "34",
      "question": "Para At = 144 MN², qual raio R é obtido pela fórmula da aula?",
      "options": [
        "72 MN.",
        "36 MN.",
        "12 MN.",
        "6 MN."
      ],
      "answer": 3,
      "explanation": "R = √At / 2 = √144 / 2 = 12 / 2 = 6 MN; o lado do quadrado é 12 MN."
    },
    {
      "id": "c324",
      "topic": 15,
      "page": "34",
      "question": "No esquema de área ideal, o que R representa geometricamente?",
      "options": [
        "Uma margem de erro de posição calculada automaticamente.",
        "A diagonal inteira do quadrado.",
        "Metade do lado do quadrado e raio do círculo nele inscrito.",
        "A distância obrigatória entre LKP e datum."
      ],
      "answer": 2,
      "explanation": "A figura relaciona R ao círculo inscrito e ao quadrado nominal; essa fórmula não estima incerteza de posição."
    },
    {
      "id": "c325",
      "topic": 15,
      "page": "37",
      "question": "Quando a busca em quadrado crescente é mais indicada, segundo a aula?",
      "options": [
        "Quando o objetivo é manter um navio sempre ao través de um helicóptero.",
        "Quando a posição do objetivo é conhecida dentro de limites relativamente próximos.",
        "Quando somente uma longa derrota é conhecida, sem referência de localização.",
        "Quando uma vasta área incerta deve ser dividida entre muitos meios simultâneos."
      ],
      "answer": 1,
      "explanation": "O quadrado crescente é associado à localização relativamente precisa do objetivo."
    },
    {
      "id": "c326",
      "topic": 15,
      "page": "37-38",
      "question": "Qual é o ponto inicial e a sequência das primeiras pernadas do quadrado crescente mostrado?",
      "options": [
        "Datum; S, S, 2S, 2S, 3S, 3S.",
        "Ponto de maior profundidade; todas as pernadas iguais a S.",
        "Porto de saída; 2S, 2S, S, S, 3S, 3S.",
        "Um vértice afastado; S, 2S, 3S, 4S, 5S, 6S."
      ],
      "answer": 0,
      "explanation": "A busca parte do datum e aumenta o comprimento a cada par de pernadas."
    },
    {
      "id": "c327",
      "topic": 15,
      "page": "37",
      "question": "Para uma segunda busca em quadrado crescente, qual defasagem é indicada?",
      "options": [
        "180° obrigatoriamente, repetindo as mesmas linhas.",
        "90° obrigatoriamente, mantendo as mesmas linhas.",
        "10° em relação às pernadas da primeira.",
        "45° em relação às pernadas da primeira."
      ],
      "answer": 3,
      "explanation": "O material recomenda defasar a segunda busca em 45°."
    },
    {
      "id": "c328",
      "topic": 15,
      "page": "37",
      "question": "No quadrado crescente executado por aeronave, qual orientação inicial aparece na aula?",
      "options": [
        "Primeira pernada sempre para o porto de origem.",
        "Primeira pernada sempre a favor da corrente.",
        "Primeira pernada contra o vento.",
        "Primeira pernada sempre para 000°, qualquer que seja o vento."
      ],
      "answer": 2,
      "explanation": "O slide relaciona a primeira derrota de aeronave ao sentido contrário ao vento."
    },
    {
      "id": "c329",
      "topic": 15,
      "page": "40",
      "question": "Uma embarcação desapareceu ao longo de uma derrota conhecida, sem deixar vestígios. Qual padrão é associado a essa situação?",
      "options": [
        "Busca paralela sem considerar a derrota conhecida.",
        "Busca em linha de trajetória.",
        "Busca de fundeadouro em círculo fixo.",
        "Busca em quadrado crescente em ponto sem referência."
      ],
      "answer": 1,
      "explanation": "A busca em linha de trajetória acompanha a derrota prevista da embarcação ou aeronave desaparecida."
    },
    {
      "id": "c330",
      "topic": 15,
      "page": "42-43",
      "question": "Qual padrão é indicado para grande área com localização incerta, com pernadas paralelas ao lado mais extenso da subárea?",
      "options": [
        "Busca em trajetórias paralelas.",
        "Busca em quadrado crescente.",
        "Busca apenas sobre o ponto do datum.",
        "Busca exclusivamente em linha de trajetória sem retorno."
      ],
      "answer": 0,
      "explanation": "A aula associa trajetórias paralelas à cobertura de grandes áreas incertas e à divisão em subáreas."
    },
    {
      "id": "c331",
      "topic": 15,
      "page": "43",
      "question": "Na busca paralela descrita, qual afastamento inicial das bordas forma o ponto de início próximo ao vértice?",
      "options": [
        "S inteiro para fora, a partir de ambos os lados.",
        "2S para dentro, somente do lado maior.",
        "Nenhum afastamento; exatamente sobre o vértice.",
        "S/2 para dentro, a partir de cada um dos dois lados do vértice."
      ],
      "answer": 3,
      "explanation": "O ponto inicial fica a meio espaçamento de cada lado que forma o vértice da subárea."
    },
    {
      "id": "c332",
      "topic": 15,
      "page": "45",
      "question": "Na busca em pente coordenada, qual é a função do navio para a aeronave?",
      "options": [
        "Seguir cada curva da aeronave com a mesma velocidade.",
        "Ficar sempre fundeado e dispensar o planejamento da aeronave.",
        "Servir de referência de navegação, avançando no rumo e velocidade coordenados.",
        "Determinar somente o horário de pouso da aeronave."
      ],
      "answer": 2,
      "explanation": "A aeronave realiza a maior parte da busca e usa o navio para conferir e corrigir sua trajetória."
    },
    {
      "id": "c333",
      "topic": 15,
      "page": "45-47",
      "question": "No esquema de busca em pente coordenada, como se relacionam as travessias de busca da aeronave e o avanço do navio?",
      "options": [
        "Ambos percorrem sempre a mesma linha, no mesmo sentido.",
        "As travessias cruzam o eixo de avanço do navio, aproximadamente perpendicularmente.",
        "O navio realiza órbitas circulares ao redor da aeronave.",
        "A aeronave permanece obrigatoriamente atrás do navio sem cruzá-lo."
      ],
      "answer": 1,
      "explanation": "A figura CSC mostra a aeronave varrendo de um lado ao outro do eixo de avanço do navio."
    },
    {
      "id": "c334",
      "topic": 15,
      "page": "45",
      "question": "Por que a aula associa a busca em pente à presença de um OSC?",
      "options": [
        "Para orientar e coordenar as comunicações entre navio e aeronave.",
        "Para dispensar a definição de velocidades de busca.",
        "Para impedir o uso do navio como referência visual.",
        "Para substituir todos os sensores da aeronave."
      ],
      "answer": 0,
      "explanation": "O OSC proporciona orientação e comunicações para a coordenação dos meios participantes."
    },
    {
      "id": "c335",
      "topic": 15,
      "page": "46",
      "question": "De que depende a velocidade do navio na busca em pente, conforme a aula?",
      "options": [
        "Somente da velocidade máxima nominal do navio.",
        "Somente do número de tripulantes da aeronave.",
        "Somente da visibilidade em quilômetros.",
        "Da velocidade da aeronave e do tamanho do padrão."
      ],
      "answer": 3,
      "explanation": "O avanço do navio precisa estar compatível com a aeronave e com as dimensões da busca coordenada."
    }
  ]
};
