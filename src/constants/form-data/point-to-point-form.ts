import { patterns, constants } from '..';
import { industries } from '../industry-option';
export const PointToPointFormData = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    required: true,
    placeholder: 'e.g. John',
    section: 'personal',
    pattern: patterns.name,
    maxlength: 75,
  },
  {
    name: 'position',
    label: 'Position',
    type: 'select',
    required: true,
    placeholder: 'e.g. Project Manager',
    options: constants.POSITION,
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
    maxlength: 254,
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'text',
    required: true,
    placeholder: 'e.g. 123456789',
    section: 'personal',
    pattern: patterns.phone,
  },
  {
    name: 'companyName',
    label: 'Company Name',
    type: 'text',
    required: true,
    placeholder: 'e.g. JohnDoe and co.',
    section: 'company',
    maxlength: 127,
  },
  {
    name: 'websiteUrl',
    label: 'Company Website',
    type: 'text',
    required: true,
    placeholder: 'e.g. https://www.company.com',
    pattern: patterns.website_url,
    section: 'company',
    maxlength: 100,
  },
  {
    name: 'companySize',
    label: 'Company size',
    type: 'number',
    required: true,
    placeholder: '0',
    section: 'company',
    min: 1,
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
    name: 'comment',
    label: 'Comment',
    type: 'textarea',
    required: true,
    placeholder: 'Max 250 Char',
    maxlength: 250,
    section: 'location',
  },
];