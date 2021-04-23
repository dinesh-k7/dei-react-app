import axios from 'axios';

import { constants } from '../../constants';
import { IGetQuoteModel } from '../../interfaces/get-quote.model';

// eslint-disable-next-line
export const sendMail = (
  quoteData: IGetQuoteModel,
  fromPage: string,
): Promise<any> => {
  quoteData.fromPage = fromPage;
  let url;
  switch (fromPage) {
    case 'branding':
      url = `${constants.MAIL_SERVICE_ENDPOINT}/branding-quote/sendmail`;
      break;
    case constants.ES_DATA_SERVICE:
    case constants.ES_PROFESSIONAL_SERVICE:
    case constants.ES_CLOUD_SERVICE:
    case constants.ES_IOT_SERVICE:
    case constants.ES_VOICE_SERVICE:
      url = `${constants.MAIL_SERVICE_ENDPOINT}/enterprise-service/sendmail`;
      break;
    case constants.ES_SECURITY_SERVICE:
      url = `${constants.MAIL_SERVICE_ENDPOINT}/sdwan-service/sendmail`;
      break;
    case constants.CONSULTATION_SERVICE:
      url = `${constants.MAIL_SERVICE_ENDPOINT}/consultation-service/sendmail`;
      break;
    default:
      url = `${constants.MAIL_SERVICE_ENDPOINT}/sendmail`;
      break;
  }

  return axios.post(url, quoteData);
};
