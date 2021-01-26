import React, { Fragment, ReactElement } from 'react';

import GetQuoteComponent from '../../components/get-quote/get-quote.component';
import { dataSecurityFormFields } from '../../constants';
import HeroContainer from './container/hero/hero-container';

const DataSecurityPage: React.FC = (): ReactElement => {
  const fromPage = 'data-security';
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
