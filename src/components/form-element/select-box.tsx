/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Select, MenuItem, FormControl } from '@material-ui/core';

import { constants } from '../../constants';

const SelectBox = ({
  position,
  className,
  variant,
  name,
  id,
  handleSelect,
}) => {
  return (
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
          e.g. Project Manager
        </MenuItem>
        {constants.POSITION &&
          constants.POSITION.length &&
          constants.POSITION.map((role, idx) => {
            return (
              <MenuItem key={idx} value={role}>
                {role}
              </MenuItem>
            );
          })}
      </Select>
    </FormControl>
  );
};

export default SelectBox;
