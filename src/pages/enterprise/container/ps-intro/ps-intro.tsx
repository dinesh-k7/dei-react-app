import React, { Fragment, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import '../../../../assets/scss/styles.scss';
import '../../container/hero/hero-container.scss';

import heroImage from '../../../../assets/images/data_security_dei_shield.svg';

import blueBlob from '../../../../assets/images/service_blue.svg';
import { setServiceAction } from '../../../../actions/enterprise';

const PSIntro: React.FC<any> = (props: any): ReactElement => {
  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Enterprise Professional Service Page',
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
              <h1>Professional Services</h1>
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
                        'IT Consulting Services',
                      )
                    }
                  >
                    IT Consulting Services
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange(
                        '/enterprise/sdwan-service',
                        'IT Consulting Services',
                      )
                    }
                    className="chevron-right"
                  />
                  <p>
                    Optimizing your enterprise&apos;s efficiency is essential to
                    compete in today&apos;s world, no matter your size. The DEI™
                    provides IT consulting services to companies looking for
                    more productivity and profitability. We can help you
                    identify the unnecessary redundancies in your process and
                    cost. Our knowledge and expertise can make your technology
                    work for you!
                  </p>
                  {/* <p>
                    The most successful companies will acknowledge the best ways
                    to get the most out of the resources that are available to
                    them. If your company is looking to enhance efficiency, and
                    with it, boost organizational bottom-line profits, consider
                    our professional IT consulting service. We have the
                    knowledge and the expertise necessary to make your
                    technology work best for you.
                  </p> */}
                </div>

                <div className="features">
                  <img src={blueBlob} alt="blue blob" />
                  <h3
                    onClick={() =>
                      routeChange('/enterprise/ucaas-service', 'IT Solutions')
                    }
                  >
                    IT Solutions
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange('/enterprise/ucaas-service', 'IT Solutions')
                    }
                    className="chevron-right"
                  />
                  <p>
                    Gain access to monitoring services and traditional IT
                    support at a predictable monthly subscription rate
                    customized for your unique enterprise needs.
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
export default connect(null, mapDispatchToProps)(PSIntro);
