import React, { ReactElement } from 'react';

import startupTitle from '../../../../../assets/images/startup_title.svg';
import greenBlob from '../../../../../assets/images/startup_blob.svg';
import wdBlobImage from '../../../../../assets/images/wd_blob.svg';

import './hero-container.scss';

const HeroContainer: React.FC = (): ReactElement => {
  return (
    <section className="develop-page-intro">
      <div className="develop-page-container">
        <div className="develop-intro-image">
          <img className="green-blob" src={greenBlob} alt="Green vector" />
          <img className="title" src={startupTitle} alt="Startup title" />
        </div>
        <p className="develop-intro-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo expedita
          possimus quaerat saepe blanditiis ea, rem voluptatum ipsam architecto
          aperiam aut magnam minima itaque maiores doloribus, nemo ex reiciendis
          sequi!
        </p>
      </div>
      <div className="develop-service">
        <div className="service-one">
          <div className="develop-blob">
            <img src={wdBlobImage} alt="Develop blob" />
            <span className="develop-service-title">Develop</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
