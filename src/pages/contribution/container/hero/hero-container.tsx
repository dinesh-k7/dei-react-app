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
            Develop, Protect and Preserve the DIGNITY of humanity! Help preserve
            the identity of the human race! &quot;De Oppresso Liber&quot;, free
            the oppressed,contributors like you are the backbone of our mission:
            To Unite humanity with the common goal of solving the problems that
            threaten our species. Join by making a contribution today.
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
