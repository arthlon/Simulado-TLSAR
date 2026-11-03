'use strict';

// Questões baseadas nos materiais fornecidos para o C-EXP-SOBREMAR.
// Preserve IDs e chave para manter o progresso deste curso.
window.SAR_COURSES = window.SAR_COURSES || {};
window.SAR_COURSES.sobremar = {
  "id": "sobremar",
  "label": "SOBREMAR",
  "description": "Sobrevivência no Mar",
  "key": "missao-lsar-sobremar-v1",
  "topicsDescription": "Histórico, salvatagem, abandono, sobrevivência e comunicações de emergência.",
  "studyDescription": "Pratique material de salvatagem, abandono do navio e técnicas de sobrevivência no mar.",
  "footnote": "Base de estudo SOBREMAR: duas apresentações de aula e fotos das páginas 1-1 e 1-2 do CAAML-702. Referências dos slides contadas desde a capa.",
  "sources": [
    {
      "id": 0,
      "title": "Histórico, SOLAS e cooperação internacional",
      "file": "CAAML-702 — capítulo 1 (fotos fornecidas)",
      "description": "Páginas 1-1 e 1-2 do manual."
    },
    {
      "id": 1,
      "title": "Material de salvatagem",
      "file": "Primeiro Dia de Aula Cap- 2 e 3 .ppt",
      "locationLabel": "slide"
    },
    {
      "id": 2,
      "title": "Abandono do navio",
      "file": "Primeiro Dia de Aula Cap- 2 e 3 .ppt",
      "locationLabel": "slide"
    },
    {
      "id": 3,
      "title": "Sobrevivência no mar",
      "file": "Segundo Dia de Aula Cap- 4 e 5 .ppt",
      "locationLabel": "slide"
    },
    {
      "id": 4,
      "title": "Comunicações e sinalização de emergência",
      "file": "Segundo Dia de Aula Cap- 4 e 5 .ppt",
      "locationLabel": "slide"
    }
  ],
  "bank": [
    {
      "id": "s001",
      "topic": 0,
      "page": "1-1",
      "question": "Antes da difusão dos coletes individuais, que recursos os náufragos utilizavam para flutuar?",
      "options": [
        "Apenas embarcações pneumáticas homologadas.",
        "Somente roupas de imersão.",
        "Balsas infláveis de lançamento automático.",
        "Destroços do naufrágio e barris de madeira."
      ],
      "answer": 3,
      "explanation": "O histórico cita destroços e barris de madeira, usados para armazenar água e rum, como recursos de flutuação."
    },
    {
      "id": "s002",
      "topic": 0,
      "page": "1-1",
      "question": "Segundo o histórico, qual consequência da construção naval em ferro dificultou a sobrevivência após naufrágios?",
      "options": [
        "Eliminação dos acidentes de grandes proporções.",
        "Obrigatoriedade imediata de coletes para todos.",
        "Aumento da quantidade de madeira disponível na água.",
        "Afundamentos mais rápidos e menor disponibilidade de destroços flutuantes."
      ],
      "answer": 3,
      "explanation": "O manual associa a adoção do ferro a afundamentos mais rápidos, sem os destroços que antes serviam como boias."
    },
    {
      "id": "s003",
      "topic": 0,
      "page": "1-1",
      "question": "Como eram inicialmente disponibilizados os materiais de salvatagem, segundo o manual?",
      "options": [
        "Sem padrão de procedimentos ou metodologia específica de dotação e distribuição.",
        "Com dotação uniforme mundial desde a primeira utilização.",
        "Somente depois de celebrado um pedido de resgate.",
        "Exclusivamente às tripulações de navios de guerra."
      ],
      "answer": 0,
      "explanation": "A disponibilização de materiais precedeu a padronização de procedimentos, dotação e distribuição."
    },
    {
      "id": "s004",
      "topic": 0,
      "page": "1-1",
      "question": "Antes da consolidação das regras internacionais citadas, de que dependia o socorro às tripulações e passageiros?",
      "options": [
        "De uma autoridade única embarcada em cada navio.",
        "De um sistema mundial automático por satélite.",
        "De acordos entre países, sem caráter obrigatório.",
        "Exclusivamente de empresas de seguro."
      ],
      "answer": 2,
      "explanation": "O texto descreve um período em que salvamento e socorro dependiam de acordos entre países e não tinham caráter obrigatório."
    },
    {
      "id": "s005",
      "topic": 0,
      "page": "1-1",
      "question": "Qual desastre, em 1912, fortaleceu o desenvolvimento das regras internacionais de salvaguarda da vida humana no mar?",
      "options": [
        "O naufrágio do Titanic.",
        "O incêndio do USS Cole.",
        "O acidente do voo uruguaio 571.",
        "A perda do Stellar Daisy."
      ],
      "answer": 0,
      "explanation": "O naufrágio do Titanic é apresentado como o marco que impulsionou a conferência e as regras internacionais de salvaguarda da vida humana no mar."
    },
    {
      "id": "s006",
      "topic": 0,
      "page": "1-1",
      "question": "Em que ano surgiu a primeira versão da SOLAS, conforme o material?",
      "options": [
        "1979.",
        "1871.",
        "1948.",
        "1914."
      ],
      "answer": 3,
      "explanation": "A primeira versão da Convenção Internacional para a Salvaguarda da Vida Humana no Mar é datada de 1914."
    },
    {
      "id": "s007",
      "topic": 0,
      "page": "1-1",
      "question": "O que significa SOLAS?",
      "options": [
        "Convenção de Limites das Áreas de Socorro.",
        "Sistema Internacional de Localização de Aeronaves Sinistradas.",
        "Serviço de Organização de Lanchas de Apoio e Salvamento.",
        "Convenção Internacional para a Salvaguarda da Vida Humana no Mar."
      ],
      "answer": 3,
      "explanation": "SOLAS corresponde à convenção internacional voltada à salvaguarda da vida humana no mar."
    },
    {
      "id": "s008",
      "topic": 0,
      "page": "1-1",
      "question": "Qual organização é indicada como responsável pela SOLAS?",
      "options": [
        "Organização Meteorológica Mundial (OMM).",
        "União Internacional de Telecomunicações (UIT).",
        "Organização Marítima Internacional (IMO).",
        "Organização Internacional do Trabalho (OIT)."
      ],
      "answer": 2,
      "explanation": "O manual situa a SOLAS sob a responsabilidade da IMO, vinculada à estrutura das Nações Unidas."
    },
    {
      "id": "s009",
      "topic": 0,
      "page": "1-2",
      "question": "Qual objetivo da convenção é destacado no início da página 1-2?",
      "options": [
        "Prover apoio mútuo aos navios dos países signatários.",
        "Padronizar exclusivamente o transporte de cargas.",
        "Eliminar os serviços nacionais de busca.",
        "Transferir o comando dos navios a uma força internacional."
      ],
      "answer": 0,
      "explanation": "O texto destaca o apoio mútuo aos navios dos países signatários e o aprimoramento da salvaguarda da vida humana no mar."
    },
    {
      "id": "s010",
      "topic": 0,
      "page": "1-2",
      "question": "Como também é conhecida a Convenção Internacional para Busca e Salvamento Marítimo adotada em 1979?",
      "options": [
        "Convenção de Hamburgo.",
        "Convenção de Viena.",
        "Convenção de Chicago.",
        "Convenção de Genebra."
      ],
      "answer": 0,
      "explanation": "O material identifica a Convenção de 1979 como Convenção de Hamburgo, dedicada à busca e ao salvamento marítimo."
    },
    {
      "id": "s011",
      "topic": 0,
      "page": "1-2",
      "question": "Segundo a cronologia apresentada, quando entrou em vigor a Convenção de Hamburgo?",
      "options": [
        "1985.",
        "1914.",
        "1999.",
        "1948."
      ],
      "answer": 0,
      "explanation": "A página 1-2 informa que a convenção adotada após a conferência de 1979 entrou em vigor em 1985."
    },
    {
      "id": "s012",
      "topic": 0,
      "page": "1-2",
      "question": "Qual conjunto de assuntos está associado à Convenção de Hamburgo no material?",
      "options": [
        "Organização dos serviços SAR, áreas de responsabilidade e cooperação entre Estados.",
        "Somente construção de casulos e manutenção de coletes.",
        "Exclusivamente sinais de manobra e luzes de navegação.",
        "Apenas regras de contratação e de seguro marítimo."
      ],
      "answer": 0,
      "explanation": "O texto destaca a coordenação do socorro, a organização dos serviços, a atribuição de áreas e a cooperação entre Estados."
    },
    {
      "id": "s013",
      "topic": 0,
      "page": "1-2",
      "question": "Qual é a finalidade básica do GMDSS descrita no histórico?",
      "options": [
        "Controlar a propulsão das embarcações de sobrevivência.",
        "Substituir o material de salvatagem por mensagens automáticas.",
        "Definir a classe dos coletes utilizados em cada porto.",
        "Alertar rapidamente autoridades SAR em terra e navios próximos sobre uma situação de perigo."
      ],
      "answer": 3,
      "explanation": "O GMDSS favorece o alerta rápido e a operação coordenada de busca e salvamento no menor tempo possível."
    },
    {
      "id": "s014",
      "topic": 0,
      "page": "1-2",
      "question": "Qual data de entrada em vigor do GMDSS é indicada no material?",
      "options": [
        "1º de janeiro de 1914.",
        "13 de outubro de 1972.",
        "20 de dezembro de 1979.",
        "1º de fevereiro de 1999."
      ],
      "answer": 3,
      "explanation": "A cronologia do capítulo registra 1º de fevereiro de 1999 para a entrada em vigor do GMDSS."
    },
    {
      "id": "s015",
      "topic": 0,
      "page": "1-2",
      "question": "Como o manual descreve o aproveitamento das convenções da IMO na elaboração do CAAML-702?",
      "options": [
        "Foram usadas apenas para definir os uniformes da tripulação.",
        "Seus conceitos foram aproveitados e somados aos conceitos próprios dos navios de guerra.",
        "Substituíram toda orientação específica da Marinha.",
        "Suas normas foram descartadas por completo."
      ],
      "answer": 1,
      "explanation": "O texto explica que os conceitos discutidos internacionalmente foram aproveitados e associados às particularidades dos navios de guerra."
    },
    {
      "id": "s016",
      "topic": 1,
      "page": "27",
      "question": "Quais fatores são colocados no mesmo nível de importância para a sobrevivência do náufrago?",
      "options": [
        "Exclusivamente quantidade de alimentos e número de rádios.",
        "Estado psicofísico e eficiência/proficiência no uso do equipamento.",
        "Somente velocidade do navio e distância do porto.",
        "Apenas idade e tempo de serviço."
      ],
      "answer": 1,
      "explanation": "O slide ressalta tanto o estado psicofísico quanto a eficiência do material e a proficiência de quem o opera."
    },
    {
      "id": "s017",
      "topic": 1,
      "page": "28",
      "question": "A que emprego corresponde o material de salvatagem Classe I na classificação apresentada?",
      "options": [
        "Exclusivamente atividades esportivas.",
        "Navegação entre portos brasileiros e estrangeiros.",
        "Apenas navegação interior.",
        "Somente trabalhos junto à borda."
      ],
      "answer": 1,
      "explanation": "A Classe I é apresentada para embarcações que navegam entre portos brasileiros e estrangeiros."
    },
    {
      "id": "s018",
      "topic": 1,
      "page": "28",
      "question": "Qual emprego está associado à Classe II?",
      "options": [
        "Navegação interior exclusivamente.",
        "Navegação de mar aberto entre portos nacionais.",
        "Navegação internacional exclusivamente.",
        "Trabalho prolongado próximo à borda."
      ],
      "answer": 1,
      "explanation": "A Classe II utiliza requisitos da Classe I abrandados para navegação de mar aberto entre portos nacionais."
    },
    {
      "id": "s019",
      "topic": 1,
      "page": "29",
      "question": "Qual classe é destinada à navegação interior?",
      "options": [
        "Classe V.",
        "Classe IV.",
        "Classe III.",
        "Classe I."
      ],
      "answer": 2,
      "explanation": "A Classe III tem requisitos baseados na Classe I, abrandados para a navegação interior."
    },
    {
      "id": "s020",
      "topic": 1,
      "page": "29",
      "question": "Qual classe é fabricada para uso prolongado em trabalhos próximos à borda?",
      "options": [
        "Classe IV.",
        "Classe V.",
        "Classe III.",
        "Classe II."
      ],
      "answer": 0,
      "explanation": "O slide relaciona a Classe IV ao uso por longos períodos em trabalhos realizados próximos à borda."
    },
    {
      "id": "s021",
      "topic": 1,
      "page": "30",
      "question": "Qual classe tem emprego exclusivo nas atividades esportivas relacionadas na aula?",
      "options": [
        "Classe II.",
        "Classe IV.",
        "Classe V.",
        "Classe I."
      ],
      "answer": 2,
      "explanation": "A Classe V é associada a atividades como jet-ski, banana-boat, windsurf, parasail e pesca."
    },
    {
      "id": "s022",
      "topic": 1,
      "page": "31",
      "question": "Na dotação dos navios da MB que praticam navegação costeira ou oceânica, qual classe é exigida pelo material?",
      "options": [
        "Classe III.",
        "Classe V.",
        "Classe I.",
        "Classe II."
      ],
      "answer": 2,
      "explanation": "Para os meios da MB, o slide determina Classe I na navegação costeira ou oceânica. Essa regra é distinta da classificação genérica da Classe II."
    },
    {
      "id": "s023",
      "topic": 1,
      "page": "31",
      "question": "Um navio da MB que pratica exclusivamente navegação interior deve prover-se de qual classe de material?",
      "options": [
        "Classe V.",
        "Classe II.",
        "Classe III.",
        "Classe IV."
      ],
      "answer": 2,
      "explanation": "A aula indica Classe III para os navios da MB empregados exclusivamente na navegação interior."
    },
    {
      "id": "s024",
      "topic": 1,
      "page": "35",
      "question": "Qual é a função de uma embarcação de salvamento?",
      "options": [
        "Preservar náufragos sem executar resgate ou reboque.",
        "Substituir a boia individual durante o salto.",
        "Servir apenas como reserva de água e alimentos.",
        "Resgatar pessoas na água e reunir ou rebocar embarcações de sobrevivência."
      ],
      "answer": 3,
      "explanation": "Embarcação de salvamento é concebida para o resgate de pessoas em perigo na água, podendo reunir e rebocar meios de sobrevivência."
    },
    {
      "id": "s025",
      "topic": 1,
      "page": "35",
      "question": "Qual conjunto contém exemplos de embarcações de salvamento citados para a MB?",
      "options": [
        "Lanchas, baleeiras a motor e embarcações pneumáticas de resgate.",
        "Somente aparelhos flutuantes sem propulsão.",
        "Coletes, roupas de imersão e boias circulares.",
        "Casulos vazios, barris e redes de pesca."
      ],
      "answer": 0,
      "explanation": "Esses três tipos são relacionados como embarcações destinadas ao resgate de náufragos na MB."
    },
    {
      "id": "s026",
      "topic": 1,
      "page": "39",
      "question": "O que caracteriza uma embarcação de sobrevivência?",
      "options": [
        "Qualquer embarcação empregada para rebocar navios avariados.",
        "Meio coletivo de abandono que preserva vidas enquanto se aguarda o resgate.",
        "Navio dedicado exclusivamente à coordenação SAR.",
        "Equipamento individual usado para proteger as vias aéreas."
      ],
      "answer": 1,
      "explanation": "A definição enfatiza o abandono coletivo e a preservação da vida por certo período até o resgate."
    },
    {
      "id": "s027",
      "topic": 1,
      "page": "39",
      "question": "Qual item é relacionado como embarcação de sobrevivência no material?",
      "options": [
        "Transponder radar.",
        "Roupa de imersão.",
        "Agulha magnética portátil.",
        "Bote orgânico de abandono."
      ],
      "answer": 3,
      "explanation": "O slide inclui embarcação salva-vidas, balsa salva-vidas, aparelhos flutuantes e bote orgânico de abandono."
    },
    {
      "id": "s028",
      "topic": 1,
      "page": "40",
      "question": "Qual descrição corresponde à embarcação salva-vidas apresentada na aula?",
      "options": [
        "Exclusivamente circular e sem possibilidade de embarque.",
        "Rígida, com propulsão própria e geralmente arriada por um par de turcos.",
        "Inflável, sem propulsão e sempre arriada por helicóptero.",
        "Individual, sem casco e vestida como jaqueta."
      ],
      "answer": 1,
      "explanation": "O material descreve normalmente uma baleeira rígida, com proa e popa afiladas, propulsão própria e arriamento por turcos."
    },
    {
      "id": "s029",
      "topic": 1,
      "page": "42",
      "question": "Qual descrição identifica a balsa salva-vidas apresentada no material?",
      "options": [
        "Pneumática de resgate com motor de popa obrigatório.",
        "Rígida, motorizada e com proa e popa afiladas.",
        "Inflável, sem propulsão própria e com formato de polígono regular.",
        "Individual, de vestir pela cabeça e com apito."
      ],
      "answer": 2,
      "explanation": "A BSV é descrita como inflável, sem propulsão própria e comumente acondicionada em casulo de fibra de vidro."
    },
    {
      "id": "s030",
      "topic": 1,
      "page": "42",
      "question": "Em quais classes podem ser encontradas as balsas salva-vidas na MB, segundo esse slide?",
      "options": [
        "Classes IV e V.",
        "Somente Classe V.",
        "Somente Classe II.",
        "Classes I e III."
      ],
      "answer": 3,
      "explanation": "O slide 42 informa as classes I e III para as BSVs encontradas na MB."
    },
    {
      "id": "s031",
      "topic": 1,
      "page": "44",
      "question": "Como podem ser os aparelhos flutuantes quanto à construção?",
      "options": [
        "Somente infláveis e obrigatoriamente motorizados.",
        "Exclusivamente metálicos e fechados.",
        "Apenas rígidos e sempre circulares.",
        "Rígidos ou infláveis, em diferentes formatos."
      ],
      "answer": 3,
      "explanation": "A aula admite aparelhos rígidos ou infláveis, com formas variadas, cheios ou vazados."
    },
    {
      "id": "s032",
      "topic": 1,
      "page": "45",
      "question": "Qual função é atribuída ao colete salva-vidas na definição da aula?",
      "options": [
        "Manter uma pessoa, mesmo inconsciente, flutuando por no mínimo 24 horas.",
        "Prover apenas proteção térmica sem flutuabilidade.",
        "Reunir e rebocar balsas de sobrevivência.",
        "Substituir a embarcação coletiva por três dias."
      ],
      "answer": 0,
      "explanation": "A definição do slide apresenta o colete como meio individual de abandono com esse requisito de flutuação."
    },
    {
      "id": "s033",
      "topic": 1,
      "page": "46",
      "question": "Qual característica é exigida para a flutuabilidade de uma boia salva-vidas?",
      "options": [
        "Não depender de prévia insuflação.",
        "Depender de energia elétrica externa.",
        "Depender sempre de acionamento oral.",
        "Existir somente após a imersão por 48 horas."
      ],
      "answer": 0,
      "explanation": "A boia oferece apoio à pessoa que caiu na água enquanto aguarda resgate; sua flutuabilidade não pode depender de enchimento prévio."
    },
    {
      "id": "s034",
      "topic": 1,
      "page": "49",
      "question": "Qual é a finalidade principal da roupa de imersão?",
      "options": [
        "Atuar como transponder radar.",
        "Servir de cabo comando da balsa.",
        "Assegurar proteção térmica adequada ao tripulante no abandono.",
        "Produzir sinal luminoso de longo alcance."
      ],
      "answer": 2,
      "explanation": "A roupa de imersão é um equipamento individual de abandono voltado à proteção térmica."
    },
    {
      "id": "s035",
      "topic": 1,
      "page": "50",
      "question": "Qual é a finalidade do meio de proteção térmica?",
      "options": [
        "Produzir flutuabilidade por reação química.",
        "Substituir os equipamentos de radiocomunicação.",
        "Proteger contra a perda de calor do corpo com material impermeável à água.",
        "Filtrar água do mar para consumo."
      ],
      "answer": 2,
      "explanation": "O slide define o meio de proteção térmica pela proteção contra perda de calor e pela impermeabilidade à água."
    },
    {
      "id": "s036",
      "topic": 1,
      "page": "51",
      "question": "Quem deve homologar o material de salvatagem nacional utilizado nos navios da MB, segundo a aula?",
      "options": [
        "Somente o fabricante do equipamento.",
        "A tripulação de cada navio, sem homologação externa.",
        "Exclusivamente a estação rádio costeira.",
        "Diretoria de Portos e Costas (DPC)."
      ],
      "answer": 3,
      "explanation": "O slide estabelece a homologação pela DPC para o material nacional utilizado a bordo dos navios da MB."
    },
    {
      "id": "s037",
      "topic": 1,
      "page": "52",
      "question": "Qual regra de substituição entre classes é apresentada?",
      "options": [
        "A Classe V substitui a Classe I em qualquer navegação.",
        "Nenhum material de Classe I pode substituir o de Classe III.",
        "Equipamentos de classe superior podem substituir os de classe inferior.",
        "Qualquer classe inferior substitui automaticamente a superior."
      ],
      "answer": 2,
      "explanation": "O exemplo da aula admite materiais das classes I e II em substituição aos da Classe III, preservando a superioridade dos requisitos."
    },
    {
      "id": "s038",
      "topic": 1,
      "page": "52",
      "question": "Qual periodicidade de revisão dos equipamentos de salvatagem infláveis é indicada no material?",
      "options": [
        "A cada 12 meses.",
        "Apenas após um abandono real.",
        "A cada 36 meses.",
        "A cada 3 meses."
      ],
      "answer": 0,
      "explanation": "A aula determina revisão a cada 12 meses para os equipamentos infláveis. O enunciado se refere à periodicidade apresentada no material de estudo."
    },
    {
      "id": "s039",
      "topic": 1,
      "page": "53",
      "question": "Excetuados os navios-tanque, qual capacidade de embarcações de sobrevivência é indicada para os navios da MB?",
      "options": [
        "100% apenas dos militares de serviço.",
        "150% apenas do Grupo de Salvamento e Destruição.",
        "75% da capacidade máxima de pessoal a bordo.",
        "110% da capacidade máxima de pessoal a bordo."
      ],
      "answer": 3,
      "explanation": "O slide estabelece embarcações de sobrevivência suficientes para 110% da capacidade máxima de pessoal a bordo."
    },
    {
      "id": "s040",
      "topic": 1,
      "page": "54",
      "question": "Para os navios-tanque, qual capacidade de embarcações de sobrevivência é indicada?",
      "options": [
        "100% apenas do Grupo de Salvamento e Destruição.",
        "150% da capacidade máxima de pessoal a bordo.",
        "50% da capacidade máxima de pessoal a bordo.",
        "110% apenas do pessoal de quarto."
      ],
      "answer": 1,
      "explanation": "A dotação indicada para navios-tanque é de 150% da capacidade máxima de pessoal a bordo."
    },
    {
      "id": "s041",
      "topic": 1,
      "page": "54",
      "question": "Qual dotação específica é indicada para o Grupo de Salvamento e Destruição em navios-tanque?",
      "options": [
        "Coletes Classe V para 150% do grupo.",
        "Embarcações salva-vidas totalmente fechadas e resistentes ao fogo para 110% do grupo.",
        "Aparelhos flutuantes abertos para 50% do grupo.",
        "Balsas de rios sem toldo para 100% do grupo."
      ],
      "answer": 1,
      "explanation": "O slide separa essa dotação específica da capacidade geral de 150%: são embarcações fechadas e resistentes ao fogo para 110% do grupo."
    },
    {
      "id": "s042",
      "topic": 1,
      "page": "61",
      "question": "Por quanto tempo uma BSV inflável para mar deve resistir à exposição ao tempo, segundo o requisito da aula?",
      "options": [
        "3 dias.",
        "30 dias.",
        "48 horas.",
        "12 horas."
      ],
      "answer": 1,
      "explanation": "O requisito operativo citado é resistir a 30 dias ao tempo, flutuando em todas as condições de mar."
    },
    {
      "id": "s043",
      "topic": 1,
      "page": "61",
      "question": "Qual velocidade de reboque em águas tranquilas é indicada para a BSV carregada com sua lotação e equipamentos?",
      "options": [
        "3 nós.",
        "1 nó.",
        "12 nós.",
        "8 nós."
      ],
      "answer": 0,
      "explanation": "O requisito de reboque é de 3 nós em águas tranquilas com lotação de pessoas e dotação de equipamentos completas."
    },
    {
      "id": "s044",
      "topic": 1,
      "page": "62",
      "question": "Para quantos dias a ração sólida e líquida da BSV para mar deve atender sua lotação homologada?",
      "options": [
        "Três dias, independentemente do meio externo.",
        "Quarenta e oito horas, somente com pesca.",
        "Doze horas, com reposição diária.",
        "Trinta dias, sem reposição."
      ],
      "answer": 0,
      "explanation": "O material distingue a resistência de 30 dias ao tempo da dotação de ração para três dias."
    },
    {
      "id": "s045",
      "topic": 1,
      "page": "62",
      "question": "Qual conjunto corresponde à divisão funcional dos equipamentos da BSV citada na aula?",
      "options": [
        "Propulsão, armamento, lastro e munição.",
        "Componentes, sinalização, sobrevivência, medicamentos, pesca, reparos e documentação.",
        "Somente ração, água e material de limpeza.",
        "Apenas navegação, radiotelefonia e combate a incêndio."
      ],
      "answer": 1,
      "explanation": "O slide enumera os componentes e os estojos de sinalização, sobrevivência, medicamentos, pesca e reparos, além da documentação."
    },
    {
      "id": "s046",
      "topic": 1,
      "page": "65",
      "question": "Quais características específicas são exigidas para as balsas infláveis para rios?",
      "options": [
        "Propulsão própria e casco metálico resistente ao fogo.",
        "Piso reforçado externamente e mosquiteiros nas duas aberturas do toldo.",
        "Somente pintura camuflada e motor auxiliar.",
        "Ausência de toldo e de reforço no piso."
      ],
      "answer": 1,
      "explanation": "O reforço protege contra obstáculos submersos e os mosquiteiros atendem às condições das regiões de rios."
    },
    {
      "id": "s047",
      "topic": 1,
      "page": "67",
      "question": "A qual classe pertencem exclusivamente os aparelhos flutuantes apresentados?",
      "options": [
        "Classe II.",
        "Classe I.",
        "Classe IV.",
        "Classe III."
      ],
      "answer": 3,
      "explanation": "O slide classifica esses aparelhos exclusivamente como Classe III."
    },
    {
      "id": "s048",
      "topic": 1,
      "page": "67",
      "question": "Como os aparelhos flutuantes devem ser estivados?",
      "options": [
        "No convés superior, em grupos de até cinco unidades e livres para flutuar.",
        "No porão, amarrados rigidamente ao casco.",
        "Em grupos de vinte unidades, peados à embarcação.",
        "Sob equipamentos pesados para evitar seu deslocamento."
      ],
      "answer": 0,
      "explanation": "A aula admite pilhas de até cinco unidades e exige que estejam livres para flutuar, sem peação à embarcação."
    },
    {
      "id": "s049",
      "topic": 1,
      "page": "67",
      "question": "Qual é a função da linha salva-vidas externa do aparelho flutuante?",
      "options": [
        "Alimentar a luz elétrica de posicionamento.",
        "Formar alças iguais que sirvam de apoio às mãos dos náufragos.",
        "Atuar como cabo de disparo de uma ampola de gás.",
        "Impedir permanentemente que o aparelho flutue."
      ],
      "answer": 1,
      "explanation": "A linha é fixada externamente em pontos equidistantes para formar alças de apoio."
    },
    {
      "id": "s050",
      "topic": 1,
      "page": "69",
      "question": "Como deve ser a localização dos coletes salva-vidas estivados?",
      "options": [
        "Em local trancado até a ordem final de abandono.",
        "Sempre no compartimento mais baixo do navio.",
        "Conhecida apenas pelo encarregado do paiol.",
        "Prontamente acessível e bem indicada."
      ],
      "answer": 3,
      "explanation": "O acesso imediato e a indicação clara da localização são requisitos destacados no slide."
    },
    {
      "id": "s051",
      "topic": 1,
      "page": "70",
      "question": "Quais acessórios são associados ao colete Classe I empregado na MB no material?",
      "options": [
        "Antena de rádio, bússola e dessalinizador.",
        "Somente apito, sem fitas ou luz.",
        "Somente luz de posicionamento.",
        "Fitas retrorrefletivas, luz de posicionamento e apito."
      ],
      "answer": 3,
      "explanation": "A descrição do Classe I inclui os três acessórios: fitas retrorrefletivas, luz e apito."
    },
    {
      "id": "s052",
      "topic": 1,
      "page": "70",
      "question": "Na comparação apresentada, qual acessório do Classe I não está no colete Classe II?",
      "options": [
        "Fitas retrorrefletivas.",
        "Apito.",
        "Luz de posicionamento.",
        "Material de flutuação."
      ],
      "answer": 2,
      "explanation": "O Classe II é descrito como semelhante ao Classe I, porém sem a luz de posicionamento."
    },
    {
      "id": "s053",
      "topic": 1,
      "page": "70",
      "question": "Quais acessórios deixam de estar presentes no Classe III em relação ao Classe I, segundo a aula?",
      "options": [
        "Luz de posicionamento e fitas retrorrefletivas.",
        "Luz, apito e todo o material de flutuação.",
        "Somente o apito.",
        "Apito e material de flutuação."
      ],
      "answer": 0,
      "explanation": "O slide descreve o Classe III sem luz de posicionamento e sem fitas retrorrefletivas."
    },
    {
      "id": "s054",
      "topic": 1,
      "page": "71",
      "question": "Qual altura de salto é citada para o colete de flutuabilidade permanente corretamente utilizado?",
      "options": [
        "4,5 metros.",
        "10 metros.",
        "1,5 metro.",
        "36 metros."
      ],
      "answer": 0,
      "explanation": "O requisito apresentado é permitir um salto de 4,5 m sem avariar o colete nem deslocá-lo do corpo."
    },
    {
      "id": "s055",
      "topic": 1,
      "page": "71",
      "question": "Qual resultado é esperado do colete permanente para uma pessoa inconsciente em decúbito ventral?",
      "options": [
        "Girar seu corpo de modo que a boca fique voltada para cima.",
        "Inflar apenas após acionamento oral.",
        "Mantê-la obrigatoriamente com a face submersa.",
        "Transportá-la automaticamente até a balsa."
      ],
      "answer": 0,
      "explanation": "O material destaca a capacidade de giro e a manutenção da boca acima da água em águas tranquilas."
    },
    {
      "id": "s056",
      "topic": 1,
      "page": "72",
      "question": "Qual diferença identifica os tipos canga e jaleco/jaqueta?",
      "options": [
        "Canga é sempre uma boia circular; jaleco é um aparelho flutuante.",
        "Canga é vestida pela cabeça; jaleco é vestido como uma jaqueta.",
        "Canga é exclusivamente Classe V; jaleco é exclusivamente Classe I.",
        "Canga não é vestida; jaleco somente funciona após insuflação."
      ],
      "answer": 1,
      "explanation": "A distinção apresentada é a forma de vestir, não a classe de homologação."
    },
    {
      "id": "s057",
      "topic": 1,
      "page": "74 e 77",
      "question": "Qual diferença de acionamento distingue o colete auto-inflável do inflável descrito na aula?",
      "options": [
        "O inflável dispensa qualquer dispositivo de acionamento.",
        "Somente o inflável atua automaticamente ao submergir.",
        "O auto-inflável atua automaticamente ao submergir; o inflável tem acionamento mecânico manual.",
        "O auto-inflável não possui compartimentos de flutuação."
      ],
      "answer": 2,
      "explanation": "Ambos são descritos com dois compartimentos independentes e acionamento oral; a distinção é o modo mecânico automático ou manual."
    },
    {
      "id": "s058",
      "topic": 1,
      "page": "79",
      "question": "Qual é a dotação de coletes infláveis ou auto-infláveis indicada para os navios da MB?",
      "options": [
        "100% apenas do pessoal de quarto.",
        "150% apenas dos integrantes do GSD.",
        "75% da capacidade máxima de passageiros.",
        "110% do pessoal listado na parte de saída, em perfeitas condições de uso."
      ],
      "answer": 3,
      "explanation": "O parâmetro específico para coletes é o quantitativo de pessoal listado na parte de saída, acrescido de 10%."
    },
    {
      "id": "s059",
      "topic": 1,
      "page": "81",
      "question": "Em quanto tempo a roupa de imersão deve poder ser retirada do invólucro e vestida sem ajuda?",
      "options": [
        "Em até trinta minutos.",
        "Em exatamente cinco minutos.",
        "Em menos de dois minutos.",
        "Em menos de doze minutos."
      ],
      "answer": 2,
      "explanation": "A característica operativa citada no slide exige vestir a roupa sem ajuda em menos de dois minutos."
    },
    {
      "id": "s060",
      "topic": 1,
      "page": "81",
      "question": "Uma roupa de imersão com flutuabilidade, destinada ao uso sem colete, deve possuir quais acessórios?",
      "options": [
        "Ampola sobressalente e cabo comando.",
        "Luz e apito.",
        "GPS e transceptor MF/HF.",
        "Apenas fitas retrorrefletivas."
      ],
      "answer": 1,
      "explanation": "Para essa condição específica, a aula exige obrigatoriamente luz e apito."
    },
    {
      "id": "s061",
      "topic": 1,
      "page": "83",
      "question": "Qual propriedade do material é desejada no meio de proteção térmica?",
      "options": [
        "Absorção de água para aumentar o peso.",
        "Alta permeabilidade e alta condutividade térmica.",
        "Impermeabilidade à água e baixa condutividade térmica.",
        "Dissolução rápida em água salgada."
      ],
      "answer": 2,
      "explanation": "Essas propriedades reduzem a perda de calor do corpo. O meio deve envolver toda a pessoa utilizando colete salva-vidas."
    },
    {
      "id": "s062",
      "topic": 2,
      "page": "90",
      "question": "De que depende o tempo de afundamento de um navio avariado, segundo a aula?",
      "options": [
        "Apenas da direção do vento.",
        "Exclusivamente da quantidade de balsas.",
        "Somente da distância até a terra.",
        "Da reserva de flutuabilidade e da extensão da avaria."
      ],
      "answer": 3,
      "explanation": "O slide relaciona o tempo de afundamento à flutuabilidade remanescente e à extensão da avaria."
    },
    {
      "id": "s063",
      "topic": 2,
      "page": "90",
      "question": "Quais são as três situações de afundamento consideradas para o abandono?",
      "options": [
        "Diurno, noturno e costeiro.",
        "Voluntário, automático e manual.",
        "Iminente, provável e possível.",
        "Inicial, intermediário e final."
      ],
      "answer": 2,
      "explanation": "A preparação e as ordens de abandono são diferenciadas conforme essas três situações."
    },
    {
      "id": "s064",
      "topic": 2,
      "page": "92",
      "question": "Como se caracteriza o afundamento iminente?",
      "options": [
        "Existe apenas previsão meteorológica desfavorável.",
        "O navio está pronto e sem qualquer avaria.",
        "Há possibilidade de salvar o navio sem perigo imediato.",
        "Há perigo imediato de afundamento ou emborcamento."
      ],
      "answer": 3,
      "explanation": "O perigo imediato de afundamento ou emborcamento caracteriza a situação iminente."
    },
    {
      "id": "s065",
      "topic": 2,
      "page": "92",
      "question": "Qual ordem é indicada para o afundamento iminente?",
      "options": [
        "Recolher todas as embarcações de sobrevivência.",
        "Assumir o Controle do Navio.",
        "Abandonar o Navio.",
        "Somente aumentar o serviço de vigilância."
      ],
      "answer": 2,
      "explanation": "Para perigo imediato, o material apresenta a ordem expressa do Comandante: Abandonar o Navio."
    },
    {
      "id": "s066",
      "topic": 2,
      "page": "93",
      "question": "Qual descrição corresponde ao afundamento provável?",
      "options": [
        "A possibilidade de manter o navio flutuando é apresentada como solução viável.",
        "Há perigo imediato de emborcamento, sem tempo para qualquer preparação.",
        "O navio está sem avarias e permanece em operação normal.",
        "Não há perigo imediato, mas é grande a probabilidade de afundar ou de captura, restando destruir o navio."
      ],
      "answer": 3,
      "explanation": "A definição do provável é distinta da situação possível, em que ainda se considera manter ou salvar o navio."
    },
    {
      "id": "s067",
      "topic": 2,
      "page": "93",
      "question": "Na situação de afundamento provável descrita, qual tarefa é atribuída ao GSD?",
      "options": [
        "Suspender a preparação para o abandono.",
        "Assumir o controle do tráfego aéreo.",
        "Assumir o Controle do Navio.",
        "Destruir o Navio."
      ],
      "answer": 3,
      "explanation": "A ordem citada combina preparação para abandono, guarnecimento dos postos e destruição do navio pelo GSD."
    },
    {
      "id": "s068",
      "topic": 2,
      "page": "95",
      "question": "Qual descrição corresponde ao afundamento possível?",
      "options": [
        "Perigo imediato de afundamento ou emborcamento.",
        "Impossibilidade total de preservar o navio, com ordem de destruí-lo.",
        "Naufrágio já concluído, com toda a tripulação na água.",
        "Sem perigo imediato e com possibilidade de manter o navio flutuando ou salvá-lo das mãos do inimigo."
      ],
      "answer": 3,
      "explanation": "A situação possível ainda admite preservar ou recuperar o navio."
    },
    {
      "id": "s069",
      "topic": 2,
      "page": "95",
      "question": "Na situação de afundamento possível, qual ordem é indicada ao GSD?",
      "options": [
        "Abandonar as comunicações de emergência.",
        "Destruir o Navio.",
        "Assumir o Controle do Navio.",
        "Lançar todos os pirotécnicos disponíveis."
      ],
      "answer": 2,
      "explanation": "A ordem se diferencia daquela de afundamento provável: o GSD deve assumir o controle do navio."
    },
    {
      "id": "s070",
      "topic": 2,
      "page": "94",
      "question": "Qual informação sobre a terra mais próxima deve ser divulgada para o abandono?",
      "options": [
        "Somente o nome do continente.",
        "Apenas a hora do pôr do sol.",
        "Marcação magnética, distância e se é amiga ou inimiga.",
        "Exclusivamente a profundidade do porto de destino."
      ],
      "answer": 2,
      "explanation": "O material exige informações úteis à situação de sobrevivência, incluindo marcação, distância e condição da terra mais próxima."
    },
    {
      "id": "s071",
      "topic": 2,
      "page": "94",
      "question": "Qual conjunto de dados ambientais deve ser anotado para o abandono?",
      "options": [
        "Exclusivamente temperatura dos motores e nível do combustível.",
        "Somente temperatura do ar e pressão do óleo.",
        "Apenas fase da Lua e calado do navio.",
        "Vento, corrente, temperatura da água do mar e tempo de sobrevivência."
      ],
      "answer": 3,
      "explanation": "A estação da manobra informa direção e intensidade do vento, rumo e velocidade da corrente, temperatura da água e tempo de sobrevivência."
    },
    {
      "id": "s072",
      "topic": 2,
      "page": "97",
      "question": "Quais são as três fases dos procedimentos de utilização da BSV inflável?",
      "options": [
        "Liberação do casulo, atuação do mecanismo de disparo e liberação da balsa.",
        "Retirada do toldo, abertura do piso e ativação do radar.",
        "Reforço da peação, içamento por turco e destruição do casulo.",
        "Insuflação oral, partida do motor e lançamento do ferro."
      ],
      "answer": 0,
      "explanation": "Essas são as três fases em que a aula divide a utilização das BSVs."
    },
    {
      "id": "s073",
      "topic": 2,
      "page": "97",
      "question": "Por qual dispositivo as BSVs infláveis são estivadas a bordo como medida de segurança?",
      "options": [
        "Apenas uma corrente soldada.",
        "Transponder radar de 9 GHz.",
        "Dispositivo hidrostático.",
        "Dispositivo de recepção de sinais horários."
      ],
      "answer": 2,
      "explanation": "A estivagem com dispositivo hidrostático permite a liberação prevista no procedimento de abandono."
    },
    {
      "id": "s074",
      "topic": 2,
      "page": "99",
      "question": "Que tipos de dispositivos hidrostáticos são citados como existentes na MB?",
      "options": [
        "Somente elétricos e recarregáveis.",
        "Pneumáticos e astronômicos.",
        "Fixos e descartáveis.",
        "Apenas manuais sem liberação por imersão."
      ],
      "answer": 2,
      "explanation": "O slide relaciona dois tipos: dispositivos fixos e descartáveis."
    },
    {
      "id": "s075",
      "topic": 2,
      "page": "99",
      "question": "O que deve ser feito com a peação das BSVs em mar grosso, segundo a regra apresentada?",
      "options": [
        "Mantê-la conforme o dispositivo hidrostático, sem cabos ou cintas extras.",
        "Reforçá-la com qualquer cabo disponível.",
        "Soldar o casulo ao berço.",
        "Amarrar permanentemente a balsa ao convés."
      ],
      "answer": 0,
      "explanation": "O material proíbe reforços de peação que comprometam a liberação prevista do casulo."
    },
    {
      "id": "s076",
      "topic": 2,
      "page": "102",
      "question": "Antes do lançamento manual do casulo, qual verificação é essencial no procedimento descrito?",
      "options": [
        "Certificar-se de que o cabo comando está amarrado ao navio.",
        "Retirar toda a dotação de equipamentos da balsa.",
        "Desconectar a ampola de gás da balsa.",
        "Confirmar que o cabo comando foi cortado."
      ],
      "answer": 0,
      "explanation": "Após liberar a cinta, os lançadores devem confirmar a fixação do cabo comando antes de lançar o casulo."
    },
    {
      "id": "s077",
      "topic": 2,
      "page": "102",
      "question": "Qual faixa de coluna d’água é indicada para atuação dos dispositivos hidrostáticos no material?",
      "options": [
        "24 a 30 metros.",
        "36 a 48 metros.",
        "10 a 15 metros.",
        "1,5 a 5 metros."
      ],
      "answer": 3,
      "explanation": "O texto do slide indica atuação entre 1,5 e 5 m de coluna d’água para liberar os casulos durante o afundamento."
    },
    {
      "id": "s078",
      "topic": 2,
      "page": "105",
      "question": "Quais são as funções do cabo comando da balsa descrito na aula?",
      "options": [
        "Servir apenas para unir os coletes entre si.",
        "Atuar como boça e como cabo de disparo.",
        "Atuar como antena e como linha de pesca.",
        "Substituir a âncora flutuante e alimentar o rádio."
      ],
      "answer": 1,
      "explanation": "O cabo comando fica aduchado no interior do casulo e exerce as duas funções citadas."
    },
    {
      "id": "s079",
      "topic": 2,
      "page": "105",
      "question": "Quais dimensões são atribuídas ao cabo comando no exemplo da aula?",
      "options": [
        "10 mm de diâmetro e 36 m de comprimento.",
        "12 mm de diâmetro e 3 m de comprimento.",
        "5 mm de diâmetro e 48 m de comprimento.",
        "36 mm de diâmetro e 10 m de comprimento."
      ],
      "answer": 0,
      "explanation": "O material especifica cabo de polipropileno com 10 mm de diâmetro e 36 m de comprimento."
    },
    {
      "id": "s080",
      "topic": 2,
      "page": "105",
      "question": "Na sequência automática de afundamento descrita, o que provoca a atuação do disparo da balsa?",
      "options": [
        "O aquecimento do casulo pelo sol.",
        "A chegada de água ao estojo de medicamentos.",
        "A tração resultante do navio afundando contra a flutuação positiva do conjunto casulo/balsa.",
        "A recepção de um pulso radar de 9 GHz."
      ],
      "answer": 2,
      "explanation": "A contraposição entre o peso do navio e o empuxo do conjunto flutuante gera a tração descrita para o disparo."
    },
    {
      "id": "s081",
      "topic": 2,
      "page": "118",
      "question": "Em qual bordo deve subir o homem que irá desvirar a balsa, segundo a técnica apresentada?",
      "options": [
        "Sobre a embarcação de resgate, sem tocar a balsa.",
        "No centro do toldo, afastado do cabo de desvirar.",
        "Sempre no bordo oposto ao da ampola.",
        "No bordo onde se encontra a ampola de gás."
      ],
      "answer": 3,
      "explanation": "A técnica apresentada orienta subir no bordo da ampola e tracionar o cabo destinado à manobra."
    },
    {
      "id": "s082",
      "topic": 2,
      "page": "118",
      "question": "Qual posição em relação ao vento deve ser buscada para o homem durante a manobra de desvirar a BSV?",
      "options": [
        "Sempre perpendicular ao vento, sem girar a balsa.",
        "A posição em relação ao vento é irrelevante no procedimento.",
        "A sotavento.",
        "A barlavento em qualquer situação."
      ],
      "answer": 2,
      "explanation": "O slide orienta girar a balsa até que o homem fique a sotavento antes de se lançar para trás."
    },
    {
      "id": "s083",
      "topic": 2,
      "page": "123",
      "question": "Quem deve dar a ordem expressa para abandonar o navio?",
      "options": [
        "Qualquer náufrago que veja uma balsa.",
        "O Comandante.",
        "O primeiro militar que alcance o convés.",
        "O operador do dessalinizador."
      ],
      "answer": 1,
      "explanation": "A aula destaca calma, disciplina e a necessidade de ordem expressa do Comandante para o abandono."
    },
    {
      "id": "s084",
      "topic": 2,
      "page": "124",
      "question": "Como deve ser escolhido o local de salto no procedimento de abandono apresentado?",
      "options": [
        "Sempre a sotavento, sob equipamentos suspensos.",
        "Maior altura disponível, junto da avaria.",
        "Próximo de destroços, para facilitar o apoio imediato.",
        "Pouca altura, a barlavento e longe de avarias no costado."
      ],
      "answer": 3,
      "explanation": "Esses três critérios são indicados no slide. O abatimento do navio pelo vento auxilia o afastamento do náufrago."
    },
    {
      "id": "s085",
      "topic": 2,
      "page": "125",
      "question": "Quando os coletes infláveis devem ser enchidos no procedimento de salto apresentado?",
      "options": [
        "Somente depois do embarque na balsa.",
        "Antes de subir ao posto de abandono.",
        "Quando o usuário já estiver dentro da água.",
        "Antes de vestir o colete."
      ],
      "answer": 2,
      "explanation": "A aula orienta o enchimento na água; o salto é feito de pé, nunca de cabeça."
    },
    {
      "id": "s086",
      "topic": 2,
      "page": "125",
      "question": "Qual verificação deve anteceder o salto de abandono?",
      "options": [
        "Confirmar que não há pessoas ou destroços na área de queda.",
        "Esperar que todos os rádios parem de transmitir.",
        "Confirmar que a balsa foi solta e está fora de vista.",
        "Verificar apenas se o vento vem da proa."
      ],
      "answer": 0,
      "explanation": "É necessário observar o local de entrada na água para evitar atingir pessoas ou destroços."
    },
    {
      "id": "s087",
      "topic": 2,
      "page": "125",
      "question": "Qual postura de salto é apresentada na aula?",
      "options": [
        "Sentado, com as pernas abertas.",
        "De cabeça, braços estendidos e pernas afastadas.",
        "De pé, pernas juntas, corpo ereto e cabeça erguida.",
        "De costas, cabeça baixa e braços soltos."
      ],
      "answer": 2,
      "explanation": "A aula orienta salto de pé, com postura firme, proteção do salva-vidas e das vias aéreas."
    },
    {
      "id": "s088",
      "topic": 2,
      "page": "125",
      "question": "Qual ação dos braços é descrita para o salto?",
      "options": [
        "Abrir completamente para aumentar a resistência ao ar.",
        "Cruzar sobre o peito, firmar o salva-vidas e proteger as vias aéreas com uma mão.",
        "Segurar objetos pesados em ambas as mãos.",
        "Manter as duas mãos atrás das costas."
      ],
      "answer": 1,
      "explanation": "O objetivo da postura é manter o equipamento firme junto ao corpo e proteger as vias aéreas."
    },
    {
      "id": "s089",
      "topic": 2,
      "page": "130",
      "question": "Após entrar na água em ambiente tropical, em que sentido o material orienta afastar-se do navio?",
      "options": [
        "Sempre no sentido da corrente, independentemente do navio.",
        "Para barlavento.",
        "Para sotavento.",
        "Sempre para a popa, independentemente do vento."
      ],
      "answer": 1,
      "explanation": "O procedimento apresentado é afastar-se imediatamente do navio nadando para barlavento."
    },
    {
      "id": "s090",
      "topic": 2,
      "page": "131–133",
      "question": "Qual conjunto de objetivos justifica o círculo de sobrevivência apresentado?",
      "options": [
        "Aumento do gasto energético para manter o grupo aquecido.",
        "Proteção mútua, redução da perda de calor e maior facilidade de avistamento.",
        "Substituição de todos os coletes por natação contínua.",
        "Aumento da dispersão e ocultação dos náufragos."
      ],
      "answer": 1,
      "explanation": "O agrupamento descrito busca proteção contra a fauna, menor perda de calor e melhor detecção pelas unidades de busca."
    },
    {
      "id": "s091",
      "topic": 2,
      "page": "136",
      "question": "Qual é o objetivo da posição H.E.L.P.?",
      "options": [
        "Aumentar a velocidade de nado.",
        "Reduzir a perda de calor corporal.",
        "Acionar automaticamente o colete.",
        "Sinalizar uma aeronave por meio de movimentos."
      ],
      "answer": 1,
      "explanation": "H.E.L.P. significa Heat Escape Lessening Posture, postura voltada à redução da perda de calor."
    },
    {
      "id": "s092",
      "topic": 2,
      "page": "138",
      "question": "Qual posição é indicada em águas frias quando há outros náufragos?",
      "options": [
        "Dispersão individual em sentidos opostos.",
        "Permanência em fila com grandes intervalos.",
        "Huddle, ou amontoado.",
        "Nado contínuo sem apoio dos coletes."
      ],
      "answer": 2,
      "explanation": "O material indica a posição coletiva huddle e orienta que os feridos fiquem no centro do círculo."
    },
    {
      "id": "s093",
      "topic": 2,
      "page": "138",
      "question": "Na posição huddle, onde devem ficar os feridos, segundo o material?",
      "options": [
        "Isolados a sotavento do grupo.",
        "Submersos sob os náufragos sem ferimentos.",
        "No centro do círculo.",
        "Na borda externa, afastados dos demais."
      ],
      "answer": 2,
      "explanation": "O centro do agrupamento é a posição indicada para os feridos no slide."
    },
    {
      "id": "s094",
      "topic": 3,
      "page": "4",
      "question": "Após distribuir os náufragos nas balsas, como evitar que elas se dispersem?",
      "options": [
        "Mantê-las agrupadas, amarrando-as entre si pelas boças.",
        "Reforçar sua peação ao navio em afundamento.",
        "Liberar todas as boças e separar as balsas.",
        "Retirar seus toldos e esvaziar as âncoras flutuantes."
      ],
      "answer": 0,
      "explanation": "A aula orienta manter as balsas reunidas por suas boças para evitar a dispersão."
    },
    {
      "id": "s095",
      "topic": 3,
      "page": "7",
      "question": "Qual avaliação deve ser realizada inicialmente entre os ocupantes das embarcações de sobrevivência?",
      "options": [
        "Levantamento das condições físicas de todo o pessoal.",
        "Apenas contagem dos anzóis disponíveis.",
        "Somente conferência dos relógios individuais.",
        "Exclusivamente identificação de quem sabe navegar."
      ],
      "answer": 0,
      "explanation": "O levantamento permite organizar o atendimento aos feridos, com médicos e enfermeiros percorrendo as balsas, quando existentes."
    },
    {
      "id": "s096",
      "topic": 3,
      "page": "7",
      "question": "Como deve funcionar o serviço de vigilância nas balsas, segundo o material?",
      "options": [
        "Somente de dia, em quartos de seis horas.",
        "Apenas após avistar a primeira aeronave.",
        "Durante 24 horas, em quartos de duas horas.",
        "Por uma hora ao dia, sem revezamento."
      ],
      "answer": 2,
      "explanation": "A vigilância contínua aumenta a chance de avistar unidades de busca, destroços úteis e embarcações ou aeronaves em trânsito."
    },
    {
      "id": "s097",
      "topic": 3,
      "page": "8",
      "question": "Como o material orienta tratar objetos úteis, porém pontiagudos, cortantes ou volumosos, encontrados na água?",
      "options": [
        "Mantê-los amarrados e flutuando, sem introduzi-los a bordo.",
        "Acondicioná-los sob os compartimentos infláveis.",
        "Colocá-los soltos no piso da balsa.",
        "Descartar obrigatoriamente qualquer objeto recolhido."
      ],
      "answer": 0,
      "explanation": "Esses objetos podem ser úteis, mas sua entrada a bordo é desaconselhada; mantê-los flutuando também amplia a possibilidade de detecção visual."
    },
    {
      "id": "s098",
      "topic": 3,
      "page": "8",
      "question": "Se alguém cair da embarcação de sobrevivência, qual recurso de recolhimento é indicado?",
      "options": [
        "A boia orgânica, podendo improvisar com colete preso a um cabo.",
        "A ampola de gás desconectada da balsa.",
        "O casulo vazio lançado sem cabo.",
        "A âncora flutuante usada como peso."
      ],
      "answer": 0,
      "explanation": "O procedimento procura recolher a pessoa sem gasto extra de energia; o slide menciona a boia e o improviso com colete e cabo."
    },
    {
      "id": "s099",
      "topic": 3,
      "page": "9",
      "question": "Como devem ser distribuídas as tarefas na balsa?",
      "options": [
        "Apenas entre os feridos mais graves.",
        "Entre todos os ocupantes que estejam em boas condições físicas.",
        "Somente ao militar mais antigo, sem auxiliares.",
        "Por sorteio, sem considerar a condição física."
      ],
      "answer": 1,
      "explanation": "A distribuição de tarefas específicas inclui diário, navegação, pesca, assistência, limpeza, água e racionamento."
    },
    {
      "id": "s100",
      "topic": 3,
      "page": "9",
      "question": "Qual conjunto contém tarefas citadas para organização da sobrevivência?",
      "options": [
        "Desmontar o colete, retirar o toldo e dispensar o diário.",
        "Polir o casco, elevar a velocidade e corrigir o alinhamento do motor.",
        "Reduzir a vigilância, dispersar as balsas e suspender o atendimento.",
        "Manter a balsa limpa e seca, controlar a água e racionar a comida."
      ],
      "answer": 3,
      "explanation": "São tarefas da rotina de sobrevivência, juntamente com navegação, pesca, assistência aos feridos e escrituração do diário."
    },
    {
      "id": "s101",
      "topic": 3,
      "page": "11",
      "question": "Quais aspectos de liderança são enumerados para uma situação de naufrágio?",
      "options": [
        "Preservação, espírito de equipe, estilo de liderança, comunicação e flexibilidade.",
        "Velocidade, tonelagem, calado e autonomia.",
        "Exclusivamente força física e capacidade de nadar.",
        "Apenas hierarquia, punição e silêncio."
      ],
      "answer": 0,
      "explanation": "Esses cinco aspectos orientam a condução do grupo até a chegada do resgate."
    },
    {
      "id": "s102",
      "topic": 3,
      "page": "12",
      "question": "Como o líder deve tratar o instinto de preservação na situação de sobrevivência?",
      "options": [
        "Considerá-lo secundário em relação à conservação dos objetos.",
        "Restringi-lo a quem comanda a balsa.",
        "Desconsiderá-lo ao distribuir as tarefas.",
        "Elevá-lo à condição de valor primordial do grupo."
      ],
      "answer": 3,
      "explanation": "O slide propõe transformar a preservação da vida em valor primordial coletivo."
    },
    {
      "id": "s103",
      "topic": 3,
      "page": "14",
      "question": "Por que o líder precisa formar espírito de equipe entre os ocupantes?",
      "options": [
        "Porque a tripulação da embarcação de sobrevivência não será obrigatoriamente um grupo coeso.",
        "Porque todo grupo de náufragos já possui coesão garantida.",
        "Porque o espírito de equipe dispensa qualquer liderança.",
        "Porque a divisão dos sobreviventes sempre facilita o resgate."
      ],
      "answer": 0,
      "explanation": "A coesão não é automática e sua construção contribui para conduzir o grupo na situação adversa."
    },
    {
      "id": "s104",
      "topic": 3,
      "page": "17",
      "question": "Qual estilo de liderança é recomendado no material?",
      "options": [
        "Imutável, sem considerar as circunstâncias.",
        "Ausência de decisões e de responsabilidades.",
        "Adaptável ou situacional.",
        "Dependente apenas de força física."
      ],
      "answer": 2,
      "explanation": "O líder deve adotar estilos adequados às diferentes situações, preservando as relações pessoais, o moral e o objetivo comum."
    },
    {
      "id": "s105",
      "topic": 3,
      "page": "19",
      "question": "Qual efeito é associado a manter o grupo informado da situação e das ações?",
      "options": [
        "Dispensar a distribuição de tarefas.",
        "Eliminar a necessidade de organizar o atendimento.",
        "Aliviar o estresse e reforçar a importância de cada membro.",
        "Garantir que o resgate chegue em horário determinado."
      ],
      "answer": 2,
      "explanation": "A comunicação fortalece a participação do grupo e ajuda a reduzir o estresse, sem garantir o resultado do resgate."
    },
    {
      "id": "s106",
      "topic": 3,
      "page": "20",
      "question": "Novas informações indicam que uma decisão anterior pode ser melhorada. Qual atitude corresponde à flexibilidade?",
      "options": [
        "Manter a decisão apenas para evitar reconhecer uma mudança.",
        "Ouvir as contribuições e reavaliar a decisão.",
        "Suspender toda comunicação com o grupo.",
        "Impedir que os demais tragam informações."
      ],
      "answer": 1,
      "explanation": "Flexibilidade implica ser acessível, aberto a mudanças e capaz de reavaliar decisões diante de novos fatos."
    },
    {
      "id": "s107",
      "topic": 3,
      "page": "23",
      "question": "Quais dois fatores são destacados na introdução à probabilidade de sobrevivência?",
      "options": [
        "Hipotermia e insolação.",
        "Trim e banda.",
        "Corrosão e incrustação.",
        "Cavitação e sobrepressão."
      ],
      "answer": 0,
      "explanation": "O slide destaca hipotermia e insolação e informa que a abordagem completa pertence à aula de primeiros socorros."
    },
    {
      "id": "s108",
      "topic": 3,
      "page": "24",
      "question": "Qual condição aparece entre as enfermidades relacionadas à sobrevivência prolongada no material?",
      "options": [
        "Alquebramento.",
        "Desvio da agulha.",
        "Cavitação.",
        "Escorbuto."
      ],
      "answer": 3,
      "explanation": "A lista inclui prisão de ventre, irritações e ulcerações, descoloração de unhas e extremidades, escorbuto e dificuldade de urinar."
    },
    {
      "id": "s109",
      "topic": 3,
      "page": "25",
      "question": "Como o material caracteriza o medo em situação de perigo?",
      "options": [
        "Uma reação que necessariamente demonstra falta de preparo.",
        "Uma condição incompatível com qualquer possibilidade de sobrevivência.",
        "Uma sensação normal que deve ser considerada na condução do grupo.",
        "Um sinal de que toda tarefa coletiva deve ser encerrada."
      ],
      "answer": 2,
      "explanation": "O slide reconhece o medo como normal e enfatiza pensamentos positivos e manutenção da esperança."
    },
    {
      "id": "s110",
      "topic": 3,
      "page": "28",
      "question": "Diante da limitação de água disponível, qual princípio orienta os sobreviventes?",
      "options": [
        "Suspender o controle da água coletada.",
        "Aumentar atividades físicas para provocar transpiração.",
        "Substituir a água potável por água do mar.",
        "Reduzir ao mínimo a perda de água do organismo."
      ],
      "answer": 3,
      "explanation": "A ingestão depende da ração e da coleta; conservar a água do organismo é o princípio apresentado."
    },
    {
      "id": "s111",
      "topic": 3,
      "page": "30",
      "question": "Qual volume individual de água potável compõe a ração de abandono descrita?",
      "options": [
        "12 litros.",
        "5 litros.",
        "0,25 litro.",
        "1,5 litro."
      ],
      "answer": 3,
      "explanation": "A aula apresenta 1,5 litro de água potável como a parte líquida individual da ração de abandono."
    },
    {
      "id": "s112",
      "topic": 3,
      "page": "30",
      "question": "O que o material estabelece sobre beber água do mar?",
      "options": [
        "É recomendada quando misturada em partes iguais com urina.",
        "É adequada ao consumo depois de apenas agitada.",
        "Não deve ser ingerida; é inadequada ao consumo humano.",
        "É indicada para substituir toda a água potável."
      ],
      "answer": 2,
      "explanation": "A água do mar é explicitamente excluída como bebida no slide sobre água."
    },
    {
      "id": "s113",
      "topic": 3,
      "page": "31",
      "question": "Qual princípio é utilizado pelo dessalinizador manual apresentado?",
      "options": [
        "Diluição com água salgada.",
        "Congelamento por expansão de gás do colete.",
        "Osmose reversa com membrana semipermeável.",
        "Decantação sem filtragem."
      ],
      "answer": 2,
      "explanation": "O slide descreve a membrana como filtro molecular do equipamento de osmose reversa."
    },
    {
      "id": "s114",
      "topic": 3,
      "page": "31",
      "question": "Qual conjunto contém os componentes básicos do dessalinizador manual descrito?",
      "options": [
        "Ampola de gás, apito e luz de posicionamento.",
        "Sextante, cronômetro e cartas-piloto.",
        "Motor diesel, hélice e tanque de combustível.",
        "Bomba manual, tubos de aspiração e descarga e bolsa coletora."
      ],
      "answer": 3,
      "explanation": "Esses componentes integram o equipamento usado para ampliar a disponibilidade de água potável."
    },
    {
      "id": "s115",
      "topic": 3,
      "page": "34",
      "question": "Qual recurso de pesca está previsto nas embarcações de sobrevivência descritas?",
      "options": [
        "Nenhum material destinado à pesca.",
        "Um kit de pesca.",
        "Somente arpão elétrico.",
        "Rede de arrasto motorizada obrigatória."
      ],
      "answer": 1,
      "explanation": "A aula menciona o kit existente e possibilidades de improvisar anzóis com espinhas de peixes e ossos de pássaros."
    },
    {
      "id": "s116",
      "topic": 3,
      "page": "34",
      "question": "Que recurso é citado para improvisar um anzol?",
      "options": [
        "Espinha de peixe ou osso de pássaro.",
        "A lente da luz de posicionamento.",
        "O cartucho de um pirotécnico aceso.",
        "A ampola de gás aberta."
      ],
      "answer": 0,
      "explanation": "São os exemplos de improviso apresentados na seção de pesca."
    },
    {
      "id": "s117",
      "topic": 3,
      "page": "35",
      "question": "Quais peixes são apresentados como exemplos que não devem ser embarcados vivos na BSV?",
      "options": [
        "Barracuda, agulhão e peixe-espada.",
        "Sardinha, manjuba e lambari.",
        "Somente peixes menores que a mão.",
        "Qualquer peixe atraído pela sombra, sem exceção."
      ],
      "answer": 0,
      "explanation": "O slide destaca nominalmente barracuda, agulhão e peixe-espada como riscos quando embarcados vivos."
    },
    {
      "id": "s118",
      "topic": 3,
      "page": "40",
      "question": "Em que condição a aula admite tentar navegar com as embarcações de sobrevivência?",
      "options": [
        "Sempre que a água potável cair à metade.",
        "Obrigatoriamente ao completar duas horas na balsa.",
        "Quando se avista terra ou há absoluta certeza de sua proximidade.",
        "Assim que qualquer nuvem aparecer no horizonte."
      ],
      "answer": 2,
      "explanation": "Na ausência de terra avistada ou certeza de proximidade, o slide orienta não tentar navegar."
    },
    {
      "id": "s119",
      "topic": 3,
      "page": "40",
      "question": "Por que manter as âncoras flutuantes na água?",
      "options": [
        "Para reduzir a velocidade de deriva das embarcações.",
        "Para fixá-las obrigatoriamente ao fundo oceânico.",
        "Para substituir o cabo de disparo da balsa.",
        "Para aumentar sua velocidade em relação ao vento."
      ],
      "answer": 0,
      "explanation": "A âncora flutuante é apresentada como recurso de redução da deriva, não como ferro destinado ao fundo."
    },
    {
      "id": "s120",
      "topic": 3,
      "page": "41",
      "question": "Qual conjunto corresponde a itens desejáveis no kit de navegação para abandono?",
      "options": [
        "Cartas, sextante e publicações, rádio, agulha portátil e GPS portátil.",
        "Apenas o kit de pesca e o estojo de reparos.",
        "Somente uma carta de grande escala de qualquer porto.",
        "Somente um radar fixo alimentado pelo navio."
      ],
      "answer": 0,
      "explanation": "A preparação envolve recursos de navegação e posicionamento portáteis e apropriados ao abandono."
    },
    {
      "id": "s121",
      "topic": 3,
      "page": "41",
      "question": "Que cartas são preferidas no kit de navegação apresentado?",
      "options": [
        "Apenas desenhos dos turcos da embarcação.",
        "Somente cartas rodoviárias da costa.",
        "Exclusivamente plantas de máquinas.",
        "Cartas gerais de pequena escala e cartas-piloto."
      ],
      "answer": 3,
      "explanation": "O slide cita expressamente cartas náuticas gerais de pequena escala e cartas-piloto."
    },
    {
      "id": "s122",
      "topic": 3,
      "page": "43",
      "question": "No Hemisfério Norte, que astro é usado no método de orientação noturna descrito?",
      "options": [
        "A estrela mais próxima visualmente da Lua.",
        "Estrela Polar (Polaris).",
        "O centro do Falso Cruzeiro.",
        "Qualquer planeta próximo ao horizonte."
      ],
      "answer": 1,
      "explanation": "A estrela Polar serve de referência para a direção do norte no método apresentado."
    },
    {
      "id": "s123",
      "topic": 3,
      "page": "43–44",
      "question": "Qual constelação auxilia a identificação da estrela Polar no método apresentado?",
      "options": [
        "Ursa Maior.",
        "Escorpião.",
        "Órion.",
        "Cruzeiro do Sul."
      ],
      "answer": 0,
      "explanation": "A aula utiliza a figura da caçarola da Ursa Maior e suas estrelas apontadoras para localizar Polaris."
    },
    {
      "id": "s124",
      "topic": 3,
      "page": "45",
      "question": "Qual constelação é apresentada para orientação noturna no Hemisfério Sul?",
      "options": [
        "Cruzeiro do Sul.",
        "Ursa Maior como única referência do polo sul.",
        "Falso Cruzeiro, sem necessidade de distinção.",
        "Ursa Menor como única referência do polo sul."
      ],
      "answer": 0,
      "explanation": "O slide destaca o Cruzeiro do Sul e a necessidade de não confundi-lo com o Falso Cruzeiro."
    },
    {
      "id": "s125",
      "topic": 3,
      "page": "43 e 45",
      "question": "Qual associação entre hemisfério e referência noturna corresponde à aula?",
      "options": [
        "Norte — estrela Polar; Sul — Cruzeiro do Sul.",
        "Ambos — somente a estrela mais brilhante do céu.",
        "Norte — Cruzeiro do Sul; Sul — estrela Polar.",
        "Norte — Falso Cruzeiro; Sul — Ursa Maior."
      ],
      "answer": 0,
      "explanation": "Os métodos apresentados distinguem Polaris no Hemisfério Norte e o Cruzeiro do Sul no Hemisfério Sul."
    },
    {
      "id": "s126",
      "topic": 4,
      "page": "51",
      "question": "Quais objetivos do GMDSS são destacados na aula?",
      "options": [
        "Socorro rápido, eficaz e coordenado e intercâmbio de informações de segurança marítima.",
        "Garantir comunicação exclusivamente entre aeronaves comerciais.",
        "Somente acompanhar a navegação de recreio.",
        "Substituir os coletes e as balsas por equipamentos rádio."
      ],
      "answer": 0,
      "explanation": "O slide reúne a coordenação do socorro e o envio e recebimento de informações sobre segurança marítima."
    },
    {
      "id": "s127",
      "topic": 4,
      "page": "51",
      "question": "Em quantas áreas de operação a divisão marítima do GMDSS é apresentada no material?",
      "options": [
        "Oito.",
        "Seis.",
        "Quatro.",
        "Duas."
      ],
      "answer": 2,
      "explanation": "A aula informa a divisão da área marítima mundial em quatro áreas de operação."
    },
    {
      "id": "s128",
      "topic": 4,
      "page": "54",
      "question": "O que identifica a sigla EPIRB?",
      "options": [
        "Radiobaliza indicadora de posição de emergência.",
        "Equipamento de purificação de água da balsa.",
        "Luz fixa de navegação de bombordo.",
        "Radar de controle de propulsão."
      ],
      "answer": 0,
      "explanation": "EPIRB é a radiobaliza de emergência destinada a indicar posição, distinta do transponder radar SART."
    },
    {
      "id": "s129",
      "topic": 4,
      "page": "54",
      "question": "Qual recurso da EPIRB é citado para facilitar sua localização à noite?",
      "options": [
        "Uma fumaça preta contínua.",
        "Uma âncora flutuante luminosa.",
        "Um paraquedas com bandeira.",
        "Uma luz estroboscópica."
      ],
      "answer": 3,
      "explanation": "O slide relaciona a strobe light à localização noturna da EPIRB."
    },
    {
      "id": "s130",
      "topic": 4,
      "page": "54",
      "question": "Qual autonomia de funcionamento da bateria da EPIRB é indicada na aula?",
      "options": [
        "48 horas.",
        "12 horas.",
        "30 dias.",
        "2 horas."
      ],
      "answer": 0,
      "explanation": "A característica apresentada para a EPIRB é alimentação por bateria capaz de mantê-la em funcionamento durante 48 horas."
    },
    {
      "id": "s131",
      "topic": 4,
      "page": "54",
      "question": "Quais formas de ativação da EPIRB são citadas no material?",
      "options": [
        "Somente por pulso radar.",
        "Manual ou automática em contato com a água.",
        "Exclusivamente pela luz solar.",
        "Apenas por ordem de satélite recebida pelo operador."
      ],
      "answer": 1,
      "explanation": "O slide descreve a ativação manual e a automática ao contato com a água."
    },
    {
      "id": "s132",
      "topic": 4,
      "page": "56",
      "question": "O que é o SART descrito na aula?",
      "options": [
        "Um mecanismo de soltura hidrostática.",
        "Um transponder radar de busca e salvamento.",
        "Um dessalinizador manual.",
        "Um receptor de sinais horários astronômicos."
      ],
      "answer": 1,
      "explanation": "O SART responde à interrogação radar, auxiliando a localização dos sobreviventes."
    },
    {
      "id": "s133",
      "topic": 4,
      "page": "56",
      "question": "Em qual faixa radar o SART apresentado é ativado?",
      "options": [
        "156 MHz.",
        "2 MHz.",
        "9 GHz.",
        "406 MHz."
      ],
      "answer": 2,
      "explanation": "O slide especifica ativação por pulso radar na faixa de 9 GHz. Essa informação não deve ser confundida com frequências de outros equipamentos de socorro."
    },
    {
      "id": "s134",
      "topic": 4,
      "page": "56",
      "question": "Quantos pulsos são relacionados à resposta do SART no material?",
      "options": [
        "Seis.",
        "Doze.",
        "Vinte e quatro.",
        "Três."
      ],
      "answer": 1,
      "explanation": "O slide descreve uma série de 12 pulsos apresentados na tela do radar."
    },
    {
      "id": "s135",
      "topic": 4,
      "page": "54 e 56",
      "question": "Qual associação distingue corretamente EPIRB e SART?",
      "options": [
        "EPIRB — dessalinizador; SART — rádio MF/HF.",
        "EPIRB — refletor passivo; SART — âncora flutuante.",
        "EPIRB — radiobaliza de posição; SART — transponder radar.",
        "EPIRB — sinal fumígeno; SART — facho manual."
      ],
      "answer": 2,
      "explanation": "São equipamentos com funções e formas de detecção distintas: alerta/localização por radiobaliza e resposta radar."
    },
    {
      "id": "s136",
      "topic": 4,
      "page": "59",
      "question": "Por ocasião do abandono, qual orientação é dada sobre equipamentos de comunicação de emergência via rádio?",
      "options": [
        "Só devem ser levados após acabar a água potável.",
        "Devem ser embarcados nas embarcações de sobrevivência.",
        "Devem ser deixados no navio em qualquer circunstância.",
        "Devem ser substituídos integralmente por apitos."
      ],
      "answer": 1,
      "explanation": "A aula orienta levar os equipamentos de comunicação de emergência para as embarcações de sobrevivência."
    },
    {
      "id": "s137",
      "topic": 4,
      "page": "59",
      "question": "Qual sequência representa o SOS apresentado para transmissão automática?",
      "options": [
        "Três pontos, três traços e três pontos.",
        "Três traços, três pontos e três traços.",
        "Um traço, um ponto e um traço.",
        "Dois pontos, dois traços e dois pontos."
      ],
      "answer": 0,
      "explanation": "O sinal SOS é mostrado como ••• ——— •••."
    },
    {
      "id": "s138",
      "topic": 4,
      "page": "60",
      "question": "Qual orientação é dada para utilizar rádios alimentados por bateria ou pilha?",
      "options": [
        "Desligá-los definitivamente para preservar toda a carga.",
        "Usá-los apenas para conversas sem relação com o socorro.",
        "Transmitir continuamente sem considerar a autonomia.",
        "Economizar energia e seguir as instruções particulares do equipamento."
      ],
      "answer": 3,
      "explanation": "O slide orienta operação em intervalos frequentes e uso econômico dos equipamentos a bateria."
    },
    {
      "id": "s139",
      "topic": 4,
      "page": "60",
      "question": "Quando devem ser transmitidos sinais de emergência, segundo a aula?",
      "options": [
        "Somente em caso de perigo real.",
        "Para cumprimentar embarcações próximas.",
        "Sempre que o operador muda de quarto.",
        "Sempre que se deseja testar o alcance sem aviso."
      ],
      "answer": 0,
      "explanation": "A restrição a perigo real é expressa no slide de instruções de operação."
    },
    {
      "id": "s140",
      "topic": 4,
      "page": "62",
      "question": "Qual conjunto é composto apenas por artefatos pirotécnicos relacionados na aula?",
      "options": [
        "SART, EPIRB e agulha magnética.",
        "Espelho, dessalinizador e GPS.",
        "Foguete com paraquedas, facho manual e sinal fumígeno flutuante.",
        "Boia, roupa de imersão e aparelho flutuante."
      ],
      "answer": 2,
      "explanation": "O material também cita o sinal de perigo noturno e diurno, distinguindo esses artefatos dos demais meios de sinalização."
    },
    {
      "id": "s141",
      "topic": 4,
      "page": "63",
      "question": "A que altura o foguete luminoso apresentado ejeta o paraquedas?",
      "options": [
        "48 metros.",
        "1.500 metros.",
        "30 metros.",
        "300 metros."
      ],
      "answer": 3,
      "explanation": "O slide descreve a ejeção do paraquedas a 300 m, com luz vermelha intensa."
    },
    {
      "id": "s142",
      "topic": 4,
      "page": "63",
      "question": "Qual sinal luminoso é produzido pelo foguete com paraquedas descrito?",
      "options": [
        "Luz branca em código de navegação.",
        "Luz verde intermitente.",
        "Luz azul contínua.",
        "Luz vermelha intensa."
      ],
      "answer": 3,
      "explanation": "O foguete é apresentado como sinal de socorro visível a grande distância, com luz vermelha intensa."
    },
    {
      "id": "s143",
      "topic": 4,
      "page": "69",
      "question": "Qual é a descrição do facho manual no material?",
      "options": [
        "Dispositivo que produz apenas fumaça laranja.",
        "Refletor passivo que depende do radar do navio.",
        "Dispositivo de acionamento manual que emite luz vermelha intensa.",
        "Radiobaliza que emite pulsos para satélites."
      ],
      "answer": 2,
      "explanation": "O facho manual é um artefato luminoso de socorro; não deve ser confundido com o fumígeno."
    },
    {
      "id": "s144",
      "topic": 4,
      "page": "69",
      "question": "Em qual período a aula destaca o uso do facho manual para indicar a posição da embarcação de sobrevivência?",
      "options": [
        "Apenas durante nevoeiro com luz solar.",
        "Somente quando a EPIRB está submersa.",
        "Somente ao meio-dia.",
        "À noite."
      ],
      "answer": 3,
      "explanation": "O slide relaciona o facho manual à indicação noturna de posição."
    },
    {
      "id": "s145",
      "topic": 4,
      "page": "73",
      "question": "Que cor de fumaça é atribuída ao sinal fumígeno flutuante?",
      "options": [
        "Azul.",
        "Verde.",
        "Preta.",
        "Laranja."
      ],
      "answer": 3,
      "explanation": "O fumígeno flutuante é descrito como sinal de fumaça laranja de acionamento manual."
    },
    {
      "id": "s146",
      "topic": 4,
      "page": "73",
      "question": "Qual emprego é indicado para o sinal fumígeno flutuante?",
      "options": [
        "Servir de bateria reserva para a EPIRB.",
        "Indicar durante o dia a posição de sobreviventes ou de pessoa na água.",
        "Iluminar permanentemente o interior da balsa à noite.",
        "Medir a velocidade da corrente em qualquer condição."
      ],
      "answer": 1,
      "explanation": "O sinal de fumaça é apresentado para a localização diurna, inclusive de pessoa caída na água."
    },
    {
      "id": "s147",
      "topic": 4,
      "page": "63, 69 e 73",
      "question": "Qual associação entre artefato e efeito corresponde ao material?",
      "options": [
        "Foguete — sinal satelital; facho — fumaça preta; fumígeno — luz branca.",
        "Foguete — luz vermelha com paraquedas; facho — luz vermelha manual; fumígeno — fumaça laranja.",
        "Foguete — fumaça azul; facho — sinal radar; fumígeno — luz verde.",
        "Foguete — luz verde; facho — luz azul; fumígeno — fumaça branca."
      ],
      "answer": 1,
      "explanation": "A distinção entre os três artefatos considera forma de apresentação e efeito visual."
    },
    {
      "id": "s148",
      "topic": 4,
      "page": "76",
      "question": "Qual par de cuidados está explicitamente relacionado ao uso dos pirotécnicos na aula?",
      "options": [
        "Retirar a proteção das mãos e olhar diretamente para o artefato.",
        "Acioná-los no interior fechado da balsa.",
        "Manter os pirotécnicos molhados e sem proteção.",
        "Proteger as mãos e virar o rosto por ocasião do lançamento."
      ],
      "answer": 3,
      "explanation": "O slide destaca proteção das mãos, cuidado com o rosto e proteção do material. O emprego de cada artefato deve seguir suas instruções específicas."
    },
    {
      "id": "s149",
      "topic": 4,
      "page": "76 e 89",
      "question": "Qual orientação a aula dá ao avistar aeronaves comerciais?",
      "options": [
        "Apontar fachos acesos diretamente para a cabine.",
        "Não acioná-las por meio de pirotécnicos.",
        "Lançar todos os foguetes disponíveis.",
        "Usar obrigatoriamente o fumígeno como sinal de pouso."
      ],
      "answer": 1,
      "explanation": "A restrição aparece nos cuidados com pirotécnicos e é reiterada no slide sobre aeronaves comerciais."
    },
    {
      "id": "s150",
      "topic": 4,
      "page": "81",
      "question": "Quais dois métodos clássicos de sinalização visual são apresentados?",
      "options": [
        "Emprego do sol e utilização de corantes na água.",
        "Apenas apitos e sinais sonoros subaquáticos.",
        "Somente pulsos radar e mensagens de texto.",
        "Uso de âncoras e linhas de pesca."
      ],
      "answer": 0,
      "explanation": "Os métodos apresentados procuram aumentar a probabilidade de detecção visual dos náufragos."
    },
    {
      "id": "s151",
      "topic": 4,
      "page": "82",
      "question": "Qual recurso pode ser utilizado para sinalização com auxílio do sol?",
      "options": [
        "Uma âncora flutuante fechada.",
        "Um dessalinizador em funcionamento.",
        "Somente uma EPIRB submersa.",
        "Espelho de sinalização ou pedaço de metal que reflita a luz."
      ],
      "answer": 3,
      "explanation": "O slide cita o espelho existente na embarcação e o improviso com metal para refletir a luz solar."
    },
    {
      "id": "s152",
      "topic": 4,
      "page": "82",
      "question": "No improviso com pedaço de metal, qual é a finalidade do furo central mencionado?",
      "options": [
        "Permitir fazer a visada através dele.",
        "Alimentar a bateria do refletor.",
        "Servir como ponto de entrada de água salgada.",
        "Produzir fumaça ao ser aquecido."
      ],
      "answer": 0,
      "explanation": "O furo central permite orientar a visada durante a sinalização com o reflexo solar."
    },
    {
      "id": "s153",
      "topic": 4,
      "page": "84",
      "question": "Qual é a finalidade do pó marcador na água?",
      "options": [
        "Produzir coloração atípica para aumentar a probabilidade de avistamento.",
        "Acionar o mecanismo de disparo da balsa.",
        "Tornar a água do mar potável.",
        "Reduzir a temperatura do corpo dos náufragos."
      ],
      "answer": 0,
      "explanation": "A coloração chama a atenção das unidades aéreas em busca e facilita a localização visual."
    },
    {
      "id": "s154",
      "topic": 4,
      "page": "84",
      "question": "Quando os corantes de marcação devem ser lançados, segundo a aula?",
      "options": [
        "Somente após a bateria da EPIRB acabar.",
        "Durante o dia.",
        "Apenas antes de ocorrer o abandono.",
        "Exclusivamente à noite."
      ],
      "answer": 1,
      "explanation": "O slide determina emprego diurno dos corantes de marcação."
    },
    {
      "id": "s155",
      "topic": 4,
      "page": "87–88",
      "question": "Qual sinal diurno da aeronave indica que a mensagem foi recebida e compreendida?",
      "options": [
        "Apagar todas as luzes.",
        "Manter as asas imóveis como único sinal previsto.",
        "Balançar as asas.",
        "Fazer um círculo pela direita."
      ],
      "answer": 2,
      "explanation": "No código apresentado pela aula, balançar as asas confirma recebimento e compreensão durante o dia."
    },
    {
      "id": "s156",
      "topic": 4,
      "page": "87–88",
      "question": "Qual sinal diurno é indicado quando a aeronave não compreendeu a mensagem?",
      "options": [
        "Fazer um círculo no ar pela direita.",
        "Balançar as asas.",
        "Lançar obrigatoriamente uma balsa.",
        "Manter uma luz verde acesa continuamente."
      ],
      "answer": 0,
      "explanation": "A aula associa o círculo pela direita à mensagem não compreendida no período diurno."
    },
    {
      "id": "s157",
      "topic": 4,
      "page": "87",
      "question": "No código noturno apresentado, o que indica uma luz verde piscada pela aeronave?",
      "options": [
        "Ordem para beber a água do mar.",
        "Confirmação de que o resgate foi cancelado.",
        "Mensagem não compreendida.",
        "Mensagem recebida e compreendida."
      ],
      "answer": 3,
      "explanation": "O material associa verde à compreensão e vermelho à não compreensão da mensagem durante a noite."
    },
    {
      "id": "s158",
      "topic": 4,
      "page": "87",
      "question": "No código noturno apresentado, o que indica uma luz vermelha piscada pela aeronave?",
      "options": [
        "Indicação da classe do colete utilizado.",
        "Autorização para dispersar as balsas.",
        "Mensagem não compreendida.",
        "Mensagem recebida e compreendida."
      ],
      "answer": 2,
      "explanation": "A distinção apresentada na aula é verde para compreensão e vermelho para não compreensão."
    },
    {
      "id": "s159",
      "topic": 4,
      "page": "87",
      "question": "Qual conjunto de suprimentos pode ser lançado por unidades aéreas de busca, segundo a aula?",
      "options": [
        "Exclusivamente coletes Classe V sem outros equipamentos.",
        "Apenas cartas de grande escala e âncoras de fundo.",
        "Embarcações de sobrevivência, rações, proteção térmica, rádio e primeiros socorros.",
        "Somente combustível e ferramentas de propulsão."
      ],
      "answer": 2,
      "explanation": "O slide relaciona meios e suprimentos voltados à sobrevivência e à assistência aos náufragos."
    }
  ]
};
