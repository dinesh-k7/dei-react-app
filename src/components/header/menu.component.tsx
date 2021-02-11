import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory, useLocation } from 'react-router-dom';

import hamIcon from '../../assets/images/hamburger_icon.svg';

import { constants } from '../../constants';

const useStyles = makeStyles({
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
  },
  menuText: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '16px',
    paddingBottom: '32px',
  },
  menuActive: {
    fontColor: '#2C3E50',
    fontFamily: `${'OpenSansBold'}`,
  },
});

export default function TemporaryDrawer(): any {
  const classes = useStyles();
  const location = useLocation();

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const history = useHistory();

  const routeChange = (url) => {
    setState({ ...state, right: false });
    history.push(url);
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
      <List className={classes.menuList}>
        {constants.PAGES.map((page, index) => (
          <ListItem button key={index} onClick={() => routeChange(page.url)}>
            <ListItemText
              primary={page.name}
              className={
                location.pathname.indexOf(page.url) > -1
                  ? `${classes.menuText} ${classes.menuActive}`
                  : `${classes.menuText}`
              }
            />
          </ListItem>
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
