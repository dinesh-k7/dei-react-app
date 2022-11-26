import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import FitbitIcon from '@mui/icons-material/Fitbit';

import heroImage from '../../../../assets/images/website_service.svg';
import heroMobileImage from '../../../../assets/images/wd_mobile.svg';

import './develop-intro.scss';

const DevelopIntro: React.FC<any> = (props: any): ReactElement => {
  const history = useHistory();
  const { fromPage } = props;

  const routeChange = () => {
    history.push('develop');
  };

  return (
    <section className="develop-intro" ref={props.inputRef}>
      <div className="hero-content">
        <div className="hero-title">
          {fromPage === 'smb' ? <h1>Develop</h1> : <h1>Website development</h1>}
          <div className="hero-mobile-image">
            <img src={heroMobileImage} alt="Webiste development vector" />
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <FitbitIcon fontSize="large" className="fitbit-icon" />
              <h3 className="feature-title">
                <span>Branding</span>
              </h3>

              <p>
                The DEI®️ custom branding is specific to your industry.
                Customized to reflect your one-of-a-kind idea.
              </p>
            </div>
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <FitbitIcon fontSize="large" className="fitbit-icon" />
              <h3 className="feature-title">
                <span>Website Development</span>
              </h3>
            </div>
            <p>
              Start today and build a stunning website in less than under an
              hour with the DEI®️ website Builder. Our WordPress Hosting
              provides automatic setup, backups, and software updates paired
              with 24/7, award-winning support. Get started in just a few
              clicks.
            </p>
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <FitbitIcon fontSize="large" className="fitbit-icon" />
              <h3 className="feature-title">
                <span>SEO</span>
              </h3>
            </div>
            <p>
              Fully functioning professional business/e-commerce/shopping cart.
            </p>
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <FitbitIcon fontSize="large" className="fitbit-icon" />
              <h3 className="feature-title">
                <span>Marketing</span>
              </h3>
            </div>
            <p></p>
          </div>
        </div>

        {fromPage === 'smb' || !fromPage ? (
          <div className="button-container">
            <button type="button" className={`btn-basic`} onClick={routeChange}>
              Custom Website
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Webiste development" />
      </div>
    </section>
  );
};

export default DevelopIntro;
