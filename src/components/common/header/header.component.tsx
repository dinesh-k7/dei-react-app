import React, { Fragment, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

import logo from '../../../assets/images/dei_dark_logo_vector.svg';
import './header.component.scss';

import PersistentDrawerLeft from './menu.component';

const Header: React.FC<any> = (props: any): ReactElement => {
  const history = useHistory();
  const HideOnScroll = (props: any) => {
    const { children } = props;
    const trigger = useScrollTrigger({ disableHysteresis: false });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  };

  const routeChange = () => {
    const { location } = history;
    if (location && location.key) {
      history.goBack();
    } else {
      history.push('/');
    }
  };

  const { products } = props;

  return (
    <Fragment>
      <HideOnScroll {...props}>
        <AppBar
          style={{
            backgroundColor: '#fff',
            boxShadow: 'none',
            borderBottom: '1px solid #2c3e50',
          }}
        >
          <Toolbar>
            <header className="nav-container">
              <div className="logo">
                <img src={logo} alt="DEI Logo" onClick={() => routeChange()} />
                <div className="menu-container">
                  <div
                    className="cart-icon"
                    onClick={() => history.push('/cart-page')}
                  >
                    <ShoppingCartIcon
                      style={{ color: '#000000' }}
                      fontSize="large"
                    />{' '}
                    <span className="product-count">
                      ({products && products.length}){' '}
                    </span>
                  </div>
                  <div className="hamburger-menu">
                    <PersistentDrawerLeft />
                  </div>
                </div>
              </div>
            </header>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const { cartReducer } = state;
  return {
    products: cartReducer.products,
  };
};

export default connect(mapStateToProps)(Header);
