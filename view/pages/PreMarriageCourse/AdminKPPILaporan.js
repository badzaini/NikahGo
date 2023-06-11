import * as React from 'react';
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
} from '@mui/material'

import { useRouter } from 'next/router';


export default function AdminKPPILaporan() {
    const [paid, setPAID] = React.useState('');
    const [tahun, setTahun] = React.useState('');
    const [sirikursus, setSirikursus] = React.useState('');

    const handleChangePAID = (event) => {
        setPAID(event.target.value);
    };

    const handleChangeTahun = (event) => {
        setTahun(event.target.value);
    };

    const handleChangeSirikursus = (event) => {
        setSirikursus(event.target.value);
    };
    const router = useRouter(); // Initialize the router variable using the useRouter hook

    const handleConfirm = () => {
        router.push("/PreMarriageCourse/AdminKPPILaporan");
    };

    const handleNext = () => {
        router.push("/PreMarriageCourse/AdminPemohonListLaporan");
    };
    return (
        <Stack spacing={2}>

            <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", mt: 10, ml: 40, mb: 10 }} component={Paper}>

                <Box>
                    <br />
                    <Typography variant="h4">
                        <b>Laporan</b>
                    </Typography>

                    <Box sx={{ marginTop: 2, bgcolor: '#49516F', color: 'white', width: 500, height: 30, borderRadius: 1 }}>
                        <Typography variant="body" sx={{ fontSize: '20px', marginLeft: 6 }}>
                            Analisis Kursus Pra Perkahwinan Islam (KPPI)
                        </Typography>
                    </Box>
                    <br />
                    <br />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Anjuran:</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={paid}
                            label="Anjuran:"
                            onChange={handleChangePAID}
                        >
                            {/* Menu Items */}
                            <MenuItem value={10}>Pejabat Agama Islam Daerah Pekan</MenuItem>
                            <MenuItem value={20}>Pejabat Agama Islam Daerah Kuantan</MenuItem>
                            <MenuItem value={30}>Pejabat Agama Islam Daerah Rompin</MenuItem>
                            <MenuItem value={40}>Pejabat Agama Islam Daerah Muadzam Shah</MenuItem>
                            <MenuItem value={50}>Pejabat Agama Islam Daerah Maran</MenuItem>
                            <MenuItem value={60}>Pejabat Agama Islam Daerah Jengka</MenuItem>
                            <MenuItem value={70}>Pejabat Agama Islam Daerah Kuantan Barat</MenuItem>
                            <MenuItem value={80}>Pejabat Agama Islam Daerah Temerloh</MenuItem>
                            <MenuItem value={90}>Pejabat Agama Islam Daerah Bentong</MenuItem>
                            <MenuItem value={100}>Pejabat Agama Islam Daerah Jerantut</MenuItem>
                            <MenuItem value={110}>Pejabat Agama Islam Daerah Raub</MenuItem>
                            <MenuItem value={120}>Pejabat Agama Islam Daerah Kuala Lapis</MenuItem>
                            <MenuItem value={130}>Pejabat Agama Islam Daerah Bera</MenuItem>
                            <MenuItem value={140}>Pejabat Agama Islam Daerah Cameron Highland</MenuItem>
                        </Select>
                    </FormControl>
                    <br /><br />

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Tahun:</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sirikursus}
                            label="Year"
                            onChange={handleChangeSirikursus}
                        >
                            {/* Menu Items */}
                            <MenuItem value={10}>2023</MenuItem>
                            <MenuItem value={20}>2022</MenuItem>
                            <MenuItem value={30}>2021</MenuItem>
                            <MenuItem value={40}>2020</MenuItem>
                            <MenuItem value={50}>2019</MenuItem>
                            <MenuItem value={60}>2018</MenuItem>
                            <MenuItem value={70}>2017</MenuItem>
                            <MenuItem value={80}>2016</MenuItem>
                            <MenuItem value={90}>2015</MenuItem>
                            <MenuItem value={100}>2014</MenuItem>
                            <MenuItem value={110}>2013</MenuItem>
                            <MenuItem value={120}>2012</MenuItem>
                            <MenuItem value={130}>2011</MenuItem>
                            <MenuItem value={140}>2010</MenuItem>
                        </Select>
                    </FormControl>
                    <br /><br />

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Siri Kursus:</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={tahun}
                            label="Siri Kursus:"
                            onChange={handleChangeTahun}
                        >
                            {/* Menu Items */}
                            <MenuItem value={10}>KTN/0001/2023</MenuItem>
                            <MenuItem value={20}>KTN/0002/2023</MenuItem>
                            <MenuItem value={30}>KTN/0003/2023</MenuItem>
                            <MenuItem value={40}>KTN/0004/2023</MenuItem>
                            <MenuItem value={50}>KTN/0005/2023</MenuItem>
                            <MenuItem value={60}>KTN/0006/2023</MenuItem>
                            <MenuItem value={70}>KTN/0007/2023</MenuItem>
                            <MenuItem value={80}>KTN/0008/2023</MenuItem>
                            <MenuItem value={90}>KTN/0009/2023</MenuItem>
                            <MenuItem value={100}>KTN/00010/2023</MenuItem>
                            <MenuItem value={110}>KTN/00011/2023</MenuItem>
                            <MenuItem value={120}>KTN/00012/2023</MenuItem>
                        </Select>
                    </FormControl>
                    <br /><br />
                </Box>
                <Container>
                    <Box sx={{ minWidth: 500 }} align="center">
                        <Button variant="contained" onClick={handleConfirm}>Juna Senarai</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="contained" onClick={handleNext}>Seterusnya</Button>
                    </Box>
                    <br /><br />
                </Container>
            </Container>
        </Stack>
    );
}
