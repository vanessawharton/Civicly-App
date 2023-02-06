import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ListItem, ListItemText, Switch, Button } from '@mui/material';
import UploadForm from '../UploadForm/UploadForm';
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown';




export default function IssueFormView({ newReport, setNewReport, anon, setAnon, categories }) {



    const handleToggle = () => {
        setAnon(!anon)
    }




    return(
        <Container component="main" maxWidth="xs">

          <Box component="form" sx={{marginRight: 4}}>
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
            <CategoryDropdown
                categories={categories}
                newReport={newReport}
                setNewReport={setNewReport}/>
            <TextField
              margin="normal"
              fullWidth
              name="additional-note"
              label="Additional Note"
              type="additional-note"
              id="additional-note"
              multiline={true}
              value={newReport.description}
              onChange={event => setNewReport({...newReport, description: event.target.value})}
              rows="2"
            />
            <ListItem
                key={'anon-switch'}
                    secondaryAction={
                    <Box sx={{display: "inline-flex", flexDirection: "row"}}>
                        <Switch
                            edge="end"
                            onChange={handleToggle}
                            checked={anon}
                        />
                    </Box>
                }
                >
                <ListItemText primary={`Submit Anonymously`} />
            </ListItem>
            <UploadForm
                newReport={newReport}
                setNewReport={setNewReport}/>


          </Box>
      </Container>
  );
}




