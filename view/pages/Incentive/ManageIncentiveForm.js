import {
  Button,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  Box,
  dividerClasses
} from '@mui/material';

export default function incentiveForm() {
  return (
    

      <Container sx={{justifyContent: "center", width: "100%", height: "100%", mt: 10, ml: 40 }}>
        
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar> */}
        <Box>
                <Typography variant="h4" gutterBottom sx={{ borderLeft: "13px solid black" }}>BORANG PEMOHON</Typography>
        </Box>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
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
              <TextField
                required
                fullWidth
                id="ic"
                label="No. Passport/Tentera/Polis "
                name="ic"
                autoComplete="ic"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="identification"
                label="No. K/Pengenalan "
                name="identification"
                autoComplete="identification"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="phone"
                label="No. Telefon "
                name="phone"
                autoComplete="phone"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="age"
                label="Umor "
                name="age"
                autoComplete="age"
              />
            </Grid>
            <Grid item xs={6}>
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
              <TextField
                required
                fullWidth
                id="date"
                label="No. Tarikh Lahir "
                name="date"
                autoComplete="date"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="address"
                label="AddrAlamat Semasa "
                name="address"
                autoComplete="address"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="nationality"
                label="Kewarganegarana "
                name="nationality"
                autoComplete="nationalty"
              />
            </Grid>
            
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="Income"
                label="Pendopatan  "
                name="Income"
                autoComplete="Income"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="bank"
                label="Nama Bank  "
                name="bank"
                autoComplete="bank"
              />
            </Grid>
                
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            SETERUSNYA
          </Button>
          
        </Box>
      </Box>
      </Container>
    
  );
}

