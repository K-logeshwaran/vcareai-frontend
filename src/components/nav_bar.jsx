import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import ProductMenu from './productMenu';
import ServiceMenu from './serviceMenu';
import { ThemeProvider } from '@mui/material';
import { themeOptions } from '../helpers/theme';






const menuItems = [
    { title: 'Menu' },
    {
        title: 'Submenu 1',
        submenu: [
            { title: 'Submenu Item 1' },
            { title: 'Submenu Item 2' },
        ],
    },
    { title: 'Item 2' },
];


const pages = [
    {
        title: "home",
        navigateTo: (navigator) => navigator("/")
    },
    {
        title: "about us",
        navigateTo: (navigator) => navigator("/aboutus")
    },
    {
        title: "product",
        values: ["Pd1", "Pd2", "Pd3"]
    },
    {
        title: "service",
        values: [
            {
                title: "CFO",
                values: [1, 3, 4, 5, 5]
            },
            { title: "Finance and Accounting", values: [1, 3, 4, 5, 5] },
            { title: "Compliance", values: [1, 3, 4, 5, 5] },
            { title: "Risk Management", values: [1, 3, 4, 5, 5] },
            { title: "Business Advisory", values: [1, 3, 4, 5, 3335] }
        ]
    },
    {
        title: "resource",
        navigateTo: (navigator) => navigator("/register")
    },
    {
        title: "blog",
        navigateTo: (navigator) => navigator("/blogs")
    },
    {
        title: "contact & career",
        navigateTo: (navigator) => navigator("/register")
    },

];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [auth, setAuth] = React.useState(false);
    const navigate = useNavigate()

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <ThemeProvider theme={themeOptions}>
            <AppBar position="static" >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.title} onClick={handleCloseNavMenu}>

                                        <Typography onClick={() => page.navigateTo(navigate)} textAlign="center">{page.title}</Typography>

                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                            {pages.map((page, index) => {
                                if (index == 2) {
                                    return <ProductMenu title={page.title} values={page.values} />
                                } else if (index == 3) {
                                    return <ServiceMenu title={page.title} values={page.values} />
                                }
                                else {
                                    return (<Button
                                        key={page.title}
                                        onClick={() => { handleCloseNavMenu(); page.navigateTo(navigate) }}
                                        sx={{ my: 2, color: 'inherit', display: 'block' }}
                                    >
                                        {page.title}
                                    </Button>)
                                }


                            })}

                        </Box>

                        {
                            auth && <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        }
                    </Toolbar>
                </Container>
            </AppBar>
            </ThemeProvider>
        
    );
}
export default NavBar;