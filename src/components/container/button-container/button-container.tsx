import React, { Fragment, ReactElement } from 'react';

const ButtonContainer: any = ({
  isFormSubmitted,
  captchaValue,
  isLeadDataSent,
  handleSubmit,
  fromPage,
  selectedPackages,
  name,
}: any): ReactElement => {
  return (
    <Fragment>
      {!isLeadDataSent && !fromPage && (
        <button
          type="button"
          className={`btn-basic ${
            isFormSubmitted && !isLeadDataSent && captchaValue ? 'btn-grey' : ''
          } ${isLeadDataSent ? 'btn-green' : ''}`}
          onClick={() => handleSubmit()}
        >
          {name ? name : 'Schedule Consultation'}
        </button>
      )}

      {!isLeadDataSent && fromPage && (
        <button
          type="button"
          className={`btn-basic ${
            isFormSubmitted &&
            !isLeadDataSent &&
            captchaValue &&
            selectedPackages &&
            selectedPackages.length
              ? 'btn-grey'
              : ''
          } ${isLeadDataSent ? 'btn-green' : ''}`}
          onClick={() => handleSubmit()}
        >
          Add To Cart
        </button>
      )}

      {isLeadDataSent && (
        <button
          type="button"
          className="btn-basic btn-green"
          onClick={() => window.location.reload()}
        >
          Start Over
        </button>
      )}
    </Fragment>
  );
};

export default ButtonContainer;
