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
    Stack,
    TableContainer,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
    Table
} from "@mui/material";
import { grey } from "@mui/material/colors";
import dayjs from "dayjs";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import * as React from 'react';

const createData = (bil, borang, muatturun, muatnaik, operasi) => {
    return { bil, borang, muatturun, muatnaik, operasi };
};


export default function MarriageAppForm() {
    const [date, setDate] = useState(dayjs());
    const [time, setTime] = useState(dayjs());
    const [activeStep, setActiveStep] = useState(1);
    const steps = getSteps();
    const router = useRouter();

    const [selectedFile, setSelectedFile] = React.useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleDownload1 = () => {
        // Perform the file download logic here
        // For example, you can create a download link for the file
        const fileUrl = 'https://example.com/path/to/file.pdf';
        const anchorElement = document.createElement('a');
        anchorElement.href = fileUrl;
        anchorElement.target = '_blank';
        anchorElement.download = 'filename.pdf';
        anchorElement.click();
    };

    const handleDownload2 = () => {
        // Perform the file download logic here
        // For example, you can create a download link for the file
        const fileUrl = 'https://example.com/path/to/file.pdf';
        const anchorElement = document.createElement('a');
        anchorElement.href = fileUrl;
        anchorElement.target = '_blank';
        anchorElement.download = 'filename.pdf';
        anchorElement.click();
    };

    const handleDownload3 = () => {
        // Perform the file download logic here
        // For example, you can create a download link for the file
        const fileUrl = 'https://example.com/path/to/file.pdf';
        const anchorElement = document.createElement('a');
        anchorElement.href = fileUrl;
        anchorElement.target = '_blank';
        anchorElement.download = 'filename.pdf';
        anchorElement.click();
    };

    const handleDownload4 = () => {
        // Perform the file download logic here
        // For example, you can create a download link for the file
        const fileUrl = 'https://example.com/path/to/file.pdf';
        const anchorElement = document.createElement('a');
        anchorElement.href = fileUrl;
        anchorElement.target = '_blank';
        anchorElement.download = 'filename.pdf';
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
        createData('1.', 'Borang 2 [Seksyen 16] - Permohonan Untuk Kebenaran Berkahwin *', handleDownload1, '', handleUpload1),
        createData('2.', 'Borang 4 [Seksyen 13] - Persetujuan Dan Wakalah Wali *', handleDownload2, '', handleUpload2),
        createData('3.', 'Borang 1 [Seksyen 4] - Akuan Pemastautinan *', handleDownload3, '', handleUpload3),
        createData('4.', 'Borang Ujian Saringan HIV Pemohon *', handleDownload4, '', handleUpload4),
    ];
    function getSteps() {
        return ["Maklumat Pemohon", "Maklumat Pasangan", "Maklumat Perkahwinan", "Cetak Borang", "Pembayaran"];
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
                                        <Grid item xs={12}>
                                            <Box sx={{ bgcolor: "#F3486A", py: 1, color: "white" }}>
                                                <Typography sx={{ fontWeight: "bold", pl: 1 }}>Maklumat Pemohon</Typography>
                                            </Box>
                                        </Grid>
                                        <br />
                                        <TextField
                                            required
                                            fullWidth
                                            id="icpemohon"
                                            label="No. Kad Pengenalan Baru"
                                            name="icpemohon"
                                            autoComplete="icpemohon"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="namepemohon"
                                            label="Nama Pemohon"
                                            name="namepemohon"
                                            autoComplete="namepemohon"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="iclamapemohon"
                                            label="No. Kad Pengenalan Lama/Tentera/Polis"
                                            name="iclamapemohon"
                                            autoComplete="iclamapemohon"
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
                                        <TextField
                                            required
                                            fullWidth
                                            id="nationality"
                                            label="Bangsa"
                                            name="nationality"
                                            autoComplete="nationalty"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
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
                                            <InputLabel id="demo-simple-select-label">Taraf Pendidikan</InputLabel>
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
                                            <InputLabel id="demo-simple-select-label">Sektor Pekerjaan</InputLabel>
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
                                                startAdornment: <InputAdornment position="start">RM</InputAdornment>,
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
                                            <InputLabel id="demo-simple-select-label">Status Kahwin</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={gender || ""}
                                                label="Status Kahwin"
                                            // onChange={(e) => setGender(e.target.value)}
                                            >
                                                <MenuItem>Teruna/Anak Dara/Thayyib/Bujang(Mengandung)</MenuItem>
                                                <MenuItem>Beristeri</MenuItem>
                                                <MenuItem>Duda Mati Isteri/Balu</MenuItem>
                                                <MenuItem>Duda Cerai</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Status Saudara Kahwin</InputLabel>
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
                                        <Box sx={{ bgcolor: "#F3486A", py: 1, color: "white" }}>
                                            <Typography sx={{ fontWeight: "bold", pl: 1 }}>Maklumat Pemohon</Typography>
                                        </Box>
                                    </Grid>
                                    <br />
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="partnerIC"
                                            label="No. Kad Pengenalan Baru/Pasport Pasangan"
                                            name="partnerIC"
                                            autoComplete="partnerIC"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="partnerOldIC"
                                            label="No. Kad Pengenalan Lama/Tentera/Polis Pasangan"
                                            name="partnerOldIC"
                                            autoComplete="partnerOldIC"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="partnerName"
                                            label="Nama Pasangan "
                                            name="partnerName"
                                            autoComplete="partnerName"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <FormControl>
                                                <DatePicker
                                                    label={<Grid sx={{ display: 'flex' }}>Tarikh Lahir Pasangan<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
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
                                            id="partnerAge"
                                            label="Umur Pasangan"
                                            name="partnerAge"
                                            autoComplete="partnerAge"
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="partnerNationality"
                                            label="Bangsa Pasangan"
                                            name="partnerNationality"
                                            autoComplete="partnerNationality"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Warganegara Pasangan</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={gender || ""}
                                                label="Warganegara Pasangan"
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
                                            id="partnerICaddress"
                                            label="Alamat Dalam K/P Pasangan"
                                            name="partnerICaddress"
                                            autoComplete="partnerICaddress"
                                            multiline
                                            rows={3}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="partnerCurrAddress"
                                            label="Alamat Semasa Pasangan"
                                            name="partnerCurrAddress"
                                            autoComplete="partnerCurrAddress"
                                            multiline
                                            rows={3}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="partnerHP"
                                            label="No. Telefon (Rumah) Pasangan"
                                            name="partnerHP"
                                            autoComplete="partnerHP"
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="partnerMob"
                                            label="No. Telefon (Bimbit)"
                                            name="partnerMob"
                                            autoComplete="partnerMob"
                                            type="number"
                                        />
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
                                            <InputLabel id="demo-simple-select-label">Sektor Pekerjaan</InputLabel>
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
                                            id="partnerOccName"
                                            label="Pekerjaan/Jawatan Pasangan"
                                            name="partnerOccName"
                                            autoComplete="partnerOccName"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="partnerIncome"
                                            label="Pendapatan Pasangan"
                                            name="partnerIncome"
                                            autoComplete="partnerIncome"
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
                                            id="partnerOffAdd"
                                            label="Alamat Tempat Kerja Pasangan"
                                            name="partnerOffAdd"
                                            autoComplete="partnerOffAdd"
                                            multiline
                                            rows={3}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="partnerOffPhone"
                                            label="No. Telefon (Pejabat) Pasangan"
                                            name="partnerOffPhone"
                                            autoComplete="partnerOffPhone"
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Status Kahwin Pasangan</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={gender || ""}
                                                label="Status Kahwin Pasangan"
                                            // onChange={(e) => setGender(e.target.value)}
                                            >
                                                <MenuItem>Teruna/Anak Dara/Thayyib/Bujang(Mengandung)</MenuItem>
                                                <MenuItem>Beristeri</MenuItem>
                                                <MenuItem>Duda Mati Isteri/Balu</MenuItem>
                                                <MenuItem>Duda Cerai</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Status Saudara Kahwin Pasangan</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={gender || ""}
                                                label="Status Saudara Kahwin Pasangan"
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
                                            <Typography sx={{ fontWeight: "bold", pl: 1 }}>Maklumat Perkahwinan</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
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
                                    <Grid item xs={12}>
                                        {/* Display Eg: Siti Maisarah Binti Rosmah (820919065488)*/}
                                        <TextField
                                            required
                                            fullWidth
                                            id="namepemohon"
                                            label="Nama Pemohon "
                                            name="namepemohon"
                                            autoComplete="namepemohon"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        {/* Display Eg: Siti Maisarah Binti Rosmah (820919065488)*/}
                                        <TextField
                                            required
                                            fullWidth
                                            id="partnerName"
                                            label="Nama Pasangan "
                                            name="partnerName"
                                            autoComplete="partnerName"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="negara"
                                            label="Negara "
                                            name="negara"
                                            autoComplete="negara"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="negeri"
                                            label="Negeri "
                                            name="negeri"
                                            autoComplete="negara"
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Box sx={{ bgcolor: "#F3486A", py: 1, color: "white" }}>
                                            <Typography sx={{ fontWeight: "bold", pl: 1 }}>Maklumat Cadangan Majlis Akad Nikah</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <FormControl>
                                                <DatePicker
                                                    label={<Grid sx={{ display: 'flex' }}>Tarikh Akah Nikah<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                                    value={date}
                                                    onChange={(newDate) => setDate(newDate)}
                                                />
                                            </FormControl>
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="nikahAdd"
                                            label="Alamat Tempat Nikah"
                                            name="nikahAdd"
                                            autoComplete="nikahAdd"
                                            multiline
                                            rows={3}
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
                                                <MenuItem>Barang Emas</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="MasKahwin"
                                            label="Mas Kahwin (Tetapan Mas Kahwin Bagi Negeri Pahang)"
                                            name="MasKahwin"
                                            autoComplete="MasKahwin"
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
                                            id="Hantaran"
                                            label="Hantaran"
                                            name="Hantaran"
                                            autoComplete="Hantaran"
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">RM</InputAdornment>,
                                            }}
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box sx={{ bgcolor: "#F3486A", py: 1, color: "white" }}>
                                            <Typography sx={{ fontWeight: "bold", pl: 1 }}>Maklumat Wali</Typography>
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
                                    <Grid item xs={6}>
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
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="waliAge"
                                            label="Umur Wali"
                                            name="waliAge"
                                            autoComplete="waliAge"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="waliHP"
                                            label="No. Telefon Wali"
                                            name="waliHP"
                                            autoComplete="waliHP"
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="relay"
                                            label="Hubungan"
                                            name="relay"
                                            autoComplete="relay"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <FormControl>
                                                <DatePicker
                                                    label={<Grid sx={{ display: 'flex' }}>Tarikh Lahir Nikah Ibu Bapa<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
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
                                            id="noSijilNikah"
                                            label="No. Sijil Nikah Ibu Bapa"
                                            name="noSijilNikah"
                                            autoComplete="noSijilNikah"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="pelulusName"
                                            label="Nama Pelulus (Surat Sumpah)"
                                            name="pelulusName"
                                            autoComplete="pelulusName"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body" >
                                            *Nota: Sekiranya Tiada Maklumat Tarikh Nikah Ibu Bapa, Pemohon Perlu Membuat Permohonan Surat Sumpah Terlebih Dahulu Bagi Melengkapkan Permohonan
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box sx={{ bgcolor: "#F3486A", py: 1, color: "white" }}>
                                            <Typography sx={{ fontWeight: "bold", pl: 1 }}>Maklumat Saksi</Typography>
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
                                    <Grid item xs={12}>
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
                                            id="wit1HP"
                                            label="No. Telefon Wali"
                                            name="wit1HP"
                                            autoComplete="wit1HP"
                                            type="number"
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
                                    <Grid item xs={12}>
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
                                        <TextField
                                            required
                                            fullWidth
                                            id="wit2HP"
                                            label="No. Telefon Wali"
                                            name="wit2HP"
                                            autoComplete="wit2HP"
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Kategori Nikah</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={gender || ""}
                                                label="Kategori Nikah"
                                            // onChange={(e) => setGender(e.target.value)}
                                            >
                                                <MenuItem>Pernikahan Semula</MenuItem>
                                                <MenuItem>Bukan Pernikahan Semula</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                );

            case 4:
                return (
                    <Container maxWidth="md" >
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
                                            <Typography sx={{ fontWeight: "bold", pl: 1 }}>Cetak Borang</Typography>
                                        </Box>
                                    </Grid>
                                    <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", mt: 2, backgroundColor: "#faf5f5" }} component={Paper}>
                                        <Typography component="p"><br />
                                            <AnnouncementIcon sx={{ marginRight: '0.5em', fontSize: '1.2em', color: 'red' }} />
                                            <b>PENTING!</b>
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography component="p">
                                                Sila klik pada butang Hantar untuk menghantar permohonan. Untuk melengkapkan permohonan, sila muat turun dan lengkapkan <b>Borang 2 [Seksyen 16]</b>, <b>Borang 4 [Seksyen 13]</b>, <b>Borang 1 [Seksyen 4]</b>, dan <b>Borang Ujian Saringan HHIV Pemohon</b>.
                                                Dan muat naik semula borang - borang tersebut bagi proses seterusnya.<br />
                                            </Typography>
                                        </Box>
                                    </Container>


                                    <Grid item xs={12}>
                                        <Box align="center">
                                            <Typography variant="body" sx={{ fontSize: '20px', marginLeft: 4 }}>Permohonan Berkahwin</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography component="p">
                                            <b>Nama Pemohon: </b> <br /> {/* example output: ABDUL NAHIM BIN MUSAB (820919065488)*/}
                                            <b>Nama Pasangan: </b> <br /> {/* example output: SITI MAISARAH BINTI ROSMAH (750721065131)*/}
                                            <b>No. Slip Permohonan Online: </b> <br /> {/* example output: M2/2023-005494*/}
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TableContainer sx={{ minWidth: 100 }} component={Paper}>
                                            <Table sx={{ minWidth: 400 }} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell align="center"><b>Bil.</b></TableCell>
                                                        <TableCell align="center"><b>Borang</b></TableCell>
                                                        <TableCell align="center"><b>Muat Turun</b></TableCell>
                                                        <TableCell align="center"><b>Dokument yang telah dimuat naik</b></TableCell>
                                                        <TableCell align="center"><b>Operasi</b></TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rows.map((row) => (
                                                        <TableRow
                                                            key={row.bil}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                {row.bil}
                                                            </TableCell>
                                                            <TableCell align="left">{row.borang}</TableCell>
                                                            <TableCell align="center">
                                                                <Button onClick={row.muatturun} variant="contained">Download</Button>
                                                            </TableCell>
                                                            <TableCell align="center">{row.muatnaik}</TableCell>
                                                            <TableCell align="center">
                                                                <input type="file" onChange={handleFileChange} />
                                                                {selectedFile && <p>Selected File: {selectedFile.name}</p>}
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                );

            case 5:
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
                                            <Typography sx={{ fontWeight: "bold", pl: 1 }}>Pembayaran Yuran Permohonan Berkahwin</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                                            Pembayaran yuran nikah adalah sebanyak RM 80.00. Selepas
                                            membuat pembayaran, sila muat naik resit sebagai bukti pembayaran.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box sx={{ ml: 20 }}>
                                            <Typography>
                                                <b>Nama Bank: </b>Bank Islam <br />
                                                <b>No. Akaun: </b>1234567890 <br />
                                                <b>Rujukan: </b>Abdul Nahim Bin Musab<br />
                                            </Typography>
                                        </Box>

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
        router.push("/MarriageApplication/StatusTelahHantar");
    };

    return (
        <Container sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: 15, width: "100%", alignItems: "center", pb: 5 }}>
            <Box sx={{ mr: 40 }}>
                <Typography variant="h4" gutterBottom sx={{ borderLeft: "13px solid black" }}> &nbsp; Permohonan Berkahwin</Typography>
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
