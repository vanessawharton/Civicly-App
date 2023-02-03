import { GoogleMap, MarkerF, LoadScript, InfoWindowF } from "@react-google-maps/api";
import Button from '@mui/material/Button';

import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './ReportsMap.css'



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

  useEffect (() => {
    console.log(carouselMarkers, 'carouselMarkers');
  })


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
    
    console.log(map);
  };

  const carouselMarkers = useSelector(store => store.inboundsMarkers)


  const handleCenterChanged = () => {
    
    if (mapref) {
      const bounds = mapref.getBounds();
      const center = mapref.getCenter();
      setLatitude(center.lat());
      setLongitude(center.lng());
      const showTickets = tickets.filter(ticket => {
      return(
        ticket.latitude < bounds?.Ya.hi && ticket.latitude > bounds?.Ya.lo
         && ticket.longitude < bounds?.Ma.hi && ticket.longitude > bounds?.Ma.lo
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

    return (
     
      <GoogleMap 
        onZoomChanged = {handleCenterChanged}
        onDragEnd = {handleCenterChanged}
        onLoad={handleMapLoad}
        zoom={focus} 
        center={{lat: latitude, lng: longitude}}
        mapContainerClassName="map-container"
        onClick={() => setActiveMarker(null)}
      >
      {tickets.map(location => {
        let categoryName;
        let color;
        
        switch(location.category) {
          case '8':
            color='/images/blue-dot.png'
            categoryName='Sidewalks and Streets'
            break;
          case '7':
            color='/images/purple-dot.png'
            categoryName='Property'
            break;
          case '6':
            color='/images/pink-dot.png'
            categoryName='Parking'
            break;
          case '5':
            color='/images/yellow-dot.png'
            categoryName='Health and Environmental'
            break;
          case '4':
            color='/images/red-dot.png'
            categoryName='Graffiti'
            break;
          case '3':
            color='/images/orange-dot.png'
            categoryName='Garbage and Recycling'
            break;
          case '2':
            color='/images/green-dot.png'
            categoryName='Biking'
            break;
          case '1':
            color='/images/marker_grey.png'
            categoryName='Animal Control'
            break;
          case '0':
            color='/images/marker_brown.png'
            categoryName='Accessibility'
            break;
          default:
            console.log('Broken')
        }
        return (
          <div key ={location.id}>
            <MarkerF onLoad={onLoad} position={{lat: +location.latitude, lng: +location.longitude}} onClick={() => handleActiveMarker(location)} 
            options={{icon: `${color}`}}>
            {activeMarker === location.id ? (
            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
              <div className="infoWindow">
                <div className="textContainer">
                  <div className="infoWindow-heading">{categoryName}</div>
                  <div className="textContainer">Reported: {location.date}</div>
                  <div className="textContainer">Status: {location.status}</div>
                  <Button>upvote</Button>
                </div>
                <img className="infoWindow-image" src={location.image_url}/>
              </div>
            </InfoWindowF>
          ) : null}
            </MarkerF>
          </div>
        )
      })}
      </GoogleMap>
      
      )
}

export default ReportsMap;