import { useState } from "react";
import {
  Button,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  Box,
} from "@mui/material";

export default function ForgotPassword() {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
        <Box sx={{ ml: 1, width: "100%" }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ borderLeft: "13px solid #F3486A" }}
          >
            {" "}
            &nbsp; Tukar kata Laluan
          </Typography>
        </Box>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="kp"
            label="No Kad Pengenalan"
            name="kp"
            autoComplete="kp"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="currentPass"
            label="Kata Laluan Semasa"
            type="currentPass"
            id="currentPass"
            autoComplete="current-currentPass"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="newPass"
            label="Kata Laluan Baru"
            type="newPass"
            id="newPass"
            autoComplete="current-newtPass"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="rNewPass"
            label="Ulang Kata Laluan Baru"
            type="rNewPass"
            id="rNewPass"
            autoComplete="current-rNewPass"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: " #F3486A" }}
          >
            Tukar
          </Button>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item></Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
