import React, { ReactElement, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';

import TextBox from '../common/form-element/text-box';
import '../get-quote/get-quote.component.scss';
import './signup-form.component.scss';
import { registerUser } from '../../actions/user';
import SnackBarComponent from '../common/snackbar/snackbar.component';
import { constants, messages, siteKey } from '../../constants';
import ErrorMessageContainer from '../container/error-message.container';
import LoaderComponent from '../common/loader/loader.component';
import { sendMail } from '../effects';
import SelectBox from '../common/form-element/select-box';
import { useStyles } from '../../utils';
import { addToCart } from '../../actions/cart';
import MultiText from '../common/form-element/multi-text';

interface IntitialState {
  captchaValue: string;
  isFormSubmitted: boolean;
  isButtonSubmit: boolean;
  isSendMailError: boolean;
  isSignUpSuccess: boolean;
  password: string;
  cpassword: string;
  name: string;
  email: string;
  phone: string;
  platform?: string;
  websiteUrl?: string;
  budget?: number;
  certified?: string;
  type?: string;
  goal?: string;
}

interface SignUpFormComponentProps {
  fromPage?: string;
  formFields: any;
  isRegisterFailure?: any;
  isRegisterSuccess?: any;
  isLoading?: any;
  error?: any;
  action?: any;
  registerUser?: (formData: any, action: string) => void;
}

const SignUpFormComponent = (props: SignUpFormComponentProps): ReactElement => {
  const INITIAL_STATE: IntitialState = {
    captchaValue: '',
    isFormSubmitted: false,
    isButtonSubmit: false,
    isSendMailError: false,
    isSignUpSuccess: false,
    password: '',
    cpassword: '',
    name: '',
    email: '',
    phone: '',
    platform: '',
    websiteUrl: '',
    budget: 0,
    certified: '',
    type: '',
    goal: '',
  };
  const {
    formFields,
    isRegisterFailure,
    isRegisterSuccess,
    isLoading,
    error,
    action,
  } = props;
  const { register, errors, handleSubmit, control } = useForm();
  const [signUpState, setSignUpState] = useState(INITIAL_STATE);
  const [, setCaptcha] = useState({});

  const classes = useStyles();

  const { isFormSubmitted, captchaValue, isButtonSubmit, isSendMailError } =
    signUpState;

  // If register user fails, reset isFormSubmitted and hide loader
  useEffect(() => {
    const { isRegisterFailure, isRegisterSuccess } = props;
    if (isRegisterFailure) {
      setSignUpState((prevState) => {
        return {
          ...prevState,
          isFormSubmitted: false,
        };
      });
    }
    if (isRegisterSuccess && !action) {
      const { email, name } = signUpState;
      const userData = {
        email,
        name,
      };
      sendMail(userData, constants.SIGN_UP);
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
    const { captchaValue, password, cpassword } = formData;
    formData.isFormSubmitted = true;
    formData.isButtonSubmit = false;

    setSignUpState((prevState) => {
      return {
        ...prevState,
        ...formData,
      };
    });

    if (password !== cpassword && !action) {
      return;
    } else if (!captchaValue) {
      return;
    } else {
      props.registerUser(formData, action);
    }
  };

  // Handle form password input change event
  const handleChange = ($event: React.FormEvent<EventTarget>) => {
    const target = $event.target as HTMLInputElement;
    const { name, value } = target;
    setSignUpState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  // handle button click for signup form submit error
  const onError = () => {
    setSignUpState((prevState) => {
      return {
        ...prevState,
        isButtonSubmit: true,
      };
    });
  };
  const errorKeys = Object.keys(errors);
  const { certified } = signUpState;

  return (
    <section className="signup-form-section">
      {error && (
        <SnackBarComponent
          isOpen={true}
          isError={true}
          message={error ? error : messages.signup_error}
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
                      prefix={field.prefix}
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
                    />
                  );
                } else if (field.type === 'password') {
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
                      onChangeHandler={handleChange}
                    />
                  );
                } else if (field.type === 'select') {
                  return (
                    <SelectBox
                      value={signUpState[field.name]}
                      key={field.name}
                      className={classes}
                      handleSelect={handleChange}
                      variant={'outlined'}
                      name={field.name}
                      id={field.name}
                      label_name={field.label}
                      options={field.options}
                      placeholder={field.placeholder}
                      control={control}
                      required={field.required}
                      error={!!errors[signUpState[field.name]]}
                    ></SelectBox>
                  );
                } else if (field.type === 'radio') {
                  return (
                    <div className="form-group radio-section">
                      <span>{field.label} </span>
                      <div className="radio-options">
                        <span
                          className={
                            certified === 'Yes' ? 'green-bg' : 'white-bg'
                          }
                          onClick={() => {
                            setSignUpState((prevState) => {
                              return {
                                ...prevState,
                                certified: 'Yes',
                              };
                            });
                          }}
                        >
                          YES
                        </span>
                        <span
                          className={certified === 'No' ? 'red-bg' : 'white-bg'}
                          onClick={() => {
                            setSignUpState((prevState) => {
                              return {
                                ...prevState,
                                certified: 'No',
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

          <div className="form-group recaptcha-container mobile-hide">
            <ReCAPTCHA
              ref={(r) => setCaptchaRef(r)}
              sitekey={siteKey}
              onChange={(e) => {
                const captchaValue = e ? e : '';
                setSignUpState((prevState) => {
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
      <div className="signup-button-container">
        <div className="form-group recaptcha-container desktop-hide">
          <ReCAPTCHA
            ref={(r) => setCaptchaRef(r)}
            sitekey={siteKey}
            onChange={(e) => {
              const captchaValue = e ? e : '';
              setSignUpState((prevState) => {
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
            className={`btn-basic ${isRegisterSuccess ? 'btn-disabled' : ''}`}
            onClick={handleSubmit(onSubmit, onError)}
            disabled={isRegisterSuccess ? true : false}
          >
            {action === 'freelancer' ||
            action === 'business' ||
            action === 'personal'
              ? 'Register'
              : ''}
            {!action ? 'Sign Up' : ''}
          </button>

          {errors && (
            <ErrorMessageContainer
              errors={errors}
              isFormSubmitted={isFormSubmitted}
              errorKeys={errorKeys}
              captchaValue={captchaValue}
              isSendMailError={isSendMailError}
              isButtonSubmit={isButtonSubmit}
              state={signUpState}
            />
          )}

          {isRegisterFailure && !isFormSubmitted ? (
            <p className="error_message custom_msg">Error in Sign up process</p>
          ) : (
            ''
          )}

          {isRegisterSuccess ? (
            <div className="signup-success">
              {!action
                ? 'Sign Up is successful. Activation link has been sent to your email.'
                : 'Account has been registered successfully.'}
            </div>
          ) : (
            ''
          )}

          {isFormSubmitted && captchaValue && isLoading ? (
            <LoaderComponent />
          ) : (
            ''
          )}
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
    registerUser: (user, type) => dispatch(registerUser(user, type)),
    addToCart: (product) => dispatch(addToCart(product)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpFormComponent);
