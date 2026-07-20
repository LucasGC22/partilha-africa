// Dados Históricos das Colônias e Territórios da África (1914)
const coloniesData = {
  "congo-belga": {
    title: "Congo Belga",
    actualCountries: "República Democrática do Congo",
    period: "1908 - 1960 (1885 - 1908 como propriedade pessoal real)",
    power: "Bélgica",
    powerClass: "colonia-be",
    countries: ["cd"],
    violence: true,
    womenResistance: true,
    summary: "Estabelecido inicialmente como 'Estado Livre do Congo', um domínio pessoal do rei Leopoldo II da Bélgica (1885-1908). A região foi palco de um dos regimes coloniais mais atrozes da história moderna, baseado na exploração brutal de borracha silvestre e marfim. O trabalho forçado era garantido por meio do sequestro de mulheres, incêndio de aldeias, chicotadas sistemáticas e mutilação de mãos e pés de trabalhadores e suas crianças. Estima-se que até 10 milhões de pessoas tenham morrido nesse período. Em 1908, sob forte clamor internacional pelas atrocidades expostas, o controle foi transferido formalmente ao Estado Belga, que encerrou as mutilações em massa mas manteve a pilhagem econômica e a segregação racial até a independência em 1960.",
    resistance: "As mulheres congolesas desempenharam papéis heróicos na manutenção das comunidades dizimadas pela perda de seus homens. Elas organizaram plantações agrícolas de subsistência clandestinas, forneceram comida e esconderijo para fugitivos do trabalho forçado e preservaram tradições orais e danças ritualísticas de resistência. Espiritualmente, a memória do Reino do Congo anterior inspirou revoltas lideradas por mulheres contra a assimilação religiosa. No século XX, movimentos religiosos anticoloniais incorporavam a liderança de mulheres locais, que desafiavam o domínio de inspetores belgas e missionários ocidentais.",
    curiosity: "A tragédia das mãos cortadas: sob o Leopoldismo, o fracasso em atingir as cotas de extração de borracha resultava na amputação das mãos de trabalhadores e de suas crianças pelas milícias coloniais. O horror foi documentado pelo diplomata britânico Roger Casement em 1904 e pelo escritor Mark Twain, gerando escândalo internacional que forçou a transferência da colônia ao Estado belga.",
    localTimeline: [
      { year: "1885", event: "Leopoldo II assume o Congo como propriedade pessoal, criando o 'Estado Livre do Congo'." },
      { year: "1904", event: "Roger Casement denuncia internacionalmente o regime de terror e mutilações em massa." },
      { year: "1908", event: "Pressão internacional força a transferência da colônia ao Estado belga." },
      { year: "1960", event: "Independência proclamada. Patrice Lumumba torna-se o primeiro-ministro; é assassinado meses depois." }
    ]
  },
  "aof": {
    title: "África Ocidental Francesa (AOF)",
    actualCountries: "Senegal, Mali, Guiné, Costa do Marfim, Burkina Faso, Níger, Benin e Mauritânia",
    period: "1895 - 1960",
    power: "França",
    powerClass: "colonia-fr",
    countries: ["sn", "ml", "gn", "ci", "bf", "ne", "bj", "mr"],
    violence: false,
    womenResistance: true,
    summary: "Uma imensa federação colonial centralizada em Dakar, que unificou oito territórios sob administração militar e civil francesa. O objetivo principal era a extração de recursos (cacau, café, amendoim e madeira) e a criação de infraestrutura ferroviária usando trabalho forçado institucionalizado sob o código do 'Indigénat' (regime jurídico que permitia punições corporais imediatas, prisão arbitrária e cobrança abusiva de impostos sem direito de apelação). Além da espoliação econômica, milhares de jovens africanos foram recrutados de forma compulsória para as trincheiras francesas durante a Primeira e Segunda Guerras Mundiais.",
    resistance: "No Benin, destaca-se a lendária atuação militar das Agojie (ou Amazonas de Daomé), um corpo de elite de mulheres guerreiras do Reino do Daomé que impôs sérias perdas às colunas militares francesas invasoras no final do século XIX, lutando com disciplina feroz e lealdade territorial. Ao longo de toda a AOF, as mulheres nos mercados (como as de Dakar e Abidjan) lideraram greves e boicotes alfandegários contra a imposição de tarifas coloniais, usando sua autoridade econômica tradicional e suas redes de solidariedade feminina para paralisar a arrecadação francesa."
  },
  "aef": {
    title: "África Equatorial Francesa (AEF)",
    actualCountries: "Gabão, República do Congo, República Centro-Africana e Chade",
    period: "1910 - 1960",
    power: "França",
    powerClass: "colonia-fr",
    countries: ["ga", "cg", "cf", "td"],
    violence: true,
    womenResistance: false,
    summary: "Federação colonial que imitava o modelo belga de exploração privatizada. A França concedeu cerca de 70% do território a companhias privadas ('concessionárias') para extrair borracha e marfim. Essas empresas operaram regimes de terror semelhantes ao de Leopoldo II no Congo vizinho, com trabalho forçado extremo, sequestros em massa de civis para forçar a produção e assassinatos em massa. A construção da ferrovia Congo-Oceano provocou a morte de dezenas de milhares de nativos por exaustão e doenças.",
    resistance: "As mulheres mantiveram a rede de subsistência rústica nas aldeias assoladas pelo rapto dos homens, criando estratégias de ocultação da produção de alimentos. Elas sabotavam os postos de coleta colonial e mantinham vivas as tradições ancestrais e os dialetos locais, agindo como guardiãs da memória e da coesão social comunitária contra a tentativa de desestruturação e assimilação cultural francesa."
  },
  "argelia-fr": {
    title: "Argélia Francesa",
    actualCountries: "Argélia",
    period: "1830 - 1962 (consolidada pós-1885)",
    power: "França",
    powerClass: "colonia-fr",
    countries: ["dz"],
    violence: true,
    womenResistance: true,
    summary: "Considerada uma extensão do território metropolitano francês ('colônia de povoamento'). Centenas de milhares de colonos europeus apropriaram-se das melhores terras agrícolas costeiras, empurrando a população argelina para o interior árido e privando-a de direitos políticos. A resistência argelina resultou em uma sangrenta Guerra de Independência (1954-1962), marcada pelo uso sistemático de tortura, bombardeios de vilarejos e repressão brutal por parte do exército francês, culminando na morte de centenas de milhares de argelinos.",
    resistance: "As mulheres desempenharam um papel militar e logístico revolucionário fundamental na Frente de Libertação Nacional (FLN). Heroínas como Djamila Bouhired atuaram na guerrilha urbana em Argel, transportando armas e explosivos escondidos sob suas vestes tradicionais e participando de ações armadas diretas. Muitas foram capturadas e torturadas, tornando-se símbolos internacionais da resistência anticolonial feminina. Outras milhares atuavam nas montanhas como enfermeiras, mensageiras e cozinheiras das tropas insurgentes."
  },
  "magrebe-fr": {
    title: "Marrocos e Tunísia",
    actualCountries: "Marrocos e Tunísia",
    period: "Marrocos (1912 - 1956) | Tunísia (1881 - 1956)",
    power: "França",
    powerClass: "colonia-fr",
    countries: ["ma", "tn"],
    violence: false,
    womenResistance: true,
    summary: "Protetorados franceses onde o domínio colonial foi exercido de forma indireta, cooptando as monarquias locais (o Sultão de Marrocos e o Bei de Túnis), mas retendo o controle total das finanças, forças militares e relações exteriores. A colonização focou na exploração de fosfatos, minerais e grandes propriedades agrícolas dedicadas à exportação, resultando em expropriação de camponeses nativos e tensões culturais decorrentes da tentativa de ocidentalização das instituições locais.",
    resistance: "As mulheres marroquinas e tunisianas foram pilares nos movimentos de independência nacionais (como o Istiqlal e o Neo-Destour). Elas organizavam reuniões clandestinas em suas residências (já que os espaços públicos eram vigiados), transportavam panfletos anticoloniais ocultos e preservavam ativamente a herança literária e artística tradicional (poesia berbere e música árabe clássica) como formas estéticas de contestação e afirmação identitária contra a hegemonia cultural francesa."
  },
  "somalia-fr": {
    title: "Somália Francesa",
    actualCountries: "Djibuti",
    period: "1884 - 1977",
    power: "França",
    powerClass: "colonia-fr",
    countries: ["dj"],
    violence: false,
    womenResistance: false,
    summary: "Território costeiro adquirido estrategicamente pela França na entrada do Mar Vermelho, transformado em entreposto comercial e base de reabastecimento de carvão para a marinha mercante e militar. A exploração foi concentrada na construção do porto de Djibuti e da ferrovia para Adis Abeba na Etiópia. A população nômade local foi marginalizada das atividades urbanas e submetida a controles militares severos nas fronteiras.",
    resistance: "Mulheres das etnias Afar e Issa atuaram na preservação cultural dos povos pastores nômades. Através da poesia lírica oral tradicional e de canções populares de protesto, elas denunciavam as restrições coloniais à mobilidade territorial e o trabalho mal remunerado no porto colonial, mantendo a coesão social fora do perímetro urbano dominado pelos franceses."
  },
  "madagascar-fr": {
    title: "Madagascar Colonial",
    actualCountries: "Madagascar",
    period: "1897 - 1960",
    power: "França",
    powerClass: "colonia-fr",
    countries: ["mg"],
    violence: true,
    womenResistance: true,
    summary: "Conquistada militarmente pela França após a deposição da Rainha Ranavalona III. O governador francês aboliu a monarquia local e instituiu o trabalho forçado para ferrovias e plantações de baunilha, café e açúcar. Em 1947, a população insuflou uma massiva rebelião nacionalista que foi brutalmente massacrada pelas forças militares francesas, com bombardeios de aldeias e execuções sumárias que deixaram entre 30 mil e 80 mil mortos.",
    resistance: "As mulheres malgaxes lideraram a oposição cultural e espiritual à assimilação francesa. Sendo historicamente influentes em uma sociedade com fortes traços matrilineares e liderança feminina, elas preservaram rituais sagrados de adoração aos ancestrais (famadihana) que foram proibidos pelos franceses. Durante a insurreição de 1947, organizaram redes secretas de suprimento de comida nas florestas para os guerreiros camponeses rebeldes e forneceram tratamento médico tradicional."
  },
  "africa-oriental-br": {
    title: "África Oriental Britânica",
    actualCountries: "Quênia e Uganda",
    period: "1895 - 1963",
    power: "Reino Unido",
    powerClass: "colonia-uk",
    countries: ["ke", "ug"],
    violence: true,
    womenResistance: true,
    summary: "Território de grande importância agrícola. No Quênia, o governo britânico expropriou as férteis terras altas dos povos locais (especialmente os Kikuyu) para vendê-las a colonos brancos (os 'Shedlers'), confinando a população local em reservas áridas e forçando-a ao trabalho assalariado sob impostos abusivos. Na década de 1950, a insatisfação explodiu na Revolta dos Mau Mau, combatida de forma violenta pelos britânicos através da criação de campos de concentração, realocação forçada de mais de um milhão de camponeses, tortura sistemática e enforcamentos públicos.",
    resistance: "As mulheres foram pilares estratégicos da guerrilha Mau Mau. Além do suporte fundamental como espiãs na administração colonial e contrabandistas de munições ocultas em cestos de alimentos, muitas subiram as montanhas para lutar. A Field Marshal Muthoni Kirima foi uma das líderes militares mais temidas do conflito, comandando unidades de guerrilha na floresta de Aberdare sem nunca ter sido capturada pelos britânicos durante a guerra."
  },
  "sudao-br": {
    title: "Sudão Anglo-Egípcio",
    actualCountries: "Sudão e Sudão do Sul",
    period: "1899 - 1956",
    power: "Reino Unido",
    powerClass: "colonia-uk",
    countries: ["sd", "ss"],
    violence: true,
    womenResistance: true,
    summary: "Administrado formalmente como um condomínio anglo-egípcio, mas sob controle de facto britânico. A conquista foi marcada pela violência brutal da Batalha de Omdurman em 1898, onde metralhadoras Maxim britânicas massacraram dezenas de milhares de rebeldes sudaneses. O governo britânico dividiu administrativamente o Norte (árabe e islâmico) do Sul (negro, cristão e animista), isolando o Sul do desenvolvimento e plantando as sementes das violentas guerras civis posteriores à independência.",
    resistance: "As mulheres sudanesas utilizaram a poesia e o canto tradicional em reuniões sociais femininas (as 'Hakamas') como poderosos instrumentos políticos para satirizar a administração britânica e incitar seus maridos e filhos à revolta armada anticolonial. Hawa al-Tagtaga, cantora nacionalista emblemática, usou sua arte para apoiar as manifestações de independência dos anos 1940 e 1950, sendo presa várias vezes pelas forças de segurança coloniais."
  },
  "egito-br": {
    title: "Egito (Protetorado Britânico)",
    actualCountries: "Egito",
    period: "1882 - 1922 (protetorado oficial 1914 - 1922)",
    power: "Reino Unido",
    powerClass: "colonia-uk",
    countries: ["eg"],
    violence: false,
    womenResistance: true,
    summary: "Ocupado militarmente pela Grã-Bretanha em 1882 para garantir o controle do estratégico Canal de Suez (rota rápida para a Índia). Em 1914 tornou-se um protetorado oficial. O regime britânico controlou os recursos agrícolas (especialmente o algodão) e utilizou o território e os recursos humanos egípcios para a máquina de guerra na Primeira Guerra Mundial, causando desabastecimento de alimentos e inflação severa.",
    resistance: "As egípcias tiveram papel decisivo na Revolução Egípcia de 1919 contra o domínio britânico. Mulheres de todas as classes sociais organizaram marchas maciças de protesto, cortaram linhas telegráficas de ferrovias coloniais para sabotar o exército ocupante e iniciaram o boicote a produtos manufaturados britânicos. Huda Sha'arawi fundou a União Feminista Egípcia, integrando a libertação feminina e a soberania nacional contra o imperialismo."
  },
  "africa-austral-br": {
    title: "África Austral Britânica",
    actualCountries: "África do Sul, Zâmbia, Zimbábue, Malawi, Botsuana, Lesoto e Eswatini",
    period: "1885 - 1961 (consolidada em fases)",
    power: "Reino Unido",
    powerClass: "colonia-uk",
    countries: ["za", "zm", "zw", "mw", "bw", "ls", "sz"],
    violence: true,
    womenResistance: true,
    summary: "Uma imensa região rica em ouro e diamantes. A colonização foi executada pela força militar imperial e por corporações monopolistas como a British South Africa Company de Cecil Rhodes. A dominação envolveu a expropriação violenta de terras de povos como os Xhosa, Zulu e Shona, o confinamento de nativos em reservas e a criação de leis segregacionistas para forçar o trabalho de mineração em condições perigosas. A opressão nessa região plantou as bases estruturais e legais da segregação racial sistemática que culminou no regime do Apartheid na África do Sul.",
    resistance: "A resistência feminina foi multifacetada. No século XIX, a líder espiritual Shona Nehanda Charwe Nyakasikana liderou a primeira rebelião militar armada contra os colonizadores da Rodésia (Zimbábue). No século XX, na África do Sul, as mulheres negras lideraram protestos contra as 'leis do passe' que restringiam sua mobilidade. A histórica Marcha das Mulheres de 1956 mobilizou mais de 20 mil mulheres negras de todo o país até a sede governamental em Pretória, cantando em uníssono: 'Se você atingir uma mulher, você atingirá uma rocha'."
  },
  "nigeria-br": {
    title: "Nigéria Colonial",
    actualCountries: "Nigéria",
    period: "1914 - 1960",
    power: "Reino Unido",
    powerClass: "colonia-uk",
    countries: ["ng"],
    violence: false,
    womenResistance: true,
    summary: "Formada pela fusão forçada de diferentes regiões históricas (como os sultanatos islâmicos do Norte e os reinos e sociedades do Sul, incluindo os povos Yoruba e Igbo). Os britânicos governaram indiretamente (Indirect Rule) por meio de chefes tradicionais nomeados ('Warrant Chiefs'), que extorquiam a população com pesados impostos e cobravam propinas. O foco da colônia era a exportação de óleo de palma, estanho, carvão e cacau, desestruturando as economias locais e gerando fome regional.",
    resistance: "Em 1929 ocorreu a famosa Guerra das Mulheres de Aba (ou Revolta de Aba). Milhares de mulheres da etnia Igbo e tribos vizinhas organizaram protestos de massa, marchas e ataques a postos administrativos coloniais contra o anúncio de taxas abusivas sobre seus bens e animais. Elas usaram táticas tradicionais de intimidação pública coletiva ('sitting on a man', cantando e dançando no entorno dos chefes coloniais até forçá-los a renunciar). Os britânicos responderam abrindo fogo, matando dezenas de mulheres, mas o imposto sobre elas foi cancelado."
  },
  "costa-ouro-br": { // Ghana
    title: "Costa do Ouro (Gana Britânica)",
    actualCountries: "Gana",
    period: "1874 - 1957",
    power: "Reino Unido",
    powerClass: "colonia-uk",
    countries: ["gh"],
    violence: false,
    womenResistance: true,
    summary: "Colônia britânica focada na extração de ouro e exportação massiva de cacau. Para consolidar o controle territorial, o exército britânico travou cinco sangrentas guerras contra o Império Ashanti ao longo de décadas. O governo colonial operou por cooptação de elites e controle das exportações agrícolas, desequilibrando as redes tradicionais de poder e forçando os agricultores locais a se submeterem a mercados controlados por cartéis europeus.",
    resistance: "Em 1900, quando o governador colonial britânico exigiu a entrega do Trono de Ouro (objeto mais sagrado e símbolo espiritual da nação Ashanti) para sentar-se nele, os homens hesitaram. Foi quando Yaa Asantewaa, Rainha-mãe de Ejisu, fez um famoso discurso desafiando os homens e assumiu o comando militar supremo do exército de resistência. Ela liderou com sucesso o cerco à fortaleza britânica em Kumasi por meses. Embora tenha sido capturada e exilada nas Seychelles, ela impediu a captura do trono sagrado e inspirou as futuras lutas de libertação de Gana.",
    curiosity: "O Trono Dourado Ashanti (Sika 'dwa Kofi) não é considerado apenas um móvel: é tido como o recipiente físico da alma coletiva da nação Ashanti. Segundo a tradição, nenhum ser humano pode se sentar nele — nem o próprio Asantehene (rei). Exigir que um estrangeiro se sentasse nele foi considerado uma declaração de guerra espiritual, o que levou Yaa Asantewaa a comandar pessoalmente o exército de resistência.",
    localTimeline: [
      { year: "1874", event: "Anexação britânica oficial do litoral, após a derrota Ashanti na 3ª Guerra Anglo-Ashanti." },
      { year: "1900", event: "Guerra do Trono de Ouro liderada pela Rainha-mãe Yaa Asantewaa, a última grande guerra anti-britânica na região." },
      { year: "1901", event: "Anexação formal do reino Ashanti e do norte. Yaa Asantewaa é exilada para as Seychelles." },
      { year: "1957", event: "Gana torna-se o primeiro país da África Subsaariana a obter a independência, liderado por Kwame Nkrumah." }
    ]
  },
  "oeste-br": {
    title: "Serra Leoa e Gâmbia",
    actualCountries: "Serra Leoa e Gâmbia",
    period: "1808 - 1961 (Serra Leoa) | 1888 - 1965 (Gâmbia)",
    power: "Reino Unido",
    powerClass: "colonia-uk",
    countries: ["sl", "gm"],
    violence: false,
    womenResistance: true,
    summary: "Colônias britânicas fundadas inicialmente em torno de postos de combate ao tráfico de escravizados e habitação de libertos. Posteriormente expandiram-se para o interior sob o pretexto de proteção. A exploração centrou-se na extração de minerais (diamantes e minério de ferro em Serra Leoa) e monocultura de amendoim (Gâmbia). O governo britânico instituiu impostos sobre habitação ('Hut Tax'), provocando revoltas populares severamente reprimidas.",
    resistance: "As mulheres desempenharam papel central na preservação da coesão comunitária através das tradicionais sociedades secretas femininas (como a sociedade Sande). Essas instituições controlavam de forma autônoma rituais de iniciação, educação comunitária, preservação linguística e redes de solidariedade econômica. As líderes da sociedade Sande agiam secretamente sabotando as tentativas britânicas de cristianização forçada e assimilação cultural das meninas da colônia."
  },
  "angola-pt": {
    title: "África Ocidental Portuguesa (Angola)",
    actualCountries: "Angola",
    period: "Século XVI - 1975 (fronteiras consolidadas pós-1885)",
    power: "Portugal",
    powerClass: "colonia-pt",
    countries: ["ao"],
    violence: true,
    womenResistance: true,
    summary: "Após a Conferência de Berlim, Portugal expandiu seu domínio militar do litoral de Angola para o interior para garantir a colonização efetiva. A economia centrou-se na exploração de café, algodão e mineração. O regime colonial português impôs o 'Chibalo' (trabalho forçado institucionalizado) para todos os nativos adultos sem emprego formal, punições corporais com a palmatória e a exclusão da quase totalidade da população da cidadania por meio do 'Estatuto do Indigenato' até a década de 1960, culminando em uma prolongada e sangrenta Guerra de Libertação Nacional.",
    resistance: "A ancestralidade da luta anticolonial remonta à Rainha Nzinga de Ndongo e Matamba (século XVII), que combateu por décadas a invasão portuguesa e o tráfico de escravizados usando alianças diplomáticas estratégicas e táticas militares de guerrilha. Seu legado de liderança inspirou a participação ativa de milhares de mulheres na guerra de libertação do século XX, organizadas na OMA (Organização da Mulher Angolana), que atuaram no transporte de armas pela mata, na assistência médica nos acampamentos rebeldes e no combate ativo nas frentes de guerrilha."
  },
  "mocambique-pt": {
    title: "África Oriental Portuguesa (Moçambique)",
    actualCountries: "Moçambique",
    period: "Século XVI - 1975 (fronteiras consolidadas pós-1885)",
    power: "Portugal",
    powerClass: "colonia-pt",
    countries: ["mz"],
    violence: true,
    womenResistance: true,
    summary: "A colonização portuguesa baseou-se na concessão de imensos latifúndios ('Prazos') a companhias concessionárias estrangeiras (como a Companhia de Moçambique), que cobravam impostos em trabalho forçado camponês para a produção compulsória de algodão e sisal. As condições eram miseráveis, marcadas por punições corporais violentas, desnutrição sistêmica e o envio forçado de homens para as minas sul-africanas. A insatisfação explodiu na Luta Armada de Libertação Nacional a partir de 1964, culminando em violenta repressão portuguesa a aldeias civis.",
    resistance: "As mulheres foram essenciais na guerrilha libertadora da FRELIMO. Josina Machel fundou e liderou o Destacamento Feminino, unidade de mulheres combatentes que não apenas lutavam militarmente nas linhas de frente, mas também organizavam a educação, saúde e a produção agrícola coletiva nas zonas libertadas do controle colonial português, desafiando a estrutura de dominação patriarcal tradicional e colonial simultaneamente."
  },
  "guine-pt": {
    title: "Guiné Portuguesa",
    actualCountries: "Guiné-Bissau",
    period: "1879 - 1974",
    power: "Portugal",
    powerClass: "colonia-pt",
    countries: ["gw"],
    violence: true,
    womenResistance: true,
    summary: "Enclave colonial português voltado para a exportação de amendoim e dendê. A população nativa sofria com o trabalho forçado, impostos de palhota e negação total de direitos políticos. Diante da recusa portuguesa em negociar a autonomia, o PAIGC (liderado por Amílcar Cabral) iniciou uma guerra de guerrilha altamente organizada na década de 1960 que liberou a maior parte do território antes de Portugal aceitar a independência.",
    resistance: "As mulheres guineenses foram fundamentais nas 'zonas libertadas' geradas pela guerrilha anticolonial. Elas gerenciavam as cooperativas agrícolas camponesas, operavam escolas populares e postos médicos na floresta e participavam dos comitês de autogestão local. Líderes como Carmen Pereira ocuparam altos postos políticos no movimento de libertação, coordenando a logística da saúde militar na frente sul e demonstrando o poder de agência feminina na descolonização."
  },
  "sudoeste-de": { // Namibia
    title: "Sudoeste Africano Alemão",
    actualCountries: "Namíbia",
    period: "1884 - 1915",
    power: "Alemanha",
    powerClass: "colonia-de",
    countries: ["na"],
    violence: true,
    womenResistance: true,
    summary: "Colonização violenta de povoamento onde colonos alemães apropriaram-se de terras férteis e poços de água fundamentais. Diante da insurreição dos povos Herero e Nama contra a espoliação, o general alemão Lothar von Trotha emitiu ordens oficiais de extermínio (1904). Populações inteiras foram empurradas para o deserto árido do Kalahari para morrer de sede, e os sobreviventes foram aprisionados em campos de concentração brutais (como o de Shark Island). Estima-se o extermínio de 80% dos Herero e 50% dos Nama, o primeiro genocídio do século XX.",
    resistance: "As mulheres Herero e Nama desempenharam papéis extraordinários na sobrevivência de seus povos frente ao extermínio planejado. Após a devastação dos campos de concentração, as mulheres sobreviventes reconstruíram a malha familiar de forma autônoma. Elas desenvolveram uma forma única de resistência cultural: adotaram os vestidos vitorianos volumosos que eram forçadas a usar pelas esposas dos colonos, mas os adaptaram e expandiram com toucas em formato de chifres de gado (símbolo de riqueza Herero), transformando a veste de submissão em um símbolo de orgulho, soberania e vitória da vida sobre o genocídio.",
    curiosity: "Os vestidos Herero (Otjikaiva) são até hoje usados em cerimônias pelos descendentes das sobreviventes. A touca em formato de chifre bovino (ótjikaiva), uma adaptação do boné vitoriano, virou símbolo de resistência e memória viva do genocídio. A Alemanha só reconheceu oficialmente o genocídio Herero e Nama em 2021, após décadas de pressão de descendentes e ativistas.",
    localTimeline: [
      { year: "1884", event: "Alemães estabelecem a colônia após assinar tratados forçados com chefes Herero." },
      { year: "1904", event: "General von Trotha emite a 'Vernichtungsbefehl' (Ordem de Exterminínio) dos Herero." },
      { year: "1904-1908", event: "Genocídio sistemático: campos de concentração, marchas forçadas ao deserto, extermínio em massa." },
      { year: "1915", event: "A colônia é tomada pela África do Sul durante a Primeira Guerra Mundial." },
      { year: "2021", event: "Alemanha reconhece oficialmente o genocídio e propõe reparações às comunidades descendentes." }
    ]
  },
  "camaroes-togo-de": {
    title: "Camarões e Togolândia",
    actualCountries: "Camarões e Togo",
    period: "1884 - 1916",
    power: "Alemanha",
    powerClass: "colonia-de",
    countries: ["cm", "tg"],
    violence: false,
    womenResistance: false,
    summary: "Colônias alemãs estabelecidas após a assinatura de tratados forçados com líderes locais. O império alemão focou na exploração de grandes plantações de cacau, café e óleo de palma baseadas no recrutamento violento de mão de obra indígena e em pesados impostos sobre as habitações. O governo alemão construiu linhas ferroviárias para escoar os produtos, usando trabalho compulsório em condições insalubres.",
    resistance: "As mulheres destas colônias resistiram preservando ativamente as redes tradicionais de comércio feminino. Elas controlavam os mercados locais e boicotavam os canais alemães de comercialização, mantendo canais alternativos de circulação de mercadorias. Através das canções satíricas e rituais familiares, as mulheres desencorajavam a cooptação de jovens para trabalhar nas plantações de propriedade de alemães."
  },
  "tanganica-de": {
    title: "África Oriental Alemã (Tanganica)",
    actualCountries: "Tanzânia, Ruanda e Burundi",
    period: "1885 - 1919 (depois partilhada entre Reino Unido e Bélgica)",
    power: "Alemanha",
    powerClass: "colonia-de",
    countries: ["tz", "rw", "bi"],
    violence: true,
    womenResistance: true,
    summary: "Uma vasta colônia focada na monocultura de exportação de sisal e algodão. A imposição forçada do plantio de algodão com salários de miséria provocou a grande Revolta de Maji Maji (1905-1907), que uniu diferentes etnias. As forças coloniais alemãs responderam com violência extrema, aplicando uma tática de terra arrasada (queima de aldeias, destruição de campos agrícolas e celeiros). O resultado foi uma crise de fome devastadora que causou a morte de até 300 mil africanos por inanição e combate.",
    resistance: "As mulheres camponesas foram alvos, mas também agentes decisivas na Revolta Maji Maji. Diante da tática alemã de terra arrasada, elas organizaram redes de cultivo secreto em áreas de mata fechada e desfiladeiros para alimentar os combatentes rebeldes. Elas atuavam também na disseminação da água ritual sagrada de 'Maji' (que acreditavam transmutar as balas alemãs em água) e mantiveram vivas as canções e rituais fúnebres tradicionais em homenagem aos mártires da rebelião colonial."
  },
  "libia-it": {
    title: "Líbia Italiana",
    actualCountries: "Líbia",
    period: "1911 - 1943",
    power: "Itália",
    powerClass: "colonia-it",
    countries: ["ly"],
    violence: true,
    womenResistance: false,
    summary: "Conquistada pela Itália após a guerra Ítalo-Turca de 1911. A resistência liderada por Omar al-Mukhtar forçou o governo italiano a adotar medidas extremas de repressão militar. Durante a ditadura fascista de Mussolini nos anos 1920/30, as forças italianas deportaram mais de 100 mil pastores locais para campos de concentração na Cirenaica, ergueram muros de arame farpado nas fronteiras e executaram enforcamentos públicos em massa de civis suspeitos de insurreição.",
    resistance: "As mulheres líbias das regiões nômades desempenharam papel essencial na sobrevivência comunitária no interior dos campos de concentração italianos. Elas mantiveram ativas as redes informais de auxílio mútuo e a transmissão oral da fé e da poesia patriótica tradicional que denunciava a tirania do colonizador italiano, alimentando psicologicamente a chama da resistência contra o domínio fascista."
  },
  "somalia-eritreia-it": {
    title: "Somália e Eritreia Italiana",
    actualCountries: "Somália e Eritreia",
    period: "Somália (1889 - 1941) | Eritreia (1882 - 1941)",
    power: "Itália",
    powerClass: "colonia-it",
    countries: ["so", "er"],
    violence: false,
    womenResistance: false,
    summary: "Regiões ocupadas pela Itália no Chifre da África, servindo de base militar estratégica para as tentativas de invasão da vizinha Etiópia. A Itália impôs a segregação urbana forçada nas cidades coloniais como Asmara (construída sob arquitetura futurista italiana) e explorou as populações nativas como mão de obra barata para a construção civil, ferrovias e como soldados conscritos (os 'Askaris').",
    resistance: "Mulheres eritreias e somalis atuaram firmemente na preservação das línguas tradicionais (como o tigrínia e somali) e das redes de parentesco em face da severa reestruturação urbana colonial fascista. Elas garantiram que as canções de casamento e lamento tradicionais mantivessem mensagens camufladas de orgulho cultural e soberania étnica."
  },
  "espanholas": {
    title: "Territórios Espanhóis",
    actualCountries: "Saara Ocidental e Guiné Equatorial",
    period: "1884 - 1975 (Saara) | 1843 - 1968 (Guiné Equatorial)",
    power: "Espanha",
    powerClass: "colonia-es",
    countries: ["eh", "gq"],
    violence: false,
    womenResistance: false,
    summary: "Territórios conquistados pelo Reino da Espanha. O Saara Espanhol foi mantido sob fraca presença administrativa colonial espanhola devido à forte resistência dos nômades Saharauis. Na Guiné Equatorial, a Espanha desenvolveu uma colônia agroexportadora lucrativa baseada em cacau e café na ilha de Fernando Pó, explorada com mão de obra forçada local e de trabalhadores imigrantes sob condições análogas à escravidão.",
    resistance: "As mulheres Saharauis mantiveram viva a estrutura social nômade dos clãs contra as tentativas de sedentarização forçada e controle militar espanhóis. Na Guiné Equatorial, as mulheres do povo Bubi preservaram sociedades matrilineares tradicionais que atuavam secretamente na educação e socialização das crianças segundo os preceitos étnicos locais, resistindo à forte catequização e imposição patriarcal espanhola."
  },
  "etiopia-ind": {
    title: "Império da Etiópia",
    actualCountries: "Etiópia",
    period: "Independente (Ocupação italiana temporária: 1936 - 1941)",
    power: "Território Independente",
    powerClass: "colonia-ind",
    countries: ["et"],
    violence: false,
    womenResistance: true,
    summary: "A Etiópia é uma das duas únicas nações africanas que nunca foram formalmente colonizadas durante a Partilha da África. Em 1896, o império etíope desferiu uma derrota militar humilhante ao exército invasor italiano na Batalha de Adwa, forçando a Itália a reconhecer sua independência e soberania. O país foi brevemente ocupado pelo exército fascista de Benito Mussolini entre 1936 e 1941 durante a Segunda Guerra Mundial, mas a resistência etíope derrotou os ocupantes e restaurou o governo nacional.",
    resistance: "A Imperatriz Taytu Betul foi uma das líderes militares e diplomáticas mais brilhantes da história africana. Co-líder do império ao lado de Menelik II, ela adotou uma postura intransigente contra as manipulações diplomáticas da Itália, formulou a estratégia de inteligência militar para atrair as forças italianas a Adwa, controlou a vital rota de abastecimento de água do forte italiano sitiado e comandou pessoalmente milhares de soldados na histórica Batalha de Adwa em 1896, garantindo a soberania do império."
  },
  "liberia-ind": {
    title: "República da Libéria",
    actualCountries: "Libéria",
    period: "Independente (Fundada em 1847)",
    power: "Território Independente",
    powerClass: "colonia-ind",
    countries: ["lr"],
    violence: false,
    womenResistance: false,
    summary: "Fundada em 1847 por negros americanos libertos com o apoio da American Colonization Society, sob o lema 'O Amor à Liberdade nos Trouxe Aqui'. Embora tenha mantido sua independência formal frente ao avanço colonial europeu, o país viveu severas tensões internas decorrentes da dominação da elite américo-liberiana (de ascendência americana) sobre a maioria das populações indígenas nativas locais, que foram excluídas dos direitos civis e do voto por décadas.",
    resistance: "As mulheres das comunidades indígenas nativas (etnias Kru, Mende e Vai) atuaram como mantenedoras da teia de relações comunitárias rurais frente ao isolamento imposto pelo governo centralizado em Monróvia. Elas mantiveram vivas as instituições locais, as línguas tradicionais e as redes de apoio agrícola feminino, construindo bases de subsistência que garantiram a integridade dos territórios étnicos tradicionais."
  }
};

