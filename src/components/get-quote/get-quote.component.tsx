/* eslint-disable array-callback-return */
import React, { ReactElement, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { connect } from 'react-redux';

import { IGetQuoteProps } from '../../interfaces/get-quote.model';
import MonthlyPriceComponent from '../monthly-price/monthly-price.component';
import { constants, messages, modalData, siteKey } from '../../constants';
import {
  addProductToCart,
  calculateMonthlyAmount,
  processSFCRMPayload,
  useStyles,
} from '../../utils';
import { postSFCRMData, sendMail } from '../effects';
import '../../assets/scss/styles.scss';
import './get-quote.component.scss';
import bg from '../../assets/images/blue_blob_vector.svg';
import info_icon from '../../assets/images/info_icon.png';
import SelectBox from '../common/form-element/select-box';
import TextBox from '../common/form-element/text-box';
import MultiText from '../common/form-element/multi-text';
import BrandingDetailContainer from '../container/branding-detail/branding-detail.container';
import { industries } from '../../constants/industry-option';
import { addToCart } from '../../actions/cart';
import SnackBarComponent from '../common/snackbar/snackbar.component';
import { getConfigDetails } from '../../actions/config';
import AlertDialogComponent from '../common/dialog/alert-dialog.component';
import { useHistory } from 'react-router-dom';

const GetQuoteComponent: React.FC<IGetQuoteProps> = (
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
  const { formFields, fromPage, vimage, settings } = props;
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
  const [size, setCompanySize] = useState(0);
  const [captcha, setCaptcha] = useState({});
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  let companysize = '';

  // Set captcha reference

  const setCaptchaRef = (ref) => {
    if (ref) {
      setCaptcha(ref);
    }
  };

  useEffect(() => {
    props.getConfigDetails();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleState = (state) => {
    const { keywords, colorPicker, brands } = state;
    const activeKeywords =
      keywords && keywords.filter((keyword) => keyword.active === true);
    const activeBrands =
      brands && brands.filter((brand) => brand.active === true);

    if (
      activeKeywords &&
      activeKeywords.length >= 2 &&
      colorPicker &&
      activeBrands &&
      activeBrands.length >= 2
    ) {
      const values = activeKeywords.map((keyword) => keyword.name);
      const brand = activeBrands.map((brand) => brand.name);

      setQuoteState((prevState) => {
        return {
          ...prevState,
          keywords: values && values.length && values.join(','),
          brands: brand && brand.length && brand.join(','),
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

  // check Data sentinels settings
  let isEnabled = false;
  if (settings && settings.length) {
    const key = fromPage === 'branding' ? 'enableBranding' : 'enableDs';
    const config = settings.find((set) => set.name === key);
    if (config?.value) {
      isEnabled = true;
    }
  }

  // handle get quote form onSubmit
  const onSubmit = (quoteData: any) => {
    const { captchaValue } = quoteData;
    const { isBrandingDetailSubmitted, keywords, brands, colorPicker } =
      quoteState;

    if (fromPage === 'branding' && !isBrandingDetailSubmitted) {
      setQuoteState({ ...quoteState, isButtonSubmit: true });
      return;
    }

    quoteData.isFormSubmitted = true;
    quoteData.isButtonSubmit = false;
    if (isBrandingDetailSubmitted) {
      quoteData.keywords = keywords;
      quoteData.brands = brands;
      quoteData.colorPicker = colorPicker;
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
      const monthlyPremium = calculateMonthlyAmount(size);
      quoteData.monthlyCost = monthlyPremium && +monthlyPremium.toFixed(2);
      const product = addProductToCart(quoteData, fromPage);

      if (isEnabled) {
        props.addToCart([product]);
      }
    
      
      sendMail(quoteData, fromPage).then(
        () => {
          //Post data to SFCRM
          const sfcrmPayload = processSFCRMPayload(
            quoteData,
            constants.DATA_SENTINELS,
          );
          postSFCRMData(sfcrmPayload, constants.DATA_SENTINELS);
          // Google Event tracking
          window['dataLayer'].push({
            event: 'event',
            eventProps: {
              category: fromPage === 'branding' ? 'Branding' : 'Data Security',
              action: 'click',
              label:
                fromPage === 'branding'
                  ? 'Branding Form submit'
                  : 'Data Security Form submit',
              value: quoteData,
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
  };

  // Reset captcha
  const resetCaptcha = () => {
    captcha['reset']();
  };

  //handle company size change event
  const onChangeHandler = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    if (target.name && target.name === 'companySize') {
      companysize = value;
      setCompanySize(+companysize);
    } else {
      setQuoteState((prevState) => {
        return {
          ...prevState,
          [target.name]: value,
        };
      });
    }
  };
  const { captchaValue, isLeadDataSent } = quoteState;

  if (isLeadDataSent) {
    resetCaptcha();
  }

  const classes = useStyles();
  const errorKeys = Object.keys(errors);
  const { title, description } = modalData;

  return (
    <section className="get-quote-section">
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

      <div className="bg-image">
        <img src={vimage ? vimage : bg} alt="Quote bg vector" />
      </div>
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
                      min={field.min}
                      info_icon={field.name === 'companySize' ? info_icon : ''}
                      onChangeHandler={onChangeHandler}
                      value={
                        field.name === 'companySize'
                          ? size
                          : quoteState[field.name]
                      }
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
                      className={classes}
                      variant={'outlined'}
                      name={field.name}
                      id={field.name}
                      label_name={field.label}
                      options={
                        field.name === 'industry'
                          ? industries
                          : constants.POSITION
                      }
                      placeholder={field.placeholder}
                      control={control}
                      required={field.required}
                      error={!!errors[quoteState[field.name]]}
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

      {fromPage !== 'branding' && (
        <MonthlyPriceComponent
          quoteState={quoteState}
          size={size}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          onError={onError}
          isEnabled={isEnabled}
        />
      )}
      {fromPage === 'branding' && (
        <BrandingDetailContainer
          handleSubmit={handleSubmit}
          quoteState={quoteState}
          errors={errors}
          onSubmit={onSubmit}
          register={register}
          onError={onError}
          handleState={handleState}
          isEnabled={isEnabled}
        />
      )}
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

export default connect(mapStateToProps, mapDispatchToProps)(GetQuoteComponent);
