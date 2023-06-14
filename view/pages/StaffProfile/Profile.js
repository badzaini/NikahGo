import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Grid, Box, useTheme, Typography, TextField, Button } from "@mui/material";
import Item from '@mui/material/InputLabel';
import { useState } from 'react';
//import { auth } from "../../../components/firebase/firebase";
import { useSelector } from 'react-redux';

const StaffProfile = () => {
    const userName = useSelector((state) => state.user.name);
    const userIc = useSelector((state) => state.user.ic);
    const userPhone = useSelector((state) => state.user.phone);
    const userGender = useSelector((state) => state.user.gender);

    const [name, setName] = useState(userName)
    const [ic, setIc] = useState(userName)
    const [phone, setPhone] = useState(userPhone)
    const [gender, setGender] = useState(userGender)

    const theme = useTheme();

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar> */}
                <Typography component="h1" variant="h5">
                    Profile
                </Typography>
                <Box sx={{ mt: 3 }} >
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                id="name"
                                label="Nama"
                                name="name"
                                autoComplete="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                id="ic"
                                label="IC"
                                name="ic"
                                autoComplete="ic"
                                value={ic}
                                onChange={(e) => setIc(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                id="phone"
                                label="No. Telefon"
                                name="phone"
                                autoComplete="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Jantina*</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="gender"
                                    value={gender}
                                    label="Jantina"
                                    name="gender"
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <MenuItem value={"Lelaki"}>Lelaki</MenuItem>
                                    <MenuItem value={"Perempuan"}>Perempuan</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleSubmit}
                    >
                        Kemaskini
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default StaffProfile;