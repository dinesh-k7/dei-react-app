import React, { Fragment, ReactElement } from 'react';

import EnterpriseQuoteComponent from '../../../components/enterprise-quote/enterprise-quote.component';
import { constants } from '../../../constants';
import { SDWANFormData } from '../../../constants/form-data/sdwan-form';
import HeroContainer from '../container/hero/hero-container';
import '../enterprise-page.scss';

import './sdwan-service.page.scss';

const SDWANServicePage: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <HeroContainer fromPage={constants.ES_SDWAN_SERVICE} />
      <EnterpriseQuoteComponent
        fromPage={constants.ES_SDWAN_SERVICE}
        formFields={SDWANFormData}
      />
    </Fragment>
  );
};

export default SDWANServicePage;
