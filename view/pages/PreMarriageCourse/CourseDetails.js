import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material'

export default function CourseRegistration() {
    return (

        <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", mt: 20 }}>

            <Typography variant="h4">
                Pendaftaran Kursus Pra Perkahwinan
            </Typography>

            <Typography variant="h5">
                Butiran Maklumat Anjuran
            </Typography>
            <br /><br />
            <Typography variant="body" component='p'>
                <b>Anjuran:</b><br /><br />
                <b>Tempat:</b><br /><br />
                <b>Tarikh::</b><br /><br />
                <b>Masa:</b><br /><br />
                <b>Yuran Kursus Pra Perkahwinan:</b><br /><br />
                <b>Kapasiti Peserta:</b><br /><br />
                <b>Siri Taklimat:</b><br /><br />
                <b>Pengawai Dihubungi:</b><br /><br />
                <b>No Telefon:</b><br /><br />
            </Typography>

            <br /><br />

            <Box>
                <Button variant="contained">Kembali</Button>
            </Box>
        </Container>

    );
}
