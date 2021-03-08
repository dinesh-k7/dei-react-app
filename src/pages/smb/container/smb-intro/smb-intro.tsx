import React, { ReactElement, useRef } from 'react';

import { constants } from '../../../../constants';
import smbImage from '../../../../assets/images/smb_title.svg';
import smbBlobImage from '../../../../assets/images/smb_blob.svg';
import dsBlobImage from '../../../../assets/images/ds_blob.svg';
import brandingBlobImage from '../../../../assets/images/branding_blob.svg';
import seoBlobImage from '../../../../assets/images/seo_blob.svg';
import auditBlobImage from '../../../../assets/images/audit_blob.svg';
import wdBlobImage from '../../../../assets/images/wd_blob.svg';
import smbMobileImage from '../../../../assets/images/smb_title_mobile.svg';

import './smb-intro.scss';

const SmbIntroContainer: React.FC<any> = ({
  onClickHandler,
}: any): ReactElement => {
  const dsRef = useRef(null);
  const brandingRef = useRef(null);
  const wdRef = useRef(null);
  const seoRef = useRef(null);
  const NWORef = useRef(null);

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
          Nearly every thing you need to become digitally optimized are just a
          few clicks away.
        </p>
      </div>
      <div className="smb-services">
        <div className="service-one">
          <div className="ds-service">
            <img
              src={dsBlobImage}
              onClick={() => onClickHandler(constants.SMB.DS)}
            />
            <span
              onMouseOver={() => onMouseOverHandler(dsRef)}
              onMouseOut={() => onMouseOutHandler(dsRef)}
              onClick={() => onClickHandler(constants.SMB.DS)}
            >
              Data Security
            </span>
            <span className="ds-features" ref={dsRef}>
              <ul>
                <li>Dark Web Monitoring</li>
                <li>Email Solutions</li>
              </ul>
            </span>
          </div>
          <div className="branding-service">
            <img
              src={brandingBlobImage}
              onClick={() => onClickHandler(constants.SMB.BRANDING)}
            />
            <span
              onMouseOver={() => onMouseOverHandler(brandingRef)}
              onMouseOut={() => onMouseOutHandler(brandingRef)}
              onClick={() => onClickHandler(constants.SMB.BRANDING)}
            >
              Branding
            </span>
            <span className="branding-features" ref={brandingRef}>
              <ul>
                <li>Graphic design</li>
                <li>Logo design</li>
              </ul>
            </span>
          </div>
        </div>
        <div className="service-two">
          <div className="wd-service">
            <img
              src={wdBlobImage}
              onClick={() => onClickHandler(constants.SMB.WD)}
            />
            <span
              onClick={() => onClickHandler(constants.SMB.WD)}
              onMouseOver={() => onMouseOverHandler(wdRef)}
              onMouseOut={() => onMouseOutHandler(wdRef)}
            >
              Website Development
            </span>
            <span className="wd-features" ref={wdRef}>
              <ul>
                <li>UX/UI</li>
                <li>Front-end</li>
                <li>Back-end</li>
              </ul>
            </span>
          </div>
        </div>
        <div className="service-three">
          <div className="seo-service">
            <img
              src={seoBlobImage}
              onClick={() => onClickHandler(constants.SMB.SEO)}
            />
            <span
              onMouseOver={() => onMouseOverHandler(seoRef)}
              onMouseOut={() => onMouseOutHandler(seoRef)}
              onClick={() => onClickHandler(constants.SMB.SEO)}
            >
              SEO & Marketing
            </span>
            <span className="seo-features" ref={seoRef}>
              <ul>
                <li>SEO</li>
                <li>Marketing</li>
              </ul>
            </span>
          </div>
          <div className="auditing-service">
            <img
              src={auditBlobImage}
              onClick={() => onClickHandler(constants.SMB.NWO)}
            />
            <span
              onMouseOver={() => onMouseOverHandler(NWORef)}
              onMouseOut={() => onMouseOutHandler(NWORef)}
              onClick={() => onClickHandler(constants.SMB.NWO)}
            >
              NWOhub
            </span>
            <span className="audit-features" ref={NWORef}>
              <ul>
                <li>Domains</li>
                <li>Website</li>
                <li>Hosting</li>
                <li>Email</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmbIntroContainer;
