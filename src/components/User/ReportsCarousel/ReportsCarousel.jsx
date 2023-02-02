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

export default function ReportCarousel() {

    const reports = useSelector((store) => store.reports);
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
            autoPlay={true}
            autoPlaySpeed={2000}
            customTransition="all .2"
            transitionDuration={700}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
        >
            {/* <div className="pin-details">
                {reports.map(report => (
                        <PinDetailView key={report.id} report={report} />
                    ))}
            </div> */}
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <div>Item 6</div>
            <div>Item 7</div>
        </Carousel>
    );
}
