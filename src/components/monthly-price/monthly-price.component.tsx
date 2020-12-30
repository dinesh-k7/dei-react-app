import React, { ReactElement } from 'react';

import { constants, messages } from '../../constants';
import ErrorMessageContainer from '../container/error-message.container';
import './monthly-price.component.scss';
import '../../assets/scss/styles.scss';

const MonthlyPriceComponent = (props: any): ReactElement => {
  const {
    handleSubmit,
    size,
    onSubmit,
    errors,
    quoteState: { isRecaptchaError, isFormSubmitted, isLeadDataSent },
  } = props;
  return (
    <div className="monthly-price">
      <h3>Approximate service cost</h3>
      <strong>${size ? size * constants.COMPANY_SIZE : 0}</strong>
      <span>/mo</span>
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
      {errors && <ErrorMessageContainer {...errors} />}
      {isRecaptchaError && isFormSubmitted && <p>{messages.captcha_error}</p>}
      {isLeadDataSent && (
        <p className="lead_success">{messages.lead_success}</p>
      )}
    </div>
  );
};

export default MonthlyPriceComponent;
