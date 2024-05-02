import { Box, Card, Typography, CardMedia, Paper } from "@mui/material";

import vcfoImg from "../../../assets/images/vcfo.jpg"
import FooterForm from "../../../components/footer-form";
function CompanyInformation() {

    return (
        <Box component={"main"}>
            <Card sx={{ marginTop: 2 }}>
                <Box sx={{ position: 'relative' }}>
                    <CardMedia
                        component="img"
                        height="200"
                        //image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                        image={vcfoImg}
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
                        <Typography sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase" }} variant="h5">            Company formation, LLP formation & Business Setup</Typography>
                    </Box>

                </Box>

            </Card>

            <Paper elevation={5} component={"section"} sx={{ padding: "1.5rem", marginTop: '1rem' }}>
                <Box display={"flex"} component={"article"} flexDirection={'column'} gap={3}>
                    <Typography component={"h1"} color={"#4281a7"} variant="h3">Introduction</Typography>
                    <Typography component={"p"} variant="subtitle1" >
                        Got a new business idea on your mind, and you don’t know where to start? We understand, starting a company is not an easy task. Any company formation procedure is intricate and you need expert assistance to help you bring your idea to reality. Weighing in all the advantages and disadvantages of each organization will help you make the best decisions for your business.
                    </Typography>
                    <Typography component={"p"} variant="subtitle1" >
                        Save yourselves from lengthy procedures. Our team of experts is here to help you evaluate every aspect of your idea and bring it to life. This evaluation and analyzation will ensure that you get a good start for your business. Also, we help you register your company in any corner of the world.
                    </Typography>

                    <Typography component={'h4'} color={"#4281a7"} variant="h5"> Reasons to hire an expert for Company formation, LLP formation & Business Setup
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={'h4'} variant="h6">No chance of committing mistakes
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            As you are not an expert, there is a high chance you may make blunders in the formation process. Whereas, if you hire an expert to perform the procedure of company formation or an LLP formation, it will help you avoid mistakes.
                        </Typography>
                        <Typography component={'h4'} variant="h6">Requirements of the law</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">

                            Some countries compulsorily need you to hire an expert for company formation. If you want to register your company in any corner of the world, hiring an expert is the best thing to do! They have a deep understanding of local laws.
                        </Typography>

                        <Typography component={'h4'} variant="h6">
                            Experts have better knowledge
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            That is the reason why we call them experts! They analyze each and every aspect involved in the formation procedure. Thus, ensuring you that there will be no contingencies arising in the near future.
                        </Typography>

                        <Typography component={'h4'} variant="h6">Freedom from a huge responsibility </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Handing out the responsibility of company formation or an LLP formation will relieve you from stress. Experts perform the procedure on your behalf. Your only responsibility is limited to giving out all the required documents to the experts!
                        </Typography>


                        <Typography component={'h4'} variant="h6">The assistance of an expert </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Having an expert’s assistance while setting up your business is very important. Our experts will guide you through all the intricate procedures. Thus, leaving no chances for committing any mistakes.
                        </Typography>


                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">Startups and rapidly growing business can benefit from Interim CFO.</Typography>
                    </Box>
                    <Typography component={'h4'} color={"#4281a7"} variant="h5"> When to hire an expert?
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            It is always recommended to hire an expert before starting with the company formation procedure. Many times, businessmen do not feel the need of hiring an expert. Thus, they end up making mistakes which takes a toll on their business. That is when they hire an expert to help them out.
                        </Typography>

                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            We recommend you to give your budding business the right direction with the help of an expert right from the start!
                        </Typography>
                    </Box>

                    <Typography component={'h4'} color={"#4281a7"} variant="h5">
                        Why choose us?
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            We at CFO Services provide you with the expert assistance and guidance through all the intricate steps in company formation. Our expert team has the exact knowledge and experience that would help your business get through all the complex procedures.
                        </Typography>

                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            With our expertise, you will not feel the stress of going through such a long and complex procedure. We help you understand all the options available to you and analyze them for you.
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            If you're looking for the best experts to help you out in company formation, LLP formation or for business setup, you’re in the right place!
                        </Typography>
                    </Box>
                </Box>
                <FooterForm/>
            </Paper>



           

        </Box>);
}

export default CompanyInformation;