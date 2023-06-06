import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Divider } from '@mui/material';

export default function RegistrationForm() {
    const [negeri, setNegeri] = React.useState('');
    const [daerah, setDaerah] = React.useState('');
    const [pekerjaan, setPekerjaan] = React.useState('');
    const [pendidikan, setPendidikan] = React.useState('');
    const [jantina, setJantina] = React.useState('');
    const [jaianegeri, setJainegeri] = React.useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleChangeNegeri = (event) => {
        setNegeri(event.target.value);
    };

    const handleChangeDaerah = (event) => {
        setDaerah(event.target.value);
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

    return (
        <Container sx={{ display: '', justifyContent: 'center', width: '100%', height: '100%', mt: 20 }}>
            <Typography variant="h4">Pendaftaran Kursus Pra Perkahwinan</Typography>

            <Box>
                <Typography variant="h5">
                    Borang Pendaftaran Kursus Pra Perkahwinan Islam Jabatan Agama Islam Pahang
                </Typography>

                <Typography component="p">
                    <b>Anjuran: </b> <br />
                    <b>Tempat dan Tarikh: </b> <br /><br />
                </Typography>

                <TextField id="outlined-basic" label="No. Kad Pengenalan" variant="outlined" /><br /><br />
                <TextField id="outlined-basic" label="Name Pemohon" variant="outlined" /><br /><br />
                <TextField id="outlined-basic" label="Alamat Surat Menyurat" variant="outlined" /><br /><br />

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

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Daerah</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={daerah}
                        label="Daerah"
                        onChange={handleChangeDaerah}
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

                <TextField id="outlined-basic" label="No. Telefon" variant="outlined" />

                <br /><br />

                <TextField id="outlined-basic" label="Cadangan Tarikh Akad Nikah" variant="outlined" />

                <br /><br />

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Kebenaran Jabatan Agama Islam Negeri</InputLabel>
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
                {/* Other form fields and components */}

                <br /><br />

                <Typography component="p">
                    Saya telah membaca dan faham terma dan peraturan yang telah ditetapkan, dan bersetuju untuk menyertai Kursus Pra-Perkahwinan Islam Pahang ini.
                </Typography>

            </Box>

            <br />
            <Box>
                <Button variant="contained">Daftar Penyertaan</Button>
            </Box>

            <br /><br />

            <Box>
                <Typography variant='h5'>PEMBAYARAN YURAN KURSUS PRA PERKAHWINAN</Typography>

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

                <Typography variant='h6'>Muat Naik Resit Pembayaran</Typography>
                <Divider />

                <br />

                <div>
                    <input type="file" onChange={handleFileChange} />
                    {selectedFile && <p>Selected File: {selectedFile.name}</p>}
                </div>

                <br /><br />
            </Box>

            <Box>
                <Button variant="contained">Kembali</Button>&nbsp;&nbsp;
                <Button variant="contained">Hantar</Button>
            </Box>
        </Container>
    );
}
