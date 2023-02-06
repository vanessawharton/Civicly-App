import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CategoryDropdown({categories, newReport, setNewReport}) {



  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      fullWidth
      options={categories}
      getOptionLabel={option => option.name}
      renderInput={(params) => <TextField {...params} label="Category" />}
      onChange={(e, newValue) => {
        setNewReport({...newReport, 
          category_id: newValue.category,
          category: newValue.categoryName,
          subcategory_id: newValue.id})}}
      />
  );
}
