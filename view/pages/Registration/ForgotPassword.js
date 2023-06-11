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


export default function ForgotPassword() {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
        <Typography component="h1" variant="h5">
          Lupa Kata Laluan
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            id="email"
            autoComplete="current-email"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Hantar Kata Laluan
          </Button>
        </Box>
      </Box>
    </Container>
  );
}