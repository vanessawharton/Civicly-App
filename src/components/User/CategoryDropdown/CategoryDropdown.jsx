import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CategoryDropdown({categories}) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={categories}
      sx={{ width: '90%' }}
      getOptionLabel={option => option.name}
      renderInput={(params) => <TextField {...params} label="Category" />}
    />
  );
}
