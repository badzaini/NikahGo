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
import Cookies from "js-cookie";
import { auth } from '../../fbConfig';
import { loginUser } from '../api/user';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setUser } from "../../state/action";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('User exist:', user);
        async function getData() {
          const result = await loginUser({ email });
          console.log(result);

          //Cookies
          const user_data = {
            ic: result.user.ic,
            name: result.user.name,
            gender: result.user.gender,
            phone: result.user.phone,
            email: result.user.email,
            birth: result.user.birth ? result.user.birth : null,
            citizenship: result.user.citizenship ? result.user.citizenship : null,
            address: result.user.address ? result.user.address : null,
            education: result.user.education ? result.user.education : null,
            income: result.user.income ? result.user.income : null,
            nationality: result.user.nationality ? result.user.nationality : null,
            occupation: result.user.occupation ? result.user.occupation : null,
            employSector: result.user.employSector ? result.user.employSector : null,
            partnerIc: result.user.partnerIc ? result.user.partnerIc : null,
            age: result.user.age? result.user.age : null,
            marriageStatus: result.user.marriageStatus? result.user.marriageStatus : null,
          }

          dispatch(setUser(user_data));
          if (user) {
            Cookies.set("user_data", JSON.stringify(user_data));
          } else {
            console.log("Error to save in cookies");
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
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 2, backgroundColor: "#1E89A0" }}
          >
            Log Masuk Kakitangan
          </Button> */}
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