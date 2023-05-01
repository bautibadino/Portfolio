import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class Maps extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 37.774929,
          lng: -122.419416
        }}
      />
    );
  }
}

export  GoogleApiWrapper({
  apiKey: 'TU_API_KEY_AQUI'
})(Maps);
