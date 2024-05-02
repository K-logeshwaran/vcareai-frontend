import { Box, Card, Typography, CardMedia, Paper } from "@mui/material";
import vcfoImg from "../../../assets/images/vcfo.jpg"
import FooterForm from "../../../components/footer-form";


function Mis() {
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
                        Management Information System (MIS)
                        </Typography>
                    </Box>

                </Box>

            </Card>

            <Paper elevation={5} component={"section"} sx={{ padding: "1.5rem", marginTop: '1rem' }}>
                <Box display={"flex"} component={"article"} flexDirection={'column'} gap={3}>
                    <Typography component={"h1"} color={"#4281a7"} variant="h3">
                        MIS
                    </Typography>
                    <Typography component={"p"} variant="subtitle1" >
                        MIS is used by the management of an organisation to carry out various management functions.
                    </Typography>
                    <Typography component={"p"} variant="subtitle1" >
                        MIS is the best invention so far that has made the work of management of any organization easier. It provides great help in managing human resources, physical resources, and decision making.
                    </Typography>
                    <Typography component={"p"} variant="subtitle1" >
                        Our effective MIS will ensure that you get accurate information to make the right decisions. MIS also helps in solving various problems by analysing costs and more. It also helps in proper coordination and control in the organisation.
                    </Typography>


                    <Typography component={'h4'} color={"#4281a7"} variant="h5">
                        Reasons to invest in an MIS
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Whether you are a small, medium or large organisation, maintaining your books is mandatory and beneficial. Mandatory in the company law and beneficial to make the right decisions at the right time.
                            Here are some reasons to get an MIS for your organisation!
                        </Typography>
                        <Typography component={'h4'} variant="h6">
                            Maintaining books is easier
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            MIS makes it super easy for you to be on the top of your books always! You just need to provide the necessary information on a daily basis and you’ll have an actual financial report ready for you.
                        </Typography>

                        <Typography component={'h4'} variant="h6">
                            Get a strategic plan
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Companies that do not have a strong strategic plan often miss out on opportunities and have no aim. Having a strategic plan will help you move faster towards success and bring you more profits.
                        </Typography>

                        <Typography component={'h4'} variant="h6">
                            Helps in decision making
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            MIS provides all the necessary information that is already analyzed. This information is accurate in giving you a clear picture before you take any decision. This assures that the decisions you make are well-thought of.
                        </Typography>


                        <Typography component={'h4'} variant="h6">
                            Reliable and timely information
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            MIS ensures you get reliable and accurate data to help you make correct decisions based on the reports. A wrong report can show a false picture which will affect your decision-making skills.
                        </Typography>


                        <Typography component={'h4'} variant="h6">
                            Increases cost-effectiveness
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Businesses often spend in areas that are not required. MIS helps you increase cost-effectiveness by reducing the unnecessary expenses. This will lead to an increase in your profit margin and reduce your costs.
                        </Typography>

                        <Typography component={'h4'} variant="h6">
                            Better communication
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Inter-communication between the departments is very crucial. Lack of coordination can lead to misunderstandings and this may also lead to chaos in the organization! Thus, MIS is a great solution to avoid this problem. It’ll improve the communication between the departments and will make coordination better.
                        </Typography>

                    </Box>


                    <Typography component={'h4'} color={"#4281a7"} variant="h5">
                        When is the right time to get an MIS?
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Getting an MIS for your organization is beneficial at any time. All the big organizations and even the small ones require accurate information to make the right decisions. So, it doesn’t really matter what size your organization is, MIS will come along with benefits.
                        </Typography>

                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Here are some indications you need to look for-
                        </Typography>
                        <Box display={'flex'} paddingLeft={'4rem'} flexDirection={'column'} gap={1.5}>

                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                                Your books are not showing the right picture
                            </li></Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                                You need accurate reports to make a decision
                            </li></Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                                Your finances are all over the place
                            </li></Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                                You do not have professionals to manage your books
                            </li></Typography>
                            <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="button"> <li>
                                You have a new project to work on
                            </li></Typography>

                        </Box>
                    </Box>

                    <Typography component={'h4'} color={"#4281a7"} variant="h5"> Why choose us?</Typography>

                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                        CFO Services is based in Chennai, providing services to clients from all over India. We aim at providing you with expert solutions. Our team of experts ensures that you provide all the necessary and relevant information in the MIS to get accurate results. Our MIS will surely make your work a cake walk and help you take the right and timely decisions. And what’s better than a well-managed organization?
                    </Typography>
                    <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="subtitle1">
                        If you’re looking to bring coordination and accuracy in your management, MIS is for you! Fill in the form below and take a step ahead towards building a strong management
                    </Typography>
                </Box>
                <FooterForm/>
            </Paper>


        </Box>
    );
}

export default Mis;