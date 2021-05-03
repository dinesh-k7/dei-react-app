import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import LaunchIcon from '@material-ui/icons/Launch';

import heroImage from '../../../../assets/images/website_security.svg';
import dsImage from '../../../../assets/images/data_security_dei_shield.svg';
import serviceBlue from '../../../../assets/images/service_blue.svg';
import '../site-security-intro/site-security-intro.scss';

const SecureIntro: React.FC<any> = (props: any): ReactElement => {
  const history = useHistory();
  const { fromPage } = props;

  const routeChange = () => {
    history.push('secure');
  };

  return (
    <section
      className="site-security-intro"
      id="site-security-intro"
      ref={props.inputRef}
    >
      <div className="hero-image">
        <img src={fromPage ? dsImage : heroImage} alt="Data Security Image" />
      </div>
      <div className="hero-content">
        <div className="hero-title">
          {fromPage ? <h1>Secure</h1> : <h1>Site Sentinels™️</h1>}
          <div className="hero-mobile-image">
            <img
              src={fromPage ? dsImage : heroImage}
              alt="Site Security Image"
            />
          </div>
          <div className="hero-subtitle-container">
            <p>
              <b>
                The DEI™ Sentinels Club includes a $100,000,000 USD warranty.
              </b>
            </p>
          </div>
          <div className="button-container">
            <button
              type="button"
              className={`btn-data-security`}
              onClick={routeChange}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecureIntro;
