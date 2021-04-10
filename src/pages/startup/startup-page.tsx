import React, { Fragment, ReactElement, useRef } from 'react';

import StartupKitIntro from './container/startup-kit-intro/startup-kit-intro';
import NWOIntro from '../smb/container/nwo-intro/nwo-intro';
import BrandingIntro from '../smb/container/branding-intro/branding-intro';

import StartupIntroContainer from './container/startup-intro/startup-intro';
import './startup-page.scss';
import { constants } from '../../constants';

const scrollToRef = (ref: any) => {
  const element = ref.current?.offsetTop;

  if (element) window.scrollTo(0, element);
};

const StartUpPage: React.FC = (): ReactElement => {
  const startupKitRef = useRef(null);
  const brandingRef = useRef(null);
  const NWORef = useRef(null);

  const onClickHandler = (section) => {
    switch (section) {
      case constants.STARTUP:
        scrollToRef(startupKitRef);
        break;
      case constants.SMB.NWO:
        scrollToRef(NWORef);
        break;
      case constants.SMB.BRANDING:
        scrollToRef(brandingRef);
        break;
      default:
        break;
    }
  };
  return (
    <Fragment>
      <section className="startup-page-grid">
        <StartupIntroContainer onClickHandler={onClickHandler} />
        <StartupKitIntro inputRef={startupKitRef} />
        <NWOIntro inputRef={NWORef} />
        <BrandingIntro inputRef={brandingRef} />
      </section>
      <div className="landing-border"></div>
    </Fragment>
  );
};

export default StartUpPage;
