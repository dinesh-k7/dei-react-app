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
    maxlength: 254,
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


export const field = [
  {
    name: "Email",
    label: "Enter Your Email",
    type: "email",
    required: true,
    placeholder: "e.g. user@gmail.com",
    pattern: patterns.email,
    id: "si-1",
    maxlength: 25400,
  },
  {
    name: "Subject",
    label: "Enter the Subject",
    type: "text",
    required: true,
    placeholder: "e.g. Payment related issue",
    // pattern: patterns.email,
    id: "si-1",
    maxlength: 25400,
  },
  {
    name: "Query",
    label: "Enter Your Query",
    type: "textbox",
    required: true,
    placeholder: "e.g. This is What i am having the issue.....",
    // pattern: patterns.email,
    id: "si-1",
    maxlength: 150,
  }
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
    maxlength: 254,
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
