import React, { Fragment, ReactElement, useRef } from 'react';

import ConsultationIntro from './container/consultation-intro/consultation-intro';
import StartupIntroContainer from './container/startup-intro/startup-intro';
import './startup-page.scss';

const scrollToRef = (ref: any) => {
  const element = ref.current?.offsetTop;
  if (element) window.scrollTo(0, element);
};

const StartUpPage: React.FC = (): ReactElement => {
  const consultationRef = useRef(null);

  const onClickHandler = () => {
    scrollToRef(consultationRef);
  };
  return (
    <Fragment>
      <div className="startup-page-grid">
        <StartupIntroContainer onClickHandler={onClickHandler} />
        <ConsultationIntro inputRef={consultationRef} />
      </div>
      <div className="landing-border"></div>
    </Fragment>
  );
};

export default StartUpPage;
