export const constants = {
  ES_CLOUD_SERVICE: 'ES_CLOUD_SERVICE',
  CONSULTATION_SERVICE: 'CONSULTATION_SERVICE',
  ES_SECURITY_SERVICE: 'ES_SECURITY_SERVICE',
  ES_DATA_SERVICE: 'ES_DATA_SERVICE',
  ES_VOICE_SERVICE: 'ES_VOICE_SERVICE',
  ES_IOT_SERVICE: 'ES_IOT_SERVICE',
  ES_PROFESSIONAL_SERVICE: 'ES_PROFESSIONAL_SERVICE',
  SIGN_UP: 'SIGN_UP',
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
  CONTACTUS: 'CONTACTUS',
  NODE_ENDPOINT:
    process.env.REACT_APP_REGION === 'PROD'
      ? process.env.REACT_APP_NODE_BASE_URL
      : 'http://localhost:3010',
  CONTRIBUTOR_PAYPAL_PRODUCT_ID: 'PROD-05L02357TD894522S',
  HIPPA_PAYPAL_PRODUCT_ID: 'PROD-5LN61512H7991384W',
  NIST_PAYPAL_PRODUCT_ID: 'PROD-22F77795G6298660V',
  CONTRIBUTOR: 'CONTRIBUTOR',
  HIPPA: 'HIPPA',
  NIST: 'NIST',
  PAGES: [
    {
      url: '/contributors',
      name: 'Contributors',
    },
    {
      url: '/startup',
      name: 'Start-Up Central',
    },
    {
      url: 'smb',
      name: `SMB's Services`,
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
      url: '/enterprise',
      name: 'Enterprise Services',
    },

    {
      url: '/compliance-central',
      name: 'Compliance Central',
    },

    {
      url: '/sign-in',
      name: 'Sign In',
    },
    {
      url: '/order-history',
      name: 'Orders',
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
  PLATFORMS: [
    {
      id: 1,
      name: 'Fiver',
    },
    {
      id: 2,
      name: 'Upwork',
    },
    {
      id: 3,
      name: 'Other',
    },
  ],
  ESTIMATED_AGE: [
    {
      id: 1,
      name: '0 - 6 Months',
    },
    {
      id: 2,
      name: '6 - 24 Months',
    },
    {
      id: 3,
      name: '24 Plus',
    },
  ],

  INTERESTED: [
    {
      id: 1,
      name: 'Classess',
    },
    {
      id: 2,
      name: 'Conferences',
    },
    {
      id: 3,
      name: 'Workshops',
    },
    {
      id: 4,
      name: 'Seminar',
    },
    {
      id: 5,
      name: 'Cultural Activities',
    },
  ],
  GOALS: [
    {
      id: 1,
      name: 'Vocational Enablement',
    },
    {
      id: 2,
      name: 'Academic Advancement',
    },
    {
      id: 3,
      name: 'To re-connect',
    },
  ],
};

export const quoteValidationErrorMessages = {
  name: [
    { type: 'required', message: '*Please enter name' },
    {
      type: 'pattern',
      message: '*Please enter valid name',
    },
  ],
  lastname: [
    { type: 'required', message: '*Please enter last name' },
    {
      type: 'pattern',
      message: '*Please enter valid last name',
    },
  ],
  password: [
    { type: 'required', message: '*Please enter password' },
    {
      type: 'pattern',
      message:
        '*Password should have atleast 10 characters with one upper case, lower case and special character',
    },
  ],
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
  brandingNumOrders: [
    {
      type: 'required',
      message: '*Please enter allowed orders for branding',
    },
  ],
  dsNumOrders: [
    {
      type: 'required',
      message: '*Please enter allowed orders for Data sentinels',
    },
  ],
  sukNumOrders: [
    {
      type: 'required',
      message: '*Please enter allowed orders for Startup kit',
    },
  ],
  wdNumOrders: [
    {
      type: 'required',
      message: '*Please enter allowed orders for Custom designs',
    },
  ],
  comment: [{ type: 'required', message: '*Please provide comment' }],
  budget: [
    { type: 'required', message: '*Please enter Budget' },
    { type: 'pattern', message: '*Enter valid Budget' },
  ],
  platform: [{ type: 'required', message: '*Please select Hiring platform' }],
  type: [{ type: 'required', message: '*Please select Interested In' }],
  goal: [{ type: 'required', message: '*Please select goal' }],
};

export const siteKey = '6Lf0uTYaAAAAALouJbS6qkJofkJyzW29zgnXRENC';

export const patterns = {
  email: /^([\w.-]+)@(\[(\d{1,3}\.){3}|(?!hotmail|googlemail|yahoo|gmx|ymail|outlook|bluewin|protonmail|t\-online|web\.|online\.|aol\.|live\.)(([a-zA-Z\d-]+\.)+))([a-zA-Z]{2,4}|\d{1,3})(\]?)$/i,
  website_url: /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/i,
  phone: /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?([^ws]|[_])).{10,}$/,
  name: /^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/,
  budget: /^\d{0,17}(\.\d{1,2})?$/,
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
  reset_error: 'Error in password reset',
  contactus_error: 'Error in submitting contact us form.',
  validation_error: 'Please fill out the required field(s).',
  payment_success_message:
    'Thank you for your purchase! We are the common denominator!',
  payment_failure_message:
    'thank you for joining us in manifesting digital destiny. Oops wait a minute somethings not quite right please resubmit your order.',
  profile_error: 'Error in updating profile',
  profile_update: '  Account detail has been updated successfully.',
  activation_success: 'Your Account has been activated successfully.',
  activation_exist: 'Your Account has been activated already.',
  activate_expired: 'Activation link has been expired',
};

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
    name: 'NWO™ Certification - Freelancer',
    description: 'NWO™ Certification - Freelancer',
    description_one: 'NWO™ Zero Trust Protocol',
    price: 6.99,
    monthly: true,
    additional_fee: 49,
    service: 'Consultations & Coaching',
    quantity: 1,
    features: [
      'Email - World Class Integrated Security Solutions',
      'Password Manager',
      'Added to the NWO Prefered hiring Database',
      'Security best practice trainings',
    ],
  },
  {
    id: 991,
    active: false,
    name: 'DEI™ Certification - Business',
    description: 'DEI™ Certification - Business',
    description_one: 'DEI™ Zero Trust Protocol',
    price: 999,
    service: 'Consultations & Coaching',
    starting: true,
    quantity: 1,
    features: [
      'Digital Security Consultation',
      '3rd party hardware review',
      '3rd party software review',
      'Password policies review',
      'Network Firewall review',
      'Patch Management Consultation',
      'Pentest - with a hybrid documentation',
    ],
  },
  {
    id: 992,
    active: false,
    name: 'Premium Manifestation Application',
    description: 'Premium Manifestation Application',
    description_one: 'Premium Manifestation Application',
    price: 9900,
    service: 'Premium Manifestation Application',
    features: [
      'Premium PWA - Publishing Platform',
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
    name: 'Business plan and Branding',
    description: 'Business plan and Branding',
    description_one: 'Business plan and Branding',
    description_two: '',
    description_three: '',
    description_four: '',
    price: 2999.99,
    service: 'Digital Security Consultation',
    quantity: 1,
    features: [
      'Investor ready or bank/grant compliant 50+ page business and marketing plan delivered in PDF and Word format including current market analysis, all research, financial spreadsheets, graphs, charts, tables and visuals',
      'Research: IbisWorld, MarketLine, Barnes, eMarketer, MarketingCharts, Deloitte, Forrester, CountryWatch, BMI Research, First Research',
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

export const branding = {
  name: 'Branding',
  price: 500,
  id: 70001,
  description: 'Branding',
};

export const wd = {
  name: 'DEI Custom Designs',
  price: 2998,
  id: 80001,
  description: 'DEI Custom Designs',
};

export const ds = {
  name: 'Data Sentinels',
  id: 60001,
  description: 'Data Sentinels',
};

export const modalData = {
  title: 'Quality experience is our priority!',
  description:
    'We demonstrate our commitment to providing gold standard customer experiences by restricting the number of orders submitted. We implement adaptive management strategies to optimize our performance. We appreciate your patience. Please fill out the form, and an account executive will coordinate the fulfillment of your order as soon as possible. Thank you for growing with us! Together we can Manifest Digital Destiny!',
  textOne: 'textOne',
};

export const copyrightData = {
  title: 'Copyright',
  description:
    'The materials on this web site are forbidden to be transmitted, used, reproduced or , in part or in whole or , by any means, or in any form mechanical or electronic, including recording, photocopying, or using any information retrieval and storage system, except where expcilitly provided for in the Terms and Conditions of Use of The DEI Website, without written permission from the publisher.',
};

export const hippaPlans = [
  {
    id: 'hippa-one',
    name_one: '1-2',
    name_two: 'Individual | < 10 Devices',
    price: 325.99,
    setup_price: 600,
    planid: '',
    total_cycles: 36,
    features: [
      {
        id: 'plan-one-feature-a',
        description: 'Custom Compliance Portal',
      },
      {
        id: 'plan-one-feature-b',
        description: 'Ongoing network scans',
      },
      {
        id: 'plan-one-feature-c',
        description: 'Ongoing compliance reporting',
      },
      {
        id: 'plan-one-feature-d',
        description: 'Issue alerts & notifications',
      },
      {
        id: 'plan-one-feature-e',
        description: 'Industry-approved documentation',
      },
      {
        id: 'plan-one-feature-f',
        description: 'Annual Compliance Review',
      },
    ],
  },
  {
    id: 'hippa-two',
    name_one: '3-5',
    name_two: 'Individual | < 50 Devices',
    price: 649.99,
    setup_price: 600,
    planid: '',
    total_cycles: 36,
    features: [
      {
        id: 'plan-two-feature-a',
        description: 'Custom Compliance Portal',
      },
      {
        id: 'plan-two-feature-b',
        description: 'Ongoing network scans',
      },
      {
        id: 'plan-two-feature-c',
        description: 'Ongoing compliance reporting',
      },
      {
        id: 'plan-two-feature-d',
        description: 'Issue alerts & notifications',
      },
      {
        id: 'plan-two-feature-e',
        description: 'Industry-approved documentation',
      },
      {
        id: 'plan-two-feature-f',
        description: 'Semi-Annual Compliance Review',
      },
    ],
  },
  {
    id: 'hippa-three',
    name_one: '6-10',
    name_two: 'Individual | < 100 Devices',
    price: 799.99,
    setup_price: 600,
    planid: '',
    total_cycles: 36,
    features: [
      {
        id: 'plan-three-feature-a',
        description: 'Custom Compliance Portal',
      },
      {
        id: 'plan-three-feature-b',
        description: 'Ongoing network scans',
      },
      {
        id: 'plan-three-feature-c',
        description: 'Ongoing compliance reporting',
      },
      {
        id: 'plan-three-feature-d',
        description: 'Issue alerts & notifications',
      },
      {
        id: 'plan-three-feature-e',
        description: 'Industry-approved documentation',
      },
      {
        id: 'plan-three-feature-f',
        description: 'Quarterly Compliance Review',
      },
    ],
  },
  {
    id: 'hippa-four',
    name_one: '11+',
    name_two: 'Individual | > 100 Devices',
    price: 1299.99,
    setup_price: 600,
    planid: '',
    total_cycles: 36,
    features: [
      {
        id: 'plan-four-feature-a',
        description: 'Custom Compliance Portal',
      },
      {
        id: 'plan-four-feature-b',
        description: 'Ongoing network scans',
      },
      {
        id: 'plan-four-feature-c',
        description: 'Ongoing compliance reporting',
      },
      {
        id: 'plan-four-feature-d',
        description: 'Issue alerts & notifications',
      },
      {
        id: 'plan-four-feature-e',
        description: 'Industry-approved documentation',
      },
      {
        id: 'plan-four-feature-f',
        description: 'Monthly Compliance Review',
      },
    ],
  },
];

export const nistPlans = [
  {
    id: 'nist-one',
    name_one: 'Individual',
    name_two: '| <10 Devices |',
    price: 325.99,
    setup_price: 600,
    planid: '',
    total_cycles: 36,
    features: [
      {
        id: 'nist-plan-one-feature-a',
        description: 'Custom Compliance Portal',
      },
      {
        id: 'nist-plan-one-feature-b',
        description: 'Ongoing network scans',
      },
      {
        id: 'nist-plan-one-feature-c',
        description: 'Ongoing compliance reporting',
      },
      {
        id: 'nist-plan-one-feature-d',
        description: 'Issue alerts & notifications',
      },
      {
        id: 'nist-plan-one-feature-e',
        description: 'Industry-approved documentation',
      },
      {
        id: 'nist-plan-one-feature-f',
        description: 'Annual Compliance Review',
      },
    ],
  },
  {
    id: 'nist-two',
    name_one: 'Team',
    name_two: '| 11-100 Devices |',
    price: 699.99,
    setup_price: 600,
    planid: '',
    total_cycles: 36,
    features: [
      {
        id: 'nist-plan-two-feature-a',
        description: 'Custom Compliance Portal',
      },
      {
        id: 'nist-plan-two-feature-b',
        description: 'Ongoing network scans',
      },
      {
        id: 'nist-plan-two-feature-c',
        description: 'Ongoing compliance reporting',
      },
      {
        id: 'nist-plan-two-feature-d',
        description: 'Issue alerts & notifications',
      },
      {
        id: 'nist-plan-two-feature-e',
        description: 'Industry-approved documentation',
      },
      {
        id: 'nist-plan-two-feature-f',
        description: 'Semi-Annual Compliance Review',
      },
    ],
  },
  {
    id: 'nist-three',
    name_one: 'Corporate',
    name_two: '| 101-350 Devices |',
    price: 899.99,
    setup_price: 600,
    planid: '',
    total_cycles: 36,
    features: [
      {
        id: 'nist-plan-three-feature-a',
        description: 'Custom Compliance Portal',
      },
      {
        id: 'nist-plan-three-feature-b',
        description: 'Ongoing network scans',
      },
      {
        id: 'nist-plan-three-feature-c',
        description: 'Ongoing compliance reporting',
      },
      {
        id: 'nist-plan-three-feature-d',
        description: 'Issue alerts & notifications',
      },
      {
        id: 'nist-plan-three-feature-e',
        description: 'Industry-approved documentation',
      },
      {
        id: 'nist-plan-three-feature-f',
        description: 'Quarterly Compliance Review',
      },
    ],
  },
  {
    id: 'nist-four',
    name_one: 'Enterprise',
    name_two: '| 350+ Devices |',
    price: 1299.99,
    setup_price: 600,
    planid: '',
    total_cycles: 36,
    features: [
      {
        id: 'nist-plan-four-feature-a',
        description: 'Custom Compliance Portal',
      },
      {
        id: 'nist-plan-four-feature-b',
        description: 'Ongoing network scans',
      },
      {
        id: 'nist-plan-four-feature-c',
        description: 'Ongoing compliance reporting',
      },
      {
        id: 'nist-plan-four-feature-d',
        description: 'Issue alerts & notifications',
      },
      {
        id: 'nist-plan-four-feature-e',
        description: 'Industry-approved documentation',
      },
      {
        id: 'nist-plan-four-feature-f',
        description: 'Monthly Compliance Review',
      },
    ],
  },
];
