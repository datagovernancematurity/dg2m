export const dimensionsPtBR = {
  strategy: {
    id: 'dataStrategy',
    title: 'Estratégia e Governança de Dados',
    description: 'Esta dimensão avalia como as organizações alinham seus objetivos estratégicos com práticas estruturadas de governança de dados. Esse alinhamento é essencial para garantir a segurança, privacidade, qualidade e uso ético dos dados, além de estabelecer estruturas e diretrizes que possibilitem uma governança eficiente e sustentável. Para a Segurança da Informação, a organização adota um modelo apropriado a sua organização. Além disso, esta dimensão considera o desenvolvimento de metodologias para a implementação de projetos, a integração entre equipes de TI e de negócio, e a adoção de métricas que apoiam a tomada de decisões orientada por dados. Para refletir uma maturidade abrangente em governança, ela também incorpora indicadores como alocação orçamentária, patrocínio executivo, visão estratégica, planejamento de dados, alinhamento de políticas e integração na tomada de decisões. Inclui ainda a definição de papéis de curadoria, participação ativa na governança, gestão de riscos e conformidade, e aspectos de privacidade.',
    people: 'Avalia o engajamento das equipes, competências e papéis na definição e aplicação de estratégias e práticas de governança de dados, incluindo curadoria e patrocínio executivo.',
    policies: 'Refere-se ao alinhamento estratégico das diretrizes e estruturas de governança de dados, bem como às diretrizes e estruturas da segurança da informação (através de modelo de segurança adequado à organização), privacidade, gestão de riscos e uso ético dos dados.',
    capabilities: 'Abrange ferramentas e tecnologias que apoiam a governança de dados, o planejamento de dados, a aplicação de políticas e sua integração nos processos de decisão organizacional.',
    levels: [
      {
        title: 'Nível 0: Não Iniciado',
        content: 'A organização não possui políticas, reflexões éticas ou práticas estruturadas de governança de dados. A estratégia de dados não é considerada nos objetivos organizacionais. Não há orçamento, planejamento ou alinhamento estratégico voltado aos dados.',
        people: 'Não existem equipes responsáveis ou engajadas na governança de dados. Falta consciência sobre os riscos éticos do uso inadequado dos dados, e não há papéis de curadoria definidos.',
        policies: 'Inexistência de diretrizes para governança, ética, privacidade, gestão de riscos ou qualidade dos dados. Nenhum alinhamento de políticas ou visão estratégica está presente.',
        capabilities: 'Não há infraestrutura ou ferramentas para suportar processos básicos de governança de dados. Não existe participação em estruturas de governança ou integração à tomada de decisão.',
        improvement: 'Sensibilizar as equipes sobre a importância da governança de dados por meio de treinamentos básicos. Realizar um diagnóstico inicial das fontes e formatos de dados existentes para identificar lacunas. Iniciar discussões sobre patrocínio executivo e necessidade orçamentária para governança de dados.'
      },
      {
        title: 'Nível 1: Inicial – Ad Hoc, Não Estruturado e/ou em Aprendizado',
        content: 'A organização inicia seus primeiros esforços para criar políticas e processos de governança de dados, mas de forma reativa e não estruturada. O apoio executivo ainda é limitado e o planejamento orçamentário não está alinhado às iniciativas de dados.',
        people: 'Alguns papéis são definidos em áreas específicas, mas sem clareza, alinhamento estratégico ou funções dedicadas de curadoria.',
        policies: 'Diretrizes rudimentares começam a surgir, mas não abordam Segurança da Informação, privacidade, conformidade de riscos ou participação na governança de forma abrangente.',
        capabilities: 'Ferramentas básicas são utilizadas de forma isolada e há pouca integração aos processos organizacionais ou estruturas de decisão.',
        improvement: 'Estabelecer uma equipe inicial para gerenciar diretrizes de governança de dados e papéis de curadoria. Desenvolver um plano de governança inicial com base em frameworks reconhecidos. Começar a alinhar os esforços de governança com a estratégia, as políticas e o planejamento organizacional.'
      },
      {
        title: 'Nível 2: Emergente – Iniciativas Incipientes, Transformação de Ativos e Processos Repetíveis',
        content: 'Além das ações dos níveis anteriores, a governança de dados começa a se consolidar. O planejamento estratégico e as iniciativas de gestão de dados passam a ser reconhecidos nas rotinas organizacionais.',
        people: 'As equipes recebem treinamentos iniciais para aplicar processos de governança. Papéis como curador/a de dados começam a surgir com responsabilidades definidas.',
        policies: 'Políticas básicas relacionadas à qualidade dos dados, Segurança da Informação, privacidade, conformidade de riscos e uso ético passam a ser padronizadas.',
        capabilities: 'Ferramentas para controle de acesso, monitoramento de dados e aplicação de políticas são introduzidas. A participação inicial em decisões de governança começa a tomar forma.',
        improvement: 'Formalizar políticas de Segurança da Informação, privacidade e gestão de riscos, usando modelo adequado à organização. Integrar a governança de dados ao planejamento organizacional mais amplo. Alocar orçamento inicial e definir papéis claros de patrocínio. Garantir apoio e comprometimento da alta gestão à governança de dados. Fazer benchmarking com líderes em privacidade e estratégia de dados.'
      },
      {
        title: 'Nível 3: Definido – Estruturado e Padronizado',
        content: 'Além das ações dos níveis anteriores, as práticas de governança são padronizadas e alinhadas aos objetivos organizacionais. A visão estratégica e o alinhamento de políticas orientam as iniciativas com dados. O orçamento e o patrocínio executivo da alta gestão estão estabelecidos.',
        people: 'Equipes multidisciplinares colaboram na implementação e monitoramento da governança de dados. Papéis de curador/a de dados são integrados às estruturas de governança. Métricas de participação e engajamento das equipes com a governança de dados começam a ser acompanhadas.',
        policies: 'A política de governança de dados é formalmente publicada, amplamente comunicada e acessível e assegura a conformidade com as regulamentações internas (Políticas de Dados, de Segurança da Informação, de Tecnologia da Informação e Comunicação, entre outras pertinentes à organização) e externas (legislação sobre proteção e privacidade de dados, exigências de órgãos reguladores e certificadores aplicáveis), abrangendo privacidade, ética, gestão de riscos e alinhamento estratégico.',
        capabilities: 'Ferramentas dão suporte ao monitoramento contínuo e à aplicação da governança. A governança de dados é integrada aos processos de tomada de decisão.',
        improvement: 'Ampliar o uso de métricas de desempenho e conformidade para avaliar a eficácia da governança. Melhorar a participação na governança por diferentes áreas de negócio. Estabelecer conselhos de governança para promover o alinhamento entre áreas. Desenvolver planos de comunicação e engajamento para disseminar as diretrizes de governança nos departamentos e níveis hierárquicos, formalizando a inclusão de responsabilidades de governança em descrições de cargo operacionais e técnicos.'
      },
      {
        title: 'Nível 4: Gerenciado – Medido e Preditivo',
        content: 'Além das ações dos níveis anteriores, a maturidade em governança é gerida por meio de KPIs claros, alocação de recursos e conformidade com riscos. O planejamento estratégico de dados está profundamente incorporado às operações, e o nível de capilaridade da governança em toda a organização é avaliado por meio de métricas específicas.',
        people: 'Equipes de governança monitoram ativamente métricas por meio de dashboards. As funções de curadoria são revistas e adaptadas às necessidades do negócio. A capilaridade da governança é medida através de indicadores de adesão às políticas por equipes operacionais e taxas de engajamento em iniciativas de dados.',
        policies: 'As políticas são atualizadas regularmente com base em dados de desempenho e nas regulamentações de privacidade, ética e IA responsável.',
        capabilities: 'Ferramentas de governança permitem análise preditiva e melhoria contínua em conformidade e planejamento de dados, incluindo o suporte à governança de modelos de IA e a gestão de vieses.',
        improvement: 'Refinar KPIs relacionados à governança de dados, privacidade e conformidade. Automatizar processos de governança sempre que possível. Reforçar o planejamento orçamentário alinhado aos objetivos estratégicos de dados. Realizar benchmarking contínuo com líderes da área para identificar oportunidades de aprimoramento. Criar laboratórios de inovação focados em modelos e tecnologias de governança. Desenvolver indicadores de compliance para a governança de IA, como auditoria de vieses e explicabilidade. Aprimorar mecanismos de feedback contínuo dos níveis operacionais e táticos para influenciar o refinamento da estratégia de governança.'
      },
      {
        title: 'Nível 5: Otimizado – Inovação e Melhoria Contínua',
        content: 'Além das ações dos níveis anteriores, a governança e a estratégia de dados evoluem continuamente, adaptando-se a novas regulamentações, tecnologias e metas de negócio. A Governança de Dados está plenamente incorporada aos processos e à cultura organizacional, sendo um motor central para a extração de valor dos dados e a consecução de objetivos estratégicos. Há forte apoio executivo e compromisso com recursos.',
        people: 'As equipes lideram projetos inovadores de governança de dados diretamente alinhados às melhorias e necessidades estratégicas da organização, impulsionando a extração de valor dos dados. A participação na governança está enraizada em toda a organização.',
        policies: 'As políticas são dinâmicas, promovendo conformidade ágil com legislações de privacidade e metas estratégicas. Manter definição de novos padrões, quando necessário, em governança de dados e IA responsável.',
        capabilities: 'Análises avançadas apoiam automação, governança preditiva e a tomada de decisão estratégica.',
        improvement: 'Garantir a manutenção do patrocínio executivo e do orçamento para inovação contínua em governança que habilite competitividade de mercado e/ou eficiência operacional.'
      }
    ]
  },
  people: {
    id: 'people',
    title: 'Cultura, Pessoas e Estrutura Organizacional',
    description: 'Esta dimensão avalia o papel de indivíduos e equipes na gestão, curadoria e análise de dados, com ênfase na colaboração, responsabilidade e desenvolvimento de competências. A avaliação abrange desde a conscientização inicial sobre a importância estratégica dos dados e o letramento em dados, até a consolidação de uma cultura organizacional orientada para a inovação baseada em dados. Inclui avaliação da colaboração e integração entre as áreas de Negócio e de Tecnologia da Informação e Comunicação e outras disciplinas, competências da força de trabalho, clareza de papéis, cultura de colaboração, confiança, patrocínio, capacitação e conscientização sobre dados abertos. Reflete estruturas de responsabilização e práticas de comunicação.',
    people: 'Avalia o letramento, o engajamento e a responsabilidade dos indivíduos na gestão e análise de dados.',
    policies: 'Refere-se a diretrizes que definem papéis, promovem a curadoria e garantem a consistência da análise de dados.',
    capabilities: 'Envolve ferramentas, tecnologias e técnicas disponíveis para apoiar a curadoria e a análise de dados.',
    levels: [
      {
        title: 'Nível 0: Não Iniciado',
        content: 'Neste nível, a organização não reconhece a importância estratégica dos dados. Não há práticas formais, papéis ou ferramentas estabelecidas para apoiar a curadoria ou análise de dados.',
        people: 'Nenhuma equipe ou indivíduo é formalmente responsável pela qualidade e uso dos dados. Há falta de conscientização sobre o valor estratégico dos dados e não há promoção ao letramento em dados. Perspectivas interdisciplinares e competências da força de trabalho não são consideradas.',
        policies: 'Ausência total de diretrizes para curadoria ou análise de dados. Não há estruturas que garantam responsabilidade ou definição de papéis.',
        capabilities: 'Inexistência de infraestrutura ou ferramentas para apoiar processos básicos de curadoria e análise. Não há práticas de comunicação ou colaboração.',
        improvement: 'Promover campanhas de conscientização sobre a importância da curadoria e análise de dados para a organização. Oferecer treinamentos básicos sobre governança e qualidade de dados aos colaboradores. Identificar possíveis papéis e responsabilidades na gestão de dados. Iniciar sessões de conscientização com a alta gestão sobre o valor estratégico dos dados e os riscos da sua não governança.'
      },
      {
        title: 'Nível 1: Inicial – Ad Hoc, Não Estruturado e/ou em Aprendizado',
        content: 'Neste estágio, a organização começa a demonstrar interesse pela governança de dados por meio de esforços isolados e não estruturados, geralmente impulsionados por iniciativas individuais, e não pela estratégia organizacional.',
        people: 'Papéis informais começam a surgir, mas sem clareza organizacional. O interesse por dados cresce, mas as equipes carecem de habilidades técnicas e treinamento formal. A conexão e a colaboração sistemática entre Negócio e TI para dados ainda são limitadas.',
        policies: 'Diretrizes rudimentares aparecem, com estruturas de responsabilidade e definição de papéis pouco claras.',
        capabilities: 'Ferramentas básicas são utilizadas de forma isolada. A comunicação continua informal e não sistemática.',
        improvement: 'Criar um grupo inicial responsável pela implementação de práticas de curadoria de dados. Desenvolver políticas básicas com atenção à clareza de papéis e ao patrocínio. Começar a cultivar uma cultura de colaboração e confiança por meio de treinamentos. Incentivar a comunicação aberta sobre os esforços com dados. Promover workshops e apresentações de alto nível para a alta gestão, com foco nos benefícios tangíveis da governança de dados para os objetivos de negócio.'
      },
      {
        title: 'Nível 2: Emergente – Iniciativas Incipientes, Transformação de Ativos e Processos Repetíveis',
        content: 'Além das melhorias dos níveis anteriores, neste nível as práticas com dados tornam-se mais consistentes e estruturadas, com papéis definidos, treinamentos iniciais e adoção de ferramentas fundamentais.',
        people: 'Equipes técnicas recebem treinamentos iniciais. Os papéis estão mais definidos. Competências da força de trabalho e engajamento interdisciplinar começam a ser reconhecidos.',
        policies: 'Diretrizes incluem definições iniciais de papéis e responsabilidades. Alguns mecanismos de responsabilização são estabelecidos, iniciando a formalização da colaboração entre Negócio e TI para o uso de dados.',
        capabilities: 'Ferramentas estruturadas são introduzidas. Canais de comunicação começam a se formar para apoiar a colaboração.',
        improvement: 'Desenvolver um programa de capacitação estruturado com foco em letramento em dados. Incluir avaliação interdisciplinar na formação e avaliação das equipes. Construir confiança e patrocínio por parte da liderança. Promover a conscientização sobre dados, curadoria e comunicação entre equipes. Estabelecer um canal de comunicação direto com a alta gestão para reportar progressos e desafios da governança de dados, solicitando seu apoio ativo.'
      },
      {
        title: 'Nível 3: Definido – Estruturado e Padronizado',
        content: 'Além das melhorias dos níveis anteriores, neste estágio as práticas de governança de dados e colaboração tornam-se padronizadas em toda a organização, sustentadas por papéis claros, confiança e treinamentos formais.',
        people: 'Equipes multidisciplinares colaboram ativamente. Estruturas formais de responsabilização e clareza de papéis (especialmente na interface Negócio-TI) são institucionalizadas. Treinamentos contínuos aprimoram as competências da força de trabalho e seu letramento em dados.',
        policies: 'Políticas padronizam práticas colaborativas e de governança de dados. O patrocínio e a confiança são visivelmente apoiados pela liderança.',
        capabilities: 'Ferramentas de comunicação e práticas estruturadas sustentam um ambiente colaborativo e promovem uma cultura de decisões orientadas por dados entre as equipes.',
        improvement: 'Expandir as redes de patrocínio para manter a cultura de colaboração. Incentivar iniciativas interdisciplinares mais profundas. Formalizar protocolos de comunicação relacionados à qualidade de dados e gestão de metadados. Integrar a conscientização sobre gestão de dados aos processos de integração e treinamento. Iniciar o monitoramento de indicadores básicos de treinamento e conscientização sobre governança de dados.'
      },
      {
        title: 'Nível 4: Gerenciado – Medido e Preditivo',
        content: 'Além das melhorias dos níveis anteriores, neste estágio as práticas com dados são avaliadas com base em indicadores de desempenho definidos (incluindo indicadores de treinamento e conscientização), garantindo consistência, previsibilidade e alinhamento com os objetivos organizacionais.',
        people: 'As equipes monitoram seu próprio progresso usando métricas de desempenho. Clareza de papéis, confiança e colaboração são avaliadas e aprimoradas continuamente. O impacto e a eficácia dos treinamentos e ações de conscientização sobre dados e letramento em dados são monitorados proativamente.',
        policies: 'As estruturas de responsabilização são revisadas e aprimoradas com base em dados. As políticas apoiam a colaboração interdisciplinar e o desenvolvimento da força de trabalho.',
        capabilities: 'As práticas de comunicação são totalmente integradas e alinhadas às métricas de governança. O patrocínio sustenta o engajamento de longo prazo.',
        improvement: 'Medir a eficácia da confiança e colaboração por meio de ciclos de feedback. Alinhar os treinamentos às necessidades evolutivas de competências da equipe. Revisar regularmente as práticas de gestão de dados. Aprimorar painéis de comunicação entre áreas.'
      },
      {
        title: 'Nível 5: Otimizado – Inovação e Melhoria Contínua',
        content: 'Além das melhorias dos níveis anteriores, neste estágio a organização trata os dados como um ativo estratégico, promovendo inovação, aprendizado contínuo e transformação cultural por meio de práticas avançadas de governança e comunicação. A cultura de governança de dados é disseminada, com programas de letramento em dados mensurando o impacto na maturidade de uso por parte das equipes. Nesse patamar, a organização explora e implementa o potencial da Inteligência Artificial e Machine Learning, quando necessário, para automatizar e otimizar a organização, a curadoria e a análise de dados, elevando a eficiência e a capacidade de extrair valor dos dados.',
        people: 'As equipes impulsionam ativamente a inovação por meio de abordagens diversas e interdisciplinares. As competências da força de trabalho evoluem com aprendizado contínuo em programas de letramento. Uma cultura de confiança, comunicação aberta e tomada de decisão orientada por dados está profundamente enraizada. A alta gestão apoia efetivamente a cultura de dados, integrando ativamente as discussões e decisões estratégicas de dados.',
        policies: 'Políticas dinâmicas e adaptativas sustentam a responsabilidade, o patrocínio e a resposta ágil às mudanças.',
        capabilities: 'Sistemas avançados de comunicação e plataformas de capacitação, incluindo canais abertos e transparentes de compartilhamento de dados a toda a empresa, fomentam a inovação na gestão de dados e a sinergia entre as equipes. A organização adota e alavanca tecnologias de Inteligência Artificial e Machine Learning, quando necessário, para otimizar os processos, a qualidade e a descoberta de dados.',
        improvement: 'Lançar laboratórios de inovação para explorar e aprimorar práticas com dados, incluindo a pesquisa e implementação de soluções de Inteligência Artificial e Machine Learning, quando necessário, para automação e otimização da governança e organização de dados. Estabelecer parcerias com organizações externas para desenvolver práticas em dados. Atualizar continuamente os referenciais de competências e os protocolos de responsabilização.'
      }
    ]
  },
  formalization: {
    id: 'formalization',
    title: 'Formalização e Processos de Gestão de Dados',
    description: 'Esta dimensão avalia práticas relacionadas à gestão de metadados, dados mestres, arquitetura de dados, modelos de dados e classificação de dados. Seu objetivo é avaliar o nível de maturidade organizacional no uso e na governança de dados, promovendo eficiência operacional, alinhamento estratégico e conformidade regulatória. Além disso, esta dimensão inclui abordagens de desenvolvimento iterativas, práticas de metadados, controle de ciclo de vida, integração DevOps, padrões de documentação, licenciamento e identificação de riscos. Além disso, a dimensão destaca a participação ativa dos diversos papéis envolvidos, como gestores e consumidores de dados, e o estabelecimento de mecanismos eficazes e seguros para o compartilhamento de dados ao longo de todo o ciclo de vida do tratamento. Também enfatiza o alinhamento de processos internos de dados com políticas internas e externas (como normas, políticas e modelos específicos de privacidade e segurança da informação), bem como a implementação de mecanismos de monitoramento de processos e acompanhamento de desempenho.',
    people: 'Avalia o conhecimento e a responsabilidade das equipes na aplicação de práticas de gestão de dados, incluindo documentação e controle de ciclo de vida.',
    policies: 'Refere-se à existência de diretrizes e padrões claros para governança de dados, classificação, integração, práticas DevOps e licenciamento, bem como adequação, a partir de modelos e normas específicos, aos temas que se relacionam com a área de dados (como segurança da informação e privacidade).',
    capabilities: 'Envolve ferramentas, tecnologias e processos que apoiam a gestão de dados, integração, desenvolvimento iterativo, identificação de riscos e monitoramento de desempenho.',
    levels: [
      {
        title: 'Nível 0: Não Iniciado',
        content: 'Neste nível, não existem práticas formais de gestão de dados ou políticas definidas. A organização carece de conscientização e infraestrutura para dar suporte a metadados, dados mestres ou controle de ciclo de vida.',
        people: 'A equipe não possui conhecimento sobre conceitos básicos como metadados, dados mestres e proteção de dados.',
        policies: 'Não existem políticas e processos específicos para classificação, gestão de metadados, gestão de dados mestres e de referência, integração e interoperabilidade e gestão de riscos.',
        capabilities: 'Não há ferramentas ou infraestrutura para gerenciar dados mestres ou metadados.',
        improvement: 'Oferecer treinamentos básicos para conscientizar a equipe sobre a importância da gestão de dados. Realizar um levantamento inicial das fontes e formatos de dados existentes, identificando inconsistências e lacunas.'
      },
      {
        title: 'Nível 1: Inicial – Ad Hoc, Não Estruturado e/ou em Aprendizado',
        content: 'Neste estágio, surgem esforços iniciais relacionados à gestão de dados de maneira fragmentada e reativa, sem alinhamento com políticas internas ou externas.',
        people: 'Papéis começam a ser definidos em áreas isoladas, mas sem clareza ou alinhamento estratégico.',
        policies: 'Políticas iniciais são desenvolvidas, mas carecem de padronização, consideração de riscos ou foco em ciclo de vida.',
        capabilities: 'Ferramentas básicas são utilizadas para atender a demandas pontuais de metadados e dados mestres.',
        improvement: 'Criar uma equipe inicial de gestão de dados com apoio da alta gestão. Documentar processos existentes e identificar lacunas para formalização de políticas. Focar em organizar processos internos e definir papéis e responsabilidades claras para as atividades mais críticas de gestão de dados.'
      },
      {
        title: 'Nível 2: Emergente – Iniciativas Incipientes, Transformação de Ativos e Processos Repetíveis',
        content: 'Além das melhorias dos níveis anteriores, práticas emergentes são introduzidas para metadados e dados mestres, juntamente com os primeiros passos em direção ao controle de ciclo de vida e padrões de documentação.',
        people: 'As equipes reconhecem a importância de práticas padronizadas para eficiência organizacional.',
        policies: 'Políticas básicas de gestão de dados mestres, classificação e proteção de dados começam a ser formalizadas.',
        capabilities: 'Um repositório central para metadados e dados mestres é criado, servindo como base para compartilhamento controlado de dados na organização. Práticas de documentação começam a emergir.',
        improvement: 'Implementar um repositório centralizado de metadados acessível a todas as áreas da organização. Começar a definir políticas de acesso e uso para diferentes perfis. Desenvolver políticas organizacionais para governança e proteção de dados alinhadas às melhores práticas. Introduzir padrões iniciais de documentação e definir estágios do ciclo de vida dos dados. Realizar benchmarking com líderes em governança de dados de outras organizações para descobrir práticas eficazes.'
      },
      {
        title: 'Nível 3: Definido – Estruturado e Padronizado',
        content: 'Além das melhorias dos níveis anteriores, as práticas de gestão de dados tornam-se estruturadas e padronizadas, com políticas para metadados, controle de ciclo de vida, integração com DevOps e identificação de riscos.',
        people: 'As partes interessadas (como gestores, operadores e consumidores) compreendem a importância de padrões claros para metadados, dados mestres e arquitetura integrada.',
        policies: 'Políticas de qualidade, classificação e segurança de dados são formalizadas e amplamente adotadas, adequando à normas e modelos específicos (quando necessário), abrangendo diretrizes para acesso e compartilhamento por diferentes perfis de usuários, além de considerações sobre riscos e licenciamento.',
        capabilities: 'Sistemas centralizados dão suporte à integração e ao monitoramento de metadados, dados mestres e pipelines DevOps.',
        improvement: 'Expandir o uso de ferramentas para gestão de metadados e ciclo de vida. Criar um inventário central de fontes de dados e sistemas relacionados. Garantir que os padrões de documentação sejam aplicados de forma consistente entre as equipes.'
      },
      {
        title: 'Nível 4: Gerenciado – Medido e Preditivo',
        content: 'Além das melhorias dos níveis anteriores, os processos de gestão de dados são governados por métricas de desempenho bem definidas e monitorados continuamente quanto à conformidade com políticas internas e externas.',
        people: 'As equipes monitoram ativamente KPIs e métricas relacionadas à qualidade, uso e conformidade dos dados.',
        policies: 'Políticas homogêneas são revisadas e atualizadas regularmente. O alinhamento com regulamentações internas e externas é assegurado.',
        capabilities: 'Ferramentas possibilitam análise preditiva, monitoramento e integração de processos de avaliação de riscos, se necessário.',
        improvement: 'Revisar periodicamente os KPIs para otimizar a gestão e integração de dados. Automatizar processos de documentação e auditoria. Reforçar mecanismos de controle de ciclo de vida e monitoramento de desempenho.'
      },
      {
        title: 'Nível 5: Otimizado – Inovação e Melhoria Contínua',
        content: 'Além das melhorias dos níveis anteriores, a gestão de dados é tratada como uma função estratégica, continuamente aprimorada por meio de tecnologias inovadoras e integração total com DevOps.',
        people: 'As equipes lideram iniciativas de inovação em modelagem de dados e integração com tecnologias emergentes.',
        policies: 'As políticas são dinâmicas e continuamente adaptadas para apoiar o desenvolvimento ágil, novas regulamentações e processos iterativos.',
        capabilities: 'Sistemas escaláveis dão suporte à integração em tempo real, acompanhamento de desempenho e mitigação de riscos por meio de tecnologias orientadas à automação, quando necessário.',
        improvement: 'Realizar benchmarking com líderes do setor para aprimorar práticas de ciclo de vida e gestão de riscos. Investir em tecnologias que aprimorem automação e análise na governança. Otimizar fluxos de trabalho DevOps integrando gestão de metadados e monitoramento de desempenho ao longo do ciclo de desenvolvimento e análise de dados.'
      }
    ]
  },
  quality: {
    id: 'quality',
    title: 'Qualidade dos Dados',
    description: 'Esta dimensão avalia a capacidade organizacional de garantir alta qualidade dos dados por meio de critérios bem definidos e práticas padronizadas. Seu escopo inclui avaliação, melhoria contínua, conscientização e monitoramento da qualidade dos dados, considerando disponibilidade, acessibilidade, confiabilidade, perfilamento de dados, políticas de privacidade e segurança, mecanismos de feedback e integração com ferramentas de plataformas de dados. Também considera o alinhamento com estruturas de governança, expectativas de qualidade e práticas de melhoria.',
    people: 'Conscientização e treinamento sobre critérios de qualidade de dados, expectativas e impacto da qualidade na tomada de decisão.',
    policies: 'Diretrizes e padrões para manter a qualidade dos dados, incluindo privacidade, segurança e alinhamento com a governança.',
    capabilities: 'Ferramentas e processos para monitorar, perfilar, avaliar e melhorar a qualidade dos dados, incluindo plataformas de dados e mecanismos de feedback.',
    levels: [
      {
        title: 'Nível 0: Não Iniciado',
        content: 'Neste nível, não existem iniciativas formais para avaliar ou gerenciar a qualidade dos dados. A organização carece de conscientização, práticas e ferramentas para lidar com dimensões básicas como disponibilidade e confiabilidade.',
        people: 'Não há conscientização sobre a importância da qualidade dos dados.',
        policies: 'Não existem diretrizes ou padrões de qualidade.',
        capabilities: 'Não há ferramentas ou sistemas para monitorar ou garantir a qualidade dos dados.',
        improvement: 'Promover a conscientização sobre o impacto da baixa qualidade dos dados. Identificar áreas críticas onde problemas de qualidade afetam o desempenho do negócio.'
      },
      {
        title: 'Nível 1: Inicial – Ad Hoc, Não Estruturado e/ou em Aprendizado',
        content: 'Neste estágio, a organização reconhece problemas de qualidade dos dados, mas os aborda de forma reativa e sem processos estruturados. Os esforços iniciais são desconectados das normas de governança ou privacidade/segurança.',
        people: 'Equipes técnicas identificam problemas, mas não compreendem suas causas raízes.',
        policies: 'Diretrizes rudimentares podem existir, mas não são aplicadas de forma consistente.',
        capabilities: 'A qualidade é avaliada apenas de forma reativa, sem métricas ou processos consistentes.',
        improvement: 'Mapear as fontes de dados e identificar possíveis causas de problemas de qualidade. Introduzir diretrizes básicas de qualidade e critérios como consistência e completude. Iniciar programas de treinamento para aumentar a conscientização técnica sobre qualidade dos dados. Realizar benchmarking com líderes em governança de dados para descobrir práticas eficazes.'
      },
      {
        title: 'Nível 2: Emergente – Iniciativas Incipientes, Transformação de Ativos e Processos Repetíveis',
        content: 'Além das melhorias dos níveis anteriores, a organização começa a medir e monitorar aspectos específicos da qualidade dos dados, como perfilamento, disponibilidade e acessibilidade. Ferramentas de plataformas de dados e mecanismos iniciais de feedback podem ser introduzidos.',
        people: 'Equipes técnicas e de negócios demonstram crescente reconhecimento da importância da qualidade dos dados para a eficiência e eficácia organizacional.',
        policies: 'Critérios iniciais como completude e precisão são estabelecidos para avaliação.',
        capabilities: 'Ferramentas básicas para perfilamento e validação de dados começam a ser implementadas, e o impacto da baixa qualidade em áreas de negócio específicas começa a ser avaliado.',
        improvement: 'Desenvolver métricas claras e mensuráveis para avaliar a qualidade dos dados. Implementar e padronizar processos de limpeza e validação como as primeiras ações estruturadas de resolução de problemas de dados. Expandir o uso de ferramentas de perfilamento para identificar tendências e anomalias. Ampliar os critérios de qualidade para incluir impacto nos negócios, confiabilidade e acessibilidade. Estabelecer processos formais para limpeza e validação regulares dos dados.'
      },
      {
        title: 'Nível 3: Definido – Estruturado e Padronizado',
        content: 'Além das melhorias dos níveis anteriores, a qualidade dos dados torna-se um processo gerenciado e sistemático com diretrizes organizacionais alinhadas com políticas de governança, privacidade e segurança.',
        people: 'As partes interessadas compreendem os impactos financeiros e reputacionais da baixa qualidade dos dados, pelo menos, na maioria das bases de dados das áreas organizacionais.',
        policies: 'Diretrizes e padrões organizacionais claros são definidos e alinhados, pelo menos, na maioria das bases das unidades da organização, com políticas de privacidade, segurança e estruturas de governança.',
        capabilities: 'Sistemas de benchmarking e monitoramento contínuo são introduzidos. Mecanismos de feedback são integrados para apoiar melhorias na qualidade.',
        improvement: 'Formalizar os processos de avaliação e melhoria contínua da qualidade dos dados. Expandir o uso de ferramentas para monitoramento em tempo adequado. Otimizar os processos de correção e enriquecimento de dados, com foco na identificação e resolução das causas-raiz dos problemas. Garantir que os padrões sejam amplamente comunicados e aplicados. Utilizar mecanismos de feedback para orientar ajustes na qualidade.'
      },
      {
        title: 'Nível 4: Gerenciado – Medido e Preditivo',
        content: 'Além das melhorias dos níveis anteriores, a organização monitora a qualidade dos dados com métricas e ferramentas estabelecidas, garantindo processos previsíveis e alinhamento com a governança interna e externa.',
        people: 'As equipes compreendem as causas dos problemas de qualidade das bases das unidades de negócio de forma abrangente e como resolvê-los utilizando dados de desempenho.',
        policies: 'As políticas organizacionais são alinhadas e baseadas em indicadores quantitativos e revisadas periodicamente para garantir alinhamento.',
        capabilities: 'Ferramentas preditivas, dashboards de desempenho e sistemas automatizados de perfilamento apoiam a gestão proativa da qualidade.',
        improvement: 'Realizar auditorias regulares para avaliar e ajustar métricas de qualidade. Desenvolver e otimizar modelos preditivos e sistemas automatizados, quando necessário, para antecipar, prevenir e resolver problemas de qualidade de dados antes que impactem o negócio. Monitorar expectativas e tendências de feedback de forma sistemática.'
      },
      {
        title: 'Nível 5: Otimizado – Inovação e Melhoria Contínua',
        content: 'Além das melhorias dos níveis anteriores, a organização promove inovação contínua na qualidade dos dados utilizando tecnologias avançadas, quando necessário, e alinha as práticas de qualidade aos objetivos estratégicos.',
        people: 'Equipes capacitadas promovem melhoria contínua e inovação na qualidade dos dados em diferentes domínios.',
        policies: 'Diretrizes dinâmicas e adaptáveis evoluem com mudanças organizacionais e tecnológicas.',
        capabilities: 'Tecnologias de ponta aprimoram o perfilamento, a confiabilidade e o monitoramento em tempo real da qualidade, permitindo decisões e ações automatizadas com base em métricas de desempenho e qualidade de dados, quando necessário. Ferramentas de plataformas de dados e mecanismos de feedback são totalmente integrados para sustentar a melhoria contínua.',
        improvement: 'Investir em tecnologias emergentes para apoiar iniciativas de qualidade dos dados, incluindo tomada de decisão autônoma a partir de métricas de desempenho e qualidade de dados, quando necessário. Desenvolver parcerias para benchmarking de boas práticas em qualidade. Criar programas avançados de capacitação para equipes sobre práticas de qualidade. Avaliar continuamente o alinhamento com a governança e a relevância estratégica das métricas de qualidade, garantindo que impulsionem ações e otimizações automáticas, quando for a situação.'
      }
    ]
  },
  infrastructure: {
    id: 'infrastructure',
    title: 'Infraestrutura para Dados',
    description: 'Esta dimensão avalia a capacidade do ambiente tecnológica (hardware, software e arquitetura) da organização e sua adequação para armazenar, processar e integrar dados de forma eficiente. O foco está na prontidão e adequação das plataformas e ferramentas de TI ao ambiente tecnológico que a organização usa (se seja on-premises, nuvem pública, privada ou híbrida), incluindo a consideração de arquiteturas distribuídas em borda, visando suportar efetivamente a governança e o uso estratégico dos dados dentro do contexto do negócio. A avaliação abrange aspectos relacionados à escalabilidade, segurança e conformidade da infraestrutura de TI utilizada na gestão de dados. Além disso, inclui a avaliação da prontidão da infraestrutura, agilidade, escalabilidade, consistência arquitetural, uso de plataformas em nuvem (quando necessário), adoção de padrões de metadados e mecanismos de registro e relatórios. Considerações sobre segurança, gestão de riscos e capacidades de integração também são essenciais para garantir robustez e alinhamento regulatório ao ambiente tecnológico.',
    people: 'Capacidade técnica das equipes para projetar, implementar, gerenciar, evoluir e otimizar a infraestrutura de dados, garantindo sua conformidade com os requisitos da arquitetura e a habilitação proativa dos níveis de serviço (SLAs) acordados para a gestão e o uso seguro e eficiente dos dados.',
    policies: 'Existência de diretrizes que garantam a especificação e implementação da infraestrutura para suportar escalabilidade, segurança, integração e conformidade com padrões internos e externos.',
    capabilities: 'Disponibilidade, prontidão e adequação das tecnologias e plataformas de TI. Inclui a existência e a funcionalidade de ferramentas para a operacionalização dos processos de gestão de dados e para a implementação de controles técnicos que visam atender aos requisitos de qualidade de dados e aos níveis de serviço (SLAs).',
    levels: [
      {
        title: 'Nível 0: Não Iniciado',
        content: 'Neste nível, a infraestrutura é fragmentada, desatualizada e incapaz de lidar com grandes volumes de dados. Não há prontidão, integração ou consistência arquitetural para sustentar operações escaláveis com dados.',
        people: 'Falta de conhecimento sobre ferramentas de dados, plataformas e boas práticas arquiteturais.',
        policies: 'Não existem políticas formais para governança de TI, integração ou prontidão da infraestrutura.',
        capabilities: 'Infraestrutura fragmentada com múltiplas fontes de dados isoladas, ausência de mecanismos de registro/relatórios e tecnologias desatualizadas.',
        improvement: 'Promover workshops para aumentar a conscientização técnica sobre governança de dados e prontidão da infraestrutura. Mapear os recursos tecnológicos existentes e identificar lacunas críticas em escalabilidade e integração.'
      },
      {
        title: 'Nível 1: Inicial – Ad Hoc, Não Estruturado e/ou em Aprendizado',
        content: 'Neste estágio, a organização começa a experimentar componentes básicos de infraestrutura de forma reativa e exploratória, sem consistência arquitetural.',
        people: 'Algumas equipes técnicas experimentam soluções de armazenamento, análise e serviços em nuvem ou "on premises".',
        policies: 'Diretrizes rudimentares existem para uso de ferramentas, mas sem padronização ou cobertura adequada de requisitos técnicos mínimos de segurança e resiliência, com pouca consideração à adequação para diferentes ambientes de implantação.',
        capabilities: 'Soluções isoladas e localizadas são implementadas com integração ou escalabilidade limitadas.',
        improvement: 'Estabelecer um comitê inicial para definir diretrizes de uso de ferramentas. Documentar práticas relacionadas à infraestrutura e definir o propósito e uso dos logs coletados, incluindo a definição de alertas e ações a serem tomadas com base neles. Explorar práticas iniciais de gestão de metadados e controles de segurança.'
      },
      {
        title: 'Nível 2: Emergente – Iniciativas Incipientes, Transformação de Ativos e Processos Repetíveis',
        content: 'Além das melhorias dos níveis anteriores, a infraestrutura começa a amadurecer. Plataformas de dados, padrões de metadados e controles de risco são introduzidos para apoiar uma integração mais ampla.',
        people: 'As equipes recebem treinamentos sobre plataformas de dados.',
        policies: 'Diretrizes e políticas técnicas básicas para a infraestrutura são adotadas, focando na integração de dados, na implementação de controles de segurança iniciais e na capacidade de recuperação inicial, para os modelos de implantação da organização (on-premises/nuvem).',
        capabilities: 'Ferramentas de análise gerenciadas centralmente e soluções de metadados são introduzidas. O registro e relatório de logs começam a ser implementados, com controles básicos de integridade e retenção dos logs para futuras auditorias e investigações de incidentes.',
        improvement: 'Investir em plataformas de dados e infraestrutura integrada para análise, buscando a adequação da infraestrutura para suportar necessidades da organização por dados e integração, considerando o ambiente tecnológico institucional. Definir padrões para consistência arquitetural e registro/relatórios. Reforçar práticas de risco e segurança, incluindo o estabelecimento de processos iniciais para o tratamento de incidentes de segurança da infraestrutura, começando a mapear a relação entre desempenho da infraestrutura e requisitos de nível de serviço.'
      },
      {
        title: 'Nível 3: Definido – Estruturado e Padronizado',
        content: 'Além das melhorias dos níveis anteriores, a infraestrutura torna-se padronizada e alinhada à arquitetura corporativa, requisitos de privacidade e padrões de desempenho.',
        people: 'As equipes colaboram proativamente no monitoramento de desempenho e no alinhamento arquitetural.',
        policies: 'Políticas e diretrizes técnicas para a infraestrutura de dados são definidas e formalmente estabelecidas, garantindo a implementação de controles para escalabilidade, segurança e recuperabilidade de desastres. Essas políticas visam suportar os requisitos organizacionais de proteção de dados e o cumprimento dos Acordos de Nível de Serviço (SLAs) da infraestrutura.',
        capabilities: 'Uso de plataformas de dados, registro e relatórios centralizados e gestão de metadados sustentam a consistência em nível corporativo.',
        improvement: 'Implementar KPIs para monitoramento da agilidade, disponibilidade e desempenho da infraestrutura, avaliando sua adequação aos objetivos de negócio. Realizar auditorias regulares sobre conformidade, privacidade e controles de risco. Alinhar a infraestrutura com estratégias de continuidade de negócios, com foco em garantir o atendimento aos SLAs da infraestrutura e de dados.'
      },
      {
        title: 'Nível 4: Gerenciado – Medido e Preditivo',
        content: 'Além das melhorias dos níveis anteriores, a infraestrutura é monitorada por métricas preditivas. Agilidade, gestão de riscos e capacidades de integração são continuamente avaliadas.',
        people: 'As equipes utilizam dashboards para acompanhar desempenho, registros e indicadores de risco em tempo real ou quase real.',
        policies: 'As políticas técnicas da infraestrutura de dados são dinamicamente atualizadas com base em métricas de desempenho, avaliações de segurança e revisões de conformidade. Elas são otimizadas para adequar ao contexto da infraestrutura organizacional.',
        capabilities: 'Uma infraestrutura de dados suporta operações seguras e escaláveis. Controles obrigatórios de segurança e ingestão de dados são automatizados. Mecanismos garantem a persistência e proteção dos logs de transações, usuários e infraestrutura contra destruição ou falsificação, garantindo o atendimento proativo dos SLAs da infraestrutura.',
        improvement: 'Otimizar sistemas de monitoramento preditivo e de alertas, buscando a antecipação de falhas e a otimização de custos. Refinar estratégias de integração com plataformas e serviços de terceiros, quando necessário. Automatizar fluxos de trabalho de segurança, conformidade e mitigação de riscos, incluindo a resposta automatizada a ameaças e a gestão proativa de vulnerabilidades e riscos de conformidade na infraestrutura, com foco contínuo na garantia e otimização dos SLAs da infraestrutura.'
      },
      {
        title: 'Nível 5: Otimizado – Inovação e Melhoria Contínua',
        content: 'Além das melhorias dos níveis anteriores, a infraestrutura é tratada como um habilitador estratégico dinâmico de inovação. Integra-se perfeitamente com operações e suporta escalabilidade autônoma e conformidade.',
        people: 'As equipes de infraestrutura e engenharia de dados avaliam e adotam tecnologias e práticas emergentes de infraestrutura, promovendo inovação e otimização contínua.',
        policies: 'As políticas técnicas da infraestrutura de dados são adaptativas e proativas, quando necessário, governando atualizações de infraestrutura, integração e a implementação de mecanismos avançados de segurança em tempo real. Elas impulsionam a inovação tecnológica e asseguram a conformidade da infraestrutura com padrões e regulamentações escolhidas pela organização.',
        capabilities: 'Soluções otimizam os serviços computacionais com agilidade, escalabilidade e desempenho; os sistemas de metadados, logs e registros são totalmente automatizados, quando necessário. Controles de segurança da infraestrutura são dinâmicos e auto-ajustáveis, utilizando IA para detecção e mitigação autônoma de ameaças, quando aplicávels, garantindo a superação ou excelência nos SLAs da infraestrutura.',
        improvement: 'Realizar benchmarking com líderes em agilidade, segurança e integração de infraestrutura. Investir em ferramentas de orquestração e gerenciamento de infraestrutura com tecnologias adequadas à organização para garantir auto-organização, auto-recuperação e entrega de valor do dado ao negócio, buscando a superação contínua dos SLAs e a inovação em níveis de serviço. Promover aprendizado contínuo e pesquisa em tecnologias de infraestrutura e DevOps, com foco em inovações em segurança, arquiteturas de dados e eficiência operacional.'
      }
    ]
  },
  open: {
    id: 'open',
    title: 'Dados Abertos',
    description: 'Esta dimensão não é obrigatória e é particularmente relevante para organizações do setor público ou empresas que buscam fomentar a transparência, impulsionar a inovação e gerar impacto social positivo. Avalia a maturidade da organização na gestão, publicação e uso estratégico de dados disponibilizados publicamente (dados abertos), seguindo os princípios de serem livremente utilizáveis, reutilizáveis e redistribuíveis. A avaliação considera aspectos essenciais para garantir a reutilização, acessibilidade, interoperabilidade e a devida atribuição da fonte, ao longo de seu ciclo de vida. Abrange áreas políticas, organizacionais e técnicas, incluindo o planejamento, a priorização estratégica, o licenciamento claro, o versionamento, o formato (legível por máquina) e os mecanismos eficazes de engajamento e feedback com a comunidade de usuários.',
    people: 'Capacitação e engajamento organizacional em práticas e iniciativas de dados abertos.',
    policies: 'Regras e diretrizes para padronizar, gerenciar, licenciar e disponibilizar dados de forma transparente e responsável. Para órgãos públicos do Brasil, a aplicação e a adequação das políticas e práticas de dados abertos devem estar em estrito alinhamento com a legislação vigente (Lei de Acesso à Informação – LAI, Lei Geral de Proteção de Dados Pessoais – LGPD, Lei de Governo Digital) e as instruções normativas específicas para cada esfera de governo (Federal, Estadual, Municipal) ou Poder (Executivo, Legislativo, Judiciário), bem como os objetivos e gestão específica da organização.',
    capabilities: 'Infraestrutura e ferramentas que apoiam a governança, o planejamento, o controle de versões e a publicação eficaz dos dados abertos.',
    levels: [
      {
        title: 'Nível 0: Não Iniciado',
        content: 'Neste nível, não existem práticas ou políticas formais relacionadas a dados abertos. A organização carece de planejamento, priorização e compreensão do valor da transparência ou reutilização de dados.',
        people: 'Não há papéis, responsabilidades ou treinamentos definidos relacionados a dados abertos.',
        policies: 'Não existem políticas documentadas, padrões ou mecanismos de licenciamento para governança de dados abertos.',
        capabilities: 'A infraestrutura é inexistente ou insuficiente para publicação, monitoramento ou promoção da transparência dos dados.',
        improvement: 'Realizar sessões de treinamento iniciais sobre o valor e os propósitos dos dados abertos, enfatizando o potencial de inovação e impacto social. Iniciar a identificação de conjuntos de dados potenciais para abertura e sua organização básica.'
      },
      {
        title: 'Nível 1: Inicial – Ad Hoc, Não Estruturado e/ou em Aprendizado',
        content: 'Iniciativas iniciais de dados abertos surgem de forma limitada e sem estrutura, muitas vezes desconectadas de estruturas organizacionais ou políticas mais amplas.',
        people: 'Alguns papéis começam a ser definidos em áreas isoladas. Atividades de conscientização são realizadas, mas não institucionalizadas.',
        policies: 'Licenças e diretrizes básicas são adotadas informalmente, mas sem consistência ou clareza sobre atribuição e reutilização, com um reconhecimento incipiente da necessidade de conformidade legal institucional ou regulatória.',
        capabilities: 'Os dados são publicados de forma esporádica, muitas vezes em formatos não otimizados para leitura por máquina, com ferramentas limitadas para versionamento, feedback ou monitoramento de acesso.',
        improvement: 'Estruturar e documentar iniciativas e processos existentes, focando em manter a simplicidade e a rapidez. Priorizar conjuntos de dados para publicação com base em impacto e potencial de reutilização, buscando \'começar pequeno, simples e rápido\'. Estabelecer diretrizes mínimas de versionamento e licenciamento, com foco em fácil compreensão da atribuição.'
      },
      {
        title: 'Nível 2: Emergente – Iniciativas Incipientes, Transformação de Ativos e Processos Repetíveis',
        content: 'Além das melhorias dos níveis anteriores, as práticas de dados abertos começam a se consolidar com responsabilidades organizacionais mais definidas e padrões emergentes de planejamento e publicação.',
        people: 'Papéis e responsabilidades para dados abertos são estabelecidos nos departamentos relevantes. Programas iniciais de treinamento são implementados.',
        policies: 'Padrões de metadados, políticas de licenciamento e publicação são introduzidos, incluindo o requisito de formatos legíveis por máquina e a garantia de interoperabilidade básica. Há esforços para alinhar as políticas com aspectos fundamentais da legislação de sua jurisdição.',
        capabilities: 'Ferramentas são adotadas para apoiar a publicação de dados, coleta de feedback e monitoramento básico do uso e reutilização dos dados. Há um início de disponibilização em formatos legíveis por máquina.',
        improvement: 'Expandir os programas de treinamento para incluir metodologias de planejamento e priorização. Adotar ferramentas que apoiem fluxos de publicação, versionamento e automação de licenciamento. Iniciar o alinhamento das práticas com padrões reconhecidos de dados abertos.'
      },
      {
        title: 'Nível 3: Definido – Estruturado e Padronizado',
        content: 'Além das melhorias dos níveis anteriores, a publicação de dados abertos passa a ser sustentada por processos padronizados em toda a organização e alinhada com os objetivos estratégicos.',
        people: 'As equipes são treinadas e participam consistentemente de iniciativas de dados abertos em diferentes departamentos.',
        policies: 'As políticas são abrangentes e incorporam padrões nacionais ou internacionais de dados abertos. O planejamento, versionamento e a garantia de qualidade dos metadados e dos dados abertos publicados fazem parte do ciclo de vida dos dados. Essas políticas garantem a conformidade explícita com as normas legais e normativas aplicáveis à instituição.',
        capabilities: 'A infraestrutura permite publicação contínua de dados abertos em formatos abertos e legíveis por máquina, rastreamento, versionamento e integração com sistemas externos, garantindo a localizabilidade dos conjuntos de dados.',
        improvement: 'Definir indicadores (KPIs) para medir impacto, reutilização, engajamento da comunidade e conformidade com os princípios de dados abertos. Realizar revisões periódicas de políticas para garantir conformidade com licenciamento e padrões. Promover colaboração interna e planejamento de conjuntos de dados futuros, com foco em publicizar a iniciativa de dados abertos.'
      },
      {
        title: 'Nível 4: Gerenciado – Medido e Preditivo',
        content: 'Além das melhorias dos níveis anteriores, os processos de dados abertos são monitorados continuamente e refinados com base em métricas. O planejamento estratégico e a coordenação entre departamentos estão consolidados.',
        people: 'As equipes contribuem ativamente em ciclos de feedback e utilizam dashboards para monitorar o desempenho dos dados abertos.',
        policies: 'As políticas são atualizadas regularmente com base em desempenho, feedback e evolução dos padrões, incorporando proativamente as alterações nas normas regulatórias e normativas aplicáveis à organização.',
        capabilities: 'A infraestrutura automatizada dá suporte à publicação de dados abertos em tempo real, controle de versões avançado e relatórios detalhados de uso, impacto e engajamento.',
        improvement: 'Expandir análises preditivas para antecipar demandas por dados, quando necessário. Aprimorar mecanismos de colaboração para priorização estratégica de conjuntos de dados. Reforçar o alinhamento da governança por meio de atualizações de políticas orientadas por feedback.'
      },
      {
        title: 'Nível 5: Otimizado – Inovação e Melhoria Contínua',
        content: 'Além das melhorias dos níveis anteriores, os dados abertos são usados como ativo estratégico para impulsionar inovação, engajamento público e transparência sistêmica.',
        people: 'As equipes promovem uma cultura de abertura e inovação baseada em dados tanto internamente quanto em redes externas.',
        policies: 'As políticas são dinâmicas, com princípio de abertura por padrão ("open-by-default"), quando possível. Elas são continuamente comparadas e adaptadas aos padrões globais aplicáveis e às expectativas dos clientes dos dados, garantindo a conformidade autônoma e preditiva com a legislação e as normas exigidas para a organização, e impulsionando a ética no uso de dados.',
        capabilities: 'A infraestrutura sustenta estratégias adaptativas de publicação, integração em tempo real de dados e APIs abertas com garantias claras de licenciamento e suporte à rastreabilidade completa e auditabilidade das informações sobre o uso e impacto dos dados abertos. As ferramentas de dados abertos são otimizadas para auto-serviço e auto-organização da comunidade.',
        improvement: 'Fomentar parcerias para inovar com dados abertos. Investir em ferramentas adequadas para automação, análise de impacto e engajamento com o público. Evoluir continuamente a governança com base no feedback da sociedade e da organização.'
      }
    ]
  }
};

export default dimensionsPtBR;
