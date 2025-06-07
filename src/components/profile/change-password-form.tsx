'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import styles from './../../styles/components/profile.module.css';

export function ChangePasswordForm(): React.JSX.Element {
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
              <label>Contraseña actual</label>
              <OutlinedInput name="password" type="password" />
            </FormControl>
            <FormControl fullWidth required>
              <label>Nueva contraseña</label>
              <OutlinedInput name="ci" />
            </FormControl>
            <FormControl fullWidth required>
              <label>Confirmar contraseña</label>
              <OutlinedInput name="phone" type="tel" />
            </FormControl>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained">Actualizar contraseña</Button>
          </CardActions>
        </Card>
      </form>
    </div>
  );
}
