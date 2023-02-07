import { GoogleMap, MarkerF, LoadScript, InfoWindowF } from "@react-google-maps/api";
import Button from '@mui/material/Button';
import ReportCarousel from "../ReportsCarousel/ReportsCarousel";
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Box } from "@mui/system";
import './ReportsMap.css'
import ToggleButton from '@mui/material/ToggleButton';



function ReportsMap(){
  
  const [latitude, setLatitude] = useState(39.8283);
  const [longitude, setLongitude] = useState(-98.5795);
  const [focus, setFocus] = useState(5);
  const [activeMarker, setActiveMarker] = useState(null);
  const [mapref, setMapRef] = useState(null);
  
  
  const dispatch = useDispatch();

  const tickets = useSelector(store => store.ticket)

  
  useEffect (() => {
    dispatch({type: 'FETCH_TICKET'});
    userPosition()
  }, [])

  const userPosition = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setFocus(10);
    });
  };

  const handleMapLoad = map => {
    setMapRef(map);
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
      >
      {tickets.map(location => {

        let color;
        
        switch(location.category) {
          case 'Sidewalks and Streets':
            color='/images/blue-dot.png'
            break;
          case 'Property':
            color='/images/purple-dot.png'
            break;
          case 'Parking':
            color='/images/pink-dot.png'
            break;
          case 'Health and Environmental':
            color='/images/yellow-dot.png'
            break;
          case 'Graffiti':
            color='/images/red-dot.png'
            break;
          case 'Garbage and Recycling':
            color='/images/orange-dot.png'
            break;
          case 'Biking':
            color='/images/green-dot.png'
            break;
          case 'Animal Control':
            color='/images/marker_grey.png'
            break;
          case 'Accessibility':
            color='/images/marker_brown.png'
            break;
          default:
            color='/images/red-dot.png'
        }
        return (
       
            <MarkerF key ={location.id} position={{lat: +location.latitude, lng: +location.longitude}} onClick={() => handleActiveMarker(location)} 
            options={{icon: `${color}`}}>
            {activeMarker === location.id ? (
              <InfoWindowF onCloseClick={onCloseClick}>
              <CardContent className="infoWindow">
                <div className="textContainer">
                  <Typography sx={{fontSize: 10, fontWeight: 700}}>{location.category}</Typography>
                  <Typography sx={{fontSize: 10}}>Reported: {location.date}</Typography>
                  <Typography sx={{fontSize: 10}}>Status: {location.status}</Typography>
                  <Box sx={{ display: 'flex' , flexDirection: 'row'}}>
                    <ToggleButton selected={selected} sx={{fontSize: 10}} onClick={() => handleUpVote(location)}>upvote</ToggleButton>
                    {location.upvotes}
                  </Box>
                </div>
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