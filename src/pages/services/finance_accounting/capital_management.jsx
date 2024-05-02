import { Box, Card, Typography, CardMedia, Paper } from "@mui/material";
import vcfoImg from "../../../assets/images/vcfo.jpg"
import FooterForm from "../../../components/footer-form";


function CapitalManagement() {

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
                            Working capital management
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
                        The significance of working capital is known to every businessman. Companies that do not have sufficient working capital are in jeopardy.
                    </Typography>
                    <Typography component={"p"} variant="subtitle1" >
                        Working capital must be sufficient enough to cover the maturing short-term debts and upcoming operational costs. The working capital ratio below 1.0 indicates that the company has some trouble meeting its short-term commitments.
                    </Typography>
                    <Typography component={"p"} variant="subtitle1" >
                        But that doesn’t mean a higher working capital ratio is good for the company. Higher working capital indicates excess inventory, meaning the assets are not utilized well. The maximum working capital ratio must be between 1.2 and 2.0.
                    </Typography>
                    <Typography component={"p"} variant="subtitle1" >
                        Every business needs to manage their working capital efficiently. That is where we come into the picture.  Our expert team balances your working capital in the radius of the recommended limits.
                    </Typography>


                    <Typography component={'h4'} color={"#4281a7"} variant="h5">
                        Reasons why you need to manage your working capital
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={'h4'} variant="h6">
                            To keep your business away from danger
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Every business must have sufficient working capital to carry out its operational costs. Apart from the operational costs, the short-term debts that are up for maturity need to be covered as well. If not, the business may face some legal problems.
                        </Typography>
                        <Typography component={'h4'} variant="h6">
                            To utilize your assets well
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Not optimizing your assets well can also bring your business to a standstill. Managing your working capital well means utilizing the assets in the most optimum way. For example, you should not have a huge amount of inventory as it blocks your working capital for a long time.
                        </Typography>

                        <Typography component={'h4'} variant="h6">
                            For the smooth functioning of your business
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Proper management of working capital keeps the wheels of the business moving forward. You need to manage your working capital to avoid any interruptions in the operations of the business. That is why you need an expert to help you manage your working capital in the best possible way.
                        </Typography>

                        <Typography component={'h4'} variant="h6">
                            To boost your profits
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Correct use of working capital will result in an increase in your earnings. If you need to earn more out of the same range of working capital, you need experts to manage it well. No stone should be left unturned when it comes to increasing your profits.
                        </Typography>


                        <Typography component={'h4'} variant="h6">
                            To improve your goodwill
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            A satisfactory working capital ratio will project a positive image of your company. Timely payments to your creditors will add up to your goodwill. Thus, to improve your goodwill, you need to have an expert on board to manage your working capital.
                        </Typography>
                    </Box>


                    <Typography component={'h4'} color={"#4281a7"} variant="h5">
                        When do you need working capital management?
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            You need to keep a check on your working capital as it is the fuel that keeps your business running smoothly. It is the main factor that drives your operational activities. You need to make sure your soon maturing short-term debts are covered. If they are not, you might end up in some legal formalities.
                        </Typography>

                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Here are some indicators that tell you to improve your working capital management:
                        </Typography>
                        <Box display={'flex'} paddingLeft={'4rem'} flexDirection={'column'} gap={1.5}>

                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                                The working capital ratio is below 1.0
                            </li></Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                                You are not getting the expected returns
                            </li></Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                                Your inventory is more than the usual limits
                            </li></Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                                You need to improve your goodwill
                            </li></Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                                You are experiencing interruptions in daily operations
                            </li></Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                                You are unable to meet your short-term debts
                            </li></Typography>

                        </Box>
                    </Box>

                    <Typography component={'h4'} color={"#4281a7"} variant="h5"> Why choose us?</Typography>

                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                        CFO Services is based in Chennai, having served in various metropolitan cities like Bangalore, Delhi, Kolkata, Chennai and many more. Our team of experts has the exact knowledge and experience you would require. We provide you with the expertise allowing you to focus on your business activities as we work on the non-core activities that cannot be neglected. Businessmen often ignore the importance working capital holds in a business and thus fail in proper management.
                    </Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                        Our experts are here to manage your working capital in the most optimal way.
                    </Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                        If you’re looking for a better working capital management, your search is now over.
                    </Typography>
                </Box>
                <FooterForm/>
            </Paper>


        </Box>
    );
}

export default CapitalManagement;