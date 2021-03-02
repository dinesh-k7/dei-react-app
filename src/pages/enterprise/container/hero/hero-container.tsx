import React, { Fragment, ReactElement } from 'react';
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
          <Fragment>
            <div className="hero-title">
              <h1>Enterprise</h1>
              <div className="hero-subtitle-container enterprise-service">
                <div className="features">
                  <img src={yellowBlob} alt="sdwan" />
                  <h3 onClick={() => routeChange('/enterprise/sdwan-service')}>
                    DEI-SD-WAN
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
                  <h3
                    onClick={() => routeChange('/enterprise/carrier-service')}
                  >
                    DEI-Carrier Services
                  </h3>
                </div>
                <div className="features">
                  <img src={yellowBlob} alt="ucaas services" />
                  <h3 onClick={() => routeChange('/enterprise/ucaas-service')}>
                    UCaaS Services
                  </h3>
                </div>
              </div>
              <div className="hero-subtitle-container">
                <div className="features">
                  <img src={yellowBlob} alt="cable services" />
                  <h3 onClick={() => routeChange('/enterprise/cable-service')}>
                    DEI-Cable Services
                  </h3>
                </div>
              </div>
            </div>
            <div className="hero-description">
              <p>
                Until we provide it we will source the best providers for it!
              </p>
            </div>
          </Fragment>
        )}
        {/* <div className="hero-mobile-image">
          <img src={heroMobileImage} alt="consultation Image" />
        </div> */}
        {fromPage && fromPage === constants.ES_SDWAN_SERVICE && (
          <Fragment>
            <div className="hero-title">
              <h1>DEI-SDWAN Service</h1>
            </div>
            <div className="hero-mobile-image">
              <img src={heroMobileImage} alt="consultation Image" />
            </div>
            <div className="hero-description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus est cum inventore unde ad consequuntur facere
                voluptatibus. Perferendis iusto magnam doloremque obcaecati a
                non, veritatis rerum! Atque asperiores qui nostrum.
              </p>
            </div>
          </Fragment>
        )}
        {fromPage && fromPage === constants.ES_CLOUD_SERVICE && (
          <Fragment>
            <div className="hero-title">
              <h1>DEI-Cloud Service</h1>
            </div>
            <div className="hero-mobile-image">
              <img src={heroMobileImage} alt="consultation Image" />
            </div>
            <div className="hero-description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus est cum inventore unde ad consequuntur facere
                voluptatibus. Perferendis iusto magnam doloremque obcaecati a
                non, veritatis rerum! Atque asperiores qui nostrum.
              </p>
            </div>
          </Fragment>
        )}
        {fromPage && fromPage === constants.ES_CABLE_SERVICE && (
          <Fragment>
            <div className="hero-title">
              <h1>DEI-Cable Service</h1>
            </div>
            <div className="hero-mobile-image">
              <img src={heroMobileImage} alt="consultation Image" />
            </div>
            <div className="hero-description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus est cum inventore unde ad consequuntur facere
                voluptatibus. Perferendis iusto magnam doloremque obcaecati a
                non, veritatis rerum! Atque asperiores qui nostrum.
              </p>
            </div>
          </Fragment>
        )}
        {fromPage && fromPage === constants.ES_CARRIER_SERVICE && (
          <Fragment>
            <div className="hero-title">
              <h1>DEI-Carrier Service</h1>
            </div>
            <div className="hero-mobile-image">
              <img src={heroMobileImage} alt="consultation Image" />
            </div>
            <div className="hero-description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus est cum inventore unde ad consequuntur facere
                voluptatibus. Perferendis iusto magnam doloremque obcaecati a
                non, veritatis rerum! Atque asperiores qui nostrum.
              </p>
            </div>
          </Fragment>
        )}
        {fromPage && fromPage === constants.UCAAS_SERVICE && (
          <Fragment>
            <div className="hero-title">
              <h1>DEI-UCaaS</h1>
            </div>
            <div className="hero-mobile-image">
              <img src={heroMobileImage} alt="consultation Image" />
            </div>
            <div className="hero-description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus est cum inventore unde ad consequuntur facere
                voluptatibus. Perferendis iusto magnam doloremque obcaecati a
                non, veritatis rerum! Atque asperiores qui nostrum.
              </p>
            </div>
          </Fragment>
        )}
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Enterprise Image" />
      </div>
    </section>
  );
};

export default HeroContainer;
