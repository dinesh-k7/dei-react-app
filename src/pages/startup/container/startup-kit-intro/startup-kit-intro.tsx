import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import heroImage from '../../../../assets/images/consultation-service.svg';
import '../../../../assets/scss/styles.scss';
import yellowBlob from '../../../../assets/images/yellow-blob.svg';
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
        <img src={heroImage} alt="consultation Image" />
      </div>
      <div className="hero-content">
        <div className="hero-title">
          <h1>Start-Up Kit</h1>
          <div className="hero-mobile-image">
            <img src={heroMobileImage} alt="consultation Image" />
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={yellowBlob} alt="trademark" />
              <h3>Intellectual Property</h3>
            </div>
            <div className="features">
              <img src={yellowBlob} alt="copyright" />
              <h3>Premium PWA&apos;s</h3>
            </div>
            <div className="features">
              <img src={yellowBlob} alt="patent" />
              <h3>Business Plans & Branding</h3>
            </div>
          </div>
        </div>

        <div className="hero-description">
          <p>
            Building a better tomorrow starts with you, manifest digital
            destiny!
          </p>
          <ul>
            <li>Business plan and Branding</li>
            <li>Composite Trademark Registration</li>
            <li>Premium Progressive Web Application</li>
          </ul>
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
