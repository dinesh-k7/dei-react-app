/* eslint-disable array-callback-return */
import React, { Fragment, ReactElement, useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { constants, messages, modalData, siteKey } from '../../constants';
import { IGetQuoteProps } from '../../interfaces/get-quote.model';
import MultiText from '../common/form-element/multi-text';
import SelectBox from '../common/form-element/select-box';
import TextBox from '../common/form-element/text-box';

import { useStyles } from '../../utils';
import { sendMail } from '../effects';
import ErrorMessageContainer from '../container/error-message.container';
import LoaderComponent from '../common/loader/loader.component';
import SnackBarComponent from '../common/snackbar/snackbar.component';
import AlertDialogComponent from '../common/dialog/alert-dialog.component';

import '../get-quote/get-quote.component.scss';
import './enterprise-quote.component.scss';
import { connect } from 'react-redux';

const EnterpriseQuoteComponent: React.FC<IGetQuoteProps> = (
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
  const { formFields, fromPage, serviceName, settings } = props;
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
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // If user is logged
    const userData = localStorage.getItem('userData');
    if (userData) {
      const {
        email,
        name,
        phone,
        lastname,
        companyName,
        position,
        websiteUrl,
      } = JSON.parse(userData);
      setQuoteState((prevState) => {
        return {
          ...prevState,
          email,
          name,
          phone,
          lastname,
          companyName,
          position,
          websiteUrl,
        };
      });
    }
  }, []);

  // Set captcha reference

  const setCaptchaRef = (ref) => {
    if (ref) {
      setCaptcha(ref);
    }
  };

  // handle input change
  const onChangeHandler = ($event: React.FormEvent<EventTarget>) => {
    const target = $event.target as HTMLInputElement;
    const value = target.value;
    if (target && target.name) {
      setQuoteState((prevState) => {
        return {
          ...prevState,
          [target.name]: value,
        };
      });
    }
  };

  // handle button click for form submit
  const onError = () => {
    setQuoteState((prevState) => {
      return {
        ...prevState,
        isButtonSubmit: true,
      };
    });
  };

  // handle get quote form onSubmit
  const onSubmit = (quoteData: any) => {
    const { captchaValue } = quoteData;
    const { services } = quoteState;

    quoteData.isFormSubmitted = true;
    quoteData.isButtonSubmit = false;
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
          // Google Event tracking
          window['dataLayer'].push({
            event: 'event',
            eventProps: {
              category: 'Enterprise',
              action: 'click',
              label: 'Enterprise Form submit',
              value: { ...quoteData, services: preferedServices },
            },
          });
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
    isButtonSubmit,
  } = quoteState;

  if (isLeadDataSent) {
    resetCaptcha();
  }

  // check IT Plexus settings
  let isEnabled = false;
  if (settings && settings.length) {
    const key = 'enableItPlexus';
    const config = settings.find((set) => set.name === key);
    if (config?.value) {
      isEnabled = true;
    }
  }

  const classes = useStyles();
  const errorKeys = Object.keys(errors);
  const { title, description } = modalData;
  return (
    <section
      className="enterprise-quote-section"
      style={{ gridRow: fromPage === 'compliance' ? '4/5' : '3/4' }}
    >
      {isLeadDataSent && (
        <SnackBarComponent
          isOpen={true}
          isError={false}
          message={messages.request_success}
        />
      )}
      {errorKeys && errorKeys.length ? (
        <SnackBarComponent
          isOpen={true}
          isError={true}
          message={messages.validation_error}
        />
      ) : (
        ''
      )}
      <div className="bg-image"></div>
      <div className="form-container">
        {open && !isEnabled && isLeadDataSent ? (
          <AlertDialogComponent
            title={title}
            description={description}
            isShow={open}
            handleClose={handleClose}
          />
        ) : (
          ''
        )}
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
                      maxlength={field.maxlength}
                      required={field.required}
                      pattern={field.pattern}
                      value={quoteState[field.name]}
                      onChangeHandler={onChangeHandler}
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
                      maxlength={field.maxlength}
                      required={field.required}
                      pattern={field.pattern}
                      type={field.type}
                      value={quoteState[field.name]}
                      onChangeHandler={onChangeHandler}
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
                      maxlength={field.maxlength}
                      class_name={'text-area-container'}
                    />
                  );
                }
              })}
          </div>

          {isLocationExist && (
            <Fragment>
              {serviceName && serviceName === 'Point To Point' ? (
                <h4>Describe your Point to Point need</h4>
              ) : (
                <h4>Locations and Connectivity Requirements</h4>
              )}
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
                          maxlength={field.maxlength}
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
                    } else if (
                      field.section === 'location' &&
                      field.type === 'textarea'
                    ) {
                      return (
                        <MultiText
                          key={idx}
                          register={register}
                          name={field.name}
                          placeholder={field.placeholder}
                          label_name={field.label}
                          maxlength={field.maxlength}
                          class_name={'text-area-container'}
                        />
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
          <h4>What to expect:</h4>

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
            onClick={handleSubmit(onSubmit, onError)}
          >
            {fromPage &&
              fromPage === constants.ES_SECURITY_SERVICE &&
              'Book a Discovery Consultation'}
            {fromPage && fromPage === 'compliance' && 'VSA Consultation'}
            {fromPage &&
              fromPage !== constants.ES_SECURITY_SERVICE &&
              fromPage !== 'compliance' &&
              'Request Service'}
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

        {isFormSubmitted && !isLeadDataSent && captchaValue && (
          <LoaderComponent />
        )}
        {/* {isLeadDataSent && (
          <div className="confirmation-text">
            <p>the DEI®️ has received your information, {name}</p>
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
            isButtonSubmit={isButtonSubmit}
          />
        )}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { configReducer } = state;
  return { ...configReducer };
};

export default connect(mapStateToProps)(EnterpriseQuoteComponent);
