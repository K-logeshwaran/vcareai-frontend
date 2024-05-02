import { Box, Card, Typography, CardMedia, Paper } from "@mui/material";
import vcfoImg from "../assets/images/vcfo.jpg"
import FooterForm from "../components/footer-form";
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';


import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phno, setPhno] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [position, setPosition] = useState(false);

    async function sendAppointmentRequest() {


        try {
            setIsLoading(true)
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/mail/submit-application`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, phno, message,position })
            });

            if (response.ok) {
                setIsLoading(false)
                const data = await response.json();
                toast.success("Message Sent! ✅")
                console.log(data); // Should print { error: "email was sent" }
            } else {
                setIsLoading(false)
                toast.error("Error Sending Message :( ❌")
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            }
        } catch (error) {
            setIsLoading(false)
            toast.error("Error Sending Message :( ❌")
            console.error('Error:', error.message);
        }
    }
    return (
        <Box component={'main'}>
            <Card sx={{ marginTop: 2 }}>
                <Box sx={{ position: 'relative' }}>
                    <CardMedia
                        component="img"
                        height="200"
                        //image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                        image={vcfoImg}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            bgcolor: 'rgba(0, 0, 0, 0.54)',
                            color: 'white',
                            height: "100%",


                        }}
                    >
                        <Typography sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase" }} variant="h5">Contact and career</Typography>
                    </Box>
                </Box>

            </Card>

            <Paper elevation={5} component={"section"} sx={{ padding: "1.5rem", marginTop: '1rem' }}>
                <Box display={"flex"} component={"article"} flexDirection={'column'} gap={3}>
                    <Typography variant="h4" component={'h1'}>Follow your dreams and passion…</Typography>

                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }}>  Are you passionate about learning & growth?</Typography>

                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }}>  At CFO Services, you have the opportunity to create a bright future by working with talented professionals and thought leaders.</Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }}>  Sharpen your skills by being a part of the regular seminars or be motivated with the Employee Recognition and Award programs held periodically.</Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }}>   Discover the opportunity to make a career out of your passion here.”</Typography>




                    <Paper elevation={3} variant='outlined' sx={{ marginTop: '1rem' }}>
                        <Box component="form" noValidate onSubmit={(e) => {
                            e.preventDefault()
                            console.log(name, phno, email, message);
                            sendAppointmentRequest();

                        }} sx={{ mt: 3 }} width={"90%"} margin={"auto"}>
                            <Grid component={"form"} container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography component={'h4'} textTransform={"capitalize"} color={"#4281a7"} textAlign={'center'} variant="h5" fontWeight={'bold'}>          Share your details below and our team will get back to you!</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="Name"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="Name"
                                        onChange={(e) => setName(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="phone"
                                        label="Phone"
                                        name="phone"
                                        onChange={(e) => setPhno(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="position"
                                        label="Position Applying For"
                                        name="position"
                                        
                                        onChange={(e) => setPosition(e.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="otherDetails"
                                        label="Other Details"
                                        type="text"
                                        id="otherDetails"
                                        multiline
                                        onChange={(e) => setMessage(e.target.value)}

                                    />
                                </Grid>

                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}

                            >
                                {
                                    isLoading === true ? <span class="loader"></span> : "Apply Now"
                                }

                            </Button>

                        </Box>
                        <ToastContainer />
                    </Paper>









                </Box>
            </Paper>








          
        </Box>
    );
}

export default Contact;