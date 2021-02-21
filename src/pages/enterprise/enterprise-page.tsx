import React, { Fragment, ReactElement } from 'react';

import EnterpriseQuoteComponent from '../../components/enterprise-quote/enterprise-quote.component';
import { dataSecurityFormFields } from '../../constants';
import HeroContainer from './container/hero/hero-container';
import './enterprise-page.scss';

const EnterprisePage: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <HeroContainer />
      <EnterpriseQuoteComponent formFields={dataSecurityFormFields} />
    </Fragment>
  );
};

export default EnterprisePage;
