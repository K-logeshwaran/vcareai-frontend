import { Grid, Typography, Button, Card, CardMedia, CardContent, CardActionArea, CardActions } from "@mui/material";
import {  useNavigate } from "react-router-dom";

function EmpCard({ name, id, jobsCompleted, empObjId }) {
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
                    <Typography onClick={() => navigate("employee/jobs/" + id, { state: { empObjId  } })} gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={8} sx={{ marginTop: 1 }}>
                            <Typography component={"p"} variant="subtitle1" >EMP_ID : {id}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography component={"p"} variant="subtitle1" >Jobs Pending {jobsCompleted}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography component={"p"} variant="subtitle1" >Jobs Pending {jobsCompleted}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={() => navigate("employee/" + id, { state: { embObjId: empObjId } })} size="medium" color="primary" variant="contained">
                    Assign Task
                </Button>
            </CardActions>
        </Card>
    </>);
}

export default EmpCard;

{/* <Container component={"div"} className="emp-card" maxWidth={"lg"}>
<Typography component={"p"} variant="h6" >Employee name</Typography>
<Container component={"div"} className="emp-card-grp">
    <Typography component={"p"} variant="h6" >No</Typography>
    <Typography component={"p"} variant="h6" >jobs completed 3</Typography>

</Container>
<Grid container spacing={2}>
    <Grid item xs={8}>
        <Item>xs=8</Item>
    </Grid>
    <Grid item xs={4}>
        <Item>xs=4</Item>
    </Grid>
    <Grid item xs={4}>
        <Item>xs=4</Item>
    </Grid>
    <Grid item xs={8}>
        <Item>xs=8</Item>
    </Grid>
</Grid>
</Container>

*/}

// <Grid container maxWidth={"md"} spacing={2} sx={{ m: .2, backgroundColor: "rgba(0,0,0,.2)", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", paddingBottom: 2 }}>
// <Grid item xs={8}>
//     <Link to={"employee/jobs/" + id} state={{ empObjId }}>
//         <Typography component={"p"} variant="h6" >{name}</Typography>
//     </Link>
// </Grid>
// {/* <Grid item xs={12}>
//     <Typography component={"p"} variant="h6" >{name}</Typography>
// </Grid> */}
// <Grid item xs={4}>
//     <Button variant="contained" onClick={() => navigate("employee/" + id, { state: { embObjId: empObjId } })} >Assign Task</Button>

// </Grid>
// <Grid item xs={4}>
//     <Typography component={"p"} variant="h6" >jobs completed {jobsCompleted}</Typography>
// </Grid>
// <Grid item xs={4}>
//     <Typography component={"p"} variant="h6" >jobs pending {jobsCompleted}</Typography>
// </Grid>
// <Grid item xs={4}>
//     <Typography component={"p"} variant="h6" >{id}</Typography>
// </Grid>
// </Grid>