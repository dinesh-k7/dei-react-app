import React, { ReactElement } from 'react';

import logo from '../../assets/images/dei_dark_logo_vector.svg';

const Header: React.FC = (): ReactElement => {
  return (
    <header className="nav-container">
      <div className="logo">
        <img src={logo} alt="DEI Logo" />
      </div>
    </header>
  );
};

export default Header;
