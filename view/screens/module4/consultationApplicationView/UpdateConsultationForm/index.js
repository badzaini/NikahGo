import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import dayjs from "dayjs";
import { DatePicker} from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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


export default function ConsultationForm() {
 
  const [PAID, setPAID] = useState('');
  const [date, setDate] = useState(dayjs());
  const [type, setType] = useState('');
  
  const PAIDHandleChange = (event) => {
    setPAID(event.target.value);
  };

  const typeHandleChange = (event) => {
    setType(event.target.value);
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
              Permohonan Pendaftaran
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

            {/* Pejabat Agama Islam Daerah form */}
            <FormControl sx={{ m: 1, minWidth: 120, maxWidth:800, width: 800}}>
              <InputLabel id="PAID" sx={{display:'flex'}}>PAID Pilihan <Typography sx={{color:'red'}}>*</Typography></InputLabel>
              <Select
                labelId="PAID"
                id="PAID"
                value={PAID}
                label="PAID Pilihan"
                onChange={PAIDHandleChange}
              >
                <MenuItem disabled value="">
                  <em>- SILA PILIH -</em>
                </MenuItem>
                <MenuItem value={'PEJABAT AGAMA ISLAM PEKAN'}>PEJABAT AGAMA ISLAM PEKAN</MenuItem>
              </Select>
            </FormControl>
            
            <Box sx={{marginTop:2, bgcolor:'#49516F', color:'white', width:400, height:30, borderRadius:1}}>
              <Typography variant="body" sx={{fontSize:'20px', marginLeft:4}}>
                Maklumat Pengadu
              </Typography>
            </Box>

            <br/>
            {/* Nama Pengadu form */}
            <FormControl sx={{ m: 1, minWidth: 120, maxWidth:800, width: 800}}>
              <TextField id="pengaduName" label="Nama Pengadu" variant="outlined" />
            </FormControl>
            <br/>
            {/* IC/Passport form */}
            <FormControl sx={{ m: 1, minWidth: 120, maxWidth:800, width: 800}}>
              <TextField id="noICPengadu" label="No. IC / No. Passport  " variant="outlined" />
            </FormControl>

            <Box sx={{marginTop:2, bgcolor:'#49516F', color:'white', width:400, height:30, borderRadius:1}}>
              <Typography variant="body" sx={{fontSize:'20px', marginLeft:4}}>
                Maklumat Pasangan
              </Typography>
            </Box>

            <br/>
            {/* Nama Pasangan form */}
            <FormControl sx={{ m: 1, minWidth: 120, maxWidth:800, width: 800}}>
              <TextField id="pasanganName" label="Nama Pasangan" variant="outlined" />
            </FormControl>
            <br/>
            {/* IC/Passport form */}
            <FormControl sx={{ m: 1, minWidth: 120, maxWidth:800, width: 800}}>
              <TextField id="noICPasangan" label="No. IC / No. Passport  " variant="outlined" />
            </FormControl>

            <Box sx={{marginTop:2, bgcolor:'#49516F', color:'white', width:400, height:30, borderRadius:1}}>
              <Typography variant="body" sx={{fontSize:'20px', marginLeft:4}}>
                Maklumat Perkahwinan
              </Typography>
            </Box>

            <br/>

            {/* Tarikh Berkahwin form */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <FormControl sx={{ m: 1, minWidth: 120, maxWidth:400, width: 400}}>
                <DatePicker 
                  label={<Grid sx={{display:'flex'}}>Tarikh Berkahwin<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
                  value={date}
                  onChange={(newDate) => setDate(newDate)}
                />
              </FormControl>
            </LocalizationProvider>
            
            {/* Jenis Perkahwinan form */}
            <FormControl sx={{ m: 1, minWidth: 120, maxWidth:400, width: 400}}>
              <InputLabel id="marriageType" sx={{display:'flex'}}>Jenis Perkahwinan <Typography sx={{color:'red'}}>*</Typography></InputLabel>
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

            <br/>

            {/* Kedudukan Isteri form */}
            <FormControl sx={{ m: 1, minWidth: 120, maxWidth:400, width: 400}}>
              <InputLabel id="marriageType" sx={{display:'flex'}}>Kedudukan Isteri <Typography sx={{color:'red'}}>*</Typography></InputLabel>
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

            {/* Kedudukan Isteri form */}
            <FormControl sx={{ m: 1, minWidth: 120, maxWidth:400, width: 400}}>
              <InputLabel id="marriageType" sx={{display:'flex'}}>Dasar Perkahwinan <Typography sx={{color:'red'}}>*</Typography></InputLabel>
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
            
            <br/>

              <Box sx={{display:'flex', marginTop:2}}>
                <Typography variant="body" sx={{fontSize:'16px', marginLeft:3, fontWeight:'bold', marginTop:3}}>
                  Bilangan Anak </Typography><Typography sx={{color:'red', marginTop:3}}>*</Typography><Typography sx={{marginTop:3}}>&nbsp;: 
                </Typography>

                {/* Total Anak Lelaki form */}
                <TextField sx={{m: 1, minWidth: 120, maxWidth:400, width: 250}}
                  id="childBoy"
                  label="Lelaki"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    inputProps: { min: 0}
                  }}
                />

                {/* Total Anak Perempuan form */}
                <TextField sx={{m: 1, minWidth: 120, maxWidth:400, width: 250}}
                  id="childGirl"
                  label="Perempuan"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    inputProps: { min: 0}
                  }}
                />
              </Box>
              
            <Box sx={{marginTop:2, bgcolor:'#49516F', color:'white', width:400, height:30, borderRadius:1}}>
              <Typography variant="body" sx={{fontSize:'20px', marginLeft:4}}>
                Maklumat Perceraian / Ruju’
              </Typography>
            </Box>

            <Box sx={{display:'flex', marginTop:2}}>
                <Typography variant="body" sx={{fontSize:'16px', marginLeft:3, fontWeight:'bold', marginTop:3}}>
                  Penceraian </Typography><Typography sx={{color:'red', marginTop:3}}>*</Typography><Typography sx={{marginTop:3}}>&nbsp;: 
                </Typography>

                {/* Penceraian form */}
                <FormControl sx={{marginTop:2}}>
                  <RadioGroup
                    row
                    name="divorce"
                  >
                    <FormControlLabel value="Yes" control={<Radio />} label="Pernah" sx={{marginLeft:3}} />
                    <FormControlLabel value="No" control={<Radio />} label="Tak Pernah" sx={{marginLeft:2}}  />
                  </RadioGroup>
                </FormControl>
              </Box>

            <Box sx={{marginTop:2, bgcolor:'#49516F', color:'white', width:400, height:30, borderRadius:1}}>
              <Typography variant="body" sx={{fontSize:'20px', marginLeft:4}}>
                Maklumat Aduan
              </Typography>
            </Box>

            <br/>
            
            {/* Detail Aduan form */}
            <TextField sx={{marginTop:3, m: 1, minWidth: 120, maxWidth:800, width: 800, height:200}}
              id="outlined-multiline-flexible"
              label={<Grid sx={{display:'flex'}}>Keterangan Aduan<Typography sx={{ color: 'red' }}>*</Typography></Grid>}
              multiline
              rows={4}
            />

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