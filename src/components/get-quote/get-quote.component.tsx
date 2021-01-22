import React, { Fragment, ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';

import {
  IGetQuoteModel,
  IGetQuoteProps,
} from '../../interfaces/get-quote.model';
import MonthlyPriceComponent from '../monthly-price/monthly-price.component';
import { constants, siteKey, patterns } from '../../constants';
import { calculateMonthlyAmount, useStyles } from '../../utils';
import { sendMail } from '../effects';
import '../../assets/scss/styles.scss';
import './get-quote.component.scss';
import bg from '../../assets/images/blue_blob_vector.svg';
import info_icon from '../../assets/images/info_icon.png';
import SelectBox from '../form-element/select-box';
import TextBox from '../form-element/text-box';
import MultiText from '../form-element/multi-text';
import BrandingDetailContainer from '../container/branding-detail.container';

const GetQuoteComponent: React.FC<any> = (
  props: IGetQuoteProps,
): ReactElement => {
  const INITIAL_STATE: IGetQuoteModel = {
    name: '',
    lastname: '',
    email: '',
    phone: '',
    companySize: 0,
    position: '',
    websiteUrl: '',
    companyName: '',
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
      const monthlyPremium = calculateMonthlyAmount(size);
      quoteData.monthlyCost = monthlyPremium && +monthlyPremium.toFixed(2);
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
            <TextBox
              register={register}
              name={'name'}
              placeholder={'e.g. John'}
              label_name={'Name'}
              maxlength={50}
            />

            <TextBox
              register={register}
              name={'lastname'}
              placeholder={'e.g. Doe'}
              label_name={'Last Name'}
              maxlength={50}
            />

            <TextBox
              register={register}
              name={'email'}
              placeholder={'e.g. johndoe@email.com'}
              label_name={'E-mail'}
              maxlength={50}
              pattern={patterns.email}
            />

            <TextBox
              register={register}
              name={'phone'}
              placeholder={'e.g. 123456789'}
              label_name={'Phone Number'}
              maxlength={15}
              pattern={patterns.phone}
            />
          </div>

          <h4>Company Information</h4>
          <div className="company-information">
            <TextBox
              register={register}
              name={'companyName'}
              placeholder={'e.g. JohnDoe and co.'}
              label_name={'Company Name'}
              maxlength={70}
            />

            {fromPage === 'branding' ? (
              <TextBox
                register={register}
                name={'slogan'}
                placeholder={'e.g. Think different'}
                label_name={'Slogan'}
                type={'text'}
              />
            ) : (
              <Fragment>
                <TextBox
                  register={register}
                  name={'companySize'}
                  placeholder={'0'}
                  label_name={'Company Size'}
                  type={'number'}
                  onChangeHandler={onChangeHandler}
                  min={1}
                  info_icon={info_icon}
                />
              </Fragment>
            )}

            {fromPage === 'branding' ? (
              <SelectBox
                position={position}
                className={classes}
                variant={'outlined'}
                name={'industry'}
                id={'industry'}
                handleSelect={handleSelect}
                label_name={'Industry'}
                options={constants.INDUSTRIES}
                placeholder={'e.g. Accounting'}
              ></SelectBox>
            ) : (
              ''
            )}

            <SelectBox
              position={position}
              className={classes}
              variant={'outlined'}
              name={'position'}
              id={'position'}
              handleSelect={handleSelect}
              label_name={'Your position in company'}
              options={constants.POSITION}
              placeholder={'e.g. Project Manager'}
            ></SelectBox>

            {fromPage !== 'branding' ? (
              <TextBox
                register={register}
                name={'websiteUrl'}
                placeholder={'e.g. https://www.company.com'}
                label_name={'Current website URL'}
                pattern={patterns.website_url}
              />
            ) : (
              ''
            )}

            {fromPage === 'branding' && (
              <MultiText
                register={register}
                name={'target_audience'}
                placeholder={'e.g. Accounting'}
                label_name={'What is your target audience'}
                maxlength={500}
                class_name={'branding-text-area'}
              />
            )}

            {fromPage === 'branding' && (
              <MultiText
                register={register}
                name={'about_company'}
                placeholder={'e.g. Accounting'}
                label_name={'Tell us about your company'}
                maxlength={500}
                class_name={'branding-text-area'}
              />
            )}

            {fromPage === 'branding' && (
              <MultiText
                register={register}
                name={'comment'}
                placeholder={'e.g. comment'}
                label_name={'Additional comment'}
                maxlength={500}
                class_name={'branding-text-area'}
              />
            )}
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
      {fromPage === 'branding' && <BrandingDetailContainer />}
    </section>
  );
};

export default GetQuoteComponent;
