import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ListItem, ListItemText, Switch } from '@mui/material';



export default function IssueFormView() {
    const [anon, setAnon] = React.useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        username: data.get('username'),
        password: data.get('password'),
        nickname: data.get('nickName'),
        });
    };
    const handleToggle = () => {
        setAnon(!anon)
    }

    return(
        <Container component="main" maxWidth="xs">

          <Box component="form" onSubmit={handleSubmit} sx={{marginRight: 4}}>
          <TextField
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
            />
            <TextField
              margin="normal"
              fullWidth
              name="additional-note"
              label="Additional Note"
              type="additional-note"
              id="additional-note"
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

          </Box>
      </Container>
  );
}




