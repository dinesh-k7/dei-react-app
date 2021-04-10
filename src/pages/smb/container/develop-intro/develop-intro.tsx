import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import LaunchIcon from '@material-ui/icons/Launch';
import heroImage from '../../../../assets/images/website_service.svg';
import heroMobileImage from '../../../../assets/images/wd_mobile.svg';
import serviceBlue from '../../../../assets/images/website_blob.svg';
import './develop-intro.scss';

const DevelopIntro: React.FC<any> = (props: any): ReactElement => {
  const history = useHistory();

  const routeChange = () => {
    history.push('develop');
  };

  const { fromPage } = props;
  return (
    <section className="develop-intro" ref={props.inputRef}>
      <div className="hero-content">
        <div className="hero-title">
          <h1>Website development</h1>
          <div className="hero-mobile-image">
            <img src={heroMobileImage} alt="Webiste development Image" />
          </div>
          <h3 className="wd-title">DIY:</h3>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
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
              Our WordPress Hosting provides automatic setup, backups and
              software updates paired with 24/7, award-winning support. Get
              started in just a few clicks.
            </p>
          </div>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
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
              Fully functioning professional business/ecommerce/shopping cart.
            </p>
          </div>
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

export default DevelopIntro;
