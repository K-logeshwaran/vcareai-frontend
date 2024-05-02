import { Box, Card, Typography, CardMedia, Paper } from "@mui/material";
import Img from "../../../assets/images/small-business.jpg"
import FooterForm from "../../../components/footer-form";




function BusinessAdv() {

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
                            Business advisory services
                        </Typography>
                    </Box>
                </Box>

            </Card>

            <Paper elevation={5} component={"section"} sx={{ padding: "1.5rem", marginTop: '1rem' }}>
                <Box display={"flex"} component={"article"} flexDirection={'column'} gap={3}>
                    <Typography component={'p'} variant="body1">
                        Whether challenging or favourable economic conditions, every business strives to be smart, flexible, creative and forward thinking. CFO Services being one of the top Business Advisory firms in Chennai, provides deep technical knowledge and extensive industry experience. This helps us to assist clients in addressing business issues that goes beyond providing traditional audit services.
                    </Typography>
                    <Typography component={'p'} variant="body1">
                        Our highly-qualified business Advisory team develops and offers tailored, innovative and comprehensive solutions for specific client business needs that may not require the expression of opinions based on professional standards.
                    </Typography>
                    <Typography component={'p'} variant="body1">
                        CFO services offers a full range of services to help clients tackle challenges faced in business.
                    </Typography>

                    <Typography component={'h4'} color={"#4281a7"} variant="h6">
                        Benefits of Business advisory firms in Chennai:
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Bring more focus to value proposition
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Have an external macro view of business
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Implement strategies, which have been tested with other companies.
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Help clients’ progress
                        </Typography>
                    </Box>

                    <Typography component={'h4'} color={"#4281a7"} variant="h6">
                        Fund Raising:
                    </Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                        Figuring out various sources and actually raising funds are two different aspects. We at CFO services will analyze all the possible sources that will help you raise maximum funds from the selected sources.
                    </Typography>
                    <Typography component={'h4'} color={"#4281a7"} variant="h6">
                        Business Strategy:
                    </Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                        A good strategy helps in tackling various hurdles and challenges you might face in your business. CFO services offer you a strong and on-point plan of action to put your business in top gear.
                    </Typography>
                    <Typography component={'h4'} color={"#4281a7"} variant="h6">
                        Preparation of Business Plan:
                    </Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                        A business without a plan isn’t a business at all, is it?
                    </Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                        Planning is the prime factor in setting up a business. CFO services will help you get a strong plan so you can run your business efficiently. We believe “Failing to Plan is Planning to Fail”.
                    </Typography>
                    <Typography component={'h4'} color={"#4281a7"} variant="h6">
                        Growth Mentoring:
                    </Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                        We know there is an opportunity to grow. No matter what your business is.
                    </Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                        We at CFO services, offer you persistent mentoring in terms of company growth and ensure your business doesn’t miss any opportunity to go skywards.
                    </Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                        If you want to grow your business but you’re not sure how to make it happen, get in touch with us right away!
                    </Typography>
                    <Typography component={'h4'} color={"#4281a7"} variant="h6">
                        Startup Advisory:
                    </Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                        Helping you select your constitution
                    </Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                        Helping you act as your sounding board for your business idea
                    </Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                        Helping with setting up with revenue & business model for startups
                    </Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                        So, if you are looking for the best Business Advisory firms in Chennai, you are in the right place.
                    </Typography>
                </Box>
                <FooterForm/>
            </Paper>
        </Box>
    );
}

export default BusinessAdv;