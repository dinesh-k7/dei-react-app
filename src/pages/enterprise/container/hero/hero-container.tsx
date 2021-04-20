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
    <section className={fromPage ? `hero-section pbtm` : `hero-section`}>
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
                  <h3
                    onClick={() => routeChange('/enterprise/security-service')}
                  >
                    Security
                  </h3>
                  <ChevronRightIcon
                    onClick={() => routeChange('/enterprise/security-service')}
                    className="chevron-right"
                  />
                  <p>
                    The DEI Data and Site sentinel offer Experience, Knowledge,
                    and Technical Understanding Of Cyber And Physical Security
                    Solutions.
                  </p>
                </div>
                <div className="features">
                  <img src={blueBlob} alt="cloud services" />
                  <h3
                    onClick={() =>
                      routeChange('/enterprise/data-connectivity-service')
                    }
                  >
                    Data Plexus
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange('/enterprise/data-connectivity-service')
                    }
                    className="chevron-right"
                  />
                  <p>
                    Enable your employees to connect to critical data in
                    real-time – anywhere in the world – securely. Leveraging
                    that knowledge and experience we chose to work with
                    providers who have a proven track record of delivering and
                    supporting solutions long term.
                  </p>
                  <p>
                    Transitioning from traditional services to advanced unified
                    communications can be intimidating. The <b>DEI™ </b>has vast
                    experience working with various data network providers.
                  </p>
                  <div className="data-connectivity-description">
                    <b> Our data connectivity portfolio includes:</b>
                    <ul>
                      <li>High Performance, Fast Efficient Internet Options</li>
                      <li>Ethernet services – Metro, Wide-Area, and Global</li>
                      <li>MPLS-VPN Connections</li>
                      <li>
                        SD/SD-WAN services – (Software-defined networking in a
                        wide area network)
                      </li>
                    </ul>
                  </div>
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
                    Real solutions that enable businesses everywhere to lower
                    costs, backup their data, and increase efficiency.
                  </p>
                </div>
                <div className="hero-subtitle-container">
                  <div className="features">
                    <img src={blueBlob} alt="cable services" />
                    <h3 onClick={() => routeChange('/enterprise/iot-service')}>
                      IOT
                    </h3>
                    <ChevronRightIcon
                      className="chevron-right"
                      onClick={() => routeChange('/enterprise/iot-service')}
                    />

                    <p>
                      Our DEI™ Consultations offers customers ease and control
                      of managing machine-to-machine or M2M connections for IoT
                      solutions. Conduct your business simply and efficiently by
                      integrating wireless backup failover solutions or using
                      M2M technology to access remote devices using our managed
                      data solutions.
                    </p>
                    <div className="feature-description">
                      <b>Enhance Productivity With IoT Solutions </b>
                      <ul>
                        <li>Any Device</li>
                        <li>Any Place</li>
                        <li>Any Application</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="features">
                  <img src={blueBlob} alt="ucaas services" />
                  <h3 onClick={() => routeChange('/enterprise/voice-service')}>
                    Voice
                  </h3>
                  <ChevronRightIcon
                    onClick={() => routeChange('/enterprise/voice-service')}
                    className="chevron-right"
                  />
                  <p>
                    &ldquo;Separated by meters or by a continent the
                    <b> DEI™</b> connects the communications of your
                    business.&rdquo;
                  </p>
                </div>
                <div className="features">
                  <img src={blueBlob} alt="ucaas services" />
                  <h3
                    onClick={() =>
                      routeChange('/enterprise/professional-service')
                    }
                  >
                    Professional Services
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange('/enterprise/professional-service')
                    }
                    className="chevron-right"
                  />
                  <p>
                    OTG boasts the most robust portfolio of IT technology
                    solutions in the channel to meet real-world customer needs.
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
        {fromPage && (
          <Fragment>
            <div className="hero-title">
              <h1>{fromPage}</h1>
            </div>
            <div className="hero-mobile-image">
              <img src={heroMobileImage} alt="enterprise Image" />
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
