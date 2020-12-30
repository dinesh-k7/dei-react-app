import React, { ReactElement } from 'react';

import '../../../assets/scss/styles.scss';
import './hero-container.scss';
import dsTitle from '../../../assets/images/ds-title.svg';
import heroImage from '../../../assets/images/data-security.svg';

const HeroContainer: React.FC = (): ReactElement => {
  return (
    <section className="ds-hero-section">
      <div className="ds-hero-content">
        <div className="ds-title">
          <img src={dsTitle} />
          <p className="ds-feature">
            <span className="blue-circle"></span> Dark Web Monitoring
          </p>
          <p>What is Dark Web Monitoring?</p>
        </div>
        <div className="ds-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <div className="ds-description-two">
            <p>What we offer</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
          </div>
        </div>
      </div>

      <div className="ds-image">
        <img src={heroImage} alt="Data Security" />
      </div>
    </section>
  );
};

export default HeroContainer;
