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
  DATA_SENTINELS: 'DATA_SENTINELS',
  COMPANY_SIZE: 4,
  OFFER_PERCENTAGE: 0.12,
  COACHING_PACKAGE_ID: 994,
  CYBER_SECURITY: 'Cyber Security',
  PHYSICAL_SECURITY: 'Physical Security',
  SDWAN: 'SD-WAN',
  SDWAN_SERVICE: 'SDWAN SERVICE',
  POINT_TO_POINT: 'Point To Point',
  MPLS: 'MPLS',
  COLOCATION: 'Colocation',
  PUBLIC_CLOUD: 'Public Cloud',
  BACKUP_DISASTER: 'Backup & Disaster Recovery Services',
  BACKUP_SERVICE: 'Backup Service',
  STORAGE: 'Storage',
  VIRTUAL_SERVERS: 'Virtual Servers',
  WIRELESS_BACKUP: 'Wireless Backup Failover Solutions',
  MD_SOLUTION: 'Managed Data Solutions',
  UNIFIED_COMM: 'Unified Communications',
  CONFERENCING: 'Conferencing',
  CONTACT_CENTER: 'Contact Center',
  SIP: 'SIP Trunk',
  VOIP: 'Hosted VOIP',
  POTS: 'POTS',
  PRI: 'PRI',
  IT_CONSULTING: 'IT Consulting Services',
  IT_SERVICE: 'IT Consulting',
  IT_SOLUTION: 'IT Solutions',
  DEI_VSA: 'DEI VSA',
  DEI_VSA_REGISTERED: 'DEI® VSA',
  DEI_BACKUP: 'DEI Backup',
  DEI_BACKUP_REGISTERED: 'DEI® Secure Backup',
  MD_SERVICES: 'Managed Hosting Services',
  CLOUD_BACKUP: 'Cloud backup & failover strategies',
  CLOUD_SERVICE: 'Cloud Backup',
  HANDS_FREE: '"Hands-Free" solutions to managing your data',
  HANDS_FREE_SERVICE: 'Hands Free',
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
      url: '/sign-in',
      name: 'Sign-In',
    },

    {
      url: '/logout',
      name: 'Sign-Out',
    },

    {
      url: '/startup-kit',
      name: 'Start-Up Kits',
    },
    {
      url: 'https://www.deiportal.com/',
      name: 'DEIportal',
      target: '_blank',
    },

    {
      url: '/data-sentinels',
      name: 'Data Security',
    },
    {
      url: '/compliance-central',
      name: 'Compliance Central',
    },
    {
      url: '/wall-of-love',
      name: 'Wall of Love™️',
    },
    {
      url: '',
      href: '#it-services',
      name: 'Enterprise Services',
    },

    // {
    //   url: '/freelance-certification',
    //   name: 'Freelancer Registration',
    // },
    // {
    //   url: '/dao-registration',
    //   name: 'Business Registration',
    // },
    {
      url: '/order-history',
      name: 'Orders',
    },
    // {
    //   url: 'smb',
    //   name: `SMB's Services`,
    // },

    {
      url: '/help',
      name: 'Help',
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

  EXPERIENCES: [
    {
      id: 1,
      name: '2 - 4 Years',
    },
    {
      id: 2,
      name: '4 - 6 Years',
    },
    {
      id: 3,
      name: '6 - 8 Years',
    },
    {
      id: 4,
      name: '8 - 10 Years',
    },
    {
      id: 5,
      name: '10 - 15 Years',
    },
    {
      id: 6,
      name: '15+ Years',
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
  VIMEO_VIDEOID: 696985927,
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
  skills: [{ type: 'required', message: '*Please enter skills' }],
  experience: [{ type: 'required', message: '*Please enter experience' }],
  isp: [{ type: 'required', message: '*Please enter ISP' }],
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
  email:
    /^([\w.-]+)@(\[(\d{1,3}\.){3}|(?!hotmail|googlemail|yahoo|gmx|ymail|outlook|bluewin|protonmail|t-online|web\.|online\.|aol\.|live\.)(([a-zA-Z\d-]+\.)+))([a-zA-Z]{2,4}|\d{1,3})(\]?)$/i,
  website_url:
    /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/i,
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
    id: 992,
    active: false,
    name: 'DEI® DAO Bundle™ Step 1',
    description: 'DEI® DAO Bundle™ Step 1',
    description_one: 'Premium DAO Starter™',
    price: 9900,
    service: 'Premium Manifestation PWA',
    features: [
      'Premium PWA - Publishing Platform',
      'Branding kit',
      'Composite mark registration',
      '2 (1 hour) sessions with Mr. NWO',
      'DIY Guide',
      'Markdown',
    ],
    quantity: 1,
  },
  {
    id: 996,
    active: false,
    name: 'DEI® DAO Bundle™ Step 2',
    description: 'Step 2 DAO Builder™',
    description_one: 'Secure Deployment',
    price: '13,333.00 + $399.99/mo*',
    service: '',
    quantity: 1,
    features: [
      'DEI® DAO Certified Application Deployment',
      'Encrypted Host/Client Connection',
      'Managed Network Security',
      'Developer Secure S.O.P.',
      'Data hygiene training',
      'Sentinels Club Only',
    ],
  },
  {
    id: 994,
    active: false,
    name: 'Package A',
    description: 'Mr. NWO Coaching',
    description_one: 'Mr. NWO Coaching',
    price: '3,000,000.00 Platinum',
    service: '',
    quantity: 1,
    features: [
      'Mr. NWO Creative',
      'Proprietary Geo-Political Marketing Package',
      'Creative Insight',
    ],
  },
  {
    id: 995,
    active: false,
    name: 'DEI® DAO Bundle™ Step 3',
    description: 'DEI® DAO Bundle™ Step 3',
    description_one: 'Hands on training with security in mind',
    price: '5,999.99',
    service: '',
    quantity: 1,
    features: [
      'DEI® Certified',
      'Encrypted Host/Client Connection',
      'Managed Network Security',
      'Versioning S.O.P.',
      'Sentinels Club Only',
      'Proprietary Privacy Enhancing Technology or PET',
    ],
  },
 {
    id: 993,
    active: false,
    name: 'DEI® DAO Bundle™ Step 4',
    description: 'White Glove DAO Preparation',
    description_one: 'DAO Plan, Branding and Registration',
    description_two: '',
    description_three: '',
    description_four: '',
    price: '14,999.99',
    service: 'Digital Security Consultation',
    quantity: 1,
    features: [
      '50+ page business and marketing plan delivered in PDF and Word format, including current market analysis, all research, financial spreadsheets, graphs, charts, tables, and visuals.',
      'MarketLine, Barnes, eMarketer, MarketingCharts, Deloitte, Forrester, CountryWatch, BMI Research, and First Research conduct research.',
      'A true white glove experience with the formation of an operating agreement and the first smart contract for your new DEI® DAO™.',
      'Mr. NWO will be your tutor to help you learn exactly how to implement a superior Security, Effecient and Transparent business DAO that will help build the distributed web! Be Number 14! Lets go!',
    ],
  },
   {
    id: 990,
    active: false,
    name: 'DEI®️ Certification - Freelancer',
    description: 'DEI®️ Certification - Freelancer',
    description_one: 'NWO™ Zero Trust Protocol',
    price: 7.99,
    monthly: true,
    additional_fee: 99,
    service: 'Consultations & Coaching',
    quantity: 1,
    features: [
      'Email - Integrated Security Solution',
      'Data Hygiene Training',
      'Password Manager tools and tips',
      'Added to the NWO™ preferred hiring Database',
      'Security best practice trainings',
      '3rd party hardware checklist',
      '3rd party software checklist',
    ],
  },
  {
    id: 991,
    active: false,
    name: 'DEI®️ Certification - Business',
    description: 'DEI®️ Certification - Business',
    description_one: 'DEI®️ Zero Trust Protocol',
    price: 1999,
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
      'Pentest - Hybrid Documentation',
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
  name: 'DEI®️ Custom Designs',
  price: 2998,
  id: 80001,
  description: 'DEI®️ Custom Designs',
};

export const ds = {
  name: 'Data Sentinels',
  id: 60001,
  description: 'Data Sentinels',
};

export const modalData = {
  title: 'Quality experience is our priority!',
  description:
    'We demonstrate our commitment to providing gold standard customer experiences by restricting the number of orders submitted. Please allow us the time to scale up as we implement adaptive management strategies to optimize our performance. We appreciate your patience. Please fill out the form, and an account executive will coordinate the fulfillment of your order as soon as possible. Thank you for growing with us! Together we are better!',
  textOne: 'textOne',
};

export const copyrightData = {
  title: 'Copyright',
  description:
    'The materials on this web site are forbidden to be transmitted, used, reproduced or , in part or in whole or , by any means, or in any form mechanical or electronic, including recording, photocopying, or using any information retrieval and storage system, except where expcilitly provided for in the Terms and Conditions of Use of The DEI®️ Website, without written permission from the publisher.',
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

export const ENTERPRISE_SERVICES = {
  CYBER_SECURITY: {
    description_one: `Cyber Security is intentionally complex, and the DEI®️ has access to some of the top experts in this field. The DEI®️ discovers customer requirements to meet the needs of today. We customize security or SECaaS solutions to meet any customer's security needs. Including:`,
    features: [
      {
        id: 'cf-1',
        description: `Network security`,
      },
      {
        id: 'cf-2',
        description: `ID management`,
      },
      {
        id: 'cf-3',
        description: `Secure access`,
      },
      {
        id: 'cf-4',
        description: `Data Security`,
      },
      {
        id: 'cf-5',
        description: `Site Security and more`,
      },
    ],
  },
  DEI_BACKUP: {
    description_one: `When a natural disaster strikes, it is critical to get your systems back online quickly while you are still reeling from the impact. That is exactly what our DEI® Local Back-Up provides – fast recovery from a local hardware or system failure.`,
    features: [
      {
        id: 'cf-1',
        description: `Top Tech Delivered`,
      },
      {
        id: 'cf-2',
        description: `Redundant Back-Up is Essential`,
      },
      {
        id: 'cf-3',
        description: `Secure access`,
      },
      {
        id: 'cf-4',
        description: `Data Security`,
      },
    ],
  },
  PHYSICAL_SECURITY: {
    description_one: `Our Cloud-Based Video Monitoring solutions platform includes industry executives with decades of experience. We can provide SMB's and Enterprise Businesses with any video need. Having a secure view of your business allows you to focus on growth.`,
    features: [],
  },
  SDWAN: {
    description_one: `Single source provider for all SD-WAN service needs. redundancy, security, and quality of experience. Software-Defined Wide Area Networking (SD-WAN) Revolutionized the way channel and IT organizations think about networking multiple locations. Our SD-WAN portfolio will provide better than any other master agent.`,
    features: [],
  },
  POINT_TO_POINT: {
    description_one: `Point to Point Connections is a closed network data transport service that does not traverse the public internet and is secure with no data encryption needed. Two or more locations are connected securely for private data services providing your businesses with reliable, secure network data service applications, credit card processing, file sharing, data backup, VOIP, and video conferencing`,
    features: [],
  },
  MPLS: {
    description_one: `Multi-Protocol Label Switching (MPLS) is the backdoor that routes and switches technology to provide Layer 3 route at Layer 2 speeds and enabling multiple virtual networking environments and services to be delivered on a single layer 1 connection.`,
    description_two:
      '(SDN) or Software-Defined Networking is the separation of the Network Control Plane and the Data Plane.',
    description_three:
      'Our global network gives you the ability to directly affect and control the real-time changes with bandwidth & Quality of Service or QoS.',
    description_four:
      'The proprietary code changes and writes precisely to our PE routers (In virtualized network space with the customers) our web portal or even their smartphones.',
    description_five:
      'This requested by direct control flexibility allows our clients to control their changing network needs; eliminating the need for CLI access to the hardware that controls the data flow.',
    features: [],
  },
  COLOCATION: {
    description_one: `DEI®️ networks with 1400 carrier-neutral colocation facilities around the globe (and growing), available for you to offer to your customers. Our exclusive data center locator tool is available for you to find the best data center to meet your customer’s needs.`,
    features: [],
  },
  PUBLIC_CLOUD: {
    description_one: `Providing your customers with public cloud solutions like AWS® and Azure® is only the beginning. The DEI®️ and partner portfolio can show you a model that will optimize your profitablity in these deals.`,
    features: [],
  },
  BACKUP: {
    description_one: `There is a big difference between disaster recovery and DEI®️ back-up and data preservation. You should understand your organization's data footprint and exposure. When you do we can then define custom solutions to meet your back-up and recovery needs. Our solutions meet your budget goals and provide you with optimal versatility and reliability. From terabytes to petabites we can provide the best solutions that meet your needs.`,
    features: [],
  },
  VIRTUAL_SERVERS: {
    description_one: `The DEI®️ gives you the flexibility of virtualization for nearly all computing solutions:`,
    description_two: `Our selection of Virtual Machines —development and testing, running applications, even extending your data center. Combined with the freedom of open-source software customized for your need. You can deploy in minutes instead of weeks. Manifest Digital Destiny with The DEI®️`,
    features: [
      {
        id: 'vs-1',
        description: 'Linux',
      },
      {
        id: 'vs-2',
        description: 'Windows Server',
      },
      {
        id: 'vs-3',
        description: 'SQL Server',
      },
      {
        id: 'vs-4',
        description: 'Oracle',
      },
      {
        id: 'vs-5',
        description: 'IBM',
      },
      {
        id: 'vs-6',
        description: 'SAP',
      },
    ],
  },
  UNIFIED: {
    description_one: `The DEI®️ provides connections with all (UC) or Unified Communications providers with/in the magic quadrant of Gartner. This enables us to meet your customer's needs above and beyond. A quality that only a few vendors can provide. With unmatched experience selling Unified Communications as a Service (UCaaS), our group confidently can deliver domestic and international needs:`,
    features: [
      {
        id: 'un-1',
        description: 'Basic telephony',
      },
      {
        id: 'un-2',
        description: 'Video',
      },
      {
        id: 'un-3',
        description: 'Conferencing',
      },
      {
        id: 'un-4',
        description: 'Collaboration',
      },
      {
        id: 'un-5',
        description: 'Contact Center',
      },
      {
        id: 'un-6',
        description:
          'Messaging both Email with voice mail and (UM) or unified messaging',
      },
      {
        id: 'un-7',
        description: '(IM &P) - Instant messaging and presence',
      },
      {
        id: 'un-8',
        description: 'Soft-Clients',
      },
      {
        id: 'un-9',
        description:
          'Communications-enabled applications — For example, integrated collaboration and contact center applications',
      },
      {
        id: 'un-10',
        description: 'and more',
      },
    ],
  },
  CONFERENCING: {
    description_one: `We know that engaging with your remote workers is a necessity. Our web conferencing solutions define digital intimacy by making conferencing feel more spontaneous, instant, and natural. Engaging collaborations are just a few clicks away.`,
    description_two: `Our audio conferencing solutions can meet any business need. We are dedicated to making clear connections worldwide at any time, day or night.`,
    features: [
      {
        id: 'cf-1',
        description: 'conduct meetings',
      },
      {
        id: 'cf-2',
        description: 'sales demos',
      },
      {
        id: 'cf-3',
        description: 'remote support',
      },
      {
        id: 'cf-4',
        description: 'training sessions',
      },
    ],
  },
  CONTACT_CENTER: {
    description_one: `Cloud service or on-premise systems our ACD services are highly available to ensure critical customer interactions are successful across all channels;`,
    features: [
      {
        id: 'cc-1',
        description: 'Inbound & Outbound voice',
      },
      {
        id: 'cc-2',
        description: 'IVR or Interactive Voice Response,',
      },
      {
        id: 'cc-3',
        description: 'Chat and email',
      },
      {
        id: 'cc-4',
        description: 'Instant messaging and presence (IM &P)',
      },
      {
        id: 'cc-5',
        description: 'CTI (screen pop)',
      },
    ],
    description_two: `Managed workforce optimization combined with multi-channel quality assurance recording enables workforce optimization. Providing your customers with a seemingly effortless experience`,
  },
  SIP: {
    description_one: `Forming a direct connection between your organization and its ITSP is called a SIP trunk. With it, your VoIP telephony extends beyond your firewall without the need for an additional IP-PSTN gateway.
    Additionally, SIP trunks can carry`,
    features: [
      {
        id: 'sip-1',
        description: 'Instant messages,',
      },
      {
        id: 'sip-2',
        description: 'Multimedia conferences,',
      },
      {
        id: 'sip-3',
        description: 'User presence information,',
      },
      {
        id: 'sip-4',
        description: 'Enhanced 9-1-1 emergency calls,',
      },
      {
        id: 'sip-5',
        description: 'Other SIP-based,',
      },
      {
        id: 'sip-6',
        description: 'Real-time communications services.',
      },
    ],
    description_two: `Making it easier to configure and less expensive to design, operate, maintain, and upgrade. An investment in SIP trunking can give a quick and substantial return on investment by enabling ITSPs to deliver service at significant savings.`,
  },
  POTS: {
    description_one: `A Plain Old Telephone System is a traditional landline with copper wiring making and recieving calls. For some, traditional telephone services is still the best choice. However, modern advancements provide similar services with better pricing. So, before making a final desicion on your landline provider book a consultation with us!`,
    features: [],
  },
  PRI: {
    description_one: `Primary Rate Interface or PRI, is the standard service level for carrying digital voice and data services. Some companies have made the investment of a PBX, features like auto attendants, ring groups, hold music, etc, offset the expense. A larger business with multiple locations might be better served with MPLS and SIP trunking. A medium to a large-sized business needing 23 simultaneous phone calls would benefit the most from a PRI. Don't get stuck paying for services that you won't use.`,
    description_two:
      'Book a consultation with the DEI®️ we can help you determine if a PRI is the right solution.',
  },
  IT_CONSULTING: {
    description_one: `Optimizing your enterprise's efficiency is essential to compete in today's world, no matter your size. The DEI®️ provides IT consulting services to companies looking for more productivity and profitability. We can help you identify the unnecessary redundancies in your process and cost. Our knowledge and expertise can make your technology work for you!`,
    features: [],
  },
  IT_SOLUTIONS: {
    description_one: `Gain access to monitoring services and traditional IT support at a predictable monthly subscription rate customized for your unique enterprise needs.`,
    features: [],
  },
  HANDS_FREE: {
    description_one: `Our integrated fleet management solutions give you the visibility that allows proactive management of your drivers. Remote and Centralized access to:`,
    description_two: `Operate your business safely and productively with our managed data solution.`,
    features: [
      {
        id: 'hf-1',
        description: 'GPS locations',
      },
      {
        id: 'hf-2',
        description: 'Gauging sensors',
      },
      {
        id: 'hf-3',
        description: 'Engine troubles',
      },
      {
        id: 'hf-4',
        description: 'Violations',
      },
    ],
    features_two: [
      {
        id: 'hf-5',
        description: 'Service & Platform',
      },
      {
        id: 'hf-6',
        description: 'Inventory Control',
      },
      {
        id: 'hf-7',
        description: 'Reporting Capabilities',
      },
      {
        id: 'hf-8',
        description: 'Custom Monitoring Tools',
      },
      {
        id: 'hf-9',
        description: 'Web-Based Provisioning Portal',
      },
      {
        id: 'hf-10',
        description: 'Usage Thresholds',
      },
    ],
  },
  CLOUD_BACKUP: {
    description_one: `You can protect your digital enterprise from interruption of services with DEI®️:tm: wireless backup and failover strategies & solutions. Mitigate poor customer experiences, resulting in revenue loss by quickly detecting a connection issue and solving it. Gone are the days when you can rely on a simple internet service alone:`,
    description_two: `Our strategies and solutions can save you time and money.`,
    features: [
      {
        id: 'cb-1',
        description: 'Disruptions in communication',
      },
      {
        id: 'cb-2',
        description: 'Decreased productivity',
      },
      {
        id: 'cb-3',
        description: 'Lack of trust',
      },
    ],
    features_two: [
      {
        id: 'cb-6',
        description: 'Customer User Interface',
      },
      {
        id: 'cb-7',
        description: 'Managed Workflow',
      },
      {
        id: 'cb-8',
        description: 'Custom Proposal and Packages',
      },
      {
        id: 'cb-9',
        description: 'Routine Plan Optimization',
      },
      {
        id: 'cb-10',
        description: 'Managed Threshold Alerting & Monitoring',
      },
      {
        id: 'cb-11',
        description: 'Billing As A Service',
      },
      {
        id: 'cb-12',
        description: 'Dedicated Sales and Support Staff',
      },
    ],
  },
  STORAGE: {
    description_one: `A critical component of cloud computing is storage.`,
    description_two: `Storing data in the Cloud offers increase:`,
    description_three: `Above the traditional on-premises storage systems.`,
    description_four: `The DEI®️ offers a broad scope of storage services for your application's archival requirements so you remain compliant. with:`,
    description_five: `You can start designing the foundation of your cloud IT environment today.`,
    features_two: [
      {
        id: 'st-1',
        description: 'Reliability',
      },
      {
        id: 'st-2',
        description: 'Scalability',
      },
      {
        id: 'st-3',
        description: 'Security',
      },
    ],
    features_four: [
      {
        id: 'st-4',
        description: 'Object',
      },
      {
        id: 'st-5',
        description: 'File',
      },
      {
        id: 'st-6',
        description: 'Block storage services',
      },
      {
        id: 'st-7',
        description: 'Cloud data migration',
      },
    ],
  },
};
