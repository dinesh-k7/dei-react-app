import { makeStyles } from '@material-ui/core';

import { branding, constants, ds, wd } from '../constants';

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

// React Material style
export const useStyles = makeStyles(() => ({
  root: {
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
      whiteSpace: 'normal !important',
      height: '16px',
    },
  },
}));

// Function to calculate the montly price based on the company size
export const calculateMonthlyAmount: any = (totalUsers: number) => {
  const {
    CP_LIMIT_ONE,
    CP_LIMIT_TWO,
    CP_LIMIT_THREE,
    BASE_PREMIUM,
    EU_75,
    EU_150,
    EU_250,
  } = constants;

  if (totalUsers && totalUsers < 31) {
    return BASE_PREMIUM;
  } else if (totalUsers && totalUsers < 76) {
    return BASE_PREMIUM + (totalUsers - CP_LIMIT_ONE) * EU_75;
  } else if (totalUsers && totalUsers < 151) {
    return 264.98 + (totalUsers - CP_LIMIT_TWO) * EU_150;
  } else if (totalUsers && totalUsers < 251) {
    return 414.98 + (totalUsers - CP_LIMIT_THREE) * EU_250;
  } else {
    return 0;
  }
};

const getProductDetail = (fromPage, field) => {
  if (fromPage === constants.BRANDING) {
    return branding[field];
  } else if (fromPage === constants.WD) {
    return wd[field];
  } else {
    return ds[field];
  }
};

// eslint-disable-next-line  @typescript-eslint/explicit-module-boundary-types
export const addProductToCart = (quoteData: any, fromPage: string): any => {
  const { monthlyCost } = quoteData;
  const product = {
    name: getProductDetail(fromPage, 'name'),
    packageName: getProductDetail(fromPage, 'name'),
    price:
      fromPage === 'branding' || fromPage === 'wd'
        ? getProductDetail(fromPage, 'price')
        : monthlyCost,
    yearlyPrice:
      fromPage !== 'branding' && fromPage !== 'wd'
        ? (monthlyCost - constants.OFFER_PERCENTAGE * monthlyCost) * 8.5
        : '',
    id: getProductDetail(fromPage, 'id'),
    description: getProductDetail(fromPage, 'description'),
    section: getProductDetail(fromPage, 'section'),
    quantity: 1,
    monthlyPrice:
      fromPage !== 'branding' && fromPage !== 'wd' ? monthlyCost : '',
  };
  return product;
};

// eslint-disable-next-line
export const getQueryStringParams = (query: any) => {
  return query
    ? (/^[?#]/.test(query) ? query.slice(1) : query)
        .split('&')
        .reduce((params, param) => {
          const [key, value] = param.split('=');
          params[key] = value
            ? decodeURIComponent(value.replace(/\+/g, ' '))
            : '';
          return params;
        }, {})
    : {};
};

export const camelToSnakeCase = (str: string): string =>
  str
    .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
    .replace(/^_/, '');

// eslint-disable-next-line  @typescript-eslint/explicit-module-boundary-types
export const dateDiff = (d1: any, d2: any): number => {
  const g: any = (d1 - d2) / (1000 * 60 * 60 * 24);
  return parseInt(g, 10);
};
