import { GoogleMap, MarkerF, InfoWindowF } from "@react-google-maps/api";
import ReportCarousel from "./ReportsCarousel";
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import './ReportsMap.css';
import { Button } from "@mui/material";




function ReportsMap(){

  const dispatch = useDispatch();

  const [latitude, setLatitude] = useState(44.9778);
  const [longitude, setLongitude] = useState(-93.2650);
  const [focus, setFocus] = useState(8);
  const [activeMarker, setActiveMarker] = useState(null);
  const [mapref, setMapRef] = useState(null);
  const [upvoteSelected, setUpvoteSelected] = useState(false);

  
  const tickets = useSelector(store => store.ticket)
  const activeMarkerTriggerTicket = useSelector(store => store.activeMarker)

  
  useEffect (() => {
    dispatch({type: 'FETCH_ALL_TICKETS'});
    !activeMarkerTriggerTicket && userPosition()
  }, []);

  const userPosition = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setFocus(12);
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
      )})
      dispatch({type: 'SET_INBOUNDSMARKERS', payload: showTickets});
      }
  };

  const handleActiveMarker = (marker) => {
    setLatitude(+marker.latitude);
    setLongitude(+marker.longitude);
    setUpvoteSelected(false)    
    if (marker.id === activeMarker) {
      return;
    }
      setActiveMarker(marker.id);
  };

  const handleUpVote =(location) => {
    setUpvoteSelected(!upvoteSelected)
    if(upvoteSelected == false){
      dispatch({type: 'UPVOTE', payload: {location: location}})
    }
    else if (upvoteSelected == true){
      dispatch({type: 'DOWNVOTE', payload: {location: location}})
    } 
  } 

  const onCloseClick = () => {
    setActiveMarker(null)
    setUpvoteSelected(false)
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
          
          switch(location.category) {
            case '8':
              color='/images/yellow-dot.png'
              break;
            case '7':
              color='/images/red-dot.png'
              break;
            case '6':
              color='/images/blue-dot.png'
              break;
            case '5':
              color='/images/green-dot.png'
              break;
            case '4':
              color='/images/marker_grey.png'
              break;
            case '3':
              color='/images/pink-dot.png'
              break;
            case '2':
              color='/images/marker_brown.png'
              break;
            case '1':
              color='/images/orange-dot.png'
              break;
            case '0':
              color='/images/purple-dot.png'
              break;
            default:
              color='/images/red-dot.png'
          }

          return (
        
              <MarkerF 
                key ={location.id} 
                position={{lat: +location.latitude, lng: +location.longitude}} 
                onClick={() => handleActiveMarker(location)} 
                options={{icon: `${color}`}}
              >
              {activeMarker === location.id ? (
                <InfoWindowF onCloseClick={onCloseClick}>
                  <div>
                    <Typography sx={{fontSize: 14, fontWeight: 700, mb: 1, textAlign: "center"}}>
                      {location.categoryName}
                    </Typography>
                    <div className="infoWindowContent">
                      <Box >
                        <Typography sx={{fontSize: 10}}>
                          <Typography sx={{fontWeight: 700, fontSize: 10}}> 
                            Reported:
                          </Typography> 
                            {new Date(location.date).toLocaleDateString()}
                        </Typography>
                        <Typography sx={{fontSize: 10}}>
                          <Typography sx={{fontWeight: 700, fontSize: 10}}>
                            Status:
                          </Typography> 
                            {location.status}
                        </Typography>
                        <Box sx={{ display: 'flex' , flexDirection: 'row', mt: 1}}>
                          <Button onClick={() => handleUpVote(location)} sx={{ml: -1.5, mt: 2, fontSize: 10, color: 'grey'}}>
                            upvote
                          </Button>
                          <Typography sx={{fontSize: 10, mt: 3}}>
                            {location.upvotes}
                          </Typography>
                        </Box>
                      </Box>
                      <img className="infoWindow-image" src={location.image_url}/>
                    </div>
                  </div>
                </InfoWindowF>
              ) : null}
              </MarkerF>
          )
        })}
        </GoogleMap>
        <ReportCarousel handleActiveMarker={handleActiveMarker} />
      </>
    )
};

export default ReportsMap;