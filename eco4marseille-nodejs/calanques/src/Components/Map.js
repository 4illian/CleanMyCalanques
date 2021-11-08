import React from 'react';
import { useEffect, useRef, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiNGlsbGlhbiIsImEiOiJja3NwNHYwNWYwMmZ4MnBvNjByODV1d2pqIn0.1eXMNIyVftITdwj7pWIviQ'

function Map() {


    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(5.22);
    const [lat, setLat] = useState(43.17);
    
    const [zoom, setZoom] = useState(9);


    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });




    return (
          <div ref={mapContainer} className="map-container" />
    );
};

export default Map;