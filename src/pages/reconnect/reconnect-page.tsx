import React, { Fragment, ReactElement } from 'react';

import ReconnectQuoteComponent from '../../components/reconnect-quote/reconnect-quote.component';
import redVector from '../../assets/images/red_vector.svg';
import { websiteDevelopmentFormData } from '../../constants/form-data/website-development-form';
import HeroContainer from './container/hero/hero-container';

const ReconnectPage: React.FC = (): ReactElement => {
  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Reconnect form page',
    },
  });
  return (
    <Fragment>
      <HeroContainer />
      <ReconnectQuoteComponent
        vimage={redVector}
        formFields={websiteDevelopmentFormData}
      />
    </Fragment>
  );
};

export default ReconnectPage;