// Mapeamento Reverso de País ISO -> ID da Colônia correspondente
const countryToColonyMap = {};
for (const colonyId in coloniesData) {
  coloniesData[colonyId].countries.forEach(countryCode => {
    countryToColonyMap[countryCode] = colonyId;
  });
}

// Elementos da Interface
const mapContainer = document.getElementById('map-container');
const detailsPanel = document.getElementById('details-panel');
const detailsEmptyState = document.getElementById('details-empty-state');
const colonyDetails = document.getElementById('colony-details');
const detailsOverlay = document.querySelector('.details-overlay');
const detailsCloseBtn = document.querySelector('.details-close-btn');
const sidebar = document.querySelector('.sidebar');
const sidebarToggleBtn = document.querySelector('.sidebar-toggle-btn');
const mobileQuery = window.matchMedia('(max-width: 1023px)');

const detailTitle = document.getElementById('detail-title');
const detailPeriod = document.getElementById('detail-period');
const detailPower = document.getElementById('detail-power');
const detailActualCountries = document.getElementById('detail-actual-countries');
const detailSummary = document.getElementById('detail-summary');
const detailResistance = document.getElementById('detail-resistance');

let selectedColonyId = null;

// Inicialização: Carregar o SVG do mapa
async function initMap() {
  setupResponsiveControls();
  try {
    const response = await fetch('africa-map.svg');
    if (!response.ok) throw new Error('Não foi possível carregar o mapa SVG.');
    const svgText = await response.text();
    
    // Injetar o SVG no container removendo o spinner de loading
    const loadingEl = document.getElementById('map-loading');
    if (loadingEl) loadingEl.remove();
    
    // Injetar o texto SVG
    mapContainer.insertAdjacentHTML('afterbegin', svgText);
    
    // Configurar as classes coloniais históricas de 1914 e comportamentos
    setupMapInteractions();
    
  } catch (error) {
    console.error('Erro ao carregar o mapa:', error);
    const loadingEl = document.getElementById('map-loading');
    if (loadingEl) {
      loadingEl.querySelector('h3').innerText = 'Erro ao carregar o mapa. Por favor, recarregue a página.';
    }
  }
}

