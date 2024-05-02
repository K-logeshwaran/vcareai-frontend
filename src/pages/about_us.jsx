import { Box, Card, Typography, CardMedia, Paper } from "@mui/material";
import Img from "../assets/images/small-business.jpg"


function AboutUs() {
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
                        <Typography sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase" }} variant="h5">
                            About us
                        </Typography>
                    </Box>
                </Box>

            </Card>


            <Paper elevation={5} component={"section"} sx={{ padding: "1.5rem", marginTop: '1rem' }}>
                <Box display={"flex"} component={"article"} flexDirection={'column'} gap={3}>
                    <Typography component={'p'} variant="subtitle1">
                        To enable clients to manage their growing businesses Finances, Compliances, Corporate Governance and also address their Strategic requirements by providing timely and accurate professional advice thereby empowering them to achieve their organisational goals and objectives.
                    </Typography>

                    <Typography component={'h4'} color={"#4281a7"} variant="h6">
                        Vision
                    </Typography>

                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                        We build the trusted architects of sustainable financial growth, empowering businesses to achieve their aspirations with clarity and confidence
                    </Typography>
                    <Typography component={'h4'} color={"#4281a7"} variant="h6">
                        Mission
                    </Typography>

                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                        Our mission is to provide strategic financial leadership that ensures the company's fiscal health and operational excellence. We are committed to delivering accurate financial information, fostering sustainable growth, and maximizing value for our stakeholders
                    </Typography>

                    <Typography component={'h4'} color={"#4281a7"} variant="h6">
                        What we do
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            At CFO Services, we focus on our clients' most complex issues and strengths. Along with providing expert advice and solutions, we believe in getting things done, which adds far greater value to the businesses.
                        </Typography>
                    </Box>

                    <Typography component={'h4'} color={"#4281a7"} variant="h6">
                        who we are
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            CFO Services LLP is the best in class outsourced Chief financial and operating  Services firms in Chennai, India. We believe there is always a better way to help Small & Medium Enterprises (SMEs) and Start ups to increase their profits and reduce cost.
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            our expert team is powered by Chief Financial Officers (CFOs) of large companies, Senior Management & Finance Professionals, Chartered Accountants, Company Secretaries and Business Analysts, working under the guidance of our Advisory Board.
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Besides, our Associates and Partner firms provide us with additional expertise and experience in the fields of Investment Banking, International Taxation and Legal Advisory.
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            With these in-depth expertise and skills, CFO services is able to offer the best CFO advisory services, CFO consulting, part time CFO services, outsourced CFO, Interim CFO, shared CFO services to our clients across various industry verticals and sizes.
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            CFO Services offer a range of expertise right from fund raising, developing a business plans, implementing systems and processes, implementing budgeting systems, comprehensive financial health check-ups, due diligence, cash flow monitoring, cost management, investor relations or turnaround management and more.
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            As a result, with our practical hands on approach, we are able to offer our clients with hassle-free, cost effective and high-quality services. And so we measure our success by their success and we focus our resources on investing in the future
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            CFO Services has worked with a different range of clients across varied industries. Some of the popular industries include technology, Digital Marketing, Education, Banking & Finance, Automobile Components, Pharma, Financial Services, eCommerce, Marketplace Aggregators, Retail, Media and Publications, Logistics, Renewable Energy, Brand Management, Business Analytics, SAAS businesses, healthcare and much more.
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            If you’re looking for the best in class Chief financial and operating Services for your business or company, get in touch with us right now!
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Box>

    );
}

export default AboutUs;