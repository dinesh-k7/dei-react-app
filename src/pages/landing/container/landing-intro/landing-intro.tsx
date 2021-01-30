import React, { ReactElement } from 'react';

import deiImage from '../../../../assets/images/digital_enterprise_initiative.svg';

import './landing-intro.scss';

const LandingIntroContainer: React.FC = (): ReactElement => {
  return (
    <section className="landing-intro">
      <div className="intro-image">
        <img src={deiImage} />
      </div>
      <div className="services"></div>
      <p className="intro-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris
      </p>
    </section>
  );
};

export default LandingIntroContainer;
