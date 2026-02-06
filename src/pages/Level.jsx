import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Main.css';

const Level = () => {
  const { t } = useLanguage();

  const maturityLevels = [
    t('levels.level0'),
    t('levels.level1'),
    t('levels.level2'),
    t('levels.level3'),
    t('levels.level4'),
    t('levels.level5')
  ];

  return (
    <div className="main-content">
      <header className="main-header">
        <h1>{t('levels.title')}</h1>
        <p>{t('levels.subtitle')}</p>
      </header>

      <div className="level-container">
        {maturityLevels.map((level, index) => (
          <section className="main-section" key={index}>
            <div className="level-box">
              <h2>{level.title}</h2>
              <p>{level.description}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Level;
