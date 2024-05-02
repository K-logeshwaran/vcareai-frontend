import { useNavigate } from "react-router-dom";
import { Grid, Typography, Button, Card, CardMedia, CardContent, CardActionArea, CardActions } from "@mui/material";
function UserCard({ name, status, email, handler, nobutton }) {


    return (
        <>
            <Card sx={{ maxWidth: 345 }} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="http://localhost:3000/static/media/maleProfile.657c4196488ead649e93.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={8} sx={{ marginTop: 1 }}>
                                <Typography component={"p"} variant="subtitle1" >{email} </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography component={"p"} variant="h6" >Status </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography component={"p"} variant="h6" >{status} </Typography>
                            </Grid>
                            {
                                nobutton === true ? "" : <Grid item xs={4}>
                                    <Button variant="contained" onClick={handler} >Assign</Button>

                                </Grid>
                            }

                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>

        </>
    );
}

export default UserCard;


// <Grid container maxWidth={"md"} spacing={2} sx={{ m: .2, backgroundColor: "rgba(0,0,0,.2)", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", paddingBottom: 2 }}>
// <Grid item xs={8}>
//     <Typography component={"p"} variant="h6" >{name}</Typography>
// </Grid>
// {/* <Grid item xs={12}>
// <Typography component={"p"} variant="h6" >{name}</Typography>
// </Grid> */}
// {
//     nobutton === true ? "" : <Grid item xs={4}>
//         <Button variant="contained" onClick={handler} >Assign</Button>

//     </Grid>
// }

// <Grid item xs={4}>
//     <Typography component={"p"} variant="h6" >{email}</Typography>
// </Grid>

// <Grid item xs={nobutton === true ? 12 : 4}>
//     <Typography component={"p"} variant="h6" >dfsfsdf{status}</Typography>
// </Grid>
// </Grid>