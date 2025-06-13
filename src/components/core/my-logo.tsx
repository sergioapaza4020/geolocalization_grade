import { Box, Typography } from "@mui/material";
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

interface MyLogoProps {
    white?: boolean;
}

export default function MyLogo({ white }: MyLogoProps) {
    return (
        <Box sx={{ display: 'flex', gap: '0.5rem' }}>
            <DirectionsBusIcon sx={{ color: white ? '#ffffff' : '#aaaaaa', width: '3rem', height: '3rem', alignSelf: 'center' }} />
            <hr style={{ border: '0', backgroundColor: white ? '#ffffff' : '#aaaaaa', width: '1px' }} />
            <Typography variant="h5" sx={{ color: white ? '#ffffff' : '#aaaaaa' }}>12 DE <br /> MAYO</Typography>
        </Box>
    );
}