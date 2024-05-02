import { Box, Card, Typography, CardMedia, Paper } from "@mui/material";
import Img from "../../../assets/images/small-business.jpg"
import FooterForm from "../../../components/footer-form";

function SmallBusiness() {
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
                        <Typography sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase" }} variant="h5">CFO Services for small business</Typography>
                    </Box>
                </Box>

            </Card>
            <Paper elevation={5} component={"section"} sx={{ padding: "1.5rem", marginTop: '1rem' }}>
                <Box display={"flex"} component={"article"} flexDirection={'column'} gap={3}>
                    <Typography component={"h1"} color={"#4281a7"} variant="h4">Introduction</Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5} paddingLeft={'1rem'}>
                        <Typography component={'p'} variant="body1">
                            Businesses often think that they can leverage their business growth without the help of a CFO. However, they fail to realize that having a financial expert on board will reduce the amount of risk involved.
                        </Typography>
                        <Typography component={'p'} variant="body1">
                            As every business evolves, so does the need for a business to move forward. And when it comes to moving forward, finance place a vital role. Thus, to keep a constant track of your finances and to optimize them, you need a CFO for your small business too.
                        </Typography>
                        <Typography component={'p'} variant="body1">
                            It is often difficult to manage a small business as it comparatively has fewer resources and managerial skills. Continuity is the key to any successful business and CFO services gives the required sense of continuity.
                        </Typography>
                    </Box>

                    <Typography component={'h4'} color={"#4281a7"} variant="h5"> Reasons to hire a CFO Service for Small Business</Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={'h4'} variant="h6">CFO Services helps to raise capital</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Small business experiences capital restraints due to fewer investors. CFO helps you to raise capital and also conducts cost-cutting to free up your capital. Thus, making a good amount of capital available for you to invest in productive tasks.</Typography>
                        <Typography component={'h4'} variant="h6">They improve your cash flow</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">

                            They manage your cash conversion cycle, bringing in collections resulting in an increase in liquidity. The Cashflow projections prepared by the CFO help you in managing your cash in a better way.</Typography>

                        <Typography component={'h4'} variant="h6">They help you increase profitability</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">

                            Small businesses struggle initially with their profitability. Hiring a CFO will give you a strategic plan on how to sustain and increase your profitability. Their expert advice can benefit you on a broader horizon bringing you increased profits!</Typography>

                        <Typography component={'h4'} variant="h6">You have a growing business</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            You have a growing business
                            Small businesses have a high potential for growth. Every business goes through a different growth stage and CFO Services provide you with specialized services to meet your requirements. A growing business will need a helping hand of an expert to move in the right direction.</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">Startups and rapidly growing business can benefit from Interim CFO.</Typography>
                    </Box>

                    <Typography component={'h4'} color={"#4281a7"} variant="h5">  When is the right time to hire CFO Services?</Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={'p'} variant="body1" paddingLeft={'2rem'}>
                            There’s no specific time to hire CFO Services for your small business. We recommend hiring a CFO from the initial stages of your business. Startups and small businesses skip this step to save some money.
                        </Typography>

                        <Typography component={'p'} variant="body1" paddingLeft={'2rem'}>
                            It’s never too late to hire CFO Services as they can jump right into your business and sail it through all the difficulties.


                        </Typography>

                        <Typography component={'p'} variant="body1" paddingLeft={'2rem'}>
                            CFO Services is a one-stop solution to all your financial, managerial and administration related problems. And we assure you, you’ll never look back once you move forward with the expertise of a CFO!
                        </Typography>
                    </Box>

                    <Typography component={'h4'} variant="h6">  You need CFO Services when:</Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                            Your business is growing at a fast pace</li></Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                            Falling short of finances and working capital</li></Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                            You need a financial strategy to move forward</li></Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                            Desired profitability is not achieved</li></Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"><li>SNeed detailed financial data to analyze your position</li></Typography>
                    </Box>

                    <Typography component={'h4'} color={"#4281a7"} variant="h5"> Why choose us?</Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                            CFO Services provides you with an expert team of professionals on board having the exact knowledge and experience your business needs to grow! We offer CFO Services in Chennai, Delhi, Kolkata, Bangalore and many other major cities in India.</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                            Our CFO services focus mainly on the startups, small businesses, medium and large enterprises as we understand the struggles they go through due to inadequate resources.</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                            Our CFO services focus mainly on the startups, small businesses, medium and large enterprises as we understand the struggles they go through due to inadequate resources.</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                            We also offer a free audit for you to know your current position.</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">Fill out the form below and contact us right away to save yourself the time and effort of searching for a new CFO!</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                            Fill out the form right now and get a free audit from our expert team!</Typography>

                    </Box>
                </Box>
                <FooterForm/>
            </Paper>
        </Box>
    );
}

export default SmallBusiness;