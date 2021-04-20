import React, { ReactElement } from 'react';
import LaunchIcon from '@material-ui/icons/Launch';

import serviceGreen from '../../../../assets/images/audit_service_blob.svg';
import '../../../../assets/scss/styles.scss';
import heroImage from '../../../../assets/images/audit_service.svg';

import './nwo-intro.scss';

const NWOIntro: React.FC<any> = (props: any): ReactElement => {
  return (
    <section className="auditing-intro" id="nwo-intro" ref={props.inputRef}>
      <div className="hero-content">
        <div className="hero-title">
          <h1>NWOhub™</h1>
          <div className="hero-mobile-image">
            <img
              src={heroImage}
              alt="Auditing service"
              width={296}
              height={200}
            />
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceGreen} alt="Background image" />
              <h3>Buy a Domain</h3>
              <a href="https://www.nwohub.com/">
                <LaunchIcon
                  style={{
                    color: '#49e69a',
                    fontSize: 34,
                    paddingTop: 12,
                    cursor: 'pointer',
                  }}
                />
              </a>
            </div>
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceGreen} alt="Background image" />
              <h3>Create a Website</h3>
              <a href="https://www.nwohub.com/products/wordpress">
                <LaunchIcon
                  style={{
                    color: '#49e69a',
                    fontSize: 34,
                    paddingTop: 12,
                    cursor: 'pointer',
                  }}
                />
              </a>
            </div>
          </div>

          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceGreen} alt="Background image" />
              <h3>Host a Website</h3>
              <a href="https://www.nwohub.com/products/business">
                <LaunchIcon
                  style={{
                    color: '#49e69a',
                    fontSize: 34,
                    paddingTop: 12,
                    cursor: 'pointer',
                  }}
                />
              </a>
            </div>
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceGreen} alt="Background image" />
              <h3>Create a business email</h3>
              <a href="https://www.nwohub.com/products/email">
                <LaunchIcon
                  style={{
                    color: '#49e69a',
                    fontSize: 34,
                    paddingTop: 12,
                    cursor: 'pointer',
                  }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-description">
          <p>
            All the help and resources you need to build your online business:
            Websites, Domains, Emails, Hosting, and Starter SEO, all in one
            place! Plus you get live *customer service to guide you every step
            of the way.
            <span>*Customer service is strictly for NWOhub™ services. </span>
          </p>
        </div>
        <div className="button-container">
          <button type="button" className={`btn-basic`}>
            <a href="https://www.nwohub.com" rel="noreferrer" target="_blank">
              Visit NWOhub.com{' '}
            </a>
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Auditing service" width={450} height={450} />
      </div>
    </section>
  );
};

export default NWOIntro;
