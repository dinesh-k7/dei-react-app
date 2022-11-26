import React, { ReactElement } from 'react';

import '../../../../assets/scss/styles.scss';
import './hero-container.scss';

const HeroContainer: React.FC<any> = (): ReactElement => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-title">
          <h1>Contributors, Unite!</h1>
        </div>
        <div className="hero-description">
          <p>
           Your contributions help build a better world for all. Thank you for contributing to our project.
            <br />
            <br />
            Your Donations are securely processed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
