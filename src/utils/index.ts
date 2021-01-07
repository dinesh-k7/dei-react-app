import { makeStyles } from '@material-ui/core';
import createDOMPurify from 'dompurify';

import { IGetQuoteModel } from '../interfaces/get-quote.model';

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

// React Material style
export const useStyles = makeStyles(() => ({
  root: {
    marginRight: '8px',
    '& .MuiSelect-outlined.MuiSelect-outlined': {
      backgroundColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      height: '60px',
      borderRadius: '0px',
      fontSize: '12px',
      fontWeight: '400',
      fontFamily: 'OpenSansRegular',
      color: '#2c3e50 !important',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiSelect-selectMenu:focus': {
      border: '1px solid #42b9f8 !important',
      boxShadow: '0 0 4px #42b9f8 !important',
    },
  },
}));
