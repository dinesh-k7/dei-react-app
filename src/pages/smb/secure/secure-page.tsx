import React, { Fragment, ReactElement } from 'react';

import DataSecurityIntro from '../container/data-security-intro/data-security-intro';
import SiteSecurityIntro from '../container/site-security-intro/site-security-intro';
import './secure-page.scss';

const SecurePage: React.FC = (): ReactElement => {
  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Secure Page',
    },
  });

  return (
    <Fragment>
      <div className="secure-page-grid">
        {/* <HeroContainer /> */}
        <DataSecurityIntro />
        <SiteSecurityIntro />
      </div>
      <div className="landing-border"></div>
    </Fragment>
  );
};

export default SecurePage;
