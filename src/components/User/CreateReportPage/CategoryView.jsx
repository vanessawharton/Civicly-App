import { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';
import BikeScooterRoundedIcon from '@mui/icons-material/BikeScooterRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EnergySavingsLeafRoundedIcon from '@mui/icons-material/EnergySavingsLeafRounded';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import RemoveRoadRoundedIcon from '@mui/icons-material/RemoveRoadRounded';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';


export default function CategoryView({ newReport, setNewReport, category, setCategory }) {
    const ref = useRef(null);

    return (
        <Box
            sx={{ 
                pb: 0 
            }} 
            ref={ref}
        >
            <Grid 
                container 
                rowSpacing={1} 
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                value={newReport.category}
                onChange={event => setNewReport({...newReport, category: event.target.value})}
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
                        alignItems: 'center'
                    }}
                    onClick={() => setCategory(6)}
                >
                    <IconButton
                        aria-label="parking"
                    >
                        <DirectionsCarRoundedIcon
                            sx={{
                                backgroundColor: 'dodgerblue',
                                color: 'black',
                                p: 1,
                                fontSize: 60,
                                borderRadius: 5,
                                "& .MuiSvgIcon-root, .Mui-selected": {color: 'darkblue'}
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
                    onClick={() => setCategory(8)}
                >
                    <IconButton 
                        aria-label="street"
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
                    onClick={() => setCategory(0)}
                >
                    <IconButton 
                        aria-label="accessibility"
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
                    onClick={() => setCategory(7)}
                >
                    <IconButton 
                        aria-label="property"
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
                    onClick={() => setCategory(3)}
                >
                    <IconButton 
                        aria-label="trash"
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
                    onClick={() => setCategory(2)}
                >
                    <IconButton 
                        aria-label="bike"
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
                    onClick={() => setCategory(4)}
                >
                    <IconButton 
                        aria-label="graffiti"
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
                    onClick={() => setCategory(1)}
                >
                    <IconButton 
                        aria-label="animal"
                    >
                        <PetsRoundedIcon
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
                    onClick={() => setCategory(5)}
                >
                    <IconButton 
                        aria-label="environment"
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