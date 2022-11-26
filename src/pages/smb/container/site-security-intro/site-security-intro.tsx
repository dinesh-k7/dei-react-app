import React, { Fragment, ReactElement } from 'react';
import LaunchIcon from '@material-ui/icons/Launch';
import FitbitIcon from '@mui/icons-material/Fitbit';

import VideoComponent from '../../../../components/common/video/video.component';
import heroImage from '../../../../assets/images/website_security.svg';
import './site-security-intro.scss';
import { VIMEO_VIDEOIDS } from '../../../../constants/vimeo-videoids';

const SiteSecurityIntro: React.FC<any> = (props: any): ReactElement => {
  return (
    <section
      className="site-security-intro"
      id="site-security-intro"
      ref={props.inputRef}
    >
      <div className="hero-image">
        <img src={heroImage} alt="Data Security" />
      </div>
      <div className="hero-content">
        <div className="hero-title">
          <Fragment>
            <h1>
              Site Sentinels<sup>™️</sup>
              <VideoComponent
                videoId={VIMEO_VIDEOIDS.SITE_SENTINELS_VIDEO_ID}
              />
            </h1>
          </Fragment>
          <div className="hero-mobile-image">
            <img src={heroImage} alt="Site Security" />
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <span className="site-feature-icon"></span>
              <h3 className="feature-title">
                <a
                  href="https://www.deiportal.com/products/website-security"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  Website Sentry
                </a>
              </h3>
              <a
                href="https://www.deiportal.com/products/website-security"
                target={'_blank'}
                rel="noreferrer"
              >
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
              DEI® comprehensive and simplified security solution to protect
              your site and keep customers safe. Daily malware scans and
              guaranteed malware removal.
            </p>
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <span className="site-feature-icon"></span>
              <h3 className="feature-title">
                <a
                  href="https://www.deiportal.com/products/ssl"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  DEI®️ Certified SSL
                </a>
              </h3>
              <a
                href="https://www.deiportal.com/products/ssl"
                target={'_blank'}
                rel="noreferrer"
              >
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
              DEI® Certified SSL certificates are used to secure everything from
              credit card transactions to logins and are the backbone used to
              create a secure communication between two devices.
            </p>
          </div>

          <div className="hero-subtitle-container">
            <div className="features">
              <span className="site-feature-icon"></span>
              <h3 className="feature-title">
                <a
                  href="https://www.deiportal.com/products/website-backup"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  DEI®️ Backup
                </a>
              </h3>
              <a
                href="https://www.deiportal.com/products/website-backup"
                target={'_blank'}
                rel="noreferrer"
              >
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
              Securely backing up your data is one of the most important pieces
              of any cybersecurity strategy.
            </p>
          </div>

          <div className="hero-subtitle-container">
            <div className="features">
              <span className="site-feature-icon"></span>
              <h3 className="feature-title">
                <a
                  href="https://novusordoseclorum.org/newsletter/"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  Order of the Ages Newsletter
                </a>
              </h3>
              <a
                href="https://novusordoseclorum.org/newsletter/"
                target={'_blank'}
                rel="noreferrer"
              >
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
            <p>Stay current with the latest security trends.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteSecurityIntro;
