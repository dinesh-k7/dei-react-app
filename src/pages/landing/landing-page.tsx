import React, { Fragment, ReactElement, useState } from 'react';
import { useRef } from 'react';

import VideoLibraryTwoToneIcon from '@mui/icons-material/VideoLibraryTwoTone';
import { isMobile } from 'react-device-detect';

import './landing-page.scss';
import deiImage from '../../assets/images/dei.svg';
import deiMobileImage from '../../assets/images/dei-mobile.svg';

import { ReactComponent as NWOBlob } from '../../assets/images/service-one.svg';
import { ReactComponent as ITServicesBlob } from '../../assets/images/service-two.svg';
import { ReactComponent as DataSecurityBlob } from '../../assets/images/service-three.svg';
import { ReactComponent as WebsiteDevelopmentBlob } from '../../assets/images/service-four.svg';
import { ReactComponent as MarketingBlob } from '../../assets/images/service-five.svg';
import { ReactComponent as BrandingBlob } from '../../assets/images/service-six.svg';
import { ReactComponent as StartupKitBlob } from '../../assets/images/service-seven.svg';
import yellowVector from '../../assets/images/yellow_vector.svg';
import SectionLayoutComponent from '../../components/section-layout/section-layout.component';
import { brandingSection } from './content/branding';
import { dataSecuritySection } from './content/data-security';
import { nwoHubSection } from './content/nwo-hub';
import { seoSection } from './content/seo';
import { websiteDevelopmentSection } from './content/website-development';
import { startupKitsSection } from './content/startup-kits';
import { ITServicesSection } from './content/it-services';
import AlertDialogComponent from '../../components/common/dialog/alert-dialog.component';
import { VIMEO_VIDEOIDS } from '../../constants/vimeo-videoids';

