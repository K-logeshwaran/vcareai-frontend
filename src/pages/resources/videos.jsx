import * as React from 'react';
import { Box, Grid } from "@mui/material";
import Typography from '@mui/material/Typography';


const OPTIONS = {
    YOUTUBE_VIDEO: "youtube-link",
    PODCAST: "podcast-link"
}


function Vids() {
    const [links, setLinks] = React.useState([])
    React.useEffect(() => {
        const fetchLinks = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/link/${OPTIONS.YOUTUBE_VIDEO}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setLinks(data);
            } catch (error) {
                setErrorMessage(error.message);
            }
        }
        fetchLinks();
    }, []);
    return (
        <div style={{ paddingTop: "2rem" }} >
            <Typography variant='h4' component={'h1'} textAlign={'center'}>Our Latest Uploads!</Typography>
            <Box padding={"2rem 0"} display={"flex"} justifyContent={"center"} alignContent={"center"} >

                <Grid justifyContent={"center"} alignItems={"center"} maxWidth={"90%"} container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {links.map((link) =>
                        <Grid item xs={12} md={6} lg={6}>
                            <iframe style={{ borderRadius: "12px" }} src={link.link} width="100%" height="315" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </Grid>
                    )}

                </Grid>
            </Box>
        </div>
    );
   
}

export default Vids;


/* return (
        <div style={{ paddingTop: "2rem" }} >
            <Typography variant='h4' component={'h1'} textAlign={'center'}>Our Latest Uploads!</Typography>
            <Box padding={"2rem 0"} display={"flex"} justifyContent={"center"} alignContent={"center"} >

                <Grid justifyContent={"center"} alignItems={"center"} maxWidth={"90%"} container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={6} lg={6}>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/wVYG1mu8Lg8?si=wqFyQAtqiIVzAm2v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/wVYG1mu8Lg8?si=wqFyQAtqiIVzAm2v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/wVYG1mu8Lg8?si=wqFyQAtqiIVzAm2v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/wVYG1mu8Lg8?si=wqFyQAtqiIVzAm2v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/TtyMofW7k0o?si=h-45ylDaN27_2Vv2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/TtyMofW7k0o?si=h-45ylDaN27_2Vv2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Grid>
                   
                </Grid>
            </Box>
        </div>
    );
 */