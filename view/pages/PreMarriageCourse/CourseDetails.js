import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {
    Typography,
    Stack,
    Paper
} from '@mui/material'
import { useRouter } from 'next/router';
import { getCourseDetails } from '../api/course';

export default function CourseDetails() {
    const router = useRouter(); // Initialize the router variable using the useRouter hook
    const [course, setCourse] = useState([]);

    const handleBack = () => {
        router.push("/PreMarriageCourse/ChooseCourse");
    };

    useEffect(() => {
        const fetchCourseDetails = async () => {
            const courseId = router.query.id;
            if (courseId) {
                try {
                    const response = await getCourseDetails({ courseId });
                    console.log(response);
                    setCourse(response);
                } catch (error) {
                    console.log('Error fetching course details:', error);
                }
            }
        };

        fetchCourseDetails();
    }, [router.query.id]);


    return (
        <Stack spacing={2}>
            <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", mt: 10, ml: 40 }} component={Paper}>
                <br /><br />
                <Typography variant="h4"><b>Pendaftaran Kursus Pra Perkahwinan</b></Typography>
                <br /><br />

                <Box align="center">
                    <Typography variant="h6">
                        <b>Butiran Maklumat Anjuran</b>
                    </Typography>
                </Box>
                <br />
                <Container sx={{ display: "", justifyContent: "center", width: "70%", height: "100%", backgroundColor: "#faf5f5" }} component={Paper}>
                    <br />
                    <Typography variant="body" component='p'>
                        <b>Tempat:</b>{course.place}<br /><br />
                        <b>Alamat:</b>{course.address}<br /><br />
                        <b>Daerah:</b>{course.city}<br /><br />
                        <b>Yuran Kursus:</b>{course.price}<br /><br />
                        <b>Tarikh:</b>{course.dateStart}<br /><br />
                        <b>Masa:</b>{course.timeStart}<br /><br />
                        <b>Kapasiti Peserta:</b>{course.capacity}<br /><br />
                        <b>Pengawai Dihubungi:</b>{course.pic}<br /><br />
                        <b>No Telefon:</b>{course.picPhone}<br /><br />
                    </Typography>

                    <Box align="center">
                        <Button variant="contained" onClick={handleBack}>Kembali</Button>
                    </Box>
                    <br /><br />
                </Container>
                <br /><br />
            </Container>
        </Stack>
    );
}
