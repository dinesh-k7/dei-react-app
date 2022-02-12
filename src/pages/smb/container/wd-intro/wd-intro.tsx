import React, { ReactElement } from 'react';
import LaunchIcon from '@material-ui/icons/Launch';

import serviceBlue from '../../../../assets/images/website_blob.svg';
import '../../../../assets/scss/styles.scss';
import heroImage from '../../../../assets/images/website_service.svg';
import heroMobileImage from '../../../../assets/images/wd_mobile.svg';

import './wd-intro.scss';
import { useHistory } from 'react-router-dom';

const WdIntro: React.FC<any> = (props: any): ReactElement => {
  const history = useHistory();

  const routeChange = () => {
    history.push('website-development');
  };

  const { fromPage } = props;
  return (
    <section
      className={fromPage === 'wd' ? 'wd-intro wd-page' : 'wd-intro'}
      ref={props.inputRef}
    >
      <div className="hero-content">
        <div className="hero-title">
          <h1>Website development</h1>
          <h3 className="hero-sub-title">DIY:</h3>
          <div className="hero-mobile-image">
            <img src={heroMobileImage} alt="Webiste development" />
          </div>

          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Blob one" />
              <h3 className="feature-title">
                <a href="https://www.nwohub.com/products/website-builder">
                  Website Builder
                </a>
              </h3>
              <a href="https://www.nwohub.com/products/website-builder">
                <LaunchIcon
                  style={{
                    color: '#9c47ed',
                    fontSize: 34,
                    paddingTop: 12,
                    cursor: 'pointer',
                  }}
                />
              </a>
              <p>
                Get over the mental blocks preventing you from doing it. In no
                time you will see how easy we have made it.
              </p>
            </div>
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Blob two" />
              <h3 className="feature-title">
                <a href="https://www.nwohub.com/products/wordpress">
                  WordPress
                </a>
              </h3>
              <a href="https://www.nwohub.com/products/wordpress">
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
              The DEI™ WordPress Hosting provides automatic setup, backups, and
              software updates paired with 24/7, award-winning support. Start
              today, just a few clicks away.
            </p>
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Blob three" />
              <h3 className="feature-title">
                <a href="https://www.nwohub.com/products/shopping-cart">
                  Shopping Cart
                </a>
              </h3>
              <a href="https://www.nwohub.com/products/shopping-cart">
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
              Fully functioning professional business/e-commerce/shopping cart.
            </p>
          </div>

          <div>
            <h3 className="hero-sub-title">DEI™:</h3>
          </div>
        </div>

        {!fromPage && (
          <div className="button-container">
            <button type="button" className={`btn-basic`} onClick={routeChange}>
              Custom Site
            </button>
          </div>
        )}
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="website development hero" />
      </div>
    </section>
  );
};

export default WdIntro;
