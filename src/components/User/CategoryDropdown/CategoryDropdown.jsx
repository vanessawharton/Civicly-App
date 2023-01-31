import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CategoryDropdown({categories}) {
  return (
    <Autocomplete
      disablePortal
      options={categories}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Categories" />}
    />
  );
}
