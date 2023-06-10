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
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Button variant="contained">Upload Files</Button>
            <Typography component="h1" variant="h5">
             Salinan Slip Gaji    *
             </Typography>
             </Grid>
        </Box>

        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Button variant="contained">Upload Files</Button>
            <Typography component="h1" variant="h5">
             Salinan Kad Pengenalan*
             </Typography>
             </Grid>
        </Box>

        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Button variant="contained">Upload Files</Button>
            <Typography component="h1" variant="h5">
             Salinan Catantan Akad Nikah*
             </Typography>
             </Grid>
        </Box>

        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Button variant="contained">Upload Files</Button>
            <Typography component="h1" variant="h5">
             Salinan Penyata Bank Akaun*
             </Typography>
             </Grid>
        </Box>

        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Button variant="contained">Upload Files</Button>
            <Typography component="h1" variant="h5">
            Pengesahan Bermastautin di Pahang*
             </Typography>
             </Grid>
        </Box>
        
        </Box>
     
      
        
      <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Kemaskini
            </Button>
    </Container>
  );
}


