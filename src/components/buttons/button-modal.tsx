'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton, OutlinedInput } from '@mui/material';

interface ButtonModalProps {
  buttonText: string;
  buttonVariant: 'text' | 'outlined' | 'contained';
}

export default function ButtonModal({ buttonText, buttonVariant }: ButtonModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant={`${buttonVariant}`}>{buttonText}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 1rem', color: '#fff', backgroundColor: 'var(--mui-palette-primary-dark)', borderBottom: '2px solid #000', width: '100%' }}>
            <Typography variant='h6'>Punto de referencia</Typography>
            <IconButton onClick={handleClose} sx={{ color: '#fff' }}><ClearIcon /></IconButton>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'center', padding: '1.5rem' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <Typography>Nombre:</Typography>
              <OutlinedInput id="outlined-basic" placeholder="recorrido" size="small" sx={{ width: '20rem' }} />
            </Box>
            <Button variant={`${buttonVariant}`} onClick={handleClose} >Guardar</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 470,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};
