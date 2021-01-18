import React, { Fragment, ReactElement } from 'react';

import GetQuoteComponent from '../../components/get-quote/get-quote.component';
import HeroContainer from './container/hero-conatiner';

import redVector from '../../assets/images/red_vector.svg';

const BrandingPage: React.FC = (): ReactElement => {
  const fromPage = 'branding';
  return (
    <Fragment>
      <HeroContainer />
      <GetQuoteComponent fromPage={fromPage} vimage={redVector} />
    </Fragment>
  );
};

export default BrandingPage;
