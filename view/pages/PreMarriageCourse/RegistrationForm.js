import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Button,
    Typography,
    TextField,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Stack,
    Paper,
    Divider,
    Checkbox
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { book, getCourseDetails } from '../api/course';

export default function RegistrationForm() {
    const ic = useSelector((state) => state.user.ic);
    const email = useSelector((state) => state.user.email);
    const gender = useSelector((state) => state.user.gender);
    const name = useSelector((state) => state.user.name);
    const address = useSelector((state) => state.user.address);
    const phone = useSelector((state) => state.user.phone);
    const education = useSelector((state) => state.user.education);
    const income = useSelector((state) => state.user.income);
    const nationality = useSelector((state) => state.user.nationality);
    const citizenship = useSelector((state) => state.user.citizenship);
    const birth = useSelector((state) => state.user.birth);
    const occupation = useSelector((state) => state.user.occupation);
    const employSector = useSelector((state) => state.user.employSector);



    const [userIc, setUserIc] = useState(ic);
    const [userName, setUserName] = useState(name);
    const [userGender, setUserGender] = useState(gender);
    const [userEmail, setUserEmail] = useState(email);
    const [userAddress, setUserAddress] = useState(address);
    const [userPhone, setUserPhone] = useState(phone);
    const [userEducation, setUserEduation] = useState(education);
    const [userIncome, setUserIncome] = useState(income);
    const [userNationality, setUserNationality] = useState(nationality);
    const [userCitizenship, setUserCitizenship] = useState(citizenship);
    const [userOccupation, setUserOccupation] = useState(occupation);
    const [userEmploySector, setUserEmploySector] = useState(employSector);
    const [userBirth, setUserBirth] = useState(dayjs(birth));
    const [dateSuggested, setDateSuggested] = useState();
    const user = useSelector((state) => state.user);
    const [result, setResult] = useState();
    const [date, setDate] = useState(dayjs());
    const [permission, setPermission] = useState();
    const [status, setStatus] = useState();
    const [negeri, setNegeri] = useState();
    const [city, setCity] = useState();
    const [course, setCourse] = useState([]);
    const router = useRouter(); // Initialize the router variable using the useRouter hook

    const courseId = router.query.id;

    const data = {
        userBookingId: userName,
        courseId: courseId,
        status: "Pending",
    }

    console.log(data);

    useEffect(() => {
        const fetchCourseDetails = async () => {
            const courseId = router.query.id;
            if (courseId) {
                try {
                    const response = await getCourseDetails({ courseId });
                    console.log(response);
                    setCourse(response);
                } catch (error) {
                    console.log('Error fetching course details:', error);
                }
            }
        };

        fetchCourseDetails();
    }, [router.query.id]);

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleBack = () => {
        router.push("/PreMarriageCourse/ChooseCourse");
    };

    const handleConfirm = async () => {
        const insert = await book({ data });

        if (insert) {
            console.log(insert);
        } else {
            console.log("None");
        }

        router.push("/PreMarriageCourse/SlipButton");
    };
    return (
        <Stack spacing={2}>
            <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", mt: 10, ml: 40, mb: 10 }} component={Paper}>
                <Box>
                    <br />
                    <Typography variant="h4"><b>Pendaftaran Kursus Pra Perkahwinan</b></Typography>
                    <br /><br />

                    <Box align="center">
                        <Typography variant="h6">
                            <b>Borang Pendaftaran Kursus Pra Perkahwinan Islam <br />Jabatan Agama Islam Pahang</b>
                        </Typography>
                    </Box>
                    <br />

                    <Typography component="p">
                        <b>Tempat: </b>{course.place} <br />
                        <b>Tarikh: </b>{course.dateStart} <br />
                    </Typography>
                    <hr />

                    <br />
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid xs={6}>
                            <TextField fullWidth id="outlined-basic" label="No. Kad Pengenalan" variant="outlined" value={userIc}
                                onChange={(e) => setUserIc(e.target.value)}
                                InputProps={{
                                    readOnly: true,
                                }} />
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            <TextField fullWidth id="outlined-basic" label="Nama Pemohon" variant="outlined" value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                InputProps={{
                                    readOnly: true,
                                }} />
                            <br /><br />
                        </Grid>

                    </Grid>

                    <TextField fullWidth id="outlined-basic" label="Alamat Surat Menyurat" variant="outlined" value={userAddress}
                        onChange={(e) => setUserAddress(e.target.value)}
                        InputProps={{
                            readOnly: true,
                        }} />
                    <br /><br />

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {/* <Grid xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Negeri</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={negeri}
                                    label="Negeri"
                                    onChange={(e) => setNegeri(e.target.value)}
                                >
                                    <MenuItem value={10}>Pahang</MenuItem>
                                    <MenuItem value={20}>Perak</MenuItem>
                                    <MenuItem value={30}>Terengganu</MenuItem>
                                    <MenuItem value={40}>Perlis</MenuItem>
                                    <MenuItem value={50}>Selangor</MenuItem>
                                    <MenuItem value={60}>Kuala Lumpur</MenuItem>
                                    <MenuItem value={70}>Negeri Sembilan</MenuItem>
                                    <MenuItem value={80}>Johor</MenuItem>
                                    <MenuItem value={90}>Kelantan</MenuItem>
                                    <MenuItem value={100}>Kedah</MenuItem>
                                    <MenuItem value={110}>Pulau Pinang</MenuItem>
                                    <MenuItem value={120}>Melaka</MenuItem>
                                    <MenuItem value={130}>Sabah</MenuItem>
                                    <MenuItem value={140}>Sarawak</MenuItem>
                                </Select>
                            </FormControl>
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            <TextField fullWidth id="outlined-basic" label="Daerah" variant="outlined" value={city} onChange={(e) => setCity(e.target.value)} />
                            <br /><br />
                        </Grid> */}

                        <Grid xs={6}>
                            <TextField fullWidth id="outlined-basic" label="Sektor Pekerjaan" variant="outlined" value={userEmploySector}
                                onChange={(e) => setUserEmploySector(e.target.value)}
                                InputProps={{
                                    readOnly: true,
                                }} />
                            {/* <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Sektor Pekerjaan</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={pekerjaan}
                                    label="Sektor Pekerjaan"
                                    onChange={handleChangePekerjaan}
                                >
                                    <MenuItem value={10}>Bekerja Sendiri</MenuItem>
                                    <MenuItem value={20}>Pesara</MenuItem>
                                    <MenuItem value={30}>Sektor Awam</MenuItem>
                                    <MenuItem value={40}>Sektor Swasta</MenuItem>
                                    <MenuItem value={50}>Tidak Bekerja</MenuItem>
                                </Select>
                            </FormControl> */}

                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            <TextField fullWidth id="outlined-basic" label="Tahap Pendidikan" variant="outlined" value={userEducation}
                                onChange={(e) => setUserEducation(e.target.value)}
                                InputProps={{
                                    readOnly: true,
                                }} />
                            {/* <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Tahap Pendidikan</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={pendidikan}
                                    label="Tahap Pendidikan"
                                    onChange={handleChangePendidikan}
                                >
                                    <MenuItem value={10}>PHD</MenuItem>
                                    <MenuItem value={20}>MASTER</MenuItem>
                                    <MenuItem value={30}>IJAZAH</MenuItem>
                                    <MenuItem value={40}>DIPLOMA</MenuItem>
                                    <MenuItem value={50}>STPM/HSC</MenuItem>
                                    <MenuItem value={60}>SPM/MCE</MenuItem>
                                    <MenuItem value={70}>PMR/SRP/LCE</MenuItem>
                                    <MenuItem value={80}>UPSR</MenuItem>
                                </Select>
                            </FormControl> */}
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            <TextField fullWidth id="outlined-basic" label="Jantina" variant="outlined" value={userGender}
                                onChange={(e) => setUserGender(e.target.value)}
                                InputProps={{
                                    readOnly: true,
                                }} />
                            {/* <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Jantina</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={jantina}
                                    label="Jantina"
                                    onChange={handleChangeJantina}
                                >
                                    <MenuItem value={10}>Perempuan</MenuItem>
                                    <MenuItem value={20}>Lelaki</MenuItem>
                                </Select>
                            </FormControl> */}
                            <br /><br />
                        </Grid>

                        <Grid xs={6}>
                            <TextField fullWidth id="outlined-basic" label="No. Telefon" variant="outlined" value={userPhone}
                                onChange={(e) => setUserPhone(e.target.value)}
                                InputProps={{
                                    readOnly: true,
                                }} />
                            <br /><br />
                        </Grid>

                        {/* <Grid xs={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <FormControl fullWidth>
                                    <DatePicker
                                        label={<Grid sx={{ display: 'flex' }}>Cadangan Tarikh Nikah<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                        value={dateSuggested}
                                        onChange={(newDate) => setDateSuggested(newDate)}
                                    />
                                </FormControl>
                            </LocalizationProvider>
                            <br /><br />
                        </Grid> */}

                        {/* <Grid xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label" required>Kebenaran Jabatan Agama Islam Negeri</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={permission}
                                    label="Kebenaran Jabatan Agama Islam Negeri"
                                    onChange={(e) => setPermission(e.target.value)}
                                >
                                    <MenuItem value={"Pahang"}>Pahang</MenuItem>
                                    <MenuItem value={"Perak"}>Perak</MenuItem>
                                    <MenuItem value={"Terengganu"}>Terengganu</MenuItem>
                                    <MenuItem value={"Perlis"}>Perlis</MenuItem>
                                    <MenuItem value={"Selangor"}>Selangor</MenuItem>
                                    <MenuItem value={"Kuala Lumpur"}>Kuala Lumpur</MenuItem>
                                    <MenuItem value={"Negeri Sembilan"}>Negeri Sembilan</MenuItem>
                                    <MenuItem value={"Johor"}>Johor</MenuItem>
                                    <MenuItem value={"Kelantan"}>Kelantan</MenuItem>
                                    <MenuItem value={"Kedah"}>Kedah</MenuItem>
                                    <MenuItem value={"Pulau Pinang"}>Pulau Pinang</MenuItem>
                                    <MenuItem value={"Melaka"}>Melaka</MenuItem>
                                    <MenuItem value={"Sabah"}>Sabah</MenuItem>
                                    <MenuItem value={"sarawak"}>Sarawak</MenuItem>
                                </Select>
                            </FormControl>
                            <br /><br />
                        </Grid> */}
                    </Grid>
                    <div>
                        <Checkbox {...label} />Saya telah membaca dan faham terma dan peraturan yang telah ditetapkan, dan bersetuju untuk menyertai Kursus Pra-Perkahwinan Islam Pahang ini.
                    </div>

                    <br />
                </Box>

                <Container sx={{ display: "", justifyContent: "center", width: "80%", height: "100%", backgroundColor: "#faf5f5" }} component={Paper}>
                    <Box>
                        <br />
                        <Typography variant='h5'><b>PEMBAYARAN YURAN KURSUS PRA PERKAHWINAN</b></Typography>
                        <br />
                        <Typography component="p">
                            Pembayaran yuran kursus Pra Perkahwinan adalah sebanyak <b>RM80.00</b>. Selepas membuat pembayaran, sila muat
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

                        {/* <div>
                            <input type="file" onChange={handleFileChange} />
                            {selectedFile && <p>Selected File: {selectedFile.name}</p>}
                        </div> */}
                        <br /><br />
                    </Box>
                </Container>
                <br /><br />

                <Box align="center">
                    <Button variant="contained" onClick={handleBack}>Kembali</Button>&nbsp;&nbsp;
                    <Button variant="contained" onClick={handleConfirm}>Hantar</Button>
                </Box>
                <br /><br />
            </Container>
        </Stack>
    );
}
