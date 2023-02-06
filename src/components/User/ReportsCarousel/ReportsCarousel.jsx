import * as React from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PinDetailView from '../PinDetailView/PinDetailView';


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
            partialVisible={true} 
            responsive={responsive} 
            arrows={false}
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
            return (
        <div key={report.id} onClick={() => handleActiveMarker(report)} >
            <img src={report.image_url}/>
            {report.description}
        </div>
            )
})}
        </Carousel>
    );
}
