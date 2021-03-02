import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import serviceGreen from '../../../../assets/images/audit_service_blob.svg';
import '../../../../assets/scss/styles.scss';
import heroImage from '../../../../assets/images/audit_service.svg';
import heroMobileImage from '../../../../assets/images/auditing_mobile.svg';

import './nwo-intro.scss';

const NWOIntro: React.FC<any> = (props: any): ReactElement => {
  const history = useHistory();

  const routeChange = () => {
    history.push('branding');
  };

  return (
    <section className="auditing-intro" id="nwo-intro" ref={props.inputRef}>
      <div className="hero-content">
        <div className="hero-title">
          <h1>NWOhub™</h1>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceGreen} alt="Background image" />
              <h3>Domains</h3>
            </div>

            <div className="features">
              <img src={serviceGreen} alt="Background image" />
              <h3>Websites</h3>
            </div>
          </div>

          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceGreen} alt="Background image" />
              <h3>Hosting</h3>
            </div>

            <div className="features">
              <img src={serviceGreen} alt="Background image" />
              <h3>Email</h3>
            </div>
          </div>
        </div>
        <div className="hero-mobile-image">
          <img src={heroMobileImage} alt="Auditing service" />
        </div>
        <div className="hero-description">
          <p>
            All the help and resources you need to build your online business:
            Websites, Domains, Emails, Hosting, and Starter SEO, all in one
            place! Plus you get live customer service to guide you every step of
            the way. Customer service is strictly for NWOhub™ services.
          </p>
        </div>
        <div className="button-container">
          <button type="button" className={`btn-branding`}>
            <a href="https://www.nwohub.com" rel="noreferrer" target="_blank">
              Visit NWOhub.com{' '}
            </a>
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Auditing service" />
      </div>
    </section>
  );
};

export default NWOIntro;