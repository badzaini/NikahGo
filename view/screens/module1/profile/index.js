import { useState } from "react";
import { useRouter } from "next/router";
import {
  Button,
  TextField,
  FormControlLabel,
  Link,
  Grid,
  Typography,
  Container,
  Box,
  Checkbox,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../fbConfig";
import { registerUser } from "../../../pages/api/user";



export default function SignUp() {


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
          Profile
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
                id="gender"
                label="Gender "
                name="gender"
                autoComplete="gender"
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
                id="citizen"
                label="Citizenship"
                name="citizen"
                autoComplete="citizen"
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
                id="edu"
                label="Education Level "
                name="edu"
                autoComplete="edu"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="EmploymentSector"
                label="Employment Sector "
                name="EmploymentSector"
                autoComplete="EmploymentSector"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="OccupationName"
                label=" Occupation Name "
                name="OccupationName"
                autoComplete="OccupationName"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="EmploymentAddress"
                label=" Employment Address "
                name="EmploymentAddress"
                autoComplete="EmploymentAddress"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="WorkPlace_PhoneNum"
                label="Work Place Phone Number "
                name="WorkPlace_PhoneNum"
                autoComplete="WorkPlace_PhoneNum"
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
