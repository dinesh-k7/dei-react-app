import React, { Fragment, ReactElement } from 'react';

import { useHistory } from 'react-router-dom';

import './landing-page.scss';
import deiImage from '../../assets/images/dei.svg';
import deiMobileImage from '../../assets/images/dei-mobile.svg';

import greenVector from '../../assets/images/green_vector.svg';
import enterpriseVector from '../../assets/images/enterprise_vector.svg';
import coralVector from '../../assets/images/coral_vector.svg';
import blueVector from '../../assets/images/service_blue.svg';
import yellowVector from '../../assets/images/yellow_vector.svg';
import { useRef } from 'react';

import FadeIn from 'react-fade-in';
import SectionLayoutComponent from '../../components/section-layout/section-layout.component';
import { brandingSection } from './constants/branding';
import { dataSecuritySection } from './constants/data-security';
import { nwoHubSection } from './constants/nwo-hub';
import { seoSection } from './constants/seo';
import { websiteDevelopmentSection } from './constants/website-development';
import { startupKitsSection } from './constants/startup-kits';
import { ITServicesSection } from './constants/it-services';

const LandingPage: React.FC = (): ReactElement => {
  const history = useHistory();
  const smbRef = useRef(null);
  const enterpriseRef = useRef(null);
  const startupRef = useRef(null);
  const routeChange = (url) => {
    history.push(url);
  };

  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Landing Page',
    },
  });

  const onMouseOverHandler = (ref: any) => {
    if (ref && ref.current) {
      ref.current.classList.toggle('hover-intro-text');
    }
  };
  const onMouseOutHandler = (ref: any) => {
    if (ref && ref.current) {
      ref.current.classList.toggle('hover-intro-text');
    }
  };

  return (
    <Fragment>
      <div className="landing-page-grid">
        <div className="landing-intro">
          <div className="image-container">
            <img
              className="yellow-blob"
              src={yellowVector}
              alt="Yellow vector"
            />
            <img
              className="dei-image"
              src={deiImage}
              alt="Digital Enterprise Initiative"
            />
            <img
              className="dei-mobile-image"
              src={deiMobileImage}
              alt="Digital Enterprise Initiative"
            />
            <img className="blue-vector" src={blueVector} alt="blue vector" />
          </div>

          <div className="intro-text">
            <FadeIn>
              <p>
                Broad scope single-source provider to facilitate your digital
                enterprise ambitions. Until we provide it, we source the best
                providers for it.
              </p>
            </FadeIn>
          </div>
        </div>
        <div className="service-blob">
          <div className="smb-blob">
            <span className="smb-services-landing" ref={smbRef}>
              <ul>
                <li>Secure</li>
                <li>Develop</li>
              </ul>
            </span>
            <span
              onClick={() => routeChange('/smb')}
              onMouseOver={() => onMouseOverHandler(smbRef)}
              onMouseOut={() => onMouseOutHandler(smbRef)}
            >
              SMBs
            </span>
            <img
              onClick={() => routeChange('/smb')}
              src={coralVector}
              alt="Coral vector"
            />
          </div>
          <div className="startup-blob">
            <img
              src={greenVector}
              onClick={() => routeChange('/startup')}
              alt="Startup blob"
            />
            <span
              onClick={() => routeChange('/startup')}
              onMouseOver={() => onMouseOverHandler(startupRef)}
              onMouseOut={() => onMouseOutHandler(startupRef)}
            >
              Start-Up
            </span>
            <span className="startup-services" ref={startupRef}>
              <ul>
                <li>Start-Up Kits</li>
                <li>Certifications</li>
                <li>Branding</li>
                <li>NWOhub™</li>
              </ul>
            </span>
          </div>
          <div className="enterprise-blob">
            <img
              alt="Enterprise blob"
              src={enterpriseVector}
              onClick={() => routeChange('/enterprise')}
            />
            <span
              onClick={() => routeChange('/enterprise')}
              onMouseOver={() => onMouseOverHandler(enterpriseRef)}
              onMouseOut={() => onMouseOutHandler(enterpriseRef)}
              className="service-title"
            >
              Enterprise
            </span>
            <span
              className="enterprise-services"
              id="enterprise-services"
              ref={enterpriseRef}
            >
              <ul>
                <li>Data Sentinels</li>
                <li>Cloud</li>
                <li>Plexus</li>
                <li>Voice</li>
                <li>IOT</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
      {/** Branding section starts */}
      <div className="branding-section">
        <SectionLayoutComponent {...brandingSection} />
      </div>
      {/**Branding section ends */}

      {/** Data security section starts */}
      <div className="data-security-section">
        <SectionLayoutComponent {...dataSecuritySection} />
      </div>
      {/**Data security section ends */}

      {/** NWOhub section starts */}
      <div className="nwo-hub-section">
        <SectionLayoutComponent {...nwoHubSection} />
      </div>
      {/** NWOhub section ends */}

      {/** SEO section starts */}
      <div className="seo-section">
        <SectionLayoutComponent {...seoSection} />
      </div>
      {/** SEO section ends */}

      {/** Website Development section starts */}
      <div className="website-section">
        <SectionLayoutComponent {...websiteDevelopmentSection} />
      </div>
      {/** Website Development section ends */}

      {/** Startup Kit section starts */}
      <div className="startup-section">
        <SectionLayoutComponent {...startupKitsSection} />
      </div>
      {/** Startup Kit section ends */}

      {/** IT Services section starts */}
      <div className="it-service-section">
        <SectionLayoutComponent {...ITServicesSection} />
      </div>
      {/** IT Services section ends */}
    </Fragment>
  );
};

export default LandingPage;
