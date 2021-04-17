import React, { Fragment, ReactElement } from 'react';

import WdQuoteComponent from '../../components/wd-quote/wd-quote.component';

import redVector from '../../assets/images/red_vector.svg';
import WdIntro from '../smb/container/wd-intro/wd-intro';
import { websiteDevelopmentFormData } from '../../constants/form-data/website-development-form';

const WebsiteDevelopmentPage: React.FC = (): ReactElement => {
  const fromPage = 'wd';
  return (
    <Fragment>
      <WdIntro fromPage={'wd'} />
      <WdQuoteComponent
        fromPage={fromPage}
        vimage={redVector}
        formFields={websiteDevelopmentFormData}
      />
    </Fragment>
  );
};

export default WebsiteDevelopmentPage;
