import { useState, Fragment } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Typography,
  Button,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Container,
  TextField,
  FormControl,
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

export default function Profile() {
  const router = useRouter();
  const { email } = router.query;

  const [formData, setFormData] = useState({
    name: "",
    ic: "",
    phone: "",
    gender: "",
    birth: "",
    nationality: "",
    citizen: "",
    address: "",
    education: "",
    employSector: "",
    occupation: "",
    employAddress: "",
    income: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateProfile({ email, profileData: formData });
      // Handle the response and any necessary actions
      console.log(response);
    } catch (error) {
      // Handle any errors
      console.error(error);
    }

  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        mt: 15,
        width: "100%",
        alignItems: "center",
        pb: 5,
      }}
    >
      <Box sx={{ mr: 61 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ borderLeft: "13px solid #F3486A" }}
        >
          {" "}
          &nbsp; Profil
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="name"
                label="Nama"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.ic}
                onChange={handleChange}
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
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Jantina*</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.gender}
                  label="Jantina"
                  name="gender"
                  onChange={handleChange}
                >
                  <MenuItem value={""}>None</MenuItem>
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
                    value={formData.birth}
                    onChange={(newDate) =>
                      handleChange({
                        target: {
                          name: "birth",
                          value: newDate,
                        },
                      })
                    }
                  />
                </FormControl>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="nationality"
                label="Bangsa "
                name="nationality"
                autoComplete="nationalty"
                value={formData.nationality}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Warganegara*</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="citizen"
                  value={formData.citizen}
                  label="Warganegara"
                  onChange={handleChange}
                >
                  <MenuItem value={""}>None</MenuItem>
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
                value={formData.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Peringkat Belajar*</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="education"
                  value={formData.education}
                  label="Peringkat Belajar"
                  onChange={handleChange}
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
                  id="demo-simple-select"
                  name="employSector"
                  value={formData.employSector}
                  label="Sektor Pekerjaan"
                  onChange={handleChange}
                >
                  <MenuItem value={""}>None</MenuItem>
                  <MenuItem value={"Kerajaan"}>Kerajaan</MenuItem>
                  <MenuItem value={"Swasta"}>Swasta</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="OccupationName"
                label="Nama Pekerjaan"
                name="occupation"
                autoComplete="OccupationName"
                value={formData.occupation}
                onChange={handleChange}
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
                value={formData.income}
                onChange={handleChange}
              />
            </Grid>

      <Fragment>
        <Box
          sx={{
            py: 2,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        ></Box>

        <Box
          sx={{
            py: 2,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={handleSave}
            variant="contained"
            sx={{
              mx: 1,
              backgroundColor: " #F3486A",
            }}
          >
            Kemaskini
          </Button>
        </Box>
      </Fragment>
    </Container>
  );
}
