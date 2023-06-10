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
    Paper
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import AnnouncementIcon from '@mui/icons-material/Announcement';

export default function MAPartner() {
    const [kategorinikah, setKategoriNikah] = React.useState('');
    const [date, setDate] = useState(dayjs());

    const handleChangeKategoriNikah = (event) => {
        setKategoriNikah(event.target.value);
    };

    return (
        <Stack spacing={2}>
            <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", mt: 10, ml: 40, mb: 10 }} component={Paper}>
                <Box>
                    <br />
                    <Typography variant="h4"><b>Permohonan Berkahwin - Maklumat Perkahwinan</b></Typography>
                    <br /><br />

                    <Box align="center">
                        <Typography variant="h5">
                            <b>Maklumat Perkahwinan</b>
                        </Typography>
                    </Box>
                    <br />

                    <Typography component="p">
                        <b>MAKLUMAT PEMOHON</b> &nbsp;&nbsp;
                        <b>MAKLUMAT PASANGAN</b> &nbsp;&nbsp;
                        <b>MAKLUMAT PERKAHWINAN</b> &nbsp;&nbsp;
                    </Typography>
                    <hr />

                    {/* Maklumat Perkahwinan*/}
                    <Box sx={{ marginTop: 2, bgcolor: '#49516F', color: 'white', width: 300, height: 30, borderRadius: 1 }}>
                        <Typography variant="body" sx={{ fontSize: '20px', marginLeft: 6 }}>
                            Maklumat Perkahwinan
                        </Typography>
                    </Box>
                    <br />

                    <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", backgroundColor: "#faf5f5" }} component={Paper}>
                        <br />

                        {/* Birthday*/}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <FormControl fullWidth>
                                <DatePicker
                                    label={<Grid sx={{ display: 'flex' }}>Tarikh Mohon<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                    value={date}
                                    onChange={(newDate) => setDate(newDate)}
                                />
                            </FormControl>
                        </LocalizationProvider>
                        <br /><br />

                        <TextField fullWidth id="outlined-basic" label="Nama Pemohon" variant="outlined" required />
                        <br /><br />

                        <TextField fullWidth id="outlined-basic" label="Nama Pasangan" variant="outlined" required />
                        <br /><br />

                        <TextField fullWidth id="outlined-basic" label="Tempat Kahwin" variant="outlined" required />
                        <br /><br />

                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={6}>
                                <TextField fullWidth id="outlined-basic" label="Negara" variant="outlined" required />
                                <br /><br />
                            </Grid>

                            <Grid xs={6}>
                                <TextField fullWidth id="outlined-basic" label="Negeri" variant="outlined" required />
                                <br /><br />
                            </Grid>
                        </Grid>
                    </Container>
                    <br />

                    {/* Maklumat Cadangan Majlis Akad Nikah*/}
                    <Box sx={{ marginTop: 2, bgcolor: '#49516F', color: 'white', width: 450, height: 30, borderRadius: 1 }}>
                        <Typography variant="body" sx={{ fontSize: '20px', marginLeft: 6 }}>
                            Maklumat Cadangan Majlis Akad Nikah
                        </Typography>
                    </Box>
                    <br />

                    <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", backgroundColor: "#faf5f5" }} component={Paper}>
                        <br />

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <FormControl fullWidth>
                                <DatePicker
                                    label={<Grid sx={{ display: 'flex' }}>Tarikh Akad Nikah<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                    value={date}
                                    onChange={(newDate) => setDate(newDate)}
                                />
                            </FormControl>
                        </LocalizationProvider>
                        <br /><br />

                        <TextField fullWidth id="outlined-basic" label="Alamat Tempat Nikah" variant="outlined" required />
                        <br /><br />

                        <TextField fullWidth id="outlined-basic" label="Jenis Mas Kahiwn" variant="outlined" required />
                        <br /><br />

                        <TextField fullWidth id="outlined-basic" label="Mas Kahwin (Tetapan Mas Kahwin Bagi Negeri Pahang)" variant="outlined" required />
                        <br /><br />

                        <TextField fullWidth id="outlined-basic" label="Hantaran" variant="outlined" required />
                        <br /><br />
                    </Container>

                    <br />
                    {/* Maklumat Wali*/}
                    <Box sx={{ marginTop: 2, bgcolor: '#49516F', color: 'white', width: 250, height: 30, borderRadius: 1 }}>
                        <Typography variant="body" sx={{ fontSize: '20px', marginLeft: 6 }}>
                            Maklumat Wali
                        </Typography>
                    </Box>
                    <br />

                    <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", backgroundColor: "#faf5f5" }} component={Paper}>
                        <br />
                        <TextField fullWidth id="outlined-basic" label="Nama Wali" variant="outlined" required />
                        <br /><br />

                        <TextField fullWidth id="outlined-basic" label="No. Kad Pengenalan Wali" variant="outlined" required />
                        <br /><br />

                        <TextField fullWidth id="outlined-basic" label="Alamat Wali" variant="outlined" required />
                        <br /><br />

                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={6}>
                                {/* Birthday*/}
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <FormControl fullWidth>
                                        <DatePicker
                                            label={<Grid sx={{ display: 'flex' }}>Tarikh Lahir Pasangan<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                            value={date}
                                            onChange={(newDate) => setDate(newDate)}
                                        />
                                    </FormControl>
                                </LocalizationProvider>
                                <br /><br />
                            </Grid>

                            <Grid xs={6}>
                                <TextField fullWidth id="outlined-basic" label="Umur Wali" variant="outlined" required />
                                <br /><br />
                            </Grid>

                            <Grid xs={6}>
                                <TextField fullWidth id="outlined-basic" label="No. Telefon Wali" variant="outlined" required />
                                <br /><br />
                            </Grid>

                            <Grid xs={6}>
                                <TextField fullWidth id="outlined-basic" label="Hubungan" variant="outlined" required />
                                <br /><br />
                            </Grid>

                            <Grid xs={6}>
                                {/* Birthday*/}
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <FormControl fullWidth>
                                        <DatePicker
                                            label={<Grid sx={{ display: 'flex' }}>Tarikh Nikah Ibu Bapa<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                            value={date}
                                            onChange={(newDate) => setDate(newDate)}
                                        />
                                    </FormControl>
                                </LocalizationProvider>
                                <br /><br />
                            </Grid>

                            <Grid xs={6}>
                                <TextField fullWidth id="outlined-basic" label="No. Sijil Nikah IbuBapa" variant="outlined" required />
                                <br /><br />
                            </Grid>
                        </Grid>

                        <TextField fullWidth id="outlined-basic" label="Nama Pelulus (Surat Sumpah)" variant="outlined" required />
                        <br /><br />
                    </Container>

                    <br />
                    {/* Maklumat Saksi*/}
                    <Box sx={{ marginTop: 2, bgcolor: '#49516F', color: 'white', width: 250, height: 30, borderRadius: 1 }}>
                        <Typography variant="body" sx={{ fontSize: '20px', marginLeft: 6 }}>
                            Maklumat Saksi
                        </Typography>
                    </Box>
                    <br />

                    <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", backgroundColor: "#faf5f5" }} component={Paper}>
                        <br />
                        <TextField fullWidth id="outlined-basic" label="Nama Saksi (1)" variant="outlined" required />
                        <br /><br />

                        <TextField fullWidth id="outlined-basic" label="No. Kad Pengenalan Saksi (1)" variant="outlined" required />
                        <br /><br />

                        <TextField fullWidth id="outlined-basic" label="Alamat Saksi (1)" variant="outlined" required />
                        <br /><br />

                        <TextField fullWidth id="outlined-basic" label="No. Telefon Saksi (1)" variant="outlined" required />
                        <br /><br />

                        <TextField fullWidth id="outlined-basic" label="Nama Saksi (2)" variant="outlined" required />
                        <br /><br />

                        <TextField fullWidth id="outlined-basic" label="No. Kad Pengenalan Saksi (2)" variant="outlined" required />
                        <br /><br />

                        <TextField fullWidth id="outlined-basic" label="Alamat Saksi (2)" variant="outlined" required />
                        <br /><br />

                        <TextField fullWidth id="outlined-basic" label="No. Telefon Saksi (2)" variant="outlined" required />
                        <br /><br />

                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" required>Kategori Nikah</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={kategorinikah}
                                label="Kategori Nikah"
                                onChange={handleChangeKategoriNikah}
                            >
                                {/* Menu Items */}
                                <MenuItem value={10}>Pernikahan Semula</MenuItem>
                                <MenuItem value={20}>Bukan Pernikahan Semula</MenuItem>
                            </Select>
                        </FormControl>
                        <br /><br />
                    </Container>
                </Box>

                <br /><br />
                <Box align="center">
                    <Button variant="contained">Kembali</Button>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    <Button variant="contained">Simpan</Button>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    <Button variant="contained">Seterusnya</Button> {/*click button will go to Maklumat Perkahwinan Page*/}
                </Box>
                <br /><br />

                <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", backgroundColor: "#faf5f5", ml: "40" }} component={Paper}>
                    <br />
                    <Typography component="p">
                        <b>PENTING!</b>
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AnnouncementIcon sx={{ marginRight: '0.5em', fontSize: '1.2em', color: 'red' }} />
                        <Typography component="p">
                            Sila klik pada butang Hantar untuk menghantar permohonan. Untuk melengkapkan permohonan, sila muat turun dan lengkapkan <b>Borang 2 [Seksyen 16]</b>, <b>Borang 4 [Seksyen 13]</b> , <b>Borang 1 [Seksyen 4]</b>, dan <b>Borang Ujian Saringan HHIV Pemohon</b>.
                            Dan muat naik semula borang - borang tersebut bagi proses seterusnya.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AnnouncementIcon sx={{ marginRight: '0.5em', fontSize: '1.2em', color: 'red' }} />
                        <Typography component="p">
                            Anda masih boleh membuat perubahan (kemaskini) kepada maklumat permohonan setelah menyimpan permohonan ini sehingga permohonan anda klik button HANTAR untul memproses permohonan.
                            Sebarang Perubahan tidak lagi dibenarkan selepas maklumat dihantar.
                        </Typography>
                    </Box>
                    <br />
                </Container>
                <br />
            </Container>

        </Stack>
    );
}
