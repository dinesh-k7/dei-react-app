import React, { Fragment, ReactElement } from 'react';

import DataSecurityIntro from '../container/data-security-intro/data-security-intro';
import SiteSecurityIntro from '../container/site-security-intro/site-security-intro';
import './secure-page.scss';

const SecurePage: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <div className="secure-page-grid">
        <DataSecurityIntro />
        <SiteSecurityIntro />
      </div>
      <div className="landing-border"></div>
    </Fragment>
  );
};

export default SecurePage;
