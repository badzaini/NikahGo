import { useState } from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {
  Button,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  Box,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Stack,
  IconButton 
} from '@mui/material';

function createData(bil, icPengadu, pengadu, icPasangan, pasangan, tarikh, status, operasi) {
  return { bil, icPengadu, pengadu, icPasangan, pasangan, tarikh, status, operasi };
}

const rows = [
  createData(1, '960723063233', 'AHMAD BIN ABDULLAH', '990202067822', 'NUR SURAYA BINTI KASIM', '07/01/2023', 'Simpan')
  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Eclair', 262, 16.0, 24, 6.0),
];

const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  width: 'auto',
  height: 'auto',
};

export default function ConsultationForm() {
 
  return (
    <Container maxWidth="md" >

        <Box sx={{marginTop:15}}>
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

        <Box sx={{fontWeight:'bold', textAlign:"center", display:"flex", justifyContent:"center", marginTop:10}}>
          <Grid container>
            <Grid xs="auto" sx={{marginTop:1, marginLeft:3}}>
              <Typography variant="body" >
                Sila klik ‘Daftar Baru’ jika ingin membuat aduan / khidmat nasihat bagi [$IC]
              </Typography>
            </Grid>

            <Grid xs='auto' sx={{marginLeft:12}}>
              <Button variant="contained" sx={{bgcolor:"#49516F"}}>Daftar Baru</Button>
            </Grid>
          </Grid>
        </Box>


      <TableContainer component={Paper} sx={{marginTop:5}}>
        <Table sx={{ minWidth: 650 }} aria-label="caption sticky table" stickyHeader>
          {/* <caption>Tiada Rekod</caption> */}
          <TableHead>
            <TableRow  sx={{"& th": {backgroundColor: "#CBC7D9"}}}>
              <TableCell sx={{ ...commonStyles, borderRight: 1, borderColor: 'white' }}>Bil</TableCell>
              <TableCell align="center" sx={{ ...commonStyles, borderRight: 1, borderColor: 'white' }}>No.KP / Nama Pengadu</TableCell>
              <TableCell align="center"sx={{ ...commonStyles, borderRight: 1, borderColor: 'white' }}>No.KP / Nama Pasangan</TableCell>
              <TableCell align="center" sx={{ ...commonStyles, borderRight: 1, borderColor: 'white' }}>Tarikh Aduan</TableCell>
              <TableCell align="center" sx={{ ...commonStyles, borderRight: 1, borderColor: 'white' }}>Status</TableCell>
              <TableCell align="center" sx={{ ...commonStyles, borderLeft: 1, borderColor: 'white' }}>Operasi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.bil}
                </TableCell>
                <TableCell align="left">{row.icPengadu}<br/>{row.pengadu}</TableCell>
                <TableCell align="left">{row.icPasangan}<br/>{row.pasangan}</TableCell>
                <TableCell align="center">{row.tarikh}</TableCell>
                <TableCell align="center">
                    {/* If else statement utk status */}
                    {row.status == 'Lulus' 
                    ? <Box sx={{bgcolor:"RGBA(53,180,33,0.8)", width:80, borderRadius:'16px'}}>Lulus</Box> //If Lulus
                    : <Box sx={{bgcolor:"RGBA(243,14,42,0.7)", width:80, borderRadius:'16px'}}>Simpan</Box> } {/*If Simpan*/}
                </TableCell>
                <TableCell align="left">
                  <Stack direction="row" spacing={1} sx={{color:'black'}}>
                    <IconButton color="primary" disabled>
                      <ModeEditIcon/>
                    </IconButton >
                    <IconButton  color="primary" disabled>
                      <SearchIcon />
                    </IconButton>
                    <IconButton color="primary" disabled>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton color="primary">
                      <AccessTimeIcon/>
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
            {
              rows.length === 0 ? 
              <TableRow>
                <TableCell colSpan={8} align="center">Tiada Rekod</TableCell> {/* If row dont have a data */}
              </TableRow> : null

            }
          </TableBody>
        </Table>
      </TableContainer>
      
      <Box sx={{textAlign:"left", marginTop:4}}>
        {rows.map((row) => (
          row.status == 'Lulus' 
          ? <><Box sx={{ width: 80, borderRadius: '16px', fontWeight: 'bold', color: 'red' }}>PERHATIAN!</Box><br/>
          <Box sx={{display:'flex'}}>
            <Typography>Permohonan Aduan / Khidmat Nasihat anda</Typography>
            <Typography sx={{ fontWeight: 'bold'}}>&nbsp;TELAH DILULUSKAN.</Typography>
            <Typography>&nbsp;Sila buat</Typography>
            <Typography sx={{ fontWeight: 'bold'}}>&nbsp;Permohonan Temujanji.</Typography>
            </Box></>//If yes
          : null //If no
        ))}
      </Box>              
    </Container>
  );
}