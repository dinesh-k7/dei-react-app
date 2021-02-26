import React, { Fragment, ReactElement } from 'react';

import EnterpriseQuoteComponent from '../../../components/enterprise-quote/enterprise-quote.component';
import { enterpriseFormData } from '../../../constants/form-data/enterprise-service-form';
import { constants } from '../../../constants';
import HeroContainer from '../container/hero/hero-container';
import '../enterprise-page.scss';

import './cloud-service.page.scss';

const CloudServicePage: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <HeroContainer fromPage={constants.ES_CLOUD_SERVICE} />
      <EnterpriseQuoteComponent
        fromPage={constants.ES_CLOUD_SERVICE}
        formFields={enterpriseFormData}
      />
    </Fragment>
  );
};

export default CloudServicePage;
