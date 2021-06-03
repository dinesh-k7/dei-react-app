import React, { Fragment, ReactElement } from 'react';

import GetQuoteComponent from '../../components/get-quote/get-quote.component';
import { dataSecurityFormFields } from '../../constants/form-data/data-security-form';
import HeroContainer from './container/hero/hero-container';

const DataSecurityPage: React.FC = (): ReactElement => {
  const fromPage = 'data-security';

  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Data Security Quote Page',
    },
  });
  return (
    <Fragment>
      <HeroContainer />
      <GetQuoteComponent
        fromPage={fromPage}
        formFields={dataSecurityFormFields}
      />
    </Fragment>
  );
};

export default DataSecurityPage;
