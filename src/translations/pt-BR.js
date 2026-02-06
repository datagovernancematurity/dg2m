import dimensionsPtBR from './dimensions-pt-BR';

const ptBR = {
  common: {
    level: 'Nível',
    people: 'Pessoas',
    policies: 'Políticas',
    capabilities: 'Capacidades',
    improvement: 'Melhorias e práticas recorrentes para o nível',
    mainAspects: 'Aspectos principais avaliados',
    dimensions: 'Dimensões',
    choose: 'Escolha uma das dimensões ao lado.'
  },
  dimensionsData: dimensionsPtBR,
  nav: {
    title: 'Framework DG2M',
    about: 'Sobre',
    levels: 'Níveis',
    dimensions: 'Dimensões',
    roles: 'Papéis'
  },
  footer: {
    copyright: 'DG2M'
  },
  main: {
    title: 'Modelo de Maturidade de Governança de Dados (DG2M): O Framework',
    subtitle: 'Orientando Organizações para o Uso Estratégico de Dados',
    about: 'Sobre',
    aboutContent: 'Para operacionalizar o DG2M, é necessária uma metodologia que permita medir o nível atual de maturidade de uma organização nas dimensões e aspectos definidos. A metodologia tem caráter tanto diagnóstico, voltada à identificação de lacunas existentes; quanto desenvolvimental, com o objetivo de orientar melhorias estratégicas ao longo do tempo. O modelo é composto por seis níveis de maturidade, que vão do Nível 0 (Não Iniciado) ao Nível 5 (Otimizado).',
    dimensionsTitle: 'Dimensões Avaliadas',
    dimensionsContent: 'A maturidade organizacional é avaliada a partir de seis dimensões centrais:',
    dimensionsList: [
      'Estratégia e Governança de Dados',
      'Cultura, Pessoas e Estrutura Organizacional',
      'Formalização e Processos de Gestão de Dados',
      'Qualidade dos Dados',
      'Infraestrutura para Dados',
      'Dados Abertos (opcional)'
    ],
    aspectsTitle: 'Aspectos Analíticos',
    aspectsContent: 'O modelo avalia cada dimensão com base em três aspectos analíticos:',
    aspectPeople: 'analisa o envolvimento dos profissionais na gestão de dados, incluindo conhecimento técnico, engajamento das equipes e clareza nas responsabilidades.',
    aspectPolicies: 'examina as diretrizes, normas e processos institucionais relacionados ao uso e à gestão de dados, como segurança, privacidade e conformidade com legislações.',
    aspectCapabilities: 'considera os recursos técnicos disponíveis, como ferramentas, tecnologias e infraestrutura voltadas ao processamento, análise e integração de dados.',
    aspectsConclusion: 'A combinação desses três aspectos permite uma avaliação da maturidade em governança de dados, cobrindo desde o engajamento humano até os recursos técnicos utilizados na prática.',
    minLevelTitle: 'Regra do Nível Mínimo',
    minLevelContent: 'A maturidade de cada dimensão é determinada pela Regra do Nível Mínimo, ou seja, considera-se o menor nível entre os três aspectos, destacando possíveis gargalos.'
  },
  levels: {
    title: 'Níveis de Maturidade em Governança de Dados',
    subtitle: 'Este modelo define seis níveis de maturidade que ajudam as organizações a avaliar e aprimorar suas práticas de governança de dados. Cada nível representa uma etapa na jornada que vai de práticas de dados não estruturadas até uma governança de dados totalmente otimizada e orientada pela inovação.',
    level0: {
      title: 'Nível 0: Não Iniciado',
      description: 'Neste estágio, a organização não possui iniciativas nem consciência em relação à governança de dados ou à ciência de dados. Não há reconhecimento do valor estratégico dos dados, e as decisões são tomadas sem qualquer apoio informacional estruturado.\n\nOrganizações neste nível carecem completamente de práticas e estruturas para a gestão de dados. A ausência de processos e de qualquer esforço voltado à governança dificulta que se obtenham os benefícios que uma gestão eficaz de dados poderia proporcionar.'
    },
    level1: {
      title: 'Nível 1: Inicial – Ad Hoc, Não Estruturado e/ou em Aprendizado',
      description: 'No nível inicial, as primeiras iniciativas relacionadas à gestão de dados começam a surgir, mas de maneira desorganizada e sem alinhamento estratégico. A organização está em uma fase de aprendizado, explorando ferramentas e tecnologias sem uma visão estruturada de longo prazo.\n\nAs decisões são reativas e baseadas na intuição, com projetos exploratórios ocasionais voltados à compreensão dos possíveis usos dos dados. No entanto, a falta de documentação e de processos padronizados limita a evolução dessas iniciativas.'
    },
    level2: {
      title: 'Nível 2: Emergente – Iniciativas Incipientes, Transformação de Ativos e Processos Repetíveis',
      description: 'Além dos avanços do estágio anterior, neste nível os dados passam a ser reconhecidos como um ativo estratégico, e a organização começa a utilizar ferramentas como dashboards e processos básicos para apoiar a tomada de decisões.\n\nO desenvolvimento de protótipos e os primeiros investimentos tecnológicos caracterizam esse nível. Algumas áreas começam a padronizar processos, e as decisões passam a se basear em informações extraídas dos dados. Contudo, a adoção dessas práticas ainda ocorre de maneira isolada dentro da organização, sem uma governança formal consolidada.'
    },
    level3: {
      title: 'Nível 3: Definido – Estruturado e Padronizado',
      description: 'Com base nos avanços dos estágios anteriores, neste nível a governança de dados torna-se parte integrante da estratégia organizacional, com processos bem definidos e documentados. A organização estabelece papéis e responsabilidades claros para a gestão de dados, promovendo uma abordagem estruturada e integrada entre diferentes áreas.\n\nA padronização dos processos permite maior eficiência e confiabilidade no uso dos dados. Além disso, ferramentas avançadas de análise e monitoramento começam a ser implementadas, aumentando a capacidade da organização de tomar decisões baseadas em dados.'
    },
    level4: {
      title: 'Nível 4: Gerenciado – Medido e Preditivo',
      description: 'Além dos avanços do estágio anterior, neste nível a organização atinge um controle significativo sobre seus processos de governança de dados, utilizando métricas quantitativas e indicadores estatísticos para monitorar, gerenciar e prever resultados.\n\nAs decisões tornam-se totalmente orientadas por dados, eliminando a subjetividade e reduzindo os riscos operacionais. A governança baseia-se em indicadores-chave de desempenho (KPIs), assegurando conformidade contínua e eficiência. Sistemas e processos são monitorados em tempo real para garantir que o desempenho esteja adequado e alinhado às necessidades do negócio.'
    },
    level5: {
      title: 'Nível 5: Otimizado – Inovação e Melhoria Contínua',
      description: 'Avançando, no nível mais avançado a governança de dados e a ciência de dados tornam-se ativos estratégicos, impulsionando a inovação e promovendo um ciclo de melhoria contínua baseado em aprendizado e análise preditiva. A organização aprimora continuamente seus processos, métricas e análises de dados, alinhando-os ao máximo aos objetivos estratégicos, sempre mantendo conformidade com as regulamentações pertinentes e práticas de mercado adequadas à realidade da organização. Soluções inovadoras integram stakeholders e cadeias de valor, promovendo colaboração e sinergia em toda a estrutura da organização. Tecnologias avançadas e automação são aplicadas estrategicamente, quando necessário, para otimizar operações e gerar vantagem competitiva. Explora-se o potencial de novos produtos e serviços baseados em dados, alinhados aos objetivos do negócio. Essa abordagem consolida uma cultura de dados interna, facilitando a colaboração com o ecossistema externo, conforme a necessidade.'
    }
  },
  dimensions: {
    title: 'Dimensões do DG2M',
    subtitle: 'Para avaliar os níveis de maturidade, foram desenvolvidas seis dimensões as quais estão disponíveis abaixo.'
  },
  roles: {
    title: 'Principais Papéis no DG2M',
    subtitle: 'Compreendendo Responsabilidades no Modelo de Maturidade',
    overview: 'Visão Geral',
    overviewContent: 'Uma governança de dados eficaz requer papéis e responsabilidades definidos. Cada papel contribui de forma única para o sucesso das iniciativas de governança, garantindo que os dados sejam gerenciados como um ativo importante na organização.',
    strategy: {
      title: 'Área de Atuação: Estratégia e Liderança',
      executives: 'Patrocinadores(as) Executivos(as) / Alta Administração definem a visão e a estratégia geral da organização para os dados. Fornecem o patrocínio, endosso e garantem a alocação de recursos (financeiros, humanos, tecnológicos) necessários para as iniciativas de governança de dados, reforçando a importância da cultura de dados e da responsabilidade em toda a organização.',
      cdo: 'No nível estratégico, o Chief Data Officer (CDO) / Diretor(a) de Governança de Dados lidera a estratégia de dados da organização, alinhando as iniciativas de dados aos objetivos de negócio. É o principal responsável pela implementação e supervisão do programa de governança de dados. Atua como elo entre a alta administração, as áreas de negócio e a tecnologia, e frequentemente interage com órgãos reguladores.',
      committees: 'Os Comitês de Governança de Dados (ou Comitês Diretivos de Dados) definem políticas de alto nível, padrões, processos e diretrizes de governança de dados. Revisam e aprovam iniciativas estratégicas de dados, resolvem conflitos de prioridade e responsabilidade e monitoram o progresso do programa de governança, representando diversas áreas da organização.',
      office: 'O Escritório de Governança de Dados (EGD / DGO) apoia o CDO e o Comitê de Governança, sendo responsável pela operacionalização do programa de governança, incluindo a documentação de políticas, orquestração de atividades, comunicação, monitoramento de métricas de governança e mediação de conflitos. Atua como ponto central para o programa de governança de dados.'
    },
    management: {
      title: 'Área de Atuação: Gestão e Curadoria de Dados',
      stewards: 'Curadores(as) de Dados (Data Stewards) gerenciam a qualidade, as definições (metadados de negócio) e o ciclo de vida dos dados dentro de um domínio de negócio específico. Traduzem requisitos de negócio em regras de dados, monitoram a conformidade com essas regras e trabalham para resolver problemas de qualidade de dados. São responsáveis por gerenciar o catálogo de dados, glossário de negócios e outras documentações relacionadas aos metadados, assegurando que as definições de dados sejam claras, consistentes e acessíveis. Atuam como guardiões(ãs) dos dados e ponte entre as áreas de negócio e a tecnologia, facilitando a descoberta e o entendimento dos ativos de dados pela organização.',
      managers: 'Gerentes de Equipes de Dados / Gestores(as) de Dados coordenam equipes e projetos de dados, gerenciando recursos, cronogramas e entregas. Asseguram que as práticas de governança de dados sejam integradas aos processos de desenvolvimento e operação de dados.'
    },
    operations: {
      title: 'Área de Atuação: Operações de Dados',
      operators: 'Usuários(as)/Operadores(as) de Dados (Data Creators/Operators) são responsáveis pela criação, inserção, atualização e manutenção diária de dados em sistemas operacionais e ferramentas de negócio. Devem seguir estritamente as políticas e diretrizes de qualidade de dados, contribuindo fundamentalmente para a integridade dos dados na origem. Inclui colaboradores(as) que geram ou inserem dados no seu dia a dia.'
    },
    engineering: {
      title: 'Área de Atuação: Engenharia e Infraestrutura de Dados',
      dataEngineers: 'O Engenheiro(a) de Dados (Data Engineer) projeta, constrói, otimiza e mantém a infraestrutura de dados (como, data lakes, data warehouses, bancos de dados, etc.) e os pipelines de dados (ETL/ELT). Garante a ingestão, transformação, armazenamento e disponibilidade dos dados em escala, colaborando com cientistas e analistas para atender às suas necessidades de acesso e processamento de dados.',
      itSpecialists: 'Especialistas em TI e Bancos de Dados (DBAs e Administradores(as) de Sistemas) garantem o desempenho, a disponibilidade, a segurança física e lógica da infraestrutura de dados e dos sistemas de banco de dados. Realizam backups, otimizam consultas e gerenciam acessos. Oferecem suporte essencial aos(às) Engenheiros(as) e Curadores(as) de Dados.',
      security: 'Especialistas em Cybersecurity (Segurança Cibernética) focam na proteção dos ativos de dados contra acessos não autorizados, perdas ou ataques cibernéticos. Desenvolvem e implementam políticas de segurança da informação, realizam auditorias de segurança e respondem a incidentes, garantindo a confidencialidade, integridade e disponibilidade dos dados.'
    },
    analytics: {
      title: 'Área de Atuação: Análise e Consumo de Dados',
      consumers: 'Consumidores(as) de Dados utilizam os produtos de dados (como, relatórios, dashboards, modelos e aplicações) para análise, tomada de decisão e operações de negócio. Fornecem feedback valioso sobre a usabilidade, relevância e qualidade dos dados, orientando as prioridades da governança e melhorias nos sistemas.',
      analysts: 'Analistas de Dados e Cientistas de Dados analisam, interpretam, modelam e visualizam dados para gerar análises, relatórios e documentos que informam e fortalecem as estratégias de negócio. Criam e validam modelos preditivos e descritivos. São consumidores(as) avançados(as) de dados e frequentemente criam novos produtos de dados para outros(as) consumidores(as).'
    },
    compliance: {
      title: 'Área de Atuação: Conformidade e Governança Legal',
      dpo: 'O Encarregado(a) de Proteção de Dados (DPO) foca no estrito cumprimento da LGPD (e outras leis de proteção de dados relevantes). Atua como ponto de contato para autoridades reguladoras e titulares dos dados, monitora a conformidade interna e externa e aconselha a organização sobre as obrigações de proteção de dados.',
      complianceSpecialists: 'Especialistas em Compliance e Auditoria garantem que a organização esteja em conformidade com as leis, regulamentos e padrões internos e externos aplicáveis ao uso e gestão de dados. Realizam auditorias regulares para identificar riscos e lacunas de conformidade, e ajudam a desenvolver planos de ação corretivos.'
    },
    enablement: {
      title: 'Área de Atuação: Habilitação e Transformação Cultural',
      productManagers: 'Data Product Managers / Product Owners lideram o ciclo de vida de produtos de dados (como, dashboards, pipelines de dados específicos, modelos de IA), desde a concepção até a entrega e manutenção. Atuam como ponte entre as necessidades do negócio e as equipes técnicas, garantindo que os produtos de dados agreguem valor e atendam aos padrões de governança. Reconhece a tendência de "produtos de dados".',
      changeLeaders: 'Agentes de Cultura de Dados / Change Leaders focados em disseminar a cultura de dados na empresa, promovendo a conscientização sobre a importância dos dados, boas práticas de governança, ética no uso de dados e a responsabilidade compartilhada. Desenvolvem programas de treinamento e comunicação para fomentar uma mentalidade orientada a dados em todos os níveis da organização.'
    },
    integration: 'Integração de Papéis ao Longo dos Níveis de Maturidade',
    integrationContent: 'À medida que a organização evolui, esses papéis tornam-se cada vez mais definidos, integrados e fortalecidos, contribuindo para uma cultura de dados mais ágil, ética e orientada por valor.'
  }
};

export default ptBR;
