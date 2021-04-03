import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import heroImage from '../../../../assets/images/consultation-service.svg';
import '../../../../assets/scss/styles.scss';
import yellowBlob from '../../../../assets/images/yellow-blob.svg';
import heroMobileImage from '../../../../assets/images/consultation_mobile.svg';

import './startup-kit-intro.scss';

const StartupKitIntro: React.FC<any> = ({ inputRef }: any): ReactElement => {
  const history = useHistory();

  const routeChange = () => {
    history.push('startup-kit');
  };

  return (
    <section className="startup-kit-intro" ref={inputRef}>
      <div className="hero-image">
        <img src={heroImage} alt="consultation Image" />
        {/* <div className="startup-central-features">
          <p>DEI™ Essentials:</p>
          <ul>
            <li>Comprehensive Trademark screening $599.00</li>
            <li>
              {' '}
              Start-up Package A Branding and trademarking of the brand.
              $1099.00. Comprehensive Screening report included
            </li>
            <li>Copyright registration $149.00 + Fed. filing fee</li>
            <li>REGISTRATION OF ENTITIES llc formations $1500 (COMING SOON)</li>
          </ul>
          <span>
            Garuanteed registration d or your money back excluding the
            registration
          </span>
        </div> */}
      </div>
      <div className="hero-content">
        <div className="hero-title">
          <h1>Start-Up Kit</h1>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={yellowBlob} alt="trademark" />
              <h3>Trademark</h3>
            </div>
            <div className="features">
              <img src={yellowBlob} alt="copyright" />
              <h3>Copyright</h3>
            </div>
            <div className="features">
              <img src={yellowBlob} alt="patent" />
              <h3>Patent</h3>
            </div>
          </div>
        </div>
        <div className="hero-mobile-image">
          <img src={heroMobileImage} alt="consultation Image" />
        </div>
        <div className="hero-description">
          <p>
            Manifest Digital Destiny! <br /> Building a better tomorrow starts
            with you!
          </p>
        </div>
        <div className="button-container">
          <button
            type="button"
            className={`btn-branding`}
            onClick={() => routeChange()}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartupKitIntro;
