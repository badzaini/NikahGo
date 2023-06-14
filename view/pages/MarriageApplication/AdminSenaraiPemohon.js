import * as React from 'react';
import { useState, useEffect } from 'react';
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
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PageviewIcon from '@mui/icons-material/Pageview';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import { getAllMarriageReqs } from '../api/marriage';

export default function AdminSenaraiPemohon() {
    const [marriages, setMarriages] = useState([]);
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

    const handleConfirmApproveViewAppForm = () => {
        router.push("/MarriageApplication/AdminMarraigeAppForm");
    };

    const handleConfirmApproveEditAppForm = () => {
        router.push("/MarriageApplication/AdminMarraigeAppForm");
    };

    const handleConfirmApproveMarriageApp = () => {
        router.push("");
    };

    const handleConfirmDisapproveMarriageApp = () => {
        router.push("");
    };

    const handleConfirmApproveDeleteAppForm = () => {
        router.push("");
    };


    function createData(bil, icnamapemohon, noslippemohon, tarikhmohon, status, resit, operasi) {
        return {
            bil,
            icnamapemohon,
            noslippemohon,
            tarikhmohon,
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
                    <IconButton onClick={handleConfirmApproveViewAppForm} type="button" sx={{ p: '10px', color: 'black' }} aria-label="view">
                        <PageviewIcon />
                    </IconButton>
                    <IconButton onClick={handleConfirmApproveEditAppForm} type="button" sx={{ p: '10px', color: 'black' }} aria-label="view">
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={handleConfirmApproveMarriageApp} type="button" sx={{ p: '10px', color: 'green' }} aria-label="approve">
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton onClick={handleConfirmDisapproveMarriageApp} type="button" sx={{ p: '10px', color: 'red' }} aria-label="disapprove">
                        <CancelIcon />
                    </IconButton>
                    <IconButton onClick={handleConfirmApproveDeleteAppForm} type="button" sx={{ p: '10px', color: 'black' }} aria-label="disapprove">
                        <DeleteIcon />
                    </IconButton>
                </>
            ) : null,
        };
    }

    const rows = [
        createData('1.', '820919065488 ABDUL NAHIM BIN MUSAB', 'M2/2023-005494', '05/01/2023', 'DALAM PROSES', true, true),
        createData('2.', '', '', '', 'DITOLAK', true, true),
        createData('3.', '', '', '', 'DTERIMA', true, true),
    ];

    useEffect(() => {
        const fetchMarriages = async () => {
            try {
                const response = await getAllMarriageReqs();
                setMarriages(response);
                console.log(response);
            } catch (error) {
                console.log('Error fetching courses:', error);
            }
        };

        fetchMarriages();
    }, []);

    return (
        <Stack spacing={2}>
            <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", mt: 10, ml: 40 }} component={Paper}>
                <br /><br />

                <Typography variant="h4"><b>Permohonan Berkahwin - Senarai Pemohon</b></Typography>

                <TableContainer sx={{ minWidth: 500, mt: 10 }} component={Paper}>
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center"><b>Bil.</b></TableCell>
                                <TableCell align="center"><b>No.KP/Nama Pemohon</b></TableCell>
                                <TableCell align="center"><b>No.KP/Nama Pasangan</b></TableCell>
                                <TableCell align="center"><b>Status</b></TableCell>
                                <TableCell align="center"><b>Operasi</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {marriages.map((d, i) => (
                                <TableRow
                                    key={i}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {i + 1}
                                    </TableCell>
                                    <TableCell align="center">{d.userMarriageIc}</TableCell>
                                    <TableCell align="center">{d.partnerMarriageIc}</TableCell>
                                    <TableCell align="center">{d.status}</TableCell>
                                    <TableCell align="center">
                                        <IconButton onClick={handleConfirmApproveViewAppForm} type="button" sx={{ p: '10px', color: 'black' }} aria-label="view">
                                            <PageviewIcon />
                                        </IconButton>
                                        <IconButton onClick={handleConfirmApproveDeleteAppForm} type="button" sx={{ p: '10px', color: 'black' }} aria-label="disapprove">
                                            <DeleteIcon />
                                        </IconButton></TableCell>
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
