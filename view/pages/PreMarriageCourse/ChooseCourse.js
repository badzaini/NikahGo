import * as React from 'react';
import { useEffect, useState } from 'react';
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
import PageviewIcon from '@mui/icons-material/Pageview';
import { getAllCourses } from '../api/course';



export default function ChooseCourse() {
    const [courses, setCourses] = useState([]);
    const router = useRouter(); // Initialize the router variable using the useRouter hook

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await getAllCourses();
                setCourses(response);
                console.log(response);
            } catch (error) {
                console.log('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    const handleBack = () => {
        router.push("/PreMarriageCourse/CourseTerm");
    };

    const handleViewCourseDetails = (courseId) => {
        router.push(`/PreMarriageCourse/CourseDetails?id=${courseId}`);
    };

    const handleConfirm = (courseId) => {
        router.push(`/PreMarriageCourse/RegistrationForm?id=${courseId}`);
    };

    return (
        <Stack spacing={2}>
            <Container sx={{ display: "", justifyContent: "center", width: "60%", height: "100%", mt: 15, mr: 30 }} component={Paper}>
                <br /><br />
                <Typography variant="h4"><b>Pendaftaran Kursus Pra Perkahwinan</b></Typography>
                <br /><br />
                <Box align="center">
                    <Typography variant="h6">
                        <b>Borang Pendaftaran Kursus Pra Perkahwinan Islam <br />Jabatan Agama Islam Pahang</b>
                    </Typography>
                </Box>
                <br /><br />

                {/* <Box align="center">
                    <Typography variant="p">
                        <b>Pilih Anjuran:</b>
                    </Typography>
                </Box> */}

                <Container>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 400 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center"><b>Bil.</b></TableCell>
                                    {/* <TableCell align="center"><b>Anjuran</b></TableCell> */}
                                    <TableCell align="center"><b>Tempat</b></TableCell>
                                    <TableCell align="center"><b>Tarikh</b></TableCell>
                                    <TableCell align="center"><b>Kapasiti Peserta</b></TableCell>
                                    {/* <TableCell align="center"><b>Kekosongan</b></TableCell> */}
                                    <TableCell align="center"><b>Papar Lanjut</b></TableCell>
                                    <TableCell align="center"><b>Daftar Penyertaan</b></TableCell>
                                </TableRow>
                                {/*Dalam Papar lanjut kena ada satu file icon, after click akan display CourseDetails.js page*/}
                                {/*Dalam Daftar Penyertaan kena ada satu button utk go to RegistrationForm.js*/}
                            </TableHead>
                            <TableBody>
                                {courses.map((d, i) => (
                                    <TableRow
                                        key={i}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {i + 1}
                                        </TableCell>
                                        <TableCell align="center">{d.place}</TableCell>
                                        <TableCell align="center">{d.dateStart}</TableCell>
                                        <TableCell align="center">{d.capacity}</TableCell>
                                        <TableCell align="center"> <IconButton onClick={() => handleViewCourseDetails(d._id)} type="button" sx={{ p: '10px', color: 'black' }} aria-label="view">
                                            <PageviewIcon />
                                        </IconButton></TableCell>
                                        <TableCell align="center"><Button variant="contained" onClick={() => handleConfirm(d._id)} >Daftar</Button></TableCell>
                                    </TableRow>
                                ))}
                                {/* {rows.map((row) => (
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
                                        <TableCell align="center" sx={{ width: '20%' }}>{row.paparlanjut}</TableCell>
                                        <TableCell align="center">{row.daftarpenyertaan}</TableCell>
                                    </TableRow>
                                ))} */}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <br /><br />
                    <Box align="center">
                        <Button variant="contained" onClick={handleBack} >Kembali</Button>
                    </Box>
                    <br /><br />
                </Container>
            </Container>

        </Stack>

    );
}
