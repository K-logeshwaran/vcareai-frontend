import { Box, Card, Typography, CardMedia, Paper } from "@mui/material";
import vcfoImg from "../../../assets/images/vcfo.jpg"
import FooterForm from "../../../components/footer-form";


function Legal_regulatory() {
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
                        Introduction
                    </Typography>
                    <Typography component={"p"} variant="subtitle1" >
                        We know, running a company and abiding by all the rules and regulations laid down by the Companies Act is not an easy task. Breaking even a single rule can have major consequences for a company. Thus, a businessman has to carefully look into legal and regulatory compliance.
                    </Typography>
                    <Typography component={"p"} variant="subtitle1" >
                        We understand that these complex rules can be difficult to abide by and simultaneously run a company. Hence, we are here to help you in all the legal and regulatory compliance matters. Our expert legal team helps you in reducing the legal and compliance risk within your company.
                    </Typography>


                    <Typography component={'h4'} color={"#4281a7"} variant="h5">
                        Reasons to hire a legal expert
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={'h4'} variant="h6">
                            You get a fresh perspective
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            When an outsider is reviewing the legal matters of your business, you get the opinion of a third person. Their opinion is unbiased and may have a new perspective of looking towards the legal problem. This can give you a solution you thought you never had!
                        </Typography>
                        <Typography component={'h4'} variant="h6">
                            Prevention is better than cure
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Business is full of risks and you cannot afford something to come and hit you out of nowhere. You need to know the potential risks before entering into any contract. A legal expert can help you analyse the contract and picks out the potential risks.
                        </Typography>

                        <Typography component={'h4'} variant="h6">
                            You cannot sue yourself
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            If you make a mistake in reviewing your contracts you cannot sue yourself. But if you have a third person that is your legal expert to review your contracts and he makes a mistake, you can sue him.
                        </Typography>

                        <Typography component={'h4'} variant="h6">
                            You are not an expert
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            You cannot be everywhere. Likewise, one cannot expect to be an expert in legal contracts. Legal matters are intricate and having an expert on board can help you and your business a lot. In order to get expert advice on all the legal matters, hiring an expert is the best option.
                        </Typography>


                        <Typography component={'h4'} variant="h6">
                            Mitigate damage
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Hiring a legal expert can help you mitigate damage. Their expertise can help you reduce the damage that can be caused to you and your business. You need to lay all the facts straight in front of your attorney so that he can help you reduce the damage.
                        </Typography>
                    </Box>


                    <Typography component={'h4'} color={"#4281a7"} variant="h5">
                        When to hire a legal expert?
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            The right time of hiring a legal expert is from the very start of your business. But in case you did not feel the need of hiring a lawyer then, now is the right time.
                        </Typography>

                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Here are a few times you should consider about hiring a legal expert.
                        </Typography>
                        <Box display={'flex'} paddingLeft={'4rem'} flexDirection={'column'} gap={1.5}>



                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                                Your company is going through a Mergers and Acquisition
                            </li></Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                                You are about to enter into a contract
                            </li></Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                                You are hit by some legal contingencies
                            </li></Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                                You want to mitigate the loss
                            </li></Typography>

                        </Box>
                    </Box>

                    <Typography component={'h4'} color={"#4281a7"} variant="h5"> Why choose us?</Typography>

                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                        CFO Services is based in Chennai, having served clients from all around India. Our team of experts has the exact legal expertise you would require. We provide you with Legal And Regulatory compliance experts who can help protect you from potential risks and mitigate loss. Businessmen often ignore the importance of a legal expert until they find themselves in a legal issue.
                    </Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                        If you’re looking for an expert to look into your legal and regulatory matters, then you are in the right place.
                    </Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                        Fill out the form and contact us right away!
                    </Typography>
                </Box>
                <FooterForm/>
            </Paper>


        </Box>
    );
}

export default Legal_regulatory;