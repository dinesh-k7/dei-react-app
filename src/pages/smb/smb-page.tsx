import React, { Fragment, ReactElement, useRef } from 'react';

import SmbIntroContainer from './container/smb-intro/smb-intro';
import SecureIntro from './container/secure-intro/secure-intro';
import DevelopIntro from './container/develop-intro/develop-intro';
import './smb-page.scss';
import { constants } from '../../constants';

const scrollToRef = (ref: any) => {
  const element = ref.current?.offsetTop;
  if (element) window.scrollTo(0, element);
};

const LandingPage: React.FC = (): ReactElement => {
  const developRef = useRef(null);
  const secureRef = useRef(null);

  const onClickHandler = (section) => {
    switch (section) {
      case constants.SMB.DEVELOP:
        scrollToRef(developRef);
        break;
      case constants.SMB.SECURE:
        scrollToRef(secureRef);
        break;
      default:
        break;
    }
  };

  return (
    <Fragment>
      <section className="smb-page-grid">
        <SmbIntroContainer onClickHandler={onClickHandler} />
        <SecureIntro inputRef={secureRef} fromPage={'smb'} />
        <DevelopIntro inputRef={developRef} fromPage={'smb'} />
      </section>
      <div className="landing-border"></div>
    </Fragment>
  );
};

export default LandingPage;
