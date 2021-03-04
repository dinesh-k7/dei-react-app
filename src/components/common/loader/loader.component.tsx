import React, { ReactElement } from 'react';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';

// Back drop styles
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const LoaderComponent = (): ReactElement => {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress disableShrink />
    </Backdrop>
  );
};

export default LoaderComponent;
