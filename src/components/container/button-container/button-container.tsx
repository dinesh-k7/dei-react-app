import React, { Fragment, ReactElement } from 'react';

const ButtonContainer: any = ({
  isFormSubmitted,
  captchaValue,
  isLeadDataSent,
  handleSubmit,
}: any): ReactElement => {
  return (
    <Fragment>
      {!isLeadDataSent && (
        <button
          type="button"
          className={`btn-basic ${
            isFormSubmitted && !isLeadDataSent && captchaValue ? 'btn-grey' : ''
          } ${isLeadDataSent ? 'btn-green' : ''}`}
          onClick={() => handleSubmit()}
        >
          Schedule Consultation
        </button>
      )}

      {isLeadDataSent && (
        <button
          type="button"
          className="btn-basic btn-green"
          onClick={() => window.location.reload(false)}
        >
          Start Over
        </button>
      )}
    </Fragment>
  );
};

export default ButtonContainer;
