export const constants = {
  COMPANY_SIZE: 4,
  POSITION: ['CEO/Decision-maker', 'VP/Director', 'Manager/Inquirer'],
  INDUSTRIES: ['Accounting', 'Finance', 'IT', 'Marketing'],
  MAIL_SERVICE_ENDPOINT: 'https://dei-node-service.herokuapp.com/mail-service',
  // MAIL_SERVICE_ENDPOINT: 'http://localhost:3010/mail-service',
  BASE_PREMIUM: 99.98,
  CP_LIMIT_ONE: 30,
  CP_LIMIT_TWO: 75,
  CP_LIMIT_THREE: 150,
  CP_LIMIT_FOUR: 250,
  EU_75: 3,
  EU_150: 2,
  EU_250: 1.75,
};

export const quoteValidationErrorMessages = {
  name: [{ type: 'required', message: '*Please enter name' }],
  lastname: [{ type: 'required', message: '*Please enter last name' }],
  email: [
    { type: 'required', message: '*Please enter email' },
    {
      type: 'pattern',
      message: '*Please provide valid Business email address',
    },
  ],
  phone: [
    { type: 'required', message: '*Please enter phone' },
    { type: 'pattern', message: '*Please provide valid phone' },
  ],
  companySize: [
    { type: 'required', message: '*Please enter company size' },
    { type: 'min', message: '*Company Size must be at least 1' },
  ],
  position: [{ type: 'required', message: '*Please select Position' }],
  websiteUrl: [
    { type: 'required', message: '*Please enter website url' },
    { type: 'pattern', message: '*Please provide valid website url' },
  ],
  companyName: [{ type: 'required', message: '*Please enter company name' }],
  slogan: [{ type: 'required', message: '*Please enter Slogan' }],
  targetAudience: [
    { type: 'required', message: '*Please enter Target Audience' },
  ],
  aboutCompany: [
    { type: 'required', message: '*Please provide your company detail' },
  ],
  industry: [{ type: 'required', message: '*Please select Industry' }],
};

export const siteKey = '6Le4OhkaAAAAAHlSqTn2MuAN8vsgE9DUaZjPaa6n';

export const patterns = {
  email: /^([\w.-]+)@(\[(\d{1,3}\.){3}|(?!hotmail|googlemail|yahoo|gmx|ymail|outlook|bluewin|protonmail|t\-online|web\.|online\.|aol\.|live\.)(([a-zA-Z\d-]+\.)+))([a-zA-Z]{2,4}|\d{1,3})(\]?)$/i,
  website_url: /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/i,
  phone: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i,
};

export const messages = {
  lead_success: 'Your request is sent!',
  captcha_error: 'ReCAPTCHA Error',
  mail_send_error: 'Error in processing Get Quote. Please try later.',
};

export const dataSecurityFormFields = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    required: true,
    placeholder: 'e.g. John',
    section: 'personal',
  },
  {
    name: 'lastname',
    label: 'Last Name',
    type: 'text',
    required: true,
    placeholder: 'e.g. Doe',
    section: 'personal',
  },
  {
    name: 'email',
    label: 'E-mail',
    type: 'text',
    required: true,
    placeholder: 'e.g. johndoe@email.com',
    pattern: patterns.email,
    section: 'personal',
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'text',
    required: true,
    placeholder: 'e.g. 123456789',
    section: 'personal',
  },
  {
    name: 'companyName',
    label: 'Company Name',
    type: 'text',
    required: true,
    placeholder: 'e.g. JohnDoe and co.',
    section: 'company',
  },

  {
    name: 'companySize',
    label: 'Company Size',
    type: 'number',
    required: true,
    placeholder: '0',
    section: 'company',
  },
  {
    name: 'position',
    label: 'Your position in company',
    type: 'select',
    required: true,
    placeholder: 'e.g. Project Manager',
    section: 'company',
  },
  {
    name: 'websiteUrl',
    label: 'Current website URL',
    type: 'text',
    required: true,
    placeholder: 'e.g. https://www.company.com',
    pattern: patterns.website_url,
    section: 'company',
  },
];

export const brandingFormFields = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    required: true,
    placeholder: 'e.g. John',
    section: 'personal',
  },
  {
    name: 'lastname',
    label: 'Last Name',
    type: 'text',
    required: true,
    placeholder: 'e.g. Doe',
    section: 'personal',
  },
  {
    name: 'email',
    label: 'E-mail',
    type: 'text',
    required: true,
    placeholder: 'e.g. johndoe@email.com',
    pattern: patterns.email,
    section: 'personal',
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'text',
    required: true,
    placeholder: 'e.g. 123456789',
    section: 'personal',
  },
  {
    name: 'companyName',
    label: 'Company Name',
    type: 'text',
    required: true,
    placeholder: 'e.g. JohnDoe and co.',
    section: 'company',
  },

  {
    name: 'slogan',
    label: 'Slogan',
    type: 'text',
    required: true,
    placeholder: 'e.g. Think different',
    section: 'company',
  },
  {
    name: 'industry',
    label: 'Industry',
    type: 'select',
    required: true,
    placeholder: 'e.g. Accounting',
    section: 'company',
  },
  {
    name: 'position',
    label: 'Your position in company',
    type: 'select',
    required: true,
    placeholder: 'e.g. Project Manager',
    section: 'company',
  },

  {
    name: 'targetAudience',
    label: 'What is your target audience',
    type: 'textarea',
    required: true,
    placeholder: 'e.g. Accounting',
    maxlength: 1000,
    section: 'company',
  },
  {
    name: 'aboutCompany',
    label: 'Tell us about your company',
    type: 'textarea',
    required: true,
    placeholder: 'e.g. Accounting',
    maxlength: 1000,
    section: 'company',
  },
  {
    name: 'comment',
    label: 'Additional comment',
    type: 'textarea',
    required: true,
    placeholder: 'e.g. comment',
    maxlength: 1000,
    section: 'company',
  },
];
