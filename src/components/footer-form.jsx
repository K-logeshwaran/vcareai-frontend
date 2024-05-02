

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Paper, Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';


// Call the function to send the appointment request



function FooterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phno, setPhno] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    async function sendAppointmentRequest() {


        try {
            setIsLoading(true)
            const response = await fetch('http://localhost:3134/mail/appointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, pho, message })
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
        <Paper elevation={3} variant='outlined' sx={{ marginTop: '1rem' }}>
            <Box component="form" noValidate onSubmit={(e) => {
                e.preventDefault()
                sendAppointmentRequest();
                console.log(name, phno, email, message);

            }} sx={{ mt: 3 }} width={"90%"} margin={"auto"}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography padding={'1rem 0'} textAlign={'center'} variant='h4' component={'h3'} >We'd love to meet you!</Typography>
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
                            id="phone"
                            label="Phone"
                            name="phone"
                            onChange={(e) => setPhno(e.target.value)}

                        />
                    </Grid>
                    <Grid item xs={12}>
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
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            name="message"
                            label="message"
                            type="message"
                            id="message"
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
                        isLoading === true ? <span class="loader"></span> : "Submit"
                    }

                </Button>

            </Box>
            <ToastContainer />
        </Paper>


    );
}

export default FooterForm;



{/* <FormControl fullWidth >
<Grid container spacing={5} justifyContent={"center"} alignItems={"center"}>
    <Grid item xs={12} >
        <Typography paddingTop={'1rem'} variant='h4' component={'h3'} textAlign={'center'}>heading</Typography>
    </Grid>
    <Grid item xs={4}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', width: "90%", margin: "auto" }} >
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField  id="input-with-sx" label="With sx" variant="standard" />
        </Box>
    </Grid>
    <Grid item xs={4}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', width: "90%", margin: "auto" }} >
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="With sx" variant="standard" />
        </Box>
    </Grid>
    <Grid item xs={4}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', width: "90%", margin: "auto" }} >
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="With sx" variant="standard" />
        </Box>
    </Grid>
    <Grid item xs={12}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', width: "90%", margin: "auto" }} >
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="With sx" variant="standard" />
        </Box>
    </Grid>
    <Grid item xs={12}>
        <Box sx={{ display: 'flex', width: "90%", margin: "auto" }} >

            <Button variant='contained' fullWidth>Click</Button>
        </Box>
    </Grid>
</Grid>
<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
    <TextField id="input-with-sx" label="With sx" variant="standard" />
</Box>
<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
    <TextField id="input-with-sx" label="With sx" variant="standard" />
</Box>
<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
    <TextField id="input-with-sx" label="With sx" variant="standard" />
</Box>
</FormControl> */}