import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import dayjs from "dayjs";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useRouter } from 'next/router';
import { setUser } from "../../state/action";
import { useDispatch, useSelector } from "react-redux";
import { createComplaint } from '../api/consultation';
import {
    Button,
    TextField,
    Link,
    Grid,
    Typography,
    Container,
    Box,
    MenuItem,
    FormControl,
    Select,
    InputLabel,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
} from '@mui/material';
import { getUserByIC } from '../api/user';

export default function ConsultationForm() {
    const [userDivorce, setUserDivorce] = useState();
    const [userPaid, setUserPaid] = useState();
    const [userComplaint, setUserComplaint] = useState();
    const [children, setChildren] = useState();

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




    const data = {
        userConsultationId: userName,
        paid: userPaid,
        children, children,
        divorce: userDivorce,
        complaint: userComplaint,
        status: "Pending"
    }

    console.log(data);

    const handleSubmit = async () => {
        const insert = await createComplaint({ data });

        if (insert) {
            console.log(insert);
            router.push("/ConsultationApplicationView/ConsultationRegisterList");
        } else {
            console.log("None");
        }
    }

    return (
        <Container maxWidth="md">

            <Box sx={{ marginTop: 12 }}>
                <Grid container>
                    <Grid xs="auto">
                        <Typography sx={{ height: 50, width: 15, bgcolor: '#555', marginTop: 1, marginRight: 1 }}></Typography>
                    </Grid>
                    <Grid xs="auto">
                        <Typography variant="h5" sx={{ marginTop: 2, fontWeight: 'bold' }}>
                            Aduan / Khidmat Nasihat
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'white', borderRadius: '16px', marginTop: 2, boxShadow: 2, marginBottom: 4 }}>
                <Grid xs="auto">
                    <Typography variant="h5" sx={{ marginTop: 2, display: 'flex', justifyContent: 'center', }}>
                        Permohonan Pendaftaran
                    </Typography>
                    <br />
                    <Grid sx={{ display: 'flex', marginTop: 1, justifyContent: 'center' }}>
                        <Typography variant="body2" sx={{ fontSize: '12px' }}>
                            Ruang yang bertanda (
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'red', fontSize: '12px' }}>
                            *
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '12px' }}>
                            ) adalah wajib diisi.
                        </Typography>
                    </Grid>
                    <br />

                    {/* Pejabat Agama Islam Daerah form */}
                    <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 800, width: 800 }}>
                        <InputLabel id="PAID" sx={{ display: 'flex' }}>PAID Pilihan <Typography sx={{ color: 'red' }}>*</Typography></InputLabel>
                        <Select
                            labelId="PAID"
                            id="PAID"
                            label="PAID Pilihan"
                            value={userPaid}
                            onChange={(e) => setUserPaid(e.target.value)}
                        >
                            <MenuItem disabled value="">
                                <em>- SILA PILIH -</em>
                            </MenuItem>
                            <MenuItem value={'PEJABAT AGAMA ISLAM PEKAN'}>PEJABAT AGAMA ISLAM PEKAN</MenuItem>
                        </Select>
                    </FormControl>

                    <Box sx={{ marginTop: 2, bgcolor: '#49516F', color: 'white', width: 400, height: 30, borderRadius: 1 }}>
                        <Typography variant="body" sx={{ fontSize: '20px', marginLeft: 4 }}>
                            Maklumat Pengadu
                        </Typography>
                    </Box>

                    <br />
                    {/* Nama Pengadu form */}
                    <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 800, width: 800 }}>
                        <TextField id="pengaduName" label="Nama Pengadu" variant="outlined" value={userName}
                            onChange={(e) => setUserName(e.target.value)} />
                    </FormControl>
                    <br />
                    {/* IC/Passport form */}
                    <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 800, width: 800 }}>
                        <TextField id="noICPengadu" label="No. IC / No. Passport  " variant="outlined" value={userIc}
                            onChange={(e) => setUserIc(e.target.value)} />
                    </FormControl>

                    <Box sx={{ marginTop: 2, bgcolor: '#49516F', color: 'white', width: 400, height: 30, borderRadius: 1 }}>
                        <Typography variant="body" sx={{ fontSize: '20px', marginLeft: 4 }}>
                            Maklumat Pasangan
                        </Typography>
                    </Box>

                    <br />
                    <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 800, width: 800 }}>
                        <TextField id="pasanganName" label="Nama Pasangan" variant="outlined" value={userPartnerName} onChange={(e) => setUserPartnerName(e.target.value)}/>
                    </FormControl>
                    <br />
                    <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 800, width: 800 }}>
                        <TextField id="noICPasangan" label="No. IC / No. Passport  " variant="outlined" value={userPartnerIc} onChange={(e) => setUserPartnerIc(e.target.value)} />
                    </FormControl>

                    <Box sx={{ marginTop: 2, bgcolor: '#49516F', color: 'white', width: 400, height: 30, borderRadius: 1 }}>
                        <Typography variant="body" sx={{ fontSize: '20px', marginLeft: 4 }}>
                            Maklumat Perkahwinan
                        </Typography>
                    </Box>

                    <br />

                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 400, width: 400 }}>
                            <DatePicker
                                label={<Grid sx={{ display: 'flex' }}>Tarikh Berkahwin<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                                value={date}
                                onChange={(newDate) => setDate(newDate)}
                            />
                        </FormControl>
                    </LocalizationProvider> */}

                    {/* <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 400, width: 400 }}>
                        <InputLabel id="marriageType" sx={{ display: 'flex' }}>Jenis Perkahwinan <Typography sx={{ color: 'red' }}>*</Typography></InputLabel>
                        <Select
                            labelId="marriageType"
                            id="marriageType"
                            value={type}
                            label="Jenis Perkahwinan"
                            onChange={typeHandleChange}
                        >
                            <MenuItem disabled value="">
                                <em>- SILA PILIH -</em>
                            </MenuItem>
                            <MenuItem value={'Test'}>Test</MenuItem>
                        </Select>
                    </FormControl> */}

                    <br />

                    {/* <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 400, width: 400 }}>
                        <InputLabel id="marriageType" sx={{ display: 'flex' }}>Kedudukan Isteri <Typography sx={{ color: 'red' }}>*</Typography></InputLabel>
                        <Select
                            labelId="marriageType"
                            id="marriageType"
                            value={type}
                            label="Jenis Perkahwinan"
                            onChange={typeHandleChange}
                        >
                            <MenuItem disabled value="">
                                <em>- SILA PILIH -</em>
                            </MenuItem>
                            <MenuItem value={'Test'}>Test</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 400, width: 400 }}>
                        <InputLabel id="marriageType" sx={{ display: 'flex' }}>Dasar Perkahwinan <Typography sx={{ color: 'red' }}>*</Typography></InputLabel>
                        <Select
                            labelId="marriageType"
                            id="marriageType"
                            value={type}
                            label="Jenis Perkahwinan"
                            onChange={typeHandleChange}
                        >
                            <MenuItem disabled value="">
                                <em>- SILA PILIH -</em>
                            </MenuItem>
                            <MenuItem value={'Test'}>Test</MenuItem>
                        </Select>
                    </FormControl> */}

                    <br />

                    <Box sx={{ display: 'flex', marginTop: 2 }}>
                        <Typography variant="body" sx={{ fontSize: '16px', marginLeft: 3, fontWeight: 'bold', marginTop: 3 }}>
                            Bilangan Anak </Typography><Typography sx={{ color: 'red', marginTop: 3 }}>*</Typography><Typography sx={{ marginTop: 3 }}>&nbsp;:
                        </Typography>

                        <TextField sx={{ m: 1, minWidth: 120, maxWidth: 400, width: 250 }}
                            id="anak"
                            label="anak"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                inputProps: { min: 0 }
                            }}
                            value={children}
                            onChange={(e) => setChildren(e.target.value)}
                        />
                    </Box>

                    <Box sx={{ marginTop: 2, bgcolor: '#49516F', color: 'white', width: 400, height: 30, borderRadius: 1 }}>
                        <Typography variant="body" sx={{ fontSize: '20px', marginLeft: 4 }}>
                            Maklumat Perceraian / Ruju’
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', marginTop: 2 }}>
                        <Typography variant="body" sx={{ fontSize: '16px', marginLeft: 3, fontWeight: 'bold', marginTop: 3 }}>
                            Penceraian </Typography><Typography sx={{ color: 'red', marginTop: 3 }}>*</Typography><Typography sx={{ marginTop: 3 }}>&nbsp;:
                        </Typography>

                        {/* Penceraian form */}
                        <FormControl sx={{ marginTop: 2 }}>
                            <RadioGroup
                                row
                                name="divorce"
                                value={userDivorce}
                                onChange={(e) => setUserDivorce(e.target.value)}
                            >
                                <FormControlLabel value={"Pernah"} control={<Radio />} label="Pernah" sx={{ marginLeft: 3 }} />
                                <FormControlLabel value={"Tidak"} control={<Radio />} label="Tak Pernah" sx={{ marginLeft: 2 }} />
                            </RadioGroup>
                        </FormControl>
                    </Box>

                    <Box sx={{ marginTop: 2, bgcolor: '#49516F', color: 'white', width: 400, height: 30, borderRadius: 1 }}>
                        <Typography variant="body" sx={{ fontSize: '20px', marginLeft: 4 }}>
                            Maklumat Aduan
                        </Typography>
                    </Box>

                    <br />

                    {/* Detail Aduan form */}
                    <TextField sx={{ marginTop: 3, m: 1, minWidth: 120, maxWidth: 800, width: 800, height: 200 }}
                        id="outlined-multiline-flexible"
                        label={<Grid sx={{ display: 'flex' }}>Keterangan Aduan<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                        multiline
                        rows={4}
                        value={userComplaint}
                        onChange={(e) => setUserComplaint(e.target.value)}
                    />

                    <Grid container spacing={2} sx={{ display: 'flex', textAlign: 'center', marginBottom: 4 }}>
                        <Grid md={4}>
                            <Button size="large" variant="contained" sx={{ bgcolor: "#49516F" }}>Simpan</Button>
                        </Grid>
                        <Grid md={4}>
                            <Button size="large" variant="contained" sx={{ bgcolor: "#49516F" }} onClick={handleSubmit}>Hantar</Button>
                        </Grid>
                        <Grid md={4}>
                            <Button size="large" variant="contained" sx={{ bgcolor: "#49516F" }}>Kembali</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}