import React, { Fragment, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import '../../../../assets/scss/styles.scss';
import '../../container/hero/hero-container.scss';

import heroImage from '../../../../assets/images/data_security_dei_shield.svg';

import blueBlob from '../../../../assets/images/service_blue.svg';
import { setServiceAction } from '../../../../actions/enterprise';

const CloudIntro: React.FC<any> = (props: any): ReactElement => {
  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Enterprise Cloud Service Page',
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
              <h1>Cloud</h1>
              <div className="hero-mobile-image">
                <img src={heroImage} alt="consultation Image" />
              </div>
              <div className="hero-subtitle-container enterprise-service">
                <div className="features">
                  <img src={blueBlob} alt="sdwan" />
                  <h3
                    onClick={() =>
                      routeChange('/enterprise/cloud-quote', 'Colocation')
                    }
                  >
                    Colocation
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange('/enterprise/cloud-quote', 'Colocation')
                    }
                    className="chevron-right"
                  />
                  <p>
                    DEI™ networks with 1400 carrier-neutral colocation
                    facilities around the globe (and growing), available for you
                    to offer to your customers. Our exclusive data center
                    locator tool is available for you to find the best data
                    center to meet your customer’s needs.
                    <br />
                    <br />
                    <a href="#">Find Datacenter Now</a>
                  </p>
                </div>
                <div className="features">
                  <img src={blueBlob} alt="blue blob" />
                  <h3
                    onClick={() =>
                      routeChange('/enterprise/cloud-quote', 'Public Cloud')
                    }
                  >
                    Public Cloud
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange('/enterprise/cloud-quote', 'Public Cloud')
                    }
                    className="chevron-right"
                  />
                  <p>
                    Providing your customers with public cloud solutions like
                    AWS® and Azure® is only the beginning. The DEI™ and partner
                    portfolio can show you a model that will optimize your
                    profitablity in these deals.
                  </p>
                </div>
                <div className="features">
                  <img src={blueBlob} alt="blue blob" />
                  <h3
                    onClick={() =>
                      routeChange(
                        '/enterprise/cloud-quote',
                        'Backup & Disaster Recovery Services',
                      )
                    }
                  >
                    Backup & Disaster Recovery Services
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange(
                        '/enterprise/cloud-quote',
                        'Backup & Disaster Recovery Services',
                      )
                    }
                    className="chevron-right"
                  />
                  <p>
                    There is a big difference between disaster recovery and DEI™
                    back-up and data preservation. You should understand your
                    organization&apos;s data footprint and exposure. When you do
                    we can then define custom solutions to meet your back-up and
                    recovery needs. Our solutions meet your budget goals and
                    provide you with optimal versatility and reliability. From
                    terabytes to petabites we can provide the best solutions
                    that meet your needs.
                  </p>
                </div>

                <div className="features">
                  <img src={blueBlob} alt="blue blob" />
                  <h3
                    onClick={() =>
                      routeChange('/enterprise/cloud-quote', 'Storage')
                    }
                  >
                    Storage
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange('/enterprise/cloud-quote', 'Storage')
                    }
                    className="chevron-right"
                  />

                  <div className="feature-description">
                    <p>A critical component of cloud computing is storage.</p>
                    Storing data in the Cloud offers increase:
                    <br />
                    <ul>
                      <li>Reliability</li>
                      <li>Scalability</li>
                      <li>Security</li>
                    </ul>
                    <br />
                    Above the traditional on-premises storage systems.
                    <br />
                    <br />
                    The DEI™ offers a broad scope of storage services for your
                    application&apos;s archival requirements so you remain
                    compliant. with:
                    <br />
                    <ul>
                      <li>Object</li>
                      <li>File</li>
                      <li>Block storage services</li>
                      <li>Cloud data migration</li>
                    </ul>
                    <br />
                    You can start designing the foundation of your cloud IT
                    environment today.
                  </div>
                </div>
                <div className="features">
                  <img src={blueBlob} alt="blue blob" />
                  <h3
                    onClick={() =>
                      routeChange('/enterprise/cloud-quote', 'Virtual Servers')
                    }
                  >
                    Virtual Servers
                  </h3>
                  <ChevronRightIcon
                    className="chevron-right"
                    onClick={() =>
                      routeChange('/enterprise/cloud-quote', 'Virtual Servers')
                    }
                  />
                  <div className="feature-description">
                    The DEI™ gives you the flexibility of virtualization for
                    nearly all computing solutions:
                    <br />
                    <ul>
                      <li>Linux</li>
                      <li>Windows Server</li>
                      <li>SQL Server</li>
                      <li>Oracle</li>
                      <li>IBM</li>
                      <li>SAP</li>
                    </ul>
                    <br />
                    Our selection of Virtual Machines —development and testing,
                    running applications, even extending your data center.
                    Combined with the freedom of open-source software customized
                    for your need. You can deploy in minutes instead of weeks.
                    Manifest Digital Destiny with The DEI™
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
export default connect(null, mapDispatchToProps)(CloudIntro);
