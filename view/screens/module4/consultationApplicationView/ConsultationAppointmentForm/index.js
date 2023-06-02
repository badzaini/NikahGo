import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import dayjs from "dayjs";
import { DatePicker} from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

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
  Radio,
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

        <Box sx={{marginTop:12}}>
          <Grid container>
            <Grid xs="auto">
              <Typography sx={{height: 50, width: 15, bgcolor:'#555', marginTop:1, marginRight:1}}></Typography> 
            </Grid>
            <Grid xs="auto">
              <Typography variant="h5" sx={{marginTop:2, fontWeight:'bold'}}>
                  Aduan / Khidmat Nasihat
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor:'white',  borderRadius: '16px', marginTop:2, boxShadow:2, marginBottom:4}}>
          <Grid xs="auto">
            <Typography variant="h5" sx={{marginTop:2, display: 'flex', justifyContent: 'center',}}>
                Permohonan Temujanji
            </Typography>
            <br/>
            <Grid sx={{display:'flex', marginTop:1, justifyContent: 'center'}}>
              <Typography variant="body2" sx={{fontSize:'12px'}}>
                Ruang yang bertanda (
              </Typography>
              <Typography variant="body2" sx={{color:'red', fontSize:'12px'}}>
                *
              </Typography>
              <Typography variant="body2" sx={{fontSize:'12px'}}>
                ) adalah wajib diisi.
              </Typography>
            </Grid>
            <br/>
            
            <Box sx={{marginTop:2, bgcolor:'#49516F', color:'white', width:400, height:30, borderRadius:1}}>
              <Typography variant="body" sx={{fontSize:'20px', marginLeft:4}}>
                Maklumat Pengadu
              </Typography>
            </Box>

            <br/>
            
            {/* Nama Pengadu */}
            <FormControl sx={{ m: 1, minWidth: 120, maxWidth:800, width: 800}}>
              <TextField id="pengaduName" label="Nama Pengadu" variant="outlined" />
            </FormControl>

            <br/>

            {/* IC/Passport Pengadu */}
            <FormControl sx={{ m: 1, minWidth: 120, maxWidth:800, width: 800}}>
              <TextField id="noICPengadu" label="No. IC / No. Passport  " variant="outlined" />
            </FormControl>

            <br/>

            {/* Alamat Semasa */}
            <TextField sx={{marginTop:3, m: 1, minWidth: 120, maxWidth:800, width: 800}}
              id="currentAddress"
              label={<Grid sx={{display:'flex'}}>Alamat Semasa</Grid>}
              multiline
              rows={4}
            />

            <Box sx={{marginTop:2, bgcolor:'#49516F', color:'white', width:400, height:30, borderRadius:1}}>
              <Typography variant="body" sx={{fontSize:'20px', marginLeft:4}}>
                Maklumat Temujanji
              </Typography>
            </Box>

            <br/>
            {/* Tempat Appointment */}
            <FormControl sx={{ m: 1, minWidth: 120, maxWidth:800, width: 800}}>
              <InputLabel id="place" sx={{display:'flex'}}>Tempat</InputLabel>
              <Select
                labelId="place"
                id="place"
                value={place}
                label="Tempat"
                onChange={placeHandleChange}
              >
                <MenuItem disabled value="">
                  <em>- SILA PILIH -</em>
                </MenuItem>
                <MenuItem value={'PEJABAT AGAMA ISLAM PEKAN'}>PEJABAT AGAMA ISLAM PEKAN</MenuItem>
              </Select>
            </FormControl>

            <br/>
            {/* Tarikh Appointment */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <FormControl sx={{ m: 1, minWidth: 120, maxWidth:400, width: 385}}>
                <DatePicker 
                  label={<Grid sx={{display:'flex'}}>Tarikh<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                  value={date}
                  onChange={(newDate) => setDate(newDate)}
                />
              </FormControl>
            </LocalizationProvider>
            
            {/* Masa Appointment */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <FormControl sx={{ m: 1, minWidth: 120, maxWidth:400, width: 400}}>
                <TimePicker 
                  label={<Grid sx={{display:'flex'}}>Tarikh<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                  value={time}
                  onChange={(newTime) => setTime(newTime)}
                />
              </FormControl>
            </LocalizationProvider>

            <br/>            

            {/* Choose Counselor */}
            <FormControl sx={{ m: 1, minWidth: 120, maxWidth:800, width: 800, height:100}}>
              <InputLabel id="counselor" sx={{display:'flex'}}>{<Grid sx={{display:'flex'}}>Pegawai Khidmat Nasihat<Typography sx={{ color: 'red' }}>*</Typography></Grid>}</InputLabel>
              <Select
                labelId="counselor"
                id="counselor"
                value={place}
                label="Pegawai Khidmat Nasihat"
                onChange={counselorHandleChange}
              >
                <MenuItem disabled value="">
                  <em>- SILA PILIH -</em>
                </MenuItem>
                <MenuItem value={'$counselorIC'}>[$Gender] - Abu bin Ali</MenuItem>
              </Select>
            </FormControl>
            
            <Grid container  spacing={2}  sx={{display:'flex', textAlign: 'center', marginBottom:4}}>
                <Grid md={4}>
                  <Button size="large" variant="contained" sx={{bgcolor:"#49516F"}}>Simpan</Button>
                </Grid>
                <Grid md={4}>
                  <Button size="large" variant="contained" sx={{bgcolor:"#49516F"}}>Hantar</Button>
                </Grid>
                <Grid md={4}>
                  <Button size="large" variant="contained" sx={{bgcolor:"#49516F"}}>Kembali</Button>
                </Grid>
            </Grid>

          </Grid>
        </Box>
    </Container>
  );
}