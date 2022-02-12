import React, { Fragment, ReactElement } from 'react';

import SignUpFormComponent from '../../components/signup-form/signup-form.component';

import {
  signUpFormData,
  freelancerFormData,
  businessUserFormData,
  personalUserFormData,
} from '../../constants/form-data/sign-up-form';
import HeroContainer from './container/hero/hero-container';
import './signup-page.scss';

const SignUpPage: React.FC<any> = (props: any): ReactElement => {
  const { type } = props;

  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Sign up form page',
    },
  });
  let formData;
  if (type === 'freelancer') {
    formData = freelancerFormData;
  } else if (type === 'business') {
    formData = businessUserFormData;
  } else if (type === 'personal') {
    formData = personalUserFormData;
  } else if (!type) {
    formData = signUpFormData;
  }
  return (
    <Fragment>
      <HeroContainer type={type} />
      <SignUpFormComponent formFields={formData} action={type} />
    </Fragment>
  );
};

export default SignUpPage;
