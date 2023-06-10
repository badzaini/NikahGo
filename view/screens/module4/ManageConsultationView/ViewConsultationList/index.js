import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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

      <TableContainer component={Paper} sx={{ marginTop: 5, width: 1000 }}>
        <Table sx={{ minWidth: 650 }} aria-label="caption sticky table" stickyHeader>
          {/* <caption>Tiada Rekod</caption> */}
          <TableHead>
            <TableRow sx={{ "& th": { backgroundColor: "#CBC7D9" } }}>
              {
                headCells.map((head) => (<TableCell align="center" key={head.id} sx={{ ...commonStyles, borderRight: 1, borderColor: 'white' }}>{head.label}</TableCell>))
              }
            </TableRow>
          </TableHead>

          <TableBody>
            {rowsAfterSlicePaging().map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.bil}
                </TableCell>
                <TableCell align="left">{row.akuanTerima}</TableCell>
                <TableCell align="left" >{row.icPengadu}<br />{row.pengadu}</TableCell>
                <TableCell align="left">{row.icPasangan}<br />{row.pasangan}</TableCell>
                <TableCell align="center">{row.tarikh}</TableCell>
                <TableCell align="center">
                  {/* If else statement utk status */}
                  {row.status == 'Lulus' ? <Box sx={{ bgcolor: "#35B421", width: 80, borderRadius: '16px' }}>Lulus</Box> : <Box sx={{ bgcolor: "#C4C4C4", width: 80, borderRadius: '16px' }}>Hantar</Box>}
                </TableCell>
                <TableCell align="left" sx={{ display: 'flex', height: 100, width: 145 }}><Button ><SearchIcon /></Button><Button onClick={handleClickOpen}><ContentPasteIcon /></Button></TableCell>

              </TableRow>
            ))}
            {
              rows.length === 0 ?
                <TableRow>
                  <TableCell colSpan={8} align="center">Tiada Rekod</TableCell> {/* If row dont have a data */}
                </TableRow> : null
            }

          </TableBody>
          <TableFooter>
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
          </TableFooter>
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
        <DialogContent dividers>
          <Typography gutterBottom>
            ISTERI SAYA CURANG DENGAN RAKAN PEJABAT DIA DAN
            MENGABAIKAN TANGGUNGJAWAB DIA SEBAGAI ISTERI. DIA
            MENFITNAH SAYA DENGAN MENGATAKAN SAYA DAYUS KERANA
            SENTIASA MEMUKUL DIA.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Lulus</Button>
        </DialogActions>
      </BootstrapDialog>
    </Container>
  );


}