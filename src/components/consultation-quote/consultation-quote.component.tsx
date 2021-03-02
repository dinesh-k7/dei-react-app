import React, { Fragment, ReactElement, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { constants, messages, siteKey } from '../../constants';
import { IGetQuoteProps } from '../../interfaces/get-quote.model';
import MultiText from '../form-element/multi-text';
import SelectBox from '../form-element/select-box';
import TextBox from '../form-element/text-box';

import '../get-quote/get-quote.component.scss';
import './consultation-quote.component.scss';

import { useStyles } from '../../utils';
import { sendMail } from '../effects';
import ErrorMessageContainer from '../container/error-message.container';

import LoaderComponent from '../loader/loader.component';

const ConsultationQuoteComponent: React.FC<any> = (
  props: IGetQuoteProps,
): ReactElement => {
  let INITIAL_STATE: any = {
    captchaValue: '',
    isFormSubmitted: false,
    isLeadDataSent: false,
    isSendMailError: false,
    isBrandingDetailSubmitted: false,
    isButtonSubmit: false,
  };
  const { formFields, fromPage } = props;
  const state = {};
  let companysize = '';

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
  const [size, setCompanySize] = useState(0);
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

    quoteData.isFormSubmitted = true;

    setQuoteState((prevState) => {
      return {
        ...prevState,
        ...quoteData,
      };
    });

    if (!captchaValue) {
      return;
    } else {
      sendMail(quoteData, fromPage).then(
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

  const {
    captchaValue,
    isLeadDataSent,
    isFormSubmitted,
    isSendMailError,
    name,
  } = quoteState;

  if (isLeadDataSent) {
    resetCaptcha();
  }

  const classes = useStyles();

  return (
    <section className="consultation-quote-section">
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
                      class_name={'branding-text-area'}
                    />
                  );
                }
              })}
          </div>

          {isLocationExist && (
            <Fragment>
              <h3>Ttes</h3>
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
                          options={constants.POSITION}
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
            <li>Define your biggest weakness.</li>
            <li>Define obstacles preventing Implementation.</li>
            <li>Describe communications gap.</li>
            <li>commit to attend consultations sessions as scheduled</li>
          </ul>
          <h4>Expect:</h4>

          <ul>
            <li>A detailed discovery session.</li>
            <li>A well defined solution to your communications gap.</li>
            <li>A personal coaching session with Mr. NWO</li>
          </ul>
        </div>
        <div className="consultation-package">
          <span>Package A</span>
          <span>Package B</span>
          <span>Package C</span>
        </div>
        {!isLeadDataSent && (
          <button
            type="button"
            className={`btn-branding`}
            onClick={handleSubmit(onSubmit)}
          >
            Schedule Consultation
          </button>
        )}

        {isFormSubmitted && !isLeadDataSent && captchaValue && (
          <LoaderComponent />
        )}
        {isLeadDataSent && (
          <div className="confirmation-text">
            <p>the DEI™ has received your information, {name}</p>
            <p>
              An account executive will call you within 2 – 3 business days to
              discover more about your enterprise needs.
            </p>
          </div>
        )}

        {errors && <ErrorMessageContainer {...errors} />}

        {!captchaValue && isFormSubmitted && (
          <p className="error_message">{messages.captcha_error}</p>
        )}
        {isSendMailError && (
          <p className="error_message">{messages.mail_send_error}</p>
        )}
      </div>
    </section>
  );
};

export default ConsultationQuoteComponent;
