import React, { Fragment, ReactElement } from 'react';
import { connect } from 'react-redux';
import EnterpriseQuoteComponent from '../../../components/enterprise-quote/enterprise-quote.component';
import { constants } from '../../../constants';
import { cableFormData } from '../../../constants/form-data/cable-service-form';
import HeroContainer from '../container/hero/hero-container';
import '../enterprise-page.scss';

const UcaasServicePage: React.FC = (props: any): ReactElement => {
  const { serviceName } = props;
  return (
    <Fragment>
      <HeroContainer fromPage={serviceName} />
      <EnterpriseQuoteComponent
        fromPage={constants.UCAAS_SERVICE}
        formFields={cableFormData}
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

export default connect(mapStateToProps)(UcaasServicePage);
