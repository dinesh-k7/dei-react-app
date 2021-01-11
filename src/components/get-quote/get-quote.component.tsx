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
import { filterErrorMessage, useStyles } from '../../utils';
import { sendMail } from '../effects';
import '../../assets/scss/styles.scss';
import './get-quote.component.scss';
import bg from '../../assets/images/blue_blob_vector.svg';
import info_icon from '../../assets/images/info_icon.png';
import SelectBox from '../form-element/select-box';

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
    monthlyCost: 0,
    captchaValue: '',
    isFormSubmitted: false,
    isLeadDataSent: false,
    isSendMailError: false,
  };
  const { register, handleSubmit, errors } = useForm();
  const [quoteState, setQuoteState] = useState(INITIAL_STATE);
  const [size, setCompanySize] = useState(0);
  const [captcha, setCaptcha] = useState({});

  let companysize = '';

  // Set captcha reference

  const setCaptchaRef = (ref) => {
    if (ref) {
      setCaptcha(ref);
    }
  };

  // Function to handle select callback
  const handleSelect = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;
    setQuoteState((prevState) => {
      return {
        ...prevState,
        position: target.value,
      };
    });
  };

  // handle get quote form onSubmit
  const onSubmit = (quoteData: IGetQuoteModel) => {
    const { captchaValue } = quoteData;
    const { position } = quoteState;
    quoteData.isFormSubmitted = true;
    quoteData.position = position;
    setQuoteState((prevState) => {
      return {
        ...prevState,
        ...quoteData,
      };
    });
    if (!captchaValue) {
      return;
    } else {
      quoteData.monthlyCost = size * constants.COMPANY_SIZE;
      // quoteData = sanitizeInput(quoteData);
      sendMail(quoteData).then(
        () => {
          setQuoteState((prevState) => {
            return {
              ...prevState,
              isLeadDataSent: true,
              isSendMailError: false,
            };
          });
        },
        () => {
          setQuoteState((prevState) => {
            return {
              ...prevState,
              isSendMailError: true,
              isFormSubmitted: false,
            };
          });
        },
      );
    }
  };

  // Reset captcha
  const resetCaptcha = () => {
    captcha['reset']();
  };

  //handle company size change event
  const onChangeHandler = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;
    companysize = target && target.value;
    setCompanySize(+companysize);
  };
  const { captchaValue, position, isLeadDataSent } = quoteState;

  if (isLeadDataSent) {
    resetCaptcha();
  }

  const classes = useStyles();
  return (
    <section className="get-quote-section">
      <div className="bg-image">
        <img src={bg} alt="Quote bg vector" />
      </div>
      <div className="form-container">
        <h1>Tell us about your company</h1>
        <h4>Personal Information</h4>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <div className="personal-information">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
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
                id="lastname"
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
                id="email"
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
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                name="phone"
                id="phone"
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

          <h4>Company Information</h4>
          <div className="company-information">
            <div className="form-group">
              <label htmlFor="company_name">Company Name</label>
              <input
                type="text"
                name="company_name"
                id="company_name"
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
                id="company_size"
                placeholder="0"
                onChange={onChangeHandler}
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
              />{' '}
              <div
                className="info-icon"
                aria-label="Employees"
                data-balloon-pos="up"
              >
                <img src={info_icon} width={20} height={20} alt="Info Icon" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="position">Your position in company</label>
              <SelectBox
                position={position}
                className={classes}
                variant={'outlined'}
                name={'position'}
                id={'position'}
                handleSelect={handleSelect}
              ></SelectBox>
            </div>
            <div className="form-group">
              <label htmlFor="website_url">Current website URL</label>
              <input
                type="text"
                name="website_url"
                id="website_url"
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
          </div>
          <div className="form-group recaptcha-container">
            <ReCAPTCHA
              ref={(r) => setCaptchaRef(r)}
              sitekey={siteKey}
              onChange={(e) => {
                const captchaValue = e ? e : '';
                setQuoteState((prevState) => {
                  return {
                    ...prevState,
                    captchaValue,
                    isFormSubmitted: false,
                  };
                });
              }}
            />
            <input
              type="hidden"
              name="captchaValue"
              ref={register}
              value={captchaValue}
            />
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
