/* eslint-disable react/prop-types */
import React, { Fragment, ReactElement } from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  ListSubheader,
} from '@material-ui/core';
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
  grouping,
}): ReactElement => {
  const types: string[] = [];
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
              {grouping &&
                options &&
                options.length &&
                options.map((option, idx) => {
                  types.push(option['type']);
                  return [
                    option.id === 1 || option.id === 7 ? (
                      <ListSubheader key={idx}>{option.type}</ListSubheader>
                    ) : (
                      ''
                    ),
                    <MenuItem key={idx} value={option.name}>
                      {option.name}
                    </MenuItem>,
                  ];
                })}
              {!grouping &&
                options &&
                options.length &&
                options.map((option, idx) => {
                  return (
                    <MenuItem key={idx} value={option.name}>
                      {option.name}
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
