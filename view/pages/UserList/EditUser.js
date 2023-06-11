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
  InputAdornment,
  Stack,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Table,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import * as React from "react";
import PageviewIcon from "@mui/icons-material/Pageview";
import Image from "next/image";

const createData = (bil, borang, muatturun, muatnaik, operasi) => {
  return { bil, borang, muatturun, muatnaik, operasi };
};

{
  /*The VIEW Uploaded Doc Button */
}
const handleConfirmViewDoc1 = () => {
  router.push("");
};

{
  /*The VIEW Uploaded Doc Button */
}
const handleConfirmViewDoc2 = () => {
  router.push("");
};

{
  /*The VIEW Uploaded Doc Button */
}
const handleConfirmViewDoc3 = () => {
  router.push("");
};

{
  /*The VIEW Uploaded Doc Button */
}
const handleConfirmViewDoc4 = () => {
  router.push("");
};

export default function AdminMarriageAppForm() {
  const [date, setDate] = useState(dayjs());
  const [activeStep, setActiveStep] = useState(1);

  const router = useRouter();

  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDownload1 = () => {
    // Perform the file download logic here
    // For example, you can create a download link for the file
    const fileUrl = "https://example.com/path/to/file.pdf";
    const anchorElement = document.createElement("a");
    anchorElement.href = fileUrl;
    anchorElement.target = "_blank";
    anchorElement.download = "filename.pdf";
    anchorElement.click();
  };

  const handleDownload2 = () => {
    // Perform the file download logic here
    // For example, you can create a download link for the file
    const fileUrl = "https://example.com/path/to/file.pdf";
    const anchorElement = document.createElement("a");
    anchorElement.href = fileUrl;
    anchorElement.target = "_blank";
    anchorElement.download = "filename.pdf";
    anchorElement.click();
  };

  const handleDownload3 = () => {
    // Perform the file download logic here
    // For example, you can create a download link for the file
    const fileUrl = "https://example.com/path/to/file.pdf";
    const anchorElement = document.createElement("a");
    anchorElement.href = fileUrl;
    anchorElement.target = "_blank";
    anchorElement.download = "filename.pdf";
    anchorElement.click();
  };

  const handleDownload4 = () => {
    // Perform the file download logic here
    // For example, you can create a download link for the file
    const fileUrl = "https://example.com/path/to/file.pdf";
    const anchorElement = document.createElement("a");
    anchorElement.href = fileUrl;
    anchorElement.target = "_blank";
    anchorElement.download = "filename.pdf";
    anchorElement.click();
  };

  const handleUpload1 = () => {
    // Perform the file upload logic here
    // For example, you can use FormData and send it to the server
  };

  const handleUpload2 = () => {
    // Perform the file upload logic here
    // For example, you can use FormData and send it to the server
  };

  const handleUpload3 = () => {
    // Perform the file upload logic here
    // For example, you can use FormData and send it to the server
  };

  const handleUpload4 = () => {
    // Perform the file upload logic here
    // For example, you can use FormData and send it to the server
  };

  const rows = [
    createData(
      "1.",
      "Borang 2 [Seksyen 16] - Permohonan Untuk Kebenaran Berkahwin *",
      handleDownload1,
      "",
      handleUpload1
    ),
    createData(
      "2.",
      "Borang 4 [Seksyen 13] - Persetujuan Dan Wakalah Wali *",
      handleDownload2,
      "",
      handleUpload2
    ),
    createData(
      "3.",
      "Borang 1 [Seksyen 4] - Akuan Pemastautinan *",
      handleDownload3,
      "",
      handleUpload3
    ),
    createData(
      "4.",
      "Borang Ujian Saringan HIV Pemohon *",
      handleDownload4,
      "",
      handleUpload4
    ),
  ];

  function getStepsContent(step) {
    return (
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box component="form" noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <br />
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="ic"
                  label="IC "
                  name="ic"
                  autoComplete="ic"
                />
              </Grid>
              <Grid item xs={12}>
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
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Jantina</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={gender || ""}
                    label="Jantina"
                    // onChange={(e) => setGender(e.target.value)}
                  >
                    <MenuItem>Perempuan</MenuItem>
                    <MenuItem>Lelaki</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <FormControl>
                    <DatePicker
                      label={
                        <Grid sx={{ display: "flex" }}>
                          Tarikh Lahir
                          <Typography sx={{ color: "red" }}>*</Typography>
                        </Grid>
                      }
                      value={date}
                      onChange={(newDate) => setDate(newDate)}
                    />
                  </FormControl>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  required
                  fullWidth
                  id="nationality"
                  label="Bangsa"
                  name="nationality"
                  autoComplete="nationalty"
                />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Warganegara
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={gender || ""}
                    label="Warganegara"
                    // onChange={(e) => setGender(e.target.value)}
                  >
                    <MenuItem>Warganegara</MenuItem>
                    <MenuItem>Bukan Warganegara</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="icaddress"
                  label="Alamat Dalam K/P"
                  name="icaddress"
                  autoComplete="icaddress"
                  multiline
                  rows={3}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="addresssemasa"
                  label="Alamat Semasa"
                  name="addresssemasa"
                  autoComplete="addresssemasa"
                  multiline
                  rows={3}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="hphone"
                  label="No. Telefon (Rumah)"
                  name="hphone"
                  autoComplete="hphone"
                  type="hphone"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="No. Telefon (Bimbit)"
                  name="phone"
                  autoComplete="phone"
                  type="number"
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Taraf Pendidikan
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={gender || ""}
                    label="Taraf Pendidikan"
                    // onChange={(e) => setGender(e.target.value)}
                  >
                    <MenuItem>PHD</MenuItem>
                    <MenuItem>MASTER</MenuItem>
                    <MenuItem>IJAZAH</MenuItem>
                    <MenuItem>DIPLOMA</MenuItem>
                    <MenuItem>STPM/HSC</MenuItem>
                    <MenuItem>SPM/MCE</MenuItem>
                    <MenuItem>PMR/SRP/LCE</MenuItem>
                    <MenuItem>UPSR</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Sektor Pekerjaan
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={gender || ""}
                    label="Sektor Pekerjaan"
                    // onChange={(e) => setGender(e.target.value)}
                  >
                    <MenuItem>Bekerja Sendiri</MenuItem>
                    <MenuItem>Pesara</MenuItem>
                    <MenuItem>Sektor Awam</MenuItem>
                    <MenuItem>Sektor Swasta</MenuItem>
                    <MenuItem>Tidak Bekerja</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="OccupationName"
                  label="Pekerjaan/Jawatan"
                  name="OccupationName"
                  autoComplete="OccupationName"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="Income"
                  label="Pendapatan"
                  name="Income"
                  autoComplete="Income"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">RM</InputAdornment>
                    ),
                  }}
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="addresspejabat"
                  label="Alamat Tempat Kerja"
                  name="addresspejabat"
                  autoComplete="addresspejabat"
                  multiline
                  rows={3}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="pejabatel"
                  label="No. Telefon (Pejabat)"
                  name="pejabatel"
                  autoComplete="pejabatel"
                  type="number"
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Status Kahwin
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={gender || ""}
                    label="Status Kahwin"
                    // onChange={(e) => setGender(e.target.value)}
                  >
                    <MenuItem>
                      Teruna/Anak Dara/Thayyib/Bujang(Mengandung)
                    </MenuItem>
                    <MenuItem>Beristeri</MenuItem>
                    <MenuItem>Duda Mati Isteri/Balu</MenuItem>
                    <MenuItem>Duda Cerai</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Status Saudara Kahwin
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={gender || ""}
                    label="Status Saudara Kahwin"
                    // onChange={(e) => setGender(e.target.value)}
                  >
                    <MenuItem>Ya</MenuItem>
                    <MenuItem>Tidak</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  {
    /* save Edited Info*/
  }
  const handleSave = () => {
    router.push("");
  };

  const handleConfirm = () => {
    router.push("/MarriageApplication/AdminSenaraiPemohon");
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
      <Box sx={{ ml:2 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ borderLeft: "13px solid #1E89A0" }}
        >
          {" "}
          &nbsp; Profil - Kemaskini Maklumat Pengguna
        </Typography>
      </Box>
      <Stepper
        alternativeLabel
        activeStep={activeStep - 1}
        sx={{ width: 800, py: 3 }}
      ></Stepper>
      <Paper sx={{ py: 3, borderRadius: 4 }}>
        {getStepsContent(activeStep)}
      </Paper>

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
              backgroundColor: " #1E89A0",
            }}
          >
            Kemaskini
          </Button>
        </Box>
      </Fragment>
    </Container>
  );
}
