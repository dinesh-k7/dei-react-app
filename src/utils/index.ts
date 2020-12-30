import { IGetQuoteModel } from '../interfaces/get-quote.model';

import createDOMPurify from 'dompurify';
const DOMPurify = createDOMPurify(window);

interface IErrorMessageModel {
  type: string;
  message: string;
}

export const filterErrorMessage = (
  errorMessages: IErrorMessageModel[],
  vType: string,
): string => {
  const filteredMessage =
    errorMessages &&
    errorMessages.length &&
    errorMessages.find((msg: IErrorMessageModel) => msg.type === vType);

  return filteredMessage ? filteredMessage.message : '';
};

// Function to sanitize user input to prevent XSS attack
export const sanitizeInput = (quoteData: IGetQuoteModel): any => {
  if (quoteData && Object.keys(quoteData).length) {
    const sanitizedData = Object.keys(quoteData).map((objKey) => {
      return {
        [objKey]: DOMPurify.sanitize(quoteData.company_name),
      };
    });
    return sanitizedData;
  }
};
