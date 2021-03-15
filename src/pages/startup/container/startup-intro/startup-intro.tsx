import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import startupTitle from '../../../../assets/images/startup_title.svg';

import greenBlob from '../../../../assets/images/startup_blob.svg';
import yellowBlob from '../../../../assets/images/startup_consult_blob.svg';

import './startup-intro.scss';

const StartupIntroContainer: React.FC<any> = ({
  onClickHandler,
}: any): ReactElement => {
  const history = useHistory();
  const routeChange = (url) => {
    history.push(url);
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
          <br /> <br />
          Manifest digital destiny and optimize with the DEI™. Building the
          tomorrow of your dreams starts with you!
        </p>
      </div>
      <div className="startup-service">
        <div className="service-one">
          <div className="nwo-hub">
            <img
              src={greenBlob}
              width={80}
              height={80}
              onClick={() => routeChange('/smb#NWO')}
            />
            <span onClick={() => routeChange('/smb#NWO')}>NWOhub™</span>
          </div>
        </div>
        <div className="service-two">
          <div className="consultation">
            <img src={yellowBlob} onClick={onClickHandler} />
            <span onClick={onClickHandler}>
              Consultations <br />
              <span id="break-word">&</span>
              <br /> Professional Coaching
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupIntroContainer;
