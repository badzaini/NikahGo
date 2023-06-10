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

export default function MAApplicant() {
    const [pekerjaan, setPekerjaan] = React.useState('');
    const [pendidikan, setPendidikan] = React.useState('');
    const [jantina, setJantina] = React.useState('');
    const [date, setDate] = useState(dayjs());
    const [statuskahwin, setStatuskahwin] = React.useState('');
    const [statussaudarabaru, setStatussaudarabaru] = React.useState('');
 
    const handleChangePekerjaan = (event) => {
        setPekerjaan(event.target.value);
    };

    const handleChangePendidikan = (event) => {
        setPendidikan(event.target.value);
    };

    const handleChangeJantina = (event) => {
        setJantina(event.target.value);
    };

    const handleChangeStatuskahwin = (event) => {
        setStatuskahwin(event.target.value);
    };

    const handleChangeStatussaudarabaru = (event) => {
        setStatussaudarabaru(event.target.value);
    };

    return (
        <Stack spacing={2}>
            <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", mt: 10, ml: 40, mb: 10 }} component={Paper}>
                <Box>
                    <br />
                    <Typography variant="h4"><b>Permohonan Berkahwin - Maklumat Pemohon</b></Typography>
                    <br /><br />

                    <Box align="center">
                        <Typography variant="h5">
                            <b>Maklumat Pemohon</b>
                        </Typography>
                    </Box>
                    <br />

                    <Typography component="p">
                        <b>MAKLUMAT PEMOHON</b> &nbsp;&nbsp;
                        <b>MAKLUMAT PASANGAN</b> &nbsp;&nbsp;
                        <b>MAKLUMAT PERKAHWINAN</b> &nbsp;&nbsp;
                    </Typography>
                    <hr />

                    <br />
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid xs={6}>
                            <TextField fullWidth id="outlined-basic" label="No. Kad Pengenalan Baru" variant="outlined" required />
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            <TextField fullWidth id="outlined-basic" label="Nama Pemohon" variant="outlined" required />
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            <TextField fullWidth id="outlined-basic" label="No. Kad Pengenalan Lama/Tentera/Polis" variant="outlined" required />
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            {/* Birthday*/}
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <FormControl fullWidth>
                                    <DatePicker
                                        label={<Grid sx={{ display: 'flex' }}>Tarikh Lahir<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                        value={date}
                                        onChange={(newDate) => setDate(newDate)}
                                    />
                                </FormControl>
                            </LocalizationProvider>
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            <TextField fullWidth id="outlined-basic" label="Umur" variant="outlined" required />
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label" required>Jantina</InputLabel>
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
                            <TextField fullWidth id="outlined-basic" label="Bangsa" variant="outlined" required />
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            <TextField fullWidth id="outlined-basic" label="Warganegara" variant="outlined" required />
                            <br /><br />
                        </Grid>
                    </Grid>

                    <TextField fullWidth id="outlined-basic" label="Alamat Dalam K/P" variant="outlined" required />
                    <br /><br />

                    <TextField fullWidth id="outlined-basic" label="Alamat Semasa" variant="outlined" required />
                    <br /><br />

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid xs={6}>
                            <TextField fullWidth id="outlined-basic" label="No.Telefon (Rumah)" variant="outlined" required />
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            <TextField fullWidth id="outlined-basic" label="No.Telefon (Bimbit)" variant="outlined" required />
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
                            <TextField fullWidth id="outlined-basic" label="Pekerjaan/Jawatan" variant="outlined" required />
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            <TextField fullWidth id="outlined-basic" label="No.Telefon (Pejabat)" variant="outlined" required />
                            <br /><br />
                        </Grid>
                    </Grid>

                    <TextField fullWidth id="outlined-basic" label="Alamat Dalam K/P" variant="outlined" required />
                    <br /><br />

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label" required>Status Kahwin</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={statuskahwin}
                                    label="Status Kahwin"
                                    onChange={handleChangeStatuskahwin}
                                >
                                    <MenuItem value={10}>Teruna/Anak Dara/Thayyib/Bujang(Mengandung)</MenuItem>
                                    <MenuItem value={20}>Beristeri</MenuItem>
                                    <MenuItem value={30}>Duda Mati Isteri/Balu</MenuItem>
                                    <MenuItem value={40}>Duda Cerai</MenuItem>
                                </Select>
                            </FormControl>
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label" required>Status Saudara Baru</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={statussaudarabaru}
                                    label="Status Saudara Baru"
                                    onChange={handleChangeStatussaudarabaru}
                                >
                                    <MenuItem value={10}>Ya</MenuItem>
                                    <MenuItem value={20}>Tidak</MenuItem>
                                </Select>
                            </FormControl>
                            <br /><br />
                        </Grid>
                    </Grid>
                    <br />
                </Box>

                <Box align="center">
                    <Button variant="contained">Kembali</Button>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
                    <Button variant="contained">Simpan</Button>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
                    <Button variant="contained">Seterusnya</Button> {/*click button will go to Maklumat Pasangan Page*/}
                </Box>
                <br /><br />
            </Container>
        </Stack>
    );
}
