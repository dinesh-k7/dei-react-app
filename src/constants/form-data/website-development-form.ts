import { constants, patterns } from '..';
import { industries } from '../industry-option';
export const websiteDevelopmentFormData = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    required: true,
    placeholder: 'e.g. John',
    section: 'personal',
    id: 'wd-1',
    pattern: patterns.name,
    maxlength: 75,
  },
  {
    name: 'lastname',
    label: 'Last Name',
    type: 'text',
    required: true,
    placeholder: 'e.g. Doe',
    section: 'personal',
    id: 'wd-2',
    pattern: patterns.name,
    maxlength: 75,
  },
  {
    name: 'email',
    label: 'E-mail',
    type: 'text',
    required: true,
    placeholder: 'e.g. johndoe@email.com',
    section: 'personal',
    id: 'wd-3',
    maxlength: 254,
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'text',
    required: true,
    placeholder: 'e.g. 123456789',
    section: 'personal',
    id: 'wd-4',
    pattern: patterns.phone,
  },
  {
    name: 'companyName',
    label: 'Company Name',
    type: 'text',
    required: true,
    placeholder: 'e.g. JohnDoe and co.',
    section: 'company',
    id: 'wd-4',
    maxlength: 127,
  },
  {
    name: 'industry',
    label: 'Industry',
    type: 'select',
    required: true,
    placeholder: 'e.g. Apparel',
    section: 'company',
    options: industries,
    id: 'wd-5',
  },
  {
    name: 'position',
    label: 'Your position in company',
    type: 'select',
    required: true,
    placeholder: 'e.g. Project Manager',
    section: 'company',
    options: constants.POSITION,
    id: 'wd-6',
  },
  {
    name: 'aboutCompany',
    label: 'Tell us about your company',
    type: 'textarea',
    required: true,
    placeholder: 'e.g. Accounting',
    maxlength: 1000,
    section: 'company',
    id: 'wd-7',
  },
  {
    name: 'targetAudience',
    label: 'What is your target audience',
    type: 'textarea',
    required: true,
    placeholder: 'e.g. Accounting',
    maxlength: 1000,
    section: 'company',
    id: 'wd-8',
  },
  {
    name: 'isContent',
    label: 'Will you write the content for the website?',
    type: 'radio',
    required: true,
    section: 'company',
    id: 'wd-9',
  },
  {
    name: 'comment',
    label: 'Additional comment',
    type: 'textarea',
    required: true,
    placeholder: 'e.g. comment',
    maxlength: 1000,
    section: 'company',
    id: 'wd-10',
  },
];
