import React, { Fragment, ReactElement } from 'react';

import EnterpriseQuoteComponent from '../../../components/enterprise-quote/enterprise-quote.component';
import { constants } from '../../../constants';
import { cableFormData } from '../../../constants/form-data/cable-service-form';
import HeroContainer from '../container/hero/hero-container';
import '../enterprise-page.scss';

import './cable-service.page.scss';

const CableServicePage: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <HeroContainer fromPage={constants.ES_CABLE_SERVICE} />
      <EnterpriseQuoteComponent
        fromPage={constants.ES_CABLE_SERVICE}
        formFields={cableFormData}
      />
    </Fragment>
  );
};

export default CableServicePage;
