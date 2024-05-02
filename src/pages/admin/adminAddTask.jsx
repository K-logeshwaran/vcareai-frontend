import { useLocation, useNavigate, useParams } from 'react-router-dom'
import UserCard from '../../components/userCard';
import { Container, Stack, CssBaseline } from '@mui/material';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function AdminAddTask() {
    const [users, setUsers] = useState(null);
    const [count, setCount] = useState(0);
    let { state } = useLocation()
    console.log(state);
    useEffect(() => {
        (async () => {
            try {

                const res = await fetch(`${import.meta.env.VITE_BASE_URL}/admin`);
                const data = await res.json()
                console.log(data);
                setUsers(data);

            } catch (err) {
                console.log(err);
                toast.error("Something went wrong")
            }
        })()
    }, [count]);
    const p = useParams();
    //const data = [{ "id": "65d220d127ae697fcb3589a9", "email": "animedev003@gmail.com", "fullName": "Loki" }, { "id": "65d22b2c27ae697fcb3589b3", "email": "klogeshwaran003@gmail.com", "fullName": "klogeshwaran003" }, { "id": "65d22b6327ae697fcb3589b6", "email": "loki@loki.com", "fullName": "dsfsfsdf" }];
    console.log(p);


    async function updateUser(userId, empObjId) {
        console.log("lkffffff->", userId, empObjId);
        try {
            const response = await fetch('http://localhost:3134/admin/assign', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId: userId, empObjId: empObjId })
            });

            if (response.ok) {
                const data = await response.text();
                console.log('User Updated Successfully:', data);
                toast.success("Task Assigned");
                setCount((pre) => pre + 1);
            }



        } catch (error) {

            console.error(error);
            console.error('There was a problem with your fetch operation:',);
        }
    }


    return (
        <Container component="main" maxWidth="xl">
            <CssBaseline />
            <h1> Emp assign task</h1>
            <Stack sx={{ marginTop: 3 }} alignItems={"center"} spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap">
                {
                    users === null ? <h1>Loading..</h1> :
                        users?.length === 0 ? <h1>No data</h1> :
                            users.map(v => <UserCard name={v.fullName} id={v.id} email={v.email} handler={() => updateUser(v.id, state.embObjId)} nobutton={false} />)
                }
            </Stack>
            <ToastContainer />
        </Container>
    );
}

export default AdminAddTask;