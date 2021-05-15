import React, { Fragment, ReactElement } from 'react';

import HeroContainer from './container/hero/hero-container';
import ContributorPlanComponent from '../../components/contributor-plan/contributor-plan.component';
import './contribution-page.scss';

const ContributionPage: React.FC = (): ReactElement => {
  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Contributor page',
    },
  });
  return (
    <Fragment>
      <HeroContainer />
      <ContributorPlanComponent />
    </Fragment>
  );
};

export default ContributionPage;
