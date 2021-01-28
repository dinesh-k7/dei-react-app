/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { apparel } from '../../constants/industry-option';

const ComboBox = (): ReactElement => {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={apparel}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Combo box" variant="outlined" />
      )}
    />
  );
};

export default ComboBox;
