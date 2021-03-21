import React, { ReactElement, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import startupTitle from '../../../../assets/images/startup_title.svg';

import greenBlob from '../../../../assets/images/startup_blob.svg';
import yellowBlob from '../../../../assets/images/startup_consult_blob.svg';
import brandingBlobImage from '../../../../assets/images/branding_blob.svg';

import './startup-intro.scss';

const StartupIntroContainer: React.FC<any> = ({
  onClickHandler,
}: any): ReactElement => {
  const history = useHistory();
  const routeChange = (url) => {
    history.push(url);
  };

  const startUpRef = useRef(null);
  const nwoRef = useRef(null);
  const brandingRef = useRef(null);

  const onMouseOverHandler = (ref: any) => {
    if (ref && ref.current) {
      ref.current.classList.toggle('show-features');
    }
  };
  const onMouseOutHandler = (ref: any) => {
    if (ref && ref.current) {
      ref.current.classList.toggle('show-features');
    }
  };

  return (
    <section className="startup-intro">
      <div className="startup-container">
        <div className="startup-intro-image">
          <img className="green-blob" src={greenBlob} alt="Green vector" />
          <img className="title" src={startupTitle} />
        </div>
        <p className="startup-intro-text">
          Venturing into the digital world can be risky, especially without the
          proper tools and know-how. The DEI™ provides the right tools and
          resources to help you mitigate your risk and maximize your digital
          potential.
        </p>
      </div>
      <div className="startup-service">
        <div className="service-one">
          <div className="startup-kit">
            <img src={yellowBlob} onClick={onClickHandler} />
            <span
              onClick={() => routeChange('/consultation')}
              onMouseOver={() => onMouseOverHandler(startUpRef)}
              onMouseOut={() => onMouseOutHandler(startUpRef)}
              style={{ width: 'fit-content' }}
            >
              Start-Up <br /> Kits
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
              onClick={() => routeChange('/smb#NWO')}
            />
            <span
              onClick={() => routeChange('/smb#NWO')}
              onMouseOver={() => onMouseOverHandler(nwoRef)}
              onMouseOut={() => onMouseOutHandler(nwoRef)}
              style={{ width: 'fit-content' }}
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
              onClick={() => routeChange('/smb#NWO')}
            />
            <span
              onClick={() => routeChange('/branding')}
              onMouseOver={() => onMouseOverHandler(brandingRef)}
              onMouseOut={() => onMouseOutHandler(brandingRef)}
              style={{ width: 'fit-content' }}
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
