import { Metadata } from "next";
import { config } from "@/config";
import React from "react";
import dynamic from "next/dynamic";
import { Box, Button, OutlinedInput, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ButtonModal from "@/components/buttons/button-modal";

export const metadata = { title: `Líneas y rutas | Dashboard | ${config.site.name}` } satisfies Metadata;

const Map = dynamic(() => import('../../../../components/maps/map'), { ssr: false });

export default function Page(): React.JSX.Element {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            {/* <CreateMapHeader edit /> */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <Typography>Nombre - línea:</Typography>
                    <OutlinedInput id="outlined-basic" placeholder="Nombre - línea" size="small" sx={{ width: '20rem' }} />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <Typography>Ruta:</Typography>
                        <Button variant="contained" sx={{ display: 'flex', gap: '0.5rem' }}>Punto ruta <AddIcon /></Button>
                    </Box>
                    <Button variant="contained" sx={{ display: 'flex', gap: '0.5rem' }} href="/dashboard/routes">Guardar</Button>
                </Box>
            </Box>
            <Box sx={{ border: '1px solid #000', padding: '0.4rem' }}>
                <Map />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <Typography>Puntos de referencia:</Typography>
                <ButtonModal buttonText="recorrido" buttonVariant="contained" />
                {/* <Button onClick={handleOpen} variant="contained" sx={{ display: 'flex', gap: '0.5rem' }}>recorrido <AddIcon /></Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal> */}
            </Box>
        </Box>
    )
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};