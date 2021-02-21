import React, { ReactElement } from 'react';

import smbImage from '../../../../assets/images/smb_title.svg';
import smbBlobImage from '../../../../assets/images/smb_blob.svg';
import dsBlobImage from '../../../../assets/images/ds_blob.svg';
import brandingBlobImage from '../../../../assets/images/branding_blob.svg';
import seoBlobImage from '../../../../assets/images/seo_blob.svg';
import auditBlobImage from '../../../../assets/images/audit_blob.svg';
import wdBlobImage from '../../../../assets/images/wd_blob.svg';
import smbMobileImage from '../../../../assets/images/smb_title_mobile.svg';

import './smb-intro.scss';

const SmbIntroContainer: React.FC = (): ReactElement => {
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
      </div>
      <div className="smb-services">
        <div className="service-one">
          <div className="ds-service">
            <img src={dsBlobImage} />
            <span>Data Security</span>
          </div>
          <div className="branding-service">
            <img src={brandingBlobImage} />
            <span>Branding</span>
          </div>
        </div>
        <div className="service-two">
          <div className="wd-service">
            <img src={wdBlobImage} />
            <span>Website Development</span>
          </div>
        </div>
        <div className="service-three">
          <div className="seo-service">
            <img src={seoBlobImage} />
            <span>SEO & Marketing</span>
          </div>
          <div className="auditing-service">
            <img src={auditBlobImage} />
            <span>Auditing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmbIntroContainer;
