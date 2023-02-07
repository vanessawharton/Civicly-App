import { GoogleMap, MarkerF } from "@react-google-maps/api";
import './ReportDetailMap.css';

function ReportDetailMap() {
    return (
        <GoogleMap 
          mapContainerClassName="admin-map-container"
          zoom={10} 
          center={{lat: 39.8283, lng: -98.5795}}
        >
          <MarkerF position={{lat: 39.8283, lng: -98.5795}}>
          </MarkerF>
        </GoogleMap>
    )
}

export default ReportDetailMap;