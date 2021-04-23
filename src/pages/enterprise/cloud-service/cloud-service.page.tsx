import React, { Fragment, ReactElement } from 'react';
import { connect } from 'react-redux';

import EnterpriseQuoteComponent from '../../../components/enterprise-quote/enterprise-quote.component';
import { enterpriseFormData } from '../../../constants/form-data/enterprise-service-form';
import { constants } from '../../../constants';
import HeroContainer from '../container/hero/hero-container';
import '../enterprise-page.scss';

const CloudServicePage: React.FC = (props: any): ReactElement => {
  const { serviceName } = props;
  let fromPage;
  switch (serviceName) {
    case constants.COLOCATION:
    case constants.PUBLIC_CLOUD:
    case constants.BACKUP_DISASTER:
    case constants.STORAGE:
      fromPage = constants.ES_CLOUD_SERVICE;
      break;

    default:
      fromPage = constants.ES_SECURITY_SERVICE;
      break;
  }
  return (
    <Fragment>
      <HeroContainer fromPage={serviceName} />
      <EnterpriseQuoteComponent
        fromPage={fromPage}
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

export default connect(mapStateToProps)(CloudServicePage);
