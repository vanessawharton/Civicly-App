import * as React from 'react';
import {  useSelector  } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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

    return (
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
            let category
switch(report.category) {
    case '8':
      category='Sidewalks and Streets'
      break;
    case '7':
      category='Property'
      break;
    case '6':
      category='Parking'
      break;
    case '5':
      category='Health and Environmental'
      break;
    case '4':
      category='Graffiti'
      break;
    case '3':
      category='Garbage and Recycling'
      break;
    case '2':
      category='Biking'
      break;
    case '1':
      category='Animal Control'
      break;
    case '0':
      category='Accessibility'
      break;
    default:
      category='category'
  }
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
                    {category}
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
