import { useState, Fragment } from "react";
import { useRouter } from 'next/router';
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
    Stack
} from "@mui/material";
import { grey } from "@mui/material/colors";
import dayjs from "dayjs";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function MarriageForm() {
    const [date, setDate] = useState(dayjs());
    const [time, setTime] = useState(dayjs());
    const [activeStep, setActiveStep] = useState(1);
    const steps = getSteps();
    const router = useRouter();

    function getSteps() {
        return ["Maklumat Suami", "Maklumat Isteri", "Maklumat Perkahwinan"];
    }

    function getStepsContent(step) {
        switch (step) {
            case 1:
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
                                        <TextField
                                            required
                                            fullWidth
                                            id="name"
                                            label="Nama"
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
                                    <Grid item xs={6}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <FormControl>
                                                <DatePicker
                                                    label={<Grid sx={{ display: 'flex' }}>Tarikh Lahir<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                                    value={date}
                                                    onChange={(newDate) => setDate(newDate)}
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
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="nationality"
                                            label="Bangsa"
                                            name="nationality"
                                            autoComplete="nationalty"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Warganegara</InputLabel>
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
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Taraf Pendidikan</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={gender || ""}
                                                label="Taraf Pendidikan"
                                            // onChange={(e) => setGender(e.target.value)}
                                            >
                                                <MenuItem>Ijazah</MenuItem>
                                                <MenuItem>Diploma</MenuItem>
                                                <MenuItem>Master</MenuItem>
                                                <MenuItem>Phd</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Sektor Pekerjaan</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={gender || ""}
                                                label="Sektor Pekerjaan"
                                            // onChange={(e) => setGender(e.target.value)}
                                            >
                                                <MenuItem>Kerajaan</MenuItem>
                                                <MenuItem>Swasta</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="OccupationName"
                                            label="Nama Pekerjaan"
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
                                                startAdornment: <InputAdornment position="start">RM</InputAdornment>,
                                            }}
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="address"
                                            label="Alamat "
                                            name="address"
                                            autoComplete="address"
                                            multiline
                                            rows={3}
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
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Status Perkahwinan</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={gender || ""}
                                                label="Status Perkahwinan"
                                            // onChange={(e) => setGender(e.target.value)}
                                            >
                                                <MenuItem>Bujang</MenuItem>
                                                <MenuItem>Duda</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                );

            case 2:
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
                                        <TextField
                                            required
                                            fullWidth
                                            id="name"
                                            label="Nama"
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
                                    <Grid item xs={6}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <FormControl>
                                                <DatePicker
                                                    label={<Grid sx={{ display: 'flex' }}>Tarikh Lahir<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                                    value={date}
                                                    onChange={(newDate) => setDate(newDate)}
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
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="nationality"
                                            label="Bangsa"
                                            name="nationality"
                                            autoComplete="nationalty"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Warganegara</InputLabel>
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
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Taraf Pendidikan</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={gender || ""}
                                                label="Taraf Pendidikan"
                                            // onChange={(e) => setGender(e.target.value)}
                                            >
                                                <MenuItem>Ijazah</MenuItem>
                                                <MenuItem>Diploma</MenuItem>
                                                <MenuItem>Master</MenuItem>
                                                <MenuItem>Phd</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Sektor Pekerjaan</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={gender || ""}
                                                label="Sektor Pekerjaan"
                                            // onChange={(e) => setGender(e.target.value)}
                                            >
                                                <MenuItem>Kerajaan</MenuItem>
                                                <MenuItem>Swasta</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="OccupationName"
                                            label="Nama Pekerjaan"
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
                                                startAdornment: <InputAdornment position="start">RM</InputAdornment>,
                                            }}
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="address"
                                            label="Alamat "
                                            name="address"
                                            autoComplete="address"
                                            multiline
                                            rows={3}
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
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Status Perkahwinan</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={gender || ""}
                                                label="Status Perkahwinan"
                                            // onChange={(e) => setGender(e.target.value)}
                                            >
                                                <MenuItem>Bujang</MenuItem>
                                                <MenuItem>Janda</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                );
            case 3:
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
                                        <Box sx={{ bgcolor: "#F3486A", py: 1, color: "white" }}>
                                            <Typography sx={{ fontWeight: "bold", pl: 1 }}>Butiran Perkahwinan</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography sx={{ fontWeight: "bold" }}>Nama Suami: </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography sx={{ fontWeight: "bold", mb: 1 }}>Nama Isteri: </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <FormControl>
                                                <DatePicker
                                                    label={<Grid sx={{ display: 'flex' }}>Tarikh Akad Nikah<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                                    value={date}
                                                    onChange={(newDate) => setDate(newDate)}
                                                />
                                            </FormControl>
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <FormControl>
                                                <TimePicker
                                                    label={<Grid sx={{ display: 'flex' }}>Masa Akad Nikah<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                                    value={time}
                                                    onChange={(newTime) => setTime(newTime)}
                                                />
                                            </FormControl>
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="marriagePlace"
                                            label="Tempat Akad Nikah"
                                            name="marriagePlace"
                                            autoComplete="marriagePlace"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Jenis Mas Kahwin</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={gender || ""}
                                                label="Jenis Mas Kahwin"
                                            // onChange={(e) => setGender(e.target.value)}
                                            >
                                                <MenuItem>Tunai</MenuItem>
                                                <MenuItem>Barang Kemas</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="dowry"
                                            label="Mas Kahwin"
                                            name="dowry"
                                            autoComplete="dowry"
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">RM</InputAdornment>,
                                            }}
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="dowry"
                                            label="Hantaran Kahwin"
                                            name="dowry"
                                            autoComplete="dowry"
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">RM</InputAdornment>,
                                            }}
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="otherGifts"
                                            label="Pemberian Lain"
                                            name="otherGifts"
                                            autoComplete="otherGifts"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="matchmaker"
                                            label="Nama Jurunikah"
                                            name="matchmaker"
                                            autoComplete="matchmaker"
                                        />
                                    </Grid>


                                    <Grid item xs={12}>
                                        <Box sx={{ bgcolor: "#F3486A", py: 1, color: "white" }}>
                                            <Typography sx={{ fontWeight: "bold", pl: 1 }}>Butiran Wali</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="waliName"
                                            label="Nama Wali"
                                            name="waliName"
                                            autoComplete="waliName"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="waliIc"
                                            label="IC Wali"
                                            name="waliIc"
                                            autoComplete="waliIc"
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="waliAddress"
                                            label="Alamat Wali"
                                            name="waliAddress"
                                            autoComplete="waliAddress"
                                            multiline
                                            rows={3}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <FormControl>
                                                <DatePicker
                                                    label={<Grid sx={{ display: 'flex' }}>Tarikh Lahir Wali<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                                    value={date}
                                                    onChange={(newDate) => setDate(newDate)}
                                                />
                                            </FormControl>
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="waliAge"
                                            label="Umur Wali"
                                            name="waliAge"
                                            autoComplete="waliAge"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="relay"
                                            label="Hubungan"
                                            name="relay"
                                            autoComplete="relay"
                                        />
                                    </Grid>


                                    <Grid item xs={12}>
                                        <Box sx={{ bgcolor: "#F3486A", py: 1, color: "white" }}>
                                            <Typography sx={{ fontWeight: "bold", pl: 1 }}>Butiran Saksi</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="wit1Name"
                                            label="Nama Saksi(1)"
                                            name="wit1Name"
                                            autoComplete="wit1Name"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="wit1Ic"
                                            label="IC Saksi(1)"
                                            name="wit1Ic"
                                            autoComplete="wit1Ic"
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="wit1Age"
                                            label="Umur Saksi(1)"
                                            name="wit1Age"
                                            autoComplete="wit1Age"
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="wit1Address"
                                            label="Alamat Saksi(1)"
                                            name="wit1Address"
                                            autoComplete="wit1Address"
                                            multiline
                                            rows={3}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="wit2Name"
                                            label="Nama Saksi(2)"
                                            name="wit2Name"
                                            autoComplete="wit2Name"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="wit2Ic"
                                            label="IC Saksi(2)"
                                            name="wit2Ic"
                                            autoComplete="wit2Ic"
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="wit2Age"
                                            label="Umur Saksi(2)"
                                            name="wit2Age"
                                            autoComplete="wit2Age"
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="wit2Address"
                                            label="Alamat Saksi(2)"
                                            name="wit2Address"
                                            autoComplete="wit2Address"
                                            multiline
                                            rows={3}
                                        />
                                    </Grid>


                                    <Grid item xs={12}>
                                        <Box sx={{ bgcolor: "#F3486A", py: 1, color: "white" }}>
                                            <Typography sx={{ fontWeight: "bold", pl: 1 }}>Pembayaran Nikah</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                                            Pembayaran yuran nikah adalah sebanyak RM 5.00. Selepas
                                            membuat pembayaran, sila muat naik resit sebagai bukti pembayaran.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack direction="row" spacing={1}>
                                            <Typography sx={{ fontWeight: "bold" }}>
                                                Nama Bank:
                                            </Typography>
                                            <Typography>
                                                Bank Islam
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack direction="row" spacing={1}>
                                            <Typography sx={{ fontWeight: "bold" }}>
                                                No. Akaun:
                                            </Typography>
                                            <Typography>
                                                1234567890
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                                            Muat naik resit pembayaran*
                                        </Typography>
                                        <Button disableElevation="true" variant="contained" size="small" sx={{
                                            bgcolor: "white", color: "black", fontWeight: "bold", border: "1px solid black", '&:hover': {
                                                backgroundColor: grey[300],
                                            }
                                        }}>
                                            Muat Naik
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                );
        }
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleConfirm = () => {
        router.push("/MarriageRegistration/Request");
    };

    return (
        <Container sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: 15, width: "100%", alignItems: "center", pb: 5 }}>
            <Box>
                <Typography variant="h4" gutterBottom sx={{ borderLeft: "13px solid black" }}>Permohonan Pendaftaran Perkahwinan</Typography>
            </Box>
            <Stepper
                alternativeLabel
                activeStep={activeStep - 1}
                sx={{ width: 800, py: 3 }}
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Paper sx={{ py: 3, borderRadius: 4 }}>
                {getStepsContent(activeStep)}
            </Paper>
            {activeStep === steps.length ? (
                <Fragment>
                    <Box
                        sx={{
                            py: 2,
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Button
                            variant="contained"
                            onClick={handleConfirm}
                        >
                            Selesai
                        </Button>
                    </Box>
                </Fragment>
            ) : (
                <Fragment>
                    <Box
                        sx={{
                            py: 2,
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Button
                            disabled={activeStep === 1}
                            onClick={handleBack}
                            variant="outlined"
                            sx={{
                                mx: 1,
                            }}
                        >
                            Kembali
                        </Button>

                        <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{
                                mx: 1,
                            }}
                        >
                            Teruskan
                        </Button>
                    </Box>
                </Fragment>
            )}
        </Container>
    )
}
