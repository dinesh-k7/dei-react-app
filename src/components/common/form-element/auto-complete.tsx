/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { ReactElement } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { industries } from '../../../constants/industry-option';
import { FormControl, makeStyles } from '@material-ui/core';
import { quoteValidationErrorMessages } from '../../../constants';
import { filterErrorMessage } from '../../../utils';
import { Controller } from 'react-hook-form';

const useStyles = makeStyles(() => ({
  inputRoot: {},
  option: {
    fontFamily: 'OpenSansRegular',
    fontSize: '12px',
    fontWeight: 400,
    color: '#2c3e50 !important',
  },
}));

const getOpObj = (option) => {
  if (!option.id) option = industries.find((op) => op.id === option.id);
  return option;
};

const ComboBox: any = ({
  className,
  variant,
  name,
  label_name,
  placeholder,
  control,
}): ReactElement => {
  const classes = useStyles();
  return (
    <div className={`form-group ${className}`}>
      <label htmlFor={name}>{label_name}</label>
      <FormControl variant={variant} className={className.root}>
        <Controller
          as={({ onChange, value }) => (
            <Autocomplete
              id="industry-combo-box"
              options={industries}
              getOptionLabel={(option) => option.name}
              //  groupBy={(option) => String(option.group)}
              classes={{
                option: classes.option,
              }}
              size="small"
              onChange={(_, data) => onChange(data)}
              disableClearable
              style={{ paddingRight: '8px', height: 60, border: 'none' }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder={placeholder}
                  variant="outlined"
                  value={value}
                />
              )}
            />
          )}
          name={name}
          onChange={([, obj]) => getOpObj(obj).id}
          control={control}
          defaultValue={null}
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

export default ComboBox;
