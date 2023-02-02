import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';
import BikeScooterRoundedIcon from '@mui/icons-material/BikeScooterRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EnergySavingsLeafRoundedIcon from '@mui/icons-material/EnergySavingsLeafRounded';
import FlutterDashRoundedIcon from '@mui/icons-material/FlutterDashRounded';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import RemoveRoadRoundedIcon from '@mui/icons-material/RemoveRoadRounded';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';


export default function CategoryView() {
    // const [category, setCategory] = React.useState(0);

    return (
    <Box>
        <Stack direction="column" spacing={2}>
            <IconButton aria-label="parking">
                <DirectionsCarRoundedIcon />
            </IconButton> 
            <IconButton aria-label="bike">
                <BikeScooterRoundedIcon />
            </IconButton> 
            <IconButton aria-label="environment">
                <EnergySavingsLeafRoundedIcon />
            </IconButton>
            <IconButton aria-label="graffiti">
                <ReportRoundedIcon />
            </IconButton> 
            <IconButton aria-label="property">
                <MapsHomeWorkIcon />
            </IconButton>
            <IconButton aria-label="accessibility">
                <AccessibilityNewIcon />
            </IconButton>
            <IconButton aria-label="street">
                <RemoveRoadRoundedIcon />
            </IconButton>
            <IconButton aria-label="animal">
                <FlutterDashRoundedIcon />
            </IconButton>
            <IconButton aria-label="trash">
                <DeleteOutlineRoundedIcon />
            </IconButton>
        </Stack>
    </Box>
    );
}