import React, { useEffect, useState } from 'react';
import Map from 'react-map-gl/mapbox';
import { Marker } from 'react-map-gl';
import { RiUserLocationFill } from 'react-icons/ri';

const API_KEY = 'pk.eyJ1Ijoicm9oaXRjb29sIiwiYSI6ImNtOGVyYnAzdDA1NmIycXNkdnVyejUyMW0ifQ.z4RBwSmvvplbC8jUX3VMeg';

const MyMap = ({ lat, lon }) => {
    const [viewport, setViewport] = useState({
        latitude: lat,
        longitude: lon,
        zoom: 14,
        bearing: 0,
        pitch: 0
    });

    useEffect(() => {
        setViewport(prev => ({
            ...prev,
            latitude: lat,
            longitude: lon
        }));
    }, [lat, lon]);

    return (
        <div className="map">
            <Map
                mapboxAccessToken={API_KEY}
                initialViewState={viewport}
                onMove={evt => setViewport(evt.viewState)}
                style={{ width: "100%", height: "100%" }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            >
                <Marker latitude={lat} longitude={lon}>
                    <div className="mark">
                        <RiUserLocationFill size="25px" color="blue" />
                    </div>
                </Marker>
            </Map>
        </div>
    );
};

export default MyMap;