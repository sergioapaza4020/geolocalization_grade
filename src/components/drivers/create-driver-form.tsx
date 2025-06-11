'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { CardHeader, InputLabel, Link, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';

export function CreateDriverForm(): React.JSX.Element {
    const [car, setCar] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCar(event.target.value as string);
    };
    return (
        <div>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                }}
            >
                <Card sx={{ padding: '1.8rem' }}>
                    <Typography variant='h3'>Datos del conductor</Typography>
                    <CardContent sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.8rem 3rem' }}>
                        <FormControl sx={{ display: 'grid', gridTemplateColumns: '0.2fr 1.8fr', alignItems: 'center', gap: '1rem' }} fullWidth required>
                            <label>Nombre</label>
                            <OutlinedInput size='small' fullWidth name="name" />
                        </FormControl>
                        <FormControl sx={{ display: 'grid', gridTemplateColumns: '0.2fr 1.8fr', alignItems: 'center', gap: '1rem' }} fullWidth required>
                            <label>Email</label>
                            <OutlinedInput size='small' fullWidth name="email" type='email' />
                        </FormControl>
                        <FormControl sx={{ display: 'grid', gridTemplateColumns: '0.2fr 1.8fr', alignItems: 'center', gap: '1rem' }} fullWidth required>
                            <label>CI</label>
                            <OutlinedInput size='small' fullWidth name="ci" />
                        </FormControl>
                        <FormControl sx={{ display: 'grid', gridTemplateColumns: '0.2fr 1.8fr', alignItems: 'center', gap: '1rem' }} fullWidth required>
                            <label>Teléfono</label>
                            <OutlinedInput size='small' fullWidth name="phone" type="tel" />
                        </FormControl>
                    </CardContent>

                    <Typography variant='h3'>Datos del vehículo</Typography>
                    <CardContent sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.8rem 3rem' }}>
                        <FormControl sx={{ display: 'grid', gridTemplateColumns: '0.2fr 1.8fr', alignItems: 'center', gap: '1rem' }} fullWidth required>
                            <label>Vehículo</label>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={car}
                                onChange={handleChange}
                                size='small'
                            >
                                <MenuItem value='car1'>car 1</MenuItem>
                                <MenuItem value='car2'>car 2</MenuItem>
                                <MenuItem value='car3'>car 3</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ display: 'grid', gridTemplateColumns: '0.2fr 1.8fr', alignItems: 'center', gap: '1rem' }} fullWidth required>
                            <label>Matrícula</label>
                            <OutlinedInput size='small' fullWidth name="carId" />
                        </FormControl>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button variant="contained">Registrar</Button>
                    </CardActions>
                    <Typography>Usuario y contraseña: CI predefinido</Typography>
                </Card>
            </form>
        </div>
    );
}
