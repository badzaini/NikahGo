import { useState } from 'react';
import {
  Button,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  Box
} from '@mui/material';

import RectangleIcon from '@mui/icons-material/Rectangle';
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../../../fbConfig';

export default function ConsultationForm() {

  return (
    <Container maxWidth="lg" sx={{textAlign:"center", display:"flex", justifyContent:"center"}}>
        <Box>
            <Typography variant="h3">
                <RectangleIcon fontSize='large'></RectangleIcon> Aduan / Khidmat Nasihat
            </Typography>

        </Box>
    </Container>
  );
}