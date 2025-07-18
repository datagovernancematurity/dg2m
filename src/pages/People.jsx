import React, { useState } from 'react';
import { NavLink, Link, Routes, Route, useLocation } from 'react-router-dom';
import './Main.css';

const dimensions = [
  {
    id: 'people',
    title: 'Cultura, Pessoas e Estrutura Organizacional',
    description:
      'Esta dimensão avalia o papel de indivíduos e equipes na gestão, curadoria e análise de dados, com ênfase na colaboração, responsabilidade e desenvolvimento de competências. A avaliação abrange desde a conscientização inicial sobre a importância estratégica dos dados e o letramento em dados, até a consolidação de uma cultura organizacional orientada para a inovação baseada em dados. Inclui avaliação da colaboração e integração entre as áreas de Negócio e de Tecnologia da Informação e Comunicação e outras disciplinas, competências da força de trabalho, clareza de papéis, cultura de colaboração, confiança, patrocínio, capacitação e conscientização sobre dados abertos. Reflete estruturas de responsabilização e práticas de comunicação.',
    people:
      'Avalia o letramento, o engajamento e a responsabilidade dos indivíduos na gestão e análise de dados.',
    policies:
      'Refere-se a diretrizes que definem papéis, promovem a curadoria e garantem a consistência da análise de dados.',
    capabilities:
      'Envolve ferramentas, tecnologias e técnicas disponíveis para apoiar a curadoria e a análise de dados.',
    levels: [
      {
        title: 'Nível 0: Não Iniciado',
        content:
          'Neste nível, a organização não reconhece a importância estratégica dos dados. Não há práticas formais, papéis ou ferramentas estabelecidas para apoiar a curadoria ou análise de dados.',
        people:
          'Nenhuma equipe ou indivíduo é formalmente responsável pela qualidade e uso dos dados. Há falta de conscientização sobre o valor estratégico dos dados e não há promoção ao letramento em dados. Perspectivas interdisciplinares e competências da força de trabalho não são consideradas.',
        policies:
          'Ausência total de diretrizes para curadoria ou análise de dados. Não há estruturas que garantam responsabilidade ou definição de papéis.',
        capabilities:
          'Inexistência de infraestrutura ou ferramentas para apoiar processos básicos de curadoria e análise. Não há práticas de comunicação ou colaboração.',
        improvement:
          'Promover campanhas de conscientização sobre a importância da curadoria e análise de dados para a organização. Oferecer treinamentos básicos sobre governança e qualidade de dados aos colaboradores. Identificar possíveis papéis e responsabilidades na gestão de dados. Iniciar sessões de conscientização com a alta gestão sobre o valor estratégico dos dados e os riscos da sua não governança.',
      },
      {
        title: 'Nível 1: Inicial – Ad Hoc, Não Estruturado e/ou em Aprendizado',
        content:
          'Neste estágio, a organização começa a demonstrar interesse pela governança de dados por meio de esforços isolados e não estruturados, geralmente impulsionados por iniciativas individuais, e não pela estratégia organizacional.',
        people:
          'Papéis informais começam a surgir, mas sem clareza organizacional. O interesse por dados cresce, mas as equipes carecem de habilidades técnicas e treinamento formal. A conexão e a colaboração sistemática entre Negócio e TI para dados ainda são limitadas.',
        policies:
          'Diretrizes rudimentares aparecem, com estruturas de responsabilidade e definição de papéis pouco claras.',
        capabilities:
          'Ferramentas básicas são utilizadas de forma isolada. A comunicação continua informal e não sistemática.',
        improvement:
          'Criar um grupo inicial responsável pela implementação de práticas de curadoria de dados. Desenvolver políticas básicas com atenção à clareza de papéis e ao patrocínio. Começar a cultivar uma cultura de colaboração e confiança por meio de treinamentos. Incentivar a comunicação aberta sobre os esforços com dados. Promover workshops e apresentações de alto nível para a alta gestão, com foco nos benefícios tangíveis da governança de dados para os objetivos de negócio.',
      },
      {
        title: 'Nível 2: Emergente – Iniciativas Incipientes, Transformação de Ativos e Processos Repetíveis',
        content:
          'Além das melhorias dos níveis anteriores, neste nível as práticas com dados tornam-se mais consistentes e estruturadas, com papéis definidos, treinamentos iniciais e adoção de ferramentas fundamentais.',
        people:
          'Equipes técnicas recebem treinamentos iniciais. Os papéis estão mais definidos. Competências da força de trabalho e engajamento interdisciplinar começam a ser reconhecidos.',
        policies:
          'Diretrizes incluem definições iniciais de papéis e responsabilidades. Alguns mecanismos de responsabilização são estabelecidos, iniciando a formalização da colaboração entre Negócio e TI para o uso de dados.',
        capabilities:
          'Ferramentas estruturadas são introduzidas. Canais de comunicação começam a se formar para apoiar a colaboração.',
        improvement:
          'Desenvolver um programa de capacitação estruturado com foco em letramento em dados. Incluir avaliação interdisciplinar na formação e avaliação das equipes. Construir confiança e patrocínio por parte da liderança. Promover a conscientização sobre dados, curadoria e comunicação entre equipes. Estabelecer um canal de comunicação direto com a alta gestão para reportar progressos e desafios da governança de dados, solicitando seu apoio ativo.',
      },
      {
        title: 'Nível 3: Definido – Estruturado e Padronizado',
        content:
          'Além das melhorias dos níveis anteriores, neste estágio as práticas de governança de dados e colaboração tornam-se padronizadas em toda a organização, sustentadas por papéis claros, confiança e treinamentos formais.',
        people:
          'Equipes multidisciplinares colaboram ativamente. Estruturas formais de responsabilização e clareza de papéis (especialmente na interface Negócio-TI) são institucionalizadas. Treinamentos contínuos aprimoram as competências da força de trabalho e seu letramento em dados.',
        policies:
          'Políticas padronizam práticas colaborativas e de governança de dados. O patrocínio e a confiança são visivelmente apoiados pela liderança.',
        capabilities:
          'Ferramentas de comunicação e práticas estruturadas sustentam um ambiente colaborativo e promovem uma cultura de decisões orientadas por dados entre as equipes.',
        improvement:
          'Expandir as redes de patrocínio para manter a cultura de colaboração. Incentivar iniciativas interdisciplinares mais profundas. Formalizar protocolos de comunicação relacionados à qualidade de dados e gestão de metadados. Integrar a conscientização sobre gestão de dados aos processos de integração e treinamento. Iniciar o monitoramento de indicadores básicos de treinamento e conscientização sobre governança de dados.',
      },
      {
        title: 'Nível 4: Gerenciado – Medido e Preditivo',
        content:
          'Além das melhorias dos níveis anteriores, neste estágio as práticas com dados são avaliadas com base em indicadores de desempenho definidos (incluindo indicadores de treinamento e conscientização), garantindo consistência, previsibilidade e alinhamento com os objetivos organizacionais.',
        people:
          'As equipes monitoram seu próprio progresso usando métricas de desempenho. Clareza de papéis, confiança e colaboração são avaliadas e aprimoradas continuamente. O impacto e a eficácia dos treinamentos e ações de conscientização sobre dados e letramento em dados são monitorados proativamente.',
        policies:
          'As estruturas de responsabilização são revisadas e aprimoradas com base em dados. As políticas apoiam a colaboração interdisciplinar e o desenvolvimento da força de trabalho.',
        capabilities:
          'As práticas de comunicação são totalmente integradas e alinhadas às métricas de governança. O patrocínio sustenta o engajamento de longo prazo.',
        improvement:
          'Medir a eficácia da confiança e colaboração por meio de ciclos de feedback. Alinhar os treinamentos às necessidades evolutivas de competências da equipe. Revisar regularmente as práticas de gestão de dados. Aprimorar painéis de comunicação entre áreas.',
      },
      {
        title: 'Nível 5: Otimizado – Inovação e Melhoria Contínua',
        content:
          'Além das melhorias dos níveis anteriores, neste estágio a organização trata os dados como um ativo estratégico, promovendo inovação, aprendizado contínuo e transformação cultural por meio de práticas avançadas de governança e comunicação. A cultura de governança de dados é disseminada, com programas de letramento em dados mensurando o impacto na maturidade de uso por parte das equipes. Nesse patamar, a organização explora e implementa o potencial da Inteligência Artificial e Machine Learning, quando necessário, para automatizar e otimizar a organização, a curadoria e a análise de dados, elevando a eficiência e a capacidade de extrair valor dos dados.',
        people:
          'As equipes impulsionam ativamente a inovação por meio de abordagens diversas e interdisciplinares. As competências da força de trabalho evoluem com aprendizado contínuo em programas de letramento. Uma cultura de confiança, comunicação aberta e tomada de decisão orientada por dados está profundamente enraizada. A alta gestão apoia efetivamente a cultura de dados, integrando ativamente as discussões e decisões estratégicas de dados.',
        policies:
          'Políticas dinâmicas e adaptativas sustentam a responsabilidade, o patrocínio e a resposta ágil às mudanças.',
        capabilities:
          'Sistemas avançados de comunicação e plataformas de capacitação, incluindo canais abertos e transparentes de compartilhamento de dados a toda a empresa, fomentam a inovação na gestão de dados e a sinergia entre as equipes. A organização adota e alavanca tecnologias de Inteligência Artificial e Machine Learning, quando necessário, para otimizar os processos, a qualidade e a descoberta de dados.',
        improvement:
          'Lançar laboratórios de inovação para explorar e aprimorar práticas com dados, incluindo a pesquisa e implementação de soluções de Inteligência Artificial e Machine Learning, quando necessário, para automação e otimização da governança e organização de dados. Estabelecer parcerias com organizações externas para desenvolver práticas em dados. Atualizar continuamente os referenciais de competências e os protocolos de responsabilização.',
      },
    ],
  },
];

