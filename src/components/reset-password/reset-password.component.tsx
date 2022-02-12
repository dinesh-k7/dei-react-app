import React, { Fragment, ReactElement, useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';

import TextBox from '../common/form-element/text-box';
import '../get-quote/get-quote.component.scss';
import './reset-password.component.scss';
import { messages } from '../../constants';
import { resetPassword } from '../../actions/user';
import ErrorMessageContainer from '../container/error-message.container';
import LoaderComponent from '../common/loader/loader.component';
import SnackBarComponent from '../common/snackbar/snackbar.component';
import { useHistory } from 'react-router-dom';
import { getQueryStringParams } from '../../utils';

interface IntitialState {
  isFormSubmitted: boolean;
  isButtonSubmit: boolean;
  isResetPwdSuccess: boolean;
  password: string;
  cpassword: string;
}

interface ResetPasswordComponentProps {
  formFields: any;
  isSuccess?: boolean;
  error?: string;
  isLoading?: boolean;
  isPasswordMinAge?: boolean;
  resetPassword?: (user: any) => void;
}

const ResetPasswordComponent: React.FC<ResetPasswordComponentProps> = (
  props: ResetPasswordComponentProps,
): ReactElement => {
  let INITIAL_STATE: IntitialState = {
    isFormSubmitted: false,
    isButtonSubmit: false,
    isResetPwdSuccess: false,
    password: '',
    cpassword: '',
  };
  const { formFields, isSuccess, error, isLoading, isPasswordMinAge } = props;
  const stateData = {};
  const history = useHistory();
  let id, token;
  if (history.location.search) {
    const params = getQueryStringParams(history.location.search);
    id = params.id;
    token = params.token;
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
  const [state, setState] = useState(INITIAL_STATE);

  const { isFormSubmitted, isButtonSubmit, password, cpassword } = state;

  // handle reset form onSubmit
  const onSubmit = (quoteData: any) => {
    quoteData.isFormSubmitted = true;
    quoteData.isButtonSubmit = false;
    const { email, password, cpassword } = quoteData;

    setState((prevState) => {
      return {
        ...prevState,
        ...quoteData,
      };
    });

    // If password and confirm password doesn't match, then return
    if (password !== cpassword) {
      return;
    }

    const user = {
      email,
      password,
      token,
    };

    props.resetPassword(user);
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
    <section className="reset-form-section">
      {error && (
        <SnackBarComponent
          isOpen={true}
          isError={true}
          message={error ? error : messages.reset_error}
        />
      )}
      <div className="form-container">
        {!isSuccess ? (
          <Fragment>
            <h1>Reset Password</h1>
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
                          type={field.type}
                        />
                      );
                    } else if (token && id && field.type === 'password') {
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
                  Submit
                </button>
                <span>
                  Not Registered yet? <a href="sign-up">Click here</a> to
                  Sign-up
                </span>

                {/* {isLoginFailure ? (
              <p className="error_message custom_msg">
                Error in Sign In process
              </p>
            ) : (
              ''
            )} */}

                {isFormSubmitted && isLoading && password === cpassword ? (
                  <LoaderComponent />
                ) : (
                  ''
                )}
              </div>
              <div className="error-msg-container">
                {errors && (
                  <ErrorMessageContainer
                    errors={errors}
                    isFormSubmitted={isFormSubmitted}
                    errorKeys={errorKeys}
                    isButtonSubmit={isButtonSubmit}
                    fromPage={'reset'}
                    state={state}
                  />
                )}
              </div>
            </form>
          </Fragment>
        ) : (
          ''
        )}
        {isSuccess && !token && !isPasswordMinAge ? (
          <div className="reset-success">
            Password reset link sent to your email account.
          </div>
        ) : (
          ''
        )}

        {isSuccess && token ? (
          <div className="reset-success">
            Password has been reset successfully. Please click here to{' '}
            <a href="sign-in"> Sign In </a>
          </div>
        ) : (
          ''
        )}

        {isSuccess && isPasswordMinAge ? (
          <div className="reset-success">
            Password can be reset after two days.Please click here to
            <a href="sign-in"> Sign In </a>
          </div>
        ) : (
          ''
        )}
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
    resetPassword: (user) => dispatch(resetPassword(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPasswordComponent);
