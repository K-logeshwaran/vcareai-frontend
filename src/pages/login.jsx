import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { toast, ToastContainer } from "react-toastify";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

const defaultTheme = createTheme();




const requestURL = `${import.meta.env.VITE_BASE_URL}/login`;
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(requestURL + '/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                //setIsLoading(false)
                const token = await response.text();
                // Authentication successful, handle the success (e.g., store the token in local storage)
                console.log('Login successful');
                sessionStorage.setItem("loginToken", token)
                console.log('Token:', token);
                const optGeneratorRes = await fetch(requestURL + "/generateotp", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',

                    },
                    body: JSON.stringify({ auth: token })

                });
                if (optGeneratorRes.ok) {
                    setIsLoading(false)

                    let msg = await optGeneratorRes.json()
                    console.log(msg);
                    toast.success(msg.message)
                    navigate("/validateOtp")
                } else {
                    let msg = await optGeneratorRes.json()
                    console.log(msg);
                    toast.error(msg.error)
                    // setError 
                    // alert(msg.error)
                }

            } else {
                setIsLoading(false)
                // Authentication failed, handle the error
                const data = await response.text();
                toast.error(data || 'Login failed')
                //setError(data || 'Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error("An unexpected error occurred")
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={(eve) => {
                        eve.preventDefault();
                        handleLogin()
                    }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            //value={email}
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
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
                                isLoading === true ? <span class="loader"></span> : "Sign In"
                            }
                        </Button>
                        <Grid container>
                            {/* <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid> */}
                            <Grid item>
                                <Link href="" variant="body2" onClick={()=>navigate("/register")} >
                                    {"Don't have an account?   Register"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>

            <ToastContainer />
        </ThemeProvider>
    );
};

export default Login;
