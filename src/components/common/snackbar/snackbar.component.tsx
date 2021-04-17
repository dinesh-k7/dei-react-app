import React, { Fragment, ReactElement, useState } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const SnackBarComponent = (props: any): ReactElement => {
  const { isOpen, isError } = props;
  const [open, setOpen] = useState(isOpen);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      {isError && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Please fill out the required field(s).
          </Alert>
        </Snackbar>
      )}
      {!isError && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Your Request has been processed successfully!
          </Alert>
        </Snackbar>
      )}
    </Fragment>
  );
};

export default SnackBarComponent;
