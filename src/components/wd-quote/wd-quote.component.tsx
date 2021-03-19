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
import './wd-quote.component.scss';
import { useStyles } from '../../utils';
import { sendMail } from '../effects';
import ErrorMessageContainer from '../container/error-message.container';
import LoaderComponent from '../common/loader/loader.component';
import { addToCart } from '../../actions/cart';
import BrandingDetailContainer from '../container/branding-detail/branding-detail.container';

const WdQuoteComponent: React.FC<any> = (props: any): ReactElement => {
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

  // Set captcha reference

  const setCaptchaRef = (ref) => {
    if (ref) {
      setCaptcha(ref);
    }
  };

  // handle get quote form onSubmit
  const onSubmit = (quoteData: any) => {
    const { captchaValue } = quoteData;
    const { packages } = quoteState;

    quoteData.isFormSubmitted = true;
    const selectedPackages = packages && packages.filter((s) => s.active);
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
    const [product] = selectedPackages;

    if (!captchaValue) {
      return;
    } else {
      props.dispatch(addToCart(selectedPackages));
      //   sendMail({ ...quoteData, packages: preferedPackage }, fromPage).then(
      //     () => {
      //       setQuoteState((prevState) => {
      //         return {
      //           ...prevState,
      //           isLeadDataSent: true,
      //           isSendMailError: false,
      //         };
      //       });
      //     },
      //     () => {
      //       setQuoteState((prevState) => {
      //         return {
      //           ...prevState,
      //           isSendMailError: true,
      //           isFormSubmitted: false,
      //         };
      //       });
      //     },
      //   );
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
    name,
    packages,
  } = quoteState;

  if (isLeadDataSent) {
    resetCaptcha();
  }

  const handleBrandingState = (state) => {
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

  const classes = useStyles();

  return (
    <section className="wd-quote-section">
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
                } else if (
                  field.section === 'company' &&
                  field.type === 'radio'
                ) {
                  return (
                    <div className="form-group radio-section">
                      {field.label}
                      <div className="radio-options">
                        <span>YES</span>
                        <span>NO</span>
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
        handleBrandingState={handleBrandingState}
      />
    </section>
  );
};

const mapStateToProps = (state) => ({
  products: addToCart(state),
});

export default connect(mapStateToProps)(WdQuoteComponent);
