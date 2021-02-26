import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import serviceBlue from '../../../../assets/images/website_blob.svg';
import '../../../../assets/scss/styles.scss';
import heroImage from '../../../../assets/images/website_service.svg';
import heroMobileImage from '../../../../assets/images/wd_mobile.svg';

import './wd-intro.scss';

const WdIntro: React.FC<any> = (props: any): ReactElement => {
  const history = useHistory();

  const routeChange = () => {
    history.push('branding');
  };

  return (
    <section className="wd-intro" ref={props.inputRef}>
      <div className="hero-content">
        <div className="hero-title">
          <h1>Website development</h1>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3>UX/UI</h3>
            </div>
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3>Front-end</h3>
            </div>
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3>Back-end</h3>
            </div>
          </div>
        </div>
        <div className="hero-mobile-image">
          <img src={heroMobileImage} alt="Webiste development Image" />
        </div>
        <div className="hero-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>
        <div className="button-container">
          <button type="button" className={`btn-branding`}>
            In Development
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Webiste development Image" />
      </div>
    </section>
  );
};

export default WdIntro;
