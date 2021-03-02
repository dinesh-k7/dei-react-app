import React, { Fragment, ReactElement } from 'react';

import EnterpriseQuoteComponent from '../../../components/enterprise-quote/enterprise-quote.component';
import { constants } from '../../../constants';
import { cableFormData } from '../../../constants/form-data/cable-service-form';
import HeroContainer from '../container/hero/hero-container';
import '../enterprise-page.scss';

import './ucaas-service.page.scss';

const UcaasServicePage: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <HeroContainer fromPage={constants.UCAAS_SERVICE} />
      <EnterpriseQuoteComponent
        fromPage={constants.UCAAS_SERVICE}
        formFields={cableFormData}
      />
    </Fragment>
  );
};

export default UcaasServicePage;
