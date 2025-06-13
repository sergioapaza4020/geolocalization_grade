'use client';

import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import AddIcon from '@mui/icons-material/Add';
import Map from './map';

// const Map = dynamic(() => import('./map'), { ssr: false });

const MapRoutePoints: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <Typography variant='h6' sx={{alignSelf: 'flex-start'}}>Puntos ruta:</Typography>
            <Map />
            <Button variant='outlined' sx={{ minWidth: '20rem' }}><AddIcon /></Button>
        </Box>
    );
};

export default React.memo(MapRoutePoints);