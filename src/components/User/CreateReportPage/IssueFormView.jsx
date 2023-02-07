import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import { ListItem, ListItemText, Switch, Button } from '@mui/material';
import UploadForm from './UploadForm';
import SubcategoryDropdown from './SubcategoryDropdown';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


export default function IssueFormView({ newReport, setNewReport, anon, setAnon, subcategories }) {

    const handleToggle = () => {
        setAnon(!anon)
    }

    return(
        <Container component="main" maxWidth="xs">
            <Box>
                {/* <TextField
                    margin="normal"
                    fullWidth
                    id="report"
                    label="Report"
                    name="report"
                    autoFocus
                    />
                    <TextField
                    margin="normal"
                    fullWidth
                    id="license-plate-number"
                    label="License Plate Number"
                    name="license-plate-number"
                    /> */}
                <SubcategoryDropdown
                    required
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
                    {/* <ListItem
                    key={'anon-switch'}
                    secondaryAction={
                        <Box sx={{display: "inline-flex", flexDirection: "row"}}>
                            <Switch
                                edge="start"
                                onChange={handleToggle}
                                checked={anon}
                            />
                        </Box>
                    }
                >
                    <ListItemText primary={`Submit Anonymously`} />
                </ListItem> */}
                <UploadForm
                    newReport={newReport}
                    setNewReport={setNewReport}/>
            </Box>
        </Container>
    );
}




