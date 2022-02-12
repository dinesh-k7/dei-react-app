import { patterns } from '..';

export const contactusFormData = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    required: true,
    placeholder: 'e.g. John',
    id: 'cf-1',
    pattern: patterns.name,
    maxlength: 75,
  },
  {
    name: 'email',
    label: 'E-mail',
    type: 'text',
    required: true,
    placeholder: 'e.g. johndoe@email.com',
    pattern: patterns.email,
    maxlength: 254,
    id: 'cf-2',
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'text',
    required: true,
    placeholder: 'e.g. 123456789',
    id: 'cf-3',
    pattern: patterns.phone,
  },
  {
    name: 'comment',
    label: 'Additional Comment',
    type: 'textarea',
    required: true,
    placeholder: 'Max 1000 Char',
    maxlength: 1000,
    id: 'cf-4',
  },
];
