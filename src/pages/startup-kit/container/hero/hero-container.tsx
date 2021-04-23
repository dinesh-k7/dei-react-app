import React, { ReactElement } from 'react';

import '../../../../assets/scss/styles.scss';
import './hero-container.scss';
import heroImage from '../../../../assets/images/consultation-service.svg';

const HeroContainer: React.FC<any> = (props: any): ReactElement => {
  const { fromPage } = props;
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-title">
          <h1>Start-Up Kits</h1>
          {/* <div className="hero-mobile-image">
            <img src={heroMobileImage} alt="consultation Image" />
          </div> */}
          {/* <div className="consultation-text hide">
            <h4>How to prepare:</h4>
            <h4>Be able to:</h4>
            <ul>
              <li>Define your biggest weakness.</li>
              <li>Define obstacles preventing Implementation.</li>
              <li>Describe communications gap.</li>
              <li>commit to attend consult\ations sessions as scheduled</li>
            </ul>
            <h4>Expect:</h4>

            <ul>
              <li>A detailed discovery session.</li>
              <li>A well defined solution to your communications gap.</li>
              <li>A personal coaching session with Mr. NWO</li>
            </ul>
          </div> */}
        </div>
      </div>

      {/* <div className={fromPage ? 'hero-image startup-kit' : 'hero-image'}>
        <img src={heroImage} alt="consultation Image" />
      </div> */}
    </section>
  );
};

export default HeroContainer;
