import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { toast, ToastContainer } from "react-toastify";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "react-toastify/dist/ReactToastify.css";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                yourdevloki.com
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const reqUrl = `${import.meta.env.VITE_BASE_URL}/login`
const ValidateOTP = () => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);

    const handleValidateOTP = async () => {
        console.log("auth", sessionStorage.getItem("loginToken"));
        setIsLoading(true)
        try {
            const response = await fetch(reqUrl + '/validateOtp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({ clientSideOtp: otp, auth: sessionStorage.getItem("loginToken") }),
            });

            if (response.ok) {
                const { token } = await response.json();
                // OTP validation successful, handle the success (e.g., store the token in local storage)
                toast.success('OTP validation successful');
                console.log('Token:', token);
                localStorage.setItem("authToken", token)
                setIsLoading(false);
                navigate("/")
            } else {
                // OTP validation failed, handle the error
                const data = await response.text();
                setIsLoading(false);
                toast.error(data || 'OTP validation failed');
            }
        } catch (error) {
            setIsLoading(false);
            console.error('Error during OTP validation:', error);
            toast.error('An unexpected error occurred');
        }
    };

    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Typography component="h1" variant="h5" sx={{ mt: 5 }}>
                    Enter OTP
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={(eve) => {
                    eve.preventDefault();
                    handleValidateOTP()

                }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="otp"
                        label="OTP"
                        name="otp"
                        //value={email}
                        autoFocus
                        onChange={(e) => setOtp(e.target.value)}

                    />

                    {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"

                        sx={{ mt: 3, mb: 2 }}
                    >

                        {
                            isLoading === true ? <span class="loader"></span> : "Validate OTP"
                        }

                    </Button>

                </Box>
             
                <ToastContainer />
            </Container>


        </>

    );
};

export default ValidateOTP;


{/* <div>
            <h2>Validate OTP</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <form>
                <div>
                    <label>Enter OTP:</label>
                    <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
                </div>
                <button type="button" onClick={handleValidateOTP}>
                    Validate OTP
                </button>
            </form>
        </div> */}