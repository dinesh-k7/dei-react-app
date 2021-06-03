import React, { Fragment, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory, useLocation } from 'react-router-dom';

import hamIcon from '../../../assets/images/hamburger_icon.svg';

import { constants } from '../../../constants';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Collapse, ListItemIcon } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTypography-body1': {
      textAlign: 'right',
      display: 'none !important',
    },
  },
  list: {
    width: 280,
  },
  fullList: {
    width: 'auto',
    borderLeft: '1px solid red',
  },
  closeIcon: {
    cursor: 'pointer',
    paddingTop: '16px',
    paddingLeft: '80%',
  },
  hamburgerIcon: {
    width: '25px !important',
  },
  menuList: {
    marginTop: '64px',
    width: '100%',
    maxWidth: 360,
  },
  menuText: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '16px',
    paddingBottom: '16px',
  },
  chevronIcon: {
    marginBottom: '16px !important',
  },
  menuActive: {
    fontColor: '#2C3E50',
    fontFamily: `${'OpenSansBold'}`,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  collapseContainer: {
    display: 'grid !important',
    justifyContent: 'end',
    padding: '0px 16px 16px 0px',
    fontSize: '1rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
    color: '#2C3E50 !important',
  },
}));

export default function TemporaryDrawer(): any {
  const classes = useStyles();
  const location = useLocation();
  const [smbMenuOpen, setSmbMenuOpen] = React.useState(false);
  const isUserLoggedIn = localStorage.getItem('userData') ? true : false;
  const [state, setState] = React.useState({
    right: false,
    open: true,
  });

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const history = useHistory();

  const routeChange = (menu, from?: string) => {
    if (from === 'submenu') {
      setState({ ...state, right: false });
      history.push({
        pathname: menu.url,
      });
    } else {
      if (menu.children) {
        setSmbMenuOpen(!smbMenuOpen);
      } else {
        setState({ ...state, right: false });
        history.push({
          pathname: menu.url,
        });
      }
    }
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >
      <div className={classes.closeIcon} onClick={toggleDrawer(anchor, false)}>
        <CloseIcon />
      </div>
      <List className={classes.menuList} component="nav">
        {constants.PAGES.map((page, index) => (
          <Fragment key={index}>
            <ListItem
              button
              onClick={() => routeChange(page)}
              style={{
                display:
                  isUserLoggedIn && page.url.indexOf('sign-in') > -1
                    ? 'none'
                    : !isUserLoggedIn &&
                      (page.url.indexOf('order-history') > -1 ||
                        page.url.indexOf('logout') > -1)
                    ? 'none'
                    : 'flex',
              }}
            >
              <ListItemText
                primary={page.name}
                className={
                  location.pathname.indexOf(page.url) > -1
                    ? `${classes.menuText} ${classes.menuActive}`
                    : `${classes.menuText}`
                }
              />
              {smbMenuOpen && page.children ? (
                <ExpandLess className={classes.chevronIcon} />
              ) : (
                page.children && <ExpandMore className={classes.chevronIcon} />
              )}
            </ListItem>
            {page.children && (
              <Collapse
                in={smbMenuOpen}
                timeout="auto"
                unmountOnExit
                className={classes.collapseContainer}
              >
                <List component="div" disablePadding>
                  {page.submenu &&
                    page.submenu.length &&
                    page.submenu.map((item, idx) => {
                      return (
                        <ListItem
                          button
                          className={classes.nested}
                          key={idx}
                          onClick={() => routeChange(item, 'submenu')}
                        >
                          <ListItemIcon>{item.name}</ListItemIcon>
                        </ListItem>
                      );
                    })}
                </List>
              </Collapse>
            )}
          </Fragment>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Button
          aria-label="Hamburger Menu"
          onClick={toggleDrawer('right', true)}
        >
          <img className={classes.hamburgerIcon} src={hamIcon} />
        </Button>
        <Drawer anchor={'right'} open={state['right']}>
          {list('right')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
