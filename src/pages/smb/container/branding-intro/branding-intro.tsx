import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import heroImage from '../../../../assets/images/branding.svg';
import heroMobileImage from '../../../../assets/images/branding_mobile.svg';
import '../../../../assets/scss/styles.scss';
import serviceCoral from '../../../../assets/images/service_coral.svg';

import './branding-intro.scss';

const BrandingIntro: React.FC = (): ReactElement => {
  const history = useHistory();

  const routeChange = () => {
    history.push('branding');
  };

  return (
    <section className="branding-intro">
      <div className="hero-image">
        <img src={heroImage} alt="Branding Image" />
      </div>
      <div className="hero-content">
        <div className="hero-title">
          <h1>Branding</h1>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceCoral} alt="Background image" />
              <h3>Graphic design</h3>
            </div>
            <div className="features">
              <img src={serviceCoral} alt="Background image" />
              <h3>Logo design</h3>
            </div>
          </div>
        </div>
        <div className="hero-mobile-image">
          <img src={heroMobileImage} alt="Branding Image" />
        </div>
        <div className="hero-description">
          <p>Enhance Your Brand&apos;s Identity with a Stunning Logo!</p>
        </div>
        <div className="button-container">
          <button
            type="button"
            className={`btn-branding`}
            onClick={routeChange}
          >
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandingIntro;
