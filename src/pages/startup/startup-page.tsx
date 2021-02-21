import React, { Fragment, ReactElement } from 'react';

import ConsultationIntro from './container/consultation-intro/consultation-intro';
import StartupIntroContainer from './container/startup-intro/startup-intro';
import './startup-page.scss';

const StartUpPage: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <div className="startup-page-grid">
        <StartupIntroContainer />
        <ConsultationIntro />
      </div>
      <div className="landing-border"></div>
    </Fragment>
  );
};

export default StartUpPage;
