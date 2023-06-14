import React from 'react'
import { useRouter } from 'next/router';
import { useState } from 'react';
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
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid,
    Stack,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { regMarriage } from '../api/marriage';

export default function Registration() {
    const ic = useSelector((state) => state.user.ic);
    const [userIc, setUserIc] = useState(ic);
    const [regType, setRegType] = useState();
    const [slipNo, setSlipNo] = useState();

    const data = {
        userMarriageRegId: userIc,
        regType: regType,
        slipNo: slipNo
    }

    const router = useRouter(userIc);

    const handleTeruskan = async (ic) => {
        console.log(ic);
        try {
            const result = await regMarriage({ data });
            console.log(result);
        } catch (err) {
            console.log(err);
        }
        router.push(`/MarriageRegistration/MarriageForm?id=${ic}`);
    }

    const handleKembali = () => {
        router.push("/MarriageRegistration/Request");
    }
    return (
        <Container sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: 20, width: 750, alignItems: "center" }}>
            <Box>
                <Typography variant="h4" gutterBottom sx={{ borderLeft: "13px solid black" }}>Permohonan Pendaftaran Perkahwinan</Typography>
            </Box>
            <Stack sx={{ width: 300, py: 3 }} spacing={2}>
                <TextField id="outlined-basic" label="No. K/P" variant="outlined" sx={{ width: 300 }} value={userIc} onChange={(e) => setUserIc(e.target.value)} />

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Kategori</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={regType}
                        label="Gender"
                        onChange={(e) => setRegType(e.target.value)}
                        sx={{ width: 300 }}
                    >
                        <MenuItem value={"Pendaftaran Nikah Dengan Kebenaran"}>Pendaftaran Nikah Dengan Kebenaran</MenuItem>
                        <MenuItem value={"Pendaftaran Nikah Tanpa Kebenaran"}>Pendaftaran Nikah Tanpa Kebenaran</MenuItem>
                    </Select>
                </FormControl>

                <TextField id="outlined-basic" label="No. Slip Permohonan" variant="outlined" sx={{ width: 300 }} value={slipNo} onChange={(e) => setSlipNo(e.target.value)} />
                <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
                    <Button variant="contained" onClick={handleKembali} sx={{ ml: 2 }}>Kembali</Button>
                    <Button variant="contained" onClick={() => handleTeruskan(userIc)} sx={{ mr: 2 }}>Teruskan</Button>
                </Box>
            </Stack>
        </Container>
    )
}
