import * as React from 'react';
import { Box, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';

function Webiars() {
    return (
        <div style={{paddingTop:"2rem"}} >
            <Typography variant='h4'component={'h1'} textAlign={'center'}>Our Latest Webniars!</Typography>
            <Box padding={"2rem 0"} display={"flex"} justifyContent={"center"} alignContent={"center"} >

                <Grid justifyContent={"center"} alignItems={"center"} maxWidth={"90%"} container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={4} lg={4}>
                        <WebiarsCard
                            title={"hiiii"}
                            cover_image={'https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1472289065668-ce650ac443d2%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Dcover%252Bimage%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8Y292ZXIlMjBpbWFnZXxlbnwwfHx8fDE3MTI3MDY2ODV8MA%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60'}
                            caption={"dev doood"}
                            created_at={"ddddd"}
                            by={"dpppp"}
                            id={"dddddd"}
                        />
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <WebiarsCard
                            title={"hiiii"}
                            cover_image={'https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1472289065668-ce650ac443d2%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Dcover%252Bimage%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8Y292ZXIlMjBpbWFnZXxlbnwwfHx8fDE3MTI3MDY2ODV8MA%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60'}
                            caption={"dev doood"}
                            created_at={"ddddd"}
                            by={"dpppp"}
                            id={"dddddd"}
                        />
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <WebiarsCard
                            title={"hiiii"}
                            cover_image={'https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1472289065668-ce650ac443d2%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Dcover%252Bimage%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8Y292ZXIlMjBpbWFnZXxlbnwwfHx8fDE3MTI3MDY2ODV8MA%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60'}
                            caption={"dev doood"}
                            created_at={"ddddd"}
                            by={"dpppp"}
                            id={"dddddd"}
                        />
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <WebiarsCard
                            title={"hiiii"}
                            cover_image={'https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1472289065668-ce650ac443d2%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Dcover%252Bimage%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8Y292ZXIlMjBpbWFnZXxlbnwwfHx8fDE3MTI3MDY2ODV8MA%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60'}
                            caption={"dev doood"}
                            created_at={"ddddd"}
                            by={"dpppp"}
                            id={"dddddd"}
                        />
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <WebiarsCard
                            title={"hiiii"}
                            cover_image={'https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1472289065668-ce650ac443d2%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Dcover%252Bimage%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8Y292ZXIlMjBpbWFnZXxlbnwwfHx8fDE3MTI3MDY2ODV8MA%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60'}
                            caption={"dev doood"}
                            created_at={"ddddd"}
                            by={"dpppp"}
                            id={"dddddd"}
                        />
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <WebiarsCard
                            title={"hiiii"}
                            cover_image={'https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1472289065668-ce650ac443d2%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Dcover%252Bimage%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8Y292ZXIlMjBpbWFnZXxlbnwwfHx8fDE3MTI3MDY2ODV8MA%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60'}
                            caption={"dev doood"}
                            created_at={"ddddd"}
                            by={"dpppp"}
                            id={"dddddd"}
                        />
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <WebiarsCard
                            title={"hiiii"}
                            cover_image={'https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1472289065668-ce650ac443d2%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Dcover%252Bimage%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8Y292ZXIlMjBpbWFnZXxlbnwwfHx8fDE3MTI3MDY2ODV8MA%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60'}
                            caption={"dev doood"}
                            created_at={"ddddd"}
                            by={"dpppp"}
                            id={"dddddd"}
                        />
                    </Grid>



                </Grid>
            </Box>
        </div>
    );
}

export default Webiars;




function WebiarsCard({ title, cover_image, caption, created_at, by, id }) {
    const navigate = useNavigate();
    return (
        <Card >
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={cover_image || "https://mui.com/static/images/cards/contemplative-reptile.jpg"}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {
                        caption || `Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica`
                    }

                </Typography>
                <Box marginTop={'.5rem'} display={"flex"} justifyContent={'space-between'}>
                    <Typography variant="subtitle2" color="text.secondary">
                        {by}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                        {created_at}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions
                disableSpacing
                sx={{
                    alignSelf: "stretch",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                    // 👇 Edit padding to further adjust position
                    pr: 5,
                }}
            >
                <Button onClick={() => navigate("/blog/" + id)} size="small">Read More <KeyboardArrowRightIcon /> </Button>

            </CardActions>
        </Card>
    );
}