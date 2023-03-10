import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';

export default function SubcategoryDropdown({subcategories, newReport, setNewReport, category}) {
  return (
    <Paper
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <Autocomplete
          fullWidth
          required
          options={category ? subcategories.filter(subcategory => subcategory.category === category): subcategories}
          getOptionLabel={option => option.name}
          renderInput={(params) => <TextField {...params} label="Choose Issue" />}
          onChange={(e, newValue) => {
            setNewReport({...newReport, 
              category_id: newValue.category,
              category: newValue.categoryName,
              subcategory_id: newValue.id})}}
        />
      </Paper>
  );
}
