import React, { Fragment, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FitbitIcon from '@mui/icons-material/Fitbit';

import '../../../../assets/scss/styles.scss';
import '../../container/hero/hero-container.scss';

import heroImage from '../../../../assets/images/data_security_dei_shield.svg';

import { setServiceAction } from '../../../../actions/enterprise';
import { constants } from '../../../../constants';

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
                <img src={heroImage} alt="IOT" />
              </div>
              <div className="hero-subtitle-container enterprise-service">
                <div className="features">
                  <FitbitIcon fontSize="large" className="fitbit-icon" />
                  <h3
                    onClick={() =>
                      routeChange(
                        '/enterprise/cloud-backup',
                        constants.CLOUD_BACKUP,
                      )
                    }
                  >
                    Cloud backup & failover strategies
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange(
                        '/enterprise/cloud-backup',
                        constants.CLOUD_BACKUP,
                      )
                    }
                    className="chevron-right"
                  />
                  <div className="feature-description">
                    You can protect your digital enterprise from interruption of
                    services with DEI®️:tm: wireless backup and failover
                    strategies & solutions. Mitigate poor customer experiences,
                    resulting in revenue loss by quickly detecting a connection
                    issue and solving it. Gone are the days when you can rely on
                    a simple internet service alone:
                    <br />
                    <ul>
                      <li>Disruptions in communication</li>
                      <li>Decreased productivity</li>
                      <li>Lack of trust</li>
                    </ul>
                    <br />
                    Our strategies and solutions can save you time and money.
                    <br />
                    <br />
                    <b>Service & Platform:</b>
                    <br />
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
                  <FitbitIcon fontSize="large" className="fitbit-icon" />
                  <h3
                    onClick={() =>
                      routeChange(
                        '/enterprise/hands-free',
                        constants.HANDS_FREE,
                      )
                    }
                  >
                    &quot;Hands-Free&quot; solutions to managing your data
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange(
                        '/enterprise/hands-free',
                        constants.HANDS_FREE,
                      )
                    }
                    className="chevron-right"
                  />
                  <div className="feature-description">
                    Our integrated fleet management solutions give you the
                    visibility that allows proactive management of your drivers.
                    Remote and Centralized access to:
                    <br />
                    <ul>
                      <li>GPS locations</li>
                      <li>Gauging sensors</li>
                      <li>Engine troubles</li>
                      <li>Violations</li>
                    </ul>
                    <br />
                    Operate your business safely and productively with our
                    managed data solution.
                    <br />
                    <ul>
                      <li>Service & Platform</li>
                      <li>Inventory Control</li>
                      <li>Reporting Capabilities</li>
                      <li>Custom Monitoring Tools</li>
                      <li>Web-Based Provisioning Portal</li>
                      <li>Usage Thresholds</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Enterprise" />
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
