import * as React from 'react';
import {  useSelector  } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Typography } from '@mui/material';
import { Card, CardContent, CardMedia, Box } from '@mui/material';

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

export default function ReportCarousel({handleActiveMarker}) {

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
        {reports.map(report => {
        return (
        <div key={report.id} onClick={() => handleActiveMarker(report)} >
            <Card sx={{m: .5}}>
              <CardContent sx={{height: 90}}>
                <CardMedia
                component="img"
                height="75"
                image={report.image_url}
                />
                <Typography 
                  fontWeight={700}
                  fontSize={7}>
                    {report.categoryName}
                </Typography>
                <Typography 
                  fontWeight={700}
                  fontSize={7}>
                    Reported:{new Date(report.date).toLocaleDateString()}
                </Typography>
                <Typography 
                  fontWeight={700}
                  fontSize={7}>
                    Status:{report.status}
                </Typography>
              </CardContent>
            </Card>
        </div>
            )
        })}
        </Carousel>
        </Box>
    );
}
