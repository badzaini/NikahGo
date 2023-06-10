import * as React from 'react';
import {
    Typography,
    Container,
    Stack,
    Paper,
    Button,
    Box
} from '@mui/material';
import Image from 'next/image';

function createData(bil, icnamapemohon, noslippemohon, tarikhmohon, status, resit, operasi) {
    return { bil, icnamapemohon, noslippemohon, tarikhmohon, status, resit, operasi };
}

const rows = [
    createData('1.', '820919065488 ABDUL NAHIM BIN MUSAB', 'M2/2023-005494', '05/01/2023', 'DALAM PROSES', '', ''),
    createData('2.', '', '', '', 'DITOLAK', '', ''),
    createData('3.', '', '', '', 'DTERIMA', '', ''),

];


export default function AdminProofPayment() {

    return (

        <Stack spacing={2}>
            <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", mt: 10, ml: 40 }} component={Paper}>
                <br /><br />

                <Typography variant="h4"><b>Permohonan Berkahwin - Senarai Pemohon</b></Typography>

                <div>
                    {/*<Image src="MarriageApplication/Picture1.png" alt="My Image" width={500} height={300} />*/}
                </div>
                <br /><br />
                <Box align="center">
                    <Button variant="contained">Kembali</Button>
                </Box>
                <br /><br />
            </Container>
        </Stack>

    );
}
