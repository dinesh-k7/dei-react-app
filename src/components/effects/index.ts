import axios from 'axios';

import { constants } from '../../constants';
import { IGetQuoteModel } from '../../interfaces/get-quote.model';

// eslint-disable-next-line
export const sendMail = (quoteData: IGetQuoteModel): Promise<any> => {
  return axios.post(constants.MAIL_SERVICE_ENDPOINT, quoteData);
};
