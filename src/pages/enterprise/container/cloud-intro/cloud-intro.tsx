import React, { Fragment, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import '../../../../assets/scss/styles.scss';

import heroImage from '../../../../assets/images/data_security_dei_shield.svg';

import blueBlob from '../../../../assets/images/service_blue.svg';

const CloudIntro: React.FC<any> = (): ReactElement => {
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
              <h1>Cloud</h1>
              <div className="hero-mobile-image">
                <img src={heroImage} alt="consultation Image" />
              </div>
              <div className="hero-subtitle-container enterprise-service">
                <div className="features">
                  <img src={blueBlob} alt="sdwan" />
                  <h3 onClick={() => routeChange('/enterprise/cloud-quote')}>
                    Colocation
                  </h3>
                  <ChevronRightIcon
                    onClick={() => routeChange('/enterprise/cloud-quote')}
                    className="chevron-right"
                  />
                  <p>
                    DEI™ networks with
                    <a href="https://otg.upstack.com/">
                      1400 carrier-neutral colocation facilities around the
                      globe
                    </a>
                    (and growing), available for you to offer to your customers.
                    Our exclusive data center locator tool is available for you
                    to find the best data center to meet your customer’s needs.
                    <br />
                    <a href="https://otg.upstack.com/">Find Datacenter Now</a>
                  </p>
                </div>
                <div className="features">
                  <img src={blueBlob} alt="blue blob" />
                  <h3 onClick={() => routeChange('/enterprise/cloud-quote')}>
                    Public Cloud
                  </h3>
                  <ChevronRightIcon
                    onClick={() => routeChange('/enterprise/cloud-quote')}
                    className="chevron-right"
                  />
                  <p>
                    Your customers want public cloud solutions like AWS and
                    Azure. Many partners struggle to monetize these products. 
                    DEI and partner portfolio of partners not only helps deliver
                    these offerings but can also show you a model that will
                    optimize your profitability on these deals. 
                  </p>
                </div>
                <div className="features">
                  <img src={blueBlob} alt="blue blob" />
                  <h3 onClick={() => routeChange('/enterprise/cloud-quote')}>
                    Backup & Disaster Recovery Services
                  </h3>
                  <ChevronRightIcon
                    onClick={() => routeChange('/enterprise/cloud-quote')}
                    className="chevron-right"
                  />
                  <p>
                    Not a disaster recovery but simply data protection. Critical
                    for organizations to understand their data footprints and
                    disaster recovery exposure. Once you understand the total
                    footprint of your data and critical services we can define
                    custom solutions for your backup and DR needs that meet your
                    budget goals while providing the most versatility and
                    reliability. Whether your data is one terabyte or hundreds
                    of terabytes we can provide a solution to meet your needs.
                  </p>
                </div>

                <div className="features">
                  <img src={blueBlob} alt="blue blob" />
                  <h3 onClick={() => routeChange('/enterprise/cloud-quote')}>
                    Storage
                  </h3>
                  <ChevronRightIcon
                    onClick={() => routeChange('/enterprise/cloud-quote')}
                    className="chevron-right"
                  />
                  <p>
                    Cloud storage is a critical component of cloud computing,
                    holding the information used by applications. Big data
                    analytics, data warehouses, Internet of Things, databases,
                    and backup and archive applications all rely on some form of
                    data storage architecture. Cloud storage is typically more
                    reliable, scalable, and secure than traditional on-premises
                    storage systems. 
                  </p>
                  <p>
                    DEI™ offers a complete range of cloud storage services to
                    support both application and archival compliance
                    requirements. Select from object, file, and block storage
                    services as well as cloud data migration options to start
                    designing the foundation of your cloud IT environment.
                  </p>
                </div>
                <div className="features">
                  <img src={blueBlob} alt="blue blob" />
                  <h3>Virtual Servers</h3>
                  <ChevronRightIcon className="chevron-right" />
                  <p>
                    Linux, Windows Server, SQL Server, Oracle, IBM, and SAP, Our
                    selection of Virtual Machines gives you the flexibility of
                    virtualization for nearly all computing
                    solutions—development and testing, running applications,
                    even extending your datacenter. The freedom of open-source
                    software customized for your need. Just another rack in your
                    datacenter, giving you the power to deploy in minutes
                    instead of weeks. 
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

export default CloudIntro;
