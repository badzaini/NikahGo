import { useState } from 'react';

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
  
} from '@mui/material';

function createData(bil, pengadu, pasangan, tarikh, status, operasi) {
  return { bil, pengadu, pasangan, tarikh, status, operasi };
}

const rows = [
  // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
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
                <TableCell align="center">{row.pengadu}</TableCell>
                <TableCell align="center">{row.pasangan}</TableCell>
                <TableCell align="center">{row.tarikh}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">{row.operasi}</TableCell>
              </TableRow>
            ))}
            <TableRow>
            <TableCell colSpan={8} align="center">Tiada Rekod</TableCell> {/* If row dont have a data */}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

    </Container>
  );
}