/* eslint-disable react/prop-types */
import React, { ReactElement } from 'react';

import { quoteValidationErrorMessages } from '../../constants';
import { filterErrorMessage } from '../../utils';

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
}): ReactElement => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label_name}</label>
      <input
        type={type ? type : 'text'}
        name={name}
        id={name}
        placeholder={placeholder}
        maxLength={maxlength ? maxlength : ''}
        onChange={info_icon && onChangeHandler}
        ref={register({
          required: filterErrorMessage(
            quoteValidationErrorMessages[name],
            'required',
          ),
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
      {info_icon && (
        <div
          className="info-icon"
          aria-label="EMPLOYEES/END USERS"
          data-balloon-pos="up"
        >
          <img src={info_icon} width={20} height={20} alt="Info Icon" />
        </div>
      )}
    </div>
  );
};

export default TextBox;
