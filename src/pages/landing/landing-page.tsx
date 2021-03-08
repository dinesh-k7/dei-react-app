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

const LandingPage: React.FC = (): ReactElement => {
  const history = useHistory();
  const smbRef = useRef(null);
  const enterpriseRef = useRef(null);
  const startupRef = useRef(null);
  const routeChange = (url) => {
    history.push(url);
  };

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
            <p>
              Finally, an easy-to-use platform to facilitate your business&apos;
              online ambitions. If we don&apos;t provide it, <br /> we will
              source the best providers for it.
            </p>
          </div>
        </div>
        <div className="service-blob">
          <div className="smb-blob">
            <span className="smb-services-landing" ref={smbRef}>
              <ul>
                <li>Data Security</li>
                <li>Branding</li>
              </ul>
            </span>
            <span
              onClick={() => routeChange('/smb')}
              onMouseOver={() => onMouseOverHandler(smbRef)}
              onMouseOut={() => onMouseOutHandler(smbRef)}
            >
              SMBs
            </span>
            <img onClick={() => routeChange('/smb')} src={coralVector} />
          </div>
          <div className="startup-blob">
            <img src={greenVector} onClick={() => routeChange('/startup')} />
            <span
              onClick={() => routeChange('/startup')}
              onMouseOver={() => onMouseOverHandler(startupRef)}
              onMouseOut={() => onMouseOutHandler(startupRef)}
            >
              Start-up’s
            </span>
            <span className="startup-services" ref={startupRef}>
              <ul>
                <li>Industry tips and tricks</li>
                <li>Get started with NWOhub™</li>
              </ul>
            </span>
          </div>
          <div className="enterprise-blob">
            <img
              src={enterpriseVector}
              onClick={() => routeChange('/enterprise')}
            />
            <span
              onClick={() => routeChange('/enterprise')}
              onMouseOver={() => onMouseOverHandler(enterpriseRef)}
              onMouseOut={() => onMouseOutHandler(enterpriseRef)}
            >
              Enterprise
            </span>
            <span
              className="enterprise-services"
              id="enterprise-services"
              ref={enterpriseRef}
            >
              <ul>
                <li>Data Security</li>
                <li>Cloud</li>
                <li>Connectivity</li>
                <li>Voice</li>
                <li>IOT</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
      <div className="landing-border"></div>
    </Fragment>
  );
};

export default LandingPage;
