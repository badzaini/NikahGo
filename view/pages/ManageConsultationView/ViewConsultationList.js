import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import dayjs from 'dayjs';
import {
  Button,
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
  TablePagination,
  TableFooter,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,

} from '@mui/material';
import { getUserByIC } from '../api/user';
import { useDispatch, useSelector } from "react-redux";
import { getAllConsultations, getAllComplaints } from '../api/consultation';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function createData(bil, akuanTerima, icPengadu, pengadu, icPasangan, pasangan, tarikh, status) {
  return { bil, akuanTerima, icPengadu, pengadu, icPasangan, pasangan, tarikh, status };
}


//cell Head
const headCells = [
  { id: 'bil', label: 'Bil' },
  { id: 'Akuan', label: 'Akuan Terima' },
  { id: 'icPengadu', label: 'No.KP / Nama Pengadu' },
  { id: 'icPasangan', label: 'No.KP / Nama Pasangan' },
  { id: 'tarikh', label: 'Tarikh Mohon' },
  { id: 'Status', label: 'Status' },
  { id: 'Operasi', label: 'Operasi' }
];

//Rows data
const rows = [
  createData(1, 'KTN12M5/202300143', '960723063233', 'AHMAD BIN ABDULLAH', '990202067822', 'NUR SURAYA BINTI KASIM', '07/01/2023', 'Lulus'),
  createData(2, 'KTN12M5/202300143', '960723063233', 'AHMAD BIN ABDULLAH', '990202067822', 'NUR SURAYA BINTI KASIM', '07/01/2023', 'Hantar'),
  createData(1, 'KTN12M5/202300143', '960723063233', 'AHMAD BIN ABDULLAH', '990202067822', 'NUR SURAYA BINTI KASIM', '07/01/2023', 'Lulus'),
  createData(1, 'KTN12M5/202300143', '960723063233', 'AHMAD BIN ABDULLAH', '990202067822', 'NUR SURAYA BINTI KASIM', '07/01/2023', 'Lulus'),
  createData(1, 'KTN12M5/202300143', '960723063233', 'AHMAD BIN ABDULLAH', '990202067822', 'NUR SURAYA BINTI KASIM', '07/01/2023', 'Lulus'),
  createData(1, 'KTN12M5/202300143', '960723063233', 'AHMAD BIN ABDULLAH', '990202067822', 'NUR SURAYA BINTI KASIM', '07/01/2023', 'Lulus'),
];

const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  width: 'auto',
  height: 'auto',
};

export default function ConsultationForm() {
  const [complaints, setComplaints] = useState([]);
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

  // useEffect(() => {
  //   const fetchConsultations = async () => {
  //     try {
  //       const response = await getAllConsultations();
  //       setConsultations(response);
  //       console.log(response);
  //     } catch (error) {
  //       console.log('Error fetching courses:', error);
  //     }
  //   };

  //   fetchConsultations();
  // }, []);

  const pages = [5, 10, 15];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowPerPage] = useState(pages[page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const rowsAfterSlicePaging = () => {
    return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleView = (consultationId) => {
    router.push(`/ManageConsultationView/ViewConsultationDetail?id=${consultationId}`);
  }

  return (
    <Container maxWidth="md">

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

      <TableContainer component={Paper} sx={{ marginTop: 5 }}>
        <Table aria-label="caption sticky table" stickyHeader>
          {/* <caption>Tiada Rekod</caption> */}
          <TableHead>
            <TableRow sx={{ "& th": { backgroundColor: "#CBC7D9" } }}>
              <TableCell>Bil.</TableCell>
              <TableCell>IC Pengadu</TableCell>
              <TableCell>Operasi</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {complaints.map((d, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell align="left">{d.userConsultationId}</TableCell>
                <TableCell align="left"><Button onClick={() => handleView(d._id)} ><SearchIcon /></Button><Button onClick={handleClickOpen}><ContentPasteIcon /></Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter> */}
        </Table>

      </TableContainer>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Keterangan Aduan
        </BootstrapDialogTitle>
        {complaints.map((d, i) => (
          <DialogContent key={i} dividers>
            <Typography gutterBottom>
              {d.complaint}
            </Typography>
          </DialogContent>
        ))}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Lulus</Button>
        </DialogActions>
      </BootstrapDialog>
    </Container>
  );


}