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
import { Link, useNavigate } from 'react-router-dom';
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
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function MobileNavBar() {
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [serviceopen, setServiceOpen] = React.useState(false);

    const handleClick2 = () => {
        setOpen2(!open2);
    };
    const handleClickResource = () => {
        setOpen3(!open3);
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
                            <ListItemText primary={<Link style={{ color: "#000" }} to={'/'}>Home</Link>} />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary={<  Link style={{ color: "#000" }} to={'/aboutus'}>About</Link>} />
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

                        <ListItemButton onClick={handleClickResource}>
                            <ListItemIcon>
                                <CategoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Resources" />
                            {open3 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open3} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary={<Link to={'/resources/podcast'}>Podcast</Link>} />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary={<Link to="/resources/webniars">Webinar</Link>} />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary={<Link to="/resources/videos">Videos</Link>} />
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
                                    pages={
                                        [<  Link style={{ color: "#000" }} to={"/services/cfo/virtualCfo"}>Virtual CFO</Link>,
                                        <Link style={{ color: "#000" }} to={"/services/cfo/interim-cfo"}>Interim CFO</Link>,
                                        <Link style={{ color: "#000" }} to={"/services/cfo/consultant"}>CFO  Consultancy</Link>,
                                        <Link style={{ color: "#000" }} to={"/services/cfo/small-business"}>CFO  Services for small business</Link>,
                                        <Link style={{ color: "#000" }} to={"/services/cfo/outsourced"}>Outsourced CFO  Service</Link>,
                                        <Link style={{ color: "#000" }} to={"/services/cfo/fractional"}>Part Time CFO  Service</Link>
                                        ]
                                    }
                                />
                                <NestedDropMb
                                    title={"Compliance"}
                                    pages={
                                        [
                                            <Link style={{ color: "#000" }} to={"/services/compliance-management/company-information"}>Company Formation, LLP</Link>,
                                            <Link style={{ color: "#000" }} to={"/services/compliance-management/incomeTax-advisory"}>Income Tax Advisory</Link>,
                                            <Link style={{ color: "#000" }} to={"/services/compliance-management/legal-regulatory"}>Legal and Regulatory</Link>,
                                            <Link style={{ color: "#000" }} to={"/services/compliance-management/payroll-management"}>Payroll Management</Link>,

                                        ]
                                    }
                                />
                                <NestedDropMb
                                    title={"Finance and Accounting"}
                                    pages={
                                        [
                                            <Link style={{ color: "#000" }} to={"/services/finance-accounting/mis"}>Management Information</Link>,
                                            <Link style={{ color: "#000" }} to={"/services/finance-accounting/cash-flow"}>Cashflow Monitoring & Cost</Link>,
                                            <Link style={{ color: "#000" }} to={"/services/finance-accounting/capital-management"}>Working Capital Management</Link>,
                                            <Link style={{ color: "#000" }} to={"/services/finance-accounting/treasury-management"}>Treasury Management</Link>,

                                        ]}
                                />
                                <ListItemButton sx={{ pl: 5 }}>

                                    <ListItemText primary={
                                        <Link style={{color:"#000"}} to='/services/riskManagement'>Risk Management</Link>
                                    }
                                    />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 5 }}>

                                    <ListItemText primary={
                                        <Link style={{color:"#000"}} to='/services/business-advisory'>Business Advisory</Link>
                                    } />
                                </ListItemButton>

                            </List>
                        </Collapse>
                        <ListItemButton>
                            <ListItemIcon>
                                <BookIcon />
                            </ListItemIcon>
                            <ListItemText primary={<Link style={{color:"#000"}} to='/blogs'>Blog</Link>} />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon>
                                <BookIcon />
                            </ListItemIcon>
                            <ListItemText primary={<Link style={{color:"#000"}} to='/gallery'>Press & Gallery</Link>} />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon>
                                <BookIcon />
                            </ListItemIcon>
                            <ListItemText primary={<Link style={{color:"#000"}} to='/contact_career'>Contact & Career</Link>} />
                        </ListItemButton>
                    </List>

                </Box>
            </Drawer>
        </div>
    );
}