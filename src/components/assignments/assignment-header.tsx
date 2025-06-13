import { Button, Card, CardContent, InputAdornment, OutlinedInput, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function AssignmentHeader() {
    return (
        <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <CardContent>
                <Typography variant="h3">Datos</Typography>
            </CardContent>
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                <OutlinedInput id="outlined-basic" placeholder="Buscar" size="small" startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                } />
                <Button variant="contained" sx={{ display: 'flex', gap: '0.5rem' }}>Asignar</Button>
            </CardContent>
        </Card>
    );
}