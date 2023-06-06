import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Grid from '@mui/material/Unstable_Grid2';


function createData(bil, tempat, alamat, paid, daerah, yurankursus, kapasiti, tarikhmula, tarikhtamat, masamula, masatamat, pengawaicontact, telefon, catatan, publish, operasi) {
    return { bil, tempat, alamat, paid, daerah, yurankursus, kapasiti, tarikhmula, tarikhtamat, masamula, masatamat, pengawaicontact, telefon, catatan, publish, operasi };
}

const rows = [
    createData('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
];


export default function CourseInfoAdmin() {
    const [daerah, setDaerah] = React.useState('');

    const [paid, setPAID] = React.useState('');

    const [publish, setPublish] = React.useState('');

    const handleChangeDaerah = (event) => {
        setDaerah(event.target.value);
    };

    const handleChangePAID = (event) => {
        setPAID(event.target.value);
    };

    const handleChangePublish = (event) => {
        setPublish(event.target.value);
    };

    return (
        <Stack spacing={2}>

            <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", mt: 10, ml: 40 }} component={Paper}>

                <Box>
                    <br />
                    <Typography variant="h4">
                        <b>Maklumat Kursus</b>
                    </Typography>

                    <br />

                    {/* Daerah*/}
                    <TextField fullWidth id="outlined-basic" label="Tempat" variant="outlined" required />
                    <br /><br />

                    {/* Alamat*/}
                    <TextField fullWidth id="outlined-basic" label="Alamat" variant="outlined" required />
                    <br /><br />

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid xs={6}>
                            {/* PAID*/}
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">PAID</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={paid}
                                    label="PAID"
                                    onChange={handleChangePAID}
                                >
                                    {/* Menu Items */}
                                    <MenuItem value={10}>Pejabat Agama Islam Daerah Pekan</MenuItem>
                                    <MenuItem value={20}>Pejabat Agama Islam Daerah Kuantan</MenuItem>
                                    <MenuItem value={30}>Pejabat Agama Islam Daerah Rompin</MenuItem>
                                    <MenuItem value={40}>Pejabat Agama Islam Daerah Muadzam Shah</MenuItem>
                                    <MenuItem value={50}>Pejabat Agama Islam Daerah Maran</MenuItem>
                                    <MenuItem value={60}>Pejabat Agama Islam Daerah Jengka</MenuItem>
                                    <MenuItem value={70}>Pejabat Agama Islam Daerah Kuantan Barat</MenuItem>
                                    <MenuItem value={80}>Pejabat Agama Islam Daerah Temerloh</MenuItem>
                                    <MenuItem value={90}>Pejabat Agama Islam Daerah Bentong</MenuItem>
                                    <MenuItem value={100}>Pejabat Agama Islam Daerah Jerantut</MenuItem>
                                    <MenuItem value={110}>Pejabat Agama Islam Daerah Raub</MenuItem>
                                    <MenuItem value={120}>Pejabat Agama Islam Daerah Kuala Lapis</MenuItem>
                                    <MenuItem value={130}>Pejabat Agama Islam Daerah Bera</MenuItem>
                                    <MenuItem value={140}>Pejabat Agama Islam Daerah Cameron Highland</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid xs={6}>
                            {/* Daerah*/}
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Daerah</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={daerah}
                                    label="Daerah"
                                    onChange={handleChangeDaerah}
                                >
                                    {/* Menu Items */}
                                    <MenuItem value={10}>Jerantut</MenuItem>
                                    <MenuItem value={20}>Tanah Tinggi Cameron</MenuItem>
                                    <MenuItem value={30}>Temerloh</MenuItem>
                                    <MenuItem value={40}>Raub</MenuItem>
                                    <MenuItem value={50}>Bentong</MenuItem>
                                    <MenuItem value={60}>Rompin</MenuItem>
                                    <MenuItem value={70}>Kuala Lipisn</MenuItem>
                                    <MenuItem value={80}>Maran</MenuItem>
                                    <MenuItem value={90}>Pekan</MenuItem>
                                    <MenuItem value={100}>Bera</MenuItem>
                                    <MenuItem value={110}>Kuantan</MenuItem>
                                </Select>
                            </FormControl>
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            {/* CourseFee*/}
                            <TextField fullWidth id="outlined-basic" label="Yuran Kursus:" variant="outlined" required />
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            {/* Kapasiti*/}
                            <TextField fullWidth id="outlined-basic" label="Kapasiti:" variant="outlined" required />
                            <br /><br />
                        </Grid>
                        
                        <Grid xs={6}>
                            {/* Start Date*/}
                            <TextField fullWidth id="outlined-basic" label="Tarikh Mula:" variant="outlined" required />
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            {/* End Date*/}
                            <TextField fullWidth id="outlined-basic" label="Tarikh Tamat:" variant="outlined" required />
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            {/* Start Time*/}
                            <TextField fullWidth id="outlined-basic" label="Masa Mula:" variant="outlined" required />
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            {/* End Time*/}
                            <TextField fullWidth id="outlined-basic" label="Masa Tamat:" variant="outlined" required />
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            {/* StaffContact*/}
                            <TextField fullWidth id="outlined-basic" label="Pengawai Dihubungi:" variant="outlined" required />
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            {/* Telefon*/}
                            <TextField fullWidth id="outlined-basic" label="No Telefon:" variant="outlined" required />
                            <br /><br />
                        </Grid>
                    </Grid>

                    {/* Catatan*/}
                    <TextField fullWidth id="outlined-basic" label="Catatan:" variant="outlined" required />
                    <br /><br />

                    {/* Terbitkan*/}
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Terbitkan Kepada Umun</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={publish}
                            label="terbitkan Kepada Umun:"
                            onChange={handleChangePublish}
                        >
                            {/* Menu Items */}
                            <MenuItem value={10}>Ya</MenuItem>
                            <MenuItem value={20}>Tidak</MenuItem>
                        </Select>

                    </FormControl>
                    <br /><br />

                </Box>
                <Box align="center">
                    <Button variant="contained" type="submit">Simpan</Button>
                </Box>

                <br />

            </Container>
            <Container>
                <br />
                <TableContainer sx={{ minWidth: 1000, ml: 40 }} component={Paper}>
                    <Table sx={{ minWidth: 0 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center"><b>Bil.</b></TableCell>
                                <TableCell align="center"><b>Tempat</b></TableCell>
                                <TableCell align="center"><b>Alamat</b></TableCell>
                                <TableCell align="center"><b>PAID</b></TableCell>
                                <TableCell align="center"><b>Daerah</b></TableCell>
                                <TableCell align="center"><b>Yuran Kursus</b></TableCell>
                                <TableCell align="center"><b>Kapasiti</b></TableCell>
                                <TableCell align="center"><b>Tarikh Mula</b></TableCell>
                                <TableCell align="center"><b>Tarikh Tamat</b></TableCell>
                                <TableCell align="center"><b>Masa Mula</b></TableCell>
                                <TableCell align="center"><b>Masa Tamat</b></TableCell>
                                <TableCell align="center"><b>Pengawai Dihubungi</b></TableCell>
                                <TableCell align="center"><b>No. Telefon</b></TableCell>
                                <TableCell align="center"><b>Catatan</b></TableCell>
                                <TableCell align="center"><b>Papar Umun</b></TableCell>
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
                                    <TableCell align="center">{row.tempat}</TableCell>
                                    <TableCell align="center">{row.alamat}</TableCell>
                                    <TableCell align="center">{row.paid}</TableCell>
                                    <TableCell align="center">{row.daerah}</TableCell>
                                    <TableCell align="center">{row.yurankursus}</TableCell>
                                    <TableCell align="center">{row.kapasiti}</TableCell>
                                    <TableCell align="center">{row.tarikhmula}</TableCell>
                                    <TableCell align="center">{row.tarikhtamat}</TableCell>
                                    <TableCell align="center">{row.masamula}</TableCell>
                                    <TableCell align="center">{row.masatamat}</TableCell>
                                    <TableCell align="center">{row.pengawaicontact}</TableCell>
                                    <TableCell align="center">{row.telefon}</TableCell>
                                    <TableCell align="center">{row.catatan}</TableCell>
                                    <TableCell align="center">{row.publish}</TableCell>
                                    <TableCell align="center">{row.operasi}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br /><br />
                <Box sx={{ minWidth: 500, ml: 106 }}>
                    <Button variant="contained">Kembali</Button>
                </Box>
                <br /><br />
            </Container>
        </Stack>
    );
}
