import * as React from 'react';
import { useState, Fragment } from "react";
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
    Paper
} from '@mui/material';
import { useRouter } from 'next/router';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import WarningIcon from '@mui/icons-material/Warning';

function createData(bil, icpartnername, noslippermohonan, tarikh, status, operasi) {
    return { bil, icpartnername, noslippermohonan, tarikh, status, operasi };
}

const rows = [
    createData('', '', '', '', '', ''),
];

export default function FirstPage() {
    const router = useRouter(); // Initialize the router variable using the useRouter hook

    const handleNext = () => {
      router.push("/MarriageApplication/MarriageAppForm");
    };
    return (
        <Stack spacing={2}>
            <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", mt: 10, ml: 40 }} component={Paper}>
                <br /><br />

                <Typography variant="h4">
                    <b>Permohonan Berkahwin</b>
                </Typography>
                <br />
                <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", backgroundColor: "#faf5f5" }} component={Paper}>
                    <br />
                    <Typography component="p">
                        <b>PENTING!</b>
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AnnouncementIcon sx={{ marginRight: '0.5em', fontSize: '1.2em', color: 'red' }} />
                        <Typography component="p">
                            Permohonan hanya boleh dibuat dalam tempoh 3 Bulan sebelum tarikh Perkahwinan.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AnnouncementIcon sx={{ marginRight: '0.5em', fontSize: '1.2em', color: 'red' }} />
                        <Typography component="p">
                            Sila masukkan No.Kad Pengenalan anda dengan betul semasa membuat permohonan kebenaran Kahwin
                        </Typography>
                    </Box>
                    <br />
                </Container>
                <br /><br />

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
                                <TableCell align="center"><b>KP/Name Pesangan</b></TableCell>
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
                                    <TableCell align="center">{row.tarikhpemohon}</TableCell>
                                    <TableCell align="center">{row.icpartnername}</TableCell>
                                    <TableCell align="center">{row.noslippermohonan}</TableCell>
                                    <TableCell align="center">{row.tarikh}</TableCell>
                                    <TableCell align="center">{row.status}</TableCell>
                                    <TableCell align="center">{row.operasi}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br />

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <WarningIcon sx={{ marginRight: '0.5em', fontSize: '1.2em', color: 'red' }} />
                    <Typography component="p">
                        Permohonan Kebenaran Kahwin Anda <b>BELUM HANTAR</b>. Anda boleh mengemaskini atau HANTAR maklumat Permohonan dengan tekan butang <b>HANTAR</b>.
                    </Typography>
                </Box>
                <br />
            
                <Box sx={{ minWidth: 500 }} align="center">
                    <Button variant="contained" onClick={handleNext}>Daftar Baru</Button>
                </Box>
                <br /><br />

            </Container>
        </Stack>

    );
}
