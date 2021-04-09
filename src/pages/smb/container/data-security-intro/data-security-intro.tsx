import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import heroImage from '../../../../assets/images/data_security_dei_shield.svg';
import heroMobileImage from '../../../../assets/images/ds_mobile.svg';
import serviceBlue from '../../../../assets/images/service_blue.svg';
import './data-security-intro.scss';

const DataSecurityIntro: React.FC<any> = (props: any): ReactElement => {
  const history = useHistory();

  const routeChange = () => {
    history.push('data-security');
  };

  return (
    <section
      className="data-security-intro"
      id="data-security-intro"
      ref={props.inputRef}
    >
      <div className="hero-content">
        <div className="hero-title">
          <h1>Data Sentinels™️</h1>
          <div className="hero-mobile-image">
            <img src={heroImage} alt="Data Security Image" />
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3>Dark Web Monitoring</h3>
            </div>
            <div className="features email-solution">
              <img src={serviceBlue} alt="Background image" />
              <h3>Email Solutions</h3>
            </div>
          </div>
        </div>

        <div className="hero-description">
          <p>
            Modern advancements have made world-class cybersecurity products
            affordable. The DEI™ Data Essentials stack combines dark web
            monitoring and gold standard integrated email solutions at a price
            that any business can afford, and every company should implement.
          </p>
        </div>
        <div className="button-container">
          <button
            type="button"
            className={`btn-data-security`}
            onClick={routeChange}
          >
            Get a Quote
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Data Security Image" />
      </div>
    </section>
  );
};

export default DataSecurityIntro;
