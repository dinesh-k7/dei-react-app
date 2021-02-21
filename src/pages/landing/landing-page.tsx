import React, { Fragment, ReactElement } from 'react';

import { useHistory } from 'react-router-dom';

import './landing-page.scss';
import deiImage from '../../assets/images/dei.svg';
import deiMobileImage from '../../assets/images/dei-mobile.svg';

import greenVector from '../../assets/images/green_vector.svg';
import greyVector from '../../assets/images/grey_vector.svg';
import coralVector from '../../assets/images/coral_vector.svg';
import blueVector from '../../assets/images/service_blue.svg';
import yellowVector from '../../assets/images/yellow_vector.svg';

const LandingPage: React.FC = (): ReactElement => {
  const history = useHistory();
  const routeChange = (url) => {
    history.push(url);
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>
        <div className="service-blob">
          <div className="smb-blob">
            <span onClick={() => routeChange('/smb')}> SMB’s </span>
            <img src={coralVector} />
          </div>
          <div className="startup-blob">
            <img src={greenVector} />
            <span onClick={() => routeChange('/startup')}>Start-up’s </span>
          </div>
          <div className="enterprise-blob">
            <img src={greyVector} />
            <span onClick={() => routeChange('/enterprise')}> Enterprise </span>
          </div>
        </div>
      </div>
      <div className="landing-border"></div>
    </Fragment>
  );
};

export default LandingPage;
