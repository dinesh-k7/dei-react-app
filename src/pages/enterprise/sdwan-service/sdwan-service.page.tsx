import React, { Fragment, ReactElement } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import EnterpriseQuoteComponent from '../../../components/enterprise-quote/enterprise-quote.component';
import { constants, ENTERPRISE_SERVICES } from '../../../constants';
import { SDWANFormData } from '../../../constants/form-data/sdwan-form';
import { PointToPointFormData } from '../../../constants/form-data/point-to-point-form';
import HeroContainer from '../container/hero/hero-container';
import '../enterprise-page.scss';

const SDWANServicePage: React.FC<{
  serviceName: string;
  path: string;
}> = ({ serviceName, path }): ReactElement => {
  let fromPage, pageContent, ITPlexusName, urlName;
  const history = useHistory();
  const { location } = history;
  if (location && location.pathname) {
    const [, , d] = location.pathname.split('/');
    urlName = d.replaceAll('-', ' ');
  }
  const name = urlName ? urlName : serviceName;
  switch (name) {
    case constants.CYBER_SECURITY.toLowerCase():
      fromPage = constants.ES_SECURITY_SERVICE;
      pageContent = ENTERPRISE_SERVICES.CYBER_SECURITY;
      ITPlexusName = constants.CYBER_SECURITY;
      break;
    case constants.DEI_BACKUP.toLowerCase():
      fromPage = constants.ES_SECURITY_SERVICE;
      pageContent = ENTERPRISE_SERVICES.DEI_BACKUP;
      ITPlexusName = constants.DEI_BACKUP_REGISTERED;
      break;
    case constants.SDWAN_SERVICE.toLowerCase():
      pageContent = ENTERPRISE_SERVICES.SDWAN;
      ITPlexusName = constants.SDWAN;
      fromPage = constants.ES_DATA_SERVICE;
      break;
    case constants.POINT_TO_POINT.toLowerCase():
      pageContent = ENTERPRISE_SERVICES.POINT_TO_POINT;
      ITPlexusName = constants.POINT_TO_POINT;
      fromPage = constants.ES_DATA_SERVICE;
      break;
    case constants.MPLS.toLowerCase():
      pageContent = ENTERPRISE_SERVICES.MPLS;
      ITPlexusName = constants.MPLS;
      fromPage = constants.ES_DATA_SERVICE;
      break;
    case constants.WIRELESS_BACKUP.toLowerCase():
      ITPlexusName = constants.WIRELESS_BACKUP;
      fromPage = constants.ES_IOT_SERVICE;
      break;
    case constants.CLOUD_SERVICE.toLowerCase():
      ITPlexusName = constants.CLOUD_BACKUP;
      pageContent = ENTERPRISE_SERVICES.CLOUD_BACKUP;
      fromPage = constants.ES_IOT_SERVICE;
      break;
    case constants.UNIFIED_COMM.toLowerCase():
      ITPlexusName = constants.UNIFIED_COMM;
      pageContent = ENTERPRISE_SERVICES.UNIFIED;
      fromPage = constants.ES_VOICE_SERVICE;
      break;
    case constants.IT_SERVICE.toLowerCase():
      ITPlexusName = constants.IT_CONSULTING;
      pageContent = ENTERPRISE_SERVICES.IT_CONSULTING;
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
        serviceName={serviceName}
        formFields={
          serviceName === constants.POINT_TO_POINT
            ? PointToPointFormData
            : SDWANFormData
        }
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

export default connect(mapStateToProps)(SDWANServicePage);
