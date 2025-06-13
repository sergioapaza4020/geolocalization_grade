import { Box, FormControl, OutlinedInput, Typography } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface DateSelectorProps {
    text: string;
}

export default function DateSelector({ text }: DateSelectorProps) {
    return (
        <FormControl sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.7rem' }} required>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem' }}>
                <Typography variant="h6">{text}</Typography>
                <OutlinedInput name="date" type="date" size="small" />
            </Box>
            <CalendarMonthIcon />
        </FormControl>
    );
}