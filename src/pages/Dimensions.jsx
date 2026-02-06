import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Main.css';

const Dimensions = () => {
  const { t, language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navigationLinks = [
    { to: '/strategy', labelPt: 'Estratégia e Governança de Dados', labelEn: 'Data Strategy and Governance' },
    { to: '/people', labelPt: 'Cultura, Pessoas e Estrutura Organizacional', labelEn: 'Culture, People and Organizational Structure' },
    { to: '/formalization', labelPt: 'Formalização e Processos de Gestão de Dados', labelEn: 'Formalization and Data Management Processes' },
    { to: '/quality', labelPt: 'Qualidade dos Dados', labelEn: 'Data Quality' },
    { to: '/infrastructure', labelPt: 'Infraestrutura para Dados', labelEn: 'Data Infrastructure' },
    { to: '/open', labelPt: 'Dados Abertos', labelEn: 'Open Data' }
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
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.to}>
                  {language === 'pt-BR' ? link.labelPt : link.labelEn}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <main className="dimension-content">
          <h2>{t('common.choose')}</h2>
        </main>
      </div>
    </div>
  );
};

export default Dimensions;
