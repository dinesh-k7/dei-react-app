import React, { Fragment, ReactElement } from 'react';

import ProfileFormComponent from '../../components/profile-form/profile-form.component';
import { userFormData } from '../../constants/form-data/sign-up-form';
import HeroContainer from './container/hero/hero-container';
import './profile-page.scss';

const ProfilePage: React.FC = (): ReactElement => {
  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Profile page',
    },
  });
  return (
    <Fragment>
      <HeroContainer />
      <ProfileFormComponent formFields={userFormData} />
    </Fragment>
  );
};

export default ProfilePage;
