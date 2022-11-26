import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import FitbitIcon from '@mui/icons-material/Fitbit';

import heroImage from '../../../../assets/images/consultation-service.svg';
import '../../../../assets/scss/styles.scss';
import heroMobileImage from '../../../../assets/images/consultation_mobile.svg';

import './startup-kit-intro.scss';

const StartupKitIntro: React.FC<any> = ({ inputRef }: any): ReactElement => {
  const history = useHistory();

  const routeChange = () => {
    history.push('startup-kit');
  };

  return (
    <section className="startup-kit-intro" ref={inputRef}>
      <div className="hero-image">
        <img src={heroImage} alt="startup kits vector" />
      </div>
      <div className="hero-content">
        <div className="hero-title">
          <h1>Start-Up Kits</h1>
          <div className="hero-mobile-image">
            <img src={heroMobileImage} alt="startup kits mobile vector" />
          </div>
          <div className="startup-hero-description">
            <p>Start right with DEI®️ Start-Up Kits.</p>
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <FitbitIcon fontSize="large" className="fitbit-icon" />
              <h3>Business Plans & Branding</h3>
            </div>
            <div className="features">
              <FitbitIcon fontSize="large" className="fitbit-icon" />
              <h3>Intellectual Property Assistance</h3>
            </div>
            <div className="features">
              <FitbitIcon fontSize="large" className="fitbit-icon" />
              <h3>Premium PWA&apos;s</h3>
            </div>
            <div className="features">
              <FitbitIcon fontSize="large" className="fitbit-icon" />
              <h3>DEI®️ - Business Certification</h3>
            </div>
            <div className="features">
              <FitbitIcon fontSize="large" className="fitbit-icon" />
              <h3>NWO - Freelancer Certification</h3>
            </div>
          </div>
        </div>

        <div className="button-container">
          <button
            type="button"
            className={`btn-basic`}
            onClick={() => routeChange()}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartupKitIntro;
