import React, { Fragment, ReactElement } from 'react';

import startupTitle from '../../../../../assets/images/startup_title.svg';
import greenBlob from '../../../../../assets/images/startup_blob.svg';
import dsBlobImage from '../../../../../assets/images/ds_blob.svg';

import './hero-container.scss';

const HeroContainer: React.FC = (): ReactElement => {
  return (
    <section className="secure-page-intro">
      <div className="secure-page-container">
        <div className="secure-intro-image">
          <img className="green-blob" src={greenBlob} alt="Green vector" />
          <img className="title" src={startupTitle} />
        </div>
        <p className="secure-intro-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo expedita
          possimus quaerat saepe blanditiis ea, rem voluptatum ipsam architecto
          aperiam aut magnam minima itaque maiores doloribus, nemo ex reiciendis
          sequi!
        </p>
      </div>
      <div className="secure-service">
        <div className="service-one">
          <div className="secure-blob">
            <img src={dsBlobImage} />
            <span className="secure-service-title">Secure</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
