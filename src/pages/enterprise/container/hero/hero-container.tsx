import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import '../../../../assets/scss/styles.scss';
import './hero-container.scss';
import heroImage from '../../../../assets/images/consultation-service.svg';

import yellowBlob from '../../../../assets/images/yellow-blob.svg';
import heroMobileImage from '../../../../assets/images/consultation_mobile.svg';
import { constants } from '../../../../constants';

const HeroContainer: React.FC<any> = ({ fromPage }: any): ReactElement => {
  let showTitle;
  if (fromPage) {
    showTitle =
      (fromPage && fromPage.indexOf('sdwan') === -1) ||
      fromPage.indexOf('cloud') === -1 ||
      fromPage.indexOf('cable') === -1 ||
      fromPage.indexOf('carrier') === -1;
  }

  const history = useHistory();
  const routeChange = (url) => {
    history.push(url);
  };
  return (
    <section className="hero-section">
      <div className="hero-content">
        {!fromPage && (
          <div className="hero-title">
            <h1>Enterprise</h1>
            <div className="hero-subtitle-container enterprise-services">
              <div className="features">
                <img src={yellowBlob} alt="sdwan" />
                <h3 onClick={() => routeChange('/enterprise/sdwan-service')}>
                  DEI-SDWAN
                </h3>
              </div>
              <div className="features">
                <img src={yellowBlob} alt="cloud services" />
                <h3 onClick={() => routeChange('/enterprise/cloud-service')}>
                  DEI-Cloud Services
                </h3>
              </div>
            </div>
            <div className="hero-subtitle-container">
              <div className="features">
                <img src={yellowBlob} alt="carrier services" />
                <h3 onClick={() => routeChange('/enterprise/carrier-service')}>
                  DEI-Carrier Services
                </h3>
              </div>
              <div className="features">
                <img src={yellowBlob} alt="cable services" />
                <h3 onClick={() => routeChange('/enterprise/cable-service')}>
                  DEI-Cable Services
                </h3>
              </div>
            </div>
          </div>
        )}
        {/* <div className="hero-mobile-image">
          <img src={heroMobileImage} alt="consultation Image" />
        </div> */}
        {fromPage && fromPage === constants.ES_SDWAN_SERVICE && (
          <div className="hero-title">
            <h1>DEI-SDWAN Service</h1>
            {/* <div className="hero-subtitle-container enterprise-services">
              <div className="features">
                <img src={yellowBlob} alt="sdwan" />
                <h3>DEI-SDWANs</h3>
              </div>
            </div> */}
          </div>
        )}
        {fromPage && fromPage === constants.ES_CLOUD_SERVICE && (
          <div className="hero-title">
            <h1>DEI-Cloud Service</h1>
            {/* <div className="hero-subtitle-container enterprise-services">
              <img src={yellowBlob} alt="cloud services" />
              <h3 onClick={() => routeChange('/enterprise/cloud-service')}>
                DEI-Cloud Services
              </h3>
            </div> */}
          </div>
        )}
        {fromPage && fromPage === constants.ES_CABLE_SERVICE && (
          <div className="hero-title">
            <h1>DEI-Cable Service</h1>
            {/* <div className="hero-subtitle-container enterprise-services">
              <img src={yellowBlob} alt="cable services" />
              <h3 onClick={() => routeChange('/enterprise/cable-service')}>
                DEI-Cable Services
              </h3>
            </div> */}
          </div>
        )}
        {fromPage && fromPage === constants.ES_CARRIER_SERVICE && (
          <div className="hero-title">
            <h1>DEI-Carrier Service</h1>
            {/* <div className="hero-subtitle-container enterprise-services">
              <img src={yellowBlob} alt="carrier services" />
              <h3 onClick={() => routeChange('/enterprise/carrier-service')}>
                DEI-Carrier Services
              </h3>
            </div> */}
          </div>
        )}
        <div className="hero-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Enterprise Image" />
      </div>
    </section>
  );
};

export default HeroContainer;
