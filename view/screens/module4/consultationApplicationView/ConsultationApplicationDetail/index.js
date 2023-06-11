import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import dayjs from "dayjs";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


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
                            : TIDAK LENGKAP
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
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
                    </Box>
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 18 }}>
                            Tempat Pengaduan&thinsp;
                        </Typography>
                        <Typography>
                            : PEJABAT AGAMA ISLAM PEKAN
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
                            ISTERI SAYA CURANG DENGAN RAKAN PEJABAT DIA DAN MENGABAIKAN TANGGUNGJAWAB DIA SEBAGAI ISTERI. DIA MENFITNAH SAYA DENGAN MENGATAKAN SAYA DAYUS KERANA SENTIASA MEMUKUL DIA.
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
                            : AHMAD BIN ABDULLAH
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 15 }}>
                            No. Kad Pengenalan&emsp;
                        </Typography>
                        <Typography>
                            : 960723063233
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
                            LOT. 414, KAWASAN PERINDUSTRIAN PERAMU, 26600 PEKAN, PAHANG
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 25 }}>
                            No. Telefon&nbsp;
                        </Typography>
                        <Typography>
                            : 018-9876543
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
                            : NUR SURAYA BINTI KASIM
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 15 }}>
                            No. Kad Pengenalan&emsp;
                        </Typography>
                        <Typography>
                            : 990202061822
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
                            54, JALAN PANTAI, 26600 PEKAN, PAHANG
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 25 }}>
                            No. Telefon&nbsp;
                        </Typography>
                        <Typography>
                            : 010-4098213
                        </Typography>
                    </Box>

                    <br />

                    <Box sx={{ marginTop: 2, bgcolor: '#49516F', color: 'white', width: 400, height: 30, borderRadius: 1 }}>
                        <Typography variant="body" sx={{ fontSize: '20px', marginLeft: 4 }}>
                            Maklumat Perkahwinan
                        </Typography>
                    </Box>

                    <br />

                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
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
                    </Box>
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 23 }}>
                            Bilangan anak   
                        </Typography>
                        <Typography>
                            :&thinsp; 
                        </Typography>
                        <Typography>
                            Lelaki
                        </Typography>
                        <Typography>
                            : 1
                        </Typography>
                        <Typography sx={{ marginRight: 5 }}>
                            &thinsp;
                        </Typography>
                        <Typography>
                            Perempuan
                        </Typography>
                        <Typography>
                            : 1
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 2, marginLeft: 2, display: 'flex', fontSize: '12px' }}>
                        <Typography sx={{ marginRight: 19 }}>
                            Status Perceraian&thinsp;&thinsp;
                        </Typography>
                        <Typography>
                            : Tidak
                        </Typography>
                    </Box>
                    

                    <br/>
                    <br/>
                    
                    <Grid container sx={{ display: 'flex', textAlign: 'center', justifyContent:'center', marginBottom: 4 }}>
                        <Grid>
                            <Button size="large" variant="contained" sx={{ bgcolor: "#49516F" }}>Kembali</Button>
                        </Grid>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
}