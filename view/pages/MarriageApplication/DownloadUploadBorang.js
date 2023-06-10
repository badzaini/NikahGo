import * as React from 'react';
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
    Paper
} from '@mui/material';

import AnnouncementIcon from '@mui/icons-material/Announcement';
import WarningIcon from '@mui/icons-material/Warning';

const createData = (bil, borang, muatturun, muatnaik, operasi) => {
    return { bil, borang, muatturun, muatnaik, operasi };
};

export default function DownloadUploadBorang() {
    const [selectedFile, setSelectedFile] = React.useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleDownload1 = () => {
        // Perform the file download logic here
        // For example, you can create a download link for the file
        const fileUrl = 'https://example.com/path/to/file.pdf';
        const anchorElement = document.createElement('a');
        anchorElement.href = fileUrl;
        anchorElement.target = '_blank';
        anchorElement.download = 'filename.pdf';
        anchorElement.click();
    };

    const handleDownload2 = () => {
        // Perform the file download logic here
        // For example, you can create a download link for the file
        const fileUrl = 'https://example.com/path/to/file.pdf';
        const anchorElement = document.createElement('a');
        anchorElement.href = fileUrl;
        anchorElement.target = '_blank';
        anchorElement.download = 'filename.pdf';
        anchorElement.click();
    };

    const handleDownload3 = () => {
        // Perform the file download logic here
        // For example, you can create a download link for the file
        const fileUrl = 'https://example.com/path/to/file.pdf';
        const anchorElement = document.createElement('a');
        anchorElement.href = fileUrl;
        anchorElement.target = '_blank';
        anchorElement.download = 'filename.pdf';
        anchorElement.click();
    };

    const handleDownload4 = () => {
        // Perform the file download logic here
        // For example, you can create a download link for the file
        const fileUrl = 'https://example.com/path/to/file.pdf';
        const anchorElement = document.createElement('a');
        anchorElement.href = fileUrl;
        anchorElement.target = '_blank';
        anchorElement.download = 'filename.pdf';
        anchorElement.click();
    };

    const handleUpload1 = () => {
        // Perform the file upload logic here
        // For example, you can use FormData and send it to the server
    };

    const handleUpload2 = () => {
        // Perform the file upload logic here
        // For example, you can use FormData and send it to the server
    };

    const handleUpload3 = () => {
        // Perform the file upload logic here
        // For example, you can use FormData and send it to the server
    };

    const handleUpload4 = () => {
        // Perform the file upload logic here
        // For example, you can use FormData and send it to the server
    };

    const rows = [
        createData('1.', 'Borang 2 [Seksyen 16] - Permohonan Untuk Kebenaran Berkahwin *', handleDownload1, '', handleUpload1),
        createData('2.', 'Borang 4 [Seksyen 13] - Persetujuan Dan Wakalah Wali *', handleDownload2, '', handleUpload2),
        createData('3.', 'Borang 1 [Seksyen 4] - Akuan Pemastautinan *', handleDownload3, '', handleUpload3),
        createData('4.', 'Borang Ujian Saringan HIV Pemohon *', handleDownload4, '', handleUpload4),
    ];

    return (
        <Stack spacing={2}>
            <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", mt: 10, ml: 40 }} component={Paper}>
                <br /><br />
                <Typography variant="h4">
                    <b>Permohonan Berkahwin</b>
                </Typography>
                <br />
                <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", backgroundColor: "#faf5f5" }} component={Paper}>
                    <br />
                    <Typography component="p">
                        <b>PENTING!</b>
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AnnouncementIcon sx={{ marginRight: '0.5em', fontSize: '1.2em', color: 'red' }} />
                        <Typography component="p">
                            Sila klik pada butang Hantar untuk menghantar permohonan. Untuk melengkapkan permohonan, sila muat turun dan lengkapkan <b>Borang 2 [Seksyen 16]</b>, <b>Borang 4 [Seksyen 13]</b>, <b>Borang 1 [Seksyen 4]</b>, dan <b>Borang Ujian Saringan HHIV Pemohon</b>.
                            Dan muat naik semula borang - borang tersebut bagi proses seterusnya.
                        </Typography>
                    </Box>
                    <br />
                </Container>
                <br /><br />
                <Box align="center">
                    <Typography variant="h6">
                        <b>Permohonan Berkahwin</b>
                    </Typography>
                </Box>
                <Typography component="p">
                    <b>Nama Pemohon: </b> <br /> {/* example output: ABDUL NAHIM BIN MUSAB (820919065488)*/}
                    <b>Nama Pasangan: </b> <br /> {/* example output: SITI MAISARAH BINTI ROSMAH (750721065131)*/}
                    <b>No. Slip Permohonan Online: </b> <br /> {/* example output: M2/2023-005494*/}
                </Typography>
                <hr />
                <br />
                <TableContainer sx={{ minWidth: 500 }} component={Paper}>
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center"><b>Bil.</b></TableCell>
                                <TableCell align="center"><b>Borang</b></TableCell>
                                <TableCell align="center"><b>Muat Turun</b></TableCell>
                                <TableCell align="center"><b>Dokument yang telah dimuat naik</b></TableCell>
                                <TableCell align="center"><b>Operasi</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.bil}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.bil}
                                    </TableCell>
                                    <TableCell align="left">{row.borang}</TableCell>
                                    <TableCell align="center">
                                        <Button onClick={row.muatturun} variant="contained">Download</Button>
                                    </TableCell>
                                    <TableCell align="center">{row.muatnaik}</TableCell>
                                    <TableCell align="center">
                                        <input type="file" onChange={handleFileChange} />
                                        {selectedFile && <p>Selected File: {selectedFile.name}</p>}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br />
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
