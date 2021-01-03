import React, { ReactElement } from 'react';

import heroImage from '../../../assets/images/data_security.svg';
import '../../../assets/scss/styles.scss';
import './hero-container.scss';
import serviceBlue from '../../../assets/images/service_blue.svg';

const HeroContainer: React.FC = (): ReactElement => {
  return (
    <section className="ds-hero-section">
      <div className="ds-hero-content">
        <div className="ds-title">
          <h1>Data Security</h1>
          <div className="hero-subtitle-container">
            <img src={serviceBlue} />
            <h3>Dark Web Monitoring</h3>
          </div>
          <h3>What is Dark Web Monitoring?</h3>
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
              Our experts monitor your domain to find out what data was leaked,
              how it was leaked, and protect you from cyber crimes by training
              your employees and equipping them with the necessary techniques to
              identify future data threats in time. Our goal is to protect you
              from the losses incurred from compromised confidential
              information.
            </p>
          </div>
        </div>
      </div>

      <div className="ds-image">
        <img src={heroImage} alt="Data Security Image" />
      </div>
    </section>
  );
};

export default HeroContainer;
