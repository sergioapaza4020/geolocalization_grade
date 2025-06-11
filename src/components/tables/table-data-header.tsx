'use client';

import { Button, Card, CardContent, InputAdornment, OutlinedInput, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import * as React from "react";

interface TableDataHeaderProps {
    isDriver?: boolean;
}

export default function TableDataHeader({isDriver}: TableDataHeaderProps): React.JSX.Element {
    return (
        <>
            <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <CardContent>
                    <Typography variant="h2">Datos</Typography>
                </CardContent>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '3rem' }}>
                    <OutlinedInput id="outlined-basic" placeholder="Buscar" size="small" startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    } />
                    <Button variant="contained" sx={{ display: 'flex', gap: '0.5rem' }} href={!isDriver ? '/dashboard/profile/create-profile' : '/dashboard/drivers/create-driver' }>Nuevo <AddIcon /></Button>
                </CardContent>
            </Card>
        </>
    )
}