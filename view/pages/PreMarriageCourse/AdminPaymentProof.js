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

function createData(bil, tarikhpemohon, nopemohon, namapemohon, mykad, sirikursus, status, resit, operasi) {
    return { bil, tarikhpemohon, nopemohon, namapemohon, mykad, sirikursus, status, resit, operasi };
}

const rows = [
    createData('1.', '20/01/2023', 'TLOH1P/2023-01651', 'SITI KHAIRIAH BINTI ABDULLAH', '800712111112', 'TLOH/0005/2023', '', '', ''),
];

export default function AdminPaymentProof() {

    return (
        <Stack spacing={2}>
            <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", mt: 10, ml: 40 }} component={Paper}>
                <br /><br />

                <Typography variant="h4"><b>Maklumat Peserta</b></Typography>

                <Container>

                </Container>

                <Box sx={{ marginTop: 2, bgcolor: '#49516F', color: 'white', width: 400, height: 30, borderRadius: 1 }}>
                    <Typography variant="body" sx={{ fontSize: '20px', marginLeft: 4 }}>
                        Pengesahan Bayaran Yuran Kursus
                    </Typography>
                </Box>

                {/*this is the peserta list for searching function*/}
                <Box sx={{ py: 3, display: "flex", justifyContent: "right" }}>
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
                
                <TableContainer sx={{ minWidth: 500 }} component={Paper}>
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center"><b>Bil.</b></TableCell>
                                <TableCell align="center"><b>Tarikh Permohonan</b></TableCell>
                                <TableCell align="center"><b>No.Permohonan</b></TableCell>
                                <TableCell align="center"><b>Nama Pemohon</b></TableCell>
                                <TableCell align="center"><b>No. Kad Pengenalan</b></TableCell>
                                <TableCell align="center"><b>Siri Kursus</b></TableCell>
                                <TableCell align="center"><b>Status</b></TableCell>
                                <TableCell align="center"><b>Resit Pembayaran</b></TableCell>
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
                                    <TableCell align="center">{row.tarikhpemohon}</TableCell>
                                    <TableCell align="center">{row.nopemohon}</TableCell>
                                    <TableCell align="center">{row.namapemohon}</TableCell>
                                    <TableCell align="center">{row.mykad}</TableCell>
                                    <TableCell align="center">{row.sirikursus}</TableCell>
                                    <TableCell align="center">{row.status}</TableCell>
                                    <TableCell align="center">{row.resit}</TableCell>
                                    <TableCell align="center">{row.operasi}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br /><br />
                <Box sx={{ minWidth: 500 }} align="center">
                    <Button variant="contained">Kembali</Button>
                </Box>
                <br /><br />

            </Container>
        </Stack>

    );
}
