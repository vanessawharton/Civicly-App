import React from "react";
import { GoogleMap, MarkerF, useLoadScript, refs, Data, dataF  } from "@react-google-maps/api";
import { useState, View, Image } from "react";
import './NewReportMap.css'
import { useEffect } from "react";
import marker from './target-svgrepo-com.svg'

export default function NewReportLocation({newReport, setNewReport}) {
    const { isLoaded } = useLoadScript({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY})

    // the initial lat and lng are set so that the map will load near by first, then the location can be used to load... it may be causing a bug...
    const [latitude, setLatitude] = useState(44.961002);
    const [longitude, setLongitude] = useState(-93.163103);
    const [center, setCenter] = useState({lat: latitude, lng: longitude});
    const [target, setTarget] = useState(null)
    

    useEffect (() => {
        userPosition()
    }, [])

    useEffect(() => {
        setCenter({lat: latitude, lng: longitude})
    }, [latitude, longitude])


    const userPosition = () => {
        navigator.geolocation.getCurrentPosition(position => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })
    }

    if (!isLoaded) return <div>Loading...</div>
    return (
        <>
            <Map
                center = {center} 
                setCenter = {setCenter}
                sx={{zIndex:'2'}}
                newReport={newReport}
                setNewReport={setNewReport}/>
        </>
    )
}

function Map (props) {
    const [mapref, setMapRef] = useState(null);
    
    const handleOnLoad = map => {
        setMapRef(map);
    };

    const handleCenterChanged = () => {
    if (mapref) {
      const newCenter = mapref.getCenter();
    //   console.log(newCenter?.lat(), newCenter?.lng());
      props.setNewReport({...props.newReport, latitude: newCenter?.lat(), longitude: newCenter?.lng()})
    }
  };
    const defaultMapOptions = {
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false,
  };

    return (
        <>
        <GoogleMap
            zoom = {19}
            center = {props.center}
            onLoad = {handleOnLoad}
            onCenterChanged = {handleCenterChanged}
            mapContainerClassName="new-report-map-container"
            clickableIcons= {false}
            options={defaultMapOptions}
        >
        </GoogleMap>
        <img className="marker" src={marker} alt="map center marker" 
        style={{
            left: '50%',
            marginLeft: -28,
            marginTop: -160,
            position: 'fixed',
            top: '50%',
            bottom: '50%',
            right: '50%',
            zIndex: '99'
            }} 
            />

        </>
    
        )
    
    
}