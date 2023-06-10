import * as React from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
import {
    Box,
    Container,
    Button,
    Typography,
    TextField,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Stack,
    Paper,
    Divider,
    Checkbox
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";

export default function RegistrationForm() {
    const [negeri, setNegeri] = React.useState('');
    const [pekerjaan, setPekerjaan] = React.useState('');
    const [pendidikan, setPendidikan] = React.useState('');
    const [jantina, setJantina] = React.useState('');
    const [jaianegeri, setJainegeri] = React.useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [date, setDate] = useState(dayjs());
    
    const handleChangeNegeri = (event) => {
        setNegeri(event.target.value);
    };

    const handleChangePekerjaan = (event) => {
        setPekerjaan(event.target.value);
    };

    const handleChangePendidikan = (event) => {
        setPendidikan(event.target.value);
    };

    const handleChangeJantina = (event) => {
        setJantina(event.target.value);
    };

    const handleChangeJainegeri = (event) => {
        setJainegeri(event.target.value);
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <Stack spacing={2}>
            <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", mt: 10, ml: 40, mb:10}} component={Paper}>
                <Box>
                    <br />
                    <Typography variant="h4"><b>Pendaftaran Kursus Pra Perkahwinan</b></Typography>
                    <br /><br />

                    <Box align="center">
                        <Typography variant="h6">
                            <b>Borang Pendaftaran Kursus Pra Perkahwinan Islam <br />Jabatan Agama Islam Pahang</b>
                        </Typography>
                    </Box>
                    <br />

                    <Typography component="p">
                        <b>Anjuran: </b> <br />
                        <b>Tempat dan Tarikh: </b> <br />
                    </Typography>
                    <hr />

                    <br />
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid xs={6}>
                            <TextField fullWidth id="outlined-basic" label="No. Kad Pengenalan" variant="outlined" />
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            <TextField fullWidth id="outlined-basic" label="Nama Pemohon" variant="outlined" />
                            <br /><br />
                        </Grid>

                    </Grid>

                    <TextField fullWidth id="outlined-basic" label="Alamat Surat Menyurat" variant="outlined" />
                    <br /><br />

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Negeri</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={negeri}
                                    label="Negeri"
                                    onChange={handleChangeNegeri}
                                >
                                    {/* Menu Items */}
                                    <MenuItem value={10}>Pahang</MenuItem>
                                    <MenuItem value={20}>Perak</MenuItem>
                                    <MenuItem value={30}>Terengganu</MenuItem>
                                    <MenuItem value={40}>Perlis</MenuItem>
                                    <MenuItem value={50}>Selangor</MenuItem>
                                    <MenuItem value={60}>Kuala Lumpur</MenuItem>
                                    <MenuItem value={70}>Negeri Sembilan</MenuItem>
                                    <MenuItem value={80}>Johor</MenuItem>
                                    <MenuItem value={90}>Kelantan</MenuItem>
                                    <MenuItem value={100}>Kedah</MenuItem>
                                    <MenuItem value={110}>Pulau Pinang</MenuItem>
                                    <MenuItem value={120}>Melaka</MenuItem>
                                    <MenuItem value={130}>Sabah</MenuItem>
                                    <MenuItem value={140}>Sarawak</MenuItem>
                                </Select>
                            </FormControl>
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            <TextField fullWidth id="outlined-basic" label="Daerah" variant="outlined" />
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Sektor Pekerjaan</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={pekerjaan}
                                    label="Sektor Pekerjaan"
                                    onChange={handleChangePekerjaan}
                                >
                                    <MenuItem value={10}>Bekerja Sendiri</MenuItem>
                                    <MenuItem value={20}>Pesara</MenuItem>
                                    <MenuItem value={30}>Sektor Awam</MenuItem>
                                    <MenuItem value={40}>Sektor Swasta</MenuItem>
                                    <MenuItem value={50}>Tidak Bekerja</MenuItem>
                                </Select>
                            </FormControl>

                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Tahap Pendidikan</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={pendidikan}
                                    label="Tahap Pendidikan"
                                    onChange={handleChangePendidikan}
                                >
                                    <MenuItem value={10}>PHD</MenuItem>
                                    <MenuItem value={20}>MASTER</MenuItem>
                                    <MenuItem value={30}>IJAZAH</MenuItem>
                                    <MenuItem value={40}>DIPLOMA</MenuItem>
                                    <MenuItem value={50}>STPM/HSC</MenuItem>
                                    <MenuItem value={60}>SPM/MCE</MenuItem>
                                    <MenuItem value={70}>PMR/SRP/LCE</MenuItem>
                                    <MenuItem value={80}>UPSR</MenuItem>
                                </Select>
                            </FormControl>
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Jantina</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={jantina}
                                    label="Jantina"
                                    onChange={handleChangeJantina}
                                >
                                    <MenuItem value={10}>Perempuan</MenuItem>
                                    <MenuItem value={20}>Lelaki</MenuItem>
                                </Select>
                            </FormControl>
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            <TextField fullWidth id="outlined-basic" label="No. Telefon" variant="outlined" />
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            {/* Start Date*/}
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <FormControl fullWidth>
                                    <DatePicker
                                        label={<Grid sx={{ display: 'flex' }}>Cadangan Tarikh Nikah<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                        value={date}
                                        onChange={(newDate) => setDate(newDate)}
                                    />
                                </FormControl>
                            </LocalizationProvider>
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label" required>Kebenaran Jabatan Agama Islam Negeri</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={jaianegeri}
                                    label="Kebenaran Jabatan Agama Islam Negeri"
                                    onChange={handleChangeJainegeri}
                                >
                                    <MenuItem value={10}>Pahang</MenuItem>
                                    <MenuItem value={20}>Perak</MenuItem>
                                    <MenuItem value={30}>Terengganu</MenuItem>
                                    <MenuItem value={40}>Perlis</MenuItem>
                                    <MenuItem value={50}>Selangor</MenuItem>
                                    <MenuItem value={60}>Kuala Lumpur</MenuItem>
                                    <MenuItem value={70}>Negeri Sembilan</MenuItem>
                                    <MenuItem value={80}>Johor</MenuItem>
                                    <MenuItem value={90}>Kelantan</MenuItem>
                                    <MenuItem value={100}>Kedah</MenuItem>
                                    <MenuItem value={110}>Pulau Pinang</MenuItem>
                                    <MenuItem value={120}>Melaka</MenuItem>
                                    <MenuItem value={130}>Sabah</MenuItem>
                                    <MenuItem value={140}>Sarawak</MenuItem>
                                </Select>
                            </FormControl>
                            <br /><br />
                        </Grid>
                    </Grid>
                    <div>
                        <Checkbox {...label} />Saya telah membaca dan faham terma dan peraturan yang telah ditetapkan, dan bersetuju untuk menyertai Kursus Pra-Perkahwinan Islam Pahang ini.
                    </div>

                    <br />
                </Box>

                <Container sx={{ display: "", justifyContent: "center", width: "80%", height: "100%", backgroundColor: "#faf5f5" }} component={Paper}>
                    <Box>
                        <br />
                        <Typography variant='h5'><b>PEMBAYARAN YURAN KURSUS PRA PERKAHWINAN</b></Typography>
                        <br />
                        <Typography component="p">
                            Pembayaran yuran kursus Pra Perkahwinan adalah sebanyak <b>RM80.00</b>. Selepas membuat pembayaran, sila muat
                            naik resit sebagai bukti pembayaran.
                        </Typography>
                        <br /><br />

                        <Typography component="p" align="center">
                            <b>Nama Bank:</b> <br />
                            <b>No. Akaun</b> <br />
                            <b>Rujukan:</b><br />
                        </Typography>
                        <br /><br />

                        <Typography component="p"><b>Muat Naik Resit Pembayaran</b></Typography>
                        <Divider />
                        <br />

                        <div>
                            <input type="file" onChange={handleFileChange} />
                            {selectedFile && <p>Selected File: {selectedFile.name}</p>}
                        </div>
                        <br /><br />
                    </Box>
                </Container>
                <br /><br />

                <Box align="center">
                    <Button variant="contained">Kembali</Button>&nbsp;&nbsp;
                    <Button variant="contained">Hantar</Button>
                </Box>
                <br /><br />
            </Container>
        </Stack>
    );
}
