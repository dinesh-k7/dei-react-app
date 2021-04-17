import React, { Fragment, ReactElement, useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';

import ReCAPTCHA from 'react-google-recaptcha';

import {
  constants,
  messages,
  siteKey,
  CONSULTATION_PACKAGES,
} from '../../constants';

import MultiText from '../common/form-element/multi-text';
import SelectBox from '../common/form-element/select-box';
import TextBox from '../common/form-element/text-box';
import '../get-quote/get-quote.component.scss';
import './consultation-quote.component.scss';
import { useStyles } from '../../utils';
import { sendMail } from '../effects';
import ErrorMessageContainer from '../container/error-message.container';
import LoaderComponent from '../common/loader/loader.component';
import { addToCart } from '../../actions/cart';
import SnackBarComponent from '../common/snackbar/snackbar.component';
import { useHistory } from 'react-router-dom';
import { IPackageModel } from '../../interfaces/package.model';

const ConsultationQuoteComponent: React.FC<any> = (
  props: any,
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
  const history = useHistory();
  const {
    captchaValue,
    isLeadDataSent,
    isFormSubmitted,
    isSendMailError,
    packages,
  } = quoteState;
  const selectedPackages = packages && packages.filter((s) => s.active);

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
    let preferedPackage;
    if (selectedPackages && selectedPackages.length) {
      preferedPackage = selectedPackages.map((d) => d.name);
    } else {
      preferedPackage = false;
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
      if (selectedPackages && selectedPackages.length) {
        props.dispatch(addToCart(selectedPackages));
      }
      sendMail({ ...quoteData, packages: preferedPackage }, fromPage).then(
        () => {
          setQuoteState((prevState) => {
            return {
              ...prevState,
              isLeadDataSent: true,
              isSendMailError: false,
            };
          });
          history.push('cart-page');
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

  if (isLeadDataSent) {
    resetCaptcha();
  }

  const unSelectPackage = (id: number) => {
    const filterService = packages.map((pkg) => {
      if (pkg.id === id) {
        pkg.active = !pkg.active;
      } else {
        pkg.active = false;
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

  return (
    <section className="consultation-quote-section">
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
                  <p className="para-normal">{service.description_one}</p>
                  <span>
                    $
                    {typeof service.price === 'string'
                      ? service.price
                      : service.price.toFixed(2)}
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
        {!isLeadDataSent && (
          <button
            type="button"
            className={`btn-branding ${
              isFormSubmitted && !isLeadDataSent && captchaValue
                ? 'btn-grey'
                : ''
            } ${isLeadDataSent ? 'btn-green' : ''}`}
            onClick={handleSubmit(onSubmit)}
          >
            Schedule Consultation
          </button>
        )}

        {isLeadDataSent && (
          <button
            type="button"
            className="btn-branding btn-green"
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

        {errors && <ErrorMessageContainer {...errors} />}

        {(isFormSubmitted || errorKeys.length) &&
        selectedPackages &&
        !selectedPackages.length ? (
          <p className="error_message">{messages.package_error}</p>
        ) : (
          ''
        )}

        {!captchaValue && isFormSubmitted && (
          <p className="error_message">{messages.captcha_error}</p>
        )}
        {isSendMailError && (
          <p className="error_message">{messages.mail_send_error}</p>
        )}
        {isLeadDataSent && (
          <p className="lead_success">{messages.lead_success}</p>
        )}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  products: addToCart(state),
});

export default connect(mapStateToProps)(ConsultationQuoteComponent);
