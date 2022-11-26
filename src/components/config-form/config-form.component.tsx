import React, { ReactElement, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { messages } from '../../constants';
import TextBox from '../common/form-element/text-box';
import '../get-quote/get-quote.component.scss';
import './config-form.component.scss';
import SnackBarComponent from '../common/snackbar/snackbar.component';
import ErrorMessageContainer from '../container/error-message.container';
import LoaderComponent from '../common/loader/loader.component';
import { getConfigDetails, updateConfigDetails } from '../../actions/config';
import { camelToSnakeCase } from '../../utils';
import { ISettings } from '../../interfaces/config-state.model';
import { defaultSettings } from '../../constants/form-data/config-form';

interface IntitialState {
  isFormSubmitted: boolean;
  isButtonSubmit: boolean;
}

interface ConfigFormComponentProps {
  formFields: any;
  error?: string;
  isLoading?: boolean;
  settings?: ISettings[];
  getConfigDetails?: () => void;
  updateConfigDetails?: (settings: any) => void;
}

const ConfigFormComponent: React.FC<ConfigFormComponentProps> = (
  props: ConfigFormComponentProps,
): ReactElement => {
  let INITIAL_STATE: IntitialState = {
    isFormSubmitted: false,
    isButtonSubmit: false,
  };
  const { formFields, settings, isLoading } = props;
  const stateData = {};

  formFields &&
    formFields.length &&
    formFields.forEach((field) => {
      const filtered =
        settings &&
        settings.length &&
        settings.find((st) => st && st.name === field.name);
      if (field.type === 'radio') {
        stateData[field.name] = filtered ? filtered.value : false;
      } else if (field.type === 'number') {
        stateData[field.name] = filtered ? filtered.value : field.min;
      }
    });

  INITIAL_STATE = { ...stateData, ...INITIAL_STATE };

  const { register, errors, handleSubmit } = useForm();
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    props.getConfigDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // handle form onSubmit
  const onSubmit = (quoteData: any) => {
    quoteData.isFormSubmitted = true;
    quoteData.isButtonSubmit = false;
    const data = settings && settings.length ? settings : defaultSettings;
    if (data && data.length) {
      const filterSettings = data.filter((st) => st.name !== 'enableSandbox');
      const updateSettings = filterSettings.map((st) => {
        const { id, name, type } = st;
        return {
          id,
          name: camelToSnakeCase(name),
          value: type === 'boolean' ? state[name].toString() : state[name],
          type,
        };
      });

      props.updateConfigDetails({ settings: updateSettings });
    }

    setState((prevState) => {
      return {
        ...prevState,
        ...quoteData,
      };
    });
  };

  const onChangeHandler = ($event: React.FormEvent<EventTarget>) => {
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

  const errorKeys = Object.keys(errors);
  const { isFormSubmitted, isButtonSubmit } = state;
  return (
    <section className="config-form-section">
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
                if (field.type === 'radio') {
                  return (
                    <div className="form-group radio-section" key={field.id}>
                      {field.label}
                      <div className="radio-options">
                        <span
                          className={
                            state[field.name] === true ? 'green-bg' : 'white-bg'
                          }
                          onClick={() => {
                            setState((prevState) => {
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
                            state[field.name] === false ? 'red-bg' : 'white-bg'
                          }
                          onClick={() => {
                            setState((prevState) => {
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
                } else if (field.type === 'number') {
                  return (
                    <TextBox
                      key={field.id}
                      register={register}
                      name={field.name}
                      placeholder={field.placeholder}
                      label_name={field.label}
                      required={field.required}
                      pattern={field.pattern}
                      type={field.type}
                      value={state[field.name]}
                      min={field.min}
                      onChangeHandler={onChangeHandler}
                    />
                  );
                }
              })}
          </div>
        </form>
      </div>
      <div className="button-container">
        <button
          type="button"
          className={`btn-basic`}
          onClick={handleSubmit(onSubmit, onError)}
        >
          Submit
        </button>

        {errors && (
          <ErrorMessageContainer
            errors={errors}
            isFormSubmitted={isFormSubmitted}
            errorKeys={errorKeys}
            isButtonSubmit={isButtonSubmit}
            state={setState}
            fromPage={`config`}
          />
        )}

        {isLoading ? <LoaderComponent /> : ''}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { configReducer } = state;
  return { ...configReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getConfigDetails: () => dispatch(getConfigDetails()),
    updateConfigDetails: (settings) => dispatch(updateConfigDetails(settings)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfigFormComponent);
