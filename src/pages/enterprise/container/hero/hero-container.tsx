import React, { Fragment, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FitbitIcon from '@mui/icons-material/Fitbit';

import '../../../../assets/scss/styles.scss';
import './hero-container.scss';
import heroImage from '../../../../assets/images/it-services.svg';

import { constants } from '../../../../constants';

const HeroContainer: React.FC<any> = ({
  fromPage,
  pageContent,
}: any): ReactElement => {
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
              <h1>I.T. Plexus™️</h1>
              <div className="hero-mobile-image">
                <img src={heroImage} alt="consultation" />
              </div>
              <div className="hero-subtitle-container enterprise-service">
                <div className="features">
                  <FitbitIcon fontSize="large" className="fitbit-icon" />
                  <h3
                    onClick={() => routeChange('/enterprise/security-service')}
                  >
                    Security Sentinels
                  </h3>
                  <ChevronRightIcon
                    onClick={() => routeChange('/enterprise/security-service')}
                    className="chevron-right"
                  />
                  <p>
                    The DEI®️ Data and Site sentinels offer Experience,
                    Knowledge, and Technical Understanding Of Cyber And Physical
                    Security Solutions.
                  </p>
                </div>
                <div className="features">
                  <FitbitIcon fontSize="large" className="fitbit-icon" />
                  <h3
                    onClick={() =>
                      routeChange('/enterprise/data-plexus-service')
                    }
                  >
                    Data Plexus
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange('/enterprise/data-plexus-service')
                    }
                    className="chevron-right"
                  />
                  <p>
                    Our Data Plexus offers a secure connection to critical data
                    in real-time – anywhere in the world. We connect you with
                    providers who have a proven track record of delivering and
                    supporting long-term solutions.
                  </p>
                  <p>
                    Transitioning from traditional services to advanced unified
                    communications can be intimidating. The <b>DEI®️</b> takes
                    pride in and the vast experience we have with various data
                    network providers.
                  </p>
                  <div className="data-connectivity-description">
                    <b>Our data plexus portfolio includes:</b>
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
                  <FitbitIcon fontSize="large" className="fitbit-icon" />

                  <h3 onClick={() => routeChange('/enterprise/cloud-service')}>
                    Cloud
                  </h3>
                  <ChevronRightIcon
                    onClick={() => routeChange('/enterprise/cloud-service')}
                    className="chevron-right"
                  />
                  <p>
                    Real solutions that enable businesses everywhere to lower
                    costs, back up their data, and increase efficiency.
                  </p>
                </div>
                <div className="hero-subtitle-container">
                  <div className="features">
                    <FitbitIcon fontSize="large" className="fitbit-icon" />

                    <h3 onClick={() => routeChange('/enterprise/iot-service')}>
                      IOT
                    </h3>
                    <ChevronRightIcon
                      className="chevron-right"
                      onClick={() => routeChange('/enterprise/iot-service')}
                    />

                    <p>
                      Our DEI®️ Consultations offer customers ease and control
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
                  <FitbitIcon fontSize="large" className="fitbit-icon" />

                  <h3 onClick={() => routeChange('/enterprise/voice-service')}>
                    Voice
                  </h3>
                  <ChevronRightIcon
                    onClick={() => routeChange('/enterprise/voice-service')}
                    className="chevron-right"
                  />
                  <p>
                    Separated by meters or by a continent, the <b>DEI®️</b>
                    connects the communications of your business.
                  </p>
                </div>
                <div className="features">
                  <FitbitIcon fontSize="large" className="fitbit-icon" />

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
                    Until we provide it, we will source the best providers for
                    it!
                  </p>
                </div>
              </div>
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

              {pageContent ? (
                <div className="hero-subtitle-container enterprise-service">
                  <div className="features page-content">
                    <p>{pageContent.description_one}</p>
                    {pageContent.features && pageContent.features.length ? (
                      <div className="feature-description">
                        <ul>
                          {pageContent.features.map((feature) => {
                            return (
                              <li key={feature.id}>{feature.description}</li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : (
                      ''
                    )}
                    {pageContent.description_two ? (
                      <p>{pageContent.description_two}</p>
                    ) : (
                      ''
                    )}
                    {pageContent.features_two &&
                    pageContent.features_two.length ? (
                      <div className="data-connectivity-description">
                        {fromPage === constants.CLOUD_BACKUP ? (
                          <b>Service & Platform:</b>
                        ) : (
                          ''
                        )}
                        <ul>
                          {pageContent.features_two.map((feature) => {
                            return (
                              <li key={feature.id}>{feature.description}</li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : (
                      ''
                    )}
                    {pageContent.description_three ? (
                      <p>{pageContent.description_three}</p>
                    ) : (
                      ''
                    )}
                    {pageContent.description_four ? (
                      <p>{pageContent.description_four}</p>
                    ) : (
                      ''
                    )}
                    {pageContent.features_four &&
                    pageContent.features_four.length ? (
                      <div className="data-connectivity-description">
                        <ul>
                          {pageContent.features_four.map((feature) => {
                            return (
                              <li key={feature.id}>{feature.description}</li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : (
                      ''
                    )}
                    {pageContent.description_five ? (
                      <p>{pageContent.description_five}</p>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              ) : (
                ''
              )}

              {/** Hosted VOIP section starts */}
              {fromPage === constants.VOIP ? (
                <div className="hero-subtitle-container enterprise-service">
                  <div className="features">
                    <p>
                      Using a hosted PBX allows you to make phone calls with
                      your preferred ISP for Business Internet. You select your
                      phone plan, features, and IP phones, and we will handle
                      everything else.
                    </p>
                    <br />
                    <ul>
                      <li>
                        <b>VoIP Phones</b> – for purchase or rent
                      </li>
                      <li>
                        <b>Phone Numbers</b> – Transfer your existing number or
                        get a new one
                      </li>
                      <li>
                        <b>Broadband Connection</b> – Use your current services
                        or let us provide a high-quality broadband connection
                      </li>
                      <li>
                        <b> Voice-capable Router</b> – we recommend a router
                        with QoS settings that can prioritize voice traffic over
                        data traffic. We can help you select one
                      </li>
                      <li>
                        <b>Toll-Free and Vanity Numbers </b> – make it easy for
                        customers you reach you
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                ''
              )}
              {/**Hosted voip section ends */}
            </div>
            {/* <div className="hero-mobile-image">
              <img src={heroMobileImage} alt="enterprise Image" />
            </div> */}
          </Fragment>
        )}
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Enterprise" />
      </div>
    </section>
  );
};

export default HeroContainer;
