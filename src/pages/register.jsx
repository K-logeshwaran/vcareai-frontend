// import { Container } from '@mui/material';
import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
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
import { useNavigate } from 'react-router-dom';



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

const requestURL = `${import.meta.env.VITE_BASE_URL}/user`;
const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const handleRegister = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(requestURL + '/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password, recoveryEmail }),
      });

      if (response.ok) {
        setIsLoading(false)
        // Registration successful, handle the success (e.g., show a success message)
        console.log('Registration successful');

        navigate("/login")
      } else {
        setIsLoading(false)
        // Registration failed, handle the error
        const data = await response.json();
        console.log("dd", data);
        toast.error(data.error || 'Registration failed');
      }
    } catch (error) {
      setIsLoading(false)
      console.error('Error during registration:', error);
      toast.error('An unexpected error occurred');
    }
  };

  return (
    <>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
            Register
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={(eve) => {
            eve.preventDefault();
            handleRegister()
          }}>
            <TextField
              autoComplete="given-name"
              name="name"
              required
              fullWidth
              id="name"
              label="Name"
              autoFocus
              onChange={(e) => { setFullName(e.target.value) }}
            />
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="re-email"
              label="Recovery Email Address"
              name="re-email"
              autoComplete="email"
              //value={email}
              autoFocus
              onChange={(e) => setRecoveryEmail(e.target.value)}
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
                isLoading === true ? <span class="loader"></span> : "Register"
              }
            </Button>
            <Grid container>
              {/* <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid> */}
              <Grid item>
                <Link href="" variant="body2" onClick={() => navigate("/login")} >
                  {"Already having an account?  Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>

      <ToastContainer />

    </>
  );
};
export default Register;



// <div className="wrapper">

// <div className='forms-outer'>
//   <h2>Register</h2>
//   {error && <div style={{ color: 'red' }}>{error}</div>}
//   <form onSubmit={handleRegister} className='forms'>
//     <div>
//       <label>Full Name:</label>
//       <input required type="text" value={fullName} onChange={(e) => { setError(""); setFullName(e.target.value) }} />
//     </div>
//     <div>
//       <label>Email:</label>
//       <input required type="text" value={email} onChange={(e) => { setError(""); setEmail(e.target.value) }} />
//     </div>
//     <div>
//       <label>Password:</label>
//       <input required type="password" value={password} onChange={(e) => { setError(""); setPassword(e.target.value) }} />
//     </div>
//     <div>
//       <label>Recovery Email:</label>
//       <input required
//         type="text"
//         value={recoveryEmail}
//         onChange={(e) => { setError(""); setRecoveryEmail(e.target.value) }}
//       />
//     </div>
//     <button type="submit" >
//       Register
//       {
//         isLoading === true ? <span class="loader"></span> : "Upload PDF Files"
//       }

//     </button>
//     <p>already having an account ? <Link to={"/login"}>login</Link> </p>
//   </form>
// </div>
// </div>