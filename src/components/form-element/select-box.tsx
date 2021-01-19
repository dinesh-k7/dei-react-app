/* eslint-disable react/prop-types */
import React, { ReactElement } from 'react';
import { Select, MenuItem, FormControl } from '@material-ui/core';

const SelectBox: any = ({
  position,
  className,
  variant,
  name,
  id,
  handleSelect,
  label_name,
  options,
  placeholder,
}): ReactElement => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label_name}</label>
      <FormControl variant={variant} className={className.root}>
        <Select
          value={position}
          id={id}
          displayEmpty
          name={name}
          onChange={handleSelect}
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
      </FormControl>
    </div>
  );
};

export default SelectBox;
