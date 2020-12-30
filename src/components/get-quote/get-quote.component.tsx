import React, { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';

import { IGetQuoteModel } from '../../interfaces/get-quote.model';
import MonthlyPriceComponent from '../monthly-price/monthly-price.component';
import {
  constants,
  quoteValidationErrorMessages,
  siteKey,
  patterns,
} from '../../constants';
import { filterErrorMessage, sanitizeInput } from '../../utils';
import '../../assets/scss/styles.scss';
import './get-quote.component.scss';

const GetQuoteComponent: React.FC = (): ReactElement => {
  const INITIAL_STATE: IGetQuoteModel = {
    name: '',
    lastname: '',
    email: '',
    phone: '',
    company_size: 0,
    position: '',
    website_url: '',
    company_name: '',
    isRecaptchaError: true,
    isFormSubmitted: false,
    isLeadDataSent: false,
  };
  const { register, handleSubmit, errors } = useForm();
  const [quoteState, setQuoteState] = useState(INITIAL_STATE);
  const [size, setCompanySize] = useState(0);
  let companysize = '';

  // handle get quote form onSubmit
  const onSubmit = (quoteData: IGetQuoteModel) => {
    const { isRecaptchaError } = quoteData;
    quoteData.isFormSubmitted = true;
    // quoteData = sanitizeInput(quoteData);

    setQuoteState((prevState) => {
      return {
        ...prevState,
        ...quoteData,
      };
    });
  };

  //handle company size change event
  const onChangeHandler = (event: any) => {
    companysize = event && event.target && event.target.value;
    setCompanySize(+companysize);
  };

  const { isRecaptchaError, isFormSubmitted } = quoteState;

  // If recaptcha and form submission is success, then call api to send email
  if (!isRecaptchaError && isFormSubmitted) {
    setTimeout(() => {
      setQuoteState((prevState) => {
        return {
          ...prevState,
          isLeadDataSent: true,
        };
      });
    }, 2000);
  }

  return (
    <section className="get-quote-section">
      <div className="bg-image"></div>
      <div className="form-container">
        <h1>Tell us about your company</h1>
        <h3>Personal Information</h3>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <div className="personal-information">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="e.g. John"
                maxLength={50}
                ref={register({
                  required: filterErrorMessage(
                    quoteValidationErrorMessages.name,
                    'required',
                  ),
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                placeholder="e.g. Doe"
                maxLength={50}
                ref={register({
                  required: filterErrorMessage(
                    quoteValidationErrorMessages.lastname,
                    'required',
                  ),
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                name="email"
                placeholder="e.g. johndoe@email.com"
                maxLength={50}
                ref={register({
                  required: filterErrorMessage(
                    quoteValidationErrorMessages.email,
                    'required',
                  ),
                  pattern: {
                    value: patterns.email,
                    message: filterErrorMessage(
                      quoteValidationErrorMessages.email,
                      'pattern',
                    ),
                  },
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Pnone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="e.g. 123456789"
                maxLength={15}
                ref={register({
                  required: filterErrorMessage(
                    quoteValidationErrorMessages.phone,
                    'required',
                  ),
                  pattern: {
                    value: patterns.phone,
                    message: filterErrorMessage(
                      quoteValidationErrorMessages.phone,
                      'pattern',
                    ),
                  },
                })}
              />
            </div>
          </div>

          <h3>Company Information</h3>
          <div className="company-information">
            <div className="form-group">
              <label htmlFor="company_name">Company Name</label>
              <input
                type="text"
                name="company_name"
                placeholder="e.g. JohnDoe and co."
                maxLength={70}
                ref={register({
                  required: filterErrorMessage(
                    quoteValidationErrorMessages.company_name,
                    'required',
                  ),
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="company_size">Company Size</label>
              <input
                type="number"
                name="company_size"
                placeholder=""
                onChange={onChangeHandler}
                min={0}
                ref={register({
                  required: filterErrorMessage(
                    quoteValidationErrorMessages.company_size,
                    'required',
                  ),
                  min: {
                    value: 1,
                    message: filterErrorMessage(
                      quoteValidationErrorMessages.company_size,
                      'min',
                    ),
                  },
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Your position in company</label>
              <select
                name="position"
                defaultValue=""
                ref={register({
                  required: filterErrorMessage(
                    quoteValidationErrorMessages.position,
                    'required',
                  ),
                })}
              >
                <option value="" disabled>
                  e.g. Project Manager
                </option>
                {constants.POSITION &&
                  constants.POSITION.length &&
                  constants.POSITION.map((role, idx) => {
                    return <option key={idx}>{role}</option>;
                  })}
                <option>Developer</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="website_url">Current website URL</label>
              <input
                type="text"
                name="website_url"
                placeholder="e.g. https://www.company.com"
                ref={register({
                  required: filterErrorMessage(
                    quoteValidationErrorMessages.website_url,
                    'required',
                  ),
                  pattern: {
                    value: patterns.website_url,
                    message: filterErrorMessage(
                      quoteValidationErrorMessages.website_url,
                      'pattern',
                    ),
                  },
                })}
              />
            </div>

            <div className="form-group">
              <ReCAPTCHA
                ref={register}
                sitekey={siteKey}
                onChange={(e) => {
                  const isRecaptchaError = e ? false : true;
                  setQuoteState((prevState) => {
                    return {
                      ...prevState,
                      isRecaptchaError: isRecaptchaError,
                      isFormSubmitted: false,
                    };
                  });
                }}
              />
            </div>
          </div>
        </form>
      </div>
      <MonthlyPriceComponent
        quoteState={quoteState}
        size={size}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </section>
  );
};

export default GetQuoteComponent;
