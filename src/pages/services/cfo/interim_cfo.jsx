import { Box, Card, Typography, CardMedia, Paper } from "@mui/material";
import Img from "../../../assets/images/interm-cfowebp.webp"
import FooterForm from "../../../components/footer-form";

function InterimCfo() {
    return (
        <Box component={"main"}>
            <Card sx={{ marginTop: 2 }}>
                <Box sx={{ position: 'relative' }}>
                    <CardMedia
                        component="img"
                        height="200"
                        //image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                        image={Img}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            bgcolor: 'rgba(0, 0, 0, 0.54)',
                            color: 'white',
                            height: "100%",


                        }}
                    >
                        <Typography sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase" }} variant="h5">Interim CFO</Typography>
                    </Box>
                </Box>

            </Card>
            <Paper elevation={5} component={"section"} sx={{ padding: "1.5rem", marginTop: '1rem' }}>
                <Box display={"flex"} component={"article"} flexDirection={'column'} gap={3}>
                    <Typography component={"h1"} color={"#4281a7"} variant="h4">Interim CFO Introduction</Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5} paddingLeft={'1rem'}>
                        <Typography component={'p'} variant="body1">
                            Our Interim CFO Services fill in the gap of your vacant CFO’s chair from the time of his absence until a new one is hired. With our highly qualified and experienced professionals onboard, you don’t have to worry about your finances. They will take over the steering and accelerate your financial position in the top gear.
                        </Typography>
                        <Typography component={'p'} variant="body1">
                            While your obligated CFO is out of the picture, save the effort and time of hiring a proficient CFO for your company. Hiring our interim CFO will save your resources and also get an expert onboard with no effort!
                        </Typography>
                        <Typography component={'p'} variant="body1">
                            Our flexible interim CFO will relieve you from the pressure encompassing you and provide you with the right financial vision. We bring you the right proportion of knowledge and experience that doesn’t ask for a fat paycheck like your CFO did.
                        </Typography>
                    </Box>
                    <Typography component={'h4'} color={"#4281a7"} variant="h5">Reasons to hire an Interim CFO</Typography>

                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={'h4'} variant="h6">Interim CFO is flexible</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">Flexibility is the main advantage you gain by hiring an expert Interim CFO. Their flexibility is your freedom to get the work done whenever you need. And they know exactly how to deal with the ever-changing financial conditions. Get your work done at your said time and pay only for what you require.</Typography>

                        <Typography component={'h4'} variant="h6"> They are seasoned and know what to do</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">Interim CFOs come with the knowledge and experience required to get you past all your difficulties. Hiring an Interim CFO in the middle of your financial turmoil won’t bother them. They’re well-experienced to quickly adapt, analyze the conditions and work right away.</Typography>


                        <Typography component={'h4'} variant="h6">Their work is equivalent to a full-time CFO</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">Are you experiencing a financial turbulence and have no CFO on board? Hiring a new one seems like a tedious job. Instead, try hiring an Interim CFO to resume the pending work and also get the services of a full-time CFO!</Typography>



                        <Typography component={'h4'} variant="h6">No paying hefty paychecks for a CFO</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">Stuck on the thought of hiring an Interim CFO but worried about what price tag they may come with? Interim CFOs act as your full-time CFO but charge you substantially less. Thus, hiring their inexpensive services will help you improve your financial circumstances without burning a hole in your pocket.
                        </Typography>


                    </Box>

                    <Typography component={'h4'} color={"#4281a7"} variant="h5"> When to hire an Interim CFO?</Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                        Your business is running at a great pace and suddenly you are stuck because of the unexpected departure of your CFO. There’s no smartness in letting your business suffer due to the gap. Hiring a new CFO in a short time can be a challenging task. It’s difficult to find someone with the same competencies as that of your old CFO who was well-versed with your financial state.
                        Not having a CFO for even a short span of time can be harmful to your business. Interim CFO fills in the gap from the time of departure of your CFO till the start date of your new one.
                    </Typography>

                    <Typography component={'h4'} color={"#4281a7"} variant="h5">  When is the right time to hire an Interim CFO?</Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                            When your CFO has departed from your organization</li></Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                            Your company is going through a Merger & Acquisition procedure</li></Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                            You are restructuring your business and need financial assistance</li></Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                            Need an expert on an important upcoming project and to resolve any financial glitches.</li></Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"><li>Startups and rapidly growing business can benefit from Interim CFO.</li></Typography>
                    </Box>

                    <Typography component={'h4'} color={"#4281a7"} variant="h5"> Why choose us?</Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                            CFO Services is based in Chennai providing its services across India. We provide well-experienced Interim CFOs that work towards giving you all that you ask for. Our team of experts has the right blend of experience and knowledge that would reap you huge benefits.</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                            Your search for an Interim CFO ends right here!</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                            We at CFO Services bring you a bundle of services at your convenience and at an affordable price.</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                            We also offer a free audit for you to know your current position.</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">Fill out the form below and contact us right away to save yourself the time and effort of searching for a new CFO!</Typography>
                    </Box>
                </Box>
                <FooterForm/>
            </Paper>

        </Box>)
}

export default InterimCfo;