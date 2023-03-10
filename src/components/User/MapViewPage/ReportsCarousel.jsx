import * as React from 'react';
import {  useSelector  } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, CardMedia, Box, Typography } from '@mui/material';


const responsive = {
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5,
        partialVisibilityGutter: 5,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
        partialVisibilityGutter: 5,
    }
};

function ReportCarousel({handleActiveMarker}) {
    //Reports with bounds of map
    const reports = useSelector((store) => store.inboundsMarkers);

    return (
        <Box sx={{backgroundColor: 'lightgrey', height: 200 }}>
           <Typography
           fontWeight={700}
           fontSize={15}
           mt={2}
           ml={2}
           >
            Nearby Reports
           </Typography>
        <Carousel 
            responsive={responsive} 
            arrows={true}
            swipeable={true}
            infinite={true}
            customTransition="all .2"
            transitionDuration={700}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
        >   
        {/* Carousel content */}
        {reports.map(report => {
            //Carousel card content
        return (
        <div key={report.id} onClick={() => handleActiveMarker(report)} >
            <Card sx={{m: .5}}>
                <CardMedia
                component="img"
                height="75"
                image={report.image_url}
                />
                <Typography 
                  fontWeight={700}
                  fontSize={7}
                  sx={{ml: .5}}
                  >
                    {report.categoryName}
                </Typography>
                <Typography 
                  fontWeight={700}
                  fontSize={7}
                  sx={{ml: .5}}
                  >
                    Reported:{new Date(report.date).toLocaleDateString()}
                </Typography>
                <Typography 
                  fontWeight={700}
                  fontSize={7}
                  sx={{ml: .5}}
                  >
                    Status:{report.status}
                </Typography>
            </Card>
        </div>
            )
        })}
        </Carousel>
        </Box>
    );
}

export default ReportCarousel;