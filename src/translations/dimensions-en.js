export const dimensionsEn = {
  strategy: {
    id: 'dataStrategy',
    title: 'Data Strategy and Governance',
    description: 'This dimension evaluates how organizations align their strategic objectives with structured Data Governance practices. This alignment is important to ensure data security, privacy, quality, and ethical use, as well as to establish frameworks and guidelines that enable efficient and sustainable governance. For Information Security, the organization should adopt a model appropriate to its context. Additionally, this dimension considers the development of methodologies for project implementation, integration between IT and business teams, and the adoption of metrics that support data-driven decision-making. To reflect comprehensive governance maturity, it also incorporates indicators such as budget allocation, executive sponsorship, strategic vision, data planning, policy alignment, and integration into decision-making. It further includes the definition of stewardship roles, active participation in governance, risk and compliance management, and privacy aspects.',
    people: 'Evaluates team engagement, competencies, and roles in defining and applying Data Governance strategies and practices, including stewardship and executive sponsorship.',
    policies: 'Refers to the strategic alignment of Data Governance guidelines and frameworks, as well as Information Security frameworks (through a security model appropriate to the organization), privacy, risk management, and ethical data use.',
    capabilities: 'Encompasses tools and technologies that support Data Governance, data planning, policy enforcement, and their integration into organizational decision-making processes.',
    levels: [
      {
        title: 'Level 0: Not Started',
        content: 'The organization has no policies, ethical considerations, or structured Data Governance practices. Data Strategy is not considered in organizational objectives. There is no budget, planning, or strategic alignment focused on data.',
        people: 'There are no teams responsible for or engaged in Data Governance. There is a lack of awareness about the ethical risks of improper data use, and no stewardship roles are defined.',
        policies: 'No guidelines exist for governance, ethics, privacy, risk management, or Data Quality. No policy alignment or strategic vision is present.',
        capabilities: 'There is no infrastructure or tools to support basic Data Governance processes. There is no participation in governance structures or integration into decision-making.',
        improvement: 'Raise awareness among teams about the importance of Data Governance through basic training. Conduct an initial assessment of existing data sources and formats to identify gaps. Initiate discussions about executive sponsorship and budget needs for Data Governance.'
      },
      {
        title: 'Level 1: Initial – Ad Hoc, Unstructured and/or Learning',
        content: 'The organization begins its first efforts to create Data Governance policies and processes, but in a reactive and unstructured manner. Executive support is still limited, and budget planning is not aligned with data initiatives.',
        people: 'Some roles are defined in specific areas, but without clarity, strategic alignment, or dedicated stewardship functions.',
        policies: 'Rudimentary guidelines begin to emerge, but they do not comprehensively address Information Security, privacy, risk compliance, or governance participation.',
        capabilities: 'Basic tools are used in isolation, and there is little integration with organizational processes or decision structures.',
        improvement: 'Establish an initial team to manage Data Governance guidelines and stewardship roles. Develop an initial governance plan based on recognized frameworks. Begin aligning governance efforts with organizational strategy, policies, and planning.'
      },
      {
        title: 'Level 2: Emergent – Incipient Initiatives, Asset Transformation and Repeatable Processes',
        content: 'Beyond the actions of previous levels, Data Governance begins to consolidate. Strategic planning and Data Management initiatives start to be recognized in organizational routines.',
        people: 'Teams receive initial training to apply governance processes. Roles such as Data Stewards begin to emerge with defined responsibilities.',
        policies: 'Basic policies related to Data Quality, Information Security, privacy, risk compliance, and ethical use become standardized.',
        capabilities: 'Tools for access control, data monitoring, and policy enforcement are introduced. Initial participation in governance decisions begins to take shape.',
        improvement: 'Formalize Information Security, privacy, and risk management policies using a model appropriate to the organization. Integrate Data Governance into broader organizational planning. Allocate initial budget and define clear sponsorship roles. Ensure support and commitment from senior management to Data Governance. Benchmark with leaders in privacy and Data Strategy.'
      },
      {
        title: 'Level 3: Defined – Structured and Standardized',
        content: 'Beyond the actions of previous levels, governance practices are standardized and aligned with organizational objectives. Strategic vision and policy alignment guide data initiatives. Budget and executive sponsorship from senior management are established.',
        people: 'Multidisciplinary teams collaborate on implementing and monitoring Data Governance. Data Steward roles are integrated into governance structures. Metrics for team participation and engagement with Data Governance begin to be tracked.',
        policies: 'The Data Governance policy is formally published, widely communicated, and accessible, ensuring compliance with internal regulations (Data Policies, Information Security, Information and Communication Technology, among others relevant to the organization) and external ones (Data Protection and privacy legislation, requirements from applicable regulatory and certification bodies), covering privacy, ethics, risk management, and strategic alignment.',
        capabilities: 'Tools support continuous monitoring and governance enforcement. Data Governance is integrated into decision-making processes.',
        improvement: 'Expand the use of performance and compliance metrics to assess governance effectiveness. Improve governance participation across different business areas. Establish governance councils to promote alignment between areas. Develop communication and engagement plans to disseminate governance guidelines across departments and hierarchical levels, formalizing the inclusion of governance responsibilities in operational and technical job descriptions.'
      },
      {
        title: 'Level 4: Managed – Measured and Predictive',
        content: 'Beyond the actions of previous levels, governance maturity is managed through clear KPIs, resource allocation, and risk compliance. Data strategic planning is deeply embedded in operations, and the level of governance penetration throughout the organization is assessed through specific metrics.',
        people: 'Governance teams actively monitor metrics through dashboards. Stewardship functions are reviewed and adapted to business needs. Governance penetration is measured through indicators of policy adherence by operational teams and engagement rates in data initiatives.',
        policies: 'Policies are regularly updated based on performance data and privacy, ethics, and responsible AI regulations.',
        capabilities: 'Governance tools enable predictive analysis and continuous improvement in compliance and data planning, including support for AI model governance and bias management.',
        improvement: 'Refine KPIs related to Data Governance, privacy, and compliance. Automate governance processes whenever possible. Strengthen budget planning aligned with strategic data objectives. Conduct continuous benchmarking with industry leaders to identify improvement opportunities. Create innovation labs focused on governance models and technologies. Develop compliance indicators for AI governance, such as bias auditing and explainability. Enhance continuous feedback mechanisms from operational and tactical levels to influence governance strategy refinement.'
      },
      {
        title: 'Level 5: Optimized – Innovation and Continuous Improvement',
        content: 'Beyond the actions of previous levels, governance and Data Strategy continuously evolve, adapting to new regulations, technologies, and business goals. Data Governance is fully embedded in organizational processes and culture, serving as a central engine for extracting value from data and achieving strategic objectives. There is strong executive support and commitment to resources.',
        people: 'Teams lead innovative Data Governance projects directly aligned with organizational strategic improvements and needs, driving value extraction from data. Governance participation is embedded throughout the organization.',
        policies: 'Policies are dynamic, promoting agile compliance with privacy legislation and strategic goals. Maintain definition of new standards, when necessary, in Data Governance and responsible AI.',
        capabilities: 'Advanced analytics support automation, predictive governance, and strategic decision-making.',
        improvement: 'Ensure maintenance of executive sponsorship and budget for continuous innovation in governance that enables market competitiveness and/or operational efficiency.'
      }
    ]
  },
  people: {
    id: 'people',
    title: 'Culture, People and Organizational Structure',
    description: 'This dimension evaluates the role of individuals and teams in Data Management, stewardship, and analysis, with emphasis on collaboration, accountability, and competency development. The assessment ranges from initial awareness about the strategic importance of data and Data Literacy, to the consolidation of an organizational culture oriented towards data-driven innovation. It includes evaluation of collaboration and integration between Business and Information and Communication Technology areas and other disciplines, workforce competencies, role clarity, collaborative culture, trust, sponsorship, capacity building, and awareness about Open Data. It reflects accountability structures and communication practices.',
    people: 'Evaluates literacy, engagement, and individual accountability in Data Management and analysis.',
    policies: 'Refers to guidelines that define roles, promote stewardship, and ensure consistency in data analysis.',
    capabilities: 'Involves available tools, technologies, and techniques to support Data Stewardship and analysis.',
    levels: [
      {
        title: 'Level 0: Not Started',
        content: 'At this level, the organization does not recognize the strategic importance of data. There are no formal practices, roles, or established tools to support Data Stewardship or analysis.',
        people: 'No team or individual is formally responsible for Data Quality and use. There is a lack of awareness about the strategic value of data, and no promotion of Data Literacy. Interdisciplinary perspectives and workforce competencies are not considered.',
        policies: 'Complete absence of guidelines for Data Stewardship or analysis. There are no structures ensuring accountability or role definition.',
        capabilities: 'No infrastructure or tools exist to support basic stewardship and analysis processes. There are no communication or collaboration practices.',
        improvement: 'Promote awareness campaigns about the importance of Data Stewardship and analysis for the organization. Offer basic training on Data Governance and Quality to employees. Identify potential roles and responsibilities in Data Management. Initiate awareness sessions with senior management about the strategic value of data and the risks of its non-governance.'
      },
      {
        title: 'Level 1: Initial – Ad Hoc, Unstructured and/or Learning',
        content: 'At this stage, the organization begins to demonstrate interest in Data Governance through isolated and unstructured efforts, often driven by individual initiatives rather than organizational strategy.',
        people: 'Informal roles begin to emerge, but without organizational clarity. Interest in data grows, but teams lack technical skills and formal training. Systematic connection and collaboration between Business and IT for data are still limited.',
        policies: 'Rudimentary guidelines appear, with unclear accountability structures and role definition.',
        capabilities: 'Basic tools are used in isolation. Communication remains informal and not systematic.',
        improvement: 'Create an initial group responsible for implementing Data Stewardship practices. Develop basic policies with attention to role clarity and sponsorship. Begin cultivating a culture of collaboration and trust through training. Encourage open communication about data efforts. Promote high-level workshops and presentations for senior management, focusing on tangible benefits of Data Governance for business objectives.'
      },
      {
        title: 'Level 2: Emergent – Incipient Initiatives, Asset Transformation and Repeatable Processes',
        content: 'Beyond improvements from previous levels, at this level data practices become more consistent and structured, with defined roles, initial training, and adoption of fundamental tools.',
        people: 'Technical teams receive initial training. Roles are more defined. Workforce competencies and interdisciplinary engagement begin to be recognized.',
        policies: 'Guidelines include initial role and responsibility definitions. Some accountability mechanisms are established, initiating formalization of Business-IT collaboration for data use.',
        capabilities: 'Structured tools are introduced. Communication channels begin to form to support collaboration.',
        improvement: 'Develop a structured capacity-building program focused on Data Literacy. Include interdisciplinary assessment in team training and evaluation. Build trust and sponsorship from leadership. Promote awareness about data, stewardship, and communication among teams. Establish a direct communication channel with senior management to report Data Governance progress and challenges, requesting their active support.'
      },
      {
        title: 'Level 3: Defined – Structured and Standardized',
        content: 'Beyond improvements from previous levels, at this stage Data Governance practices and collaboration become standardized throughout the organization, sustained by clear roles, trust, and formal training.',
        people: 'Multidisciplinary teams actively collaborate. Formal accountability structures and role clarity (especially at the Business-IT interface) are institutionalized. Continuous training enhances workforce competencies and Data Literacy.',
        policies: 'Policies standardize collaborative and Data Governance practices. Sponsorship and trust are visibly supported by leadership.',
        capabilities: 'Communication tools and structured practices sustain a collaborative environment and promote a culture of data-driven decisions among teams.',
        improvement: 'Expand sponsorship networks to maintain a collaborative culture. Encourage deeper interdisciplinary initiatives. Formalize communication protocols related to Data Quality and Metadata Management. Integrate Data Management awareness into onboarding and training processes. Begin monitoring basic indicators of Data Governance training and awareness.'
      },
      {
        title: 'Level 4: Managed – Measured and Predictive',
        content: 'Beyond improvements from previous levels, at this stage data practices are evaluated based on defined performance indicators (including training and awareness indicators), ensuring consistency, predictability, and alignment with organizational objectives.',
        people: 'Teams monitor their own progress using performance metrics. Role clarity, trust, and collaboration are continuously evaluated and improved. The impact and effectiveness of data and Data Literacy training and awareness actions are proactively monitored.',
        policies: 'Accountability structures are reviewed and improved based on data. Policies support interdisciplinary collaboration and workforce development.',
        capabilities: 'Communication practices are fully integrated and aligned with governance metrics. Sponsorship sustains long-term engagement.',
        improvement: 'Measure the effectiveness of trust and collaboration through feedback cycles. Align training with evolving team competency needs. Regularly review Data Management practices. Enhance cross-area communication dashboards.'
      },
      {
        title: 'Level 5: Optimized – Innovation and Continuous Improvement',
        content: 'Beyond improvements from previous levels, at this stage the organization treats data as a strategic asset, promoting innovation, continuous learning, and cultural transformation through advanced governance and communication practices. Data Governance culture is widespread, with Data Literacy programs measuring impact on team usage maturity. At this level, the organization explores and implements the potential of Artificial Intelligence and Machine Learning, when necessary, to automate and optimize data organization, stewardship, and analysis, elevating efficiency and the capacity to extract value from data.',
        people: 'Teams actively drive innovation through diverse and interdisciplinary approaches. Workforce competencies evolve with continuous learning in literacy programs. A culture of trust, open communication, and data-driven decision-making is deeply embedded. Senior management effectively supports Data Culture, actively integrating strategic data discussions and decisions.',
        policies: 'Dynamic and adaptive policies sustain accountability, sponsorship, and agile response to changes.',
        capabilities: 'Advanced communication systems and capacity-building platforms, including open and transparent data-sharing channels across the company, foster innovation in Data Management and synergy among teams. The organization adopts and leverages Artificial Intelligence and Machine Learning technologies, when necessary, to optimize processes, Quality, and data discovery.',
        improvement: 'Launch innovation labs to explore and enhance data practices, including research and implementation of Artificial Intelligence and Machine Learning solutions, when necessary, for automation and optimization of Data Governance and organization. Establish partnerships with external organizations to develop data practices. Continuously update competency frameworks and accountability protocols.'
      }
    ]
  },
  formalization: {
    id: 'formalization',
    title: 'Formalization and Data Management Processes',
    description: 'This dimension evaluates practices related to Metadata Management, Master Data, Data Architecture, Data models, and Data classification. Its objective is to assess the organizational maturity level in data use and governance, promoting operational efficiency, strategic alignment, and regulatory compliance. Additionally, this dimension includes iterative development approaches, Metadata practices, lifecycle control, DevOps integration, documentation standards, licensing, and risk identification. Furthermore, the dimension highlights the active participation of various roles involved, such as data managers and consumers, and the establishment of effective and secure mechanisms for data sharing throughout the entire data processing lifecycle. It also emphasizes the alignment of internal Data processes with internal and external policies (such as specific privacy and Information Security standards, policies, and models), as well as the implementation of process monitoring and performance tracking mechanisms.',
    people: 'Evaluates team knowledge and accountability in applying Data Management practices, including documentation and lifecycle control.',
    policies: 'Refers to the existence of clear guidelines and standards for Data Governance, classification, integration, DevOps practices, and licensing, as well as adaptation, based on specific models and standards, to topics related to the data area (such as Information Security and Privacy).',
    capabilities: 'Involves tools, technologies, and processes that support Data Management, integration, iterative development, risk identification, and performance monitoring.',
    levels: [
      {
        title: 'Level 0: Not Started',
        content: 'At this level, there are no formal Data Management practices or defined policies. The organization lacks awareness and infrastructure to support Metadata, Master Data, or lifecycle control.',
        people: 'The team has no knowledge of basic concepts such as Metadata, Master Data, and Data Protection.',
        policies: 'There are no specific policies and processes for classification, Metadata Management, Master and reference Data Management, integration and interoperability, and risk management.',
        capabilities: 'There are no tools or infrastructure to manage Master Data or Metadata.',
        improvement: 'Offer basic training to raise team awareness about the importance of Data Management. Conduct an initial survey of existing data sources and formats, identifying inconsistencies and gaps.'
      },
      {
        title: 'Level 1: Initial – Ad Hoc, Unstructured and/or Learning',
        content: 'At this stage, initial Data Management efforts emerge in a fragmented and reactive manner, without alignment with internal or external policies.',
        people: 'Roles begin to be defined in isolated areas, but without clarity or strategic alignment.',
        policies: 'Initial policies are developed, but lack standardization, risk consideration, or lifecycle focus.',
        capabilities: 'Basic tools are used to address specific Metadata and Master Data demands.',
        improvement: 'Create an initial Data Management team with senior management support. Document existing processes and identify gaps for policy formalization. Focus on organizing internal processes and defining clear roles and responsibilities for the most critical Data Management activities.'
      },
      {
        title: 'Level 2: Emergent – Incipient Initiatives, Asset Transformation and Repeatable Processes',
        content: 'Beyond improvements from previous levels, emerging practices are introduced for Metadata and Master Data, along with first steps towards lifecycle control and documentation standards.',
        people: 'Teams recognize the importance of standardized practices for organizational efficiency.',
        policies: 'Basic policies for Master Data Management, classification, and Data Protection begin to be formalized.',
        capabilities: 'A central repository for Metadata and Master Data is created, serving as a foundation for controlled data sharing in the organization. Documentation practices begin to emerge.',
        improvement: 'Implement a centralized Metadata repository accessible to all organizational areas. Begin defining access and use policies for different profiles. Develop organizational policies for Data Governance and protection aligned with best practices. Introduce initial documentation standards and define data lifecycle stages. Benchmark with Data Governance leaders from other organizations to discover effective practices.'
      },
      {
        title: 'Level 3: Defined – Structured and Standardized',
        content: 'Beyond improvements from previous levels, Data Management practices become structured and standardized, with policies for Metadata, lifecycle control, DevOps integration, and risk identification.',
        people: 'Stakeholders (such as managers, operators, and consumers) understand the importance of clear standards for Metadata, Master Data, and integrated architecture.',
        policies: 'Data Quality, classification, and security policies are formalized and widely adopted, conforming to specific standards and models (when necessary), including guidelines for access and sharing by different user profiles, as well as considerations about risks and licensing.',
        capabilities: 'Centralized systems support integration and monitoring of Metadata, Master Data, and DevOps pipelines.',
        improvement: 'Expand the use of tools for Metadata and lifecycle management. Create a central inventory of data sources and related systems. Ensure documentation standards are consistently applied across teams.'
      },
      {
        title: 'Level 4: Managed – Measured and Predictive',
        content: 'Beyond improvements from previous levels, Data Management processes are governed by well-defined performance metrics and continuously monitored for compliance with internal and external policies.',
        people: 'Teams actively monitor KPIs and metrics related to Data Quality, use, and compliance.',
        policies: 'Homogeneous policies are regularly reviewed and updated. Alignment with internal and external regulations is ensured.',
        capabilities: 'Tools enable predictive analysis, monitoring, and integration of risk assessment processes, if necessary.',
        improvement: 'Periodically review KPIs to optimize Data Management and integration. Automate documentation and audit processes. Strengthen lifecycle control and performance monitoring mechanisms.'
      },
      {
        title: 'Level 5: Optimized – Innovation and Continuous Improvement',
        content: 'Beyond improvements from previous levels, Data Management is treated as a strategic function, continuously improved through innovative technologies and full DevOps integration.',
        people: 'Teams lead innovation initiatives in data modeling and integration with emerging technologies.',
        policies: 'Policies are dynamic and continuously adapted to support agile development, new regulations, and iterative processes.',
        capabilities: 'Scalable systems support real-time integration, performance tracking, and risk mitigation through automation-oriented technologies, when necessary.',
        improvement: 'Benchmark with industry leaders to enhance lifecycle and risk management practices. Invest in technologies that enhance automation and analysis in governance. Optimize DevOps workflows by integrating Metadata Management and performance monitoring throughout the data development and analysis lifecycle.'
      }
    ]
  },
  quality: {
    id: 'quality',
    title: 'Data Quality',
    description: 'This dimension evaluates the organizational capacity to ensure high data quality through well-defined criteria and standardized practices. Its scope includes evaluation, continuous improvement, awareness, and monitoring of Data Quality, considering availability, accessibility, reliability, data profiling, privacy and security policies, feedback mechanisms, and integration with data platform tools. It also considers alignment with governance frameworks, quality expectations, and improvement practices.',
    people: 'Awareness and training on data quality criteria, expectations, and the impact of quality on decision-making.',
    policies: 'Guidelines and standards to maintain Data Quality, including privacy, security, and alignment with governance.',
    capabilities: 'Tools and processes to monitor, profile, evaluate, and improve Data Quality, including data platforms and feedback mechanisms.',
    levels: [
      {
        title: 'Level 0: Not Started',
        content: 'At this level, there are no formal initiatives to evaluate or manage Data Quality. The organization lacks awareness, practices, and tools to address basic dimensions such as availability and reliability.',
        people: 'There is no awareness about the importance of Data Quality.',
        policies: 'There are no quality guidelines or standards.',
        capabilities: 'There are no tools or systems to monitor or ensure Data Quality.',
        improvement: 'Promote awareness about the impact of poor Data Quality. Identify critical areas where quality issues affect business performance.'
      },
      {
        title: 'Level 1: Initial – Ad Hoc, Unstructured and/or Learning',
        content: 'At this stage, the organization recognizes Data Quality issues but addresses them reactively and without structured processes. Initial efforts are disconnected from governance or privacy/security standards.',
        people: 'Technical teams identify issues but do not understand their root causes.',
        policies: 'Rudimentary guidelines may exist, but are not consistently applied.',
        capabilities: 'Quality is evaluated only reactively, without consistent metrics or processes.',
        improvement: 'Map data sources and identify potential causes of quality issues. Introduce basic quality guidelines and criteria such as consistency and completeness. Initiate training programs to increase technical awareness about Data Quality. Benchmark with Data Governance leaders to discover effective practices.'
      },
      {
        title: 'Level 2: Emergent – Incipient Initiatives, Asset Transformation and Repeatable Processes',
        content: 'Beyond improvements from previous levels, the organization begins to measure and monitor specific aspects of Data Quality, such as profiling, availability, and accessibility. Data platform tools and initial feedback mechanisms may be introduced.',
        people: 'Technical and business teams demonstrate growing recognition of the importance of Data Quality for organizational efficiency and effectiveness.',
        policies: 'Initial criteria such as completeness and accuracy are established for evaluation.',
        capabilities: 'Basic tools for data profiling and validation begin to be implemented, and the impact of poor quality on specific business areas begins to be assessed.',
        improvement: 'Develop clear and measurable metrics to evaluate Data Quality. Implement and standardize data cleaning and validation processes as the first structured actions for resolving data issues. Expand the use of profiling tools to identify trends and anomalies. Broaden quality criteria to include business impact, reliability, and accessibility. Establish formal processes for regular data cleaning and validation.'
      },
      {
        title: 'Level 3: Defined – Structured and Standardized',
        content: 'Beyond improvements from previous levels, Data Quality becomes a managed and systematic process with organizational guidelines aligned with governance, privacy, and security policies.',
        people: 'Stakeholders understand the financial and reputational impacts of poor Data Quality, at least in most organizational area databases.',
        policies: 'Clear organizational guidelines and standards are defined and aligned, at least in most organizational unit databases, with privacy, security policies, and governance frameworks.',
        capabilities: 'Benchmarking and continuous monitoring systems are introduced. Feedback mechanisms are integrated to support quality improvements.',
        improvement: 'Formalize Data Quality evaluation and continuous improvement processes. Expand the use of tools for monitoring in appropriate timeframes. Optimize data correction and enrichment processes, focusing on identifying and resolving root causes of issues. Ensure standards are widely communicated and applied. Use feedback mechanisms to guide quality adjustments.'
      },
      {
        title: 'Level 4: Managed – Measured and Predictive',
        content: 'Beyond improvements from previous levels, the organization monitors Data Quality with established metrics and tools, ensuring predictable processes and alignment with internal and external governance.',
        people: 'Teams comprehensively understand the causes of quality issues in business unit databases and how to resolve them using performance data.',
        policies: 'Organizational policies are aligned and based on quantitative indicators and periodically reviewed to ensure alignment.',
        capabilities: 'Predictive tools, performance dashboards, and automated profiling systems support proactive quality management.',
        improvement: 'Conduct regular audits to evaluate and adjust quality metrics. Develop and optimize predictive models and automated systems, when necessary, to anticipate, prevent, and resolve Data Quality issues before they impact the business. Monitor expectations and feedback trends systematically.'
      },
      {
        title: 'Level 5: Optimized – Innovation and Continuous Improvement',
        content: 'Beyond improvements from previous levels, the organization promotes continuous innovation in Data Quality using advanced technologies, when necessary, and aligns quality practices with strategic objectives.',
        people: 'Empowered teams promote continuous improvement and innovation in Data Quality across different domains.',
        policies: 'Dynamic and adaptable guidelines evolve with organizational and technological changes.',
        capabilities: 'Cutting-edge technologies enhance profiling, reliability, and real-time quality monitoring, enabling automated decisions and actions based on data performance and quality metrics, when necessary. Data platform tools and feedback mechanisms are fully integrated to sustain continuous improvement.',
        improvement: 'Invest in emerging technologies to support Data Quality initiatives, including autonomous decision-making from data performance and quality metrics, when necessary. Develop partnerships for benchmarking quality best practices. Create advanced capacity-building programs for teams on quality practices. Continuously evaluate alignment with governance and strategic relevance of quality metrics, ensuring they drive actions and automatic optimizations, when appropriate.'
      }
    ]
  },
  infrastructure: {
    id: 'infrastructure',
    title: 'Data Infrastructure',
    description: 'This dimension evaluates the capacity of the technological environment (hardware, software, and architecture) of the organization and its suitability for efficiently storing, processing, and integrating data. The focus is on the readiness and adequacy of IT platforms and tools to the technological environment the organization uses (whether on-premises, public, private, or hybrid cloud), including consideration of distributed edge architectures, aiming to effectively support governance and strategic use of data within the business context. The evaluation covers aspects related to scalability, security, and compliance of the IT infrastructure used in Data Management. Additionally, it includes the evaluation of infrastructure readiness, agility, scalability, architectural consistency, use of cloud platforms (when necessary), adoption of Metadata standards, and logging and reporting mechanisms. Considerations about security, risk management, and integration capabilities are also essential to ensure robustness and regulatory alignment with the technological environment.',
    people: 'Technical capacity of teams to design, implement, manage, evolve, and optimize Data Infrastructure, ensuring its compliance with architectural requirements and proactive enablement of agreed service levels (SLAs) for secure and efficient Data Management and use.',
    policies: 'Existence of guidelines that ensure infrastructure specification and implementation to support scalability, security, integration, and compliance with internal and external standards.',
    capabilities: 'Availability, readiness, and adequacy of IT technologies and platforms. Includes the existence and functionality of tools for operationalizing Data Management processes and for implementing technical controls aimed at meeting Data Quality requirements and service levels (SLAs).',
    levels: [
      {
        title: 'Level 0: Not Started',
        content: 'At this level, the infrastructure is fragmented, outdated, and unable to handle large data volumes. There is no readiness, integration, or architectural consistency to sustain scalable data operations.',
        people: 'Lack of knowledge about data tools, platforms, and architectural best practices.',
        policies: 'There are no formal policies for IT Governance, integration, or infrastructure readiness.',
        capabilities: 'Fragmented infrastructure with multiple isolated data sources, absence of logging/reporting mechanisms, and outdated technologies.',
        improvement: 'Promote workshops to increase technical awareness about Data Governance and infrastructure readiness. Map existing technological resources and identify critical gaps in scalability and integration.'
      },
      {
        title: 'Level 1: Initial – Ad Hoc, Unstructured and/or Learning',
        content: 'At this stage, the organization begins to experiment with basic infrastructure components reactively and exploratively, without architectural consistency.',
        people: 'Some technical teams experiment with storage, analysis, and cloud or on-premises solutions.',
        policies: 'Rudimentary guidelines exist for tool use, but without standardization or adequate coverage of minimum technical security and resilience requirements, with little consideration for suitability for different deployment environments.',
        capabilities: 'Isolated and localized solutions are implemented with limited integration or scalability.',
        improvement: 'Establish an initial committee to define tool usage guidelines. Document infrastructure-related practices and define the purpose and use of collected logs, including defining alerts and actions to be taken based on them. Explore initial Metadata Management practices and security controls.'
      },
      {
        title: 'Level 2: Emergent – Incipient Initiatives, Asset Transformation and Repeatable Processes',
        content: 'Beyond improvements from previous levels, the infrastructure begins to mature. Data platforms, Metadata standards, and risk controls are introduced to support broader integration.',
        people: 'Teams receive training on data platforms.',
        policies: 'Basic technical guidelines and policies for infrastructure are adopted, focusing on data integration, implementation of initial security controls, and initial recovery capability, for the organization\'s deployment models (on-premises/cloud).',
        capabilities: 'Centrally managed analysis tools and Metadata solutions are introduced. Logging and reporting begin to be implemented, with basic controls for log integrity and retention for future audits and incident investigations.',
        improvement: 'Invest in data platforms and integrated infrastructure for analysis, seeking infrastructure adequacy to support the organization\'s data and integration needs, considering the institutional technological environment. Define standards for architectural consistency and logging/reporting. Strengthen risk and security practices, including establishing initial processes for handling infrastructure security incidents, beginning to map the relationship between infrastructure performance and service level requirements.'
      },
      {
        title: 'Level 3: Defined – Structured and Standardized',
        content: 'Beyond improvements from previous levels, the infrastructure becomes standardized and aligned with corporate architecture, privacy requirements, and performance standards.',
        people: 'Teams proactively collaborate on performance monitoring and architectural alignment.',
        policies: 'Technical policies and guidelines for Data Infrastructure are defined and formally established, ensuring implementation of controls for scalability, security, and disaster recovery. These policies aim to support organizational Data Protection requirements and compliance with infrastructure Service Level Agreements (SLAs).',
        capabilities: 'Use of data platforms, centralized logging and reporting, and Metadata Management sustain corporate-level consistency.',
        improvement: 'Implement KPIs for monitoring infrastructure agility, availability, and performance, evaluating its suitability for business objectives. Conduct regular audits on compliance, privacy, and risk controls. Align infrastructure with business continuity strategies, focusing on ensuring compliance with infrastructure and data SLAs.'
      },
      {
        title: 'Level 4: Managed – Measured and Predictive',
        content: 'Beyond improvements from previous levels, the infrastructure is monitored by predictive metrics. Agility, risk management, and integration capabilities are continuously evaluated.',
        people: 'Teams use dashboards to track performance, logs, and risk indicators in real-time or near real-time.',
        policies: 'Technical Data Infrastructure policies are dynamically updated based on performance metrics, security assessments, and compliance reviews. They are optimized to suit the organizational infrastructure context.',
        capabilities: 'Data infrastructure supports secure and scalable operations. Mandatory security and data ingestion controls are automated. Mechanisms ensure persistence and protection of transaction, user, and infrastructure logs against destruction or falsification, ensuring proactive compliance with infrastructure SLAs.',
        improvement: 'Optimize predictive monitoring and alert systems, seeking failure anticipation and cost optimization. Refine integration strategies with third-party platforms and services, when necessary. Automate security, compliance, and risk mitigation workflows, including automated threat response and proactive vulnerability and compliance risk management in infrastructure, with continuous focus on ensuring and optimizing infrastructure SLAs.'
      },
      {
        title: 'Level 5: Optimized – Innovation and Continuous Improvement',
        content: 'Beyond improvements from previous levels, the infrastructure is treated as a dynamic strategic enabler of innovation. It seamlessly integrates with operations and supports autonomous scalability and compliance.',
        people: 'Infrastructure and Data Engineering teams evaluate and adopt emerging infrastructure technologies and practices, promoting innovation and continuous optimization.',
        policies: 'Technical Data Infrastructure policies are adaptive and proactive, when necessary, governing infrastructure updates, integration, and implementation of advanced real-time security mechanisms. They drive technological innovation and ensure infrastructure compliance with standards and regulations chosen by the organization.',
        capabilities: 'Solutions optimize computing services through agility, scalability, and high performance, with metadata, logs, and registry systems fully automated, when required. Infrastructure security controls are dynamic and self-adjusting, leveraging AI for autonomous threat detection and mitigation, to consistently meet or exceed infrastructure SLAs.',
        improvement: 'Benchmark with leaders in infrastructure agility, security, and integration. Invest in infrastructure orchestration and management tools with technologies appropriate to the organization to ensure self-organization, self-recovery, and data value delivery to the business, seeking continuous SLA excellence and innovation in service levels. Promote continuous learning and research in infrastructure and DevOps technologies, focusing on innovations in security, data architectures, and operational efficiency.'
      }
    ]
  },
  open: {
    id: 'open',
    title: 'Open Data',
    description: 'This dimension is not mandatory and is particularly relevant for public sector organizations or companies seeking to foster transparency, drive innovation, and generate positive social impact. It evaluates the organization\'s maturity in managing, publishing, and strategically using publicly available data (Open Data), following the principles of being freely usable, reusable, and redistributable. The evaluation considers essential aspects to ensure reuse, accessibility, interoperability, and proper source attribution, throughout its lifecycle. It covers policy, organizational, and technical areas, including planning, strategic prioritization, clear licensing, versioning, format (machine-readable), and effective engagement and feedback mechanisms with the user community.',
    people: 'Capacity building and organizational engagement in Open Data practices and initiatives.',
    policies: 'Rules and guidelines to standardize, manage, license, and make data available transparently and responsibly. For Brazilian public agencies, the application and adaptation of Open Data policies and practices must be in strict alignment with current legislation (Access to Information Law – LAI, General Data Protection Law – LGPD, Digital Government Law) and specific normative instructions for each government sphere (Federal, State, Municipal) or Branch (Executive, Legislative, Judiciary), as well as the specific objectives and management of the organization.',
    capabilities: 'Infrastructure and tools that support governance, planning, version control, and effective publication of Open Data.',
    levels: [
      {
        title: 'Level 0: Not Started',
        content: 'At this level, there are no formal practices or policies related to Open Data. The organization lacks planning, prioritization, and understanding of the value of transparency or data reuse.',
        people: 'There are no defined roles, responsibilities, or training related to Open Data.',
        policies: 'There are no documented policies, standards, or licensing mechanisms for Open Data Governance.',
        capabilities: 'Infrastructure is nonexistent or insufficient for publication, monitoring, or promoting data transparency.',
        improvement: 'Conduct initial training sessions on the value and purposes of Open Data, emphasizing the potential for innovation and social impact. Begin identifying potential datasets for opening and their basic organization.'
      },
      {
        title: 'Level 1: Initial – Ad Hoc, Unstructured and/or Learning',
        content: 'Initial Open Data initiatives emerge in a limited and unstructured manner, often disconnected from broader organizational frameworks or policies.',
        people: 'Some roles begin to be defined in isolated areas. Awareness activities are conducted, but not institutionalized.',
        policies: 'Licenses and basic guidelines are adopted informally, but without consistency or clarity about attribution and reuse, with nascent recognition of the need for institutional or regulatory legal compliance.',
        capabilities: 'Data is published sporadically, often in formats not optimized for machine reading, with limited tools for versioning, feedback, or access monitoring.',
        improvement: 'Structure and document existing initiatives and processes, focusing on maintaining simplicity and speed. Prioritize datasets for publication based on impact and reuse potential, seeking to \'start small, simple, and fast\'. Establish minimum versioning and licensing guidelines, focusing on easy understanding of attribution.'
      },
      {
        title: 'Level 2: Emergent – Incipient Initiatives, Asset Transformation and Repeatable Processes',
        content: 'Beyond improvements from previous levels, Open Data practices begin to consolidate with more defined organizational responsibilities and emerging planning and publication standards.',
        people: 'Roles and responsibilities for Open Data are established in relevant departments. Initial training programs are implemented.',
        policies: 'Metadata standards, licensing and publication policies are introduced, including the requirement for machine-readable formats and ensuring basic interoperability. There are efforts to align policies with fundamental aspects of jurisdictional legislation.',
        capabilities: 'Tools are adopted to support data publication, feedback collection, and basic monitoring of data use and reuse. There is an initial provision in machine-readable formats.',
        improvement: 'Expand training programs to include planning and prioritization methodologies. Adopt tools that support publication workflows, versioning, and licensing automation. Begin aligning practices with recognized Open Data standards.'
      },
      {
        title: 'Level 3: Defined – Structured and Standardized',
        content: 'Beyond improvements from previous levels, Open Data publication is sustained by standardized processes throughout the organization and aligned with strategic objectives.',
        people: 'Teams are trained and consistently participate in Open Data initiatives across different departments.',
        policies: 'Policies are comprehensive and incorporate national or international Open Data standards. Planning, versioning, and quality assurance of published Open Data Metadata and data are part of the data lifecycle. These policies ensure explicit compliance with legal and normative standards applicable to the institution.',
        capabilities: 'Infrastructure enables continuous publication of Open Data in open and machine-readable formats, tracking, versioning, and integration with external systems, ensuring dataset discoverability.',
        improvement: 'Define indicators (KPIs) to measure impact, reuse, community engagement, and compliance with Open Data principles. Conduct periodic policy reviews to ensure compliance with licensing and standards. Promote internal collaboration and planning for future datasets, focusing on publicizing the Open Data initiative.'
      },
      {
        title: 'Level 4: Managed – Measured and Predictive',
        content: 'Beyond improvements from previous levels, Open Data processes are continuously monitored and refined based on metrics. Strategic planning and cross-departmental coordination are consolidated.',
        people: 'Teams actively contribute to feedback cycles and use dashboards to monitor Open Data performance.',
        policies: 'Policies are regularly updated based on performance, feedback, and standards evolution, proactively incorporating changes in regulatory and normative standards applicable to the organization.',
        capabilities: 'Automated infrastructure supports real-time Open Data publication, advanced version control, and detailed reporting on use, impact, and engagement.',
        improvement: 'Expand predictive analytics to anticipate data demands, when necessary. Enhance collaboration mechanisms for strategic dataset prioritization. Strengthen governance alignment through feedback-driven policy updates.'
      },
      {
        title: 'Level 5: Optimized – Innovation and Continuous Improvement',
        content: 'Beyond improvements from previous levels, Open Data is used as a strategic asset to drive innovation, public engagement, and systemic transparency.',
        people: 'Teams promote a culture of openness and data-driven innovation both internally and in external networks.',
        policies: 'Policies are dynamic, with an "open-by-default" principle, when possible. They are continuously compared and adapted to applicable global standards and data customer expectations, ensuring autonomous and predictive compliance with legislation and standards required for the organization, and driving ethics in data use.',
        capabilities: 'Infrastructure sustains adaptive publication strategies, real-time data integration, and open APIs with clear licensing guarantees and support for complete traceability and auditability of information about Open Data use and impact. Open data tools are optimized for community self-service and self-organization.',
        improvement: 'Foster partnerships to innovate with Open Data. Invest in appropriate tools for automation, impact analysis, and public engagement. Continuously evolve governance based on feedback from society and the organization.'
      }
    ]
  }
};

export default dimensionsEn;
