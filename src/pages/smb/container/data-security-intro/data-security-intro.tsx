import React, { Fragment, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import FitbitIcon from '@mui/icons-material/Fitbit';

import VideoComponent from '../../../../components/common/video/video.component';
import heroImage from '../../../../assets/images/data_security_dei_shield.svg';
import './data-security-intro.scss';
import { VIMEO_VIDEOIDS } from '../../../../constants/vimeo-videoids';

const DataSecurityIntro: React.FC<any> = (props: any): ReactElement => {
  const history = useHistory();
  const routeChange = () => {
    history.push('data-security');
  };

  return (
    <section
      className="data-security-intro"
      id="data-security-intro"
      ref={props.inputRef}
    >
      <div className="hero-content">
        <div className="hero-title">
          <Fragment>
            <h1>
              Data Sentinels<sup>™️</sup>
              <VideoComponent
                videoId={VIMEO_VIDEOIDS.DATA_SENTINELS_VIDEO_ID}
              />
            </h1>
          </Fragment>
          <div className="hero-mobile-image">
            <img src={heroImage} alt="Data Security mobile" />
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <span className="feature-icon"></span>
              <h3>Dark Web Sentry:</h3>
              <p>
                <b>The DEI®️ Dark Web Monitors </b> stand guard to detect and
                notify you of compromised credentials so you can take proactive
                measures in protecting your data.
              </p>
            </div>
            <div className="features">
              <span className="feature-icon"></span>
              <h3>Email Sentry:</h3>
              <p>
                <b>The DEI®️ Email Hunters.</b> You will be the first to know if
                a potentially malicious email gets lucky enough to slip through
                our world-class integrated email security solution.
              </p>
            </div>
          </div>
        </div>

        <div className="button-container">
          <button
            type="button"
            className={`btn-data-security`}
            onClick={routeChange}
          >
            Get a Quote
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Data Security" />
      </div>
    </section>
  );
};

export default DataSecurityIntro;
