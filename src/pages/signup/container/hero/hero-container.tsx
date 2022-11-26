import React, { ReactElement } from 'react';

import VideoComponent from '../../../../components/common/video/video.component';
import '../../../../assets/scss/styles.scss';
import climate_push_logo from '../../../../assets/images/climate_push_logo.svg';
import active_ego_logo from '../../../../assets/images/active_ego_logo.png';
import brand_logo from '../../../../assets/images/brand_logo.png';
import './hero-container.scss';
import { VIMEO_VIDEOIDS } from '../../../../constants/vimeo-videoids';

const HeroContainer: React.FC<any> = ({ type }: any): ReactElement => {
  return (
    <section className="hero-section signup-form">
      <div className="hero-content">
        {type === 'business' ? (
          <img
            className="climate_push_logo"
            src={climate_push_logo}
            alt={`Climate push logo`}
          />
        ) : (
          ''
        )}
        {type === 'active-ego' ? (
          <img
            className="active_ego_logo"
            src={active_ego_logo}
            alt={`Active Ego logo`}
          />
        ) : (
          ''
        )}

        {type === 'freelancer' ? (
          <img
            className="brand_logo"
            src={brand_logo}
            alt={`Freelancer logo`}
          />
        ) : (
          ''
        )}

        {type === 'nwo' ? (
          <img
            className="nwo_logo"
            src={active_ego_logo}
            alt={`New world order`}
          />
        ) : (
          ''
        )}
        {type === 'personal' ? (
          <img
            className="climate_push_logo"
            src={climate_push_logo}
            alt={`Climate push personal logo`}
          />
        ) : (
          ''
        )}
        <div className="hero-title">
          {type === 'active-ego' ? (
            <h1>
              Schedule your DEI®️ DAO/dApp Consultation today!{' '}
              <VideoComponent
                videoId={VIMEO_VIDEOIDS.ACTIVE_EGO_REGISTRATION_VIDEO_ID}
              />
            </h1>
          ) : (
            ''
          )}
          {type === 'nwo' ? (
            <h3>
              Pledge a commitment to transparency and to use your resources for
              the good of humanity. Register your business with The New World
              Order™️
            </h3>
          ) : (
            ''
          )}

          {type === 'freelancer' ? <h1>Freelancer registration</h1> : ''}

          {type === 'dao' ? (
            <h3>
              Register your DAO/dApp with The New World Order™️ Pledge a commitment
              to transparency and to use your resources for the good of
              humanity.
            </h3>
          ) : (
            ''
          )}

          {type === 'dao-consultation' ? (
            <h3>Schedule your DEI®️ DAO/dApp Consultation today!</h3>
          ) : (
            ''
          )}

          {type === 'business' ? (
            <h1>
              Business Registration{' '}
              <VideoComponent
                videoId={VIMEO_VIDEOIDS.CLIMATE_PUSH_REGISTRATION_VIDEO_ID}
              />
            </h1>
          ) : (
            ''
          )}
          {type === 'personal' ? <h1>Personal Registration</h1> : ''}
          {!type ? <h1>Sign Up</h1> : ''}
        </div>
      </div>
      {type === 'freelancer' ? (
        <div className="hero-description">
          <p>
            The DEI® certified freelancer demonstrates proper data hygiene
            practices. We are the first organisation to provide such a
            certification across the world for freelancers, who are cyber secure
            and DEI® certified to build their brands.
          </p>
          <p>
            Certifying with the DEI® is an easy way to let employers know you're
            safe to hire. You'll gain a reputation for cyber security and data
            heigene by building your brand along with your unique skillset.
          </p>
          <p>
            DEI® Certified Freelancers can help win the war against cyber
            criminals. Demonstrate your capability to employers and build your
            brand with the DEI®. Sign up today and learn more!
          </p>
          <p>"Secure your brand's future and become DEI® certified."</p>
        </div>
      ) : (
        ''
      )}
    </section>
  );
};

export default HeroContainer;
