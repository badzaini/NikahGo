import React from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
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
import { grey } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import dayjs from "dayjs";
import { getUserByIC } from '../api/user';
import { createRequest } from '../api/kadNikah';

export default function Apply() {
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
    const router = useRouter();

    const handleSelesai = async () => {
        try {
            const insert = await createRequest({ data });

            if (insert) {
                console.log(insert);
                // setTimeout(() => {
                //     router.push("/mohon_berkahwin/semakkan_permohonan");
                // }, 2000);
            }
        } catch (err) {
            console.log(err);
        }
        router.push("/KadNikah/Request");
    }

    const data = {
        userKadIc: userIc,
        partnerKadIc: userPartnerIc,
        userKadName: userName,
        partnerKadName: userPartnerName,
        status: "Pending"
    }

    return (
        <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center", flexDirection: "column", my: 20, width: "100%", alignItems: "center" }}>
            <Box>
                <Typography variant="h4" gutterBottom sx={{ borderLeft: "13px solid black" }}>Permohonan Kad Nikah</Typography>
            </Box>
            <Paper sx={{ p: 3, borderRadius: 4, width: "75%" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box sx={{ bgcolor: "#F3486A", py: 1, color: "white", width: "100%" }}>
                            <Typography sx={{ fontWeight: "bold", pl: 1 }}>Butiran Perkahwinan</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ fontWeight: "bold" }}>Nama Pemohon: {userName}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ fontWeight: "bold" }}>IC Pemohon: {userIc}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ fontWeight: "bold" }}>Nama Pasangan: {userPartnerName}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ fontWeight: "bold" }}>IC Pasangan: {userPartnerIc}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{ fontWeight: "bold" }}>Muat Naik Passport Suami</Typography>
                        <Button disableElevation="true" variant="contained" size="small" sx={{
                            bgcolor: "white", color: "black", fontWeight: "bold", border: "1px solid black", '&:hover': {
                                backgroundColor: grey[300],
                            },
                            mb: 1
                        }}>
                            Muat Naik
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{ fontWeight: "bold" }}>Muat Naik Passport Isteri</Typography>
                        <Button disableElevation="true" variant="contained" size="small" sx={{
                            bgcolor: "white", color: "black", fontWeight: "bold", border: "1px solid black", '&:hover': {
                                backgroundColor: grey[300],
                            },
                            mb: 1
                        }}>
                            Muat Naik
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{ bgcolor: "#F3486A", py: 1, color: "white" }}>
                            <Typography sx={{ fontWeight: "bold", pl: 1 }}>Pembayaran Nikah</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                            Pembayaran kad nikah adalah sebanyak RM 40.00. Selepas
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
            </Paper>
            <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
                <Button variant="contained" onClick={handleSelesai}>Selesai</Button>
            </Box>
        </Container>
    )
}
