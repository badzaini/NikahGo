import * as React from 'react';
import { useState, useEffect } from 'react';
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
import { useRouter } from 'next/router';
import { getAllBookings } from '../api/course';

function createData(bil, namepemohon, mykad, jantina, kehadiran, operasi) {
    return { bil, namepemohon, mykad, jantina, kehadiran, operasi };
}

const rows = [
    createData('', '', '', '', '', '', '', '', '', '', '', '', '', '',),
];

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function AdminApproval() {
    const [bookings, setBookings] = useState([]);
    const router = useRouter(); // Initialize the router variable using the useRouter hook

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await getAllBookings();
                setBookings(response);
                console.log(response);
            } catch (error) {
                console.log('Error fetching courses:', error);
            }
        };

        fetchBookings();
    }, []);

    const handleBack = () => {
        router.push("/PreMarriageCourse/AdminAttendance");
    };

    const handleNext = () => {
        router.push("/PreMarriageCourse/AdminKPPILaporan");
    };
    return (
        <Stack spacing={2}>

            <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", mt: 20, ml: 40, mb: 10 }} component={Paper}>

                <Box>
                    <br />
                    <Typography variant="h4">
                        <b>Maklumat Peserta - Kelulusan</b>
                    </Typography>
                </Box>
                <Container>
                    <br />
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 0 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center"><b>Bil.</b></TableCell>
                                    <TableCell align="center"><b>No. Kad Pengenalan</b></TableCell>
                                    <TableCell align="center"><b>No. Kursus</b></TableCell>
                                    <TableCell align="center"><b>Operasi</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {bookings.map((d, i) => (
                                    <TableRow
                                        key={i}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {i + 1}
                                        </TableCell>
                                        <TableCell align="center">{d.userBookingId}</TableCell>
                                        <TableCell align="center">{d.courseId}</TableCell>
                                        <TableCell align="center">{d.status}</TableCell>
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

            </Container>

        </Stack>
    );
}
