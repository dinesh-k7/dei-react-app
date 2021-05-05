import React, { Fragment, ReactElement } from 'react';
import LaunchIcon from '@material-ui/icons/Launch';

import heroImage from '../../../../assets/images/website_security.svg';
import serviceBlue from '../../../../assets/images/website_blob.svg';
import './site-security-intro.scss';

const SiteSecurityIntro: React.FC<any> = (props: any): ReactElement => {
  return (
    <section
      className="site-security-intro"
      id="site-security-intro"
      ref={props.inputRef}
    >
      <div className="hero-image">
        <img src={heroImage} alt="Data Security Image" />
      </div>
      <div className="hero-content">
        <div className="hero-title">
          <Fragment>
            <h1>
              Site Sentinels<sup>™️</sup>
            </h1>
          </Fragment>
          <div className="hero-mobile-image">
            <img src={heroImage} alt="Site Security Image" />
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3 className="feature-title">
                <a href="https://www.nwohub.com/products/website-security">
                  Website Sentry
                </a>
              </h3>
              <a href="https://www.nwohub.com/products/website-security">
                <LaunchIcon
                  style={{
                    color: '#9c47ed',
                    fontSize: 34,
                    paddingTop: 12,
                    cursor: 'pointer',
                  }}
                />
              </a>
            </div>
            <p>Daily malware scans and gauranteed malware removal.</p>
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3 className="feature-title">
                <a href="https://www.nwohub.com/products/ssl-managed">
                  DEI™ Certified SSL
                </a>
              </h3>
              <a href="https://www.nwohub.com/products/ssl-managed">
                <LaunchIcon
                  style={{
                    color: '#9c47ed',
                    fontSize: 34,
                    paddingTop: 12,
                    cursor: 'pointer',
                  }}
                />
              </a>
            </div>

            <p>Server Support Unlimited</p>
          </div>

          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3 className="feature-title">
                <a href="https://www.nwohub.com/products/website-backup">
                  DEI™ Backup
                </a>
              </h3>
              <a href="https://www.nwohub.com/products/website-backup">
                <LaunchIcon
                  style={{
                    color: '#9c47ed',
                    fontSize: 34,
                    paddingTop: 12,
                    cursor: 'pointer',
                  }}
                />
              </a>
            </div>
            <p>Worth Every Penny!</p>
          </div>

          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3 className="feature-title">
                <a href="https://novusordoseclorum.org/newsletter/ ">
                  Security Now Newsletter
                </a>
              </h3>
              <a href="https://novusordoseclorum.org/newsletter/ ">
                <LaunchIcon
                  style={{
                    color: '#9c47ed',
                    fontSize: 34,
                    paddingTop: 12,
                    cursor: 'pointer',
                  }}
                />
              </a>
            </div>
            <p>Keep up to date on the latest security trends.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteSecurityIntro;
