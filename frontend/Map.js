import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const Map = ({ stations }) => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <GoogleMap
            center={{ lat: 37.7749, lng: -122.4194 }}
            zoom={10}
            mapContainerStyle={{ width: "100%", height: "400px" }}
        >
            {stations.map((station, index) => (
                <Marker
                    key={index}
                    position={{ lat: station.location.lat, lng: station.location.lng }}
                    label={station.availability ? "Available" : "Full"}
                />
            ))}
        </GoogleMap>
    );
};

export default Map;
