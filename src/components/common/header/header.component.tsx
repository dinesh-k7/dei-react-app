import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from '../../../assets/images/dei_dark_logo_vector.svg';
import './header.component.scss';

import PersistentDrawerLeft from './menu.component';

const Header: React.FC = (props: any): ReactElement => {
  const history = useHistory();

  const routeChange = (url) => {
    history.goBack();
  };

  const { products } = props;
  return (
    <header className="nav-container">
      <div className="logo">
        <img src={logo} alt="DEI Logo" onClick={() => routeChange('/')} />
        <div className="menu-container">
          <div className="cart-icon" onClick={() => routeChange('/cart-page')}>
            <ShoppingCartIcon fontSize="large" />{' '}
            <span>({products && products.length}) </span>
          </div>
          <div className="hamburger-menu">
            <PersistentDrawerLeft />
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  const { cartReducer } = state;
  return {
    products: cartReducer.products,
  };
};

export default connect(mapStateToProps)(Header);
