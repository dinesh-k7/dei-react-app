import React, { Fragment, ReactElement } from 'react';

import HeroContainer from './container/hero/hero-container';
import './enterprise-page.scss';

const EnterprisePage: React.FC = (props: any): ReactElement => {
  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Enterprise Page',
    },
  });
  return (
    <Fragment>
      <HeroContainer />
      <div className="bottom-border"></div>
    </Fragment>
  );
};

export default EnterprisePage;
