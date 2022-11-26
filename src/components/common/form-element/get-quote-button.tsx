/* eslint-disable react/prop-types */
import React, { Fragment, ReactElement } from 'react';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';

import ErrorMessageContainer from '../../container/error-message.container';

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
  state,
  onError,
  fromPage,
  isEnabled,
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

  if (state) {
    const { keywords, brands } = state;
    activeKeywords = keywords.filter((keyword) => keyword.active);
    activeBrands = brands.filter((brand) => brand.active);
  } else {
    activeBrands = [];
    activeKeywords = [];
  }
  const errorKeys = Object.keys(errors);
  const btnTxt = isEnabled ? 'Add To Cart' : 'Get a Quote';
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
          {isLeadDataSent
            ? 'Start Over'
            : fromPage === 'wd'
            ? 'Book Consultation'
            : btnTxt}
        </button>
      )}
      {isLeadDataSent && (
        <button
          type="button"
          className="btn-data-security btn-green"
          onClick={() => window.location.reload()}
        >
          Start Over
        </button>
      )}
      {isFormSubmitted && !isLeadDataSent && captchaValue && (
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress disableShrink />
        </Backdrop>
      )}
      {errors && (
        <ErrorMessageContainer
          errors={errors}
          isFormSubmitted={isFormSubmitted}
          errorKeys={errorKeys}
          activeKeywords={activeKeywords}
          captchaValue={captchaValue}
          isSendMailError={isSendMailError}
          fromPage={fromPage}
          isButtonSubmit={isButtonSubmit}
          isLeadDataSent={isLeadDataSent}
          state={state}
          activeBrands={activeBrands}
        />
      )}
    </Fragment>
  );
};

export default GetQuoteButton;
