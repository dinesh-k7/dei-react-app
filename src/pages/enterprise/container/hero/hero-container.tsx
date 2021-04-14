import React, { Fragment, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import '../../../../assets/scss/styles.scss';
import './hero-container.scss';
import heroImage from '../../../../assets/images/data_security_dei_shield.svg';

import blueBlob from '../../../../assets/images/service_blue.svg';
import heroMobileImage from '../../../../assets/images/consultation_mobile.svg';
import { constants } from '../../../../constants';

const HeroContainer: React.FC<any> = ({ fromPage }: any): ReactElement => {
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
              <div className="hero-mobile-image">
                <img src={heroImage} alt="consultation Image" />
              </div>
              <div className="hero-subtitle-container enterprise-service">
                <div className="features">
                  <img src={blueBlob} alt="sdwan" />
                  <h3 onClick={() => routeChange('/enterprise/sdwan-service')}>
                    Security
                  </h3>
                  <ChevronRightIcon
                    onClick={() => routeChange('/enterprise/sdwan-service')}
                    className="chevron-right"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, minus quae. Nisi laboriosam dolores rem obcaecati
                    tempore pariatur? Molestias recusandae quis delectus
                    perferendis assumenda deleniti soluta dignissimos. Veniam,
                    in laudantium!
                  </p>
                </div>
                <div className="features">
                  <img src={blueBlob} alt="cloud services" />
                  <h3 onClick={() => routeChange('/enterprise/ucaas-service')}>
                    Connectivity
                  </h3>
                  <ChevronRightIcon
                    onClick={() => routeChange('/enterprise/ucaas-service')}
                    className="chevron-right"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, minus quae. Nisi laboriosam dolores rem obcaecati
                    tempore pariatur? Molestias recusandae quis delectus
                    perferendis assumenda deleniti soluta dignissimos. Veniam,
                    in laudantium!
                  </p>
                </div>
              </div>
              <div className="hero-subtitle-container">
                <div className="features">
                  <img src={blueBlob} alt="carrier services" />
                  <h3 onClick={() => routeChange('/enterprise/cloud-service')}>
                    Cloud
                  </h3>
                  <ChevronRightIcon
                    onClick={() => routeChange('/enterprise/cloud-service')}
                    className="chevron-right"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, minus quae. Nisi laboriosam dolores rem obcaecati
                    tempore pariatur? Molestias recusandae quis delectus
                    perferendis assumenda deleniti soluta dignissimos. Veniam,
                    in laudantium!
                  </p>
                </div>
                <div className="features">
                  <img src={blueBlob} alt="ucaas services" />
                  <h3 onClick={() => routeChange('/enterprise/ucaas-service')}>
                    Voice
                  </h3>
                  <ChevronRightIcon
                    onClick={() => routeChange('/enterprise/ucaas-service')}
                    className="chevron-right"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, minus quae. Nisi laboriosam dolores rem obcaecati
                    tempore pariatur? Molestias recusandae quis delectus
                    perferendis assumenda deleniti soluta dignissimos. Veniam,
                    in laudantium!
                  </p>
                </div>
              </div>
              <div className="hero-subtitle-container">
                <div className="features">
                  <img src={blueBlob} alt="cable services" />
                  <h3 onClick={() => routeChange('/enterprise/cable-service')}>
                    IOT
                  </h3>
                  <ChevronRightIcon
                    className="chevron-right"
                    onClick={() => routeChange('/enterprise/cable-service')}
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, minus quae. Nisi laboriosam dolores rem obcaecati
                    tempore pariatur? Molestias recusandae quis delectus
                    perferendis assumenda deleniti soluta dignissimos. Veniam,
                    in laudantium!
                  </p>
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
              <img src={heroMobileImage} alt="enterprise Image" />
            </div>
            <div className="hero-description">
              <p>
                DEI™ is leading provider of SD-WAN, We address your concerns
                about security, redundancy, quality of experience, and more.
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
