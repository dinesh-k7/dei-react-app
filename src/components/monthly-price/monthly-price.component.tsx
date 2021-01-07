import React, { ReactElement } from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { constants, messages } from '../../constants';
import ErrorMessageContainer from '../container/error-message.container';
import './monthly-price.component.scss';
import '../../assets/scss/styles.scss';

// Back drop styles
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

// eslint-disable-next-line
const MonthlyPriceComponent = ({
  handleSubmit,
  size,
  onSubmit,
  errors,
  quoteState,
}: any): ReactElement => {
  const {
    captchaValue,
    isFormSubmitted,
    isLeadDataSent,
    isSendMailError,
  } = quoteState;
  const classes = useStyles();

  return (
    <div className="monthly-price">
      <div className="sticky-content">
        <h4>Approximate service cost</h4>
        <div className="price-container">
          <span className="price">
            {' '}
            ${size ? size * constants.COMPANY_SIZE : 0}
          </span>
          <span className="label">/mo</span>
        </div>
      </div>

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
      {!captchaValue && isFormSubmitted && <p>{messages.captcha_error}</p>}
      {isSendMailError && <p>{messages.mail_send_error}</p>}
      {isLeadDataSent && (
        <p className="lead_success">{messages.lead_success}</p>
      )}
    </div>
  );
};

export default MonthlyPriceComponent;
