import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import GroupsIcon from '@mui/icons-material/Groups';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Link from 'next/link';

const drawerWidth = 240;

const Sidebar = () => {
    return (
        <Box >
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    zIndex: 500,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <Link href="/UserProfile/Profile">
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <AccountCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Profile" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link href="/PreMarriageCourse/CourseTerm">
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <AppRegistrationIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Daftar Kursus Pra Perkahwinan" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <GroupsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Permohonan Berkahwin" />
                            </ListItemButton>
                        </ListItem>
                        <Link href="/MarriageRegistration/Request">
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <GroupsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Pendaftaran Berkahwin" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link href="/KadNikah/Request">
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <GroupsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Mohon Kad Nikah" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link href="/module4/consultationApplicationView/ConsultationRegisterList">
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <RecordVoiceOverIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Khidmat Nasihat" />
                                </ListItemButton>
                            </ListItem>
                        </Link>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AttachMoneyIcon />
                                </ListItemIcon>
                                <ListItemText primary="Insentif Khas" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}

export default Sidebar;