import axios from 'axios';

import { constants } from '../../constants';
import { IGetQuoteModel } from '../../interfaces/get-quote.model';

// eslint-disable-next-line
export const sendMail = (
  quoteData: IGetQuoteModel,
  fromPage: string,
): Promise<any> => {
  let url;
  if (fromPage === 'branding') {
    url = `${constants.MAIL_SERVICE_ENDPOINT}/branding-quote/sendmail`;
  } else {
    url = `${constants.MAIL_SERVICE_ENDPOINT}/sendmail`;
  }
  return axios.post(url, quoteData);
};
