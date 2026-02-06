import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import '../pages/Main.css';

const DimensionPage = ({ dimensionId }) => {
  const { t, language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLevel, setActiveLevel] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Get the dimension data from translations
  const getDimension = () => {
    const dimensionsData = t('dimensionsData');

    // Map dimension IDs to the keys in the translations object
    const dimensionKeyMap = {
      'dataStrategy': 'strategy',
      'people': 'people',
      'formalization': 'formalization',
      'quality': 'quality',
      'infrastructure': 'infrastructure',
      'open': 'open'
    };

    const key = dimensionKeyMap[dimensionId];
    return dimensionsData?.[key];
  };

  const dimension = getDimension();

  if (!dimension) {
    return <div>Dimension not found</div>;
  }

  const navigationLinks = [
    { to: '/strategy', labelPt: 'Estratégia e Governança de Dados', labelEn: 'Data Strategy and Governance', id: 'dataStrategy' },
    { to: '/people', labelPt: 'Cultura, Pessoas e Estrutura Organizacional', labelEn: 'Culture, People and Organizational Structure', id: 'people' },
    { to: '/formalization', labelPt: 'Formalização e Processos de Gestão de Dados', labelEn: 'Formalization and Data Management Processes', id: 'formalization' },
    { to: '/quality', labelPt: 'Qualidade dos Dados', labelEn: 'Data Quality', id: 'quality' },
    { to: '/infrastructure', labelPt: 'Infraestrutura para Dados', labelEn: 'Data Infrastructure', id: 'infrastructure' },
    { to: '/open', labelPt: 'Dados Abertos', labelEn: 'Open Data', id: 'open' }
  ];

  return (
    <div>
      <header className="main-header">
        <h1>{t('dimensions.title')}</h1>
        <p>{t('dimensions.subtitle')}</p>
      </header>

      <div className="dimensions-wrapper">
        <button className="hamburger" onClick={toggleMenu}>
          ☰ {t('common.dimensions')}
        </button>

        <nav className={`sidebar ${menuOpen ? 'open' : 'closed'}`}>
          <ul className="nav-links1">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  {language === 'pt-BR' ? link.labelPt : link.labelEn}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <main className="dimension-content">
          <section>
            <h2>{dimension.title}</h2>
            <p>{dimension.description}</p>

            <p><strong>{t('common.mainAspects')}:</strong></p>
            <ul>
              <li><strong>{t('common.people')}:</strong> {dimension.people}</li>
              <li><strong>{t('common.policies')}:</strong> {dimension.policies}</li>
              <li><strong>{t('common.capabilities')}:</strong> {dimension.capabilities}</li>
            </ul>

            <div className="level-selector">
              {dimension.levels.map((level, index) => (
                <button
                  key={index}
                  className={index === activeLevel ? 'selected' : ''}
                  onClick={() => setActiveLevel(index)}
                >
                  {`${t('common.level')} ${index}`}
                </button>
              ))}
            </div>

            <div className="level-detail">
              <h4>{dimension.levels[activeLevel].title}</h4>
              <p>{dimension.levels[activeLevel].content}</p>
              <ul>
                <li><strong>{t('common.people')}:</strong> {dimension.levels[activeLevel].people}</li>
                <li><strong>{t('common.policies')}:</strong> {dimension.levels[activeLevel].policies}</li>
                <li><strong>{t('common.capabilities')}:</strong> {dimension.levels[activeLevel].capabilities}</li>
              </ul>
              <p><strong>{t('common.improvement')}:</strong> {dimension.levels[activeLevel].improvement}</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DimensionPage;
