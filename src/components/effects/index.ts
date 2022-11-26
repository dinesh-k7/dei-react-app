import axios from 'axios';

import { constants } from '../../constants';
import { IGetQuoteModel, ISFCRMModel } from '../../interfaces/get-quote.model';

// eslint-disable-next-line
export const sendMail = (
  quoteData: IGetQuoteModel,
  fromPage: string,
): Promise<any> => {
  quoteData.fromPage = fromPage;
  let url;
  switch (fromPage) {
    case constants.BRANDING:
      url = `${constants.NODE_ENDPOINT}/mail-service/branding-quote/sendmail`;
      break;
    case constants.WD:
      url = `${constants.NODE_ENDPOINT}/mail-service/wd-quote/sendmail`;
      break;
    case constants.RECONNECT:
      url = `${constants.NODE_ENDPOINT}/mail-service/reconnect/sendmail`;
      break;
    case constants.ES_DATA_SERVICE:
    case constants.ES_PROFESSIONAL_SERVICE:
    case constants.ES_CLOUD_SERVICE:
    case constants.ES_IOT_SERVICE:
    case constants.ES_VOICE_SERVICE:
      url = `${constants.NODE_ENDPOINT}/mail-service/enterprise-service/sendmail`;
      break;
    case constants.ES_SECURITY_SERVICE:
      url = `${constants.NODE_ENDPOINT}/mail-service/sdwan-service/sendmail`;
      break;
    case constants.CONSULTATION_SERVICE:
      url = `${constants.NODE_ENDPOINT}/mail-service/consultation-service/sendmail`;
      break;
    case constants.SIGN_UP:
      url = `${constants.NODE_ENDPOINT}/mail-service/signup-confirmation`;
      break;
    default:
      url = `${constants.NODE_ENDPOINT}/mail-service/sendmail`;
      break;
  }

  return axios.post(url, quoteData);
};

//Function to create leads in sfcrm
export const postSFCRMData = (postSFCRMData: ISFCRMModel, fromPage: string) => {
  let url;
  switch (fromPage) {
    case constants.DATA_SENTINELS:
      url = `${constants.NODE_ENDPOINT}/salesforce-crm/leads`;
      break;
  }
  return axios.post(url, postSFCRMData);
};
