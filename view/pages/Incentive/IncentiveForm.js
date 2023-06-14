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
import { useSelector } from "react-redux";
import { getUserByIC } from "../api/user";
import { createIncentive } from "../api/incentive";

export default function IncentiveForm() {
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
    const [details, setDetails] = ([]);
    const router = useRouter();

    const [bank, setBank] = useState();
    const [acc, setAcc] = useState();


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


    const [activeStep, setActiveStep] = useState(1);
    const steps = getSteps();

    const data = {
        userIncentiveId: userIc,
        partnerIncentiveId: userPartnerIc,
        bank: bank,
        accBank: acc,
        status: "Pending"
    }

    console.log(data);
    const handleConfirm = async () => {
        const insert = await createIncentive({ data });

        if (insert) {
            console.log(insert);
        } else {
            console.log("None");
        }
        router.push("/Incentive/Request");
    };

    function getSteps() {
        return ["Maklumat Suami", "Maklumat Isteri", "Maklumat Perkahwinan"];
    }

    function getStepsContent(step) {
        switch (step) {
            case 1:
                return (
                    <Container maxWidth="xs">
                        <Box
                            sx={{
                                marginTop: 8,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar> */}
                            <Typography component="h1" variant="h5">
                                Insentif Khas - incentiveForm
                            </Typography>
                            <Box noValidate sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="name"
                                            label="Name"
                                            name="name"
                                            autoComplete="name"
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
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
                                        <TextField
                                            required
                                            fullWidth
                                            id="phone"
                                            label="Phone Number "
                                            name="phone"
                                            autoComplete="phone"
                                            value={userPhone}
                                            onChange={(e) => setUserPhone(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="age"
                                            label="Age "
                                            name="age"
                                            autoComplete="age"
                                            value={userAge}
                                            onChange={(e) => setUserAge(e.target.value)}
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
                                            id="address"
                                            label="Address "
                                            name="address"
                                            autoComplete="address"
                                            value={userAddress}
                                            onChange={(e) => setUserAddress(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="nationality"
                                            label="Nationality "
                                            name="nationality"
                                            autoComplete="nationalty"
                                            value={userNationality}
                                            onChange={(e) => setUserNationality(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="Income"
                                            label="Income  "
                                            name="Income"
                                            autoComplete="Income"
                                            value={userIncome}
                                            onChange={(e) => setUserIncome(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="bank"
                                            label="Bank"
                                            name="bank"
                                            autoComplete="bank"
                                            value={bank}
                                            onChange={(e) => setBank(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="bank"
                                            label="Akaun Bank"
                                            name="bank"
                                            autoComplete="bank"
                                            value={acc}
                                            onChange={(e) => setAcc(e.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                );

            case 2:
                return (
                    <Container maxWidth="xs">
                        <Box
                            sx={{
                                marginTop: 8,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                  <LockOutlinedIcon />
                              </Avatar> */}
                            <Typography component="h1" variant="h5">
                                Insentif Khas - Spouse Form
                            </Typography>
                            <Box component="form" noValidate sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="name"
                                            label="Name"
                                            name="name"
                                            autoComplete="name"
                                            value={userPartnerName}
                                            onChange={(e) => setUserPartnerName(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
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
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="identification"
                                            label="Identification Number "
                                            name="identification"
                                            autoComplete="identification"
                                            value={userPartnerIc}
                                            onChange={(e) => setUserPartnerIc(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="phone"
                                            label="Phone Number "
                                            name="phone"
                                            autoComplete="phone"
                                            value={userPartnerPhone}
                                            onChange={(e) => setUserPartnerPhone(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="age"
                                            label="Age "
                                            name="age"
                                            autoComplete="age"
                                            value={userPartnerAge}
                                            onChange={(e) => setUserPartnerAge(e.target.value)}
                                        />
                                    </Grid>
                                    {/* <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="date"
                                            label="Date Of Birth "
                                            name="date"
                                            autoComplete="date"
                                            value={userPartnerBirth}
                                            onChange={(e) => setUserPartnerBirth(e.target.value)}
                                        />
                                    </Grid> */}
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="address"
                                            label="Address "
                                            name="address"
                                            autoComplete="address"
                                            value={userPartnerAddress}
                                            onChange={(e) => setUserPartnerAddress(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="nationality"
                                            label="Nationality "
                                            name="nationality"
                                            autoComplete="nationalty"
                                            value={userPartnerNationality}
                                            onChange={(e) => setUserPartnerNationality(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="Income"
                                            label="Income  "
                                            name="Income"
                                            autoComplete="Income"
                                            value={userPartnerIncome}
                                            onChange={(e) => setUserPartnerIncome(e.target.value)}
                                        />
                                    </Grid>

                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                );
            case 3:
                return (
                    <Container maxWidth="xs">
                        <Box
                            sx={{
                                marginTop: 8,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar> */}
                            <Box component="form" noValidate sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Button variant="contained">Upload Files</Button>
                                    <Typography component="h1" variant="h5">
                                        Salinan Slip Gaji    *
                                    </Typography>
                                </Grid>
                            </Box>

                            <Box component="form" noValidate sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Button variant="contained">Upload Files</Button>
                                    <Typography component="h1" variant="h5">
                                        Salinan Kad Pengenalan*
                                    </Typography>
                                </Grid>
                            </Box>

                            <Box component="form" noValidate sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Button variant="contained">Upload Files</Button>
                                    <Typography component="h1" variant="h5">
                                        Salinan Catantan Akad Nikah*
                                    </Typography>
                                </Grid>
                            </Box>

                            <Box component="form" noValidate sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Button variant="contained">Upload Files</Button>
                                    <Typography component="h1" variant="h5">
                                        Salinan Penyata Bank Akaun*
                                    </Typography>
                                </Grid>
                            </Box>

                            <Box component="form" noValidate sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Button variant="contained">Upload Files</Button>
                                    <Typography component="h1" variant="h5">
                                        Pengesahan Bermastautin di Pahang*
                                    </Typography>
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
