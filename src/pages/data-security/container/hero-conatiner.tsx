import React, { ReactElement } from 'react';

import heroImage from '../../../assets/images/data-security.svg';
import '../../../assets/scss/styles.scss';
import './hero-container.scss';

const HeroContainer: React.FC = (): ReactElement => {
  return (
    <section className="ds-hero-section">
      <div className="ds-hero-content">
        <div className="ds-title">
          <h1>Data Security</h1>
          <div>
            <h3>
              <span className="blue-circle"></span> Dark Web Monitoring
            </h3>
            <h3>What is Dark Web Monitoring?</h3>
          </div>
        </div>
        <div className="ds-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <div className="ds-description-two">
            <h3>What we offer</h3>
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
