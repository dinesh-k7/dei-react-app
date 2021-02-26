import React, { Fragment, ReactElement } from 'react';

import HeroContainer from './container/hero/hero-container';
import './enterprise-page.scss';

const EnterprisePage: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <HeroContainer />
      <div className="bottom-border"></div>
    </Fragment>
  );
};

export default EnterprisePage;
