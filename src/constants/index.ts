export const constants = {
  ES_CLOUD_SERVICE: 'ES_CLOUD_SERVICE',
  ES_CABLE_SERVICE: 'ES_CABLE_SERVICE',
  ES_CARRIER_SERVICE: 'ES_CARRIER_SERVICE',
  ES_SDWAN_SERVICE: 'ES_SDWAN_SERVICE',
  CONSULTATION_SERVICE: 'CONSULTATION_SERVICE',
  COMPANY_SIZE: 4,
  POSITION: [
    { id: 1, name: 'CEO/Decision-maker' },
    { id: 2, name: 'VP/Director' },
    { id: 3, name: 'Project Manager/Inquirer' },
    { id: 4, name: 'Others' },
  ],
  INDUSTRIES: ['Accounting', 'Finance', 'IT', 'Marketing'],
  PRIMARY: [
    {
      id: 1,
      name: '35 Mbps or less',
      type: 'Business Internet',
    },
    {
      id: 2,
      name: '36 Mbps - 99 Mbps',
      type: 'Business Internet',
    },
    {
      id: 3,
      name: '100 Mbps - 299 Mbps',
      type: 'Business Internet',
    },
    {
      id: 4,
      name: '300 Mbps - 499 Mbps',
      type: 'Business Internet',
    },
    {
      id: 5,
      name: '599 Mbps - 1 Gbps',
      type: 'Business Internet',
    },
    {
      id: 6,
      name: '1 Gbps',
      type: 'Business Internet',
    },

    {
      id: 7,
      name: '10 Mbps or less',
      type: 'Ethernet',
    },
    {
      id: 8,
      name: '10 Mbps',
      type: 'Ethernet',
    },
    {
      id: 9,
      name: '20 Mbps',
      type: 'Ethernet',
    },
    {
      id: 10,
      name: '50 Mbps',
      type: 'Ethernet',
    },
    {
      id: 11,
      name: '100 Mbps',
      type: 'Ethernet',
    },
    {
      id: 12,
      name: '200 Mbps',
      type: 'Ethernet',
    },
    {
      id: 13,
      name: '500 Mbps',
      type: 'Ethernet',
    },
    {
      id: 14,
      name: '1 Gbps',
      type: 'Ethernet',
    },
    {
      id: 15,
      name: '10 Gbps',
      type: 'Ethernet',
    },
    {
      id: 16,
      name: '100 Gbps',
      type: 'Ethernet',
    },
  ],
  SECONDARY: [
    {
      id: 1,
      name: '35 Mbps or less',
      type: 'Business Internet',
    },
    {
      id: 2,
      name: '36 Mbps - 99 Mbps',
      type: 'Business Internet',
    },
    {
      id: 3,
      name: '100 Mbps - 299 Mbps',
      type: 'Business Internet',
    },
    {
      id: 4,
      name: '300 Mbps - 499 Mbps',
      type: 'Business Internet',
    },
    {
      id: 5,
      name: '599 Mbps - 1 Gbps',
      type: 'Business Internet',
    },
    {
      id: 6,
      name: '1 Gbps',
      type: 'Business Internet',
    },

    {
      id: 7,
      name: '10 Mbps or less',
      type: 'Ethernet',
    },
    {
      id: 8,
      name: '10 Mbps',
      type: 'Ethernet',
    },
    {
      id: 9,
      name: '20 Mbps',
      type: 'Ethernet',
    },
    {
      id: 10,
      name: '50 Mbps',
      type: 'Ethernet',
    },
    {
      id: 11,
      name: '100 Mbps',
      type: 'Ethernet',
    },
    {
      id: 12,
      name: '200 Mbps',
      type: 'Ethernet',
    },
    {
      id: 13,
      name: '500 Mbps',
      type: 'Ethernet',
    },
    {
      id: 14,
      name: '1 Gbps',
      type: 'Ethernet',
    },
    {
      id: 15,
      name: '10 Gbps',
      type: 'Ethernet',
    },
    {
      id: 16,
      name: '100 Gbps',
      type: 'Ethernet',
    },
  ],
  SITETYPES: [
    {
      id: 1,
      name: 'Data Centers',
    },
    {
      id: 2,
      name: 'Main site',
    },
    {
      id: 3,
      name: 'Large remote office / branch site (50+ employees)',
    },
    {
      id: 4,
      name: 'Medium remote office / branch site (11 to 50 employees)',
    },
    {
      id: 5,
      name: 'Small remote office / branch site (10 or less employees)',
    },
  ],
  SMB: {
    DS: 'DS',
    BRANDING: 'BRANDING',
    WD: 'WD',
    NWO: 'NWO',
    SEO: 'SEO',
  },
  MAIL_SERVICE_ENDPOINT: 'https://dei-node-service.herokuapp.com/mail-service',
  //MAIL_SERVICE_ENDPOINT: 'http://localhost:3010/mail-service',
  PAGES: [
    {
      url: 'smb',
      name: 'SMB',
      children: true,
      submenu: [
        {
          url: 'data-security',
          name: 'Data Security',
        },
        {
          url: 'branding',
          name: 'Branding',
        },
      ],
    },
    {
      url: 'startup',
      name: 'Start-ups',
      // children: true,
      // submenu: [
      //   {
      //     url: 'consultation',
      //     name: 'Consultation',
      //   },
      // ],
    },
    {
      url: 'enterprise',
      name: 'Enterprise',
    },
  ],

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
  addressline1: [
    { type: 'required', message: '*Please enter Business Address' },
  ],
  suite: [{ type: 'required', message: '*Please enter Business Suite Opt.' }],
  secondary: [{ type: 'required', message: '*Please select Secondary' }],
  primary: [{ type: 'required', message: '*Please select Primary' }],
  sitetype: [{ type: 'required', message: '*Please select Site Type' }],
  noofsites: [{ type: 'required', message: '*Please enter Number of Sites' }],
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
  color_picker_error: '*Please pick color',
  brand_error: '*Please select atleast two brand name',
  keywords_error: '*Please select atleast two keywords',
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
export const FormFields = [
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
    type: 'text',
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
