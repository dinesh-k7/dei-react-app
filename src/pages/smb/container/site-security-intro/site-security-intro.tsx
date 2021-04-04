import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import LaunchIcon from '@material-ui/icons/Launch';

import heroImage from '../../../../assets/images/website_security.svg';
import serviceBlue from '../../../../assets/images/service_blue.svg';
import './site-security-intro.scss';

const SiteSecurityIntro: React.FC<any> = (props: any): ReactElement => {
  const history = useHistory();

  const routeChange = () => {
    history.push('data-security');
  };

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
          <h1>Site Security</h1>
          <div className="hero-mobile-image">
            <img src={heroImage} alt="Site Security Image" />
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3 className="feature-title">
                <a href="https://www.nwohub.com/products/website-security">
                  Scan and Remove
                </a>
              </h3>
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
            </div>
            <p>Daily malware scans and gauranteed malware removal.</p>
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3 className="feature-title">
                <a href="https://www.nwohub.com/products/ssl">SSL</a>
              </h3>
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
            </div>

            <p>Lets visitors know that you&apos;ll keep their data safe.</p>
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3 className="feature-title">
                <a href="https://www.nwohub.com/products/ssl-managed">
                  Managed SSL Service
                </a>
              </h3>
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
            </div>
            <p>
              We handle the install and maintenance of your SSL - saving you
              time and energy.
            </p>
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3 className="feature-title">
                <a href="https://www.nwohub.com/products/website-backup">
                  Website Backup
                </a>
              </h3>
              <a href="https://www.nwohub.com/products/website-backup">
                <LaunchIcon
                  style={{
                    color: '#42b9f8',
                    fontSize: 34,
                    paddingTop: 12,
                    cursor: 'pointer',
                  }}
                />
              </a>
            </div>
            <p>
              Keep your website data safe while you grow your business online.
              Automatic backups and one-click restore. Worth every penny!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteSecurityIntro;
