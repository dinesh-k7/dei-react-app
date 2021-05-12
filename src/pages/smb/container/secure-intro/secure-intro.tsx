import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import LaunchIcon from '@material-ui/icons/Launch';

import heroImage from '../../../../assets/images/website_security.svg';
import dsImage from '../../../../assets/images/data_security_dei_shield.svg';
import serviceBlue from '../../../../assets/images/service_blue.svg';
import '../site-security-intro/site-security-intro.scss';
import './secure-intro.scss';

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
          <p className="secure-description">
            <b>The DEI™ Sentinels Club includes a $100,000,000 USD warranty.</b>
          </p>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3 className="feature-title">Dark Web Sentry</h3>
              {!fromPage ? (
                <a href="https://www.nwohub.com/products/website-security">
                  <LaunchIcon
                    style={{
                      color: '#42b9f8',
                      fontSize: 34,
                      paddingTop: 12,
                      cursor: 'pointer',
                    }}
                  />
                </a>
              ) : (
                ''
              )}
            </div>
            <p>Keeping an eye on what matters</p>
          </div>

          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3 className="feature-title">Email Sentry</h3>
              {!fromPage ? (
                <a href="https://www.nwohub.com/products/website-security">
                  <LaunchIcon
                    style={{
                      color: '#42b9f8',
                      fontSize: 34,
                      paddingTop: 12,
                      cursor: 'pointer',
                    }}
                  />
                </a>
              ) : (
                ''
              )}
            </div>
            <p>Premium Security Integrations</p>
          </div>

          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3 className="feature-title">Website Sentry</h3>
              {!fromPage ? (
                <a href="https://www.nwohub.com/products/website-security">
                  <LaunchIcon
                    style={{
                      color: '#42b9f8',
                      fontSize: 34,
                      paddingTop: 12,
                      cursor: 'pointer',
                    }}
                  />
                </a>
              ) : (
                ''
              )}
            </div>
            <p>
              Scan your website to detect and remove malware. Removal Guaranteed
            </p>
          </div>

          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3 className="feature-title">DEI™ Certified SSL</h3>
              {!fromPage ? (
                <a href="https://www.nwohub.com/products/ssl">
                  <LaunchIcon
                    style={{
                      color: '#42b9f8',
                      fontSize: 34,
                      paddingTop: 12,
                      cursor: 'pointer',
                    }}
                  />
                </a>
              ) : (
                ''
              )}
            </div>

            <p>Server Support Unlimited</p>
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3 className="feature-title">DEI™ Backup</h3>
              {!fromPage ? (
                <a href="https://www.nwohub.com/products/ssl-managed">
                  <LaunchIcon
                    style={{
                      color: '#42b9f8',
                      fontSize: 34,
                      paddingTop: 12,
                      cursor: 'pointer',
                    }}
                  />
                </a>
              ) : (
                ''
              )}
            </div>
            <p>Worth Every Penny!</p>
          </div>

          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3 className="feature-title">Security Now Newsletter</h3>
              {!fromPage ? (
                <a href="https://www.nwohub.com/products/ssl-managed">
                  <LaunchIcon
                    style={{
                      color: '#42b9f8',
                      fontSize: 34,
                      paddingTop: 12,
                      cursor: 'pointer',
                    }}
                  />
                </a>
              ) : (
                ''
              )}
            </div>
          </div>

          <div className="hero-subtitle-container">
            <p>
              Keep your website data safe while you grow your business online.
              Automatic backups and one-click restore. Worth every penny!
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
