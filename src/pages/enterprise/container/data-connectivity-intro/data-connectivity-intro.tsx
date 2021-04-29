import React, { Fragment, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import '../../../../assets/scss/styles.scss';

import heroImage from '../../../../assets/images/data_security_dei_shield.svg';

import blueBlob from '../../../../assets/images/service_blue.svg';
import { setServiceAction } from '../../../../actions/enterprise';

const DataConnectivityIntro: React.FC<any> = (props: any): ReactElement => {
  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Enterprise Data Connectivity Service Page',
    },
  });

  const history = useHistory();
  const routeChange = (url: string, serviceName: string) => {
    props.setService(serviceName);
    history.push(url);
  };
  return (
    <Fragment>
      <section className="hero-section">
        <div className="hero-content">
          <Fragment>
            <div className="hero-title">
              <h1>Data Plexus</h1>
              <div className="hero-mobile-image">
                <img src={heroImage} alt="consultation Image" />
              </div>
              <div className="hero-subtitle-container enterprise-service">
                <div className="features">
                  <img src={blueBlob} alt="sdwan" />
                  <h3
                    onClick={() =>
                      routeChange('/enterprise/sdwan-service', 'SD-WAN')
                    }
                  >
                    SD-WAN
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange('/enterprise/sdwan-service', 'SD-WAN')
                    }
                    className="chevron-right"
                  />
                  <p>
                    Single source provider for all SD-WAN service needs.
                    redundancy, security, and quality of experience.
                    Software-Defined Wide Area Networking (SD-WAN)
                    Revolutionized the way channel and IT organizations think
                    about networking multiple locations. Our SD-WAN portfolio
                    will provide better than any other master agent.
                  </p>
                </div>
                <div className="features">
                  <img src={blueBlob} alt="blue blob" />
                  <h3
                    onClick={() =>
                      routeChange('/enterprise/sdwan-service', 'Point To Point')
                    }
                  >
                    Point To Point
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange(
                        '/enterprise/sdwan-service',
                        'Point  To  Point',
                      )
                    }
                    className="chevron-right"
                  />
                  <p>
                    <b>Point to Point Connections</b> is a closed network data
                    transport service that does not traverse the public Internet
                    and is secure with no data encryption needed. Connecting
                    securely two or more locations for private data services.
                    Provided businesses with reliable, secure network data
                    service applications, credit card processing, file sharing,
                    data backup, VOIP, and video conferencing.
                  </p>
                </div>
                <div className="features">
                  <img src={blueBlob} alt="blue blob" />
                  <h3
                    onClick={() =>
                      routeChange('/enterprise/sdwan-service', 'MPLS')
                    }
                  >
                    MPLS
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange('/enterprise/sdwan-service', 'MPLS')
                    }
                    className="chevron-right"
                  />
                  <p>
                    Multi-Protocol Label Switching (MPLS) is the backdoor
                    routing and switching technology, providing Layer 3 routing
                    at Layer 2 speeds and enabling multiple virtual networking
                    environments and services to be delivered on a single layer
                    1 connection. Software-Defined Networking (SDN) is the
                    separation of the Network Control Plane and the Data Plane.
                  </p>
                  <p>
                    Our global network gives you the power to directly affect
                    real-time changes in bandwidth and QoS service planes. Our
                    proprietary code writes changes directly to our PE routers
                    (in our customer’s virtualized network space) from within
                    our web portal, or even their smartphones (see video). This
                    on-demand flexibility keeps our clients in control of their
                    changing network needs; eliminating the need for CLI access
                    to the hardware that controls the data flow.
                  </p>
                </div>
              </div>
            </div>
          </Fragment>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Enterprise Image" />
        </div>
      </section>
      <div className="bottom-border"></div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setService: (serviceName) => dispatch(setServiceAction(serviceName)),
  };
};
export default connect(null, mapDispatchToProps)(DataConnectivityIntro);
