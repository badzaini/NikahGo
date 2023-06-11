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
import { auth } from "../../fbConfig";
import { registerUser } from "../api/user";

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
       <Box sx={{ ml: 1, width: "100%" }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ borderLeft: "13px solid #F3486A" }}
          >
            {" "}
            &nbsp; Daftar Pengguna
          </Typography>
        </Box>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                id="email"
                label="Emel"
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
                label="Nama"
                name="name"
                autoComplete="name"
                value={name || ""}
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
                onChange={(e) => setPhone(e.target.value)}
                required
                fullWidth
                id="phone"
                label="No Telefon "
                name="phone"
                autoComplete="phone"
                value={phone || ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setIc(e.target.value)}
                required
                fullWidth
                id="ic"
                label="Kad Pengenalan "
                name="ic"
                autoComplete="ic"
                value={ic || ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                name="password"
                label="Kata Laluan"
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
            sx={{ mt: 3, mb: 2, backgroundColor: " #F3486A" }}
          >
            Daftar
          </Button>
          <Grid container justifyContent="center" >
            <Grid item>
              <Link href="/Registration/Login" variant="caption" sx={{ color: "#F3486A" }} >
                 [ Kembali ]
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
