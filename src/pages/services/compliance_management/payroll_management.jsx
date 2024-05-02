import { Box, Card, Typography, CardMedia, Paper } from "@mui/material";
import vcfoImg from "../../../assets/images/vcfo.jpg"
import FooterForm from "../../../components/footer-form";


function PayrollManagement() {
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
                            Payroll management
                        </Typography>
                    </Box>

                </Box>

            </Card>

            <Paper elevation={5} component={"section"} sx={{ padding: "1.5rem", marginTop: '1rem' }}>
                <Box display={"flex"} component={"article"} flexDirection={'column'} gap={3}>
                    <Typography component={"h1"} color={"#4281a7"} variant="h3">
                        Payroll management
                    </Typography>
                    <Typography component={"p"} variant="subtitle1" >
                        Payroll management service providers are companies that specialize in handling the payroll functions of other businesses. They offer a range of services that can include calculating employee pay, managing tax withholdings, ensuring compliance with labor laws, and often providing related HR services.
                    </Typography>



                    <Typography component={'h4'} color={"#4281a7"} variant="h5">
                        Here’s an overview of what such a service typically offers:
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1.5}>
                        <Typography component={'h4'} variant="h6">
                            Payroll Processing
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            They handle the entire process of paying employees, including calculating wages, withholding taxes, and delivering payments via direct deposit or checks.
                        </Typography>
                        <Typography component={'h4'} variant="h6">
                            Tax Filing and Compliance
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            They ensure that all payroll-related tax filings are accurate and submitted on time, helping businesses avoid penalties for non-compliance.
                        </Typography>

                        <Typography component={'h4'} variant="h6">
                            Employee Self-Service
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Many providers offer online portals where employees can access pay stubs, tax forms, and manage their withholdings.
                        </Typography>

                        <Typography component={'h4'} variant="h6">
                            Integration with Other Systems
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Payroll services often integrate with existing business software, such as time tracking and HR systems, for seamless operations.
                        </Typography>


                        <Typography component={'h4'} variant="h6">
                            Scalability
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Whether a business is small or large, payroll services can scale to meet its needs, offering everything from basic payroll processing to comprehensive HR management.
                        </Typography>
                        <Typography component={"span"} sx={{ paddingLeft: "2rem" }} variant="body1">
                            Businesses may choose to outsource payroll to save time, reduce the risk of errors, and ensure compliance with complex tax laws
                        </Typography>
                    </Box>
                </Box>
                <FooterForm/>
            </Paper>

        </Box>
    );
}

export default PayrollManagement;