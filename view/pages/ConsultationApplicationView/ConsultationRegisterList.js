import { useState, useEffect } from 'react';
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
import { useRouter } from 'next/router';
import { getAllComplaints } from '../api/consultation';

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
  const [complaints, setComplaints] = useState([]);
  const router = useRouter();

  const handleDaftar = () => {
    router.push("/ConsultationApplicationView/ConsultationForm");
  }
  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await getAllComplaints();
        setComplaints(response);
        console.log(response);
      } catch (error) {
        console.log('Error fetching courses:', error);
      }
    };

    fetchComplaints();
  }, []);

  const handleAppoinment = (consultationId) => {
    router.push(`/ConsultationApplicationView/ConsultationAppoinmentForm?id=${consultationId}`)
  }
  const handleViewComplaint = (consultationId) => {
    router.push(`/ConsultationApplicationView/ConsultationApplicationDetail?id=${consultationId}`);
  };

  return (
    <Container maxWidth="md" >

      <Box sx={{ marginTop: 15 }}>
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

      <Box sx={{ fontWeight: 'bold', textAlign: "center", display: "flex", justifyContent: "center", marginTop: 10 }}>
        <Grid container>
          <Grid xs="auto" sx={{ marginTop: 1, marginLeft: 3 }}>
            <Typography variant="body" >
              Sila klik ‘Daftar Baru’ jika ingin membuat aduan / khidmat nasihat bagi [$IC]
            </Typography>
          </Grid>

          <Grid xs='auto' sx={{ marginLeft: 12 }}>
            <Button variant="contained" sx={{ bgcolor: "#49516F" }} onClick={handleDaftar}>Daftar Baru</Button>
          </Grid>
        </Grid>
      </Box>


      <TableContainer component={Paper} sx={{ marginTop: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="caption sticky table" stickyHeader>
          {/* <caption>Tiada Rekod</caption> */}
          <TableHead>
            <TableRow sx={{ "& th": { backgroundColor: "#CBC7D9" } }}>
              <TableCell sx={{ ...commonStyles, borderRight: 1, borderColor: 'white' }}>Bil</TableCell>
              <TableCell align="center" sx={{ ...commonStyles, borderRight: 1, borderColor: 'white' }}>No.KP / Nama Pengadu</TableCell>
              <TableCell align="center" sx={{ ...commonStyles, borderRight: 1, borderColor: 'white' }}>Status</TableCell>
              <TableCell align="center" sx={{ ...commonStyles, borderLeft: 1, borderColor: 'white' }}>Operasi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {complaints.map((d, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell align="center">{d.userConsultationId}</TableCell>
                <TableCell align="center">{d.status}</TableCell>
                <TableCell align="center">
                  {/* <IconButton color="primary" disabled>
                      <ModeEditIcon />
                    </IconButton > */}

                  {/* <IconButton color="primary" disabled>
                      <DeleteIcon />
                    </IconButton> */}
                  <IconButton onClick={() => handleViewComplaint(d._id)} color="primary">
                    <SearchIcon />
                  </IconButton>
                  <IconButton onClick={() => handleAppoinment(d._id)} color="primary">
                    <AccessTimeIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ textAlign: "left", marginTop: 4 }}>
        {rows.map((row) => (
          row.status == 'Lulus'
            ? <><Box sx={{ width: 80, borderRadius: '16px', fontWeight: 'bold', color: 'red' }}>PERHATIAN!</Box><br />
              <Box sx={{ display: 'flex' }}>
                <Typography>Permohonan Aduan / Khidmat Nasihat anda</Typography>
                <Typography sx={{ fontWeight: 'bold' }}>&nbsp;TELAH DILULUSKAN.</Typography>
                <Typography>&nbsp;Sila buat</Typography>
                <Typography sx={{ fontWeight: 'bold' }}>&nbsp;Permohonan Temujanji.</Typography>
              </Box></>//If yes
            : null //If no
        ))}
      </Box>
    </Container>
  );
}