import React, { useState } from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import styled from "styled-components";

const Map = () => {
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 59.2191935, lng: 10.8853165 }}
  >
    {props.isMarkerShown && 
    <Marker 
    position={{ lat: 59.2191935, lng: 10.8853165 }} 
    onClick={() => setShowInfoWindow(!showInfoWindow)} 
    />}
    
    {showInfoWindow && 
    (<InfoWindow 
    position={{ lat: 59.2191935, lng: 10.8853165 }} 
    onCloseClick={() => setShowInfoWindow(!showInfoWindow)}>
        <div>
          <h6>Adresse:</h6>
          Trondalsveien 22, 1621 Gressvik
        </div>
    </InfoWindow>)
    } 
  
  </GoogleMap>
  ))

  return(
    <StyledMapContainer>
      <MyMapComponent
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.
        exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `inherit` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </StyledMapContainer>
  );  
}


export default Map;

const StyledMapContainer = styled.div`
  height: 300px;
  width: 50%;

  @media screen and (max-width: 768px){
    width: 100%;
  }
`;