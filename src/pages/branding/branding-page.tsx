import React, { Fragment, ReactElement } from 'react';

import GetQuoteComponent from '../../components/get-quote/get-quote.component';
import HeroContainer from './container/hero/hero-container';
import redVector from '../../assets/images/red_vector.svg';
import { brandingFormFields } from '../../constants';

const BrandingPage: React.FC = (): ReactElement => {
  const fromPage = 'branding';
  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Branding Quote Page',
    },
  });
  return (
    <Fragment>
      <HeroContainer />
      <GetQuoteComponent
        fromPage={fromPage}
        vimage={redVector}
        formFields={brandingFormFields}
      />
    </Fragment>
  );
};

export default BrandingPage;
