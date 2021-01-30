import React, { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';

import { IGetQuoteProps } from '../../interfaces/get-quote.model';
import MonthlyPriceComponent from '../monthly-price/monthly-price.component';
import { constants, siteKey } from '../../constants';
import { calculateMonthlyAmount, useStyles } from '../../utils';
import { sendMail } from '../effects';
import '../../assets/scss/styles.scss';
import './get-quote.component.scss';
import bg from '../../assets/images/blue_blob_vector.svg';
import info_icon from '../../assets/images/info_icon.png';
import SelectBox from '../form-element/select-box';
import TextBox from '../form-element/text-box';
import MultiText from '../form-element/multi-text';
import BrandingDetailContainer from '../container/branding-detail/branding-detail.container';
import { apparel } from '../../constants/industry-option';

const GetQuoteComponent: React.FC<any> = (
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
  const { formFields } = props;
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

  let companysize = '';

  // Set captcha reference

  const setCaptchaRef = (ref) => {
    if (ref) {
      setCaptcha(ref);
    }
  };

  const handleBrandingState = (state) => {
    const { keywords, colorPicker, brands } = state;
    if (
      keywords &&
      keywords.length >= 2 &&
      colorPicker &&
      brands &&
      brands.length >= 2
    ) {
      const values = keywords.map((keyword) => keyword.name);
      const brand = brands.map((brand) => brand.name);

      setQuoteState((prevState) => {
        return {
          ...prevState,
          keywords: values && values.length && values.join(','),
          brands: brand && brand.length && brand.join(','),
          colorPicker,
          isBrandingDetailSubmitted: true,
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
    const {
      isBrandingDetailSubmitted,
      keywords,
      brands,
      colorPicker,
    } = quoteState;

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
  const { captchaValue, isLeadDataSent } = quoteState;

  if (isLeadDataSent) {
    resetCaptcha();
  }

  const classes = useStyles();
  const { fromPage, vimage } = props;
  return (
    <section className="get-quote-section">
      <div className="bg-image">
        <img src={vimage ? vimage : bg} alt="Quote bg vector" />
      </div>
      <div className="form-container">
        <h1>Tell us about your company</h1>
        <h4>Personal Information</h4>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
                      info_icon={field.name === 'companySize' ? info_icon : ''}
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
                      className={classes}
                      variant={'outlined'}
                      name={field.name}
                      id={field.name}
                      // handleSelect={handleSelect}
                      label_name={field.label}
                      options={
                        field.name === 'industry' ? apparel : constants.POSITION
                      }
                      placeholder={field.placeholder}
                      control={control}
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
                      maxlength={500}
                      class_name={'branding-text-area'}
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
          handleBrandingState={handleBrandingState}
        />
      )}
    </section>
  );
};

export default GetQuoteComponent;
