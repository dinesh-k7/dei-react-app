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
          <h1>Start-Up Kits</h1>
          <div className="consultation-text">
            <h4>How to prepare:</h4>
            <h4>Be able to:</h4>
            <ul>
              <li>Define your biggest weakness.</li>
              <li>Define obstacles preventing Implementation.</li>
              <li>Describe communications gap.</li>
              <li>commit to attend consultations sessions as scheduled</li>
            </ul>
            <h4>Expect:</h4>

            <ul>
              <li>A detailed discovery session.</li>
              <li>A well defined solution to your communications gap.</li>
              <li>A personal coaching session with Mr. NWO</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hero-mobile-image">
        <img src={heroMobileImage} alt="consultation Image" />
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="consultation Image" />
        <div className="startup-central-features">
          <p>Secure:</p>
          <ul>
            <li>
              Secure 1: $1249 &nbsp;&nbsp;&nbsp;&nbsp;
              <span>Screening and Registering of Trademark/Servicemark.</span>
            </li>
            <li>
              Secure 2: $1750 &nbsp;&nbsp;&nbsp;&nbsp;
              <span>Business Formation (Coming Soon)</span>
            </li>
          </ul>
          <p>Develop:</p>
          <ul>
            <li className="develop-feature">BPlanning.com</li>
            <li>Develop 1:</li>
            <li>
              Develop 2: $4999 &nbsp;&nbsp;&nbsp;&nbsp;
              <span>Branding and Custom Website/applications $3500</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
