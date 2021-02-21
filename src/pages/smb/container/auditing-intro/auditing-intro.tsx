import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import serviceGreen from '../../../../assets/images/audit_service_blob.svg';
import '../../../../assets/scss/styles.scss';
import heroImage from '../../../../assets/images/audit_service.svg';
import heroMobileImage from '../../../../assets/images/auditing_mobile.svg';

import './auditing-intro.scss';

const AuditingIntro: React.FC = (): ReactElement => {
  const history = useHistory();

  const routeChange = () => {
    history.push('branding');
  };

  return (
    <section className="auditing-intro">
      <div className="hero-content">
        <div className="hero-title">
          <h1>Auditing</h1>
          <div className="hero-subtitle-container">
            <img src={serviceGreen} alt="Background image" />
            <h3>Website auditing</h3>
          </div>
        </div>
        <div className="hero-mobile-image">
          <img src={heroMobileImage} alt="Auditing service" />
        </div>
        <div className="hero-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>
        <div className="button-container">
          <button type="button" className={`btn-branding`}>
            In Development
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Auditing service" />
      </div>
    </section>
  );
};

export default AuditingIntro;
