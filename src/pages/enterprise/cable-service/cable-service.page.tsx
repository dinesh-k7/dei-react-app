import React, { Fragment, ReactElement } from 'react';

import EnterpriseQuoteComponent from '../../../components/enterprise-quote/enterprise-quote.component';
import { constants } from '../../../constants';
import { enterpriseFormData } from '../../../constants/form-data/enterprise-service-form';
import HeroContainer from '../container/hero/hero-container';
import '../enterprise-page.scss';

import './cable-service.page.scss';

const CableServicePage: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <HeroContainer fromPage={constants.ES_CABLE_SERVICE} />
      <EnterpriseQuoteComponent
        fromPage={constants.ES_CABLE_SERVICE}
        formFields={enterpriseFormData}
      />
    </Fragment>
  );
};

export default CableServicePage;
