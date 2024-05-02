import { useLocation, useNavigate, useParams } from 'react-router-dom'
import UserCard from '../../components/userCard';
import { Grid, Box, CssBaseline } from '@mui/material';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function AdminEmpView() {
    let { state } = useLocation();
    console.log(state);
    const [data, setDatata] = useState(null);
    const [noData, setNoData] = useState(false);

    useEffect(() => {
        const fetchUsersStat = async () => {
            try {
                const empId = state.empObjId; // Set your empId here
                console.log("Going...", empId);
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/admin/usersStat`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ empId })
                });

                if (response.ok) {
                    const usersStat = await response.json();
                    console.log(usersStat);
                    setDatata(usersStat);
                }
                if (response.status == 404) {
                    const msg = await response.json();
                    console.log(msg);
                    setNoData(true);
                    toast.info(msg.msg);
                }


                // Process usersStat further as needed
            } catch (error) {
                console.error('Error fetching users stat:', error.message);
            }
        };

        fetchUsersStat();

    }, [])
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            padding={"1rem 0"}
            justifyContent="center"
            sx={{ minHeight: '100vh' }}
        >
                <h1> Ind Emp task</h1>
            <CssBaseline />
            <Box
                sx={{
                    display: 'grid',
                    placeItems: "center",
                    gap: 3,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                }}
            >

                {
                    noData == true ? <h2>NO task assigned For the Employee</h2> :

                        data === null ? <h1>Loading..</h1> :
                            data.map(v => <UserCard
                                name={v.fullName}
                                status={v.status}
                                email={v.email}
                                handler={null}
                                nobutton={true}
                            />)
                }
            </Box>
            <ToastContainer />
        </Grid> 
    );
}

export default AdminEmpView;