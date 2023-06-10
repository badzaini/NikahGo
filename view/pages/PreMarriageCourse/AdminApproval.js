import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {
    Typography,
    InputBase,
    IconButton,
    Checkbox
} from '@mui/material'
import Stack from '@mui/material/Stack';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import SearchIcon from '@mui/icons-material/Search';

function createData(bil, namepemohon, mykad, jantina, kehadiran, operasi) {
    return { bil, namepemohon, mykad, jantina, kehadiran, operasi };
}

const rows = [
    createData('', '', '', '', '', '', '', '', '', '', '', '', '', '',),
];

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function AdminApproval() {

    return (
        <Stack spacing={2}>

            <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", mt: 10, ml: 40, mb: 10 }} component={Paper}>

                <Box>
                    <br />
                    <Typography variant="h4">
                        <b>Maklumat Peserta - Kehadiran</b>
                    </Typography>

                    <Box sx={{ marginTop: 2, bgcolor: '#49516F', color: 'white', width: 500, height: 30, borderRadius: 1 }}>
                        <Typography variant="body" sx={{ fontSize: '20px', marginLeft: 6 }}>
                            Senarai Peserta Pra Perkahwinan - Kelulusan
                        </Typography>
                    </Box>
                    <br />
                    <br />
                    <Typography component="p">
                        <b>Anjuran: </b> <br /> {/* example output: PEJABAT AGAMA ISLAM TEMERLOH*/}
                        <b>Siri Kursus: </b> <br /> {/* example output: KTN/0001/2023*/}
                        <b>Tarikh Kursus: </b> <br /> {/* example output: 03/01/2023 - 04/01/2023*/}
                        <b>Tempat Kursus: </b> <br /> {/* example output: DEWAN TARBIAN ISLAM PERAMU*/}
                    </Typography>
                    <hr />
                    <br />
                </Box>
                <Container>
                    <br />
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 0 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center"><b>Bil.</b></TableCell>
                                    <TableCell align="center"><b>Nama Pemohon</b></TableCell>
                                    <TableCell align="center"><b>NO. Kad Pengenalan</b></TableCell>
                                    <TableCell align="center"><b>Jantina</b></TableCell>
                                    <TableCell align="center"><b>Kehadiran</b></TableCell>
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
                                            1.
                                            {row.bil}
                                        </TableCell>
                                        <TableCell align="center">ALIA FILZAH BT MOHD ROSLI{row.namepemohon}</TableCell>
                                        <TableCell align="center">030717060762{row.mykad}</TableCell>
                                        <TableCell align="center">PEREMPUAN{row.jantina}</TableCell>
                                        <TableCell align="center">HADIR{row.kehadiran}
                                        </TableCell>
                                        <TableCell align="center">
                                            {/* this checkbox is to tick peserta course kelulusan*/}
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
                        <Button variant="contained">Simpan</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="contained">Kembali</Button>
                    </Box>
                    <br /><br />
                </Container>

            </Container>

        </Stack>
    );
}
