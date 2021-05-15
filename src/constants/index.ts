export const constants = {
  ES_CLOUD_SERVICE: 'ES_CLOUD_SERVICE',
  CONSULTATION_SERVICE: 'CONSULTATION_SERVICE',
  ES_SECURITY_SERVICE: 'ES_SECURITY_SERVICE',
  ES_DATA_SERVICE: 'ES_DATA_SERVICE',
  ES_VOICE_SERVICE: 'ES_VOICE_SERVICE',
  ES_IOT_SERVICE: 'ES_IOT_SERVICE',
  ES_PROFESSIONAL_SERVICE: 'ES_PROFESSIONAL_SERVICE',
  WD: 'wd',
  BRANDING: 'branding',
  RECONNECT: 'RECONNECT',
  COMPANY_SIZE: 4,
  OFFER_PERCENTAGE: 0.12,
  COACHING_PACKAGE_ID: 994,
  CYBER_SECURITY: 'Cyber Security',
  PHYSICAL_SECURITY: 'Physical Security',
  SDWAN: 'SD-WAN',
  POINT_TO_POINT: 'Point  To  Point',
  MPLS: 'MPLS',
  COLOCATION: 'Colocation',
  PUBLIC_CLOUD: 'Public Cloud',
  BACKUP_DISASTER: 'Backup & Disaster Recovery Services',
  STORAGE: 'Storage',
  VIRTUAL_SERVERS: 'Virtual Servers',
  WIRELESS_BACKUP: 'Wireless Backup Failover Solutions',
  MD_SOLUTION: 'Managed Data Solutions',
  UNIFIED_COMM: 'Unified Communications',
  CONFERENCING: 'Conferencing',
  CONTACT_CENTER: 'Contact Center',
  SIP: 'SIP Trunks',
  VOIP: 'Hosted VOIP',
  POTS: 'POTS',
  PRI: 'PRI',
  IT_CONSULTING: 'IT Consulting Services',
  IT_SOLUTION: 'IT Solutions',
  MD_SERVICES: 'Managed Hosting Services',
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
      name: '30 Mbps or less',
      type: 'Business Internet',
    },
    {
      id: 2,
      name: '31 Mbps - 100 Mbps',
      type: 'Business Internet',
    },
    {
      id: 3,
      name: '101 Mbps - 300 Mbps',
      type: 'Business Internet',
    },
    {
      id: 4,
      name: '301 Mbps - 500 Mbps',
      type: 'Business Internet',
    },
    {
      id: 5,
      name: '501 Mbps - 1 Gbps',
      type: 'Business Internet',
    },
    {
      id: 6,
      name: '+1 Gbps',
      type: 'Business Internet',
    },

    {
      id: 7,
      name: '25 Mbps',
      type: 'Ethernet',
    },
    {
      id: 8,
      name: '50 Mbps',
      type: 'Ethernet',
    },
    {
      id: 9,
      name: '250 Mbps',
      type: 'Ethernet',
    },
  ],
  SECONDARY: [
    {
      id: 1,
      name: '30 Mbps or less',
      type: 'Business Internet',
    },
    {
      id: 2,
      name: '31 Mbps - 100 Mbps',
      type: 'Business Internet',
    },
    {
      id: 3,
      name: '101 Mbps - 300 Mbps',
      type: 'Business Internet',
    },
    {
      id: 4,
      name: '301 Mbps - 500 Mbps',
      type: 'Business Internet',
    },
    {
      id: 5,
      name: '501 Mbps - 1 Gbps',
      type: 'Business Internet',
    },
    {
      id: 6,
      name: '+1 Gbps',
      type: 'Business Internet',
    },

    {
      id: 7,
      name: '25 Mbps',
      type: 'Ethernet',
    },
    {
      id: 8,
      name: '50 Mbps',
      type: 'Ethernet',
    },
    {
      id: 9,
      name: '250 Mbps',
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
      name: 'Large remote office / branch site (51+ employees)',
    },
    {
      id: 4,
      name: 'Medium remote office / branch site (11 to 51 employees)',
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
    SITE: 'SITE',
    DEVELOP: 'DEVELOP',
    SECURE: 'SECURE',
  },
  STARTUP: 'STARTUP',
  STARTUPKIT: 'STARTUPKIT',
  COMPLETED: 'COMPLETED',
  NODE_ENDPOINT: 'https://dei-node-service.herokuapp.com',
  //NODE_ENDPOINT: 'http://localhost:3010',
  PAGES: [
    {
      url: 'smb',
      name: `SMB's`,
      children: true,
      submenu: [
        {
          url: '/secure',
          name: 'Secure',
        },
        {
          url: '/develop',
          name: 'Develop',
        },
      ],
    },
    {
      url: '/startup',
      name: 'Start-Up Central',
    },
    {
      url: '/enterprise',
      name: 'Enterprise Services',
    },
    {
      url: '/contribution',
      name: 'Contribution',
    },
    {
      url: '/sign-in',
      name: 'Sign In',
    },
    {
      url: '/logout',
      name: 'Logout',
    },
  ],

  BASE_PREMIUM: 129.98,
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
  password: [{ type: 'required', message: '*Please enter password' }],
  cpassword: [{ type: 'required', message: '*Please enter confirm password' }],
  email: [
    { type: 'required', message: '*Please enter email' },
    {
      type: 'pattern',
      message: '*Please provide valid email address',
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
  noofsites: [
    { type: 'required', message: '*Please enter Number of Sites' },
    { type: 'min', message: '*Number of Sites must be at least 1' },
  ],
  zipcode: [{ type: 'required', message: '*Please enter Zipcode' }],
  numberoftvs: [
    { type: 'required', message: "*Please enter Number of TV's" },
    { type: 'min', message: "*Number of TV's must be at least 1" },
  ],
  numberofseats: [
    { type: 'required', message: '*Please enter Number of seats' },
    { type: 'min', message: '*Number of seats must be at least 1' },
  ],
};

export const siteKey = '6Le4OhkaAAAAAHlSqTn2MuAN8vsgE9DUaZjPaa6n';

export const patterns = {
  email: /^([\w.-]+)@(\[(\d{1,3}\.){3}|(?!hotmail|googlemail|yahoo|gmx|ymail|outlook|bluewin|protonmail|t\-online|web\.|online\.|aol\.|live\.)(([a-zA-Z\d-]+\.)+))([a-zA-Z]{2,4}|\d{1,3})(\]?)$/i,
  website_url: /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/i,
  phone: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i,
};

export const messages = {
  lead_success: 'Your request is sent!',
  captcha_error: '*ReCAPTCHA Error',
  mail_send_error: 'Error in processing Get Quote. Please try later.',
  color_picker_error: '*Please pick color',
  brand_error: '*Please select atleast two brand name',
  keywords_error: '*Please select atleast two keywords',
  package_error: '*Please select a package',
  password_error: '*Password and Confirm Password should match',
  request_success: 'Your Request has been processed successfully!',
  signup_error: 'Error in sign up process',
  signin_error: 'Error in sign in process',
  validation_error: 'Please fill out the required field(s).',
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

export const TEMPLATES = [
  {
    id: 1,
    name: 'Template A',
  },
  {
    id: 2,
    name: 'Template B',
  },
  {
    id: 3,
    name: 'Template C',
  },
  {
    id: 4,
    name: 'Template D',
  },
];

export const CONSULTATION_PACKAGES = [
  {
    id: 990,
    active: false,
    name: 'Package A',
    description: 'Comprehensive Trademark screening report',
    description_one: 'Composite Trademark Registration',
    price: 4995,
    service: 'Consultations & Coaching',
    quantity: 1,
    features: [
      'Branding Kit',
      'Detailed Screening Report (4 iterations)',
      'Word, Slogan, and Design/Logo application.',
      "18 mo's of responses all fees included",
      '95% success rate',
      'Support from start to finish. ',
    ],
  },
  {
    id: 991,
    active: false,
    name: 'Package B',
    description: 'Start-up Package A - Branding & Trademark registration',
    description_one: 'Business plan and Branding',
    price: 2390,
    service: 'Consultations & Coaching',
    quantity: 1,
    features: [
      'Investor ready or bank/grant compliant 50+ page business and marketing plan delivered in PDF and Word format including current market analysis, all research, financial spreadsheets, graphs, charts, tables and visuals',
      'Revisions of business plan after review until satisfaction (within reason)',
      'Consultation during and after the project to assist with funding and implementation',
      'Research: IbisWorld, MarketLine, Barnes, eMarketer, MarketingCharts, Deloitte, Forrester, CountryWatch, BMI Research, First Research',
    ],
  },
  {
    id: 992,
    active: false,
    name: 'Package C',
    description: 'Copyright registration + Federal Filing fee',
    description_one: 'Premium Progressive Web Application',
    price: 9900,
    service: 'Consultations & Coaching',
    features: [
      'Premium PWA',
      'Branding kit',
      'Composite mark registration',
      '2 (1 hour) sessions with Mr. NWO',
      'Tips and Tricks',
    ],
    quantity: 1,
  },
  {
    id: 993,
    active: false,
    name: 'Package D',
    description: 'Digital Security Consultation',
    description_one: 'Digital Security Consultation',
    description_two: '',
    description_three: '',
    description_four: '',
    price: 799,
    service: 'Digital Security Consultation',
    quantity: 1,
    features: [
      '3rd party hardware',
      '3rd party software',
      'Password policies',
      'Network Firewall review',
      'patches',
    ],
  },
  {
    id: 994,
    active: false,
    name: 'Package A',
    description: 'Mr. NWO Coaching',
    description_one: 'Mr. NWO Coaching',
    price: '30,000.00 Platinum',
    service: '',
    quantity: 1,
    features: [
      'Mr. NWO Creative',
      'Premium PWA',
      'Branding',
      'I.P. Assist',
      'Business Planning',
      'Coaching Sessions',
    ],
  },
];

export const contributorPlan = [
  {
    id: 994,
    active: false,
    name: 'Package A',
    description: 'Mr. NWO Coaching',
    description_one: 'Mr. NWO Coaching',
    price: '30,000.00 Platinum',
    service: '',
    quantity: 1,
    features: [
      'Mr. NWO Creative',
      'Premium PWA',
      'Branding',
      'I.P. Assist',
      'Business Planning',
      'Coaching Sessions',
    ],
  },
];
