import React, { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';

import ReCAPTCHA from 'react-google-recaptcha';

import { constants, siteKey } from '../../constants';

import plusIcon from '../../assets/images/plus_icon.svg';
import TextBox from '../common/form-element/text-box';
import '../get-quote/get-quote.component.scss';
import './reconnect-quote.component.scss';
import { useStyles } from '../../utils';
import { sendMail } from '../effects';
import ChipInput from '../common/chip-input/chip-input.component';

import SnackBarComponent from '../common/snackbar/snackbar.component';
import ButtonContainer from '../container/button-container/button-container';
import ErrorMessageContainer from '../container/error-message.container';
import LoaderComponent from '../common/loader/loader.component';

interface IntitialState {
  beliefs: { name: string; active: boolean }[];
  belief: string;
  additional_beliefs: { name: string; active: boolean }[];
  additional_belief: string;
  captchaValue: string;
  isLeadDataSent: boolean;
  isFormSubmitted: boolean;
  isSendMailError: boolean;
}

const ReconnectQuoteComponent: React.FC<any> = (props: any): ReactElement => {
  let INITIAL_STATE: IntitialState = {
    beliefs: [],
    belief: '',
    additional_beliefs: [],
    additional_belief: '',
    captchaValue: '',
    isLeadDataSent: false,
    isFormSubmitted: false,
    isSendMailError: false,
  };
  const { formFields, fromPage } = props;
  const stateData = {};

  formFields &&
    formFields.length &&
    formFields.forEach((field) => {
      if (
        field.type === 'text' ||
        field.type === 'select' ||
        field.type === 'textarea'
      ) {
        stateData[field.name] = '';
      } else if (field.type === 'number') {
        stateData[field.name] = 0;
      }
    });

  INITIAL_STATE = { ...stateData, ...INITIAL_STATE };

  const { register, errors, handleSubmit } = useForm();
  const [state, setState] = useState(INITIAL_STATE);
  const [captcha, setCaptcha] = useState({});
  const {
    additional_beliefs,
    additional_belief,
    belief,
    beliefs,
    isFormSubmitted,
    captchaValue,
    isLeadDataSent,
    isSendMailError,
  } = state;

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
    const activeA =
      beliefs && beliefs.filter((keyword) => keyword.active === true);
    const activeB =
      additional_beliefs &&
      additional_beliefs.filter((brand) => brand.active === true);
    let filteredBeliefs, filteredAdditionalBeliefs;
    if (activeA && activeA.length >= 2 && activeB && activeB.length >= 2) {
      filteredBeliefs = activeA.map((keyword) => keyword.name);
      filteredAdditionalBeliefs = activeB.map((b) => b.name);
    }

    setState((prevState) => {
      return {
        ...prevState,
        ...quoteData,
      };
    });

    if (!captchaValue) {
      return;
    } else {
      sendMail(
        {
          ...quoteData,
          beliefs:
            filteredBeliefs &&
            filteredBeliefs.length &&
            filteredBeliefs.join(','),
          additional_beliefs:
            filteredAdditionalBeliefs &&
            filteredAdditionalBeliefs.length &&
            filteredAdditionalBeliefs.join(','),
        },
        constants.RECONNECT,
      ).then(
        () => {
          setState((prevState) => {
            return {
              ...prevState,
              isLeadDataSent: true,
              isSendMailError: false,
            };
          });
        },
        () => {
          setState((prevState) => {
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

  const handleChange = ($event: React.FormEvent<EventTarget>) => {
    const target = $event.target as HTMLInputElement;
    const value = target.value;
    if (target && target.name) {
      setState((prevState) => {
        return {
          ...prevState,
          [target.name]: value,
        };
      });
    }
  };

  // handle button click for form submit
  const onError = () => {
    setState((prevState) => {
      return {
        ...prevState,
        isButtonSubmit: true,
      };
    });
  };

  const updateState = (obj) => {
    setState((prevState) => {
      return {
        ...prevState,
        ...obj,
      };
    });
  };

  const classes = useStyles();
  const errorKeys = Object.keys(errors);

  return (
    <section className="reconnect-quote-section">
      {isLeadDataSent && <SnackBarComponent isOpen={true} isError={false} />}
      {errorKeys && errorKeys.length ? (
        <SnackBarComponent isOpen={true} isError={true} />
      ) : (
        ''
      )}
      <div className="bg-image"></div>
      <div className="form-container">
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
                      maxlength={50}
                      required={field.required}
                      pattern={field.pattern}
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
                setState((prevState) => {
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
      <div className="keyword-container">
        <h4>Primary belief</h4>
        <ChipInput
          placeholder={'Add keyword'}
          handleChange={handleChange}
          keyword={belief}
          updateState={updateState}
          keywords={beliefs}
          name={'belief'}
          list={'beliefs'}
        />
        <h4>Additional beliefs of interest</h4>
        <ChipInput
          placeholder={'Add keyword'}
          handleChange={handleChange}
          keyword={additional_belief}
          updateState={updateState}
          keywords={additional_beliefs}
          name={'additional_belief'}
          list={'additional_beliefs'}
        />
        <div className="button-container">
          <ButtonContainer
            isLeadDataSent={isLeadDataSent}
            isFormSubmitted={isFormSubmitted}
            captchaValue={captchaValue}
            handleSubmit={handleSubmit(onSubmit)}
            onSubmit={onSubmit}
            name={'Submit'}
          />
          {errors && (
            <ErrorMessageContainer
              errors={errors}
              isFormSubmitted={isFormSubmitted}
              errorKeys={errorKeys}
              captchaValue={captchaValue}
              isSendMailError={isSendMailError}
              isLeadDataSent={isLeadDataSent}
            />
          )}
          {isFormSubmitted && !isLeadDataSent && captchaValue ? (
            <LoaderComponent />
          ) : (
            ''
          )}
        </div>
      </div>
    </section>
  );
};

export default ReconnectQuoteComponent;
