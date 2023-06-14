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

export default function Request() {
    const [marriages, setMarriages] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchMarriages = async () => {
            try {
                const response = await getMarriageRegs();
                setMarriages(response);
                console.log(response);
            } catch (error) {
                console.log('Error fetching courses:', error);
            }
        };

        fetchMarriages();
    }, []);

    const handleDaftar = () => {
        router.push("/MarriageRegistration/Registration");
    }
    return (
        <Container sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: 20, width: 750 }}>
            <Box>
                <Typography variant="h4" gutterBottom sx={{ borderLeft: "13px solid black" }}>Pendaftaran Perkahwinan</Typography>
            </Box>
            {/* <Box sx={{ py: 3, display: "flex", justifyContent: "center" }}>
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
            </Box> */}
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {marriages.map((d, i) => (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">
                                    {i + 1}
                                </TableCell>
                                <TableCell align="left">{d.userMarriageRegId}</TableCell>
                                <TableCell align="left">{d.slipNo}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}
