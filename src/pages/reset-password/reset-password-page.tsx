import React, { Fragment, ReactElement } from 'react';

import ResetPasswordComponent from '../../components/reset-password/reset-password.component';
import { resetPasswordFormData } from '../../constants/form-data/sign-in-form';
import './reset-password-page.scss';

const ResetPasswordPage: React.FC = (): ReactElement => {
  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Reset password page',
    },
  });
  return (
    <Fragment>
      <ResetPasswordComponent formFields={resetPasswordFormData} />
    </Fragment>
  );
};

export default ResetPasswordPage;
