import { Box, Card, Typography, CardMedia, Paper } from "@mui/material";
import vcfoImg from "../../../assets/images/vcfo.jpg"
import FooterForm from "../../../components/footer-form";


function TreasuryManagement() {
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
                        <Typography sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase" }} variant="h5">
                            Legal and Regulatory Compliance in Business
                        </Typography>
                    </Box>

                </Box>

            </Card>


            <Paper elevation={5} component={"section"} sx={{ padding: "1.5rem", marginTop: '1rem' }}>
                <Box display={"flex"} component={"article"} flexDirection={'column'} gap={3}>
                    <Typography component={"h1"} color={"#4281a7"} variant="h3">
                        Treasury management
                    </Typography>
                    <Typography component={"p"} variant="subtitle1" >
                        Treasury management is the process of managing an organization's liquidity, money market instruments, banking, concentration and disbursement activities. Treasury constantly monitors cash inflows and outflows in order to optimize the company's liquidity position.
                    </Typography>
                    <Typography component={"p"} variant="subtitle1" >
                        The objectives of treasury management are to ensure that the organization has sufficient funds to meet its short-term and long-term obligations, minimize financing costs, and maximize return on investment.
                    </Typography>
                    <Typography component={"p"} variant="subtitle1" >
                        Treasury Managers are responsible for overseeing the cash flow, revenue and overall finances of an organization. They evaluate fiscal choices, monitor expenses, advise colleagues and are usually expected to frequently travel in order to meet with financial contacts
                    </Typography>




                    <Typography component={'h4'} color={"#4281a7"} variant="h5"> Why choose us?</Typography>

                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                        Treasury management Services is based in Chennai, having served in various metropolitan cities like Trichy , Chennai  many more. Our team of experts has the exact knowledge and experience you would require. We provide you with the expertise allowing you to focus on your business activities as we work on the non-core activities that cannot be neglected. Businessmen often ignore the importance working capital holds in a business and thus fail in proper management.
                    </Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                        Our experts are here to manage your treasury management in the most optimal way.
                    </Typography>

                </Box>
                <FooterForm/>
            </Paper>
        </Box>
    );
}

export default TreasuryManagement;