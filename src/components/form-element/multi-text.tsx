/* eslint-disable react/prop-types */
import React, { ReactElement } from 'react';

import { quoteValidationErrorMessages } from '../../constants';
import { filterErrorMessage } from '../../utils';

const MultiText: any = ({
  type,
  register,
  name,
  label_name,
  placeholder,
  maxlength,
  class_name,
}): ReactElement => {
  return (
    <div className={`form-group ${class_name}`}>
      <label htmlFor={name}>{label_name}</label>
      <textarea
        id={name}
        name={name}
        rows={4}
        cols={50}
        placeholder={placeholder}
        maxLength={maxlength}
        ref={register({
          required: filterErrorMessage(
            quoteValidationErrorMessages[name],
            'required',
          ),
        })}
      ></textarea>
    </div>
  );
};

export default MultiText;
