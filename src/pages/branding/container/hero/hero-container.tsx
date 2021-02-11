import React, { ReactElement } from 'react';

import heroImage from '../../../../assets/images/branding.svg';
import '../../../../assets/scss/styles.scss';
import './hero-container.scss';
import serviceCoral from '../../../../assets/images/service_coral.svg';

const HeroContainer: React.FC = (): ReactElement => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-title">
          <h1>Branding</h1>
          <div className="hero-subtitle-container">
            <img src={serviceCoral} alt="Background image" />
            <h3>Graphic design</h3>
            <img src={serviceCoral} alt="Background image" />
            <h3>Logo design</h3>
          </div>
          <h3>About:</h3>
        </div>
        <div className="hero-description">
          <p>
            Branding is an essential feature of any successful enterprise. The
            DEI™ custom-makes original, stunning, and high-quality logos that
            build credibility and that can enhance your brand&apos;s online
            presence. As you take the time to describe your brand&apos;s
            identity, be sure to list other brands that align with yours.
          </p>
          <div className="hero-description-two">
            <h3>What we offer:</h3>
            <p>
              Our team combines an extraordinary blend of talent and creativity
              to ensure your logo not only grabs relevant attention but also
              creates a memorable first impression that sets you apart from the
              pack. We don&apos;t just design; we produce thrilling visuals that
              foster excitement, inspire trust, and build brand loyalty.
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
