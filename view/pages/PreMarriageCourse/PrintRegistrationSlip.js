import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {
    Typography,
    Stack,
    Paper
} from '@mui/material'

export default function CourseRegistration() {
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
                        <b>Anjuran:</b><br /><br />
                        <b>Tempat:</b><br /><br />
                        <b>Yuran Kursus:</b><br /><br />
                        <b>Tarikh:</b><br /><br />
                        <b>Masa:</b><br /><br />
                        <b>Yuran Kursus Pra Perkahwinan:</b><br /><br />
                        <b>Siri Taklimat:</b><br /><br />
                        <b>Pengawai Dihubungi:</b><br /><br />
                        <b>No Telefon:</b><br /><br />
                    </Typography>

                    <Box align="center">
                        <Button variant="contained">Kembali</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="contained">Cetak Slip</Button>
                    </Box>
                    <br /><br />
                </Container>
                <br /><br />
            </Container>
        </Stack>
    );
}
