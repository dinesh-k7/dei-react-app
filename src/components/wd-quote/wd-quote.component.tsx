import React, { ReactElement, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';

import ReCAPTCHA from 'react-google-recaptcha';

import { messages, modalData, siteKey } from '../../constants';

import MultiText from '../common/form-element/multi-text';
import SelectBox from '../common/form-element/select-box';
import TextBox from '../common/form-element/text-box';
import '../get-quote/get-quote.component.scss';
import './wd-quote.component.scss';
import { addProductToCart, useStyles } from '../../utils';
import { sendMail } from '../effects';
// import ErrorMessageContainer from '../container/error-message.container';
// import LoaderComponent from '../common/loader/loader.component';
import { addToCart } from '../../actions/cart';
import BrandingDetailContainer from '../container/branding-detail/branding-detail.container';
import SnackBarComponent from '../common/snackbar/snackbar.component';
import { useHistory } from 'react-router-dom';
import { getConfigDetails } from '../../actions/config';
import AlertDialogComponent from '../common/dialog/alert-dialog.component';

interface WdQuoteComponentProps {
  fromPage: string;
  vimage: string;
  formFields: any;
  settings?: any;
  addToCart?: any;
}

const WdQuoteComponent: React.FC<WdQuoteComponentProps> = (
  props: WdQuoteComponentProps,
): ReactElement => {
  let INITIAL_STATE: any = {
    captchaValue: '',
    isFormSubmitted: false,
    isLeadDataSent: false,
    isSendMailError: false,
    isBrandingDetailSubmitted: false,
    isButtonSubmit: false,
    isContent: '',
    isSelling: '',
    isSEO: '',
  };
  const { formFields, fromPage, settings } = props;
  const history = useHistory();

  const state = {};

  formFields &&
    formFields.length &&
    formFields.forEach((field) => {
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

  const handleClose = () => {
    setOpen(false);
  };

  // check Custom designs settings
  let isEnabled = false;
  if (settings && settings.length) {
    const key = 'enableWd';
    const config = settings.find((set) => set.name === key);
    if (config?.value) {
      isEnabled = true;
    }
  }

  // handle get quote form onSubmit
  const onSubmit = (quoteData: any) => {
    const { captchaValue } = quoteData;

    quoteData.isFormSubmitted = true;

    const {
      isBrandingDetailSubmitted,
      keywords,
      brands,
      colorPicker,
      isSelling,
      isSEO,
      isContent,
    } = quoteState;

    if (fromPage === 'wd' && !isBrandingDetailSubmitted) {
      setQuoteState({ ...quoteState, isButtonSubmit: true });
      return;
    }

    quoteData.isFormSubmitted = true;
    quoteData.isButtonSubmit = false;
    if (isBrandingDetailSubmitted) {
      quoteData.keywords = keywords;
      quoteData.brands = brands;
      quoteData.colorPicker = colorPicker;
      quoteData.isSelling = isSelling;
      quoteData.isSEO = isSEO;
      quoteData.isContent = isContent;
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
      const product = addProductToCart(quoteData, fromPage);
      if (isEnabled) {
        props.addToCart([product]);
      }

      sendMail({ ...quoteData }, fromPage).then(
        () => {
          setQuoteState((prevState) => {
            return {
              ...prevState,
              isLeadDataSent: true,
              isSendMailError: false,
            };
          });
          // {
          //   isEnabled ? history.push('cart-page') : '';
          // }
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

  const { captchaValue, isLeadDataSent, isContent } = quoteState;

  if (isLeadDataSent) {
    resetCaptcha();
  }

  const handleState = (state) => {
    const { keywords, colorPicker, isSelling, isSEO } = state;
    const activeKeywords =
      keywords && keywords.filter((keyword) => keyword.active === true);

    if (activeKeywords && activeKeywords.length >= 2 && colorPicker) {
      const values = activeKeywords.map((keyword) => keyword.name);

      setQuoteState((prevState) => {
        return {
          ...prevState,
          keywords: values && values.length && values.join(','),
          isSelling,
          isSEO,
          colorPicker,
          isBrandingDetailSubmitted: true,
        };
      });
    } else {
      setQuoteState((prevState) => {
        return {
          ...prevState,
          isBrandingDetailSubmitted: false,
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

  const classes = useStyles();
  const errorKeys = Object.keys(errors);
  const { title, description } = modalData;
  return (
    <section className="wd-quote-section">
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

        <h1>{`DEI™ Custom Designs:`}</h1>
        <h4>Personal Information</h4>
        <form autoComplete="off">
          <div className="personal-information">
            {formFields &&
              formFields.length &&
              formFields.map((field) => {
                if (field.section === 'personal' && field.type === 'text') {
                  return (
                    <TextBox
                      key={field.name}
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
                      key={field.name}
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
              formFields.map((field) => {
                if (
                  field.section === 'company' &&
                  (field.type === 'text' || field.type === 'number')
                ) {
                  return (
                    <TextBox
                      key={field.name}
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
                      key={field.name}
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
                      key={field.name}
                      register={register}
                      name={field.name}
                      placeholder={field.placeholder}
                      label_name={field.label}
                      maxlength={field.maxlength}
                      class_name={'text-area-container'}
                    />
                  );
                } else if (
                  field.section === 'company' &&
                  field.type === 'radio'
                ) {
                  return (
                    <div className="form-group radio-section">
                      {field.label}
                      <div className="radio-options">
                        <span
                          className={
                            isContent === 'Yes' ? 'green-bg' : 'white-bg'
                          }
                          onClick={() => {
                            setQuoteState((prevState) => {
                              return {
                                ...prevState,
                                isContent: 'Yes',
                              };
                            });
                          }}
                        >
                          YES
                        </span>
                        <span
                          className={isContent === 'No' ? 'red-bg' : 'white-bg'}
                          onClick={() => {
                            setQuoteState((prevState) => {
                              return {
                                ...prevState,
                                isContent: 'No',
                              };
                            });
                          }}
                        >
                          NO
                        </span>
                      </div>
                    </div>
                  );
                }
              })}
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

      <BrandingDetailContainer
        handleSubmit={handleSubmit}
        quoteState={quoteState}
        errors={errors}
        onSubmit={onSubmit}
        register={register}
        onError={onError}
        fromPage={'wd'}
        handleState={handleState}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(WdQuoteComponent);
