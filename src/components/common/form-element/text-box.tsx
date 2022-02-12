/* eslint-disable react/prop-types */
import React, { ReactElement } from 'react';

import { quoteValidationErrorMessages } from '../../../constants';
import { filterErrorMessage } from '../../../utils';

const TextBox: any = ({
  type,
  register,
  name,
  label_name,
  placeholder,
  maxlength,
  pattern,
  min,
  onChangeHandler,
  info_icon,
  required,
  value,
}): ReactElement => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label_name}</label>
      {type === 'number' ? (
        <input
          type={'number'}
          name={name}
          id={name}
          value={value}
          autoComplete="false"
          placeholder={placeholder}
          maxLength={maxlength ? maxlength : ''}
          onChange={onChangeHandler}
          min={min ? min : ''}
          ref={register({
            required: filterErrorMessage(
              quoteValidationErrorMessages[name],
              'required',
            ),

            min: min
              ? {
                  value: min,
                  message: filterErrorMessage(
                    quoteValidationErrorMessages[name],
                    'min',
                  ),
                }
              : '',
          })}
        />
      ) : (
        <input
          type={type === 'password' ? 'password' : 'text'}
          name={name}
          id={name}
          autoComplete="false"
          placeholder={placeholder}
          value={value}
          maxLength={maxlength ? maxlength : ''}
          onChange={onChangeHandler}
          ref={register({
            required: required
              ? filterErrorMessage(
                  quoteValidationErrorMessages[name],
                  'required',
                )
              : false,
            pattern: pattern
              ? {
                  value: pattern,
                  message: filterErrorMessage(
                    quoteValidationErrorMessages[name],
                    'pattern',
                  ),
                }
              : '',
            min: min
              ? {
                  value: min,
                  message: filterErrorMessage(
                    quoteValidationErrorMessages[name],
                    'min',
                  ),
                }
              : '',
          })}
        />
      )}

      {info_icon && (
        <div
          className="info-icon"
          aria-label="EMPLOYEES/END USERS"
          data-balloon-pos="up"
        >
          <img src={info_icon} width={20} height={20} alt="Info Icon" />
        </div>
      )}
      {/* {prefix && <span className="info-icon">{prefix}</span>} */}
    </div>
  );
};

export default TextBox;
