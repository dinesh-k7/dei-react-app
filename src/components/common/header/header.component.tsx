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
    const trigger = useScrollTrigger();

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  };

  const routeChange = (url) => {
    const { location } = history;
    if (location && location.key) {
      history.goBack();
    }
  };

  const { products } = props;

  return (
    <Fragment>
      <HideOnScroll {...props}>
        <AppBar
          color="transparent"
          position="fixed"
          style={{
            boxShadow:
              '0px 1px 2px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
          }}
        >
          <Toolbar>
            <header className="nav-container">
              <div className="logo">
                <img
                  src={logo}
                  alt="DEI Logo"
                  onClick={() => routeChange('/')}
                />
                <div className="menu-container">
                  <div
                    className="cart-icon"
                    onClick={() => history.push('/cart-page')}
                  >
                    <ShoppingCartIcon fontSize="large" />{' '}
                    <span>({products && products.length}) </span>
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
