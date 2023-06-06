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
    <Container maxWidth="xs">
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
        <Typography component="h1" variant="h5">
        Insentif Khas - incentiveForm
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="ic"
                label="IC "
                name="ic"
                autoComplete="ic"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="identification"
                label="Identification Number "
                name="identification"
                autoComplete="identification"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="phone"
                label="Phone Number "
                name="phone"
                autoComplete="phone"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="age"
                label="Age "
                name="age"
                autoComplete="age"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="place"
                label="Place Of Birth"
                name="place"
                autoComplete="place"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="date"
                label="Date Of Birth "
                name="date"
                autoComplete="date"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="address"
                label="Address "
                name="address"
                autoComplete="address"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="nationality"
                label="Nationality "
                name="nationality"
                autoComplete="nationalty"
              />
            </Grid>
            
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="Income"
                label="Income  "
                name="Income"
                autoComplete="Income"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="bank"
                label="Bank Name  "
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
            Kemaskini
          </Button>
          
        </Box>
      </Box>
    </Container>
  );
}

