import React, { Fragment, ReactElement } from 'react';
import { connect } from 'react-redux';
import EnterpriseQuoteComponent from '../../../components/enterprise-quote/enterprise-quote.component';
import { constants } from '../../../constants';
import { cableFormData } from '../../../constants/form-data/cable-service-form';
import HeroContainer from '../container/hero/hero-container';
import '../enterprise-page.scss';

const UcaasServicePage: React.FC = (props: any): ReactElement => {
  const { serviceName } = props;
  let fromPage;
  switch (serviceName) {
    case constants.PHYSICAL_SECURITY:
      fromPage = constants.ES_SECURITY_SERVICE;
      break;
    case constants.MD_SOLUTION:
      fromPage = constants.ES_IOT_SERVICE;
      break;
    case constants.CONFERENCING:
    case constants.CONTACT_CENTER:
    case constants.SIP:
    case constants.VOIP:
    case constants.POTS:
    case constants.PRI:
      fromPage = constants.ES_VOICE_SERVICE;
      break;
    case constants.IT_SOLUTION:
    case constants.MD_SERVICES:
      fromPage = constants.ES_PROFESSIONAL_SERVICE;
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
