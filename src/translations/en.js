import dimensionsEn from './dimensions-en';

const en = {
  common: {
    level: 'Level',
    people: 'People',
    policies: 'Policies',
    capabilities: 'Capabilities',
    improvement: 'Recurring Improvements and Practices for this Level',
    mainAspects: 'Main Aspects Evaluated',
    dimensions: 'Dimensions',
    choose: 'Choose one of the dimensions from the sidebar.'
  },
  dimensionsData: dimensionsEn,
  nav: {
    title: 'DG2M Framework',
    about: 'About',
    levels: 'Levels',
    dimensions: 'Dimensions',
    roles: 'Roles'
  },
  footer: {
    copyright: 'DG2M'
  },
  main: {
    title: 'Data Governance Maturity Model (DG2M): The Framework',
    subtitle: 'Guiding Organizations Towards Strategic Data Use',
    about: 'About',
    aboutContent: 'To operationalize DG2M, a methodology is required that enables measuring an organization\'s current maturity level across defined dimensions and aspects. The methodology has both a diagnostic character, focused on identifying existing gaps, and a developmental one, aimed at guiding strategic improvements over time. The model consists of six maturity levels, ranging from Level 0 (Not Started) to Level 5 (Optimized).',
    dimensionsTitle: 'Dimensions Evaluated',
    dimensionsContent: 'Organizational maturity is evaluated across six central dimensions:',
    dimensionsList: [
      'Data Strategy and Governance',
      'Culture, People, and Organizational Structure',
      'Formalization and Data Management Processes',
      'Data Quality',
      'Data Infrastructure',
      'Open Data (optional)'
    ],
    aspectsTitle: 'Analytical Aspects',
    aspectsContent: 'The model evaluates each dimension based on three analytical aspects:',
    aspectPeople: 'analyzes the involvement of professionals in Data Management, including technical knowledge, team engagement, and role clarity.',
    aspectPolicies: 'examines institutional guidelines, standards, and processes related to data use and management, such as security, privacy, and compliance.',
    aspectCapabilities: 'considers available technical resources, such as tools, technologies, and infrastructure focused on data processing, analysis, and integration.',
    aspectsConclusion: 'The combination of these three aspects allows for an assessment of Data Governance maturity, covering from human engagement to technical resources used in practice.',
    minLevelTitle: 'Minimum Level Rule',
    minLevelContent: 'The maturity of each dimension is determined by the Minimum Level Rule, meaning the lowest level among the three aspects is considered, highlighting possible bottlenecks.'
  },
  levels: {
    title: 'Data Governance Maturity Levels',
    subtitle: 'This model defines six maturity levels that help organizations assess and improve their data governance practices. Each level represents a stage in the journey from unstructured data practices to fully optimized, innovation-driven data governance.',
    level0: {
      title: 'Level 0: Not Started',
      description: 'At this stage, the organization has no initiatives or awareness regarding Data Governance or Data Science. There is no recognition of the strategic value of data, and decisions are made without any structured informational support.\n\nOrganizations at this level completely lack practices and structures for Data Management. The absence of processes and any governance-focused effort makes it difficult to obtain the benefits that effective Data Management could provide.'
    },
    level1: {
      title: 'Level 1: Initial – Ad Hoc, Unstructured and/or Learning',
      description: 'At the initial level, the first Data Management-related initiatives begin to emerge, but in a disorganized manner and without strategic alignment. The organization is in a learning phase, exploring tools and technologies without a structured long-term vision.\n\nDecisions are reactive and based on intuition, with occasional exploratory projects aimed at understanding possible data uses. However, the lack of documentation and standardized processes limits the evolution of these initiatives.'
    },
    level2: {
      title: 'Level 2: Emergent – Incipient Initiatives, Asset Transformation and Repeatable Processes',
      description: 'Beyond the advances of the previous stage, at this level data begins to be recognized as a strategic asset, and the organization starts using tools such as dashboards and basic processes to support decision-making.\n\nPrototype development and initial technological investments characterize this level. Some areas begin to standardize processes, and decisions start to be based on information extracted from data. However, the adoption of these practices still occurs in isolation within the organization, without consolidated formal Data Governance.'
    },
    level3: {
      title: 'Level 3: Defined – Structured and Standardized',
      description: 'Based on the advances of previous stages, at this level Data Governance becomes an integral part of organizational strategy, with well-defined and documented processes. The organization establishes clear roles and responsibilities for Data Management, promoting a structured and integrated approach across different areas.\n\nProcess standardization allows for greater efficiency and reliability in data use. Additionally, advanced analysis and monitoring tools begin to be implemented, increasing the organization\'s capacity to make data-driven decisions.'
    },
    level4: {
      title: 'Level 4: Managed – Measured and Predictive',
      description: 'Beyond the advances of the previous stage, at this level the organization achieves significant control over its Data Governance processes, using quantitative metrics and statistical indicators to monitor, manage, and predict outcomes.\n\nDecisions become fully data-driven, eliminating subjectivity and reducing operational risks. Governance is based on key performance indicators (KPIs), ensuring continuous compliance and efficiency. Systems and processes are monitored in real-time to ensure performance is adequate and aligned with business needs.'
    },
    level5: {
      title: 'Level 5: Optimized – Innovation and Continuous Improvement',
      description: 'Moving forward, at the most advanced level, Data Governance and Data Science become strategic assets, driving innovation and promoting a cycle of continuous improvement based on learning and predictive analysis. The organization continuously enhances its processes, metrics, and data analyses, aligning them as closely as possible with strategic objectives, while maintaining compliance with relevant regulations and market practices appropriate to the organization\'s reality. Innovative solutions integrate stakeholders and value chains, promoting collaboration and synergy throughout the organization\'s structure. Advanced technologies and automation are strategically applied, when necessary, to optimize operations and generate competitive advantage. The potential for new data-based products and services aligned with business objectives is explored. This approach consolidates an internal data culture, facilitating collaboration with the external ecosystem as needed.'
    }
  },
  dimensions: {
    title: 'DG2M Dimensions',
    subtitle: 'To assess maturity levels, six dimensions have been developed: five core dimensions and one optional, which are available below.'
  },
  roles: {
    title: 'Key Roles in DG2M',
    subtitle: 'Understanding Responsibilities',
    overview: 'Overview',
    overviewContent: 'Effective data governance requires defined roles and responsibilities. Each role contributes uniquely to the success of governance initiatives, ensuring that data is managed as an important organizational asset.',
    strategy: {
      title: 'Area of Activity: Strategy and Leadership',
      executives: 'Executive Sponsors / Senior Management define the overall vision and strategy for organizational data. They provide sponsorship, endorsement, and ensure the allocation of necessary resources (financial, human, technological) for Data Governance initiatives, reinforcing the importance of Data Culture and accountability throughout the organization.',
      cdo: 'At the strategic level, the Chief Data Officer (CDO) / Director of Data Governance leads the organization\'s Data Strategy, aligning data initiatives with business objectives. They are primarily responsible for implementing and overseeing the Data Governance program. They act as a bridge between senior management, business areas, and technology, and frequently interact with regulatory bodies.',
      committees: 'Data Governance Committees (or Data Steering Committees) define high-level policies, standards, processes, and Data Governance guidelines. They review and approve strategic data initiatives, resolve priority and responsibility conflicts, and monitor the governance program\'s progress, representing various organizational areas.',
      office: 'The Data Governance Office (DGO) supports the CDO and Governance Committee, being responsible for operationalizing the governance program, including policy documentation, activity orchestration, communication, governance metrics monitoring, and conflict mediation. It acts as the central point for the Data Governance program.'
    },
    management: {
      title: 'Area of Activity: Data Management and Stewardship',
      stewards: 'Data Stewards manage Data Quality, definitions (Business Metadata), and lifecycle within a specific business domain. They translate business requirements into data rules, monitor compliance with these rules, and work to resolve Data Quality issues. They are responsible for managing the Data Catalog, Business Glossary, and other Metadata-related documentation, ensuring that data definitions are clear, consistent, and accessible. They act as data guardians and a bridge between business areas and technology, facilitating the discovery and understanding of data assets by the organization.',
      managers: 'Data Team Managers / Data Managers coordinate data teams and projects, managing resources, schedules, and deliverables. They ensure that Data Governance practices are integrated into data development and operation processes.'
    },
    operations: {
      title: 'Area of Activity: Data Operations',
      operators: 'Data Users/Operators (Data Creators/Operators) are responsible for creating, inserting, updating, and maintaining daily data in operational systems and business tools. They must strictly follow Data Quality policies and guidelines, fundamentally contributing to data integrity at the source. This includes employees who generate or input data in their daily work.'
    },
    engineering: {
      title: 'Area of Activity: Data Engineering and Infrastructure',
      dataEngineers: 'Data Engineers design, build, optimize, and maintain Data Infrastructure (such as Data Lakes, Data Warehouses, databases, etc.) and Data Pipelines (ETL/ELT). They ensure data ingestion, transformation, storage, and availability at scale, collaborating with scientists and analysts to meet their data access and processing needs.',
      itSpecialists: 'IT and Database Specialists (DBAs and System Administrators) ensure the performance, availability, physical and logical security of Data Infrastructure and database systems. They perform backups, optimize queries, and manage access. They provide essential support to Data Engineers and Data Stewards.',
      security: 'Cybersecurity Specialists focus on protecting data assets against unauthorized access, loss, or cyberattacks. They develop and implement Information Security policies, conduct security audits, and respond to incidents, ensuring data confidentiality, integrity, and availability.'
    },
    analytics: {
      title: 'Area of Activity: Data Analysis and Consumption',
      consumers: 'Data Consumers use Data Products (such as reports, dashboards, models, and applications) for analysis, decision-making, and business operations. They provide valuable feedback on the usability, relevance, and Quality of data, guiding governance priorities and system improvements.',
      analysts: 'Data Analysts and Data Scientists analyze, interpret, model, and visualize data to generate analyses, reports, and documents that inform and strengthen business strategies. They create and validate predictive and descriptive models. They are advanced data consumers and frequently create new Data Products for other consumers.'
    },
    compliance: {
      title: 'Area of Activity: Compliance and Legal Governance',
      dpo: 'The Data Protection Officer (DPO) focuses on compliance with Data Protection laws (such as LGPD and other relevant Data Protection laws). They act as a point of contact for regulatory authorities and data subjects, monitor internal and external compliance, and advise the organization on Data Protection obligations.',
      complianceSpecialists: 'Compliance and Audit Specialists ensure that the organization complies with laws, regulations, and internal and external standards applicable to data use and Management. They conduct regular audits to identify compliance risks and gaps, and help develop corrective action plans.'
    },
    enablement: {
      title: 'Area of Activity: Enablement and Cultural Transformation',
      productManagers: 'Data Product Managers / Product Owners lead the lifecycle of Data Products (such as dashboards, specific Data Pipelines, AI models) from conception to delivery and maintenance. They act as a bridge between business needs and technical teams, ensuring that Data Products add value and meet governance standards. This recognizes the trend toward "Data Products".',
      changeLeaders: 'Data Culture Agents / Change Leaders focus on disseminating Data Culture within the company, promoting awareness of the importance of data, good governance practices, ethics in data use, and shared responsibility. They develop training and communication programs to foster a data-driven mindset at all levels of the organization.'
    },
    integration: 'Role Integration Across Maturity Levels',
    integrationContent: 'As the organization evolves, these roles become increasingly defined, integrated, and strengthened, contributing to a more agile, ethical, and value-driven data culture.'
  }
};

export default en;
