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
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { useRouter } from 'next/router';

function createData(bil, namepeserta, mykad, jantina, nosijil, operasi) {
    return { bil, namepeserta, mykad, jantina, nosijil, operasi };
}

const rows = [
    createData('', '', '', '', '', ''),
];
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function AdminCetakSlipLaporan() {
    const [tahun, setTahun] = React.useState('');
    const [sirikursus, setSirikursus] = React.useState('');

    const handleChangeTahun = (event) => {
        setTahun(event.target.value);
    };

    const handleChangeSirikursus = (event) => {
        setSirikursus(event.target.value);
    };

    const router = useRouter(); // Initialize the router variable using the useRouter hook

    const handleConfirm = () => {
        router.push("/PreMarriageCourse/AdminCetakSlipLaporan");
    };

    const handleBack = () => {
        router.push("/PreMarriageCourse/AdminPesertaListLaporan");
    };

    const handleNext = () => {
        router.push("/PreMarriageCourse/AdminCourseInfo");
    };
    return (
        <Stack spacing={2}>

            <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", mt: 10, ml: 40, mb: 10 }} component={Paper}>

                <Box>
                    <br />
                    <Typography variant="h4">
                        <b>Maklumat Peserta - Kehadiran</b>
                    </Typography>

                    <Box sx={{ marginTop: 2, bgcolor: '#49516F', color: 'white', width: 200, height: 30, borderRadius: 1 }}>
                        <Typography variant="body" sx={{ fontSize: '20px', marginLeft: 6 }}>
                            Cetak Sijil
                        </Typography>
                    </Box>
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

                    <Box align="center">
                        <Button variant="contained">Cari</Button>
                    </Box>
                    <br /><br />
                </Box>
                <Container>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 0 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center"><b>Bil.</b></TableCell>
                                    <TableCell align="center"><b>Nama Pemohon</b></TableCell>
                                    <TableCell align="center"><b>No. Kad Pengenalan</b></TableCell>
                                    <TableCell align="center"><b>Jantina</b></TableCell>
                                    <TableCell align="center"><b>No. Sijil</b></TableCell> {/* Example Ouput: SK00078 */}
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
                                        <TableCell align="center">{row.namepeserta}</TableCell>
                                        <TableCell align="center">{row.mykad}</TableCell>
                                        <TableCell align="center">{row.jantina}</TableCell>
                                        <TableCell align="center">{row.nosijil}</TableCell>
                                        <TableCell align="center">
                                            {/* this checkbox is to tick peserta kehadiran*/}
                                            <div>
                                                <Checkbox {...label} />{row.operasi}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <br /><br />
                    <Box align="center">
                        <Button variant="contained" onClick={handleBack}>Kembali</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="contained" onClick={handleConfirm}>Cetak Sijil</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="contained" onClick={handleNext}>Seterusnya</Button>
                    </Box>
                    <br /><br />
                </Container>

            </Container>

        </Stack>
    );
}
