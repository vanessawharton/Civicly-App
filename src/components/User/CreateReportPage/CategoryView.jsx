import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
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
    const [value, setValue] = React.useState('');
    const ref = React.useRef(null);

    return (
        <Box
            sx={{ 
                pb: 0 
            }} 
            ref={ref}>
            <Grid 
                container 
                rowSpacing={1} 
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);}}
                sx={{
                    "& .Mui-selected, .Mui-selected > svg": { color: 'darkblue'}
                }}
            >
                <Grid 
                    item 
                    xs={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <IconButton 
                        aria-label="parking"
                        value="parking"
                    >
                        <DirectionsCarRoundedIcon
                            sx={{
                                backgroundColor: 'dodgerblue',
                                color: 'black',
                                p: 1,
                                fontSize: 60,
                                borderRadius: 5,
                            }}
                        />
                    </IconButton> 
                </Grid>
                <Grid 
                    item 
                    xs={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <IconButton 
                        aria-label="street"
                        value="street"
                    >
                        <RemoveRoadRoundedIcon
                            sx={{
                                backgroundColor: 'gold',
                                color: 'black',
                                p: 1,
                                fontSize: 60,
                                borderRadius: 5,
                            }}
                        />
                    </IconButton> 
                </Grid>
                <Grid 
                    item 
                    xs={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <IconButton 
                        aria-label="accessibility"
                        value="accessibility"
                    >
                        <AccessibilityNewIcon
                            sx={{
                                backgroundColor: 'mediumpurple',
                                color: 'black',
                                p: 1,
                                fontSize: 60,
                                borderRadius: 5,
                            }}
                        />
                    </IconButton> 
                </Grid>
                <Grid 
                    item 
                    xs={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <IconButton 
                        aria-label="property"
                        value="property"
                    >
                        <MapsHomeWorkIcon                 
                            sx={{
                                backgroundColor: 'indianred',
                                color: 'black',
                                p: 1,
                                fontSize: 60,
                                borderRadius: 5,
                            }}
                        />
                    </IconButton>
                </Grid>
                <Grid 
                    item 
                    xs={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <IconButton 
                        aria-label="trash"
                        value="trash"
                    >
                        <DeleteOutlineRoundedIcon
                            sx={{
                                backgroundColor: 'darkturquoise',
                                color: 'black',
                                p: 1,
                                fontSize: 60,
                                borderRadius: 5,
                            }}
                        />
                    </IconButton> 
                </Grid>
                <Grid 
                    item 
                    xs={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <IconButton 
                        aria-label="bike"
                        value="bike"
                    >
                        <BikeScooterRoundedIcon
                            sx={{
                                backgroundColor: 'burlywood',
                                color: 'black',
                                p: 1,
                                fontSize: 60,
                                borderRadius: 5,
                            }}
                        />
                    </IconButton> 
                </Grid>
                <Grid 
                    item 
                    xs={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <IconButton 
                        aria-label="graffiti"
                        value="graffiti"
                    >
                        <ReportRoundedIcon
                            sx={{
                                backgroundColor: 'gainsboro',
                                color: 'black',
                                p: 1,
                                fontSize: 60,
                                borderRadius: 5,
                            }}
                        />
                    </IconButton> 
                </Grid>
                <Grid 
                    item 
                    xs={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <IconButton 
                        aria-label="animal"
                        value="animal"
                    >
                        <FlutterDashRoundedIcon
                            sx={{
                                backgroundColor: 'coral',
                                color: 'black',
                                p: 1,
                                fontSize: 60,
                                borderRadius: 5,
                            }}
                        />
                    </IconButton> 
                </Grid>
                <Grid 
                    item 
                    xs={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <IconButton 
                        aria-label="environment"
                        value="environment"
                    >
                        <EnergySavingsLeafRoundedIcon
                            sx={{
                                backgroundColor: 'mediumseagreen',
                                color: 'black',
                                p: 1,
                                fontSize: 60,
                                borderRadius: 5,
                            }}
                        />
                    </IconButton> 
                </Grid>
            </Grid>
        </Box>
    );
}