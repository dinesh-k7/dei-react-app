import React, { ReactElement } from 'react';

import '../../../../assets/scss/styles.scss';
import climate_push_logo from '../../../../assets/images/climate_push_logo.svg';
import active_ego_logo from '../../../../assets/images/active_ego_logo.svg';
import './hero-container.scss';

const HeroContainer: React.FC<any> = ({ type }: any): ReactElement => {
  return (
    <section className="hero-section signup-form">
      <div className="hero-content">
        {type === 'business' ? (
          <img
            className="climate_push_logo"
            src={climate_push_logo}
            alt={`Climate push logo`}
          />
        ) : (
          ''
        )}
        {type === 'freelancer' ? (
          <img
            className="active_ego_logo"
            src={active_ego_logo}
            alt={`Active Ego logo`}
          />
        ) : (
          ''
        )}
        {type === 'personal' ? (
          <img
            className="climate_push_logo"
            src={climate_push_logo}
            alt={`Climate push personal logo`}
          />
        ) : (
          ''
        )}
        <div className="hero-title">
          {type === 'freelancer' ? (
            <h1>Register to advertise your services on Active-Ego.com</h1>
          ) : (
            ''
          )}
          {type === 'business' ? <h1>Business Registration</h1> : ''}
          {type === 'personal' ? <h1>Personal Registration</h1> : ''}
          {!type ? <h1>Sign Up</h1> : ''}
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
