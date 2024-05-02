import { useLocation, useNavigate, useParams } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Container, CssBaseline, Box, Typography, TextField, Button, Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function AddEmployee() {
    const [fullName, setFullName] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {

        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/admin/addemployees`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fullName,
                    employeeId,
                    email
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Reset form fields upon successful submission
            setFullName('');
            setEmployeeId('');
            setEmail('');

            toast.success('Employee details submitted successfully!');
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred while submitting employee details');
        }
    };
    return (
        <Container component="main" maxWidth="lg" >
            <CssBaseline />
            
            <Box
            paddingBottom={"5rem"}
                sx={{
                    
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'

                }}

            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Add Employee
                </Typography>
                <Box component="form" noValidate sx={{
                    display: 'grid',
                    gap: 1,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    width: "90%"
                }} onSubmit={(eve) => {
                    eve.preventDefault();
                }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="fullname"
                        label="Full Name"
                        value={fullName}
                        name="fullname"
                        autoFocus
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="empId"
                        label="Employee ID"
                        value={employeeId}
                        id="empId"
                        onChange={(e) => setEmployeeId(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        label="Email"
                        type="email"
                        value={email}
                        name="emailId"
                        id='emailId'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />



                </Box>
                <Button
                    type="submit"
                    onClick={handleSubmit}
                    variant="contained"

                    sx={{ mt: 3, mb: 2, width: "50%" }}
                >

                    {
                        isLoading === true ? <span class="loader"></span> : "Add"
                    }
                </Button>
            </Box>


            <ToastContainer />

        </Container >
    );
}

export default AddEmployee;