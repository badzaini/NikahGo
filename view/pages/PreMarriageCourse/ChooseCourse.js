import * as React from 'react';
import {
    Button,
    TextField,
    Link,
    Grid,
    Typography,
    Container,
    Box,
    Stack,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TableContainer,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
    Table,
    Paper
} from '@mui/material';

function createData(bil, anjuran, tempat, tarikh, kapasiti, kekosongan, paparlanjut, daftarpenyertaan) {
    return { bil, anjuran, tempat, tarikh, kapasiti, kekosongan, paparlanjut, daftarpenyertaan };
  }
  
  const rows = [
    createData('1.', 'Pejabat Agama Islam Temerloh', 'Dewan Kuliah Mashas Temerloh', '28/01/2023 - 29/01/2023', '84', '5', '', ''),
    createData('1.', 'Pejabat Agama Islam Temerloh', 'Dewan Kuliah Mashas Temerloh', '28/01/2023 - 29/01/2023', '84', '5', '', ''),
  ];

export default function ChooseCourse() {
    const [anjuran, setAnjuran] = React.useState('');

    const handleChangeAnjuran = (event) => {
        setAnjuran(event.target.value);
    };
    return (
        <Stack sx={{ mt: 20 }} spacing={2}>
            <Container>
                <Typography variant="h4">Pendaftaran Kursus Pra Perkahwinan</Typography>

                <Typography variant="h5">
                    Borang Pendaftaran Kursus Pra Perkahwinan Islam Jabatan Agama Islam Pahang
                </Typography>

                <br /><br />

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Pilih Anjuran</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={anjuran}
                        label="Pilih Anjuran"
                        onChange={handleChangeAnjuran}
                    >
                        <MenuItem value={10}>Jabatan Agama Islam Negeri Pahang</MenuItem>
                        <MenuItem value={20}>Pejabat Agama Islam Bentong</MenuItem>
                        <MenuItem value={30}>Pejabat Agama Islam Bera</MenuItem>
                        <MenuItem value={40}>Pejabat Agama Islam Cameron Highlands</MenuItem>
                        <MenuItem value={50}>Pejabat Agama Islam Chenor</MenuItem>
                        <MenuItem value={60}>Pejabat Agama Islam Jengka</MenuItem>
                        <MenuItem value={70}>Pejabat Agama Islam Jerantut</MenuItem>
                        <MenuItem value={80}>Pejabat Agama Islam Kuantan</MenuItem>
                        <MenuItem value={90}>Pejabat Agama Islam Kuantan Barat</MenuItem>
                        <MenuItem value={100}>Pejabat Agama Islam Lipis</MenuItem>
                        <MenuItem value={110}>Pejabat Agama Islam Maran</MenuItem>
                        <MenuItem value={120}>Pejabat Agama Islam Muadzam Shah</MenuItem>
                        <MenuItem value={130}>Pejabat Agama Islam Pekan</MenuItem>
                        <MenuItem value={140}>Pejabat Agama Islam Raub</MenuItem>
                        <MenuItem value={150}>Pejabat Agama Islam Rompin</MenuItem>
                        <MenuItem value={160}>Pejabat Agama Islam Temerloh</MenuItem>
                    </Select>
                </FormControl>
            </Container>
            <Container>
                <TableContainer sx={{ minWidth: 500, ml: 32 }} component={Paper}>
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center"><b>Bil.</b></TableCell>
                                <TableCell align="center"><b>Anjuran</b></TableCell>
                                <TableCell align="center"><b>Tempat</b></TableCell>
                                <TableCell align="center"><b>Tarikh</b></TableCell>
                                <TableCell align="center"><b>Kapasiti Peserta</b></TableCell>
                                <TableCell align="center"><b>Kekosongan</b></TableCell>
                                <TableCell align="center"><b>Papar Lanjut</b></TableCell>
                                <TableCell align="center"><b>Daftar Penyertaan</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
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
                                    <TableCell align="center">{row.paparlanjut}</TableCell>
                                    <TableCell align="center">{row.daftarpenyertaan}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br /><br />
                <Box sx={{ minWidth: 500, ml: 100 }}>
                    <Button variant="contained">Kembali</Button>
                </Box>

            </Container>
        </Stack>

    );
}
