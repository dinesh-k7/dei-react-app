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
// import { useStyles } from '../../utils';
import { addToCart } from '../../actions/cart';
import MultiText from '../common/form-element/multi-text';
import {
  Avatar,
  Button,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
} from '@material-ui/core';

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
  avatar?: string;
  isp?: string;
  skills?: string;
  experience?: string;
  isAgency?: boolean;
  isDEICertified?: boolean;
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
    avatar: '',
    isp: '',
    skills: '',
    experience: '',
    isAgency: false,
    isDEICertified: false,
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
  const [image, setImage] = useState('');

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      input: {
        display: 'none',
      },
      large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
    }),
  );
  const classes = useStyles();

  const {
    isFormSubmitted,
    captchaValue,
    isButtonSubmit,
    isSendMailError,
    avatar,
  } = signUpState;

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
  }, [action, props, signUpState]);

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

    if (action === 'freelancer') {
      const { name, phone, email, isp, skills, experience, security } =
        formData;
      const { isAgency, isDEICertified } = signUpState;
      const data = new FormData();
      data.append('name', name);
      data.append('email', email);
      data.append('phone', phone);
      data.append('profile_image', image);
      data.append('is_agency', isAgency.toString());
      data.append('is_dei_certified', isDEICertified.toString());
      data.append('isp', isp);
      data.append('skills', skills);
      data.append('experience', experience);
      data.append('security', security);
      if (!image) {
        data.append('avatar', avatar);
      }
      props.registerUser(data, action);
      console.log('dataaaaaaaa', data);
    } else {
      if (password !== cpassword && !action) {
        return;
      } else if (!captchaValue) {
        return;
      } else {
        props.registerUser(formData, action);
      }
    }
  };

  const handleOnChange = (event) => {
    const newImage = event.target?.files?.[0];
    if (newImage) {
      // setImage(URL.createObjectURL(newImage));
      setImage(newImage);
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
  const { isDEICertified } = signUpState;

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
              // eslint-disable-next-line array-callback-return
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
                } else if (field.type === 'image') {
                  return (
                    <div
                      className="form-group profile-image-container"
                      key={field.name}
                    >
                      <label htmlFor={'profile_image'}>
                        Update Profile Image
                      </label>
                      <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={handleOnChange}
                      />
                      <label htmlFor="contained-button-file">
                        <Button
                          variant="contained"
                          color="primary"
                          component="span"
                        >
                          Upload
                        </Button>
                      </label>{' '}
                      {image && image['name'] ? (
                        <span className="image-name"> {image['name']}</span>
                      ) : (
                        ''
                      )}
                      <input
                        accept="image/*"
                        className={classes.input}
                        id="icon-button-file"
                        type="file"
                      />
                      <label htmlFor="icon-button-file">
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          {avatar ? (
                            <Avatar
                              src={`${constants.NODE_ENDPOINT}/images/${avatar}`}
                              className={classes.large}
                            />
                          ) : (
                            <Avatar
                              src={`broken-image.jpg`}
                              className={classes.large}
                            />
                          )}
                        </IconButton>
                      </label>
                    </div>
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
                      {field.name === 'isDEICertified' ? (
                        <span>
                          <a
                            href="https://digitalenterpriseinitiative.com/startup-kit"
                            target={'_blank'}
                            rel="noreferrer"
                          >
                            Learn More Click Here
                          </a>
                        </span>
                      ) : (
                        ''
                      )}
                      <div className="radio-options">
                        <span
                          className={
                            signUpState[field.name] ? 'green-bg' : 'white-bg'
                          }
                          onClick={() => {
                            setSignUpState((prevState) => {
                              return {
                                ...prevState,
                                [field.name]: true,
                              };
                            });
                          }}
                        >
                          YES
                        </span>
                        <span
                          className={
                            !signUpState[field.name] ? 'red-bg' : 'white-bg'
                          }
                          onClick={() => {
                            setSignUpState((prevState) => {
                              return {
                                ...prevState,
                                [field.name]: false,
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
            action === 'nwo' ||
            action === 'dao' ||
            action === 'dao-consultation' ||
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
