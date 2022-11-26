import React, { Fragment, ReactElement } from 'react';
import { connect } from 'react-redux';

import EnterpriseQuoteComponent from '../../../components/enterprise-quote/enterprise-quote.component';
import { enterpriseFormData } from '../../../constants/form-data/enterprise-service-form';
import { constants, ENTERPRISE_SERVICES } from '../../../constants';
import HeroContainer from '../container/hero/hero-container';
import '../enterprise-page.scss';

const CloudServicePage: React.FC<{
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
    case constants.COLOCATION.toLowerCase():
      pageContent = ENTERPRISE_SERVICES.COLOCATION;
      ITPlexusName = constants.COLOCATION;
      fromPage = constants.ES_CLOUD_SERVICE;
      break;
    case constants.PUBLIC_CLOUD.toLowerCase():
      pageContent = ENTERPRISE_SERVICES.PUBLIC_CLOUD;
      ITPlexusName = constants.PUBLIC_CLOUD;
      fromPage = constants.ES_CLOUD_SERVICE;
      break;
    case constants.BACKUP_SERVICE.toLowerCase():
      pageContent = ENTERPRISE_SERVICES.BACKUP;
      ITPlexusName = constants.BACKUP_DISASTER;
      fromPage = constants.ES_CLOUD_SERVICE;
      break;
    case constants.STORAGE.toLowerCase():
      pageContent = ENTERPRISE_SERVICES.STORAGE;
      ITPlexusName = constants.STORAGE;
      fromPage = constants.ES_CLOUD_SERVICE;
      break;
    case constants.VIRTUAL_SERVERS.toLowerCase():
      pageContent = ENTERPRISE_SERVICES.VIRTUAL_SERVERS;
      ITPlexusName = constants.VIRTUAL_SERVERS;
      fromPage = constants.ES_CLOUD_SERVICE;
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
