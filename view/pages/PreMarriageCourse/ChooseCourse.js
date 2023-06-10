import * as React from 'react';
import {
    Button,
    Typography,
    Container,
    Box,
    Stack,
    TableContainer,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
    Table,
    Paper,
    InputBase,
    IconButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function createData(bil, anjuran, tempat, tarikh, kapasiti, kekosongan, paparlanjut, daftarpenyertaan) {
    return { bil, anjuran, tempat, tarikh, kapasiti, kekosongan, paparlanjut, daftarpenyertaan };
}

const rows = [
    createData('1.', 'Pejabat Agama Islam Temerloh', 'Dewan Kuliah Mashas Temerloh', '28/01/2023 - 29/01/2023', '84', '5', '', ''),
];

export default function ChooseCourse() {

    return (
        <Stack spacing={2}>
            <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", mt: 10, ml: 40 }} component={Paper}>
                <br /><br />
                <Typography variant="h4"><b>Pendaftaran Kursus Pra Perkahwinan</b></Typography>
                <br /><br />
                <Box align="center">
                    <Typography variant="h6">
                        <b>Borang Pendaftaran Kursus Pra Perkahwinan Islam <br />Jabatan Agama Islam Pahang</b>
                    </Typography>
                </Box>
                <br /><br />

                <Box align="center">
                    <Typography variant="p">
                        <b>Pilih Anjuran:</b>
                    </Typography>
                </Box>

                <Box sx={{ py: 3, display: "flex", justifyContent: "center" }}>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Pilih Carian"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Box>

                {/*this is the anjuran list for searching function*/}
                {/* Jabatan Agama Islam Negeri Pahang
                Pejabat Agama Islam Bentong
                Pejabat Agama Islam Bera
                Pejabat Agama Islam Cameron Highlands
                Pejabat Agama Islam Chenor
                Pejabat Agama Islam Jengka
                Pejabat Agama Islam Jerantut
                Pejabat Agama Islam Kuantan 
                Pejabat Agama Islam Lipis
                Pejabat Agama Islam Maran
                Pejabat Agama Islam Muadzam Shah
                Pejabat Agama Islam Pekan
                Pejabat Agama Islam Raub
                Pejabat Agama Islam Rompin
                Pejabat Agama Islam Temerloh       
                */}

                <Container>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 400 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center"><b>Bil.</b></TableCell>
                                    <TableCell align="center"><b>Anjuran</b></TableCell>
                                    <TableCell align="center"><b>Tempat</b></TableCell>
                                    <TableCell align="center"><b>Tarikh</b></TableCell>
                                    <TableCell align="center"><b>Kapasiti Peserta</b></TableCell>
                                    <TableCell align="center"><b>Kekosongan</b></TableCell>
                                    <TableCell align="center"><b>Papar Lanjut</b></TableCell>
                                    <TableCell align="center"><b>Daftar Penyertaan</b></TableCell>
                                </TableRow>
                                {/*Dalam Papar lanjut kena ada satu file icon, after click akan display CourseDetails.js page*/}
                                {/*Dalam Daftar Penyertaan kena ada satu button utk go to RegistrationForm.js*/}
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.bil}
                                        </TableCell>
                                        <TableCell align="center">{row.anjuran}</TableCell>
                                        <TableCell align="center">{row.tempat}</TableCell>
                                        <TableCell align="center">{row.tarikh}</TableCell>
                                        <TableCell align="center">{row.kapasiti}</TableCell>
                                        <TableCell align="center">{row.kekosongan}</TableCell>
                                        <TableCell align="center">{row.paparlanjut}</TableCell>
                                        <TableCell align="center">{row.daftarpenyertaan}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <br /><br />
                    <Box align="center">
                        <Button variant="contained">Kembali</Button>
                    </Box>
                    <br /><br />
                </Container>
            </Container>

        </Stack>

    );
}
