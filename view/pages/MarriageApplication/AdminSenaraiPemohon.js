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

function createData(bil, icnamapemohon, noslippemohon, tarikhmohon, status, resit, operasi) {
    return {bil, icnamapemohon, noslippemohon, tarikhmohon, status, resit, operasi };
}

const rows = [
    createData('1.', '820919065488 ABDUL NAHIM BIN MUSAB', 'M2/2023-005494', '05/01/2023', 'DALAM PROSES', '', ''),
    createData('2.', '', '', '', 'DITOLAK', '', ''),
    createData('3.', '', '', '', 'DTERIMA', '', ''),

];

export default function AdminSenaraiPemohon() {

    return (
        <Stack spacing={2}>
            <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", mt: 10, ml: 40 }} component={Paper}>
                <br /><br />

                <Typography variant="h4"><b>Permohonan Berkahwin - Senarai Pemohon</b></Typography>

                {/*this is the name pemohon for searching function*/}
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
                                <TableCell align="center"><b>No.KP/Nama Pemohon</b></TableCell>
                                <TableCell align="center"><b>No.Slip Permohonan</b></TableCell>
                                <TableCell align="center"><b>Tarikh Mohon</b></TableCell>
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
                                    <TableCell align="center">{row.icnamapemohon}</TableCell>
                                    <TableCell align="center">{row.noslippemohon}</TableCell>
                                    <TableCell align="center">{row.tarikhmohon}</TableCell>
                                    <TableCell align="center">{row.status}</TableCell>
                                    <TableCell align="center">{row.resit}</TableCell>
                                    <TableCell align="center">{row.operasi}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
           
                <br /><br />

            </Container>
        </Stack>

    );
}
