import React from 'react'
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
import SearchIcon from '@mui/icons-material/Search';

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

export default function IncentiveRequest() {
    const router = useRouter();

    const handleDaftar = () => {
        router.push("/Incentive/ManageIncentiveRequest");
    }
    return (
        <Container sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: 20, width: 750 }}>
            <Box>
                <Typography variant="h4" gutterBottom sx={{ borderLeft: "13px solid black" }}>Bantuan Insentif Khas</Typography>
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
           
            <TableContainer component={Paper} sx={{ maxWidth: 750 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Bil</TableCell>
                            <TableCell align="right">No.KP / Nama Pemohon</TableCell>
                            <TableCell align="right">No.KP / Nama Pasangan</TableCell>
                            <TableCell align="right">Tarikh Mohon</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Operasi</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                            </TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ pb: 1 }}>
                <Button variant="contained" onClick={handleDaftar} sx={{ float: "right" }}>Close</Button>
            </Box>
        </Container>
    )
}