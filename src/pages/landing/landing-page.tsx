import React, { Fragment, ReactElement } from 'react';

import DataSecurityIntro from './container/data-security-intro/data-security-intro';
import BrandingIntro from './container/branding-intro/branding-intro';
import LandingIntro from './container/landing-intro/landing-intro';
import './landing-page.scss';

const LandingPage: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <div className="landing-page-grid">
        <LandingIntro />
        <DataSecurityIntro />
        <BrandingIntro />
      </div>
      <div className="landing-border"></div>
    </Fragment>
  );
};

export default LandingPage;
