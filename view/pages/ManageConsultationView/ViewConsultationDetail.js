import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import dayjs from "dayjs";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { getComplaintDetails } from '../api/consultation';
import { getUserByIC } from '../api/user';
import { useSelector } from 'react-redux';
import {
    Button,
    TextField,
    Grid,
    Typography,
    Container,
    Box,
    MenuItem,
    FormControl,
    Select,
    InputLabel,
} from '@mui/material';


export default function ConsultationForm() {
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

    const [complaints, setComplaints] = useState([]);
    const [place, setPlace] = useState('');
    const [date, setDate] = useState(dayjs());
    const [counselor, setCounselor] = useState('');
    const [time, setTime] = useState(dayjs());

    const placeHandleChange = (event) => {
        setPlace(event.target.value);
    };

    const counselorHandleChange = (event) => {
        setCounselor(event.target.value);
    };

    useEffect(() => {
        const fetchConsultations = async () => {
            const consultationId = router.query.id;
            if (consultationId) {
                try {
                    const response = await getComplaintDetails({ consultationId });
                    console.log(response);
                    setComplaints(response);
                } catch (error) {
                    console.log('Error fetching course details:', error);
                }
            }
        };

        fetchConsultations();
    }, [router.query.id]);

    const handleBack = () => {
        router.push("/ManageConsultationView/ViewConsultationList");
    }

    return (
        <Container maxWidth="md">

            <Box sx={{ marginTop: 12 }}>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'white', borderRadius: '16px', marginTop: 2, boxShadow: 2, marginBottom: 4 }}>
                <Grid xs="auto">
                    <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>
                        <img src='https://jaip.pahang.gov.my/wp-content/uploads/2020/10/jata-pahang.png?tr=w-5' width={100} height={100} />
                    </Box>
                    <Typography variant="h5" sx={{ marginTop: 2, display: 'flex', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>
                        JABATAN AGAMA ISLAM PAHANG (JAIP)
                    </Typography>
                    <Typography variant="h5" sx={{ marginTop: 2, display: 'flex', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>
                        PERMOHONAN ADUAN/KHIDMAT NASIHAT
                    </Typography>
                    <br />
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 30 }}>
                            Status
                        </Typography>
                        <Typography>
                            : {complaints.status}
                        </Typography>
                    </Box>
                    {/* <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 10 }}>
                            No. Slip Permohonan Online
                        </Typography>
                        <Typography>
                            : KTN1M5/2023-000111
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 17 }}>
                            No. Akuan Terimaan&nbsp;
                        </Typography>
                        <Typography>
                            : KTN12M5/202300143
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 5 }}>
                            No. Pendaftaran Khidmat Nasihat&nbsp;
                        </Typography>
                        <Typography>
                            : PKN06/20230123
                        </Typography>
                    </Box> */}
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 18 }}>
                            Tempat Pengaduan&thinsp;
                        </Typography>
                        <Typography>
                            : {complaints.paid}
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 24 }}>
                            Tarikh Aduan&thinsp;
                        </Typography>
                        <Typography>
                            : 12-01-2023
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 25 }}>
                            Masa Aduan
                        </Typography>
                        <Typography>
                            : 5:30 P.M
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 19 }}>
                            Keterangan Aduan&thinsp;
                        </Typography>
                        <Typography paragraph={true} sx={{ maxWidth: 450 }} align="justify">
                            :&thinsp;
                        </Typography>
                        <Typography paragraph={true} sx={{ maxWidth: 450 }} align="justify">
                            {complaints.complaint}
                        </Typography>
                    </Box>



                    <Box sx={{ marginTop: 2, bgcolor: '#49516F', color: 'white', width: 400, height: 30, borderRadius: 1 }}>
                        <Typography variant="body" sx={{ fontSize: '20px', marginLeft: 4 }}>
                            Maklumat Pengadu
                        </Typography>
                    </Box>

                    <br />

                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 30 }}>
                            Nama&nbsp;
                        </Typography>
                        <Typography>
                            : {userName}
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 15 }}>
                            No. Kad Pengenalan&emsp;
                        </Typography>
                        <Typography>
                            : {userIc}
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 29 }}>
                            Alamat&nbsp;
                        </Typography>
                        <Typography paragraph={true} sx={{ maxWidth: 450 }} align="justify">
                            :&thinsp;
                        </Typography>
                        <Typography paragraph={true} sx={{ maxWidth: 450 }} align="justify">
                            {userAddress}
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 25 }}>
                            No. Telefon&nbsp;
                        </Typography>
                        <Typography>
                            : {userPhone}
                        </Typography>
                    </Box>

                    <br />

                    <Box sx={{ marginTop: 2, bgcolor: '#49516F', color: 'white', width: 400, height: 30, borderRadius: 1 }}>
                        <Typography variant="body" sx={{ fontSize: '20px', marginLeft: 4 }}>
                            Maklumat Pasangan
                        </Typography>
                    </Box>

                    <br />

                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 30 }}>
                            Nama&nbsp;
                        </Typography>
                        <Typography>
                            : {userPartnerName}
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 15 }}>
                            No. Kad Pengenalan&emsp;
                        </Typography>
                        <Typography>
                            : {userPartnerIc}
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 29 }}>
                            Alamat&nbsp;
                        </Typography>
                        <Typography paragraph={true} sx={{ maxWidth: 450 }} align="justify">
                            :&thinsp;
                        </Typography>
                        <Typography paragraph={true} sx={{ maxWidth: 450 }} align="justify">
                            {userAddress}
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 25 }}>
                            No. Telefon&nbsp;
                        </Typography>
                        <Typography>
                            : {userPartnerName}
                        </Typography>
                    </Box>

                    <br />

                    <Box sx={{ marginTop: 2, bgcolor: '#49516F', color: 'white', width: 400, height: 30, borderRadius: 1 }}>
                        <Typography variant="body" sx={{ fontSize: '20px', marginLeft: 4 }}>
                            Maklumat Perkahwinan
                        </Typography>
                    </Box>

                    <br />

                    {/* <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 20 }}>
                            Tarikh Berkahwin
                        </Typography>
                        <Typography>
                            : 10-06-2021
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 18 }}>
                            Jenis Perkahwinan&thinsp;
                        </Typography>
                        <Typography>
                            : MONOGAMI
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 20 }}>
                            Kedudukan Isteri&thinsp;
                        </Typography>
                        <Typography>
                            : PERTAMA
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 18 }}>
                            Dasar Perkahwinan
                        </Typography>
                        <Typography>
                            : PILIHAN KELUARGA
                        </Typography>
                    </Box> */}
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 23 }}>
                            Bilangan anak
                        </Typography>
                        <Typography>
                            :&thinsp;
                        </Typography>
                        <Typography>
                            : {complaints.children}
                        </Typography>
                    </Box>

                    <br />

                    <Box sx={{ marginTop: 2, bgcolor: '#49516F', color: 'white', width: 400, height: 30, borderRadius: 1 }}>
                        <Typography variant="body" sx={{ fontSize: '20px', marginLeft: 4 }}>
                            Maklumat Perceraian / Ruju’
                        </Typography>
                    </Box>

                    <br />

                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 20 }}>
                            Status Perceraian
                        </Typography>
                        <Typography>
                            : {complaints.divorce}
                        </Typography>
                    </Box>

                    <br />
                    <br />

                    <Grid container sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', marginBottom: 4 }}>
                        <Grid>
                            <Button size="large" variant="contained" sx={{ bgcolor: "#49516F" }} onClick={handleBack}>Kembali</Button>
                        </Grid>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
}