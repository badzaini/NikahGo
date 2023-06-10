import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
import {
    Box,
    Container,
    Button,
    Typography,
    Stack,
    Paper
} from '@mui/material';
import PageviewIcon from '@mui/icons-material/Pageview';

export default function MAApplicant() {
    
    return (
        <Stack spacing={2}>
            <Container sx={{ display: "", justifyContent: "center", width: "80%", height: "100%", mt: 10, ml: 40, mb: 10 }} component={Paper}>
                <Box>
                    <br />
                    <Typography variant="h4"><b>Permohonan Berkahwin - Maklumat Pemohon</b></Typography>
                    <br /><br />

                    <Box align="center">
                        <Typography variant="h5">
                            <b>Permohonan Berkahwin - Muatnaik Dokumen</b>
                        </Typography>
                    </Box>
                    <br />

                    <Typography component="p">
                        <b>MUATNAIK DOKUMEN</b> &nbsp;&nbsp;
                        <b>MAKLUMAT PEMOHON</b> &nbsp;&nbsp;
                        <b>MAKLUMAT PASANGAN</b> &nbsp;&nbsp;
                        <b>MAKLUMAT PERKAHWINAN</b> &nbsp;&nbsp;
                    </Typography>
                    <hr />
                    <Container sx={{ display: "", justifyContent: "center", width: "70%", height: "80%" }} component={Paper}>
                        <br />
                        <Box sx={{ml: 15 }}>
                            <Typography component="h6">
                                <b>Borang 2 [Seksyen 16] - Permohonan Untuk Kebenaran Berkahwin * </b>
                            </Typography>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid xs={6} sx={{ color: 'blue', mt: 2 }}>
                                    Permohonan Untuk Kebenaran Berkahwinan.pdf
                                </Grid>

                                <Grid xs={6}>
                                    <PageviewIcon sx={{ fontSize: 40, color: '#1E89A0' }} />
                                    <br /><br />
                                </Grid>
                            </Grid>

                            <Typography component="h6">
                                <b>Borang 4 [Seksyen 13] - Persetujuan Dan Wakalah Wali * </b>
                            </Typography>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid xs={6} sx={{ color: 'blue', mt: 2 }}>
                                    Persetujuan Dan Wakalah Wali.pdf
                                </Grid>

                                <Grid xs={6}>
                                    <PageviewIcon sx={{ fontSize: 40, color: '#1E89A0' }} />
                                    <br /><br />
                                </Grid>
                            </Grid>

                            <Typography component="h6">
                                <b>Borang 1 [Seksyen 4] - Akuan Pemastautinan *</b>
                            </Typography>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid xs={6} sx={{ color: 'blue', mt: 2 }}>
                                    Akuan Pemastautinan.pdf
                                </Grid>

                                <Grid xs={6}>
                                    <PageviewIcon sx={{ fontSize: 40, color: '#1E89A0' }} />
                                    <br /><br />
                                </Grid>
                            </Grid>

                            <Typography component="h6">
                                <b>Borang Ujian Saringan HIV Pemohon *</b>
                            </Typography>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid xs={6} sx={{ color: 'blue', mt: 2 }}>
                                Borang Ujian Saringan HIV Pemohon.pdf   
                                </Grid>

                                <Grid xs={6}>
                                    <PageviewIcon sx={{ fontSize: 40, color: '#1E89A0' }} />
                                    <br /><br />
                                </Grid>
                            </Grid>
                        </Box>



                        <Box align="center">
                            <Button variant="contained">Kembali</Button>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                            <Button variant="contained">Simpan</Button>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        </Box>
                        <br /><br />
                    </Container>
                </Box>
            </Container>
        </Stack>
    );
}
