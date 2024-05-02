import { Box, Card, Typography, CardMedia, Paper } from "@mui/material";
import Img from "../../../assets/images/small-business.jpg"
import FooterForm from "../../../components/footer-form";



function RiskTN() {
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
                        <Typography sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase" }} variant="h5"> Risk Management Services in Tamilnadu</Typography>
                    </Box>
                </Box>

            </Card>
            <Paper elevation={5} component={"section"} sx={{ padding: "1.5rem", marginTop: '1rem' }}>
                <Box display={"flex"} component={"article"} flexDirection={'column'} gap={3}>


                    <Typography component={'p'} variant="body1">
                        Risk management is a process of detection, analyzation, and prevention of potential risks to the business.
                    </Typography>



                    <Typography component={'h4'} color={"#4281a7"} variant="h6">
                        Why must one avail the Risk Management Services?
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            We know that financial market is uncertain and fluctuations tend to occur. This creates obstacles in achieving the business goals. Risk Management Services Company in Chennai, like CFO Services, use professional skills to timely detect, analyze and prioritize the risks that you might face.
                        </Typography>
                    </Box>

                    <Typography component={'h4'} color={"#4281a7"} variant="h6">
                        Benefits of Risk Management Services in Chennai:
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Reduce business liability
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Frame regulatory issues
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Build a better defense to class-actions
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Provide insights and support to the Board of Directors
                        </Typography>

                    </Box>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>

                        <Typography component={'h4'} variant="h6">
                            Internal/Management audit:
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            To check the potential risks, a good company that offers Risk Management Services in Chennai will often get an internal audit done. Internal audit can be a tedious task but it is equally important. To regulate the proper working of your management, our internal audit services will help you get accurate, clear, concise and timely audit reports.
                        </Typography>

                        <Typography component={'h4'} variant="h6">
                            Design and Implementation of Standard Operating Processes (SOP):
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            With our well thought design and effective implementation, we offer you benchmarked SOP solutions. Our prime objective is to make your work more efficient and ensure that you get quality output.
                        </Typography>

                        <Typography component={'h4'} color={"#4281a7"} variant="h5">
                            Due Diligence:
                        </Typography>
                        <Box display={'flex'} flexDirection={'column'} gap={1.5} paddingLeft={'2rem'}>
                            <Typography component={'h4'} variant="h6">
                                Legal due diligence-
                            </Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                                We at CFO services, will do a thorough investigation and study of the M&A documents ensuring a risk-free process. We at CFO services, help organization comply with the laws of their country. We also ensure that while doing/conducting/working on any transaction of a merger or takeover, the target companies have complied with all legal requirements.
                            </Typography>

                            <Typography component={'h4'} variant="h6">
                                Financial DD-
                            </Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                                Our team of experts at CFO Services, ensure to investigate all the investment opportunities for you before letting you enter into an agreement. We review all the facts and details and then enter into an agreement with the other party.
                            </Typography>

                            <Typography component={'h4'} variant="h6">
                                Operational DD-
                            </Typography>

                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                                Our highly-qualified team offering risk management services will investigate the operational aspects of the other party before entering into an M&A agreement. With us by your side, you’re assured that there are no potential risks included in the agreement.
                            </Typography>

                            <Typography component={'h4'} variant="h6">
                                Financial DD:
                            </Typography>

                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                                Our team of experts at CFO Services involves analysis of key driver of business for maintaining and growth of profits and revenues of business. We conduct independent financial analysis of cash flows & business drivers.
                            </Typography>

                            <Typography component={'h4'} variant="h6">
                                Operational DD:
                            </Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                                Our team evaluates operational performance related to target companies. These are generally conducted in the individual sector since a lot of an organization’s value is dependent on operational performances.
                            </Typography>
                        </Box>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Due Diligence helps in securing Investor’s investment by identifying all the risk associated with the business and the investment.
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            It acts as a safe guard against being uninformed or wrong information about the business and the industry.
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            So if you are looking for the best risk management services in Chennai, you’re in the right place.
                        </Typography>

                    </Box>


                </Box>
                <FooterForm />
            </Paper>

        </Box>
    );
}

export default RiskTN;