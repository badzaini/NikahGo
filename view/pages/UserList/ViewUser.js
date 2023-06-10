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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
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
