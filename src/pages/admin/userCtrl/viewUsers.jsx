import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button, Card, CardMedia, CardContent, CardActionArea, CardActions, CssBaseline, Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const UsersDisplay = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user/users`);
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching users:', error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (users.length === 0) {
        return <div>No users found.</div>;
    }

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
            <Typography textTransform={"capitalize"} variant='h4' component={'h1'} textAlign={'center'}>view all Users</Typography>
            <Box padding={"2rem 0"} display={"flex"} justifyContent={"center"} alignContent={"center"} >
                <Grid
                    justifyContent={"center"} alignItems={"center"} maxWidth={"90%"} container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >

                    {users.map((user) => (
                        <Grid item xs={12} md={4} lg={4}>
                            <UCard
                                name={user.fullName}
                                email={user.email}
                                status={user.status}
                                isAss={user.assigned ? 'Yes' : 'No'}
                            />
                        </Grid>

                    ))}

                </Grid>
            </Box>


        </Grid>
    );
};



function UCard({ name, email, status, isAss }) {
    const navigate = useNavigate();
    return (<>
        <Card sx={{ maxWidth: 345 }} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn-icons-png.flaticon.com/512/1869/1869679.png"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={8} sx={{ marginTop: 1 }}>
                            <Typography component={"p"} variant="subtitle1" >Email : {email}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography component={"p"} variant="subtitle1" >Status : {status}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography component={"p"} variant="subtitle1" >Assigned : {isAss}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={() => navigate(`${email}`)} size="medium" color="primary" variant="contained">
                    View Files
                </Button>
            </CardActions>
        </Card>
    </>);
}


export default UsersDisplay;
