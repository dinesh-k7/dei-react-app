import React, { Fragment, ReactElement } from 'react';

import GetQuoteComponent from '../../components/get-quote/get-quote.component';
import HeroContainer from './container/hero-conatiner';

const DataSecurityPage: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <HeroContainer />
      <GetQuoteComponent />
    </Fragment>
  );
};

export default DataSecurityPage;
