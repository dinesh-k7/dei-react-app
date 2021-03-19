import React, { ReactElement } from 'react';

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
      className={fromPage ? 'wd-intro wd-page' : 'wd-intro'}
      ref={props.inputRef}
    >
      <div className="hero-content">
        <div className="hero-title">
          <h1>Website development</h1>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3>
                <a href="https://www.nwohub.com/products/website-builder">
                  Website Builder
                </a>
              </h3>
              <p>
                Build an amazing website in just under an hour with website
                Builder. Take advantage of designs created just for your
                industry and then customize them to reflect your one-of-a-kind
                idea.
              </p>
            </div>
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3>
                <a href="https://www.nwohub.com/products/wordpress">
                  WordPress
                </a>
              </h3>
            </div>
            <p>
              Our WordPress Hosting provides automatic setup, backups and
              software updates paired with 24/7, award-winning support. Get
              started in just a few clicks.
            </p>
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3>
                <a href="https://www.nwohub.com/products/shopping-cart">
                  Shopping Cart
                </a>
              </h3>
            </div>
            <p>
              Fully functioning professional business/ecommerce/shopping cart.
            </p>
          </div>
        </div>
        <div className="hero-mobile-image">
          <img src={heroMobileImage} alt="Webiste development Image" />
        </div>
        {!fromPage && (
          <div className="button-container">
            <button
              type="button"
              className={`btn-branding`}
              onClick={routeChange}
            >
              Custom Website
            </button>
          </div>
        )}
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Webiste development Image" />
      </div>
    </section>
  );
};

export default WdIntro;
