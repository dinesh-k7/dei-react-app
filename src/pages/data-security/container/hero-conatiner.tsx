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
            <img src={serviceBlue} alt="Background image" />
            <h3>Dark Web Monitoring</h3>
          </div>
          <h3>What is Dark Web Monitoring?</h3>
        </div>
        <div className="ds-description">
          <p>
            Well, once your data is available there, the threat of a breach is
            imminent. <br />
            With our Dark Web Monitoring Sentinels™, we keep a close eye on
            whether your business data is for sale on the dark web.
          </p>
          <div className="ds-description-two">
            <h3>What we offer</h3>
            <p>
              Our Dark Web Monitoring Sentinels™ provide you with updates and
              details to keep you in the know. If pirates have exposed your
              business data, our sentinels will inform you. With this powerful
              tool in your corner, you can take immediate action and possibly
              avert any threat even before it emerges.
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
