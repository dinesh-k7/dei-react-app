import React, { Fragment, ReactElement } from 'react';
import { connect } from 'react-redux';
import EnterpriseQuoteComponent from '../../../components/enterprise-quote/enterprise-quote.component';
import { constants, ENTERPRISE_SERVICES } from '../../../constants';
import { cableFormData } from '../../../constants/form-data/cable-service-form';
import HeroContainer from '../container/hero/hero-container';
import '../enterprise-page.scss';

const UcaasServicePage: React.FC<{
  serviceName: string;
  path: string;
}> = ({ serviceName, path }): ReactElement => {
  let fromPage, pageContent, urlName, ITPlexusName;
  if (path) {
    const [, , d] = path.split('/');
    urlName = d.replaceAll('-', ' ');
  }
  const name = urlName ? urlName : serviceName;
  switch (name) {
    case constants.PHYSICAL_SECURITY.toLowerCase():
      pageContent = ENTERPRISE_SERVICES.PHYSICAL_SECURITY;
      ITPlexusName = constants.PHYSICAL_SECURITY;
      fromPage = constants.ES_SECURITY_SERVICE;
      break;
    case constants.MD_SOLUTION.toLowerCase():
      ITPlexusName = constants.ES_IOT_SERVICE;
      fromPage = constants.ES_IOT_SERVICE;
      break;
    case constants.CONFERENCING.toLowerCase():
      pageContent = ENTERPRISE_SERVICES.CONFERENCING;
      ITPlexusName = constants.CONFERENCING;
      fromPage = constants.ES_VOICE_SERVICE;
      break;
    case constants.CONTACT_CENTER.toLowerCase():
      pageContent = ENTERPRISE_SERVICES.CONTACT_CENTER;
      ITPlexusName = constants.CONTACT_CENTER;
      fromPage = constants.ES_VOICE_SERVICE;
      break;
    case constants.SIP.toLowerCase():
      pageContent = ENTERPRISE_SERVICES.SIP;
      ITPlexusName = constants.SIP;
      fromPage = constants.ES_VOICE_SERVICE;
      break;
    case constants.VOIP.toLowerCase():
      ITPlexusName = constants.VOIP;
      fromPage = constants.ES_VOICE_SERVICE;
      break;
    case constants.POTS.toLowerCase():
      pageContent = ENTERPRISE_SERVICES.POTS;
      ITPlexusName = constants.POTS;
      fromPage = constants.ES_VOICE_SERVICE;
      break;
    case constants.PRI.toLowerCase():
      pageContent = ENTERPRISE_SERVICES.PRI;
      ITPlexusName = constants.PRI;
      fromPage = constants.ES_VOICE_SERVICE;
      break;

    case constants.DEI_VSA.toLowerCase():
      pageContent = ENTERPRISE_SERVICES.IT_SOLUTIONS;
      ITPlexusName = constants.DEI_VSA_REGISTERED;
      fromPage = constants.ES_PROFESSIONAL_SERVICE;
      break;
    case constants.HANDS_FREE_SERVICE.toLowerCase():
      pageContent = ENTERPRISE_SERVICES.HANDS_FREE;
      ITPlexusName = constants.HANDS_FREE;
      fromPage = constants.ES_IOT_SERVICE;
      break;
    case constants.MD_SERVICES.toLowerCase():
      ITPlexusName = constants.MD_SERVICES;
      fromPage = constants.ES_PROFESSIONAL_SERVICE;
      break;
    default:
      fromPage = constants.ES_SECURITY_SERVICE;
      break;
  }
  return (
    <Fragment>
      <HeroContainer fromPage={ITPlexusName} pageContent={pageContent} />
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
