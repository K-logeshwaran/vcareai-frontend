import { Box, Card, Typography, CardMedia, Paper } from "@mui/material";
import vcfoImg from "../../../assets/images/vcfo.jpg"
import FooterForm from "../../../components/footer-form";

function IncomeTaxAdvisory() {

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
                        <Typography sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase" }} variant="h5">Income tax advisory</Typography>
                    </Box>

                </Box>

            </Card>

            <Paper elevation={5} component={"section"} sx={{ padding: "1.5rem", marginTop: '1rem' }}>
                <Box display={"flex"} component={"article"} flexDirection={'column'} gap={3}>
                    <Typography component={"h1"} color={"#4281a7"} variant="h3">Introduction</Typography>
                    <Typography component={"p"} variant="subtitle1" >
                        After setting up your business, the next thing that can be daunting for any businessman is taxation. The comprehensive taxation policy can place stress on any businessmen.  In such cases, getting the best Income tax advisory services is a must.
                    </Typography>
                    <Typography component={"p"} variant="subtitle1" >
                        As taxation is an important aspect it cannot be ignored. Improper tax filings can invite legal attention, thus interrupting your business. We at CFO Services, provide one of the best tax advisory services in India. Our tax expert will help you with all the intricate taxation policies.
                    </Typography>

                    <Typography component={"p"} variant="subtitle1" >
                        This will help relieve your stress and keep the legal complexities at bay.
                    </Typography>


                    <Typography component={'h4'} color={"#4281a7"} variant="h5">
                        Reasons to hire Income tax advisory services
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={'h4'} variant="h6">
                            Helps in overcoming complex financial situations
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Having an expert tax consultant on board will help you solve critical financial situations. If such situations are not tackled by the experts, businessmen may have to pay penalties to the government. Experts make strategies to reduce the tax burden in the future, thus saving money.
                        </Typography>
                        <Typography component={'h4'} variant="h6">
                            They are well versed in tax laws

                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Tax advisors have a vast knowledge of tax laws. They help you keep yourself updated with the changing tax policies. A tax advisor is a key to any financial or legal problem you might face. Thus, hiring a tax advisor is beneficial for your business.
                        </Typography>

                        <Typography component={'h4'} variant="h6">
                            Lowers The Tax Liability
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Who wouldn’t want a low tax liability? Hiring an income tax advisory expert will help you reduce your tax liability. Generally, a businessman might have some knowledge about the deductions that can be claimed. But, by getting professional income tax advisory services, you get more deductions in your tax liability.
                        </Typography>

                        <Typography component={'h4'} variant="h6">
                            You Don’t Want to Risk Wasting Time or Money

                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            The most important resources of any business are money and time. No businessman can afford to waste these valuable resources. Hiring an income tax advisory will help you save time in reading and understanding the intricate tax policies. Also, it will save your money as they give you their expert advice to reduce your tax liability.
                        </Typography>


                        <Typography component={'h4'} variant="h6">
                            Accuracy in filing returns
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            You wouldn’t want to make any errors while filing your taxes, would you? Our income tax advisory service will ensure your returns are filed without any blunders and are accurate. This will, in turn, help you stay away from any legal problems.
                        </Typography>
                    </Box>


                    <Typography component={'h4'} color={"#4281a7"} variant="h5">
                        When to hire an income tax advisory expert?
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            It is needless to mention that every business has to pay its tax liability. The only difference is the amount of tax liability that one needs to pay. Then why not hire a tax consultant right from the start of your business?
                        </Typography>

                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Tax consultants help you in these major aspects of the business-
                        </Typography>
                        <Box display={'flex'} paddingLeft={'4rem'} flexDirection={'column'} gap={1.5}>



                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                                Reducing tax liability</li></Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                                Keeping away from legal attention</li></Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                                Solving any legal complexities
                            </li></Typography>

                        </Box>
                    </Box>

                    <Typography component={'h4'} color={"#4281a7"} variant="h5"> Why choose us?</Typography>

                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                        CFO Services is based in Chennai and offers income tax advisory services to clients in Bangalore, Kolkata, Delhi, Chennai and other parts of India. Our expert team is well-versed with all the tax laws and has the exact knowledge and expertise to relieve you from intricate taxation policies.
                    </Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                        If you’re looking for the best income tax advisory service in India, connect with us now for a free health check-up.
                    </Typography>
                </Box>
                <FooterForm/>
            </Paper>


        </Box>
    );
}

export default IncomeTaxAdvisory;