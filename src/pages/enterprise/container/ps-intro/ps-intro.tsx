import React, { Fragment, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import '../../../../assets/scss/styles.scss';

import heroImage from '../../../../assets/images/data_security_dei_shield.svg';

import blueBlob from '../../../../assets/images/service_blue.svg';

const PSIntro: React.FC<any> = (): ReactElement => {
  const history = useHistory();
  const routeChange = (url) => {
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
                  <h3 onClick={() => routeChange('/enterprise/sdwan-service')}>
                    IT Consulting Services
                  </h3>
                  <ChevronRightIcon
                    onClick={() => routeChange('/enterprise/sdwan-service')}
                    className="chevron-right"
                  />
                  <p>
                    Enterprises of all sizes need to be efficient to be
                    competitive. We provide comprehensive IT Consulting services
                    to companies that are looking to leverage their company’s IT
                    into higher degrees of productivity, and ultimately,
                    profitability. In order to take your business to the next
                    level, you’ll need to cut out the redundancies in process
                    and in cost.
                  </p>
                  <p>
                    The most successful companies will acknowledge the best ways
                    to get the most out of the resources that are available to
                    them. If your company is looking to enhance efficiency, and
                    with it, boost organizational bottom-line profits, consider
                    our professional IT consulting service. We have the
                    knowledge and the expertise necessary to make your
                    technology work best for you.
                  </p>
                </div>

                <div className="features">
                  <img src={blueBlob} alt="blue blob" />
                  <h3 onClick={() => routeChange('/enterprise/ucaas-service')}>
                    IT Solutions
                  </h3>
                  <ChevronRightIcon
                    onClick={() => routeChange('/enterprise/ucaas-service')}
                    className="chevron-right"
                  />
                  <p>
                    IT Solutions practice provides access to traditional IT
                    support and monitoring services, infrastructure hardware and
                    software solutions as well as a unique backup and disaster
                    recovery capabilities all at a predictable monthly
                    subscription rate and customized to your unique business
                    needs, simplifying how technology is purchased.
                  </p>
                </div>
                <div className="features">
                  <img src={blueBlob} alt="blue blob" />
                  <h3 onClick={() => routeChange('/enterprise/ucaas-service')}>
                    Managed Hosting Services
                  </h3>
                  <ChevronRightIcon
                    onClick={() => routeChange('/enterprise/ucaas-service')}
                    className="chevron-right"
                  />
                  <p>
                    We add availability and recovery services on top of our
                    managed cloud foundation to further protect data and
                    applications against component failure and disasters. Next,
                    we provide adjustable levels of security and compliance
                    services that scale to match organizations’ evolving
                    business requirements. Application support services such as
                    database administration (DBA) are available to further
                    customize our customers’ cloud environments. Finally, we
                    offer a full suite of consulting Services to help you plan,
                    migrate and manage your cloud infrastructure.
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

export default PSIntro;
