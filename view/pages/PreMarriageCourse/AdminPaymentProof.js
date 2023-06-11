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
import { useRouter } from 'next/router';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PageviewIcon from '@mui/icons-material/Pageview';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function AdminPaymentProof() {
    const router = useRouter(); // Initialize the router variable using the useRouter hook

    const handleConfirmViewPP = () => {
        router.push("/MarriageApplication/AdminProofPayment");
    };

    const handleConfirmApprovePP = () => {
        router.push("");
    };

    const handleConfirmDisapprovePP = () => {
        router.push("");
    };

    const handleViewRegForm = () => {
        router.push("/PreMarriageCourse/AdminMarraigeAppForm");
    };

    const handleEditRegForm = () => {
        router.push("/PreMarriageCourse/AdminMarraigeAppForm");
    };

    const handleDeleteAppForm = () => {
        router.push("");
    };

    const handleBack = () => {
        router.push("/PreMarriageCourse/AdminCourseInfo");
    };

    const handleNext = () => {
        router.push("/PreMarriageCourse/AdminAttendance");
    };

    function createData(bil, tarikhpemohon, nopemohon, namapemohon, mykad, sirikursus, status, resit, operasi) {
        return {
            bil,
            tarikhpemohon,
            nopemohon,
            namapemohon,
            mykad,
            sirikursus,
            status,
            resit: resit ? (
                <>
                    <IconButton onClick={handleConfirmViewPP} type="button" sx={{ p: '10px', color: 'black' }} aria-label="view">
                        <ReceiptLongIcon />
                    </IconButton>
                    <IconButton onClick={handleConfirmApprovePP} type="button" sx={{ p: '10px', color: 'green' }} aria-label="approve">
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton onClick={handleConfirmDisapprovePP} type="button" sx={{ p: '10px', color: 'red' }} aria-label="disapprove">
                        <CancelIcon />
                    </IconButton>
                </>
            ) : null,
            operasi: operasi ? (
                <>
                    <IconButton onClick={handleViewRegForm} type="button" sx={{ p: '10px', color: 'black' }} aria-label="view">
                        <PageviewIcon />
                    </IconButton>
                    <IconButton onClick={handleEditRegForm} type="button" sx={{ p: '10px', color: 'black' }} aria-label="view">
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={handleDeleteAppForm} type="button" sx={{ p: '10px', color: 'black' }} aria-label="disapprove">
                        <DeleteIcon />
                    </IconButton>
                </>
            ) : null,
        };
    }

    const rows = [
        createData('1.', '20/01/2023', 'TLOH1P/2023-01651', 'SITI KHAIRIAH BINTI ABDULLAH', '800712111112', 'TLOH/0005/2023', '', true, true),
    ];
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
                                    <TableCell align="center" sx={{ width: '20%' }}>{row.resit}</TableCell>
                                    <TableCell align="center" sx={{ width: '20%' }}>{row.operasi}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br /><br />
                <Box sx={{ minWidth: 500 }} align="center">
                    <Button variant="contained" onClick={handleBack}>Kembali</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="contained" onClick={handleNext}>Seterusnya</Button>

                </Box>
                <br /><br />

            </Container>
        </Stack>

    );
}
