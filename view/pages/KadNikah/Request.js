import React from 'react'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
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
import SearchIcon from '@mui/icons-material/Search';
import { getMarriageRegs } from '../api/marriage';
import { getAllRequest } from '../api/kadNikah';

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
    const [requests, setRequests] = useState([]);

    const router = useRouter();

    const handleDaftar = () => {
        router.push("/KadNikah/Apply");
    }

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await getAllRequest();
                setRequests(response);
                console.log(response);
            } catch (error) {
                console.log('Error fetching courses:', error);
            }
        };

        fetchRequests();
    }, []);

    return (
        <Container sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: 20, width: 750 }}>
            <Box>
                <Typography variant="h4" gutterBottom sx={{ borderLeft: "13px solid black" }}>Permohonan Kad Nikah</Typography>
            </Box>
            <Box sx={{ py: 3, display: "flex", justifyContent: "center" }}>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="No. K/P"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Box>
            <Box sx={{ pb: 1 }}>
                <Button variant="contained" onClick={handleDaftar} sx={{ float: "right" }}>Daftar</Button>
            </Box>
            <TableContainer component={Paper} sx={{ maxWidth: 750 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Bil</TableCell>
                            <TableCell align="left">No. K/P</TableCell>
                            <TableCell align="left">No. Slip Permohonan</TableCell>
                            <TableCell align="left">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {requests.map((d, i) => (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">
                                    {i + 1}
                                </TableCell>
                                <TableCell align="left">{d.userKadName}</TableCell>
                                <TableCell align="left">{d.partnerKadName}</TableCell>
                                <TableCell align="left">{d.status}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}
