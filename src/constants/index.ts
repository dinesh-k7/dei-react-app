export const constants = {
  COMPANY_SIZE: 4,
  POSITION: ['CEO/Decision-maker', 'VP/Director', 'Manager/Inquirer'],
  MAIL_SERVICE_ENDPOINT:
    'https://dei-node-service.herokuapp.com/mail-service/sendmail',
  BASE_PREMIUM: 99.98,
  CP_LIMIT_ONE: 30,
  CP_LIMIT_TWO: 75,
  CP_LIMIT_THREE: 150,
  CP_LIMIT_FOUR: 250,
  EU_75: 3,
  EU_150: 2.5,
  EU_250: 2,
};

export const quoteValidationErrorMessages = {
  name: [{ type: 'required', message: '*Please enter name' }],
  lastname: [{ type: 'required', message: '*Please enter last name' }],
  email: [
    { type: 'required', message: '*Please enter email' },
    { type: 'pattern', message: '*Please provide valid email' },
  ],
  phone: [
    { type: 'required', message: '*Please enter phone' },
    { type: 'pattern', message: '*Please provide valid phone' },
  ],
  company_size: [
    { type: 'required', message: '*Please enter company size' },
    { type: 'min', message: '*Company Size must be at least 1' },
  ],
  position: [{ type: 'required', message: '*Please select position' }],
  website_url: [
    { type: 'required', message: '*Please enter website url' },
    { type: 'pattern', message: '*Please provide valid website url' },
  ],
  company_name: [{ type: 'required', message: '*Please enter company name' }],
};

export const siteKey = '6Le4OhkaAAAAAHlSqTn2MuAN8vsgE9DUaZjPaa6n';

export const patterns = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
  website_url: /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/i,
  phone: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i,
};

export const messages = {
  lead_success: 'Your request is sent!',
  captcha_error: 'ReCAPTCHA Error',
  mail_send_error: 'Error in processing Get Quote. Please try later.',
};
