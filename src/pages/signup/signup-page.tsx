import React, { Fragment, ReactElement } from 'react';

import SignUpFormComponent from '../../components/signup-form/signup-form.component';

import { signUpFormData } from '../../constants/form-data/sign-up-form';
import HeroContainer from './container/hero/hero-container';
import './signup-page.scss';

const SignUpPage: React.FC = (): ReactElement => {
  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Sign up form page',
    },
  });
  return (
    <Fragment>
      <HeroContainer />
      <SignUpFormComponent formFields={signUpFormData} />
    </Fragment>
  );
};

export default SignUpPage;
