/* eslint-disable array-callback-return */
import React, { ReactElement, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';

import TextBox from '../common/form-element/text-box';
import '../get-quote/get-quote.component.scss';
import './profile-form.component.scss';
import { getUser, updateUser } from '../../actions/user';
import SnackBarComponent from '../common/snackbar/snackbar.component';
import { constants, messages, siteKey } from '../../constants';
import ErrorMessageContainer from '../container/error-message.container';
import LoaderComponent from '../common/loader/loader.component';
import { useHistory } from 'react-router-dom';
import info_icon from '../../assets/images/info_icon.png';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Avatar, createStyles, makeStyles, Theme } from '@material-ui/core';
import SelectBox from '../common/form-element/select-box';

interface IntitialState {
  captchaValue: string;
  isFormSubmitted: boolean;
  isButtonSubmit: boolean;
  isProfileSuccess: boolean;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  userId: string;
  marketingOptin: boolean;
  citizenshipOptin: boolean;
  nwoOptin: boolean;
  activeEgoOptin: boolean;
  wipOptin: boolean;
  climatePushOptin: boolean;
  newsletterOptin: boolean;
  emailMarketingOptin: boolean;
  lastname: string;
  companyName: string;
  position: string;
  websiteUrl: string;
}

interface ProfileFormComponentProps {
  formFields: any;
  error?: string;
  isLoading?: boolean;
  isUpdateSuccess?: boolean;
  updateUser?: (user: any, id: string) => void;
}

