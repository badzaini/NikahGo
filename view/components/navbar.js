import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from "next/router";
import Sidebar from "./sidebar";
import { signOut } from "firebase/auth";
import { auth } from "../fbConfig";

const Navbar = () => {
    const router = useRouter();
    const pathname = router.pathname;

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                // Logout successful
                console.log("User logged out");
                router.push("/Registration/Login");
            })
            .catch((error) => {
                // Handle logout error
                console.error("Error logging out:", error);
            });
    };

    // console.log(pathname);
    return (
        <Box>
            <AppBar position="fixed" sx={{ zIndex: 2000 }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        NikahGo
                    </Typography>
                    <Button onClick={handleLogout} color="inherit">
                        Logout
                    </Button>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
            {pathname == "/Registration/Login" || pathname == "/Registration/SignUp" ? null : <Sidebar />}
        </Box>
    );
}

export default Navbar;