import React, { ReactElement } from 'react';

import { constants, messages } from '../../constants';
import ErrorMessageContainer from '../container/error-message.container';
import './monthly-price.component.scss';
import '../../assets/scss/styles.scss';

const MonthlyPriceComponent = ({
  handleSubmit,
  size,
  onSubmit,
  errors,
  quoteState,
}: any): ReactElement => {
  const { isRecaptchaError, isFormSubmitted, isLeadDataSent } = quoteState;
  return (
    <div className="monthly-price">
      <h3>Approximate service cost</h3>
      <strong>${size ? size * constants.COMPANY_SIZE : 0}</strong>
      <span>/mo</span>
      {!isLeadDataSent && (
        <button
          type="button"
          className={`btn-data-security ${
            isFormSubmitted && !isLeadDataSent && !isRecaptchaError
              ? 'btn-grey'
              : ''
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
      {errors && <ErrorMessageContainer {...errors} />}
      {isRecaptchaError && isFormSubmitted && <p>{messages.captcha_error}</p>}
      {isLeadDataSent && (
        <p className="lead_success">{messages.lead_success}</p>
      )}
    </div>
  );
};

export default MonthlyPriceComponent;
