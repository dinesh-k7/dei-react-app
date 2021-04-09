import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import LaunchIcon from '@material-ui/icons/Launch';

import heroImage from '../../../../assets/images/website_security.svg';
import serviceBlue from '../../../../assets/images/service_blue.svg';
import './secure-intro.scss';

const SecureIntro: React.FC<any> = (props: any): ReactElement => {
  const history = useHistory();

  const routeChange = () => {
    history.push('data-security');
  };

  return (
    <section className="secure-intro" id="secure-intro" ref={props.inputRef}>
      dhaskdhakshdkahdkadh
    </section>
  );
};

export default SecureIntro;
