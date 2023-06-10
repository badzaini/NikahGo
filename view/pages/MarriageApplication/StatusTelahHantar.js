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

import AnnouncementIcon from '@mui/icons-material/Announcement';
import WarningIcon from '@mui/icons-material/Warning';
import SearchIcon from '@mui/icons-material/Search';

function createData(bil, borangid, noslippermohonan, tarikh, status, operasi) {
    return { bil, borangid, noslippermohonan, tarikh, status, operasi };
}

const rows = [
    createData('1.', '750721065131 TEST', 'M2/2023-005494', '05/01/2023', 'TELAH HANTAR', ''),
];


export default function StatusTelahHantar() {

    return (
        <Stack spacing={2}>
            <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", mt: 10, ml: 40 }} component={Paper}>
                <br /><br />

                <Typography variant="h4">
                    <b>Permohonan Berkahwin</b>
                </Typography>
                <br />

                <Box align="center">
                    <Typography variant="body1">
                        <b>No K/P Pasangan:</b>
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

                <Box align="center">
                    <Typography variant="h6">
                        <b>Permohonan Berkahwin</b>
                    </Typography>
                </Box>

                <TableContainer sx={{ minWidth: 500 }} component={Paper}>
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center"><b>Bil.</b></TableCell>
                                <TableCell align="center"><b>Borang</b></TableCell>
                                <TableCell align="center"><b>No. Slip Permohonan</b></TableCell>
                                <TableCell align="center"><b>Tarikh Mohon</b></TableCell>
                                <TableCell align="center"><b>Status</b></TableCell>
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
                                    <TableCell align="center">{row.borangid}</TableCell>
                                    <TableCell align="center">{row.noslippermohonan}</TableCell>
                                    <TableCell align="center">{row.tarikh}</TableCell>
                                    <TableCell align="center">{row.status}</TableCell>
                                    <TableCell align="center">{row.operasi}</TableCell> {/*Dalam column operasi ada view icon dan delete icon*/}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br />

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <WarningIcon sx={{ marginRight: '0.5em', fontSize: '1.2em', color: 'red' }} />
                    <Typography component="p">
                        Permohanan Kebenaran Kahwin Anda <b>TELAH DIHANTAR</b>.
                    </Typography>
                </Box>
                <br />

                <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", backgroundColor: "#faf5f5" }} component={Paper}>
                    <br />
                    <Typography component="p">
                        <b>PENTING!</b>
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AnnouncementIcon sx={{ marginRight: '0.5em', fontSize: '1.2em', color: 'red' }} />
                        <Typography component="p">
                            Sila Masukkan No. Kad Pengenalan Pasangan Anda Dengan Betul Semasa Membuat Permohonan Kebenaran Kahwin.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AnnouncementIcon sx={{ marginRight: '0.5em', fontSize: '1.2em', color: 'red' }} />
                        <Typography component="p">
                            Masukkan No. Kad Pengenalan Pasangan Anda Sekiranya Maklumat Permohonan Telah Lengkap Diisi.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AnnouncementIcon sx={{ marginRight: '0.5em', fontSize: '1.2em', color: 'red' }} />
                        <Typography component="p">
                            Sekiranya Maklumat Pasangan Masih Belum Disimpan, Terus Klik Butang Cari Untuk Mendapatkan Maklumat Yang Masih Belum Lengkap.
                        </Typography>
                    </Box>
                    <br />
                </Container>
                <br /><br />
            </Container>
        </Stack>

    );
}
