import React, { Fragment, ReactElement } from 'react';

import SeoIntro from '../container/seo-intro/seo-intro';
import BrandingIntro from '../container/branding-intro/branding-intro';
import WdIntro from '../container/wd-intro/wd-intro';
import './develop-page.scss';

const DevelopPage: React.FC = (): ReactElement => {
  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Develop Page',
    },
  });
  return (
    <Fragment>
      <div className="develop-page-grid">
        {/* <HeroContainer /> */}
        <BrandingIntro />
        <WdIntro />
        <SeoIntro />
      </div>
    </Fragment>
  );
};

export default DevelopPage;
