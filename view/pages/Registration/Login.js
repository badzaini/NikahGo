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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../fbConfig';
import { loginUser } from '../api/user';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('User exist:', user);
        async function getData() {
          if (user) {
            const result = await loginUser({ email });
            console.log(result);
            console.log("Succes from db");
          } else {
            console.log("error from db");
          }
        }

        getData();
        router.push("/UserProfile/Profile");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error get user:', errorCode, errorMessage);
      });
  };

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
        <Box sx={{ ml: 1, width: "100%" }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ borderLeft: "13px solid #F3486A" }}
          >
            {" "}
            &nbsp; Log Masuk
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Emel"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Kata Laluan"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: " #F3486A" }}
          >
            Masuk
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 2, backgroundColor: "#1E89A0" }}
          >
            Log Masuk Kakitangan
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="/Registration/SignUp" variant="caption" sx={{ marginRight: '10px', color: " #F3486A"  }}>
                Daftar 
              </Link>
              <Link href="/Registration/SignUp" variant="caption" sx={{  marginRight: '10px', color: " #F3486A" }}>
                 |
              </Link>
              <Link href="/Registration/ForgotPassword" variant="caption" sx={{ marginRight: '5px', color: " #F3486A" }}>
                Lupa Kata Laluan?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}