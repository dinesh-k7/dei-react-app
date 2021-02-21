import React, { Fragment, ReactElement } from 'react';

import ConsultationQuoteComponent from '../../components/consultation-quote/consultation-quote.component';
import { dataSecurityFormFields } from '../../constants';
import HeroContainer from './container/hero/hero-container';
import './consultation-page.scss';

const ConsultationPage: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <HeroContainer />
      <ConsultationQuoteComponent formFields={dataSecurityFormFields} />
    </Fragment>
  );
};

export default ConsultationPage;
