import React, { Fragment, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import '../../../../assets/scss/styles.scss';
import '../../container/hero/hero-container.scss';

import heroImage from '../../../../assets/images/data_security_dei_shield.svg';

import blueBlob from '../../../../assets/images/service_blue.svg';
import { setServiceAction } from '../../../../actions/enterprise';

const IOTIntro: React.FC<any> = (props: any): ReactElement => {
  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Enterprise IOT Service Page',
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
              <h1>IOT</h1>
              <div className="hero-mobile-image">
                <img src={heroImage} alt="consultation Image" />
              </div>
              <div className="hero-subtitle-container enterprise-service">
                <div className="features">
                  <img src={blueBlob} alt="sdwan" />
                  <h3
                    onClick={() =>
                      routeChange(
                        '/enterprise/sdwan-service',
                        'Wireless Backup Failover Solutions',
                      )
                    }
                  >
                    Wireless Backup Failover Solutions
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange(
                        '/enterprise/sdwan-service',
                        'Wireless Backup Failover Solutions',
                      )
                    }
                    className="chevron-right"
                  />
                  <div className="feature-description">
                    Protect your business from interruption of service with
                    wireless backup failover solutions. Detecting a connection
                    issue and immediately resolving it will mitigate loss of
                    revenue and a poor customer experience. Relying on primary
                    internet services alone can result in disruption in
                    communication and lack of productivity within your
                    organization. Saving time and money can be easily
                    accomplished with a wireless backup failover solution.{' '}
                    <br />
                    <br />
                    <b>Service & Platform</b>
                    <ul>
                      <li>Customer User Interface</li>
                      <li>Managed Workflow</li>
                      <li>Custom Proposal and Packages</li>
                      <li>Routine Plan Optimization</li>
                      <li>Managed Threshold Alerting & Monitoring</li>
                      <li>Billing As A Service</li>
                      <li>Dedicated Sales and Support Staff</li>
                    </ul>
                  </div>
                </div>
                <div className="features">
                  <img src={blueBlob} alt="blue blob" />
                  <h3
                    onClick={() =>
                      routeChange(
                        '/enterprise/ucaas-service',
                        'Managed Data Solutions',
                      )
                    }
                  >
                    Managed Data Solutions
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange(
                        '/enterprise/ucaas-service',
                        'Managed Data Solutions',
                      )
                    }
                    className="chevron-right"
                  />
                  <div className="feature-description">
                    Gain visibility and proactively manage your drivers with
                    integrated fleet management solutions. Centralized remote
                    access to tracking GPS locations, gauging sensors, and being
                    alerted of violations or engine trouble is essential in
                    operating your business safely and productively.
                    <br />
                    <br />
                    <b>Service & Platform</b>
                    <ul>
                      <li>Web-Based Provisioning Portal</li>
                      <li>Usage Thresholds</li>
                      <li>Inventory Control</li>
                      <li>Reporting Capabilities</li>
                      <li>Custom Monitoring Tools</li>
                    </ul>
                  </div>
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
export default connect(null, mapDispatchToProps)(IOTIntro);
