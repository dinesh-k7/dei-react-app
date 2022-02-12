import React, { Fragment, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { isIOS } from 'react-device-detect';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';

import logo from '../../../assets/images/dei_dark_logo_vector.svg';
import fbIcon from '../../../assets/images/fb_icon.png';
import linkedInIcon from '../../../assets/images/linkedin_icon.png';
import './header.component.scss';

import PersistentDrawerLeft from './menu.component';
import { constants } from '../../../constants';

const Header: React.FC<any> = (props: any): ReactElement => {
  const history = useHistory();
  const { user } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const userData = localStorage.getItem('userData');
  const isUserLoggedIn = localStorage.getItem('userData') ? true : false;
  let profileImage;
  if (user && user.avatar) {
    profileImage = user.avatar;
  } else if (userData) {
    const { avatar } = JSON.parse(userData);
    profileImage = avatar;
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
  const fb_url = isIOS
    ? 'fb://DEI-Digital-Enterprise-Initiative/104773368286034'
    : 'https://www.facebook.com/DEI-Digital-Enterprise-Initiative-104773368286034';

  return (
    <Fragment>
      <HideOnScroll {...props}>
        <AppBar
          style={{
            backgroundColor: '#F2F2F2',
            boxShadow: 'none',
            borderBottom: '1px solid #2c3e50',
          }}
        >
          <Toolbar>
            <header className="nav-container">
              <div className="logo">
                <img
                  src={logo}
                  className="dei-logo"
                  alt="DEI Logo"
                  onClick={() => routeChange()}
                />
                <div
                  className={
                    isUserLoggedIn
                      ? 'menu-container'
                      : 'menu-container hide-profile-menu'
                  }
                >
                  <div>
                    <a rel="noreferrer" href={fb_url} target="_blank">
                      <img
                        src={fbIcon}
                        alt="Footer Facebook icon"
                        height={25}
                      />
                    </a>
                  </div>

                  <div>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/showcase/dei%E2%84%A2-digital-enterprise-initiative"
                    >
                      <img
                        src={linkedInIcon}
                        alt="Footer linkedin Icon"
                        height={25}
                      />
                    </a>
                  </div>
                  <div
                    className="cart-icon"
                    onClick={() => history.push('/cart-page')}
                  >
                    <ShoppingCartIcon
                      style={{ color: '#000000', height: '25px' }}
                      fontSize="large"
                    />
                    <span className="product-count">
                      ({products && products.length}){' '}
                    </span>
                  </div>
                  <div className="hamburger-menu">
                    <PersistentDrawerLeft />
                  </div>

                  <div className={!isUserLoggedIn ? 'hide' : ''}>
                    <Button
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                      style={{ backgroundColor: 'transparent' }}
                    >
                      <Avatar
                        src={
                          profileImage
                            ? `${constants.NODE_ENDPOINT}/images/${profileImage}`
                            : ''
                        }
                      />
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      className="profile-icon"
                    >
                      <MenuItem
                        onClick={() => {
                          handleClose();
                          history.push('/profile');
                        }}
                      >
                        Profile
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleClose();
                          history.push('/logout');
                        }}
                      >
                        Logout
                      </MenuItem>
                    </Menu>
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
  const { cartReducer, userReducer } = state;
  return {
    products: cartReducer.products,
    user: userReducer.user,
    isUserLoggedIn: userReducer.isUserLoggedIn,
  };
};

export default connect(mapStateToProps)(Header);
