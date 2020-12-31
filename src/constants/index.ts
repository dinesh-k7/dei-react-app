export const constants = {
  COMPANY_SIZE: 4,
  POSITION: [
    'Junior Developer',
    'Senior Developer',
    'UX Designer',
    'Project Manager',
  ],
  MAIL_SERVICE_ENDPOINT: 'http://localhost:3010/mail-service/sendmail',
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
  mail_send_error: 'Error is processing Get Quote. Please try later.',
};
