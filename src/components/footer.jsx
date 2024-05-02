import React, { useState } from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";

import "./footer.css"
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import NavigationIcon from '@mui/icons-material/Navigation';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import logo from "../../public/vcare.png"

const Footer = () => {
    const [isdisplay, setIsDisplay] = useState(false)
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "#4281a7",
                paddingTop: "2rem",
                paddingBottom: "2rem",

            }}

        >
            <Container maxWidth="lg">
                <Box display={"flex"} flexDirection={"column"}  >

                    <Grid className="typo" container alignItems="center" paddingBottom={'1rem'}>
                        <Grid item xs={4} >
                            <Box display={"flex"} flexDirection={"column"} gap={2.5}>
                                <img width={"65%"} src={logo} />
                                
                                <Box display={"flex"} width={'100%'} gap={4} sx={{
                                    '@media only screen and (max-width: 600px)': {
                                        flexDirection: 'column',
                                        gap: 2
                                    },
                                }}>
                                    <Typography color="#fff">instaa</Typography>
                                    <Typography color="#fff">instaa</Typography>
                                    <Typography color="#fff">instaa</Typography>
                                </Box>
                            </Box>

                        </Grid>
                        <Grid item xs={4} >
                            <Box display={"flex"} flexDirection={"column"} gap={2}>
                                <Typography paddingBottom={'.3rem'} color="#fff" textAlign={"center"} fontWeight={"bold"} variant="h6">Quick links</Typography>
                                <Link to={'/'} > <Typography color="#fff" textAlign={"center"} >Home</Typography></Link>
                                <Link to={'/services'}  > <Typography color="#fff" textAlign={"center"}>
                                    Services</Typography></Link>
                                <Link to={'/aboutus'}> <Typography color="#fff" textAlign={"center"}>About</Typography></Link>
                                <Link to={'/blogs'} > <Typography color="#fff" textAlign={"center"}>Blog</Typography></Link>

                            </Box>
                        </Grid>
                        <Grid item xs={4} >
                            <Box display={"flex"} flexDirection={"column"} gap={2}>
                                <Link to={'/contact_career'}>     <Typography textAlign={'center'} color="#fff">Contact</Typography></Link>
                                <Typography textAlign={'center'} color="#fff">email</Typography>
                                <Typography textAlign={'center'} color="#fff">address</Typography>
                            </Box>
                        </Grid>

                    </Grid>
                    <Divider sx={{ borderBottomWidth: 2 }} />
                    <Grid item xs={12} paddingTop={'1rem'}>

                        <div style={{ position: "relative" }}>
                            {
                                isdisplay == false ?
                                    <div style={{ position: "fixed", bottom: "3rem", right: "1rem" }}>
                                        <Fab variant="extended" onClick={() => setIsDisplay(true)}>
                                            <NavigationIcon sx={{ mr: 1 }} />
                                            Chat with bot
                                        </Fab>
                                    </div> :
                                    <div className="float-bt" >
                                        <div className="float-bt" >
                                            <IconButton color="#000" aria-label="add an alarm" onClick={() => setIsDisplay(false)}>
                                                <CloseIcon
                                                    style={{ cursor: "pointer" }}

                                                />
                                            </IconButton>

                                            <iframe
                                                src="https://www.chatbase.co/chatbot-iframe/tH2_p_HHbp95IKiHe0DEh"
                                                title="Chatbot"
                                                width="100%"
                                                style={{ height: "100%" }}
                                                frameBorder={0}
                                            />

                                        </div>
                                    </div>
                            }


                        </div>

                        <Typography variant="h6" fontWeight={"bold"}>Devloped by <a style={{ color: "#f5f5f5" }} href="https://github.com/K-logeshwaran/">Logeshwaran K</a></Typography>
                    </Grid>
                </Box>

            </Container>
        </Box>
    );
};

export default Footer;

