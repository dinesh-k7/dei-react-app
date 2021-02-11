import React, { ReactElement } from 'react';

import heroImage from '../../../assets/images/data_security_dei_shield.svg';
import '../../../assets/scss/styles.scss';
import './hero-container.scss';
import serviceBlue from '../../../assets/images/service_blue.svg';

const HeroContainer: React.FC = (): ReactElement => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-title">
          <h1>Data Security</h1>
          <div className="hero-subtitle-container">
            <img src={serviceBlue} alt="Background image" />
            <h3>Dark Web Monitoring and Email Solutions.</h3>
          </div>
          <h3>The Dark Web Problem:</h3>
        </div>
        <div className="hero-description">
          <p>
            In the Dark Web, a compromised credential sells for ~$1-$8. They
            range from online services to corporate network user names and
            passwords. Whether it is blocks of 100,000&apos;s or 1, they are
            frequently purchased and pose a direct threat to your business.
          </p>
          <div className="hero-description-two">
            <h3>The DEI™ essentials stack: </h3>
            <p>
              The DEI™ data security essentials stack includes the most
              validated credential exposure data on the market with top tier
              integrated email solutions at one convenient, low price. We
              provide you with essential updates and vital details to keep you
              in the know. With this powerful tool in your corner, you can
              proactively prevent problems before they become issues.
            </p>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Data Security Image" />
      </div>
    </section>
  );
};

export default HeroContainer;
