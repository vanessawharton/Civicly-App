import { GoogleMap, MarkerF } from "@react-google-maps/api";
import './ReportDetailMap.css';

function ReportDetailMap({latitude, longitude}) {
    return (
        <GoogleMap 
          mapContainerClassName="admin-map-container"
          zoom={16} 
          center={{lat: +latitude, lng: +longitude}}
        >
          <MarkerF position={{lat: +latitude, lng: +longitude}}>
          </MarkerF>
        </GoogleMap>
    )
}

export default ReportDetailMap;