import React from 'react';
import { Button, TextField, Box } from '@mui/material';

export default function Login() {
    return (
        <Box>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="outlined">Submit</Button>
        </Box>
    )
}
