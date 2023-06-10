import * as React from 'react';
import { useState } from 'react';
import {
    Box,
    Container,
    Button,
    Typography,
    Stack,
    Paper,
    Divider
} from '@mui/material';


export default function ProofPayment() {
    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <Stack spacing={2}>
            <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", mt: 10, ml: 40, mb: 10 }} component={Paper}>
                <Box>
                    <br />
                    <Typography variant="h4"><b>Permohonan Berkahwin - Pembayaran </b></Typography>
                    <br /><br />
                </Box>

                <Container sx={{ display: "", justifyContent: "center", width: "80%", height: "100%", backgroundColor: "#faf5f5" }} component={Paper}>
                    <Box>
                    <br />
                        <Box sx={{ marginTop: 2, bgcolor: '#49516F', color: 'white', width: 520, height: 30, borderRadius: 1 }}>
                            <Typography variant="body" sx={{ fontSize: '20px', marginLeft: 4 }}>
                                PEMBAYARAN YURAN PERMOHONAN BERKAHWIN
                            </Typography>
                        </Box>
                        <br />
                        <Typography component="p">
                            Pembayaran yuran permohonan berkahwin adalah sebanyak <b>RM80.00</b>. Selepas membuat pembayaran, sila muat
                            naik resit sebagai bukti pembayaran.
                        </Typography>
                        <br /><br />

                        <Typography component="p" align="center">
                            <b>Nama Bank:</b> <br />
                            <b>No. Akaun</b> <br />
                            <b>Rujukan:</b><br />
                        </Typography>
                        <br /><br />

                        <Typography component="p"><b>Muat Naik Resit Pembayaran</b></Typography>
                        <Divider />
                        <br />

                        <div>
                            <input type="file" onChange={handleFileChange} />
                            {selectedFile && <p>Selected File: {selectedFile.name}</p>}
                        </div>
                        <br /><br />
                    </Box>
                </Container>
                <br /><br />

                <Box align="center">
                    <Button variant="contained">Kembali</Button>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
                    <Button variant="contained">Simpan</Button>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
                    <Button variant="contained">Seterusnya</Button> {/*click button will go to Maklumat Perkahwinan Page*/}
                </Box>
                <br /><br />
            </Container>
        </Stack>
    );
}
