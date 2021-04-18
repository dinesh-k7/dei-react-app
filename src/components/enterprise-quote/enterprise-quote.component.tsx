import React, { Fragment, ReactElement, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { constants, messages, siteKey } from '../../constants';
import { IGetQuoteProps } from '../../interfaces/get-quote.model';
import MultiText from '../common/form-element/multi-text';
import SelectBox from '../common/form-element/select-box';
import TextBox from '../common/form-element/text-box';

import '../get-quote/get-quote.component.scss';
import './enterprise-quote.component.scss';

import { useStyles } from '../../utils';
import { sendMail } from '../effects';
import ErrorMessageContainer from '../container/error-message.container';
import LoaderComponent from '../common/loader/loader.component';
import SnackBarComponent from '../common/snackbar/snackbar.component';

const EnterpriseQuoteComponent: React.FC<any> = (
  props: IGetQuoteProps,
): ReactElement => {
  let INITIAL_STATE: any = {
    captchaValue: '',
    isFormSubmitted: false,
    isLeadDataSent: false,
    isSendMailError: false,
    isBrandingDetailSubmitted: false,
    isButtonSubmit: false,
    services: [
      {
        id: 1,
        active: false,
        name: 'SD-WAN',
        title: 'ES_SDWAN_SERVICE',
      },
      {
        id: 2,
        active: false,
        name: 'UCaaS',
        title: 'UCAAS_SERVICE',
      },
      {
        id: 3,
        active: false,
        name: 'Carrier',
        title: 'ES_CARRIER_SERVICE',
      },
      {
        id: 4,
        active: false,
        name: 'Cable',
        title: 'ES_CABLE_SERVICE',
      },
      {
        id: 5,
        active: false,
        name: 'Cloud',
        title: 'ES_CLOUD_SERVICE',
      },
    ],
  };
  const { formFields, fromPage } = props;
  const state = {};

  let isLocationExist;
  formFields &&
    formFields.length &&
    formFields.forEach((field) => {
      isLocationExist = field.section === 'location' ? true : false;
      if (
        field.type === 'text' ||
        field.type === 'select' ||
        field.type === 'textarea'
      ) {
        state[field.name] = '';
      } else if (field.type === 'number') {
        state[field.name] = 0;
      }
    });

  INITIAL_STATE = { ...state, ...INITIAL_STATE };

  const { register, handleSubmit, errors, control } = useForm();
  const [quoteState, setQuoteState] = useState(INITIAL_STATE);
  const [captcha, setCaptcha] = useState({});

  // Set captcha reference

  const setCaptchaRef = (ref) => {
    if (ref) {
      setCaptcha(ref);
    }
  };

  // handle get quote form onSubmit
  const onSubmit = (quoteData: any) => {
    const { captchaValue } = quoteData;
    const { services } = quoteState;

    quoteData.isFormSubmitted = true;
    const selectedServices = services && services.filter((s) => s.active);
    let preferedServices;
    if (selectedServices && selectedServices.length) {
      preferedServices = selectedServices.map((d) => d.name);
    } else {
      preferedServices = false;
    }

    setQuoteState((prevState) => {
      return {
        ...prevState,
        ...quoteData,
      };
    });

    if (!captchaValue) {
      return;
    } else {
      sendMail({ ...quoteData, services: preferedServices }, fromPage).then(
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

  const {
    captchaValue,
    isLeadDataSent,
    isFormSubmitted,
    isSendMailError,
  } = quoteState;

  if (isLeadDataSent) {
    resetCaptcha();
  }

  const classes = useStyles();
  const errorKeys = Object.keys(errors);
  return (
    <section className="enterprise-quote-section">
      {isLeadDataSent && <SnackBarComponent isOpen={true} isError={false} />}
      {errorKeys && errorKeys.length ? (
        <SnackBarComponent isOpen={true} isError={true} />
      ) : (
        ''
      )}
      <div className="bg-image"></div>
      <div className="form-container">
        <h1>Tell us about your company</h1>
        <h4>Personal Information</h4>
        <form autoComplete="off">
          <div className="personal-information">
            {formFields &&
              formFields.length &&
              formFields.map((field, idx) => {
                if (field.section === 'personal' && field.type === 'text') {
                  return (
                    <TextBox
                      key={idx}
                      register={register}
                      name={field.name}
                      placeholder={field.placeholder}
                      label_name={field.label}
                      maxlength={50}
                      required={field.required}
                      pattern={field.pattern}
                    />
                  );
                } else if (
                  field.section === 'personal' &&
                  field.type === 'select'
                ) {
                  return (
                    <SelectBox
                      value={quoteState[field.name]}
                      key={idx}
                      variant={'outlined'}
                      name={field.name}
                      className={classes}
                      id={field.name}
                      label_name={field.label}
                      options={field.options}
                      placeholder={field.placeholder}
                      control={control}
                      error={!!errors[quoteState[field.name]]}
                      grouping={field.grouping}
                    ></SelectBox>
                  );
                }
              })}
          </div>

          <h4>Company Information</h4>
          <div className="company-information">
            {formFields &&
              formFields.length &&
              formFields.map((field, idx) => {
                if (
                  field.section === 'company' &&
                  (field.type === 'text' || field.type === 'number')
                ) {
                  return (
                    <TextBox
                      key={idx}
                      register={register}
                      name={field.name}
                      placeholder={field.placeholder}
                      label_name={field.label}
                      maxlength={50}
                      required={field.required}
                      pattern={field.pattern}
                      type={field.type}
                    />
                  );
                } else if (
                  field.section === 'company' &&
                  field.type === 'select'
                ) {
                  return (
                    <SelectBox
                      value={quoteState[field.name]}
                      key={idx}
                      variant={'outlined'}
                      name={field.name}
                      className={classes}
                      id={field.name}
                      label_name={field.label}
                      options={field.options}
                      placeholder={field.placeholder}
                      control={control}
                      error={!!errors[quoteState[field.name]]}
                      grouping={field.grouping}
                    ></SelectBox>
                  );
                } else if (
                  field.section === 'company' &&
                  field.type === 'textarea'
                ) {
                  return (
                    <MultiText
                      key={idx}
                      register={register}
                      name={field.name}
                      placeholder={field.placeholder}
                      label_name={field.label}
                      maxlength={500}
                      class_name={'text-area-container'}
                    />
                  );
                }
              })}
          </div>

          {isLocationExist && (
            <Fragment>
              <h4>Locations and Connectivity Requirements</h4>
              <div className="company-information">
                {formFields &&
                  formFields.length &&
                  formFields.map((field, idx) => {
                    if (
                      field.section === 'location' &&
                      (field.type === 'text' || field.type === 'number')
                    ) {
                      return (
                        <TextBox
                          key={idx}
                          register={register}
                          name={field.name}
                          placeholder={field.placeholder}
                          label_name={field.label}
                          maxlength={50}
                          required={field.required}
                          pattern={field.pattern}
                          type={field.type}
                        />
                      );
                    } else if (
                      field.section === 'location' &&
                      field.type === 'select'
                    ) {
                      return (
                        <SelectBox
                          value={quoteState[field.name]}
                          key={idx}
                          variant={'outlined'}
                          name={field.name}
                          className={classes}
                          id={field.name}
                          label_name={field.label}
                          options={field.options}
                          placeholder={field.placeholder}
                          control={control}
                          error={!!errors[quoteState[field.name]]}
                          grouping={field.grouping}
                        ></SelectBox>
                      );
                    }
                  })}
              </div>
            </Fragment>
          )}

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

      <div className="button-container">
        <div className="consultation-text">
          <h4>How to prepare:</h4>
          <h4>Be able to:</h4>
          <ul>
            <li>Define your current infrastructure.</li>
            <li>Describe communications gap.</li>
            <li>Define obstacles preventing implementation.</li>
          </ul>
          <h4>Be able to:</h4>

          <ul>
            <li>A detailed discovery session.</li>
            <li>A customized communications strategy.</li>
            <li>A well defined solution to your communications gap.</li>
            <li>Contact from a senior account executive within 48 hours.</li>
          </ul>
        </div>
        {!isLeadDataSent && (
          <button
            type="button"
            className={`btn-basic ${
              isFormSubmitted && !isLeadDataSent && captchaValue
                ? 'btn-grey'
                : ''
            } ${isLeadDataSent ? 'btn-green' : ''}`}
            onClick={handleSubmit(onSubmit)}
          >
            {fromPage &&
              fromPage === constants.ES_SDWAN_SERVICE &&
              'Book a Discovery Consultation'}
            {fromPage &&
              fromPage !== constants.ES_SDWAN_SERVICE &&
              'Request Service'}
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

        {isFormSubmitted && !isLeadDataSent && captchaValue && (
          <LoaderComponent />
        )}
        {/* {isLeadDataSent && (
          <div className="confirmation-text">
            <p>the DEI™ has received your information, {name}</p>
            <p>
              An account executive will call you within 2 – 3 business days to
              discover more about your enterprise needs.
            </p>
          </div>
        )} */}

        {errors && (
          <ErrorMessageContainer
            errors={errors}
            captchaValue={captchaValue}
            isFormSubmitted={isFormSubmitted}
            isSendMailError={isSendMailError}
            isLeadDataSent={isLeadDataSent}
          />
        )}
      </div>
    </section>
  );
};

export default EnterpriseQuoteComponent;
