import {
  Button,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  Box,
  dividerClasses,
  FormControl
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import dayjs from "dayjs";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { createIncentive } from '../api/incentive';

export default function incentiveForm() {
  const ic = useSelector((state) => state.user.ic);
  const email = useSelector((state) => state.user.email);
  const gender = useSelector((state) => state.user.gender);
  const name = useSelector((state) => state.user.name);
  const address = useSelector((state) => state.user.address);
  const phone = useSelector((state) => state.user.phone);
  const education = useSelector((state) => state.user.education);
  const income = useSelector((state) => state.user.income);
  const nationality = useSelector((state) => state.user.nationality);
  const citizenship = useSelector((state) => state.user.citizenship);
  const birth = useSelector((state) => state.user.birth);
  const occupation = useSelector((state) => state.user.occupation);
  const employSector = useSelector((state) => state.user.employSector);
  const age = useSelector((state) => state.user.age);
  const bank = useSelector((state) => state.user.bank);
  const acc = useSelector((state) => state.user.acc);


  const [userIc, setUserIc] = useState(ic);
  const [userName, setUserName] = useState(name);
  const [userGender, setUserGender] = useState(gender);
  const [userEmail, setUserEmail] = useState(email);
  const [userAddress, setUserAddress] = useState(address);
  const [userPhone, setUserPhone] = useState(phone);
  const [userEducation, setUserEducation] = useState(education);
  const [userIncome, setUserIncome] = useState(income);
  const [userNationality, setUserNationality] = useState(nationality);
  const [userCitizenship, setUserCitizenship] = useState(citizenship);
  const [userOccupation, setUserOccupation] = useState(occupation);
  const [userEmploySector, setUserEmploySector] = useState(employSector);
  const [userBirth, setUserBirth] = useState(dayjs(birth));
  const [userAge, setUserAge] = useState(age);
  const [userBank, setUserBank] = useState(bank);
  const [userAcc, setUserAcc] = useState(acc);

  const data = {
    userIncentiveId: userName,
    bank: userBank,
    accBank: userAcc,
  }

  const handleConfirm = async () => {
    const insert = await createIncentive({ data });

    if (insert) {
      console.log(insert);
    } else {
      console.log("None");
    }

  };

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
        <Box noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
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
                value={userIc}
                onChange={(e) => setUserIc(e.target.value)}
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
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
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
                value={userAge}
                onChange={(e) => setUserAge(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <FormControl>
                  <DatePicker
                    label={<Grid sx={{ display: 'flex' }}>Tarikh Lahir<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                    value={userBirth}
                    onChange={(newDate) => setUserBirth(newDate)}
                  />
                </FormControl>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="address"
                label="Address "
                name="address"
                autoComplete="address"
                value={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
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
                value={userNationality}
                onChange={(e) => setUserNationality(e.target.value)}
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
                value={userIncome}
                onChange={(e) => setUserIncome(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="bank"
                label="Bank"
                name="bank"
                autoComplete="bank"
                value={userBank}
                onChange={(e) => setUserBank(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="bank"
                label="Akaun Bank"
                name="bank"
                autoComplete="bank"
                value={userAcc}
                onChange={(e) => setUserAcc(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleConfirm}
          >
            Kemaskini
          </Button>

        </Box>
      </Box>
    </Container>
  );
}

