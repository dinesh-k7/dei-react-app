import { makeStyles } from '@material-ui/core';

import { constants } from '../constants';

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
    return 234.98 + (totalUsers - CP_LIMIT_TWO) * EU_150;
  } else if (totalUsers && totalUsers < 251) {
    return 384.98 + (totalUsers - CP_LIMIT_THREE) * EU_250;
  } else {
    return 0;
  }
};
