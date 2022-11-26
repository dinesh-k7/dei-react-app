import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import FitbitIcon from '@mui/icons-material/Fitbit';

import heroImage from '../../../../assets/images/branding.svg';
import heroMobileImage from '../../../../assets/images/branding_mobile.svg';
import '../../../../assets/scss/styles.scss';

import './branding-intro.scss';

const BrandingIntro: React.FC<any> = (props: any): ReactElement => {
  const history = useHistory();

  const routeChange = () => {
    history.push('branding');
  };

  return (
    <section className="branding-intro" ref={props.inputRef}>
      <div className="hero-image">
        <img src={heroImage} alt="Branding" />
      </div>
      <div className="hero-content">
        <div className="hero-title">
          <h1>Branding</h1>
          <div className="hero-mobile-image">
            <img src={heroMobileImage} alt="Branding Mobile" />
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <FitbitIcon fontSize="large" className="fitbit-icon" />
              <h3>Graphic design</h3>
            </div>
            <div className="features">
              <FitbitIcon fontSize="large" className="fitbit-icon" />
              <h3>Logo design</h3>
            </div>
          </div>
        </div>

        <div className="hero-description">
          <p>Enhance Your Brand&apos;s Identity with a Stunning Logo!</p>
        </div>
        <div className="button-container">
          <button type="button" className={`btn-basic`} onClick={routeChange}>
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandingIntro;
