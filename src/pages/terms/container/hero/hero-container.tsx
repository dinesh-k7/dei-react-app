import React, { ReactElement } from 'react';

import '../../../../assets/scss/styles.scss';
import './hero-container.scss';

const HeroContainer: React.FC<any> = (): ReactElement => {
  return (
    <section className="hero-section terms-page">
      <div className="hero-content">
        <div className="hero-title">
          <h1>Terms</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
