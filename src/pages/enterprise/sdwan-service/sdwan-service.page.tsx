import React, { Fragment, ReactElement } from 'react';
import { connect } from 'react-redux';

import EnterpriseQuoteComponent from '../../../components/enterprise-quote/enterprise-quote.component';
import { constants } from '../../../constants';
import { SDWANFormData } from '../../../constants/form-data/sdwan-form';
import { PointToPointFormData } from '../../../constants/form-data/point-to-point-form';
import HeroContainer from '../container/hero/hero-container';
import '../enterprise-page.scss';

const SDWANServicePage: React.FC = (props: any): ReactElement => {
  const { serviceName } = props;
  let fromPage;
  switch (serviceName) {
    case constants.CYBER_SECURITY:
      fromPage = constants.ES_SECURITY_SERVICE;
      break;
    case constants.SDWAN:
    case constants.POINT_TO_POINT:
    case constants.MPLS:
      fromPage = constants.ES_DATA_SERVICE;
      break;
    case constants.WIRELESS_BACKUP:
      fromPage = constants.ES_IOT_SERVICE;
      break;
    case constants.UNIFIED_COMM:
      fromPage = constants.ES_VOICE_SERVICE;
      break;
    case constants.IT_CONSULTING:
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
        serviceName={serviceName}
        formFields={
          serviceName === 'Point To Point'
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