// Configurar as classes do SVG e eventos de Interação
function setupMapInteractions() {
  const svgEl = mapContainer.querySelector('svg');
  if (!svgEl) return;

  // Ajustar dimensões do SVG para que seja responsivo
  svgEl.removeAttribute('width');
  svgEl.removeAttribute('height');
  svgEl.setAttribute('viewBox', '0 0 1000 1000');
  svgEl.style.width = '100%';
  svgEl.style.height = 'auto';

  const paths = svgEl.querySelectorAll('.land');
  
  paths.forEach(path => {
    const classList = path.getAttribute('class').split(' ');
    // Encontrar o código do país na classe (ex: 'bf', 'ao')
    const countryCode = classList.find(c => c !== 'land' && c !== 'coast' && c !== 'circle' && c.length === 2);
    
    if (countryCode) {
      path.setAttribute('id', countryCode); // Garantir id único
      
      const colonyId = countryToColonyMap[countryCode];
      if (colonyId) {
        const colony = coloniesData[colonyId];
        // Adicionar classe da potência colonial histórica
        path.classList.add(colony.powerClass);
        // Adicionar dados customizados para referência rápida
        path.setAttribute('data-colony', colonyId);
        // Permitir a exploração do mapa também por teclado e leitores de tela.
        path.setAttribute('tabindex', '0');
        path.setAttribute('role', 'button');
        path.setAttribute('aria-label', `Explorar: ${colony.title}`);
      }
    }

    // Eventos de Mouse (Interação Visual)
    path.addEventListener('mouseenter', handleMouseEnter);
    path.addEventListener('mouseleave', handleMouseLeave);
    path.addEventListener('click', handlePathClick);
    path.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handlePathClick(event);
      }
    });
  });

  // Fechar seleção se clicar no fundo do SVG
  svgEl.addEventListener('click', (e) => {
    if (e.target === svgEl || e.target.tagName === 'g') {
      clearSelection();
    }
  });

  // Configurar Filtros
  setupFilters();

  // Configurar Timeline
  setupTimeline();

  // Inclinação sutil do mapa em desktops para reforçar a profundidade 3D.
  setupMap3DInteraction();
}

