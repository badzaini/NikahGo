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
import { signInWithkpAndemail } from "firebase/auth";
import { auth } from '../../../fbConfig';
import { loginUser } from '../../../pages/api/user';
import { useRouter } from 'next/router';

export default function Login() {
  const [kp, setkp] = useState("");
  const [email, setemail] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    signInWithkpAndemail(auth, kp, email)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('User exist:', user);
        async function getData() {
          if (user) {
            const result = await loginUser({ kp });
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
          Lupa Kata Laluan
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="kp"
            label="No Kad Pengenalan"
            name="kp"
            autoComplete="kp"
            autoFocus
            value={kp}
            onChange={(event) => setkp(event.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            id="email"
            autoComplete="current-email"
            value={email}
            onChange={(event) => setemail(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Hantar Kata Laluan
          </Button>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <Link href="/Registration/SignUp" variant="caption">
                Daftar
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}