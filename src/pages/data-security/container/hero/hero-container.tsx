import React, { ReactElement } from 'react';
import FitbitIcon from '@mui/icons-material/Fitbit';

import FadeIn from 'react-fade-in';

import heroImage from '../../../../assets/images/data_security_dei_shield.svg';
import '../../../../assets/scss/styles.scss';
import './hero-container.scss';
import VideoComponent from '../../../../components/common/video/video.component';
import { VIMEO_VIDEOIDS } from '../../../../constants/vimeo-videoids';

const HeroContainer: React.FC = (): ReactElement => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-title">
          <h1>
            Data Sentinels™️{' '}
            {<VideoComponent videoId={VIMEO_VIDEOIDS.DATA_SECURITY_VIDEO_ID} />}
          </h1>
          <div className="hero-mobile-image">
            <img src={heroImage} alt="Data Security mobile" />
          </div>
          <div className="hero-subtitle-container" style={{ display: 'grid' }}>
            <div className="features">
              <span className="bullet-icon"></span>
              <h3>Dark Web Monitoring Sentry</h3>
            </div>
            <div className="features">
              <span className="bullet-icon"></span>
              <h3>Integrated Email Security Sentry</h3>
            </div>
            <div className="features">
              <span className="bullet-icon"></span>
              <h3> Data Hygiene Training™</h3>
            </div>
          </div>
        </div>
        <div className="hero-description">
          <h3>Problem: The Dark Web</h3>
          <FadeIn>
            <p>
              No one is is currently governing the Dark Web, it’s where
              compromised credentials are traded and sold for profit. Any thing
              from online services to corporate network user names and
              passwords. These cyber-criminals quietly collect and index your
              data until it poses a direct threat to your business. 
            </p>
          </FadeIn>
        </div>
        <div className="hero-description-two">
          <h3>Solution: DEI® Data Sentinels™ </h3>
          <FadeIn>
            <p>
              The DEI® Data Security Essentials Stack includes the most
              validated credential exposure data on the market with top tier
              integrated email solutions at one convenient, low price. We
              provide you with essential updates and vital details to keep you
              in the know. With this powerful tool in your corner, you can
              proactively prevent problems before they become costly issues. 
            </p>
          </FadeIn>
        </div>
        <div className="hero-description-three">
          <h3>Included: </h3>
          <FadeIn>
            <p>Professional Phishing Defense and Data Hygiene Trainings</p>
          </FadeIn>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Data Security" />
      </div>
    </section>
  );
};

export default HeroContainer;