function setupMap3DInteraction() {
  const hasPrecisePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (!hasPrecisePointer.matches) return;

  mapContainer.addEventListener('pointermove', (event) => {
    const bounds = mapContainer.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
    mapContainer.style.setProperty('--map-tilt-y', `${horizontal * 5}deg`);
    mapContainer.style.setProperty('--map-tilt-x', `${vertical * -3}deg`);
  });

  mapContainer.addEventListener('pointerleave', () => {
    mapContainer.style.setProperty('--map-tilt-x', '0deg');
    mapContainer.style.setProperty('--map-tilt-y', '0deg');
  });
}

// Handlers de Interação do Mapa
function handleMouseEnter(e) {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const path = e.target;
  const colonyId = path.getAttribute('data-colony');
  if (!colonyId) return;

  const svgEl = mapContainer.querySelector('svg');
  
  // Se não houver colônia fixada pelo clique, destaca temporariamente no hover
  if (!selectedColonyId) {
    mapContainer.classList.add('focus-mode');
    
    // Destacar todos os caminhos que pertencem à mesma colônia histórica
    const colonyPaths = svgEl.querySelectorAll(`[data-colony="${colonyId}"]`);
    colonyPaths.forEach(p => p.classList.add('focused'));
    
    // Atualiza temporariamente os detalhes
    showColonyDetails(colonyId);
  }
}

