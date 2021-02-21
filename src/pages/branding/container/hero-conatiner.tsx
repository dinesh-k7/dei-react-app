import React, { ReactElement } from 'react';

import heroImage from '../../../assets/images/branding.svg';
import '../../../assets/scss/styles.scss';
import './hero-container.scss';
import serviceCoral from '../../../assets/images/service_coral.svg';

const HeroContainer: React.FC = (): ReactElement => {
  return (
    <section className="hero-section">
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
          <h3>About Branding</h3>
        </div>
        <div className="hero-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            dignissimos quod sint iure labore dicta? Temporibus, porro. Placeat
            quia sed iure maiores eum saepe? Perferendis ea ratione minima
            corrupti dolorem?
          </p>
          <div className="hero-description-two">
            <h3>What we offer:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              accusamus aliquid illo obcaecati veritatis, in quia quidem enim
              cum blanditiis repellendus excepturi sed eveniet minima. Saepe
              quibusdam in dolores praesentium.
            </p>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Branding Image" />
      </div>
    </section>
  );
};

export default HeroContainer;
