import { Box, Card, Typography, CardMedia, Paper } from "@mui/material";
import vcfoImg from "../../../assets/images/vcfo.jpg"
import FooterForm from "../../../components/footer-form";



function CashFlow() {

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
                            Cash flow & Cost Management
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
                        Experiencing rapid growth but your books are all over the place? Or you are in need of cash and you have no clue where your all account receivables are? A proper Cashflow management can help you get out of this confusion and chaos.
                    </Typography>
                    <Typography component={"p"} variant="subtitle1" >
                        Well, whether you’re a growing business or a stable business, you also need to control your costs. Costs are the expenses that you incur to run your business.
                    </Typography>
                    <Typography component={"p"} variant="subtitle1" >
                        Lower the costs, higher the profit margins. A proper blend of Cashflow and Cost management will help your business prosper.
                    </Typography>
                    <Typography component={"p"} variant="subtitle1" >
                        Our expert team of professionals helps you manage your costs and Cashflow and lets you focus on the core business. Here are some reasons why you should outsource your Cashflow and cost management.
                    </Typography>


                    <Typography component={'h4'} color={"#4281a7"} variant="h5">
                        Benefits of accurate cash flow and cost management
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={"span"} variant="body1">
                            Lack of profitability won’t close down your business but lack of cash can. That’s how important a proper Cashflow in the business is! Cutting down on costs is the first thing you can do to increase your profitability and to save your funds.
                        </Typography>
                        <Typography component={"span"} variant="body1">
                            But you need to know what costs have to be cut down. You cannot just cut down any expenses for the sake of cutting costs. Having an expert team onboard will help you manage both your Cashflow and your costs.
                        </Typography>
                        <Typography component={'h4'} variant="h6">
                            Growing business
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Startups have a low amount of cash invested so it’s easier to manage the Cashflow. But as the startup grows the cash inflow increases and managing this gets difficult. Getting a team of experts on board helps the business to manage their Cashflow well.
                        </Typography>
                        <Typography component={'h4'} variant="h6">
                            Mismanaged Cashflow
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            If you’re in a financial turmoil and you see yourself going nowhere, your Cashflow isn’t managed well! A poorly managed cash flow can affect your business for a long time and it will only get worse.
                        </Typography>

                        <Typography component={'h4'} variant="h6">
                            Increased costs
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Growing business means growing expenses. But in order to stop yourself from running out of cash, you need to put a curb on your expenses. Proper optimization of your resources can help you cut down your costs. Cost management helps you to optimize your resources well and substantially cuts down the unnecessary costs that you incur.
                        </Typography>

                        <Typography component={'h4'} variant="h6">
                            Less profitability
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            When you experience low profitability, the first thing that would come to your mind is increasing the prices of your products or services. But that’s not what we would recommend you to do. The first thing you need to do is Cost management. You must first cut down your costs to increase your profitability and that’s possible only with proper cost management.
                        </Typography>

                    </Box>


                    <Typography component={'h4'} color={"#4281a7"} variant="h5">
                        When is the right time for Cashflow management?
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            May it is a startup or a well-established business, cashflow is the crucial part of the business. Even a little interruption in the cashflow can affect your business. So every business needs to manage their cash from the start to avoid future contingencies.
                        </Typography>
                    </Box>


                    <Typography component={'h4'} color={"#4281a7"} variant="h5">
                        When is the right time for cost management?
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Cost control is essential for any business as, without it, the expenses would just go on increasing. In case you feel that the profitability of your company is very low, you need to consider cost-cutting.
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            When you don’t get the expected profitability.
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            When the account receivables are more but the cash inflow is less.
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            You take up a new project and you need proper cashflow and cost management.
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            When your cashflow is disrupted due to poor management.
                        </Typography>
                    </Box>

                    <Typography component={'h4'} color={"#4281a7"} variant="h5"> Why choose us?</Typography>

                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                        CFO Services is based in Chennai but has clients from all over India. We have served in cities like Banglore, Kolkata, Delhi, Chennai and many more. Our team of expert professionals gives you the best services at a pocket-friendly price.
                    </Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                        We help you in managing your Cashflow and costs in the best way possible. As a result, we give you the desired assistance whenever and wherever you need.
                    </Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                        If you’re looking for Cashflow and cost management services, then your search is over. Fill up the form right now and get in touch with us!
                    </Typography>
                </Box>
                <FooterForm/>
            </Paper>


        </Box>
    );
}

export default CashFlow;