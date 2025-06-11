'use client';

import { Button, Card, CardContent, InputAdornment, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import * as React from "react";

export default function MapHeader(): React.JSX.Element {
    const [route, setRoute] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setRoute(event.target.value as string);
    };
    return (
        <>
            <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <CardContent sx={{ display: 'flex', gap: '2rem' }}>
                    <Typography variant="h3">Líneas</Typography>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={route}
                        onChange={handleChange}
                        size='small'
                        sx={{ width: '14rem' }}
                    >
                        <MenuItem value='line1'>line 1</MenuItem>
                        <MenuItem value='line2'>line 2</MenuItem>
                        <MenuItem value='line3'>line 3</MenuItem>
                    </Select>
                </CardContent>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '3rem' }}>
                    <Button variant="contained">Editar</Button>
                    <Button variant="contained" sx={{ display: 'flex', gap: '0.5rem' }}>Nuevo <AddIcon /></Button>
                </CardContent>
            </Card>
        </>
    )
}