const ProfileFormComponent: React.FC<ProfileFormComponentProps> = (
  props: ProfileFormComponentProps,
): ReactElement => {
  const INITIAL_STATE: IntitialState = {
    captchaValue: '',
    isFormSubmitted: false,
    isButtonSubmit: false,
    isProfileSuccess: false,
    name: '',
    email: '',
    phone: '',
    avatar: '',
    userId: '',
    lastname: '',
    companyName: '',
    position: '',
    websiteUrl: '',
    marketingOptin: false,
    citizenshipOptin: false,
    nwoOptin: false,
    activeEgoOptin: false,
    wipOptin: false,
    climatePushOptin: false,
    newsletterOptin: false,
    emailMarketingOptin: false,
  };
  const { formFields, isLoading, error, isUpdateSuccess } = props;
  const { register, errors, handleSubmit, control } = useForm();
  const [profileState, setProfileState] = useState(INITIAL_STATE);
  const [, setCaptcha] = useState({});
  const [image, setImage] = useState('');
  const history = useHistory();
  const handleOnChange = (event) => {
    const newImage = event.target?.files?.[0];
    if (newImage) {
      // setImage(URL.createObjectURL(newImage));
      setImage(newImage);
    }
  };

  const { isFormSubmitted, captchaValue, isButtonSubmit, avatar } =
    profileState;

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

  // If update user fails, reset isFormSubmitted and hide loader
  useEffect(() => {
    const { error } = props;
    // If user is logged
    const userData = localStorage.getItem('userData');
    if (!userData) {
      history.push('not-found');
    } else if (userData) {
      const {
        email,
        name,
        phone,
        avatar,
        userId,
        marketingOptin,
        citizenshipOptin,
        nwoOptin,
        activeEgoOptin,
        wipOptin,
        climatePushOptin,
        newsletterOptin,
        emailMarketingOptin,
        lastname,
        companyName,
        position,
        websiteUrl,
      } = JSON.parse(userData);
      setImage('');
      setProfileState((prevState) => {
        return {
          ...prevState,
          email,
          name,
          phone,
          avatar,
          userId,
          marketingOptin,
          citizenshipOptin,
          nwoOptin,
          activeEgoOptin,
          wipOptin,
          climatePushOptin,
          newsletterOptin,
          emailMarketingOptin,
          lastname,
          companyName,
          position,
          websiteUrl,
        };
      });
    }

    if (error) {
      setProfileState((prevState) => {
        return {
          ...prevState,
          isFormSubmitted: false,
        };
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  // Set captcha reference
  const setCaptchaRef = (ref) => {
    if (ref) {
      setCaptcha(ref);
    }
  };

  // handle edit account form onSubmit
  const onSubmit = (formData: any) => {
    const {
      userId,
      avatar,
      name,
      email,
      phone,
      captchaValue,
      marketingOptin,
      citizenshipOptin,
      nwoOptin,
      activeEgoOptin,
      wipOptin,
      climatePushOptin,
      newsletterOptin,
      emailMarketingOptin,
      lastname,
      companyName,
      position,
      websiteUrl,
    } = profileState;
    formData.isFormSubmitted = true;
    formData.isButtonSubmit = false;

    setProfileState((prevState) => {
      return {
        ...prevState,
        ...formData,
      };
    });

    if (!captchaValue) {
      return;
    } else {
      const data = new FormData();
      data.append('name', name);
      data.append('email', email);
      data.append('phone', phone);
      data.append('profile_image', image);
      data.append('marketing_optin', marketingOptin.toString());
      data.append('citizenship_optin', citizenshipOptin.toString());
      data.append('nwo_optin', nwoOptin.toString());
      data.append('active_ego_optin', activeEgoOptin.toString());
      data.append('wip_optin', wipOptin.toString());
      data.append('climate_push_optin', climatePushOptin.toString());
      data.append('newsletter_optin', newsletterOptin.toString());
      data.append('email_marketing_optin', emailMarketingOptin.toString());
      data.append('lastname', lastname);
      data.append('company_name', companyName);
      data.append('position', position);
      data.append('website_url', websiteUrl);

      if (!image) {
        data.append('avatar', avatar);
      }
      props.updateUser(data, userId);
    }
  };

  // handle button click for Profile form submit error
  const onError = () => {
    setProfileState((prevState) => {
      return {
        ...prevState,
        isButtonSubmit: true,
      };
    });
  };

  const onChangeHandler = ($event: React.FormEvent<EventTarget>) => {
    const target = $event.target as HTMLInputElement;
    const value = target.value;
    if (target && target.name) {
      setProfileState((prevState) => {
        return {
          ...prevState,
          [target.name]: value,
        };
      });
    }
  };
  const errorKeys = Object.keys(errors);

  return (
    <section className="profile-form-section">
      {isUpdateSuccess && (
        <SnackBarComponent
          isOpen={true}
          isError={false}
          message={error ? error : messages.profile_update}
        />
      )}
      {error && (
        <SnackBarComponent
          isOpen={true}
          isError={true}
          message={error ? error : messages.profile_error}
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
          <h4>Personal Information</h4>
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
                      value={profileState[field.name]}
                      onChangeHandler={onChangeHandler}
                      tooltip={field.tooltip}
                    />
                  );
                }
              })}
          </div>

          <h4>Company Information</h4>
          <div className="company-information">
            {formFields &&
              formFields.length &&
              formFields.map((field) => {
                if (field.section === 'company' && field.type === 'text') {
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
                      value={profileState[field.name]}
                      onChangeHandler={onChangeHandler}
                      tooltip={field.tooltip}
                    />
                  );
                } else if (
                  field.section === 'company' &&
                  field.type === 'select'
                ) {
                  return (
                    <SelectBox
                      value={profileState[field.name]}
                      key={field.name}
                      className={classes}
                      variant={'outlined'}
                      handleSelect={onChangeHandler}
                      name={field.name}
                      id={field.name}
                      label_name={field.label}
                      options={field.options}
                      placeholder={field.placeholder}
                      control={control}
                      required={field.required}
                      error={!!errors[profileState[field.name]]}
                    ></SelectBox>
                  );
                }
              })}
          </div>
          <div className="form-group profile-image-container">
            <label htmlFor={'profile_image'}>Update Profile Image</label>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleOnChange}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
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
                  <Avatar src={`broken-image.jpg`} className={classes.large} />
                )}
              </IconButton>
            </label>
          </div>

          <div className="form-group recaptcha-container mobile-hide">
            <ReCAPTCHA
              ref={(r) => setCaptchaRef(r)}
              sitekey={siteKey}
              onChange={(e) => {
                const captchaValue = e ? e : '';
                setProfileState((prevState) => {
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

          <div className="personal-information">
            {formFields &&
              formFields.length &&
              formFields.map((field) => {
                if (field.type === 'radio') {
                  return (
                    <div className="form-group radio-section" key={field.id}>
                      {field.tooltip ? (
                        <div className="info-icon-container">
                          <span> {field.label} </span>
                          <div
                            className="tooltip-icon"
                            aria-label={field.infoText}
                            data-balloon-pos="right"
                            data-balloon-length="large"
                          >
                            <img
                              src={info_icon}
                              width={20}
                              height={18}
                              alt="Info Icon"
                            />
                          </div>
                        </div>
                      ) : (
                        field.label
                      )}
                      <div className="radio-options">
                        <span
                          className={
                            profileState[field.name] === true
                              ? 'green-bg'
                              : 'white-bg'
                          }
                          onClick={() => {
                            setProfileState((prevState) => {
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
                            profileState[field.name] === false
                              ? 'red-bg'
                              : 'white-bg'
                          }
                          onClick={() => {
                            setProfileState((prevState) => {
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
        </form>
      </div>
      <div className="profile-button-container">
        <div className="form-group recaptcha-container desktop-hide">
          <ReCAPTCHA
            ref={(r) => setCaptchaRef(r)}
            sitekey={siteKey}
            onChange={(e) => {
              const captchaValue = e ? e : '';
              setProfileState((prevState) => {
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
            className={`btn-basic`}
            onClick={handleSubmit(onSubmit, onError)}
          >
            UPDATE
          </button>

          {errors && (
            <ErrorMessageContainer
              errors={errors}
              isFormSubmitted={isFormSubmitted}
              errorKeys={errorKeys}
              captchaValue={captchaValue}
              isButtonSubmit={isButtonSubmit}
              state={profileState}
            />
          )}

          {error && !isFormSubmitted ? (
            <p className="error_message custom_msg">
              Error in updating account detail
            </p>
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
    updateUser: (user, id) => dispatch(updateUser(user, id)),
    getUser: (userId) => dispatch(getUser(userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileFormComponent);
