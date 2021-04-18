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
                  Website Security Express
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
                <a href="https://www.nwohub.com/products/ssl">SSL</a>
              </h3>
              <a href="https://www.nwohub.com/products/ssl">
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

            <p>Lets visitors know that you&apos;ll keep their data safe.</p>
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3 className="feature-title">
                <a href="https://www.nwohub.com/products/ssl-managed">
                  Managed SSL with install
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
            <p>
              We handle the install and maintenance of your SSL - saving you
              time and energy.
            </p>
          </div>

          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3 className="feature-title">
                <a href="#">Phishing Hunters - Integrated Email Solutions</a>
              </h3>
              <a href="#">
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              odit consequatur consequuntur placeat minus, magnam eveniet
              repellat inventore explicabo delectus porro optio nulla, beatae
              quis facere neque praesentium. Asperiores, ea!
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
                    color: '#9c47ed',
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

          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3 className="feature-title">
                <a href="#">Subscription to Security Briefings</a>
              </h3>
              <a href="#">
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              quo repellat dolor quod quos quasi voluptatem non est voluptatibus
              quaerat reiciendis delectus enim ipsum, sapiente molestiae
              inventore dolorem earum expedita?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteSecurityIntro;
