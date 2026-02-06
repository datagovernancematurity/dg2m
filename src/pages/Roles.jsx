import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Main.css';

const Roles = () => {
  const { t } = useLanguage();

  return (
    <div className="main-page">
      <header className="main-header">
        <h1>{t('roles.title')}</h1>
        <p>{t('roles.subtitle')}</p>
      </header>

      <section className="main-section">
        <h2>{t('roles.overview')}</h2>
        <p>{t('roles.overviewContent')}</p>
      </section>

      <section className="main-section">
        <h2>{t('roles.strategy.title')}</h2>
        <p>{t('roles.strategy.executives')}</p>
        <p>{t('roles.strategy.cdo')}</p>
        <p>{t('roles.strategy.committees')}</p>
        <p>{t('roles.strategy.office')}</p>
      </section>

      <section className="main-section">
        <h2>{t('roles.management.title')}</h2>
        <p>{t('roles.management.stewards')}</p>
        <p>{t('roles.management.managers')}</p>
      </section>

      <section className="main-section">
        <h2>{t('roles.operations.title')}</h2>
        <p>{t('roles.operations.operators')}</p>
      </section>

      <section className="main-section">
        <h2>{t('roles.engineering.title')}</h2>
        <p>{t('roles.engineering.dataEngineers')}</p>
        <p>{t('roles.engineering.itSpecialists')}</p>
        <p>{t('roles.engineering.security')}</p>
      </section>

      <section className="main-section">
        <h2>{t('roles.analytics.title')}</h2>
        <p>{t('roles.analytics.consumers')}</p>
        <p>{t('roles.analytics.analysts')}</p>
      </section>

      <section className="main-section">
        <h2>{t('roles.compliance.title')}</h2>
        <p>{t('roles.compliance.dpo')}</p>
        <p>{t('roles.compliance.complianceSpecialists')}</p>
      </section>

      <section className="main-section">
        <h2>{t('roles.enablement.title')}</h2>
        <p>{t('roles.enablement.productManagers')}</p>
        <p>{t('roles.enablement.changeLeaders')}</p>
      </section>

      <section className="main-section">
        <h2>{t('roles.integration')}</h2>
        <p>{t('roles.integrationContent')}</p>
      </section>
    </div>
  );
};

export default Roles;
