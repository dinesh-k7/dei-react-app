import React, { ReactElement, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';

import ReCAPTCHA from 'react-google-recaptcha';

import TextBox from '../common/form-element/text-box';
import '../get-quote/get-quote.component.scss';
import './signup-form.component.scss';
//import { sendMail } from '../effects';
import { registerUser } from '../../actions/user';
import SnackBarComponent from '../common/snackbar/snackbar.component';
import { messages, siteKey } from '../../constants';

import ErrorMessageContainer from '../container/error-message.container';
import LoaderComponent from '../common/loader/loader.component';

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
}

const SignUpFormComponent: React.FC<any> = (props: any): ReactElement => {
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
  };
  const { formFields, isRegisterFailure, isRegisterSuccess } = props;
  const { register, errors, handleSubmit } = useForm();
  const [signUpState, setSignUpState] = useState(INITIAL_STATE);
  const [captcha, setCaptcha] = useState({});

  const {
    isFormSubmitted,
    captchaValue,
    isButtonSubmit,
    isSendMailError,
  } = signUpState;

  // If register user fails, reset isFormSubmitted and hide loader
  useEffect(() => {
    const { isRegisterFailure } = props;
    if (isRegisterFailure) {
      setSignUpState((prevState) => {
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
    const { captchaValue, password, cpassword } = formData;
    formData.isFormSubmitted = true;
    formData.isButtonSubmit = false;

    setSignUpState((prevState) => {
      return {
        ...prevState,
        ...formData,
      };
    });

    if (password !== cpassword) {
      return;
    } else if (!captchaValue) {
      return;
    } else {
      props.registerUser(formData);
      // sendMail(
      //   {
      //     ...formData,
      //   },
      //   constants.RECONNECT,
      // ).then(
      //   () => {
      //     setSignUpState((prevState) => {
      //       return {
      //         ...prevState,
      //         isLeadDataSent: true,
      //         isSendMailError: false,
      //         isSignUpSuccess: true,
      //       };
      //     });
      //   },
      //   () => {
      //     setSignUpState((prevState) => {
      //       return {
      //         ...prevState,
      //         isSendMailError: true,
      //         isFormSubmitted: false,
      //         isSignUpSuccess: false,
      //       };
      //     });
      //   },
      // );
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
  return (
    <section className="signup-form-section">
      {isRegisterFailure && (
        <SnackBarComponent
          isOpen={true}
          isError={true}
          message={messages.signup_error}
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
                    />
                  );
                } else if (
                  field.section === 'personal' &&
                  field.type === 'password'
                ) {
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
                      type={field.type}
                      onChangeHandler={handleChange}
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
            SignUp
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
              Sign up process is success. Please{' '}
              <a href="/sign-in">click here</a> to Sign-in
            </div>
          ) : (
            ''
          )}

          {isFormSubmitted && captchaValue && !isRegisterSuccess ? (
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
    registerUser: (user) => dispatch(registerUser(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpFormComponent);
