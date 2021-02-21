import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import heroImage from '../../../../assets/images/consultation-service.svg';
import '../../../../assets/scss/styles.scss';
import yellowBlob from '../../../../assets/images/yellow-blob.svg';
import heroMobileImage from '../../../../assets/images/consultation_mobile.svg';

import './consultation-intro.scss';

const ConsultationIntro: React.FC = (): ReactElement => {
  const history = useHistory();

  const routeChange = () => {
    history.push('consultation');
  };

  return (
    <section className="consultation-intro">
      <div className="hero-content">
        <div className="hero-title">
          <h1>Start-up Consultation</h1>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={yellowBlob} alt="trademark" />
              <h3>Trademark</h3>
            </div>
            <div className="features">
              <img src={yellowBlob} alt="copyright" />
              <h3>Copyright</h3>
            </div>
            <div className="features">
              <img src={yellowBlob} alt="patent" />
              <h3>Patent</h3>
            </div>
          </div>
        </div>
        <div className="hero-mobile-image">
          <img src={heroMobileImage} alt="consultation Image" />
        </div>
        <div className="hero-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>
        <div className="button-container">
          <button
            type="button"
            className={`btn-branding`}
            onClick={() => routeChange()}
          >
            Get Quote
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="consultation Image" />
      </div>
    </section>
  );
};

export default ConsultationIntro;
