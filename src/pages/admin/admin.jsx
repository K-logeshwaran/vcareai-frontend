import * as React from 'react';
import { useState } from 'react';



import CssBaseline from '@mui/material/CssBaseline';

import { toast, ToastContainer } from "react-toastify";



import "react-toastify/dist/ReactToastify.css";
import EmpCard from '../../components/employeeCard';
import { Box, Grid ,Typography} from '@mui/material';



function AdminPg() {
    const [placeholderData, setPlaceholderData] = useState([]);

    React.useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/admin/employees`)
            .then(response => {
                if (!response.ok) {
                    toast.error('Network response was not ok')
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Employees:', data);
                setPlaceholderData(data)
                // Handle the retrieved data as needed
            })
            .catch(error => {
                toast.error("something went wrong");
                console.error('Error:', error);
            });
    }, [])

    // const placeholderData = [
    //     {
    //         fullName: "John Doe",
    //         employeeId: "EMP001",
    //         email: "john.doe@example.com",
    //         jobs: [{ userId: "user001" }],
    //         empObjId: "5f984c207d206c54d89b1aeb"
    //     },
    //     {
    //         fullName: "Alice Smith",
    //         employeeId: "EMP002",
    //         email: "alice.smith@example.com",
    //         jobs: [{ userId: "user002" }],
    //         empObjId: "5f984c207d206c54d89b1aec"
    //     },
    //     {
    //         fullName: "Bob Johnson",
    //         employeeId: "EMP003",
    //         email: "bob.johnson@example.com",
    //         jobs: [{ userId: "user003" }],
    //         empObjId: "5f984c207d206c54d89b1aed"
    //     },
    //     {
    //         fullName: "Emily Brown",
    //         employeeId: "EMP004",
    //         email: "emily.brown@example.com",
    //         jobs: [{ userId: "user004" }],
    //         empObjId: "5f984c207d206c54d89b1aee"
    //     },
    //     {
    //         fullName: "Michael Wilson",
    //         employeeId: "EMP005",
    //         email: "michael.wilson@example.com",
    //         jobs: [{ userId: "user005" }],
    //         empObjId: "5f984c207d206c54d89b1aef"
    //     },
    //     // Add empObjId to other objects as well...
    // ];



    return (
        <Grid
            container
            spacing={0}
            direction="column"
            padding={"1rem 0"}
            justifyContent="center"
            sx={{ minHeight: '100vh' }}
        >
            <CssBaseline />
            <Typography textTransform={"capitalize"} variant='h4'component={'h1'} textAlign={'center'}>view all Employee</Typography>
            
            <Box padding={"2rem 0"} display={"flex"} justifyContent={"center"} alignContent={"center"} >
                <Grid
                    justifyContent={"center"} alignItems={"center"} maxWidth={"90%"} container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                // sx={{
                //     display: 'grid',
                //     placeItems: "center",
                //     gap: 3,
                //     gridTemplateColumns: 'repeat(2, 1fr)',
                // }}
                >


                    {placeholderData.length == 0 ? <h1>Loading</h1> : placeholderData.map((val, indx) => {
                        return (
                            <Grid item xs={12} md={4} lg={4}>
                                <EmpCard
                                    id={val.employeeId}
                                    name={val.fullName}
                                    jobsCompleted={indx}
                                    key={indx}
                                    empObjId={val._id}
                                />
                            </Grid>)
                    })}
                </Grid>

                <ToastContainer />
            </Box>

        </Grid >

    );
}

export default AdminPg;