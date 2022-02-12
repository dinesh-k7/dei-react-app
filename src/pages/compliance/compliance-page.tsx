import React, { Fragment, ReactElement } from 'react';

import HeroContainer from './container/hero/hero-container';
import CompliancePlanComponent from '../../components/compliance-plan/compliance-plan.component';
import './compliance-page.scss';

const CompliancePage: React.FC = (): ReactElement => {
  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'CompliancePage page',
    },
  });
  return (
    <Fragment>
      <HeroContainer />
      <CompliancePlanComponent />

      {/* <section className="compliance-section">
        <div className="nist-container">
          <div className="nist-title">
            <h1>
              NIST CSF/GDPR/PIPEDA/CMMC Compliance Manager Services Per Company
            </h1>
          </div>

          <div className="devices-section">
            <div className="device-detail">
              <div className="plan-title">
                <b>Individual</b>
                <b> {`| <10 Devices |`} </b>
              </div>
              <div className="plan-description">
                <p className="para-normal para-description">Monthly</p>
                <span className="price">{`$325.99 USD`}</span>
                <span className="price">+</span>
                <span className="price">$600 Setup fee</span>
                <br />
                <span className="para-normal">Billed for 36 months</span>
                <ul>
                  <li>Custom Compliance Portal</li>
                  <li>Ongoing network scans</li>
                  <li>Ongoing compliance reporting</li>
                  <li>Issue alerts & notifications</li>
                  <li>Industry-approved documentation</li>
                  <li className="feature">Annual Compliance Review</li>
                </ul>
              </div>
            </div>
            <div className="device-detail">
              <div className="plan-title">
                <b>Team</b>
                <b> {`| 11-100 Devices |`} </b>
              </div>
              <div className="plan-description">
                <p className="para-normal para-description">Monthly</p>
                <span className="price">{`$699.99 USD`}</span>
                <span className="price">+</span>
                <span className="price">$600 Setup fee</span>
                <br />
                <span className="para-normal">Billed for 36 months</span>
                <ul>
                  <li>Custom Compliance Portal</li>
                  <li>Ongoing network scans</li>
                  <li>Ongoing compliance reporting</li>
                  <li>Issue alerts & notifications</li>
                  <li>Industry-approved documentation</li>
                  <li className="feature">Semi-Annual Compliance Review</li>
                </ul>
              </div>
            </div>
            <div className="device-detail">
              <div className="plan-title">
                <b>Corporate</b>
                <b> {`| 101-350 Devices |`} </b>
              </div>
              <div className="plan-description">
                <p className="para-normal para-description">Monthly</p>
                <span className="price">{`$899.99 USD`}</span>
                <span className="price">+</span>
                <span className="price">$600 Setup fee</span>
                <br />
                <span className="para-normal">Billed for 36 months</span>
                <ul>
                  <li>Custom Compliance Portal</li>
                  <li>Ongoing network scans</li>
                  <li>Ongoing compliance reporting</li>
                  <li>Issue alerts & notifications</li>
                  <li>Industry-approved documentation</li>
                  <li className="feature">Quarterly Compliance Review</li>
                </ul>
              </div>
            </div>
            <div className="device-detail">
              <div className="plan-title">
                <b>Enterprise</b>
                <b> {`| 350+ Devices |`} </b>
              </div>
              <div className="plan-description">
                <p className="para-normal para-description">Monthly</p>
                <span className="price">{`$1299.99 USD`}</span>
                <span className="price">+</span>
                <span className="price">$600 Setup fee</span>
                <br />
                <span className="para-normal">Billed for 36 months</span>
                <ul>
                  <li>Custom Compliance Portal</li>
                  <li>Ongoing network scans</li>
                  <li>Ongoing compliance reporting</li>
                  <li>Issue alerts & notifications</li>
                  <li>Industry-approved documentation</li>
                  <li className="feature">Monthly Compliance Review</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="hippa-container">
          <div className="hippa-title">
            <h1> HIPAA Compliance Manager Services Per Practitioner </h1>
          </div>
          <div className="devices-section">
            <div className="device-detail">
              <div className="plan-title">
                <b>1-2</b>
                <b> {`Individual | < 10 Devices`} </b>
              </div>
              <div className="plan-description">
                <p className="para-normal para-description">Monthly</p>
                <span className="price">{`$325.99 USD`}</span>
                <span className="price">+</span>
                <span className="price">$600 Setup fee</span>
                <br />
                <span className="para-normal">Billed for 36 months</span>
                <ul>
                  <li>Custom Compliance Portal</li>
                  <li>Ongoing network scans</li>
                  <li>Ongoing compliance reporting</li>
                  <li>Issue alerts & notifications</li>
                  <li>Industry-approved documentation</li>
                  <li className="feature">Annual Compliance Review</li>
                </ul>
              </div>
            </div>
            <div className="device-detail">
              <div className="plan-title">
                <b>3-5</b>
                <b> {`Individual | < 50 Devices`} </b>
              </div>
              <div className="plan-description">
                <p className="para-normal para-description">Monthly</p>
                <span className="price">{`$649.99 USD`}</span>
                <span className="price">+</span>
                <span className="price">$600 Setup fee</span>
                <br />
                <span className="para-normal">Billed for 36 months</span>
                <ul>
                  <li>Custom Compliance Portal</li>
                  <li>Ongoing network scans</li>
                  <li>Ongoing compliance reporting</li>
                  <li>Issue alerts & notifications</li>
                  <li>Industry-approved documentation</li>
                  <li className="feature">Semi-Annual Compliance Review</li>
                </ul>
              </div>
            </div>
            <div className="device-detail">
              <div className="plan-title">
                <b>6-10</b>
                <b> {`Individual | < 100 Devices`} </b>
              </div>
              <div className="plan-description">
                <p className="para-normal para-description">Monthly</p>
                <span className="price">{`$799.99 USD`}</span>
                <span className="price">+</span>
                <span className="price">$600 Setup fee</span>
                <br />
                <span className="para-normal">Billed for 36 months</span>
                <ul>
                  <li>Custom Compliance Portal</li>
                  <li>Ongoing network scans</li>
                  <li>Ongoing compliance reporting</li>
                  <li>Issue alerts & notifications</li>
                  <li>Industry-approved documentation</li>
                  <li className="feature">Quarterly Compliance Review</li>
                </ul>
              </div>
            </div>
            <div className="device-detail">
              <div className="plan-title">
                <b>11+</b>
                <b> {`Individual | > 100 Devices`} </b>
              </div>
              <div className="plan-description">
                <p className="para-normal para-description">Monthly</p>
                <span className="price">{`$1299.99 USD`}</span>
                <span className="price">+</span>
                <span className="price">$600 Setup fee</span>
                <br />
                <span className="para-normal">Billed for 36 months</span>
                <ul>
                  <li>Custom Compliance Portal</li>
                  <li>Ongoing network scans</li>
                  <li>Ongoing compliance reporting</li>
                  <li>Issue alerts & notifications</li>
                  <li>Industry-approved documentation</li>
                  <li className="feature">Monthly Compliance Review</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Fragment>
  );
};

export default CompliancePage;
