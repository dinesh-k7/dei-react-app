import React, { ReactElement, useRef } from 'react';

import smbImage from '../../../../assets/images/smb_title.svg';
import smbBlobImage from '../../../../assets/images/smb_blob.svg';
import dsBlobImage from '../../../../assets/images/ds_blob.svg';
import wdBlobImage from '../../../../assets/images/wd_blob.svg';
import smbMobileImage from '../../../../assets/images/smb_title_mobile.svg';

import './smb-intro.scss';
import { constants } from '../../../../constants';

const SmbIntroContainer: React.FC<any> = ({
  onClickHandler,
}: any): ReactElement => {
  const dsRef = useRef(null);
  const wdRef = useRef(null);

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
    <section className="smb-intro">
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
          Secure and Develop your business with the DEI®️. Digital optimization
          is only a few clicks away.
        </p>
      </div>

      <div className="smb-services">
        <div className="service-one">
          <div className="ds-service">
            <img
              src={dsBlobImage}
              onClick={() => onClickHandler(constants.SMB.SECURE)}
              alt="Secure Service"
            />
            <span
              onMouseOver={() => onMouseOverHandler(dsRef)}
              onMouseOut={() => onMouseOutHandler(dsRef)}
              onClick={() => onClickHandler(constants.SMB.SECURE)}
              className="service-title"
            >
              Secure
            </span>
            <span className="ds-features" ref={dsRef}>
              <ul>
                <li>Data Sentinels</li>
                <li>Site Sentinels</li>
              </ul>
            </span>
          </div>
        </div>
        <div className="service-two">
          <div className="wd-service">
            <img
              src={wdBlobImage}
              onClick={() => onClickHandler(constants.SMB.DEVELOP)}
              alt="Develop Service"
            />
            <span
              onClick={() => onClickHandler(constants.SMB.DEVELOP)}
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
    </section>
  );
};

export default SmbIntroContainer;
