'use client';

import React, { useMemo } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: -19.571878,
    lng: -65.755065
};

const Map: React.FC = () => {
    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={useMemo(() => center, [])}
                zoom={12}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default React.memo(Map);