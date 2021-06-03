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
    return 264.98 + (totalUsers - CP_LIMIT_TWO) * EU_150;
  } else if (totalUsers && totalUsers < 251) {
    return 414.98 + (totalUsers - CP_LIMIT_THREE) * EU_250;
  } else {
    return 0;
  }
};

export const paypalOrder = {
  id: '51M29379UF007463Y',
  intent: 'CAPTURE',
  status: 'COMPLETED',
  purchase_units: [
    {
      reference_id: 'default',
      amount: {
        currency_code: 'USD',
        value: '0.03',
        breakdown: {
          item_total: {
            currency_code: 'USD',
            value: '0.03',
          },
          shipping: {
            currency_code: 'USD',
            value: '0.00',
          },
          handling: {
            currency_code: 'USD',
            value: '0.00',
          },
          insurance: {
            currency_code: 'USD',
            value: '0.00',
          },
          shipping_discount: {
            currency_code: 'USD',
            value: '0.00',
          },
          discount: {
            currency_code: 'USD',
            value: '0.00',
          },
        },
      },
      payee: {
        email_address: 'sb-th8oo5324761@business.example.com',
        merchant_id: '3S3P6MPUEKNZG',
      },
      description: '',
      shipping: {
        name: {
          full_name: 'John Doe',
        },
        address: {
          address_line_1: '1 Main St',
          admin_area_2: 'San Jose',
          admin_area_1: 'CA',
          postal_code: '95131',
          country_code: 'US',
        },
      },
      payments: {
        captures: [
          {
            id: '53084932H0595304M',
            status: 'COMPLETED',
            amount: {
              currency_code: 'USD',
              value: '0.03',
            },
            final_capture: true,
            seller_protection: {
              status: 'ELIGIBLE',
              dispute_categories: [
                'ITEM_NOT_RECEIVED',
                'UNAUTHORIZED_TRANSACTION',
              ],
            },
            seller_receivable_breakdown: {
              gross_amount: {
                currency_code: 'USD',
                value: '0.03',
              },
              paypal_fee: {
                currency_code: 'USD',
                value: '0.03',
              },
              net_amount: {
                currency_code: 'USD',
                value: '0.00',
              },
            },
            links: [
              {
                href:
                  'https://api.sandbox.paypal.com/v2/payments/captures/53084932H0595304M',
                rel: 'self',
                method: 'GET',
              },
              {
                href:
                  'https://api.sandbox.paypal.com/v2/payments/captures/53084932H0595304M/refund',
                rel: 'refund',
                method: 'POST',
              },
              {
                href:
                  'https://api.sandbox.paypal.com/v2/checkout/orders/51M29379UF007463Y',
                rel: 'up',
                method: 'GET',
              },
            ],
            create_time: '2021-05-28T10:36:23Z',
            update_time: '2021-05-28T10:36:23Z',
          },
        ],
      },
    },
  ],
  payer: {
    name: {
      given_name: 'John',
      surname: 'Doe',
    },
    email_address: 'sb-xrhea5338878@personal.example.com',
    payer_id: '34XUXNBBPW4KG',
    phone: {
      phone_number: {
        national_number: '4085060688',
      },
    },
    address: {
      country_code: 'US',
    },
  },
  update_time: '2021-05-28T10:36:23Z',
  links: [
    {
      href:
        'https://api.sandbox.paypal.com/v2/checkout/orders/51M29379UF007463Y',
      rel: 'self',
      method: 'GET',
    },
  ],
};
