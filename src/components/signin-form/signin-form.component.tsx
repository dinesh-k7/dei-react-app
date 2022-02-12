import React, { ReactElement, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';

import TextBox from '../common/form-element/text-box';
import '../get-quote/get-quote.component.scss';
import './signin-form.component.scss';
import { messages } from '../../constants';
import { userLogin } from '../../actions/user';
import ErrorMessageContainer from '../container/error-message.container';
import LoaderComponent from '../common/loader/loader.component';
import SnackBarComponent from '../common/snackbar/snackbar.component';
import { useHistory, useLocation } from 'react-router-dom';
import { dateDiff } from '../../utils';
//import nwoLogo from '../../assets/images/nwo_monochrome_triangle_vector.svg';
import badgeLogo from '../../assets/images/badge_star_vector.svg';
import coloredLogo from '../../assets/images/logo_colored_square.svg';
import quolliLogo from '../../assets/images/quolli_logo.svg';
import wimpLogo from '../../assets/images/wimp_logo.svg';

interface IntitialState {
  isFormSubmitted: boolean;
  isButtonSubmit: boolean;
  isSignInSuccess: boolean;
}

interface SignUpFormComponentProps {
  formFields: any;
  isLoading?: any;
  error?: any;
  count?: number;
  dateTime?: Date;
  isPasswordExpired?: boolean;
  userLogin?: (user: any) => void;
  isLoginFailure?: boolean;
}

const SignUpFormComponent: React.FC<SignUpFormComponentProps> = (
  props: SignUpFormComponentProps,
): ReactElement => {
  const search = useLocation().search;
  const isActivate = new URLSearchParams(search).get('activation');
  let INITIAL_STATE: IntitialState = {
    isFormSubmitted: false,
    isButtonSubmit: false,
    isSignInSuccess: false,
  };
  const { formFields, isLoading, error, count, dateTime, isPasswordExpired } =
    props;

  const history = useHistory();
  const stateData = {};

  // If login is success, re-direct to landing page
  const userData = localStorage.getItem('userData');
  if (userData) {
    history.push('/');
  }
  //Set form field in state
  formFields &&
    formFields.length &&
    formFields.forEach((field) => {
      if (field.type === 'text' || field.type === 'password') {
        stateData[field.name] = '';
      }
    });

  INITIAL_STATE = { ...stateData, ...INITIAL_STATE };

  const { register, errors, handleSubmit } = useForm();
  const [signInState, setSignInState] = useState(INITIAL_STATE);

  const { isFormSubmitted, isButtonSubmit } = signInState;

  // handle Sign Up form onSubmit
  const onSubmit = (quoteData: any) => {
    quoteData.isFormSubmitted = true;
    quoteData.isButtonSubmit = false;
    const { email, password } = quoteData;

    setSignInState((prevState) => {
      return {
        ...prevState,
        ...quoteData,
      };
    });

    const user = {
      email,
      password,
    };

    //Dispatch userLogin event
    props.userLogin(user);
  };

  // If signin user fails, reset isFormSubmitted and hide loader
  useEffect(() => {
    const { isLoginFailure } = props;

    if (isLoginFailure) {
      setSignInState((prevState) => {
        return {
          ...prevState,
          isFormSubmitted: false,
        };
      });
    }
  }, [props]);

  // handle button click for signup form submit error
  const onError = () => {
    setSignInState((prevState) => {
      return {
        ...prevState,
        isButtonSubmit: true,
      };
    });
  };
  const errorKeys = Object.keys(errors);
  const currentDate = new Date().toLocaleDateString();
  const retryDate = new Date(dateTime).toLocaleDateString();
  const diff = dateDiff(new Date(currentDate), new Date(retryDate));

  return (
    <section className="signin-form-section">
      {error && (
        <SnackBarComponent
          isOpen={true}
          isError={true}
          message={error ? error : messages.signin_error}
        />
      )}
      {Boolean(isActivate) && (
        <SnackBarComponent
          isOpen={true}
          isError={false}
          message={error ? error : messages.activation_success}
        />
      )}
      {(count <= 10 || diff >= 2) && !isPasswordExpired ? (
        <div className="form-container">
          <div className="nwo-logo">
            <img src={badgeLogo} alt={`Badge Logo`} height="90" />
          </div>
          <h1>Sign In</h1>
          <form autoComplete="off">
            <div className="personal-information">
              {formFields &&
                formFields.length &&
                formFields.map((field) => {
                  if (field.type === 'text' || field.type === 'password') {
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
                      />
                    );
                  }
                })}
            </div>
            <div className="button-container">
              <button
                type="button"
                className={`btn-basic`}
                onClick={handleSubmit(onSubmit, onError)}
              >
                Sign In
              </button>
              <br />
              <span>
                Not Registered yet? <a href="sign-up">Click here</a> to Sign-up
              </span>
              <span>
                <a href="reset-password">Reset Password</a>
              </span>

              {errors && (
                <ErrorMessageContainer
                  errors={errors}
                  isFormSubmitted={isFormSubmitted}
                  errorKeys={errorKeys}
                  isButtonSubmit={isButtonSubmit}
                  fromPage={'signIn'}
                />
              )}

              {/* {isLoginFailure ? (
              <p className="error_message custom_msg">
                Error in Sign In process
              </p>
            ) : (
              ''
            )} */}

              {isLoading ? <LoaderComponent /> : ''}
            </div>
          </form>
          <div className="logo-container">
            <a
              href="https://quolii.com/"
              className="quolii-logo"
              target="_blank"
              rel="noreferrer"
            >
              <img src={quolliLogo} alt={`Quolli Logo`} height="40" />
            </a>
            <a
              href="https://theclimatepush.com"
              target="_blank"
              rel="noreferrer"
              className="cp-logo"
            >
              <img src={coloredLogo} alt={`Colored Logo`} height="50" />
            </a>
            <a
              href="https://worldismyplayground.org"
              target="_blank"
              rel="noreferrer"
              className="wimp-logo"
            >
              <img src={wimpLogo} alt={`WIMP Logo`} height="40" />
            </a>
          </div>
        </div>
      ) : (
        <>
          {isPasswordExpired ? (
            <span>
              Your password has been expired,{' '}
              <a href="reset-password">Click here to reset it</a> .
            </span>
          ) : (
            <span>
              Your account has been locked out, Please retry after 48 hours.
            </span>
          )}
        </>
      )}{' '}
    </section>
  );
};

const mapStateToProps = (state) => {
  const { userReducer } = state;
  return { ...userReducer, ...userReducer.retry };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (user) => dispatch(userLogin(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpFormComponent);
