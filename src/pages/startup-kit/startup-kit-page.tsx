import React, { Fragment, ReactElement } from 'react';

import ConsultationQuoteComponent from '../../components/consultation-quote/consultation-quote.component';
import HeroContainer from './container/hero/hero-container';
import './startup-kit-page.scss';
import { consultationFormData } from '../../constants/form-data/consultation-service-form';
import { constants } from '../../constants';

const StartupKitPage: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <HeroContainer />
      <ConsultationQuoteComponent
        fromPage={constants.CONSULTATION_SERVICE}
        formFields={consultationFormData}
      />
    </Fragment>
  );
};

export default StartupKitPage;
