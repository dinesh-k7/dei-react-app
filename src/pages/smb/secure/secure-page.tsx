import React, { Fragment, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import DataSecurityIntro from '../container/data-security-intro/data-security-intro';
import SiteSecurityIntro from '../container/site-security-intro/site-security-intro';
import './secure-page.scss';

const SecurePage: React.FC = (props: any): ReactElement => {
  const { pathname } = useLocation();
  console.log('pathname',pathname);
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
      {/* <HeroContainer /> */}
      <div className="secure-page-grid">
        {pathname.indexOf('data-sentinels') !== -1 ? <DataSecurityIntro /> : ''}
        {pathname.indexOf('sentinels-club') !== -1 ? <DataSecurityIntro /> : ''}
        {pathname.indexOf('site-sentinels') !== -1 ? <SiteSecurityIntro /> : ''}
        {pathname.indexOf('secure') !== -1 ? (
          <Fragment>
            <DataSecurityIntro /> <SiteSecurityIntro />
          </Fragment>
        ) : (
          ''
        )}
      </div>
    </Fragment>
  );
};

export default SecurePage;
