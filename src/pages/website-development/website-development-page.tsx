import React, { Fragment, ReactElement } from 'react';

import WdQuoteComponent from '../../components/wd-quote/wd-quote.component';

import redVector from '../../assets/images/red_vector.svg';
//import WdIntro from '../smb/container/wd-intro/wd-intro';
import {
  DAOFormData,
  websiteDevelopmentFormData,
} from '../../constants/form-data/website-development-form';

const WebsiteDevelopmentPage: React.FC<any> = ({ path }): ReactElement => {
  const fromPage = 'wd' as any;
  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Website development Quote Page',
    },
  });
  //eslint-disable
  return (
    <Fragment>
      {/* <WdIntro fromPage={'wd'} /> */}
      <WdQuoteComponent
        fromPage={fromPage}
        vimage={redVector}
        path={path}
        formFields={
          path === '/dao-builder' ? DAOFormData : websiteDevelopmentFormData
        }
      />
    </Fragment>
  );
};

export default WebsiteDevelopmentPage;
