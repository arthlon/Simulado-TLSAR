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
    }
  ]
};
