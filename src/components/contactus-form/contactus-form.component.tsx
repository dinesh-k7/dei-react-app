/* eslint-disable array-callback-return */
import React, { ReactElement, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';

import TextBox from '../common/form-element/text-box';
import '../get-quote/get-quote.component.scss';
import './contactus-form.component.scss';
import { postContactForm } from '../../actions/user';
import SnackBarComponent from '../common/snackbar/snackbar.component';
import { messages, siteKey } from '../../constants';
import ErrorMessageContainer from '../container/error-message.container';
import LoaderComponent from '../common/loader/loader.component';
import MultiText from '../common/form-element/multi-text';

interface IntitialState {
  captchaValue: string;
  isFormSubmitted: boolean;
  isButtonSubmit: boolean;
  isSendMailError: boolean;
  email: string;
  name: string;
}

interface ContactusFormComponentProps {
  formFields: any;
  error?: string;
  isLoading?: boolean;
  postContactForm?: (formData) => void;
}

const ContactusFormComponent: React.FC<ContactusFormComponentProps> = (
  props: ContactusFormComponentProps,
): ReactElement => {
  const INITIAL_STATE: IntitialState = {
    captchaValue: '',
    isFormSubmitted: false,
    isButtonSubmit: false,
    isSendMailError: false,
    email: '',
    name: '',
  };
  const { formFields, isLoading, error } = props;
  const { register, errors, handleSubmit } = useForm();
  const [state, setState] = useState(INITIAL_STATE);
  const [, setCaptcha] = useState({});

  const { isFormSubmitted, captchaValue, isButtonSubmit, isSendMailError } =
    state;

  // If register user fails, reset isFormSubmitted and hide loader
  useEffect(() => {
    const { error } = props;
    if (error) {
      setState((prevState) => {
        return {
          ...prevState,
          isFormSubmitted: false,
        };
      });
    }
  }, [props]);

  // Set captcha reference
  const setCaptchaRef = (ref) => {
    if (ref) {
      setCaptcha(ref);
    }
  };

  // handle Sign Up form onSubmit
  const onSubmit = (formData: any) => {
    const { captchaValue } = formData;
    formData.isFormSubmitted = true;
    formData.isButtonSubmit = false;

    setState((prevState) => {
      return {
        ...prevState,
        ...formData,
      };
    });

    if (!captchaValue) {
      return;
    } else {
      props.postContactForm(formData);
    }
  };

  // handle button click for signup form submit error
  const onError = () => {
    setState((prevState) => {
      return {
        ...prevState,
        isButtonSubmit: true,
      };
    });
  };
  const errorKeys = Object.keys(errors);
  return (
    <section className="contactus-form-section">
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
        <form autoComplete="off">
          <div className="personal-information">
            {formFields &&
              formFields.length &&
              formFields.map((field) => {
                if (field.type === 'text') {
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
                    />
                  );
                } else if (field.type === 'textarea') {
                  return (
                    <MultiText
                      key={field.name}
                      register={register}
                      name={field.name}
                      placeholder={field.placeholder}
                      label_name={field.label}
                      maxlength={field.maxlength}
                      class_name={'text-area-container'}
                      required={field.required}
                    />
                  );
                }
              })}
          </div>

          <div className="form-group recaptcha-container mobile-hide">
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
      <div className="contactus-button-container">
        <div className="form-group recaptcha-container desktop-hide">
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

        <div className="button-container">
          <button
            type="button"
            className={`btn-basic ${
              isFormSubmitted && !error && !isLoading && captchaValue
                ? 'btn-disabled'
                : ''
            }`}
            onClick={handleSubmit(onSubmit, onError)}
            disabled={
              isFormSubmitted && !error && !isLoading && captchaValue
                ? true
                : false
            }
          >
            Submit
          </button>

          {errors && (
            <ErrorMessageContainer
              errors={errors}
              isFormSubmitted={isFormSubmitted}
              errorKeys={errorKeys}
              captchaValue={captchaValue}
              isSendMailError={isSendMailError}
              isButtonSubmit={isButtonSubmit}
              state={setState}
            />
          )}

          {!isFormSubmitted && error ? (
            <p className="error_message custom_msg">
              Error in submitting contact us form.
            </p>
          ) : (
            ''
          )}

          {isFormSubmitted && !isLoading && captchaValue ? (
            <div className="contactus-success">
              Thank you for contacting us, Will get back to you soon.
            </div>
          ) : (
            ''
          )}

          {isLoading ? <LoaderComponent /> : ''}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { userReducer } = state;
  return { ...userReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postContactForm: (user) => dispatch(postContactForm(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactusFormComponent);
