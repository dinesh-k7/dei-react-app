import React, { Fragment, ReactElement } from 'react';

import DataSecurityIntro from './container/data-security-intro/data-security-intro';
import BrandingIntro from './container/branding-intro/branding-intro';
import SmbIntroContainer from './container/smb-intro/smb-intro';
import WdIntro from './container/wd-intro/wd-intro';
import SeoIntro from './container/seo-intro/seo-intro';
import AuditingIntro from './container/auditing-intro/auditing-intro';
import './smb-page.scss';

const LandingPage: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <div className="smb-page-grid">
        <SmbIntroContainer />
        <DataSecurityIntro />
        <BrandingIntro />
        <WdIntro />
        <SeoIntro />
        <AuditingIntro />
      </div>
      <div className="landing-border"></div>
    </Fragment>
  );
};

export default LandingPage;
