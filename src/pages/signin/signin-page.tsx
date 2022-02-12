import React, { Fragment, ReactElement } from 'react';

import SignInFormComponent from '../../components/signin-form/signin-form.component';
import { signInFormData } from '../../constants/form-data/sign-in-form';
import './signin-page.scss';

const SignInPage: React.FC = (): ReactElement => {
  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Sign In form page',
    },
  });
  return (
    <Fragment>
      <SignInFormComponent formFields={signInFormData} />
    </Fragment>
  );
};

export default SignInPage;
