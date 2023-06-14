import { useState, Fragment, useEffect } from "react";
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
import { grey } from "@mui/material/colors";
import dayjs from "dayjs";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { getUserByIC } from "../api/user";
import { useSelector } from "react-redux";
import { marriageDetails } from "../api/marriage";

export default function MarriageForm() {
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
    const marriageStatus = useSelector((state) => state.user.marriageStatus);
    const age = useSelector((state) => state.user.age);
    const IC = useSelector((state) => state.user.partnerIc);

    //Pemohon
    const [userIc, setUserIc] = useState(ic);
    const [userName, setUserName] = useState(name);
    const [userGender, setUserGender] = useState(gender);
    const [userEmail, setUserEmail] = useState(email);
    const [userAddress, setUserAddress] = useState(address);
    const [userPhone, setUserPhone] = useState(phone);
    const [userEducation, setUserEducation] = useState(education);
    const [userIncome, setUserIncome] = useState(income);
    const [userNationality, setUserNationality] = useState(nationality);
    const [userCitizenship, setUserCitizenship] = useState(citizenship);
    const [userOccupation, setUserOccupation] = useState(occupation);
    const [userEmploySector, setUserEmploySector] = useState(employSector);
    const [userBirth, setUserBirth] = useState(dayjs(birth));
    const [userMarriageStatus, setUserMarriageStatus] = useState(marriageStatus);
    const [userAge, setUserAge] = useState(age);

    //Pasangan
    const [userPartnerIc, setUserPartnerIc] = useState();
    const [userPartnerName, setUserPartnerName] = useState();
    const [userPartnerGender, setUserPartnerGender] = useState();
    const [userPartnerEmail, setUserPartnerEmail] = useState();
    const [userPartnerAddress, setUserPartnerAddress] = useState();
    const [userPartnerPhone, setUserPartnerPhone] = useState();
    const [userPartnerEducation, setUserPartnerEducation] = useState();
    const [userPartnerIncome, setUserPartnerIncome] = useState();
    const [userPartnerNationality, setUserPartnerNationality] = useState();
    const [userPartnerCitizenship, setUserPartnerCitizenship] = useState();
    const [userPartnerOccupation, setUserPartnerOccupation] = useState();
    const [userPartnerEmploySector, setUserPartnerEmploySector] = useState();
    // const [userPartnerBirth, setUserPartnerBirth] = useState(dayjs().toDate());
    const [userPartnerMarriageStatus, setUserPartnerMarriageStatus] = useState();
    const [userPartnerAge, setUserPartnerAge] = useState();
    const [details, setDetails] = useState([]);
    const router = useRouter();

    async function getPartner() {
        console.log("masuk");
        try {
            const partner = await getUserByIC({ IC });

            if (partner) {
                setUserPartnerIc(partner.ic);
                setUserPartnerName(partner.name);
                setUserPartnerGender(partner.gender);
                setUserPartnerEmail(partner.email);
                setUserPartnerAddress(partner.address);
                setUserPartnerPhone(partner.phone);
                setUserPartnerEducation(partner.education);
                setUserPartnerIncome(partner.income);
                setUserPartnerNationality(partner.nationality);
                setUserPartnerCitizenship(partner.citizenship);
                // setUserPartnerBirth(partner.birth);
                setUserPartnerMarriageStatus(partner.marriageStatus);
                setUserPartnerOccupation(partner.occupation);
                setUserPartnerAge(partner.age);
                console.log(partner.ic);

                console.log("jadi oi");
                console.log(partner);
            } else {
                console.log("error")
            }

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        console.log("MAsuk anjir")
        getPartner();
    });

    useEffect(() => {
        // const ic = router.query.id;
        // console.log(router.query.id);
        const fetchMarriageDetails = async () => {
            const ic = router.query.id;
            console.log(router.query.id);
            console.log(ic);
            if (ic) {
                try {
                    const response = await marriageDetails({ ic });
                    console.log(response);
                    setDetails(response);
                } catch (error) {
                    console.log('Error fetching course details:', error);
                    console.log(error.message);
                    console.log(error.stack);
                }
            }
        };

        fetchMarriageDetails();
    });



    const [activeStep, setActiveStep] = useState(1);
    const steps = getSteps();

    function getSteps() {
        return ["Maklumat Suami", "Maklumat Isteri", "Maklumat Perkahwinan"];
    }

    function getStepsContent(step) {
        switch (step) {
            case 1:
                return (
                    <Container maxWidth="sm">
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Box component="form" noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="name"
                                            label="Nama"
                                            name="name"
                                            autoComplete="name"
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="ic"
                                            label="IC "
                                            name="ic"
                                            autoComplete="ic"
                                            value={userIc}
                                            onChange={(e) => setUserIc(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <FormControl>
                                                <DatePicker
                                                    label={<Grid sx={{ display: 'flex' }}>Tarikh Lahir<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                                    value={userBirth}
                                                    onChange={(newDate) => setUserBirth(newDate)}
                                                />
                                            </FormControl>
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="age"
                                            label="Umur"
                                            name="age"
                                            autoComplete="age"
                                            type="number"
                                            value={userAge}
                                            onChange={(e) => setUserAge(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="nationality"
                                            label="Bangsa"
                                            name="nationality"
                                            autoComplete="nationalty"
                                            value={userNationality}
                                            onChange={(e) => setUserNationality(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Warganegara</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={userCitizenship}
                                                label="Warganegara"
                                                onChange={(e) => setUserCitizenship(e.target.value)}
                                            >
                                                <MenuItem value={"Warganegara"}>Warganegara</MenuItem>
                                                <MenuItem value={"Bukan Warganegara"}>Bukan Warganegara</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Taraf Pendidikan</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={userEducation}
                                                label="Taraf Pendidikan"
                                                onChange={(e) => setUserEducation(e.target.value)}
                                            >
                                                <MenuItem value={"Ijazah"}>Ijazah</MenuItem>
                                                <MenuItem value={"Diploma"}>Diploma</MenuItem>
                                                <MenuItem value={"Master"}>Master</MenuItem>
                                                <MenuItem value={"Phd"}>Phd</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Sektor Pekerjaan</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={userEmploySector}
                                                label="Sektor Pekerjaan"
                                                onChange={(e) => setUserEmploySector(e.target.value)}
                                            >
                                                <MenuItem value={"Kerajaan"}>Kerajaan</MenuItem>
                                                <MenuItem value={"Swasta"}>Swasta</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="OccupationName"
                                            label="Nama Pekerjaan"
                                            name="OccupationName"
                                            autoComplete="OccupationName"
                                            value={userOccupation}
                                            onChange={(e) => setUserOccupation(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="Income"
                                            label="Pendapatan"
                                            name="Income"
                                            autoComplete="Income"
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">RM</InputAdornment>,
                                            }}
                                            type="number"
                                            value={userIncome}
                                            onChange={(e) => setUserIncome(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="address"
                                            label="Alamat "
                                            name="address"
                                            autoComplete="address"
                                            multiline
                                            rows={3}
                                            value={userAddress}
                                            onChange={(e) => setUserAddress(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="phone"
                                            label="No. Telefon"
                                            name="phone"
                                            autoComplete="phone"
                                            type="number"
                                            value={userPhone}
                                            onChange={(e) => setUserPhone(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Status Perkahwinan</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={userMarriageStatus}
                                                label="Status Perkahwinan"
                                                onChange={(e) => setUserMarriageStatus(e.target.value)}
                                            >
                                                <MenuItem value={"Bujang"}>Bujang</MenuItem>
                                                <MenuItem value={"Bujang"}>Duda</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                );

            case 2:
                return (
                    <Container maxWidth="sm">
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Box component="form" noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="name"
                                            label="Nama"
                                            name="name"
                                            autoComplete="name"
                                            value={userPartnerName}
                                            onChange={(e) => setUserPartnerName(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="ic"
                                            label="IC "
                                            name="ic"
                                            autoComplete="ic"
                                            value={userPartnerIc}
                                            onChange={(e) => setUserPartnerIc(e.target.value)}
                                        />
                                    </Grid>
                                    {/* <Grid item xs={6}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <FormControl>
                                                <DatePicker
                                                    label={<Grid sx={{ display: 'flex' }}>Tarikh Lahir<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                                    value={userPartnerBirth}
                                                    onChange={(newDate) => setUserPatnerBirth(newDate)}
                                                />
                                            </FormControl>
                                        </LocalizationProvider>
                                    </Grid> */}
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="age"
                                            label="Umur"
                                            name="age"
                                            autoComplete="age"
                                            type="number"
                                            value={userPartnerAge}
                                            onChange={(e) => setUserPartnerAge(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="nationality"
                                            label="Bangsa"
                                            name="nationality"
                                            autoComplete="nationalty"
                                            value={userPartnerNationality}
                                            onChange={(e) => setUserPartnerNationality(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Warganegara</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={userPartnerCitizenship}
                                                label="Warganegara"
                                                onChange={(e) => setUserPartnerCitizenship(e.target.value)}
                                            >
                                                <MenuItem value={"Warganegara"}>Warganegara</MenuItem>
                                                <MenuItem value={"Bukan Warganegara"}>Bukan Warganegara</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Taraf Pendidikan</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={userPartnerEducation}
                                                label="Taraf Pendidikan"
                                                onChange={(e) => setUserPartnerEducation(e.target.value)}
                                            >
                                                <MenuItem value={"Ijazah"}>Ijazah</MenuItem>
                                                <MenuItem value={"Diploma"}>Diploma</MenuItem>
                                                <MenuItem value={"Master"}>Master</MenuItem>
                                                <MenuItem value={"Phd"}>Phd</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Sektor Pekerjaan</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={userPartnerEmploySector}
                                                label="Sektor Pekerjaan"
                                                onChange={(e) => setUserPartnerEmploySector(e.target.value)}
                                            >
                                                <MenuItem value={"Kerajaan"}>Kerajaan</MenuItem>
                                                <MenuItem value={"Swasta"}>Swasta</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="OccupationName"
                                            label="Nama Pekerjaan"
                                            name="OccupationName"
                                            autoComplete="OccupationName"
                                            value={userPartnerOccupation}
                                            onChange={(e) => setUserPartnerOccupation(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="Income"
                                            label="Pendapatan"
                                            name="Income"
                                            autoComplete="Income"
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">RM</InputAdornment>,
                                            }}
                                            type="number"
                                            value={userPartnerIncome}
                                            onChange={(e) => setUserPartnerIncome(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="address"
                                            label="Alamat "
                                            name="address"
                                            autoComplete="address"
                                            multiline
                                            rows={3}
                                            value={userPartnerAddress}
                                            onChange={(e) => setUserPartnerAddress(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="phone"
                                            label="No. Telefon"
                                            name="phone"
                                            autoComplete="phone"
                                            type="number"
                                            value={userPartnerPhone}
                                            onChange={(e) => setUserPartnerPhone(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Status Perkahwinan</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={userPartnerMarriageStatus}
                                                label="Status Perkahwinan"
                                                onChange={(e) => setUserPartnerMarriageStatus(e.target.value)}
                                            >
                                                <MenuItem value={"Bujang"}>Bujang</MenuItem>
                                                <MenuItem value={"Janda"}>Janda</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                );
            case 3:
                return (
                    <Container maxWidth="sm">
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Box component="form" noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Box sx={{ bgcolor: "#F3486A", py: 1, color: "white" }}>
                                            <Typography sx={{ fontWeight: "bold", pl: 1 }}>Butiran Perkahwinan</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography sx={{ fontWeight: "bold" }}>Nama Suami: {userName}</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography sx={{ fontWeight: "bold", mb: 1 }}>Nama Isteri: {userPartnerName}</Typography>
                                    </Grid>
                                    {/* <Grid item xs={6}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <FormControl>
                                                <DatePicker
                                                    label={<Grid sx={{ display: 'flex' }}>Tarikh Akad Nikah<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                                    value={date}
                                                    onChange={(newDate) => setDate(newDate)}
                                                />
                                            </FormControl>
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <FormControl>
                                                <TimePicker
                                                    label={<Grid sx={{ display: 'flex' }}>Masa Akad Nikah<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                                    value={time}
                                                    onChange={(newTime) => setTime(newTime)}
                                                />
                                            </FormControl>
                                        </LocalizationProvider>
                                    </Grid> */}
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="marriagePlace"
                                            label="Tempat Akad Nikah"
                                            name="marriagePlace"
                                            autoComplete="marriagePlace"
                                            value={details.place}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Jenis Mas Kahwin</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={gender || ""}
                                                value={details.dowryType}

                                                label="Jenis Mas Kahwin"
                                            // onChange={(e) => setGender(e.target.value)}
                                            >
                                                <MenuItem value={"Tunai"}>Tunai</MenuItem>
                                                <MenuItem value={"Barang Kemas"}>Barang Kemas</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="dowry"
                                            label="Mas Kahwin"
                                            name="dowry"
                                            autoComplete="dowry"
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">RM</InputAdornment>,
                                            }}
                                            type="number"
                                            value={details.dowry}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="dowry"
                                            label="Hantaran Kahwin"
                                            name="dowry"
                                            autoComplete="dowry"
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">RM</InputAdornment>,
                                            }}
                                            type="number"
                                            value={details.gift}


                                        />
                                    </Grid>
                                   

                                    <Grid item xs={12}>
                                        <Box sx={{ bgcolor: "#F3486A", py: 1, color: "white" }}>
                                            <Typography sx={{ fontWeight: "bold", pl: 1 }}>Butiran Wali</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="waliName"
                                            label="Nama Wali"
                                            name="waliName"
                                            autoComplete="waliName"
                                            value={details.waliName}

                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="waliIc"
                                            label="IC Wali"
                                            name="waliIc"
                                            autoComplete="waliIc"
                                            type="number"
                                            value={details.waliIc}

                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="waliAddress"
                                            label="Alamat Wali"
                                            name="waliAddress"
                                            autoComplete="waliAddress"
                                            multiline
                                            rows={3}
                                            value={details.waliAddress}

                                        />
                                    </Grid>
                                    {/* <Grid item xs={4}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <FormControl>
                                                <DatePicker
                                                    label={<Grid sx={{ display: 'flex' }}>Tarikh Lahir Wali<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                                    value={details.waliBirth}
                                                    onChange={(newDate) => setDate(newDate)}
                                                />
                                            </FormControl>
                                        </LocalizationProvider>
                                    </Grid> */}
                                    <Grid item xs={4}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="waliAge"
                                            label="Umur Wali"
                                            name="waliAge"
                                            autoComplete="waliAge"
                                            value={details.waliAge}

                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="relay"
                                            label="Hubungan"
                                            name="relay"
                                            autoComplete="relay"
                                            value={details.waliRelay}

                                        />
                                    </Grid>


                                    <Grid item xs={12}>
                                        <Box sx={{ bgcolor: "#F3486A", py: 1, color: "white" }}>
                                            <Typography sx={{ fontWeight: "bold", pl: 1 }}>Butiran Saksi</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="wit1Name"
                                            label="Nama Saksi(1)"
                                            name="wit1Name"
                                            autoComplete="wit1Name"
                                            value={details.wit1Name}

                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="wit1Ic"
                                            label="IC Saksi(1)"
                                            name="wit1Ic"
                                            autoComplete="wit1Ic"
                                            type="number"
                                            value={details.wit1Ic}

                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="wit1Age"
                                            label="Umur Saksi(1)"
                                            name="wit1Age"
                                            autoComplete="wit1Age"
                                            type="number"
                                            value={details.wit1Age}

                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="wit1Address"
                                            label="Alamat Saksi(1)"
                                            name="wit1Address"
                                            autoComplete="wit1Address"
                                            multiline
                                            rows={3}
                                            value={details.wit1Address}

                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="wit2Name"
                                            label="Nama Saksi(2)"
                                            name="wit2Name"
                                            autoComplete="wit2Name"
                                            value={details.wit2Name}

                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="wit2Ic"
                                            label="IC Saksi(2)"
                                            name="wit2Ic"
                                            autoComplete="wit2Ic"
                                            type="number"
                                            value={details.wit2Ic}

                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="wit2Age"
                                            label="Umur Saksi(2)"
                                            name="wit2Age"
                                            autoComplete="wit2Age"
                                            type="number"
                                            value={details.wit2Age}

                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="wit2Address"
                                            label="Alamat Saksi(2)"
                                            name="wit2Address"
                                            autoComplete="wit2Address"
                                            multiline
                                            rows={3}
                                            value={details.wit2Address}

                                        />
                                    </Grid>


                                    <Grid item xs={12}>
                                        <Box sx={{ bgcolor: "#F3486A", py: 1, color: "white" }}>
                                            <Typography sx={{ fontWeight: "bold", pl: 1 }}>Pembayaran Nikah</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                                            Pembayaran yuran nikah adalah sebanyak RM 5.00. Selepas
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
                            </Box>
                        </Box>
                    </Container>
                );
        }
    }

    const handleNext = () => {

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };


    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleConfirm = () => {
        router.push("/MarriageRegistration/Request");
    };

    return (
        <Container sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: 15, width: "100%", alignItems: "center", pb: 5 }}>
            <Box>
                <Typography variant="h4" gutterBottom sx={{ borderLeft: "13px solid black" }}>Permohonan Pendaftaran Perkahwinan</Typography>
            </Box>
            <Stepper
                alternativeLabel
                activeStep={activeStep - 1}
                sx={{ width: 800, py: 3 }}
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Paper sx={{ py: 3, borderRadius: 4 }}>
                {getStepsContent(activeStep)}
            </Paper>
            {activeStep === steps.length ? (
                <Fragment>
                    <Box
                        sx={{
                            py: 2,
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Button
                            variant="contained"
                            onClick={handleConfirm}
                        >
                            Selesai
                        </Button>
                    </Box>
                </Fragment>
            ) : (
                <Fragment>
                    <Box
                        sx={{
                            py: 2,
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Button
                            disabled={activeStep === 1}
                            onClick={handleBack}
                            variant="outlined"
                            sx={{
                                mx: 1,
                            }}
                        >
                            Kembali
                        </Button>

                        <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{
                                mx: 1,
                            }}
                        >
                            Teruskan
                        </Button>
                    </Box>
                </Fragment>
            )}
        </Container>
    )
}
