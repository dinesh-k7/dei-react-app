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
          <h1>Start-Up Central</h1>

          <div className="packages">
            <img src={yellowBlob} alt="trademark" />
            <h3>Comprehensive Trademark screening report - $499.00</h3>
          </div>

          <div className="packages">
            <img src={yellowBlob} alt="trademark" />
            <h3>
              Start-up Package A - Branding & Trademark registration - $1099.00
            </h3>
          </div>
          <div className="packages">
            <img src={yellowBlob} alt="copyright" />
            <h3>Copyright registration $149.00 + Federal Filing fee</h3>
          </div>
          <div className="packages">
            <img src={yellowBlob} alt="business formation" />
            <h3>Business formations, llc - $1500.00 coming soon</h3>
          </div>
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
