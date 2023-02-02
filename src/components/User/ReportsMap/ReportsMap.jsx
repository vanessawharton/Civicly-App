import { GoogleMap, MarkerF, LoadScript, InfoWindowF } from "@react-google-maps/api";

import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './ReportsMap.css'


function ReportsMap(){
  
  const [latitude, setLatitude] = useState(39.8283);
  const [longitude, setLongitude] = useState(-98.5795);
  const [focus, setFocus] = useState(5);

  const dispatch = useDispatch();
  
useEffect (() => {
  dispatch({type: 'FETCH_TICKET'});
  userPosition()
}, [])

const tickets = useSelector(store => store.ticket)

const userPosition = () => {
  navigator.geolocation.getCurrentPosition(position => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    setFocus(10);
  });
}

    const onLoad = marker => {
        console.log(marker)
    }

const [activeMarker, setActiveMarker] = useState(null);

const handleActiveMarker = (marker) => {
  setLatitude(+marker.latitude);
  setLongitude(+marker.longitude);
      
  if (marker.id === activeMarker) {
    return;
  }
    setActiveMarker(marker.id);
};

    return (
      // <LoadScript
      // googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap 
        zoom={focus} 
        center={{lat: latitude, lng: longitude}}
        mapContainerClassName="map-container"
        onClick={() => setActiveMarker(null)}
      >
      {tickets.map(location => {
        
        let color;
        
        switch(location.category) {
          case '8':
            color='http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            break;
          case '7':
            color='http://maps.google.com/mapfiles/ms/icons/purple-dot.png'
            break;
          case '6':
            color='http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
            break;
          case '5':
            color='http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
            break;
          case '4':
            color='http://maps.google.com/mapfiles/ms/icons/red-dot.png'
            break;
          case '3':
            color='http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
            break;
          case '2':
            color='http://maps.google.com/mapfiles/ms/icons/green-dot.png'
            break;
          case '1':
            color='http://www.google.com/mapfiles/marker_grey.png'
            break;
          case '0':
            color='http://www.google.com/mapfiles/marker_brown.png'
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
                <div className="infoWindow-heading">{location.description}</div>
                <img className="infoWindow-image" src={location.image_url}/>
              </div>
            </InfoWindowF>
          ) : null}
            </MarkerF>
          </div>
        )
      })}
      </GoogleMap>
      //</LoadScript>
      )


}

export default ReportsMap;