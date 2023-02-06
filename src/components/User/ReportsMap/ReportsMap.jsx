import { GoogleMap, MarkerF, LoadScript, InfoWindowF } from "@react-google-maps/api";
import Button from '@mui/material/Button';
import ReportCarousel from "../ReportsCarousel/ReportsCarousel";
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import './ReportsMap.css'
import { fontWeight } from "@mui/system";



function ReportsMap(){
  
  const [latitude, setLatitude] = useState(39.8283);
  const [longitude, setLongitude] = useState(-98.5795);
  const [focus, setFocus] = useState(5);
  const [activeMarker, setActiveMarker] = useState(null);
  
  
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

  const onLoad = marker => {
      console.log(marker)
  };

  const [mapref, setMapRef] = useState(null);

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
        
    if (marker.id === activeMarker) {
      return;
    }
      setActiveMarker(marker.id);
  };

  const handleUpVote =(location) => {
    console.log('upvote!!', location.id)
    dispatch({type: 'UPVOTE', payload: {id: location.id}})
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
        onClick={() => setActiveMarker(null)}
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
       
            <MarkerF key ={location.id} onLoad={onLoad} position={{lat: +location.latitude, lng: +location.longitude}} onClick={() => handleActiveMarker(location)} 
            options={{icon: `${color}`}}>
            {activeMarker === location.id ? (
            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
              <CardContent className="infoWindow">
                <div className="textContainer">
                  <Typography sx={{fontSize: 10, fontWeight: 700}}>{location.category}</Typography>
                  <Typography sx={{fontSize: 10}}>Reported: {location.date}</Typography>
                  <Typography sx={{fontSize: 10}}>Status: {location.status}</Typography>
                  <Typography>
                    {location.upvotes}
                  <Button sx={{fontSize: 10}} onClick={() => handleUpVote(location)}>upvote</Button>
                  </Typography>
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