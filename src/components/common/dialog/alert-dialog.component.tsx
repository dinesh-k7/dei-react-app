import React, { Fragment, ReactElement } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './alert-dialog.component.scss';

interface IProps {
  title: string;
  description: string;
  textOne?: string;
  textTwo?: string;
  isShow?: boolean;
  handleClose?: any;
  fromPage?: string;
}

const AlertDialogComponent = (props: IProps): ReactElement => {
  const { title, description, isShow, handleClose, fromPage } = props;
  const [open] = React.useState(isShow ? true : false);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {fromPage ? (
            <Fragment>
              <span className="title-one"> Copyright</span>
              <span className="title-two"> Copyright © XiiiUSA</span>
              <span className="title-three"> Notice: All rights reserved.</span>
            </Fragment>
          ) : (
            title
          )}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialogComponent;
