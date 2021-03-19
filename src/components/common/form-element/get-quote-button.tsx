/* eslint-disable react/prop-types */
import React, { Fragment, ReactElement } from 'react';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';

import ErrorMessageContainer from '../../container/error-message.container';
import { messages } from '../../../constants';

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
  brandingState,
  onError,
  fromPage,
}): ReactElement => {
  const {
    captchaValue,
    isFormSubmitted,
    isLeadDataSent,
    isSendMailError,
    isButtonSubmit,
  } = quoteState;
  const classes = useStyles();

  let activeKeywords, activeBrands;
  if (brandingState) {
    const { keywords, brands } = brandingState;
    activeKeywords = keywords.filter((keyword) => keyword.active);
    activeBrands = brands.filter((brand) => brand.active);
  } else {
    activeBrands = [];
    activeKeywords = [];
  }
  const errorKeys = Object.keys(errors);
  return (
    <Fragment>
      {!isLeadDataSent && (
        <button
          type="button"
          className={`btn-data-security ${
            isFormSubmitted && !isLeadDataSent && captchaValue ? 'btn-grey' : ''
          } ${isLeadDataSent ? 'btn-green' : ''} ${
            fromPage === 'wd' ? 'btn-purple' : ''
          } `}
          onClick={handleSubmit(onSubmit, onError)}
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

      {activeKeywords &&
      activeKeywords.length < 2 &&
      fromPage === 'branding' &&
      (isButtonSubmit || errorKeys.length) ? (
        <p className="error_message">{messages.keywords_error}</p>
      ) : (
        ''
      )}

      {brandingState &&
      !brandingState.colorPicker &&
      fromPage === 'branding' &&
      (isButtonSubmit || errorKeys.length) ? (
        <p className="error_message">{messages.color_picker_error}</p>
      ) : (
        ''
      )}

      {activeBrands &&
      activeBrands.length < 2 &&
      fromPage === 'branding' &&
      (isButtonSubmit || errorKeys.length) ? (
        <p className="error_message">{messages.brand_error}</p>
      ) : (
        ''
      )}

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
