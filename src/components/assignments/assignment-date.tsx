import { Box } from "@mui/material";
import DateSelector from "./date-selector";

export default function AssignmentDate() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', margin: '2rem 0' }}>
            <DateSelector />
            <DateSelector />
        </Box>
    )
}