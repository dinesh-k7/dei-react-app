import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import VideoComponent from '../../../../components/common/video/video.component';
import { VIMEO_VIDEOIDS } from '../../../../constants/vimeo-videoids';
import '../../../../assets/scss/styles.scss';
import './hero-container.scss';

const HeroContainer: React.FC<any> = (): ReactElement => {
  const history = useHistory();
  const isQueryString =
    history.location.search.indexOf('package') > -1 ? true : false;
  const videoId = isQueryString
    ? VIMEO_VIDEOIDS.STARTUP_KIT_COACHING_VIDEO_ID
    : VIMEO_VIDEOIDS.STARTUP_KIT_VIDEO_ID;
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-title">
          <h1>
            Start-Up Kits 
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
