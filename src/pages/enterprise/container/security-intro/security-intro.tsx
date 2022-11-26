import React, { Fragment, ReactElement } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FitbitIcon from '@mui/icons-material/Fitbit';

import '../../../../assets/scss/styles.scss';

import '../../container/hero/hero-container.scss';

import heroImage from '../../../../assets/images/data_security_dei_shield.svg';
import { setServiceAction } from '../../../../actions/enterprise';
import { constants } from '../../../../constants';

const SecurityIntro: React.FC<any> = (props: any): ReactElement => {
  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Enterprise Security Service Page',
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
              <h1>Security</h1>
              <div className="hero-mobile-image">
                <img src={heroImage} alt="cyber security" />
              </div>
              <div className="hero-subtitle-container enterprise-service">
                <div className="features">
                  <FitbitIcon fontSize="large" className="fitbit-icon" />
                  <h3
                    onClick={() => {
                      routeChange(
                        '/enterprise/cyber-security',
                        constants.CYBER_SECURITY,
                      );
                    }}
                  >
                    Cyber Security
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange(
                        '/enterprise/cyber-security',
                        constants.CYBER_SECURITY,
                      )
                    }
                    className="chevron-right"
                  />
                  <p>
                    When a natural disaster strikes, it is critical to get your 
                    systems back online quickly while you are still reeling from 
                    the impact. That is exactly what our DEI® Local Back-Up 
                    provides – fast recovery from a local hardware or system failure.
                  </p>
                  <ul>
                    <li>Top Tech Delivered to you</li>
                    <li>Redundant Back-Up is Essential</li>
                  </ul>
                </div>
                <div className="features">
                  <FitbitIcon fontSize="large" className="fitbit-icon" />

                  <h3
                    onClick={() =>
                      routeChange(
                        '/enterprise/physical-security',
                        constants.PHYSICAL_SECURITY,
                      )
                    }
                  >
                    Physical Security
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange(
                        '/enterprise/physical-security',
                        constants.PHYSICAL_SECURITY,
                      )
                    }
                    className="chevron-right"
                  />
                  <p>
                    Our Cloud-Based Video Monitoring solutions platform includes
                    industry executives with decades of experience. We can
                    provide SMB&apos;s and Enterprise Businesses with any video
                    need. Having a secure view of your business allows you to
                    focus on growth.
                  </p>
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
export default connect(null, mapDispatchToProps)(SecurityIntro);
