import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import serviceYellow from '../../../../assets/images/seo_mark_blob.svg';
import '../../../../assets/scss/styles.scss';
import heroImage from '../../../../assets/images/seo_service.svg';
import heroMobileImage from '../../../../assets/images/seo_mobile.svg';

import './seo-intro.scss';

const SeoIntro: React.FC = (): ReactElement => {
  const history = useHistory();

  const routeChange = () => {
    history.push('branding');
  };

  return (
    <section className="seo-intro">
      <div className="hero-image">
        <img src={heroImage} alt="SEO Marketing Image" />
      </div>
      <div className="hero-content">
        <div className="hero-title">
          <h1>SEO & Marketing</h1>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceYellow} alt="Background image" />
              <h3>SEO</h3>
            </div>
            <div className="features">
              <img src={serviceYellow} alt="Background image" />
              <h3>Marketing</h3>
            </div>
            <div className="features">
              <img src={serviceYellow} alt="Background image" />
              <h3>New World Security</h3>
            </div>
          </div>
        </div>
        <div className="hero-mobile-image">
          <img src={heroMobileImage} alt="SEO Marketing Image" />
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
    </section>
  );
};

export default SeoIntro;
