import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import UploadForm from './UploadForm';
import SubcategoryDropdown from './SubcategoryDropdown';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';


export default function IssueFormView({ newReport, setNewReport, anon, setAnon, subcategories, category }) {

    const handleToggle = () => {
        setAnon(!anon)
    }

    return(
        <Container component="main" maxWidth="xs">
            <Box>
                <Typography sx={{mb: 1, mt: 1}} variant="h5">{subcategories.filter(subcategory => subcategory.category === category)[0].categoryName}</Typography>
                <SubcategoryDropdown
                    category={category}
                    subcategories={subcategories}
                    newReport={newReport}
                    setNewReport={setNewReport}/>
                <TextField
                    margin="normal"
                    fullWidth
                    name="additional-note"
                    label="Add Description (optional)"
                    type="additional-note"
                    id="additional-note"
                    multiline={true}
                    value={newReport.description}
                    onChange={event => setNewReport({...newReport, description: event.target.value})}
                    rows="2"
                    size="small"
                    InputLabelProps={{style: {fontSize: 18}}}
                />
                <FormGroup>
                    <FormControlLabel control={
                        <Switch 
                            onChange={handleToggle}
                            />
                        }
                        label="Submit Anonymously"
                    />
                </FormGroup>
                <UploadForm
                    newReport={newReport}
                    setNewReport={setNewReport}/>
            </Box>
        </Container>
    );
}




