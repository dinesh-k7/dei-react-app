import React, { ReactElement } from 'react';
import LaunchIcon from '@material-ui/icons/Launch';

import serviceYellow from '../../../../assets/images/seo_mark_blob.svg';
import '../../../../assets/scss/styles.scss';
import heroImage from '../../../../assets/images/seo_service.svg';
import heroMobileImage from '../../../../assets/images/seo_mobile.svg';

import './seo-intro.scss';

const SeoIntro: React.FC<any> = (props: any): ReactElement => {
  return (
    <section className="seo-intro" ref={props.inputRef}>
      <div className="hero-image">
        <img src={heroImage} alt="SEO Marketing Image" />
      </div>
      <div className="hero-content">
        <div className="hero-title">
          <h1>SEO & Marketing</h1>
          <div className="hero-mobile-image">
            <img src={heroMobileImage} alt="SEO Marketing Image" />
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceYellow} alt="Background image" />
              <h3>
                <a href="https://www.nwohub.com/products/seo">SEO</a>
              </h3>
              <a href="https://www.nwohub.com/products/seo">
                <LaunchIcon
                  style={{
                    color: '#fdcf00',
                    fontSize: 34,
                    paddingTop: 12,
                    cursor: 'pointer',
                  }}
                />
              </a>
            </div>

            <p>
              Our SEO tool analyzes your website and gives you step-by-step
              instructions on how you can optimize for Google®, Yahoo® and
              Bing®. All it takes a few clicks, and then you can get back to
              business.
            </p>
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceYellow} alt="Background image" />
              <h3>
                <a href="https://www.nwohub.com/products/email-marketing">
                  Email Marketing
                </a>
              </h3>
              <a href="https://www.nwohub.com/products/email-marketing">
                <LaunchIcon
                  style={{
                    color: '#fdcf00',
                    fontSize: 34,
                    paddingTop: 12,
                    cursor: 'pointer',
                  }}
                />
              </a>
            </div>
            <p>
              Connect with your clients and increase customer retention with
              Email Marketing. Marketing packages for beginners and
              professionals.
            </p>
            {/* <div className="features">
              <img src={serviceYellow} alt="Background image" />
              <h3>New World Security</h3>
            </div> */}
          </div>
        </div>

        <div className="hero-description"></div>
      </div>
    </section>
  );
};

export default SeoIntro;
