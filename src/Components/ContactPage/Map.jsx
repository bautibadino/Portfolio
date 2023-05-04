import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '90%',
  height: 'auto'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export function MyComponent() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyAjSyjKBpcQbdrvADAVgLHfaozPckzQAzk"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
        </GoogleMap>
      </LoadScript>
    )}
