import { GoogleMap, MarkerF, InfoWindowF } from "@react-google-maps/api";
import ReportCarousel from "./ReportsCarousel";
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Box } from "@mui/system";
import './ReportsMap.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';




function ReportsMap(){
  
  const [latitude, setLatitude] = useState(44.9778);
  const [longitude, setLongitude] = useState(-93.2650);
  const [focus, setFocus] = useState(8);
  const [activeMarker, setActiveMarker] = useState(null);
  const [mapref, setMapRef] = useState(null);
  
  
  const dispatch = useDispatch();

  const tickets = useSelector(store => store.ticket)
  const activeMarkerTriggerTicket = useSelector(store => store.activeMarker)

  
  useEffect (() => {
    dispatch({type: 'FETCH_ALL_TICKETS'});
    !activeMarkerTriggerTicket && userPosition()

  }, [])

  // useEffect(() => {
  //   handleActiveMarker(activeMarkerTriggerTicket)
  // }, [activeMarkerTriggerTicket] )

  const userPosition = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setFocus(10);


    });
  };

  const handleMapLoad = map => {
    setMapRef(map);
    if (activeMarkerTriggerTicket) {
      handleActiveMarker(activeMarkerTriggerTicket)
      setFocus(12);
      dispatch({type: 'UNSET_ACTIVE_MARKER'})
    }

  };

  const handleCenterChanged = () => {
    
    if (mapref) {
      const bounds = mapref.getBounds();
      const center = mapref.getCenter();
      setLatitude(center.lat());
      setLongitude(center.lng());
      const showTickets = tickets.filter(ticket => {
      return(
        ticket.latitude < bounds?.Ya.hi && 
        ticket.latitude > bounds?.Ya.lo && 
        ticket.longitude < bounds?.Ma.hi && 
        ticket.longitude > bounds?.Ma.lo
        )
      }
          
      )
      dispatch({type: 'SET_INBOUNDSMARKERS', payload: showTickets});
      }
    };

  const handleActiveMarker = (marker) => {
    console.log(marker);
    setLatitude(+marker.latitude);
    setLongitude(+marker.longitude);
    setSelected(false)    
    if (marker.id === activeMarker) {
      return;
    }
      setActiveMarker(marker.id);
  };

  const [selected, setSelected] = useState(false);

  const handleUpVote =(location) => {
    setSelected(!selected)
    if(selected == false){
      dispatch({type: 'UPVOTE', payload: {location: location}})
    }
    else if (selected == true){
      dispatch({type: 'DOWNVOTE', payload: {location: location}})
    } 
  } 

  const onCloseClick = () => {
    setActiveMarker(null)
    setSelected(false)
  }

  const defaultMapOptions = {
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false,
  };
 
    return (
     <>
      <GoogleMap 
        onZoomChanged = {handleCenterChanged}
        onDragEnd = {handleCenterChanged}
        onCenterChanged = {handleCenterChanged}
        onLoad={handleMapLoad}
        zoom={focus} 
        center={{lat: latitude, lng: longitude}}
        mapContainerClassName="map-container"
        onClick={() => onCloseClick()}
        options={defaultMapOptions}
      >
      {tickets.map(location => {

        let color;
        
        //let category;
        
        switch(location.category) {
          case '8':
            color='/images/yellow-dot.png'
            //category='Sidewalks and Streets'
            break;
          case '7':
            color='/images/red-dot.png'
            //category='Property'
            break;
          case '6':
            color='/images/blue-dot.png'
            //category='Parking'
            break;
          case '5':
            color='/images/green-dot.png'
            //category='Health and Environmental'
            break;
          case '4':
            color='/images/marker_grey.png'
            //category='Graffiti'
            break;
          case '3':
            color='/images/pink-dot.png'
            //category='Garbage and Recycling'
            break;
          case '2':
            color='/images/marker_brown.png'
            //category='Biking'
            break;
          case '1':
            color='/images/orange-dot.png'
            //category='Animal Control'
            break;
          case '0':
            color='/images/purple-dot.png'
            //category='Accessibility'
            break;
          default:
            color='/images/red-dot.png'
        }
        return (
       
            <MarkerF key ={location.id} position={{lat: +location.latitude, lng: +location.longitude}} onClick={() => handleActiveMarker(location)} 
            options={{icon: `${color}`}}>
            {activeMarker === location.id ? (
              <InfoWindowF onCloseClick={onCloseClick}>
              <CardContent className="infoWindowContent">
                <Box className="textContainer">
                  <Typography sx={{fontSize: 12, fontWeight: 700, mb: 1}}>{location.categoryName}</Typography>
                  <Typography sx={{fontSize: 10}}>
                    <Typography sx={{fontWeight: 700, fontSize: 10}}> Reported:
                    </Typography> 
                    {location.date}
                  </Typography>
                  <Typography sx={{fontSize: 10}}><Typography sx={{fontWeight: 700, fontSize: 10}}>Status:</Typography> {location.status}</Typography>
                  <Box sx={{ display: 'flex' , flexDirection: 'row', mt: 1}}>
                    <ThumbUpIcon selected={selected} sx={{fontSize: 30, color: 'blue'}} onClick={() => handleUpVote(location)}/>
                    <Typography sx={{mt: 1, ml: 3}}>
                      {location.upvotes}
                    </Typography>
                  </Box>
                </Box>
                <img className="infoWindow-image" src={location.image_url}/>
              </CardContent>
            </InfoWindowF>
            ) : null}
            </MarkerF>
          
        )
      })}
      </GoogleMap>
      <ReportCarousel handleActiveMarker={handleActiveMarker} />
      </>
      )
}

export default ReportsMap;