function handleMouseLeave(e) {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const path = e.target;
  const colonyId = path.getAttribute('data-colony');
  if (!colonyId) return;

  const svgEl = mapContainer.querySelector('svg');

  // Se não houver seleção fixada por clique, limpa o destaque temporário
  if (!selectedColonyId) {
    mapContainer.classList.remove('focus-mode');
    const focusedPaths = svgEl.querySelectorAll('.focused');
    focusedPaths.forEach(p => p.classList.remove('focused'));
    
    hideColonyDetails();
  }
}

function handlePathClick(e) {
  e.stopPropagation(); // Evita disparar o clique de fundo do SVG
  const path = e.target;
  const colonyId = path.getAttribute('data-colony');
  if (!colonyId) return;

  const svgEl = mapContainer.querySelector('svg');

  // Se clicar na colônia já selecionada, limpa a seleção
  if (selectedColonyId === colonyId) {
    clearSelection();
    return;
  }

  // Fixa a nova seleção
  selectedColonyId = colonyId;
  mapContainer.classList.add('focus-mode');
  
  // Limpa focos anteriores
  const focusedPaths = svgEl.querySelectorAll('.focused');
  focusedPaths.forEach(p => p.classList.remove('focused'));
  
  // Destaca a nova colônia clicada (todos os seus territórios integrantes)
  const colonyPaths = svgEl.querySelectorAll(`[data-colony="${colonyId}"]`);
  colonyPaths.forEach(p => p.classList.add('focused'));

  // Sincroniza a linha do tempo se houver marco associado a essa colônia
  syncTimelineWithColony(colonyId);

  showColonyDetails(colonyId);
}

