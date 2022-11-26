import React, { ReactElement, useRef } from 'react';

import startupTitle from '../../../../assets/images/startup_title.svg';
import greenBlob from '../../../../assets/images/startup_blob.svg';
import yellowBlob from '../../../../assets/images/startup_consult_blob.svg';
import brandingBlobImage from '../../../../assets/images/branding_blob.svg';

import './startup-intro.scss';
import { constants } from '../../../../constants';

const StartupIntroContainer: React.FC<any> = ({
  onClickHandler,
}: any): ReactElement => {
  const startUpRef = useRef(null);
  const nwoRef = useRef(null);
  const brandingRef = useRef(null);

  const onMouseOverHandler = (ref: any) => {
    if (ref && ref.current) {
      // ref.current.classList.toggle('show-features');
    }
  };
  const onMouseOutHandler = (ref: any) => {
    if (ref && ref.current) {
      // ref.current.classList.toggle('show-features');
    }
  };

  return (
    <section className="startup-intro">
      <div className="startup-container">
        <div className="startup-intro-image">
          <img className="green-blob" src={greenBlob} alt="Green vector" />
          <img className="title" src={startupTitle} alt="Startup intro" />
        </div>
        <p className="startup-intro-text">
          Venturing into the digital world can be risky, especially without the
          proper tools and know-how. The DEI®️ Start-Up tools and resources help
          you mitigate your risk and maximize your digital potential.
        </p>
      </div>
      <div className="startup-service">
        <div className="service-one">
          <div className="startup-kit">
            <img
              src={yellowBlob}
              onClick={() => onClickHandler(constants.STARTUP)}
              alt="Yellow Blob"
            />
            <span
              onClick={() => onClickHandler(constants.STARTUP)}
              onMouseOver={() => onMouseOverHandler(startUpRef)}
              onMouseOut={() => onMouseOutHandler(startUpRef)}
              className="startup-service-title"
            >
              Start-Up <br /> &nbsp; Kits
            </span>
            <span className="startup-features" ref={startUpRef}>
              <ul>
                <li>Copyright</li>
                <li>Trademark</li>
                <li>Patent</li>
              </ul>
            </span>
          </div>
        </div>
        <div className="service-two">
          <div className="nwo-hub">
            <img
              src={greenBlob}
              width={80}
              height={80}
              onClick={() => onClickHandler(constants.SMB.NWO)}
              alt="NWO Blob"
            />
            <span
              onClick={() => onClickHandler(constants.SMB.NWO)}
              onMouseOver={() => onMouseOverHandler(nwoRef)}
              onMouseOut={() => onMouseOutHandler(nwoRef)}
              className="startup-service-title"
            >
              NWOhub™
            </span>
            <span className="nwo-features" ref={nwoRef}>
              <ul>
                <li>Domain</li>
                <li>Hosting</li>
                <li>Website</li>
                <li>Email</li>
              </ul>
            </span>
          </div>
        </div>

        <div className="service-three">
          <div className="branding">
            <img
              src={brandingBlobImage}
              width={80}
              height={80}
              onClick={() => onClickHandler(constants.SMB.BRANDING)}
              alt="SMB Branding"
            />
            <span
              onClick={() => onClickHandler(constants.SMB.BRANDING)}
              onMouseOver={() => onMouseOverHandler(brandingRef)}
              onMouseOut={() => onMouseOutHandler(brandingRef)}
              className="startup-service-title"
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
      </div>
    </section>
  );
};

export default StartupIntroContainer;
