import React, { Fragment, ReactElement, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import SmbIntroContainer from './container/smb-intro/smb-intro';
import './smb-page.scss';
import { constants } from '../../constants';

const scrollToRef = (ref: any) => {
  const element = ref.current?.offsetTop;
  if (element) window.scrollTo(0, element);
};

const LandingPage: React.FC = (): ReactElement => {
  const dsRef = useRef(null);
  const brandingRef = useRef(null);
  const wdRef = useRef(null);
  const seoRef = useRef(null);
  const NWORef = useRef(null);
  const siteRef = useRef(null);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash && hash.includes(constants.SMB.NWO)) {
      scrollToRef(NWORef);
    }
  }, []);

  const onClickHandler = (section) => {
    switch (section) {
      case constants.SMB.DS:
        scrollToRef(dsRef);
        break;
      case constants.SMB.NWO:
        scrollToRef(NWORef);
        break;
      case constants.SMB.BRANDING:
        scrollToRef(brandingRef);
        break;
      case constants.SMB.SEO:
        scrollToRef(seoRef);
        break;
      case constants.SMB.WD:
        scrollToRef(wdRef);
        break;
      case constants.SMB.SITE:
        scrollToRef(siteRef);
        break;
      default:
        break;
    }
  };

  return (
    <Fragment>
      <div className="smb-page-grid">
        <SmbIntroContainer onClickHandler={onClickHandler} />
      </div>
      <div className="landing-border"></div>
    </Fragment>
  );
};

export default LandingPage;