// Limpar seleção atual do mapa
function clearSelection() {
  selectedColonyId = null;
  mapContainer.classList.remove('focus-mode');
  
  const svgEl = mapContainer.querySelector('svg');
  if (svgEl) {
    const focusedPaths = svgEl.querySelectorAll('.focused');
    focusedPaths.forEach(p => p.classList.remove('focused'));
  }

  // Desativa itens da timeline
  document.querySelectorAll('.timeline-item').forEach(item => item.classList.remove('active'));

  hideColonyDetails();
}

// Referências aos blocos modulares do painel direito
const detailCuriosityBlock   = document.getElementById('detail-specific-curiosity-block');
const detailCuriosityText    = document.getElementById('detail-specific-curiosity');
const detailLocalTimelineBlock = document.getElementById('detail-local-timeline-block');
const detailLocalTimeline    = document.getElementById('detail-local-timeline');
const mainGridLayout         = document.getElementById('main-grid-layout');

// Exibir detalhes da colônia no painel — layout modular
function showColonyDetails(colonyId) {
  const colony = coloniesData[colonyId];
  if (!colony) return;

  // Blocos sempre presentes
  detailTitle.innerText          = colony.title;
  detailPeriod.innerText         = colony.period;
  detailPower.innerText          = colony.power;
  detailActualCountries.innerText = colony.actualCountries;
  detailSummary.innerText        = colony.summary;
  detailResistance.innerText     = colony.resistance;

  // Atualizar a cor do badge da potência
  const powerKey = colony.powerClass.split('-')[1];
  detailPower.style.backgroundColor = `var(--power-${powerKey})`;

  // Bloco 5: Curiosidade específica — aparece apenas se existir
  if (colony.curiosity) {
    detailCuriosityText.innerText = colony.curiosity;
    detailCuriosityBlock.style.display = 'block';
  } else {
    detailCuriosityBlock.style.display = 'none';
  }

  // Bloco 6: Linha do tempo local — aparece apenas se existir
  if (colony.localTimeline && colony.localTimeline.length > 0) {
    detailLocalTimeline.innerHTML = '';
    colony.localTimeline.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${item.year}</strong>${item.event}`;
      detailLocalTimeline.appendChild(li);
    });
    detailLocalTimelineBlock.style.display = 'block';
  } else {
    detailLocalTimelineBlock.style.display = 'none';
  }

  // Ativar painel e remover estado de "sem seleção" no grid
  detailsEmptyState.style.display = 'none';
  colonyDetails.classList.add('active');
  if (mainGridLayout) mainGridLayout.classList.remove('no-selection');

  if (mobileQuery.matches) openDetailsModal();
}

// Ocultar detalhes e voltar ao estado vazio
function hideColonyDetails() {
  colonyDetails.classList.remove('active');
  detailsEmptyState.style.display = 'flex';
  if (mainGridLayout) mainGridLayout.classList.add('no-selection');
  closeDetailsModal();
}

function openDetailsModal() {
  detailsPanel.classList.add('details-modal-open');
  detailsOverlay.classList.add('active');
  detailsOverlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('details-modal-active');
  detailsCloseBtn.focus();
}

function closeDetailsModal() {
  detailsPanel.classList.remove('details-modal-open');
  detailsOverlay.classList.remove('active');
  detailsOverlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('details-modal-active');
}

function setupResponsiveControls() {
  const syncSidebar = () => {
    if (mobileQuery.matches) {
      sidebar.classList.add('collapsed');
      sidebarToggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      sidebar.classList.remove('collapsed');
      sidebarToggleBtn.setAttribute('aria-expanded', 'true');
      closeDetailsModal();
    }
  };

  sidebarToggleBtn.addEventListener('click', () => {
    const isCollapsed = sidebar.classList.toggle('collapsed');
    sidebarToggleBtn.setAttribute('aria-expanded', String(!isCollapsed));
  });

  detailsCloseBtn.addEventListener('click', clearSelection);
  detailsOverlay.addEventListener('click', clearSelection);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && detailsPanel.classList.contains('details-modal-open')) {
      clearSelection();
    }
  });

  mobileQuery.addEventListener('change', syncSidebar);
  syncSidebar();
}

// Configurar o Sistema de Filtros
function setupFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const svgEl = mapContainer.querySelector('svg');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Limpar seleções individuais ativas
      clearSelection();

      // Atualizar classe ativa do botão
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      const paths = svgEl.querySelectorAll('.land');

      // Se for limpar filtros
      if (filterValue === 'all') {
        mapContainer.classList.remove('filtering');
        paths.forEach(p => p.classList.remove('filtered-active'));
        return;
      }

      // Ativar modo de filtragem
      mapContainer.classList.add('filtering');
      
      paths.forEach(path => {
        const colonyId = path.getAttribute('data-colony');
        const colony = coloniesData[colonyId];
        let isMatch = false;

        if (colony) {
          switch (filterValue) {
            case 'portuguesas':
              isMatch = colony.power === 'Portugal';
              break;
            case 'francesas':
              isMatch = colony.power === 'França';
              break;
            case 'britanicas':
              isMatch = colony.power === 'Reino Unido';
              break;
            case 'mulheres':
              isMatch = colony.womenResistance === true;
              break;
            case 'violencia':
              isMatch = colony.violence === true;
              break;
          }
        }

        if (isMatch) {
          path.classList.add('filtered-active');
        } else {
          path.classList.remove('filtered-active');
        }
      });
    });
  });
}

// Configurar a Linha do Tempo
function setupTimeline() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  timelineItems.forEach(item => {
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        item.click();
      }
    });
    item.addEventListener('click', () => {
      // Toggle active status
      const isActive = item.classList.contains('active');
      timelineItems.forEach(i => i.classList.remove('active'));
      
      if (!isActive) {
        item.classList.add('active');
        
        // Disparar destaque da colônia correspondente se houver mapeamento temporal
        const year = item.getAttribute('data-year');
        let targetColonyId = null;

        switch (year) {
          case '1896':
            targetColonyId = 'etiopia-ind';
            break;
          case '1900':
            targetColonyId = 'costa-ouro-br';
            break;
          case '1904':
            targetColonyId = 'sudoeste-de';
            break;
          case '1952':
            targetColonyId = 'africa-oriental-br';
            break;
        }

        if (targetColonyId) {
          highlightColonyFromTimeline(targetColonyId);
        }
      } else {
        clearSelection();
      }
    });
  });
}

// Destacar colônia disparado pela linha do tempo
function highlightColonyFromTimeline(colonyId) {
  selectedColonyId = colonyId;
  mapContainer.classList.add('focus-mode');
  
  const svgEl = mapContainer.querySelector('svg');
  if (!svgEl) return;

  // Limpa focos anteriores
  const focusedPaths = svgEl.querySelectorAll('.focused');
  focusedPaths.forEach(p => p.classList.remove('focused'));
  
  // Destaca a nova colônia
  const colonyPaths = svgEl.querySelectorAll(`[data-colony="${colonyId}"]`);
  colonyPaths.forEach(p => p.classList.add('focused'));

  showColonyDetails(colonyId);
}

// Sincronizar item da linha do tempo quando clica em uma colônia no mapa
function syncTimelineWithColony(colonyId) {
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => item.classList.remove('active'));

  let targetYear = null;
  switch (colonyId) {
    case 'etiopia-ind':
      targetYear = '1896';
      break;
    case 'costa-ouro-br':
      targetYear = '1900';
      break;
    case 'sudoeste-de':
      targetYear = '1904';
      break;
    case 'africa-oriental-br':
      targetYear = '1952';
      break;
  }

  if (targetYear) {
    const targetItem = document.querySelector(`.timeline-item[data-year="${targetYear}"]`);
    if (targetItem) {
      targetItem.classList.add('active');
      targetItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
}

// Inicializar aplicação
document.addEventListener('DOMContentLoaded', initMap);
