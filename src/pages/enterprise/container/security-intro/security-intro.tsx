import React, { Fragment, ReactElement } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import '../../../../assets/scss/styles.scss';

import heroImage from '../../../../assets/images/data_security_dei_shield.svg';

import blueBlob from '../../../../assets/images/service_blue.svg';
import { setServiceAction } from '../../../../actions/enterprise';

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
                <img src={heroImage} alt="consultation Image" />
              </div>
              <div className="hero-subtitle-container enterprise-service">
                <div className="features">
                  <img src={blueBlob} alt="sdwan" />
                  <h3
                    onClick={() => {
                      routeChange(
                        '/enterprise/sdwan-service',
                        'Cyber Security',
                      );
                    }}
                  >
                    Cyber Security
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange('/enterprise/sdwan-service', 'Cyber Security')
                    }
                    className="chevron-right"
                  />
                  <p>
                    Cyber Security is intentionally complex and the DEI has
                    access to some of the top experts in this field.  The DEI
                    can help you understand customer requirements and today’s
                    threat environment, then architect the right security or
                    SECaaS solution to meet any customer’s security needs. From
                    network security to ID management, to secure access, and
                    more.
                  </p>
                </div>
                <div className="features">
                  <img src={blueBlob} alt="cloud services" />
                  <h3
                    onClick={() =>
                      routeChange(
                        '/enterprise/ucaas-service',
                        'Physical Security',
                      )
                    }
                  >
                    Physical Security
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange(
                        '/enterprise/ucaas-service',
                        'Physical Security',
                      )
                    }
                    className="chevron-right"
                  />
                  <p>
                    the DEI Cloud-Based Video Monitoring solutions platform is
                    comprised of industry executives with 35 years of
                    experience. Leveraging the knowledge of this team we can
                    assist SMB and Enterprise Businesses with their video needs.
                    Secure View will assist you in creating a positive
                    experience for your business so that you may focus on
                    growing your business.
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
export default connect(null, mapDispatchToProps)(SecurityIntro);
