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
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useState, useEffect } from 'react';
import dayjs from "dayjs";
import { useRouter } from 'next/router';
import { createCourseAnjuran, getAllCourses } from '../api/course';

export default function AdminCourseInfo() {
    //Declare Variable
    const [place, setPlace] = useState("");
    const [address, setAddress] = useState("");
    const [paid, setPaid] = useState("");
    const [city, setCity] = useState("");
    const [price, setPrice] = useState("");
    const [capacity, setCapacity] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [dateEnd, setDateEnd] = useState("");
    const [timeStart, setTimeStart] = useState("");
    const [timeEnd, setTimeEnd] = useState("");
    const [pic, setPic] = useState("");
    const [picPhone, setPicPhone] = useState("");
    const [note, setNote] = useState("");
    const [publish, setPublish] = useState("");
    const [courses, setCourses] = useState([]);
    const router = useRouter(); // Initialize the router variable using the useRouter hook

    //Combine into Object
    const courseAnjuranData = {
        place: place,
        address: address,
        paid: paid,
        city: city,
        price: price,
        capacity: capacity,
        dateStart: dateStart,
        dateEnd: dateEnd,
        timeStart: timeStart,
        timeEnd: timeEnd,
        pic: pic,
        picPhone: picPhone,
        note: note,
        publish: publish
    }
    //Bila tekan Simpan function
    const handleSave = async (event) => {
        event.preventDefault();
        try {
            //Pass data into apiRequest
            const response = await createCourseAnjuran({ courseAnjuranData });
            // Handle the response and any necessary actions
            console.log(response);
        } catch (error) {
            // Handle any errors
            console.error(error);
        }
        // router.push("/Registration/Login");
    };

    const handleNext = () => {
        router.push("/PreMarriageCourse/AdminPaymentProof");
    };

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await getAllCourses();
                setCourses(response);
                console.log(response);
            } catch (error) {
                console.log('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

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

                    <TextField fullWidth id="outlined-basic" label="Tempat" variant="outlined" value={place} name="place" required onChange={(e) => setPlace(e.target.value)} />
                    <br /><br />

                    {/* Alamat*/}
                    <TextField fullWidth id="outlined-basic" label="Alamat" variant="outlined" value={address} name="address" required onChange={(e) => setAddress(e.target.value)} />
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
                                    name="paid"
                                    required
                                    onChange={(e) => setPaid(e.target.value)}
                                >
                                    {/* Menu Items */}
                                    <MenuItem value={"Pejabat Agama Islam Daerah Pekan"}>Pejabat Agama Islam Daerah Pekan</MenuItem>
                                    <MenuItem value={"Pejabat Agama Islam Daerah Kuantan"}>Pejabat Agama Islam Daerah Kuantan</MenuItem>
                                    <MenuItem value={"Pejabat Agama Islam Daerah Rompin"}>Pejabat Agama Islam Daerah Rompin</MenuItem>
                                    <MenuItem value={"Pejabat Agama Islam Daerah Muadzam Shah"}>Pejabat Agama Islam Daerah Muadzam Shah</MenuItem>
                                    <MenuItem value={"Pejabat Agama Islam Daerah Maran"}>Pejabat Agama Islam Daerah Maran</MenuItem>
                                    <MenuItem value={"Pejabat Agama Islam Daerah Jengka"}>Pejabat Agama Islam Daerah Jengka</MenuItem>
                                    <MenuItem value={"Pejabat Agama Islam Daerah Kuantan Barat"}>Pejabat Agama Islam Daerah Kuantan Barat</MenuItem>
                                    <MenuItem value={"Pejabat Agama Islam Daerah Temerloh"}>Pejabat Agama Islam Daerah Temerloh</MenuItem>
                                    <MenuItem value={"Pejabat Agama Islam Daerah Bentong"}>Pejabat Agama Islam Daerah Bentong</MenuItem>
                                    <MenuItem value={"Pejabat Agama Islam Daerah Jerantut"}>Pejabat Agama Islam Daerah Jerantut</MenuItem>
                                    <MenuItem value={"Pejabat Agama Islam Daerah Raub"}>Pejabat Agama Islam Daerah Raub</MenuItem>
                                    <MenuItem value={"Pejabat Agama Islam Daerah Kuala Lapis"}>Pejabat Agama Islam Daerah Kuala Lapis</MenuItem>
                                    <MenuItem value={"Pejabat Agama Islam Daerah Bera"}>Pejabat Agama Islam Daerah Bera</MenuItem>
                                    <MenuItem value={"Pejabat Agama Islam Daerah Cameron Highland"}>Pejabat Agama Islam Daerah Cameron Highland</MenuItem>
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
                                    value={city}
                                    name="city"
                                    label="Daerah"
                                    onChange={(e) => setCity(e.target.value)}
                                >
                                    {/* Menu Items */}
                                    <MenuItem value={"Jerantut"}>Jerantut</MenuItem>
                                    <MenuItem value={"Tanah Tinggi Cameron"}>Tanah Tinggi Cameron</MenuItem>
                                    <MenuItem value={"Temerloh"}>Temerloh</MenuItem>
                                    <MenuItem value={"Raub"}>Raub</MenuItem>
                                    <MenuItem value={"Bentong"}>Bentong</MenuItem>
                                    <MenuItem value={"Rompin"}>Rompin</MenuItem>
                                    <MenuItem value={"Kuala Lipis"}>Kuala Lipis</MenuItem>
                                    <MenuItem value={"Maran"}>Maran</MenuItem>
                                    <MenuItem value={"Pekan"}>Pekan</MenuItem>
                                    <MenuItem value={"Bera"}>Bera</MenuItem>
                                    <MenuItem value={"Kuantan"}>Kuantan</MenuItem>
                                </Select>
                            </FormControl>
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            {/* CourseFee*/}
                            <TextField fullWidth id="outlined-basic" label="Yuran Kursus:" variant="outlined" value={price} name="price" required onChange={(e) => setPrice(e.target.value)} />
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            {/* Kapasiti*/}
                            <TextField fullWidth id="outlined-basic" label="Kapasiti:" variant="outlined" value={capacity} name="capcity" required onChange={(e) => setCapacity(e.target.value)} />
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            {/* Start Date*/}
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <FormControl fullWidth>
                                    <DatePicker
                                        label={<Grid sx={{ display: 'flex' }}>Tarikh Mula:<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                        value={dateStart}
                                        name="dateStart"
                                        onChange={(newDate) => setDateStart(newDate)}
                                    />
                                </FormControl>
                            </LocalizationProvider>
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            {/* End Date*/}
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <FormControl fullWidth>
                                    <DatePicker
                                        label={<Grid sx={{ display: 'flex' }}>Tarikh Tamat:<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                        value={dateEnd}
                                        name="dateEnd"
                                        onChange={(newDate) => setDateEnd(newDate)}
                                    />
                                </FormControl>
                            </LocalizationProvider>
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            {/* Start Time*/}
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <FormControl fullWidth>
                                    <TimePicker
                                        label={<Grid sx={{ display: 'flex' }}>Masa Mula:<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                        value={timeStart}
                                        name="timeStart"
                                        onChange={(newTime) => setTimeStart(newTime)}
                                    />
                                </FormControl>
                            </LocalizationProvider>
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            {/* End Time*/}
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <FormControl fullWidth>
                                    <TimePicker
                                        label={<Grid sx={{ display: 'flex' }}>Masa Tamat:<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                        value={timeEnd}
                                        name="timeEnd"
                                        onChange={(newTime) => setTimeEnd(newTime)}
                                    />
                                </FormControl>
                            </LocalizationProvider>
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            {/* StaffContact*/}
                            <TextField fullWidth id="outlined-basic" label="Pengawai Dihubungi:" variant="outlined" name="pic" value={pic} required onChange={(e) => setPic(e.target.value)} />
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            {/* Telefon*/}
                            <TextField fullWidth id="outlined-basic" label="No Telefon:" variant="outlined" required name="picPhone" value={picPhone} onChange={(e) => setPicPhone(e.target.value)} />
                            <br /><br />
                        </Grid>
                    </Grid>

                    {/* Catatan*/}
                    <TextField fullWidth id="outlined-basic" label="Catatan:" variant="outlined" required name="note" value={note} onChange={(e) => setNote(e.target.value)} />
                    <br /><br />

                    {/* Terbitkan*/}
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Terbitkan Kepada Umum</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={publish}
                            name="publish"
                            label="terbitkan Kepada Umun:"
                            onChange={(e) => setPublish(e.target.value)}
                        >
                            {/* Menu Items */}
                            <MenuItem value={10}>Ya</MenuItem>
                            <MenuItem value={20}>Tidak</MenuItem>
                        </Select>

                    </FormControl>
                    <br /><br />

                </Box>
                <Box align="center">
                    <Button variant="contained" type="submit" onClick={handleSave}>Simpan</Button>
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
                            {courses.map((d, i) => (
                                <TableRow
                                    key={i}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {i + 1}
                                    </TableCell>
                                    <TableCell align="center">{d.place}</TableCell>
                                    <TableCell align="center">{d.address}</TableCell>
                                    <TableCell align="center">{d.paid}</TableCell>
                                    <TableCell align="center">{d.city}</TableCell>
                                    <TableCell align="center">{d.price}</TableCell>
                                    <TableCell align="center">{d.capacity}</TableCell>
                                    <TableCell align="center">{d.dateStart}</TableCell>
                                    <TableCell align="center">{d.dateEnd}</TableCell>
                                    <TableCell align="center">{d.timeStart}</TableCell>
                                    <TableCell align="center">{d.timeEnd}</TableCell>
                                    <TableCell align="center">{d.pic}</TableCell>
                                    <TableCell align="center">{d.picPhone}</TableCell>
                                    <TableCell align="center">{d.note}</TableCell>
                                    <TableCell align="center">{d.publish}</TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br /><br />
                <Box sx={{ minWidth: 500, ml: 106 }}>
                    <Button variant="contained" onClick={handleNext}>Seterusnya</Button>
                </Box>
                <br /><br />
            </Container>
        </Stack>
    );
}
