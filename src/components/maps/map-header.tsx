'use client';

import { Button, Card, CardContent, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import * as React from "react";

interface MapHeaderProps {
    edit?: boolean;
}

export default function MapHeader({ edit }: MapHeaderProps): React.JSX.Element {
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
                        <MenuItem value='line1'>Primera parada</MenuItem>
                        <MenuItem value='line2'>Segunda parada</MenuItem>
                        <MenuItem value='line3'>Tercera parada</MenuItem>
                        <MenuItem value='line4'>Cuarta parada</MenuItem>
                        <MenuItem value='line5'>Quinta parada</MenuItem>
                        <MenuItem value='line6'>Sexta parada</MenuItem>
                        <MenuItem value='line7'>Séptima parada</MenuItem>
                    </Select>
                </CardContent>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '3rem' }}>
                    {!edit ? (
                        <>
                            <Button variant="contained" href="/dashboard/routes/edit-route">
                                Editar
                            </Button>
                            <Button variant="contained" href="/dashboard/routes/create-route" sx={{ display: 'flex', gap: '0.5rem' }}>
                                Nuevo <AddIcon />
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button variant="contained" href="/dashboard/routes">
                                Guardar
                            </Button>
                            <Button variant="contained" href="/dashboard/routes" sx={{ display: 'flex', gap: '0.5rem' }}>
                                Eliminar
                            </Button>
                        </>
                    )}
                </CardContent>
            </Card>
        </>
    )
}