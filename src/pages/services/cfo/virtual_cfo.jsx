import { Box, Card, Typography, CardMedia, Paper } from "@mui/material";
import vcfoImg from "../../../assets/images/vcfo.jpg"
import FooterForm from "../../../components/footer-form";
function VcfoPg() {
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
                        <Typography sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase" }} variant="h5">Virtual CFO</Typography>
                    </Box>
                </Box>

            </Card>
            <Paper elevation={5} component={"section"} sx={{ padding: "1.5rem", marginTop: '1rem' }}>
                <Box display={"flex"} component={"article"} flexDirection={'column'} gap={3}>
                    <Typography component={"h1"} color={"#4281a7"} variant="h3">Introduction</Typography>
                    <Typography component={"p"} variant="subtitle1" >
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="h6">Virtual CFO Services </Typography>
                        is the best solution that provides the right financial advice in today’s ever-changing marketplace!  In such cases, choosing the right service partner like us will help your company sustain and gain an advantage over your competitors. Our expert team of professionals will provide you with the best advice for a wide range of issues.
                        CFO Services helps you save resources and streamline your business operations. Whether you want to outsource your entire accounting or just a part of the department, outsourced CFO services is a good idea.
                        This makes it easier for us to help you in the best way possible. We offer you guidance in constantly tracking your company’s growth and profits. With our virtual CFO Services, your financial services will continue to trend upwards giving you visible results!
                        Read more about Virtual CFO here.
                    </Typography>

                    <Typography component={'h6'} variant="h6"> Still don’t feel the need to hire a Virtual CFO?</Typography>

                    <Typography component={'h4'} color={"#4281a7"} variant="h4"> Reasons to hire a Virtual CFO Service</Typography>
                    <Typography component={'h4'} variant="h6">  We give you six solid reasons to hire a Virtual CFO Service</Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={'h4'} variant="h6">Virtual CFOs offer flexibility</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">A major advantage of hiring a virtual CFO is that it offers flexibility. Today, most CFO providers permit you to set the number of hours depending on your requirements. This means you only pay for what you need. Unlike, Part-time CFOs, virtual CFO can be tapped whenever you need.</Typography>

                        <Typography component={'h4'} variant="h6">They can adapt to your changing requirements</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">At some point in time, businesses grow and expand. As a result, they also need to evolve. With the flexibility of virtual CFO Services, you can adapt to the changing needs of your small, medium or large enterprise. Their financial aid will help you tweak your current requirements.</Typography>


                        <Typography component={'h4'} variant="h6">You work with a team, not just one individual</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">If you are considering hiring a full-time CFO, you make use of the knowledge of a single professional which is limited (in most cases). However, a virtual CFO comprises of a team of experienced professionals, each with their own expertise. This way you can reduce the number of work hours on your financial obligations. Thus, significantly reducing your time, completing your task and enhancing quality.</Typography>



                        <Typography component={'h4'} variant="h6">Focus on your core activities</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">Once you start outsourcing your financial paperwork to a virtual CFO, it becomes easier for you and your employees to focus on the core competencies of your business. This way, you can achieve your goals and get maximum results.</Typography>

                        <Typography component={'h4'} variant="h6">They provide vast knowledge and expertise</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1"> A good virtual CFO service provider consists of a team of knowledgeable and experienced financial adviser. These advisers usually have the knowledge of serving clients across small, medium and large enterprises from different industry sectors. When you hire virtual CFO services, you get access to a vast pool of knowledge and expertise that a full-time CFO will never offer.</Typography>


                        <Typography component={'h4'} variant="h6">You can get them at a fraction of the cost</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1"> Most of the times, a startup or an SME does not have the reassures to hire a full-time CFO as it can cost a lot. In such cases, hiring a virtual CFO will help you run your business on a limited budget. Such CFO services will offer you value for money than hiring a full-time CFO will.</Typography>
                    </Box>
                </Box>
                <FooterForm />
            </Paper>
        </Box>
    );
}

export default VcfoPg;