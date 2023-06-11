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
        <Typography component="h1" variant="h5">
          Log Masuk
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
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
            label="Password"
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
            sx={{ mt: 3, mb: 2, bgcolor: "#F3486A" }}
          >
            Log Masuk
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 2, backgroundColor: "#1E89A0" }}
          >
            Log Masuk Kakitangan
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/Registration/SignUp" variant="caption" sx={{ marginRight: '5px' }}>
                Daftar
              </Link>
              <Link href="/Registration/ForgotPassword" variant="caption" sx={{ marginRight: '5px' }}>
                Lupa Kata Laluan?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}