import { Box, Card, Typography, CardMedia, Paper } from "@mui/material";
import Img from "../../../assets/images/small-business.jpg"
import FooterForm from "../../../components/footer-form";


function Fractional() {

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
                        <Typography sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase" }} variant="h5">Fractional CFO</Typography>
                    </Box>
                </Box>

            </Card>
            <Paper elevation={5} component={"section"} sx={{ padding: "1.5rem", marginTop: '1rem' }}>
                <Box display={"flex"} component={"article"} flexDirection={'column'} gap={3}>
                    <Typography component={"h1"} color={"#4281a7"} variant="h4">Introduction</Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5} paddingLeft={'1rem'}>
                        <Typography component={'p'} variant="body1">
                            Part time CFO Services is a practical choice when you need the service of a CFO but don’t wish to spend a hefty amount on the same. Hiring a part time CFO depends upon where your company is in the growth stage.
                        </Typography>
                        <Typography component={'p'} variant="body1">
                            If your company is in the initial or in the mid-stages of growth, hiring a part time CFO is feasible. Companies at the peak of the growth stage need a full-time CFO to handle their daily financial activities.
                        </Typography>
                        <Typography component={'p'} variant="body1">
                            Hiring the right person at the right time is very crucial to saving your money and time. A part time CFO is affordable and fulfills the purpose of a full-time CFO at the same time. If you’re someone that doesn’t need a CFO to look into your daily activities then hiring a part time CFO is the best choice.
                        </Typography>
                    </Box>

                    <Typography component={'h4'} color={"#4281a7"} variant="h5">Reasons to hire a part time CFO Services</Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>

                        <Typography component={'h4'} variant="h6">Focus on the key elements</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            A part time CFO focuses only on the problems that are causing the most damage to your business. This way, you can reduce your expenses and also get help from the experts to tackle situations that bother you the most.
                        </Typography>

                        <Typography component={'h4'} variant="h6">No need for a top-level expert every day   </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            If you’re in the initial growth stages then you might not feel the need for a top-level expert to manage your daily activities. In this case, you can still get the advice of an expert whenever you need by hiring a part time CFO.
                        </Typography>

                        <Typography component={'h4'} variant="h6"> Improve your profit margins</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            If you’re not happy with your current profitability and need an expert to improve your margins, hiring a part time CFO is the solution. An increasing profitability is what you need to keep your business growing, isn’t it?
                        </Typography>

                        <Typography component={'h4'} variant="h6">Need for a financial advisor</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            At times, a business goes through different business cycles and managing your finances during these changes can get difficult. All you need is an expert financial advisor to be there for you when you are experiencing changes in your business cycle.
                        </Typography>

                        <Typography component={'h4'} variant="h6"> Need a financial strategy</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Often businesses fall back in the competition because they don’t have a strong financial strategy. Hiring part time CFO services can benefit you in getting a long-term financial strategy. With this, you will sort out the strategy for a long period without the need for a full-time CFO.
                        </Typography>

                        <Typography component={'h4'} variant="h6"> Non-core activities distract you</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            If you find yourself spending more time on the non-core activities like finance and administration, a part time CFO will help you. Hiring a part time CFO allows you to focus more on your business rather than the non-core activities. They also ensure that they take care of the problems and tackle them effectively.
                        </Typography>

                    </Box>

                    <Typography component={'h4'} color={"#4281a7"} variant="h5">When to hire part time CFO Services?</Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={'p'} variant="body1" paddingLeft={'2rem'}>
                            When your debt increases due to poor cash management
                        </Typography>

                        <Typography component={'p'} variant="body1" paddingLeft={'2rem'}>
                            You have taken up a new project
                        </Typography>

                        <Typography component={'p'} variant="body1" paddingLeft={'2rem'}>
                            You need to reassure your fiscal responsibility
                        </Typography>

                        <Typography component={'p'} variant="body1" paddingLeft={'2rem'}>
                            When you need help in filing returns and paying the tax liability
                        </Typography>
                        <Typography component={'p'} variant="body1" paddingLeft={'2rem'}>
                            Your company is going through a Merger & Acquisition
                        </Typography>
                        <Typography component={'p'} variant="body1" paddingLeft={'2rem'}>
                            You need strategic guidance
                        </Typography>
                    </Box>
                    <Typography component={'h4'} color={"#4281a7"} variant="h5"> Why choose us?</Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                            CFO Services is based in Chennai having served clients from all over India. We provide you with our team of experts that have the exact knowledge and experience you require. We focus more on the start-ups and small-medium enterprises, giving them the extra attention they need to grow.
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                            Our part time CFO services are flexible and customizable giving you accurate and reliable results. The best part is, you need not worry about spending a lot of money over a part time CFO.
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                            Take the advantage of our best part time CFO Services in India. Fill out the form below and contact us right away!
                        </Typography>
                        

                    </Box>
                </Box>
                <FooterForm/>
            </Paper>
            
        </Box>
        );
}

export default Fractional;