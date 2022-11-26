import React, { ReactElement } from 'react';

import VideoComponent from '../../../../components/common/video/video.component';
import { VIMEO_VIDEOIDS } from '../../../../constants/vimeo-videoids';
import '../../../../assets/scss/styles.scss';
import './hero-container.scss';

const HeroContainer: React.FC<any> = (): ReactElement => {
  return (
    <section className="hero-section reconnect-form">
      <div className="hero-content">
        <div className="hero-title">
          <h1>
            Re-Connect{' '}
            <VideoComponent
              videoId={VIMEO_VIDEOIDS.RECONNECT_REGISTRATION_VIDEO_ID}
            />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
