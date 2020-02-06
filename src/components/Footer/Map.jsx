import React, { useState } from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import styled from "styled-components";

const Map = () => {
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 59.217390, lng: 10.922040 }}
  >
    {props.isMarkerShown && 
    <Marker 
    position={{ lat: 59.217390, lng: 10.922040 }} 
    onClick={() => setShowInfoWindow(!showInfoWindow)} 
    />}
    
    {showInfoWindow && 
    (<InfoWindow style={{color: "#96e9b0", textAlign: "left"}}
    position={{ lat: 59.217390, lng: 10.922040 }} 
    onCloseClick={() => setShowInfoWindow(!showInfoWindow)}>
        <div>
          <h6>Adresse:</h6>
          <h6>Mosseveien 3, 1610 Fredrikstad</h6>
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