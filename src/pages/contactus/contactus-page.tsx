import React, { Fragment, ReactElement } from 'react';

import ContactusFormComponent from '../../components/contactus-form/contactus-form.component';

import { contactusFormData } from '../../constants/form-data/contactus-form';
import HeroContainer from './container/hero/hero-container';
import './contactus-page.scss';

const ContactUsPage: React.FC = (): ReactElement => {
  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Contact us form page',
    },
  });
  return (
    <Fragment>
      <HeroContainer />
      <ContactusFormComponent formFields={contactusFormData} />
    </Fragment>
  );
};

export default ContactUsPage;