const Dimensions = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLevel, setActiveLevel] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <header className="main-header">
        <h1>Dimensões do DG2M</h1>
        <p>
          Para avaliar os níveis de maturidade, foram desenvolvidas seis dimensões as quais estão disponíveis abaixo.
        </p>
      </header>

      <div className="dimensions-wrapper">
        <button className="hamburger" onClick={toggleMenu}>
          ☰ Dimensões
        </button>

        <nav className={`sidebar ${menuOpen ? 'open' : 'closed'}`}>
          <ul className="nav-links1">
            <li><Link to="/strategy">Estratégia e Governança de Dados</Link></li>
            <li>
              <NavLink to="/people" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Cultura, Pessoas e Estrutura Organizacional
              </NavLink>
            </li>
            <li><Link to="/formalization">Formalização e Processos de Gestão de Dados</Link></li>
            <li><Link to="/quality">Qualidade dos Dados</Link></li>
            <li><Link to="/infrastructure">Infraestrutura para Dados</Link></li>
            <li><Link to="/open">Dados Abertos</Link></li>
          </ul>
        </nav>

        <main className="dimension-content">
          {(
            <>
              {dimensions.map((dim) => (
                <section key={dim.id}>
                  <h2>{dim.title}</h2>
                  <p>{dim.description}</p>

                  <p><strong>Aspectos principais avaliados:</strong></p>
                  <ul>
                    <li><strong>Pessoas:</strong> {dim.people}</li>
                    <li><strong>Políticas:</strong> {dim.policies}</li>
                    <li><strong>Capacidades:</strong> {dim.capabilities}</li>
                  </ul>

                  <div className="level-selector">
                    {dim.levels.map((level, index) => (
                      <button
                        key={index}
                        className={index === activeLevel ? 'selected' : ''}
                        onClick={() => setActiveLevel(index)}
                      >
                        {`Nível ${index}`}
                      </button>
                    ))}
                  </div>

                  <div className="level-detail">
                    <h4>{dim.levels[activeLevel].title}</h4>
                    <p>{dim.levels[activeLevel].content}</p>
                    <ul>
                      <li><strong>Pessoas:</strong> {dim.levels[activeLevel].people}</li>
                      <li><strong>Políticas:</strong> {dim.levels[activeLevel].policies}</li>
                      <li><strong>Capacidades:</strong> {dim.levels[activeLevel].capabilities}</li>
                    </ul>
                    <p><strong>Melhorias e práticas recorrentes para o nível:</strong> {dim.levels[activeLevel].improvement}</p>
                  </div>
                </section>
              ))}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dimensions;
