import React, { Fragment, ReactElement } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import './alert-dialog.component.scss';
import Vimeo from '@u-wave/react-vimeo';

interface IProps {
  title: string;
  description: string;
  textOne?: string;
  textTwo?: string;
  isShow?: boolean;
  handleClose?: any;
  fromPage?: string;
  videoId?: number;
}

const AlertDialogComponent = (props: IProps): ReactElement => {
  const { title, description, isShow, handleClose, fromPage, videoId } = props;
  const [open] = React.useState(isShow ? true : false);

  return (
    <div>
      {fromPage === 'landing' ? (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          id="video-dialog"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent id="alert-dialog-content">
            <Vimeo video={videoId} autoplay responsive />
          </DialogContent>
        </Dialog>
      ) : (
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
                <span className="title-two"> Copyright © DEI DAO LLC</span>
                <span className="title-three">
                  {' '}
                  Notice: All rights reserved.
                </span>
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
      )}
    </div>
  );
};

export default AlertDialogComponent;
