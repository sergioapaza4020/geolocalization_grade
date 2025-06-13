import { Box, FormControl, Input, OutlinedInput, Typography } from "@mui/material";

export default function DateSelector() {
    return (
        <FormControl sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '3rem' }} required>
            <Typography>Fecha de inicio</Typography>
            <OutlinedInput name="date" type="date" size="small" />
        </FormControl>
    );
}