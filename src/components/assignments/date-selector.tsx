import { Box, FormControl, OutlinedInput, Typography } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function DateSelector() {
    return (
        <FormControl sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.7rem' }} required>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem' }}>
                <Typography>Fecha de inicio</Typography>
                <OutlinedInput name="date" type="date" size="small" />
            </Box>
            <CalendarMonthIcon />
        </FormControl>
    );
}