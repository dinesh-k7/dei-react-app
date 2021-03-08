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
          <h1>Start-up Consultation</h1>

          <div className="packages">
            <img src={yellowBlob} alt="trademark" />
            <h3>Branding package and Intro to IP $999.00</h3>
          </div>

          <div className="packages">
            <img src={yellowBlob} alt="copyright" />
            <h3>Branding and Trademark/Servicemark $2500.00</h3>
          </div>
          <div className="packages">
            <img src={yellowBlob} alt="patent" />
            <h3>
              Branding, Trademark/ServiceMark and Mr. NWO Coaching $5000.00
            </h3>
          </div>
        </div>

        <div className="hero-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <h1>Professional Coaching</h1>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={yellowBlob} alt="trademark" />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>
      </div>
      <div className="hero-mobile-image">
        <img src={heroMobileImage} alt="consultation Image" />
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="consultation Image" />
      </div>
    </section>
  );
};

export default HeroContainer;
