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
