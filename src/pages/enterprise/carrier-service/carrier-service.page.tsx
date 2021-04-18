import React, { Fragment, ReactElement } from 'react';
import { connect } from 'react-redux';

import EnterpriseQuoteComponent from '../../../components/enterprise-quote/enterprise-quote.component';
import { constants } from '../../../constants';
import { enterpriseFormData } from '../../../constants/form-data/enterprise-service-form';
import HeroContainer from '../container/hero/hero-container';
import '../enterprise-page.scss';

const CarrierServicePage: React.FC = (props: any): ReactElement => {
  const { serviceName } = props;
  return (
    <Fragment>
      <HeroContainer fromPage={serviceName} />
      <EnterpriseQuoteComponent
        fromPage={constants.ES_CARRIER_SERVICE}
        formFields={enterpriseFormData}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const { enterpriseReducer } = state;
  return {
    serviceName: enterpriseReducer.serviceName,
  };
};

export default connect(mapStateToProps)(CarrierServicePage);
