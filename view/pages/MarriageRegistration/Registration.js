import React from 'react'
import { useRouter } from 'next/router';
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
import SearchIcon from '@mui/icons-material/Search';


export default function Registration() {
    const router = useRouter();

    const handleTeruskan = () => {
        router.push("/MarriageRegistration/MarriageForm");
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
                <TextField id="outlined-basic" label="No. K/P" variant="outlined" sx={{ width: 300 }} />

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Kategori</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={gender || ""}
                        label="Gender"
                        // onChange={(e) => setGender(e.target.value)}
                        sx={{ width: 300 }}
                    >
                        <MenuItem>Pendaftaran Nikah Dengan Kebenaran</MenuItem>
                        <MenuItem>Pendaftaran Nikah Tanpa Kebenaran</MenuItem>
                    </Select>
                </FormControl>

                <TextField id="outlined-basic" label="No. Slip Permohonan" variant="outlined" sx={{ width: 300 }} />
                <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
                    <Button variant="contained" onClick={handleKembali} sx={{ ml: 2 }}>Kembali</Button>
                    <Button variant="contained" onClick={handleTeruskan} sx={{ mr: 2 }}>Teruskan</Button>
                </Box>
            </Stack>
        </Container>
    )
}
