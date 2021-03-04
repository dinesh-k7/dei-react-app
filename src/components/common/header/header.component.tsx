import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../../assets/images/dei_dark_logo_vector.svg';
import './header.component.scss';

import PersistentDrawerLeft from './menu.component';

const Header: React.FC = (): ReactElement => {
  const history = useHistory();

  const routeChange = (url) => {
    history.push(url);
  };

  return (
    <header className="nav-container">
      <div className="logo">
        <img src={logo} alt="DEI Logo" onClick={() => routeChange('/')} />
        <div className="hamburger-menu">
          <PersistentDrawerLeft />
        </div>
      </div>
    </header>
  );
};

export default Header;