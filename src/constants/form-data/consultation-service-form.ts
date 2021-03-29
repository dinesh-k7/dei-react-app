import { constants, patterns } from '..';
import { industries } from '../industry-option';
export const consultationFormData = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    required: true,
    placeholder: 'e.g. John',
    section: 'personal',
  },
  {
    name: 'position',
    label: 'Position',
    type: 'select',
    required: true,
    placeholder: 'e.g. Project Manager',
    section: 'personal',
    options: constants.POSITION,
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
    name: 'websiteUrl',
    label: 'Company Website',
    type: 'text',
    required: true,
    placeholder: 'e.g. https://www.company.com',
    pattern: patterns.website_url,
    section: 'company',
  },

  {
    name: 'industry',
    label: 'Industry',
    type: 'select',
    required: true,
    placeholder: 'e.g. Apparel',
    section: 'company',
    options: industries,
  },
  {
    name: 'zipcode',
    label: 'Zip Code',
    type: 'text',
    required: true,
    placeholder: 'e.g. 90001',
    section: 'company',
  },
  // {
  //   name: 'package',
  //   label: 'Select Package',
  //   type: 'select',
  //   required: true,
  //   placeholder: 'e.g. ',
  //   section: 'company',
  //   options: [
  //     {
  //       id: 990,
  //       name: 'Comprehensive Trademark screening report - $499.00',
  //     },
  //     {
  //       id: 991,
  //       name:
  //         'Start-up Package A - Branding & Trademark registration - $1099.00',
  //     },
  //     {
  //       id: 992,
  //       name: 'Copyright registration + Federal Filing fee - $149.00',
  //     },
  //   ],
  // },
];
