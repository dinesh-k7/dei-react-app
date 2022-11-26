import React, { Fragment, ReactElement } from 'react';

import SignUpFormComponent from '../../components/signup-form/signup-form.component';
import { consultationFormData } from '../../constants/form-data/consultation-service-form';

import {
  signUpFormData,
  freelancerFormData,
  businessUserFormData,
  personalUserFormData,
  serviceFormData,
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

  switch (type) {
    case 'active-ego':
    case 'nwo':
    case 'dao':
      formData = serviceFormData;
      break;
    case 'freelancer':
      formData = freelancerFormData;
      break;
    case 'business':
      formData = businessUserFormData;
      break;
    case 'personal':
      formData = personalUserFormData;
      break;
    case 'dao-consultation':
      formData = consultationFormData;
      break;
    default:
      formData = signUpFormData;
      break;
  }

  return (
    <Fragment>
      <HeroContainer type={type} />
      <SignUpFormComponent formFields={formData} action={type} />
    </Fragment>
  );
};

export default SignUpPage;
