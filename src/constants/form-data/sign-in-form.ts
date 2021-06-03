import { patterns } from '..';

export const signInFormData = [
  {
    name: 'email',
    label: 'E-mail',
    type: 'text',
    required: true,
    placeholder: 'e.g. johndoe@email.com',
    pattern: patterns.email,
    id: 'si-1',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    required: true,
    placeholder: 'Password',
    section: 'personal',
    id: 'si-2',
  },
];

export const resetPasswordFormData = [
  {
    name: 'email',
    label: 'E-mail',
    type: 'text',
    required: true,
    placeholder: 'e.g. johndoe@email.com',
    pattern: patterns.email,
    id: 're-1',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    required: true,
    placeholder: 'Password',
    section: 'personal',
    pattern: patterns.password,
    id: 're-2',
  },
  {
    name: 'cpassword',
    label: 'Confirm Password',
    type: 'password',
    required: true,
    placeholder: 'Confirm Password',
    section: 'personal',
    id: 're-2',
  },
];
