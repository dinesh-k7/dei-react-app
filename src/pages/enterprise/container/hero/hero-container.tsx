import React, { ReactElement } from 'react';

import '../../../../assets/scss/styles.scss';
import './hero-container.scss';
import heroImage from '../../../../assets/images/consultation-service.svg';

import yellowBlob from '../../../../assets/images/yellow-blob.svg';
import heroMobileImage from '../../../../assets/images/consultation_mobile.svg';

const HeroContainer: React.FC = (): ReactElement => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-title">
          <h1>Enterprise</h1>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={yellowBlob} alt="trademark" />
              <h3>Enterprise</h3>
            </div>
          </div>
        </div>
        {/* <div className="hero-mobile-image">
          <img src={heroMobileImage} alt="consultation Image" />
        </div> */}
        <div className="hero-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Enterprise Image" />
      </div>
    </section>
  );
};

export default HeroContainer;
