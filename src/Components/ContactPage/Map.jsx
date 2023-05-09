import React, { useEffect, useState } from "react";
import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const initialMarkers = [
        {
            position: {
                lat: 28.625485,
                lng: 79.821091
            },
            label: { color: "white", text: "P1" },
            draggable: true
        },
        {
            position: {
                lat: 28.625293,
                lng: 79.817926
            },
            label: { color: "red", text: "P2" },
            draggable: false
        },
        {
            position: {
                lat: 28.625182,
                lng: 79.81464
            },
            label: { color: "blacks", text: "P3" },
            draggable: true
        },
    ];


    const handleResize = () => { setWindowWidth(window.innerWidth); };
    
    useEffect(() => { 
        window.addEventListener('resize', handleResize); 
        return () => { window.removeEventListener('resize', handleResize);}; 
    }, []);

    const [activeInfoWindow, setActiveInfoWindow] = useState("");
    const [markers, setMarkers] = useState(initialMarkers);
    let mapWidth
    if(window.innerWidth < 768){
        mapWidth  = '90vw'
    }else{
        mapWidth = '45vw'
    }
    

    const containerStyle = {

        width: mapWidth,
        height: "65vh",
    }

    const center = {
        lat: -32.9531798,
        lng: -60.6412089,
    }

    const mapClicked = (event) => { 
        console.log(event.latLng.lat(), event.latLng.lng()) 
    }

    const markerClicked = (marker, index) => {  
        setActiveInfoWindow(index)
        console.log(marker, index) 
    }

    const markerDragEnd = (event, index) => { 
        console.log(event.latLng.lat())
        console.log(event.latLng.lng())
    }

    return (
        <LoadScript googleMapsApiKey='AIzaSyAjSyjKBpcQbdrvADAVgLHfaozPckzQAzk'>
            <GoogleMap 
                mapContainerStyle={containerStyle} 
                center={center} 
                zoom={15}
                onClick={mapClicked}
                
            >
                {markers.map((marker, index) => (
                    <Marker 
                        key={index} 
                        position={marker.position}
                        label={marker.label}
                        draggable={marker.draggable}
                        onDragEnd={event => markerDragEnd(event, index)}
                        onClick={event => markerClicked(marker, index)} 
                    >
                        {
                            (activeInfoWindow === index)
                            &&
                            <InfoWindow position={marker.position}>
                                <b>{marker.position.lat}, {marker.position.lng}</b>
                            </InfoWindow>
                        }  
                    </Marker>
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;

