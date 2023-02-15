import { useRef } from 'react';
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
import { Typography } from '@mui/material';


export default function CategoryView({newReport, setNewReport, category, setCategory}) {
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
                        alignItems: 'center',
                        height: 100
                    }}
                    onClick={() => setCategory(6)}
                >
                    <IconButton
                        aria-label="parking"
                        sx={{display: 'flex', flexDirection: 'column'}}
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
                        {category === 6 && <Typography variant='caption'>Parking</Typography>}
                    </IconButton> 
                </Grid>
                <Grid 
                    item 
                    xs={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 100
                    }}
                    onClick={() => setCategory(8)}
                >
                    <IconButton 
                        aria-label="street"
                        sx={{display: 'flex', flexDirection: 'column'}}

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
                        {category === 8 && <Typography variant='caption'>Street</Typography>}
                    </IconButton> 
                </Grid>
                <Grid 
                    item 
                    xs={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 100
                    }}
                    onClick={() => setCategory(0)}
                >
                    <IconButton 
                        aria-label="accessibility"
                        sx={{display: 'flex', flexDirection: 'column'}}

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
                    {category === 0 && <Typography variant='caption'>Accessibility</Typography>}

                    </IconButton> 
                </Grid>
                <Grid 
                    item 
                    xs={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 100,
                    }}
                    onClick={() => setCategory(7)}
                >
                    <IconButton 
                        aria-label="property"
                        sx={{display: 'flex', flexDirection: 'column'}}

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
                        {category === 7 && <Typography variant='caption'>Property</Typography>}

                    </IconButton>
                </Grid>
                <Grid 
                    item 
                    xs={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 100
                    }}
                    onClick={() => setCategory(3)}
                >
                    <IconButton 
                        aria-label="trash"
                        sx={{display: 'flex', flexDirection: 'column'}}

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
                    {category === 3 && <Typography variant='caption'>Trash</Typography>}

                    </IconButton> 
                </Grid>
                <Grid 
                    item 
                    xs={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 100
                    }}
                    onClick={() => setCategory(2)}
                >
                    <IconButton 
                        aria-label="bike"
                        sx={{display: 'flex', flexDirection: 'column'}}

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
                        {category === 2 && <Typography variant='caption'>Bike</Typography>}

                    </IconButton> 
                </Grid>
                <Grid 
                    item 
                    xs={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 100
                    }}
                    onClick={() => setCategory(4)}
                >
                    <IconButton 
                        aria-label="graffiti"
                        sx={{display: 'flex', flexDirection: 'column'}}

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
                        {category === 4 && <Typography variant='caption'>Graffiti</Typography>}

                    </IconButton> 
                </Grid>
                <Grid 
                    item 
                    xs={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 100
                    }}
                    onClick={() => setCategory(1)}
                >
                    <IconButton 
                        aria-label="animal"
                        sx={{display: 'flex', flexDirection: 'column'}}

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
                        {category === 1 && <Typography variant='caption'>Animal</Typography>}

                    </IconButton> 
                </Grid>
                <Grid 
                    item 
                    xs={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 100
                    }}
                    onClick={() => setCategory(5)}
                >
                    <IconButton 
                        aria-label="environment"
                        sx={{display: 'flex', flexDirection: 'column'}}

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
                        {category === 5 && <Typography variant='caption'>Environment</Typography>}

                    </IconButton> 
                </Grid>
            </Grid>
        </Box>
    );
}