import { Box, Card, Typography, CardMedia, Paper } from "@mui/material";
import Img from "../../../assets/images/small-business.jpg"
import FooterForm from "../../../components/footer-form";

function ConsultantCfo() {
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
                        <Typography sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase" }} variant="h5">CFO Consultancy</Typography>
                    </Box>
                </Box>

            </Card>
            <Paper elevation={5} component={"section"} sx={{ padding: "1.5rem", marginTop: '1rem' }}>
                <Box display={"flex"} component={"article"} flexDirection={'column'} gap={3}>

                    <Typography component={"h1"} color={"#4281a7"} variant="h4">Introduction</Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5} paddingLeft={'1rem'}>
                        <Typography component={'p'} variant="body1">
                            Every business requires a CFO to oversee the complete finances of a company. CFO consulting services help companies keep up with the workload of financial planning and risk management.
                        </Typography>
                        <Typography component={'p'} variant="body1">
                            A good CFO consulting service provider like us is capable of managing the finances of a small, medium as well as a large enterprise.
                        </Typography>
                        <Typography component={'p'} variant="body1">
                            We possess the right set of skills to solve all your business financial problems. Contingent risks often make a business unstable. This disrupts the continuity of any business. Our CFO expert will forecast any potential risk and act upon it immediately.
                        </Typography>

                        <Typography component={'p'} variant="body1">
                            Our CFO consulting services are more than competent to prevent you from any upcoming financial risks.
                        </Typography>
                    </Box>


                    <Typography component={'h4'} color={"#4281a7"} variant="h5">Reasons to hire a CFO Consultant</Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>

                        <Typography component={'h4'} variant="h6">Offer support to your business</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Every growing or settled business requires support at least once in its lifetime. Growing businesses need more assistance to take the right decisions at the right time. Hiring a CFO Consultant helps any business that requires support with timely consultation.
                        </Typography>

                        <Typography component={'h4'} variant="h6">Cash management</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Poor cash management often results in low profitability and waste of resources. Having the right experts onboard to help you with the lifeblood of your business will save you from disorganized Cashflow. Overspending on areas that are not necessary is wasting your invaluable funds. Manage your cash with the help of the experts in a better way.
                        </Typography>

                        <Typography component={'h4'} variant="h6"> Improve profitability</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            A stagnant profitability is never appealing to any businessman. If you’re someone who is constantly on the lookout about how to increase your profitability then hiring a CFO Consultant is the right option. A CFO Consultant will ensure a constant increase in your profitability.
                        </Typography>

                        <Typography component={'h4'} variant="h6">Need a financial strategy</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Businesses often lack a strong financial strategy. A CFO Consultant will help you frame a strong financial strategy to move in the right direction. You can always get a free audit from us before getting an expert to consult on board.
                        </Typography>

                        <Typography component={'h4'} variant="h6"> Inexpensive consultation</Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Hiring a full-time CFO and underutilizing his services is just wasting your valuable capital. Instead, you can hire a CFO consultant to help you only with the things that bother you the most.
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">CFO Consultants are inexpensive and serve their purpose very well, giving you the desired results. Their expertise can benefit you in growing and increasing your profitability in business</Typography>
                    </Box>

                    <Typography component={'h4'} color={"#4281a7"} variant="h5">  When to hire a CFO Consultant Service Provider?</Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={'p'} variant="body1" paddingLeft={'2rem'}>
                            Businesses often require a strong expert support in the matter of finance and administration.
                        </Typography>

                        <Typography component={'p'} variant="body1" paddingLeft={'2rem'}>
                            A CFO Consultant provides you with all the help that you need. Startups require extra attention, thus we recommend them to hire a CFO Consultant right from the start so as to avoid taking any wrong decisions.
                        </Typography>

                        <Typography component={'p'} variant="body1" paddingLeft={'2rem'}>
                            Startups, small, medium and large businesses can hire CFO consultants when-
                        </Typography>
                        <Box display={'flex'} flexDirection={'column'} gap={1.5} paddingLeft={'2rem'}>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                                You are undertaking a new project</li></Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                                You are going through a Mergers & Acquisition procedure</li></Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                                Your Cashflow is mismanaged</li></Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                                You need more capital in your business</li></Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"><li>You want to increase your profitability</li></Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"><li>You need a long-term strategic plan</li></Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"><li>You are restructuring your business and you need advice</li></Typography>
                        </Box>
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
                <FooterForm />

            </Paper>

        </Box>
    );
}

export default ConsultantCfo;