/* eslint-disable react/prop-types */
import React, { Fragment, ReactElement } from 'react';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';

import ErrorMessageContainer from '../container/error-message.container';
import { messages } from '../../constants';

// Back drop styles
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const GetQuoteButton: any = ({
  quoteState,
  handleSubmit,
  onSubmit,
  errors,
}): ReactElement => {
  const {
    captchaValue,
    isFormSubmitted,
    isLeadDataSent,
    isSendMailError,
  } = quoteState;
  const classes = useStyles();

  return (
    <Fragment>
      {!isLeadDataSent && (
        <button
          type="button"
          className={`btn-data-security ${
            isFormSubmitted && !isLeadDataSent && captchaValue ? 'btn-grey' : ''
          } ${isLeadDataSent ? 'btn-green' : ''} `}
          onClick={handleSubmit(onSubmit)}
        >
          {isLeadDataSent ? 'Start Over' : 'Get a Quote'}
        </button>
      )}
      {isLeadDataSent && (
        <button
          type="button"
          className="btn-data-security btn-green"
          onClick={() => window.location.reload(false)}
        >
          Start Over
        </button>
      )}
      {isFormSubmitted && !isLeadDataSent && captchaValue && (
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress disableShrink />
        </Backdrop>
      )}
      {errors && <ErrorMessageContainer {...errors} />}
      {!captchaValue && isFormSubmitted && (
        <p className="error_message">{messages.captcha_error}</p>
      )}
      {isSendMailError && (
        <p className="error_message">{messages.mail_send_error}</p>
      )}
      {isLeadDataSent && (
        <p className="lead_success">{messages.lead_success}</p>
      )}
    </Fragment>
  );
};

export default GetQuoteButton;
