import { makeStyles } from '@material-ui/core';
import createDOMPurify from 'dompurify';

import { IGetQuoteModel } from '../interfaces/get-quote.model';
import { constants } from '../constants';

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
    marginRight: '8px !important',
    '& .MuiSelect-outlined.MuiSelect-outlined': {
      backgroundColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
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
    '& .MuiInputBase-input': {},
    '& .MuiOutlinedInput-input': {
      paddingTop: '24px !important',
      display: 'grid !important',
      height: '16px',
    },
  },
}));

// Function to calculate the montly price based on the company size
export const calculateMonthlyAmount: any = (company_size: number) => {
  const {
    CP_LIMIT_ONE,
    CP_LIMIT_TWO,
    CP_LIMIT_THREE,
    CP_LIMIT_FOUR,
    BASE_PREMIUM,
    EU_75,
    EU_150,
    EU_250,
  } = constants;
  let cap_diff;

  if (
    company_size &&
    company_size <= CP_LIMIT_ONE &&
    CP_LIMIT_ONE >= company_size
  ) {
    return constants.BASE_PREMIUM;
  } else if (
    company_size &&
    company_size <= CP_LIMIT_TWO &&
    CP_LIMIT_TWO >= company_size
  ) {
    cap_diff = (company_size - CP_LIMIT_ONE) * EU_75;
    return BASE_PREMIUM + cap_diff;
  } else if (
    company_size &&
    company_size <= CP_LIMIT_THREE &&
    CP_LIMIT_THREE >= company_size
  ) {
    cap_diff = (company_size - CP_LIMIT_ONE) * EU_150;
    return BASE_PREMIUM + cap_diff;
  } else if (
    company_size &&
    company_size <= CP_LIMIT_FOUR &&
    CP_LIMIT_FOUR >= company_size
  ) {
    cap_diff = (company_size - CP_LIMIT_ONE) * EU_250;
    return BASE_PREMIUM + cap_diff;
  }

  return 0;
};
