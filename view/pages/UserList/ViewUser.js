import React from 'react'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { styled, alpha } from '@mui/material/styles';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Container,
  IconButton,
  InputBase,
  Typography,
  Box,
  Button,
  Divider
} from '@mui/material';
import { getAll } from '../api/user';

export default function AdminSenaraiPemohon() {
  const router = useRouter(); // Initialize the router variable using the useRouter hook

  const handleConfirmViewPP = () => {
    router.push("/MarriageApplication/AdminProofPayment");
  };

  const handleConfirmApprovePP = () => {
    router.push("");
  };

  const handleConfirmDisapprovePP = () => {
    router.push("");
  };

  const handleConfirmApproveViewAppForm = () => {
    router.push("/MarriageApplication/AdminMarraigeAppForm");
  };

  const handleConfirmApproveEditAppForm = () => {
    router.push("/MarriageApplication/AdminMarraigeAppForm");
  };

  const handleConfirmApproveMarriageApp = () => {
    router.push("");
  };

  const handleConfirmDisapproveMarriageApp = () => {
    router.push("");
  };

  const handleConfirmApproveDeleteAppForm = () => {
    router.push("");
  };

  function createData(
    bil,
    icnamapemohon,
    icnamapasangan,
    tarikhmohon,
    status,
    resit,
    operasi
  ) {
    return {
      bil,
      icnamapemohon,
      icnamapasangan,
      tarikhmohon,
      status,
      resit: resit ? (
        <>
          <IconButton
            onClick={handleConfirmViewPP}
            type="button"
            sx={{ p: "10px", color: "black" }}
            aria-label="view"
          >
            <ReceiptLongIcon />
          </IconButton>
          <IconButton
            onClick={handleConfirmApprovePP}
            type="button"
            sx={{ p: "10px", color: "green" }}
            aria-label="approve"
          >
            <CheckCircleIcon />
          </IconButton>
          <IconButton
            onClick={handleConfirmDisapprovePP}
            type="button"
            sx={{ p: "10px", color: "red" }}
            aria-label="disapprove"
          >
            <CancelIcon />
          </IconButton>
        </>
      ) : null,
      operasi: operasi ? (
        <>
          <IconButton
            onClick={handleConfirmApproveEditAppForm}
            type="button"
            sx={{ p: "10px", color: "black" }}
            aria-label="view"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={handleConfirmApproveViewAppForm}
            type="button"
            sx={{ p: "10px", color: "black" }}
            aria-label="view"
          >
            <PageviewIcon />
          </IconButton>
          <IconButton
            onClick={handleConfirmApproveDeleteAppForm}
            type="button"
            sx={{ p: "10px", color: "black" }}
            aria-label="disapprove"
          >
            <DeleteIcon />
          </IconButton>
        </>
      ) : null,
    };
  }

  const rows = [
    createData(
      "1.",
      "820919065488 ABDUL NAHIM BIN MUSAB",
      "372738247487 NUR SURAYA BINTI KASIM",
      "05/01/2023",
      "DALAM PROSES",
      true,
      true
    ),
    createData("2.", "", "", "", "DITOLAK", true, true),
    createData("3.", "", "", "", "DTERIMA", true, true),
  ];

export default function Request() {
  const [users, setUsers] = useState([]);
  const router = useRouter();

  const handleDaftar = () => {
    router.push("/MarriageRegistration/Registration");
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAll();
        setUsers(response);
      } catch (error) {
        console.log('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Container sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: 20, width: 750 }}>
      <Box>
        <Typography variant="h4" gutterBottom sx={{ borderLeft: "13px solid black" }}>Senarai Pengguna</Typography>
      </Box>
      <TableContainer component={Paper} sx={{ maxWidth: 750, mt: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: 50 }}>Bil.</TableCell>
              <TableCell>Username</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{user.name}</TableCell>
                {/* Add additional table cells for other user properties */}
              </TableRow>
            ))}
          </TableBody>
          {/* <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableBody> */}
        </Table>
      </TableContainer>
    </Container>
  )
}
