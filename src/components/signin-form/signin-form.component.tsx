import React, { ReactElement, useState } from 'react';
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
import { useHistory } from 'react-router-dom';

interface IntitialState {
  isFormSubmitted: boolean;
  isButtonSubmit: boolean;
  isSignInSuccess: boolean;
}

const SignUpFormComponent: React.FC<any> = (props: any): ReactElement => {
  let INITIAL_STATE: IntitialState = {
    isFormSubmitted: false,
    isButtonSubmit: false,
    isSignInSuccess: false,
  };
  const { formFields, isLoginSuccess, isLoginFailure } = props;
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

  const { isFormSubmitted, isButtonSubmit, isSignInSuccess } = signInState;

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
  return (
    <section className="signin-form-section">
      {isLoginFailure && (
        <SnackBarComponent
          isOpen={true}
          isError={true}
          message={messages.signin_error}
        />
      )}
      <div className="form-container">
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

            {isFormSubmitted && !isLoginSuccess && !isLoginFailure ? (
              <LoaderComponent />
            ) : (
              ''
            )}
          </div>
        </form>
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
    userLogin: (user) => dispatch(userLogin(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpFormComponent);
