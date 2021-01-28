import React, { ReactElement } from 'react';

import logo from '../../assets/images/dei_dark_logo_vector.svg';
import './header.component.scss';

import PersistentDrawerLeft from './menu.component';

const Header: React.FC = (): ReactElement => {
  return (
    <header className="nav-container">
      <div className="logo">
        <img src={logo} alt="DEI Logo" />
      </div>
      <PersistentDrawerLeft />
    </header>
  );
};

export default Header;
