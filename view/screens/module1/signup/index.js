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
  MenuItem,
  FormControl
} from "@mui/material";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../fbConfig";
import { registerUser } from "../../../pages/api/user";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [ic, setIc] = useState();
  const [phone, setPhone] = useState();
  const [gender, setGender] = useState();
  const [password, setPassword] = useState();

  const router = useRouter();
  const data = {
    email: email,
    name: name,
    ic: ic,
    phone: phone,
    gender: gender,
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User created:", user);
        // ...
        async function insertData() {
          if (user) {
            const result = await registerUser({ data });
            console.log(result);
            console.log("Succes to db");
          } else {
            console.log("error to db");
          }
        }

        insertData();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error creating user:", errorCode, errorMessage);
        // ..
      });

    router.push("/Registration/Login");
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar> */}
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email || ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setName(e.target.value)}
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                value={name || ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setIc(e.target.value)}
                required
                fullWidth
                id="ic"
                label="IC "
                name="ic"
                autoComplete="ic"
                value={ic || ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setPhone(e.target.value)}
                required
                fullWidth
                id="phone"
                label="Phone Number "
                name="phone"
                autoComplete="phone"
                value={phone || ""}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin='normal'>
                <InputLabel id="demo-simple-select-label">Gender*</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender || ""}
                  label="Gender"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value={""}>None</MenuItem>
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password || ""}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/Registration/Login" variant="caption">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
