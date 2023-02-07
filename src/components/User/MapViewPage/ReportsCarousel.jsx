import * as React from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Card, CardContent, CardMedia } from '@mui/material';

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
    const dispatch = useDispatch();

    //GET all pin detail views on page load
    // useEffect(() => {
    //     dispatch({ type: 'FETCH_DETAILS'});
    // }, []);

    return (
        <Carousel 
            //partialVisible={true} 
            responsive={responsive} 
            arrows={true}
            swipeable={true}
            infinite={true}
            //autoPlay={true}
            //autoPlaySpeed={4000}
            customTransition="all .2"
            transitionDuration={700}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
        >   
        {reports.map(report => {
            console.log(report)
            return (
        <div key={report.id} onClick={() => handleActiveMarker(report)} >
            <Card sx={{m: .5}}>
              <CardContent>
                <CardMedia
                component="img"
                height="75"
                image={report.image_url}
                />
                <Typography 
                  fontWeight={700}
                  fontSize={7}>
                    {report.category}
                </Typography>
                <Typography 
                  fontWeight={700}
                  fontSize={7}>
                    Reported:{report.date}
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
    );
}
