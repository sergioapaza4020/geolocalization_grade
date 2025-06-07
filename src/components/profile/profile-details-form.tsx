'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import styles from './../../styles/components/profile.module.css';

export function UpdateProfileForm(): React.JSX.Element {
  return (
    <div className={styles.update_form_container}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Card>
          <CardContent className={styles.form_container}>
            <FormControl fullWidth required>
              <label>Nombre</label>
              <OutlinedInput name="name" />
            </FormControl>
            <FormControl fullWidth required>
              <label>CI</label>
              <OutlinedInput name="ci" />
            </FormControl>
            <FormControl fullWidth required>
              <label>Teléfono</label>
              <OutlinedInput name="phone" type="tel" />
            </FormControl>
            <FormControl fullWidth required>
              <label>Correo electrónico</label>
              <OutlinedInput name="email" />
            </FormControl>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained">Actualizar información</Button>
          </CardActions>
        </Card>
      </form>
    </div>
  );
}
