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
import { updateProfile } from "../api/user";
import dayjs from "dayjs";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { setUser } from "../../state/action";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
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
  const marriageStatus = useSelector((state) => state.user.marriageStatus);
  const partnerIc = useSelector((state) => state.user.partnerIc)





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
  const [userMarriageStatus, setUserMarriageStatus] = useState(marriageStatus);
  const [userPartnerIc, setUserPartnerIc] = useState(partnerIc);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  // const { email } = router.query;

  const handleSubmit = async () => {
    try {
      const updatedData = {
        ic: userIc,
        name: userName,
        gender: userGender,
        phone: userPhone,
        email: userEmail,
        birth: userBirth,
        citizenship: userCitizenship,
        nationality: userNationality,
        address: userAddress,
        education: userEducation,
        income: userIncome,
        employSector: userEmploySector,
        occupation: userOccupation,
        age: userAge,
        marriageStatus: userMarriageStatus,
        partnerIc: userPartnerIc,
      };

      const updateData = await updateProfile({ email, profileData: updatedData });
      // const data = updateData.updatedData;

      if (updateData) {
        console.log('Success');
        console.log(updateData);

        const user_data = {
          ic: ic,
          name: updatedData.name,
          gender: updatedData.gender ? updatedData.gender : null,
          phone: updatedData.phone,
          email: updatedData.email,
          birth: updatedData.birth ? updatedData.birth : null,
          citizenship: updatedData.citizenship ? updatedData.citizenship : null,
          address: updatedData.address ? updatedData.address : null,
          education: updatedData.education ? updatedData.education : null,
          income: updatedData.income ? updatedData.income : null,
          nationality: updatedData.nationality ? updatedData.nationality : null,
          employSector: updatedData.employSector ? updatedData.employSector : null,
          occupation: updatedData.occupation ? updatedData.occupation : null,
          age: updatedData.age ? updatedData.age : null,
          marriageStatus: updatedData.marriageStatus ? updatedData.marriageStatus : null,
          partnerIc: updatedData.partnerIc ? updatedData.partnerIc : null,
          // login: true,
        };

        dispatch(setUser(user_data));
      } else {
        console.log('Error');
      }
    } catch (error) {
      console.log('Error:', error);
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
          Profile
        </Typography>
        <Box sx={{ mt: 3 }} >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="name"
                label="Nama"
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
                label="IC"
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
                label="No. Telefon"
                name="phone"
                autoComplete="phone"
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Jantina*</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="gender"
                  value={userGender}
                  label="Jantina"
                  name="gender"
                  onChange={(e) => setUserGender(e.target.value)}
                >
                  <MenuItem value={"Lelaki"}>Lelaki</MenuItem>
                  <MenuItem value={"Perempuan"}>Perempuan</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <FormControl>
                  <DatePicker
                    label={
                      <Grid sx={{ display: 'flex' }}>
                        Tarikh Lahir
                        <Typography>*</Typography>
                      </Grid>
                    }
                    name="birth"
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
                id="age"
                label="Umur"
                name="age"
                autoComplete="age"
                value={userAge}
                onChange={(e) => setUserAge(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="nationality"
                label="Bangsa "
                name="nationality"
                autoComplete="nationalty"
                value={userNationality}
                onChange={(e) => setUserNationality(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Warganegara*</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="citizen"
                  value={userCitizenship}
                  label="Warganegara"
                  onChange={(e) => setUserCitizenship(e.target.value)}
                >
                  <MenuItem value={"Warganegara"}>Warganegara</MenuItem>
                  <MenuItem value={"Bukan Warganegara"}>Bukan Warganegara</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="address"
                label="Alamat Rumah"
                name="address"
                autoComplete="address"
                value={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Peringkat Belajar*</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="education"
                  value={userEducation}
                  label="Peringkat Belajar"
                  onChange={(e) => setUserEducation(e.target.value)}
                >
                  <MenuItem value={""}>None</MenuItem>
                  <MenuItem value={"Diploma"}>Diploma</MenuItem>
                  <MenuItem value={"Degree"}>Degree</MenuItem>
                  <MenuItem value={"Master"}>Master</MenuItem>
                  <MenuItem value={"Phd"}>Phd</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sektor Pekerjaan*</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="employSector"
                  name="employSector"
                  value={userEmploySector}
                  label="Sektor Pekerjaan"
                  onChange={(e) => setUserEmploySector(e.target.value)}
                >
                  <MenuItem value={"Kerajaan"}>Kerajaan</MenuItem>
                  <MenuItem value={"Swasta"}>Swasta</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="occupation"
                label="Nama Pekerjaan"
                name="occupation"
                autoComplete="occupation"
                value={userOccupation}
                onChange={(e) => setUserOccupation(e.target.value)}
              />
            </Grid>
            {/* <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="EmploymentAddress"
                label=" Employment Address "
                name="employAddress"
                autoComplete="EmploymentAddress"
                value={formData.employAddress}
                onChange={handleChange}
              />
            </Grid> */}
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="Income"
                label="Pendapatan"
                name="income"
                autoComplete="Income"
                value={userIncome}
                onChange={(e) => setUserIncome(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status Kahwin</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={gender || ""}
                  label="Status Kahwin"
                  value={userMarriageStatus}
                  onChange={(e) => setUserMarriageStatus(e.target.value)}
                // onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value={"Beristeri"}>Beristeri</MenuItem>
                  <MenuItem value={"Bersuami"}>Bersuami</MenuItem>
                  <MenuItem value={"Bujang"}>Bujang</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="partnerIc"
                label="IC Pasangan"
                name="partnerIc"
                autoComplete="partnerIc"
                value={userPartnerIc}
                onChange={(e) => setUserPartnerIc(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Kemaskini
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
