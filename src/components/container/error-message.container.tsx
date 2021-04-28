import React, { Fragment, ReactElement } from 'react';
import { messages } from '../../constants';

const ErrorMessageContainer: any = ({
  errors,
  isFormSubmitted,
  selectedPackages,
  captchaValue,
  isSendMailError,
  isLeadDataSent,
  activeKeywords,
  fromPage,
  isButtonSubmit,
  state,
  activeBrands,
}: any): ReactElement => {
  const errorKeys = Object.keys(errors);
  return (
    <Fragment>
      <div className="error-messages">
        <ul>
          {errorKeys && errorKeys.length
            ? errorKeys.map((objKey, idx) => {
                return (
                  <li className="error_message" key={idx}>
                    {errors[objKey] && errors[objKey].message}
                  </li>
                );
              })
            : ''}
        </ul>
      </div>
      {(isFormSubmitted || errorKeys.length || isButtonSubmit) &&
      selectedPackages &&
      !selectedPackages.length ? (
        <p className="error_message">{messages.package_error}</p>
      ) : (
        ''
      )}

      {activeKeywords &&
      activeKeywords.length < 2 &&
      (fromPage === 'branding' || fromPage === 'wd') &&
      (isButtonSubmit || errorKeys.length) ? (
        <p className="error_message">{messages.keywords_error}</p>
      ) : (
        ''
      )}

      {state &&
      !state.colorPicker &&
      (fromPage === 'branding' || fromPage === 'wd') &&
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

      {!captchaValue && (isFormSubmitted || isButtonSubmit) && (
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

export default ErrorMessageContainer;
