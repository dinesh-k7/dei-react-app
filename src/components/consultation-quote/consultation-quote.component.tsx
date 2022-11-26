/* eslint-disable array-callback-return */
import React, { Fragment, ReactElement, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';

import ReCAPTCHA from 'react-google-recaptcha';

import {
  constants,
  messages,
  siteKey,
  CONSULTATION_PACKAGES,
  modalData,
} from '../../constants';

import MultiText from '../common/form-element/multi-text';
import SelectBox from '../common/form-element/select-box';
import TextBox from '../common/form-element/text-box';
import '../get-quote/get-quote.component.scss';
import './consultation-quote.component.scss';
import { useStyles } from '../../utils';
import { sendMail } from '../effects';
import ErrorMessageContainer from '../container/error-message.container';
import ButtonContainer from '../container/button-container/button-container';
import LoaderComponent from '../common/loader/loader.component';
import { addToCart } from '../../actions/cart';
import SnackBarComponent from '../common/snackbar/snackbar.component';
import { useHistory } from 'react-router-dom';
import { IPackageModel } from '../../interfaces/package.model';
import { getConfigDetails } from '../../actions/config';
import AlertDialogComponent from '../common/dialog/alert-dialog.component';

interface ConsultationQuoteComponentProps {
  fromPage: string;
  formFields: any;
  addToCart?: (selectedPackages: any) => void;
  settings?: any;
}

const ConsultationQuoteComponent: React.FC<ConsultationQuoteComponentProps> = (
  props: ConsultationQuoteComponentProps,
): ReactElement => {
  let INITIAL_STATE: any = {
    captchaValue: '',
    isFormSubmitted: false,
    isLeadDataSent: false,
    isSendMailError: false,
    isBrandingDetailSubmitted: false,
    isButtonSubmit: false,
    packages: CONSULTATION_PACKAGES,
  };
  const { formFields, fromPage, settings } = props;
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
  const [open, setOpen] = useState(true);

  const [captcha, setCaptcha] = useState({});
  const history = useHistory();

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

  const {
    captchaValue,
    isLeadDataSent,
    isFormSubmitted,
    isSendMailError,
    packages,
    isButtonSubmit,
  } = quoteState;
  const selectedPackages = packages && packages.filter((s) => s.active);

  const handleClose = () => {
    setOpen(false);
  };
  // Set captcha reference

  const setCaptchaRef = (ref) => {
    if (ref) {
      setCaptcha(ref);
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

  // check Start up kit settings
  let isEnabled = false;
  if (settings && settings.length) {
    const key = 'enableSuk';
    const config = settings.find((set) => set.name === key);
    if (config?.value) {
      isEnabled = true;
    }
  }

  // handle get quote form onSubmit
  const onSubmit = (quoteData: any) => {
    const { captchaValue } = quoteData;
    quoteData.isFormSubmitted = true;
    let preferedPackage;
    if (selectedPackages && selectedPackages.length) {
      preferedPackage = selectedPackages.map((d) => d.name);
    } else {
      preferedPackage = false;
      setQuoteState((prevState) => {
        return {
          ...prevState,
          ...quoteData,
          isButtonSubmit: true,
        };
      });
      return;
    }

    setQuoteState((prevState) => {
      return {
        ...prevState,
        ...quoteData,
        isButtonSubmit: false,
      };
    });

    if (!captchaValue) {
      return;
    } else {
      if (selectedPackages && selectedPackages.length) {
        if (isEnabled) {
          props.addToCart(selectedPackages);
        }

        sendMail({ ...quoteData, packages: preferedPackage }, fromPage).then(
          () => {
            // Google Event tracking
            window['dataLayer'].push({
              event: 'event',
              eventProps: {
                category: 'startup',
                action: 'click',
                label: 'Startup kit Form submit',
                value: { ...quoteData, packages: preferedPackage },
              },
            });
            setQuoteState((prevState) => {
              return {
                ...prevState,
                isLeadDataSent: true,
                isSendMailError: false,
              };
            });

            if (isEnabled) {
              history.push('cart-page');
            }
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
    }
  };

  // Reset captcha
  const resetCaptcha = () => {
    captcha['reset']();
  };

  if (isLeadDataSent) {
    resetCaptcha();
  }

  const unSelectPackage = (id: number) => {
    setQuoteState((prevState) => {
      return {
        ...prevState,
        isFormSubmitted: false,
      };
    });
    const filterService = packages.map((pkg) => {
      if (pkg.id === id) {
        pkg.active = !pkg.active;
      }
      return pkg;
    });

    setQuoteState((prevState) => {
      return {
        ...prevState,
        filterService,
      };
    });
  };

  const classes = useStyles();
  const errorKeys = Object.keys(errors);
  const isQueryString =
    history.location.search.indexOf('package') > -1 ? true : false;
  let packageKits: IPackageModel[] = [];
  if (isQueryString) {
    packageKits = packages.filter(
      (pk) => pk.id === constants.COACHING_PACKAGE_ID,
    );
  } else {
    packageKits = packages.filter(
      (pk) => pk.id !== constants.COACHING_PACKAGE_ID,
    );
  }
  const { title, description } = modalData;
  return (
    <section className="consultation-quote-section">
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
        <h1>Tell us about your project</h1>
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
                      required={field.required}
                    ></SelectBox>
                  );
                }
              })}
          </div>

          <h4>Additional details</h4>
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
        <div className="desktop-hide">
          <ButtonContainer
            isLeadDataSent={isLeadDataSent}
            isFormSubmitted={isFormSubmitted}
            captchaValue={captchaValue}
            handleSubmit={handleSubmit(onSubmit)}
            onSubmit={onSubmit}
          />
        </div>
        <div className="desktop-hide">
          {errors && (
            <ErrorMessageContainer
              errors={errors}
              isFormSubmitted={isFormSubmitted}
              errorKeys={errorKeys}
              selectedPackages={selectedPackages}
              captchaValue={captchaValue}
              isSendMailError={isSendMailError}
              isLeadDataSent={isLeadDataSent}
              isButtonSubmit={isButtonSubmit}
            />
          )}
        </div>
      </div>

      <div className="package-container">
        <h4>Choose a package</h4>
        <div
          className={
            isQueryString
              ? `single-package consultation-package-grid`
              : `consultation-package-grid`
          }
        >
          {packageKits &&
            packageKits.length &&
            packageKits.map((service) => (
              <div className={`package-row`} key={service.id}>
                <div className="package-title">
                  <span>{service.name}</span>
                  <span
                    className={
                      service.active
                        ? 'package-active package-checkbox'
                        : 'package-checkbox'
                    }
                    onClick={() => unSelectPackage(service.id)}
                  ></span>
                </div>
                <div className="package-description-one">
                  <p className="para-normal para-description">
                    {service.description_one}
                  </p>
                  <span>
                    {service.starting ? 'Starting at' : ''} $
                    {typeof service.price === 'string'
                      ? service.price
                      : service.price.toFixed(2)}{' '}
                    USD
                    {service.monthly
                      ? `/ month + $${service.additional_fee.toFixed(
                          2,
                        )} registration fee`
                      : ''}
                  </span>
                </div>
                {service.features && service.features.length ? (
                  <div className="package-description-one">
                    <p className="para-normal">Incuded:</p>
                    <ul>
                      {service.features.map((feature, idx) => {
                        return <li key={idx}>{feature}</li>;
                      })}
                    </ul>
                  </div>
                ) : (
                  ''
                )}
              </div>
            ))}
        </div>
        <div className="mobile-hide">
          <ButtonContainer
            isLeadDataSent={isLeadDataSent}
            isFormSubmitted={isFormSubmitted}
            captchaValue={captchaValue}
            handleSubmit={handleSubmit(onSubmit, onError)}
            onSubmit={onSubmit}
            selectedPackage={selectedPackages}
            fromPage={'startup-kit'}
          />
        </div>

        {isFormSubmitted &&
        !isLeadDataSent &&
        captchaValue &&
        selectedPackages &&
        selectedPackages.length ? (
          <LoaderComponent />
        ) : (
          ''
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

        <div className="mobile-hide">
          {errors && (
            <ErrorMessageContainer
              errors={errors}
              isFormSubmitted={isFormSubmitted}
              errorKeys={errorKeys}
              selectedPackages={selectedPackages}
              captchaValue={captchaValue}
              isSendMailError={isSendMailError}
              isLeadDataSent={isLeadDataSent}
              isButtonSubmit={isButtonSubmit}
            />
          )}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { configReducer } = state;
  return { ...configReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getConfigDetails: () => dispatch(getConfigDetails()),
    addToCart: (product) => dispatch(addToCart(product)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConsultationQuoteComponent);