const LandingPage: React.FC = (props: any): ReactElement => {
  const nwoRef = useRef(null);
  const itServicesRef = useRef(null);
  const dataSecurityRef = useRef(null);
  const wdRef = useRef(null);
  const marketingRef = useRef(null);
  const brandingRef = useRef(null);
  const startupKitRef = useRef(null);

  const scrollToElement = (ref) => {
    return ref && ref.current && ref.current.scrollIntoView();
  };

  const [openVideo, setOpenVideo] = useState(false);
  const handleClick = () => {
    setOpenVideo(true);
  };

  const handleClose = () => {
    setOpenVideo(false);
  };

  // Google page event track  <Vimeo video="530599390" autoplay responsive />
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Landing Page',
    },
  });
  const rndInt = Math.floor(Math.random() * 5) + 1;

  const rotate: any = {
    '--time': '20s',
    '--amount': rndInt,
    '--fill': '#56cbb9',
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
          </div>

          <div className="intro-text">
            <p>
              Welcome To Internet 4.0 the AI Neural Network Data As A Platform & XaaS Cybersecurity
              Provider. Managed Network Services, Branding Services, Data
              Compliance Manager, and DEI® Decentralized Autonomous Organizations are
              are ready for you to convert your business into a DEI® DAO. Your one-stop shop for all things IT.{' '}
            </p>

            <div
              style={{ cursor: 'pointer !important', width: 'fit-content' }}
              onClick={() => handleClick()}
            >
              <VideoLibraryTwoToneIcon
                style={{
                  color: '#453396',
                  cursor: 'pointer',
                  fontSize: '42px',
                }}
              />
            </div>
          </div>
        </div>
        <div className="service-blob">
          <div
            className="service-row-one"
            onClick={() => scrollToElement(nwoRef)}
          >
            <div style={rotate} className="tk-blob">
              <NWOBlob />
            </div>

            <span>DEI Portal</span>
          </div>

          <div
            className="service-row-two"
            id="IT"
            onClick={() => scrollToElement(itServicesRef)}
          >
            <div style={rotate} className="tk-blob">
              <ITServicesBlob />
            </div>
            <span>I.T. Plexus</span>
          </div>
          <div
            className="service-row-three"
            onClick={() => scrollToElement(dataSecurityRef)}
          >
            <div style={rotate} className="tk-blob">
              <DataSecurityBlob />
            </div>
            <span>Data Security</span>
          </div>
          <div className="service-row-four">
            <div className="wd-blob" onClick={() => scrollToElement(wdRef)}>
              <div style={rotate} className="tk-blob">
                <WebsiteDevelopmentBlob />
              </div>
              <span>DAO Builder™ </span>
            </div>

            <div
              className="seo-blob"
              onClick={() => scrollToElement(marketingRef)}
            >
              <div style={rotate} className="tk-blob">
                <MarketingBlob />
              </div>
              <span>Marketing</span>
            </div>
          </div>
          <div
            className="service-row-five"
            onClick={() => scrollToElement(brandingRef)}
          >
            <div style={rotate} className="tk-blob">
              <BrandingBlob />
            </div>
            <span> Branding</span>
          </div>
          <div
            className="service-row-six"
            onClick={() => scrollToElement(startupKitRef)}
          >
            <div style={rotate} className="tk-blob">
              <StartupKitBlob />
            </div>
            <span> Start-Up Kits</span>
          </div>
        </div>
      </div>

      {openVideo ? (
        <AlertDialogComponent
          fromPage={`landing`}
          title={``}
          description={``}
          isShow={openVideo}
          handleClose={handleClose}
          videoId={VIMEO_VIDEOIDS.LANDING_PAGE_VIDEO_ID}
        />
      ) : (
        ''
      )}

      {isMobile ? (
        <>
          <div className="nwo-hub-section" ref={nwoRef}>
            <SectionLayoutComponent {...nwoHubSection} />
          </div>

          <div className="branding-section" ref={brandingRef}>
            <SectionLayoutComponent {...brandingSection} />
          </div>

          <div className="seo-section" ref={marketingRef}>
            <SectionLayoutComponent {...seoSection} />
          </div>

          <div className="data-security-section" ref={dataSecurityRef}>
            <SectionLayoutComponent {...dataSecuritySection} />
          </div>

          {/** Website Development section starts */}
          <div className="website-section" ref={wdRef}>
            <SectionLayoutComponent {...websiteDevelopmentSection} />
          </div>
          {/** Website Development section ends */}

          <div className="it-service-section" ref={itServicesRef}>
            <SectionLayoutComponent {...ITServicesSection} />
          </div>

          <div className="startup-section" ref={startupKitRef}>
            <SectionLayoutComponent {...startupKitsSection} />
          </div>
        </>
      ) : (
        <>
          {/** Data security section starts */}
          <div className="data-security-section" ref={dataSecurityRef}>
            <SectionLayoutComponent {...dataSecuritySection} />
          </div>
          {/**Data security section ends */}

          {/** DEI Portal section starts */}
          <div className="nwo-hub-section" ref={nwoRef}>
            <SectionLayoutComponent {...nwoHubSection} />
          </div>
          {/** DEI Portal section ends */}

          {/** Branding section starts */}
          <div className="branding-section" ref={brandingRef}>
            <SectionLayoutComponent {...brandingSection} />
          </div>
          {/**Branding section ends */}

          {/** Website Development section starts */}
          <div className="website-section" ref={wdRef}>
            <SectionLayoutComponent {...websiteDevelopmentSection} />
          </div>
          {/** Website Development section ends */}

          {/** IT Services section starts */}
          <div
            id="it-services"
            className="it-service-section"
            ref={itServicesRef}
          >
            <SectionLayoutComponent {...ITServicesSection} />
          </div>
          {/** IT Services section ends */}

          {/** SEO section starts */}
          <div className="seo-section" ref={marketingRef}>
            <SectionLayoutComponent {...seoSection} />
          </div>
          {/** SEO section ends */}

          {/** Startup Kit section starts */}
          <div className="startup-section" ref={startupKitRef}>
            <SectionLayoutComponent {...startupKitsSection} />
          </div>
          {/** Startup Kit section ends */}
        </>
      )}
    </Fragment>
  );
};

export default LandingPage;
