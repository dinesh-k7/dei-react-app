/* eslint-disable react/prop-types */
import React, { ReactElement } from 'react';
import { Select, MenuItem, FormControl } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { filterErrorMessage } from '../../utils';
import { quoteValidationErrorMessages } from '../../constants';

const SelectBox: any = ({
  value,
  className,
  variant,
  name,
  id,
  handleSelect,
  label_name,
  options,
  placeholder,
  control,
}): ReactElement => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label_name}</label>
      <FormControl variant={variant} className={className.root}>
        <Controller
          as={
            <Select
              id={id}
              displayEmpty
              MenuProps={{
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                getContentAnchorEl: null,
              }}
            >
              <MenuItem value="" disabled className={className.placeholder}>
                {placeholder}
              </MenuItem>
              {options &&
                options.length &&
                options.map((option, idx) => {
                  return (
                    <MenuItem key={idx} value={option}>
                      {option}
                    </MenuItem>
                  );
                })}
            </Select>
          }
          name={name}
          control={control}
          defaultValue={value}
          onChange={handleSelect}
          rules={{
            required: filterErrorMessage(
              quoteValidationErrorMessages[name],
              'required',
            ),
          }}
        />
      </FormControl>
    </div>
  );
};

export default SelectBox;
