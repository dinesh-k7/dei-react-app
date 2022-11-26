import React, { Fragment, ReactElement } from 'react';

import ResetPasswordComponent from '../../components/reset-password/reset-password.component';
import { resetPasswordFormData } from '../../constants/form-data/sign-in-form';
import './reset-password-page.scss';

const ResetPasswordPage: React.FC<any> = (props: any): ReactElement => {
  const { fromPage } = props;
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
      <ResetPasswordComponent
        formFields={resetPasswordFormData}
        fromPage={fromPage}
      />
    </Fragment>
  );
};

export default ResetPasswordPage;
