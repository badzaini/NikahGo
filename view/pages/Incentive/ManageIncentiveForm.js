import React from 'react';
import {
  Button,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  Box,
} from '@mui/material';
import { styled } from '@mui/system';

// Define the custom styled components
const FormContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const Heading = styled(Typography)(({ theme }) => ({
  variant: 'h1',
  gutterBottom: true,
  borderLeft: '13px solid black',
}));

export default function IncentiveForm() {
  return (
    
    <Container maxWidth="md">
      
      <Box
        sx={{
          marginTop: 12,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Form Container */}
        <Heading>BORANG PEMOHON</Heading>
        <FormContainer sx={{ bgcolor: 'lightgray', p: 2 }}>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                {/* Nama */}
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Nama"
                  name="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={6}>
                {/* No. Passport/Tentera/Polis */}
                <TextField
                  required
                  fullWidth
                  id="ic"
                  label="No. Passport/Tentera/Polis"
                  name="ic"
                  autoComplete="ic"
                />
              </Grid>
              <Grid item xs={6}>
                {/* No. K/Pengenalan */}
                <TextField
                  required
                  fullWidth
                  id="identification"
                  label="No. K/Pengenalan"
                  name="identification"
                  autoComplete="identification"
                />
              </Grid>
              <Grid item xs={6}>
                {/* No. Telefon */}
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="No. Telefon"
                  name="phone"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={6}>
                {/* Umur */}
                <TextField
                  required
                  fullWidth
                  id="age"
                  label="Umur"
                  name="age"
                  autoComplete="age"
                />
              </Grid>
              <Grid item xs={6}>
                {/* Tempat Lahir */}
                <TextField
                  required
                  fullWidth
                  id="place"
                  label="Tempat Lahir"
                  name="place"
                  autoComplete="place"
                />
              </Grid>
              <Grid item xs={6}>
                {/* No. Tarikh Lahir */}
                <TextField
                  required
                  fullWidth
                  id="date"
                  label="No. Tarikh Lahir"
                  name="date"
                  autoComplete="date"
                />
              </Grid>
              <Grid item xs={6}>
                {/* Alamat Semasa */}
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Alamat Semasa"
                  name="address"
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={6}>
                {/* Kewarganegaraan */}
                <TextField
                  required
                  fullWidth
                  id="nationality"
                  label="Kewarganegaraan"
                  name="nationality"
                  autoComplete="nationalty"
                />
              </Grid>
              <Grid item xs={6}>
                {/* Pendapatan */}
                <TextField
                  required
                  fullWidth
                  id="Income"
                  label="Pendapatan"
                  name="Income"
                  autoComplete="Income"
                />
              </Grid>
              <Grid item xs={6}>
                {/* Nama Bank */}
                <TextField
                  required
                  fullWidth
                  id="bank"
                  label="Nama Bank"
                  name="bank"
                  autoComplete="bank"
                />
              </Grid>
            </Grid>
            {/* Submit Button */}
            <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
             <Button
              type="submit"
              fullWidth
               variant="contained"
               sx={{ mt: 3, mb: 2 }}
               onClick={IncentiveForm}
              >
               SETERUSNYA
             </Button>
               </Box>

                 </Box>
                </FormContainer>
              </Box>
            </Container>
  );
}
