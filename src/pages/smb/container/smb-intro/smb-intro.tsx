import React, { Fragment, ReactElement, useRef } from 'react';

import smbImage from '../../../../assets/images/smb_title.svg';
import smbBlobImage from '../../../../assets/images/smb_blob.svg';
import dsBlobImage from '../../../../assets/images/ds_blob.svg';
import wdBlobImage from '../../../../assets/images/wd_blob.svg';
import smbMobileImage from '../../../../assets/images/smb_title_mobile.svg';

import './smb-intro.scss';
import { useHistory } from 'react-router-dom';

const SmbIntroContainer: React.FC<any> = ({
  onClickHandler,
}: any): ReactElement => {
  const dsRef = useRef(null);
  const brandingRef = useRef(null);
  const wdRef = useRef(null);
  const seoRef = useRef(null);
  const NWORef = useRef(null);
  const history = useHistory();
  const routeChange = (url) => {
    history.push(url);
  };

  const onMouseOverHandler = (ref: any) => {
    if (ref && ref.current) {
      ref.current.classList.toggle('hover-text');
    }
  };
  const onMouseOutHandler = (ref: any) => {
    if (ref && ref.current) {
      ref.current.classList.toggle('hover-text');
    }
  };
  return (
    <Fragment>
      <div className="smb-intro">
        <div className="smb-container">
          <div className="smb-intro-image">
            <img className="coral-blob" src={smbBlobImage} alt="Coral vector" />
            <img
              src={smbImage}
              className="smb-title"
              alt="Small Medium sized business"
            />
            <img
              src={smbMobileImage}
              className="smb-mobile-title"
              alt="Small Medium sized business"
            />
          </div>
          <p className="smb-intro-text">
            Digital optimization only a few clicks away
          </p>
        </div>
      </div>
      <div className="smb-services">
        <div className="service-one">
          <div className="ds-service">
            <img src={dsBlobImage} onClick={() => routeChange('/secure')} />
            <span
              onMouseOver={() => onMouseOverHandler(dsRef)}
              onMouseOut={() => onMouseOutHandler(dsRef)}
              onClick={() => routeChange('/secure')}
              className="service-title"
            >
              Secure
            </span>
            <span className="ds-features" ref={dsRef}>
              <ul>
                <li>Dark Security</li>
                <li>Website Security</li>
              </ul>
            </span>
          </div>
        </div>
        <div className="service-two">
          <div className="wd-service">
            <img src={wdBlobImage} onClick={() => routeChange('/develop')} />
            <span
              onClick={() => routeChange('/develop')}
              onMouseOver={() => onMouseOverHandler(wdRef)}
              onMouseOut={() => onMouseOutHandler(wdRef)}
              className="service-title"
            >
              Develop
            </span>
            <span className="wd-features" ref={wdRef}>
              <ul>
                <li>Branding</li>
                <li>Website Development</li>
                <li>SEO & Marketing</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SmbIntroContainer;
