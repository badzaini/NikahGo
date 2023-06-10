import React from 'react';
import { useRouter } from 'next/router';
import {
    Box,
    Typography,
    Button,
    Paper,
    Stepper,
    Step,
    StepLabel,
    Grid,
    Container,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    InputAdornment,
    Stack
} from "@mui/material";
import { grey } from '@mui/material/colors';

export default function Apply() {
    const router = useRouter();

const handleSelesai = () => {
    router.push("/KadNikah/Request");
}
    return (
        <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center", flexDirection: "column", my: 20, width: "100%", alignItems: "center" }}>
            <Box>
                <Typography variant="h4" gutterBottom sx={{ borderLeft: "13px solid black" }}>Permohonan Kad Nikah</Typography>
            </Box>
            <Paper sx={{ p: 3, borderRadius: 4, width: "75%" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box sx={{ bgcolor: "#F3486A", py: 1, color: "white", width: "100%" }}>
                            <Typography sx={{ fontWeight: "bold", pl: 1 }}>Butiran Perkahwinan</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ fontWeight: "bold" }}>Nama Suami: </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ fontWeight: "bold" }}>Nama Isteri: </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ fontWeight: "bold", mb: 1 }}>Tarikh Akad Nikah: </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{ fontWeight: "bold" }}>Muat Naik Passport Suami</Typography>
                        <Button disableElevation="true" variant="contained" size="small" sx={{
                            bgcolor: "white", color: "black", fontWeight: "bold", border: "1px solid black", '&:hover': {
                                backgroundColor: grey[300],
                            },
                            mb: 1
                        }}>
                            Muat Naik
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{ fontWeight: "bold" }}>Muat Naik Passport Isteri</Typography>
                        <Button disableElevation="true" variant="contained" size="small" sx={{
                            bgcolor: "white", color: "black", fontWeight: "bold", border: "1px solid black", '&:hover': {
                                backgroundColor: grey[300],
                            },
                            mb: 1
                        }}>
                            Muat Naik
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{ bgcolor: "#F3486A", py: 1, color: "white" }}>
                            <Typography sx={{ fontWeight: "bold", pl: 1 }}>Pembayaran Nikah</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                            Pembayaran kad nikah adalah sebanyak RM 40.00. Selepas
                            membuat pembayaran, sila muat naik resit sebagai bukti pembayaran.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{ fontWeight: "bold" }}>
                                Nama Bank:
                            </Typography>
                            <Typography>
                                Bank Islam
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{ fontWeight: "bold" }}>
                                No. Akaun:
                            </Typography>
                            <Typography>
                                1234567890
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                            Muat naik resit pembayaran*
                        </Typography>
                        <Button disableElevation="true" variant="contained" size="small" sx={{
                            bgcolor: "white", color: "black", fontWeight: "bold", border: "1px solid black", '&:hover': {
                                backgroundColor: grey[300],
                            }
                        }}>
                            Muat Naik
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
                <Button variant="contained" onClick={handleSelesai}>Selesai</Button>
            </Box>
        </Container>
    )
}
