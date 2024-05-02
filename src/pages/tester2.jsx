import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import BookIcon from '@mui/icons-material/Book';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useNavigate } from 'react-router-dom';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import NestedDropMb from '../components/nested-mob-services';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';


export default function TemporaryDrawer() {
    const [open2, setOpen2] = React.useState(true);
    const [serviceopen, setServiceOpen] = React.useState(true);

    const handleClick2 = () => {
        setOpen2(!open2);
    };
    const handleService = () => {
        setServiceOpen(!serviceopen);
    };
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const navigate = useNavigate()


    return (
        <div>
            <Button onClick={toggleDrawer(true)}>Open drawer</Button>
            <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(true)}>
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                Vcare.ai
                            </ListSubheader>
                        }
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary="About Us" />
                        </ListItemButton>
                        <ListItemButton onClick={handleClick2}>
                            <ListItemIcon>
                                <CategoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Products" />
                            {open2 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open2} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="P1" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="P2" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="P3" />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <ListItemButton onClick={handleService}>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Services" />
                            {serviceopen ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={serviceopen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <NestedDropMb
                                    title={"CFO"}
                                    pages={["1", "2", "3", "4", "5"]}
                                />
                                <NestedDropMb
                                    title={"Compliance"}
                                    pages={["1", "2", "3", "4", "5"]}
                                />
                                <NestedDropMb
                                    title={"Finance and Accounting"}
                                    pages={["1", "2", "3", "4", "5"]}
                                />
                                <NestedDropMb
                                    title={"Risk Management"}
                                    pages={["1", "2", "3", "4", "5"]}
                                />
                                <NestedDropMb
                                    title={"Business Advisory"}
                                    pages={["1", "2", "3", "4", "5"]}
                                />
                            </List>
                        </Collapse>
                        <ListItemButton>
                            <ListItemIcon>
                                <BookIcon />
                            </ListItemIcon>
                            <ListItemText primary="Blog" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <BookIcon />
                            </ListItemIcon>
                            <ListItemText primary="Resource" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <BookIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contact & Career" />
                        </ListItemButton>
                    </List>

                </Box>
            </Drawer>
        </div>
    );
}


