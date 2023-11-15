import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Fab from '@mui/material/Fab';
import { PiStudentBold } from 'react-icons/pi';

const Progress = ({ value, icon, inside, outside }) => {

    return (
        <Box sx={{ m: 1, position: 'relative', }}>
            <Fab
                color="#bbf7d0"
                sx={{ width: '40px', height: '40px', bgcolor: `${inside}`, fontSize: '20px', position: 'relative', left: '3px', top: '3px', boxShadow: 'none' }}
            >
                { icon }
            </Fab>
            {<CircularProgress
                variant="determinate"
                value={value}
                size={58}
                sx={{
                    color: `${outside}`,
                    position: 'absolute',
                    top: -6,
                    left: -6,
                    zIndex: 1,
                    p: '2px',
                    transform: 'rotate(180deg)', 
                }}
            />}
        </Box>
    );
}

export default Progress;