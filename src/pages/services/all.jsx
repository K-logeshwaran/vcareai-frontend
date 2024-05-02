import { Box, Card, Typography, CardMedia, Paper, Grid } from "@mui/material";
import Img from "../../assets/images/small-business.jpg"
import FooterForm from "../../components/footer-form";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { Link } from "react-router-dom";

const cfoSer = [
    {
        render: () => <Link style={{ width: "100%", textAlign: "center", textTransform: "capitalize" }} to={"/services/cfo/virtualCfo"}>
            Virtual Cfo
        </Link>
    },
    {
        render: () => <Link style={{ width: "100%", textAlign: "center", textTransform: "capitalize" }}
            to={"/services/cfo/small-business"}>Small Business
        </Link>
    },
    {
        render: () => <Link style={{ width: "100%", textAlign: "center", textTransform: "capitalize" }}
            to={"/services/cfo/outsourced"}>Out Sourced
        </Link>
    },
    {
        render: () => <Link style={{ width: "100%", textAlign: "center", textTransform: "capitalize" }}
            to={"/services/cfo/interim-cfo"}>Interim CFO
        </Link>
    },
    {
        render: () => <Link style={{ width: "100%", textAlign: "center", textTransform: "capitalize" }}
            to={"/services/cfo/fractional"}>Fractional CFO
        </Link>
    },
    {
        render: () => <Link style={{ width: "100%", textAlign: "center", textTransform: "capitalize" }}
            to={"/services/cfo/consultant"}>Consultant CFO
        </Link>
    },
]
const finance = [
    {
        render: () => <Link
            style={{ width: "100%", textAlign: "center", textTransform: "capitalize" }}
            to={"/services/finance-accounting/cash-flow"}>
            cash Flow
        </Link>
    },
    {
        render: () => <Link
            style={{ width: "100%", textAlign: "center", textTransform: "capitalize" }}
            to={"/services/finance-accounting/mis"}>MIS
        </Link>
    },
    {
        render: () => <Link style={{ width: "100%", textAlign: "center", textTransform: "capitalize" }}
            to={"/services/finance-accounting/treasury-management"}>treasury management
        </Link>
    },
    {
        render: () => <Link style={{ width: "100%", textAlign: "center", textTransform: "capitalize" }}
            to={"/services/finance-accounting/capital-management"}>capital management
        </Link>
    },

]
const compliance = [
    {
        render: () => <Link
            style={{ width: "100%", textAlign: "center", textTransform: "capitalize" }}
            to={"/services/compliance-management/company-information"}>
            company information
        </Link>
    },
    {
        render: () => <Link
            style={{ width: "100%", textAlign: "center", textTransform: "capitalize" }}
            to={"/services/compliance-management/incomeTax-advisory"}>incomeTax advisory
        </Link>
    },
    {
        render: () => <Link style={{ width: "100%", textAlign: "center", textTransform: "capitalize" }}
            to={"/services/compliance-management/legal-regulatory"}>legal-regulatory
        </Link>
    },
    {
        render: () => <Link style={{ width: "100%", textAlign: "center", textTransform: "capitalize" }}
            to={"/services/compliance-management/payroll-management"}>payroll management
        </Link>
    },

]

function AllServices() {
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
                        <Typography sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase" }} variant="h5">Services</Typography>

                    </Box>
                </Box>

            </Card>
            <Grid container padding={'2rem 4rem'} rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3, xl: 5 }} component={"section"}>
                <Grid item xs={12} md={6}  >
                    <Card >
                        <Box sx={{ position: 'relative' }}>
                            <CardMedia
                                component="img"
                                height="300"
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
                                <Typography sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase" }} variant="h5">Services</Typography>

                            </Box>
                        </Box>

                    </Card>
                    <List

                    >
                        <Typography variant="h5" mt={2} textTransform={"capitalize"} fontWeight={'700'}>  CFO services</Typography>
                        {cfoSer.map(item => <ListItem sx={{ marginTop: 1, width: "60%" }}  >
                            {item.render()}
                        </ListItem>)}
                    </List>
                </Grid>
                <Grid item xs={12} md={6}  >
                    <Card >
                        <Box sx={{ position: 'relative' }}>
                            <CardMedia
                                component="img"
                                height="300"
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
                                <Typography sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase" }} variant="h5">Services</Typography>

                            </Box>
                        </Box>

                    </Card>
                    <List

                    >
                        <Typography variant="h5" mt={2} textTransform={"capitalize"} fontWeight={'700'}>  finance accounting</Typography>
                        {finance.map(item => <ListItem sx={{ marginTop: 1, width: "60%" }}  >
                            {item.render()}
                        </ListItem>)}
                    </List>
                </Grid>
                <Grid item xs={12} md={6}  >
                    <Card >
                        <Box sx={{ position: 'relative' }}>
                            <CardMedia
                                component="img"
                                height="300"
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
                                    <Link
                                        style={{ color: "white" }}
                                        to={"/services/riskManagement"}>
                                        Rrisk Management
                                    </Link>
                                </Typography>

                            </Box>
                        </Box>

                    </Card>

                </Grid>

                <Grid item xs={12} md={6}  >
                    <Card >
                        <Box sx={{ position: 'relative' }}>
                            <CardMedia
                                component="img"
                                height="300"
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
                                    <Link
                                        style={{ color: "white" }}
                                        to={"/services/business-advisory"}>
                                        business advisory
                                    </Link>

                                </Typography>

                            </Box>
                        </Box>

                    </Card>

                </Grid>

                <Grid item xs={12} md={6}  >
                    <Card >
                        <Box sx={{ position: 'relative' }}>
                            <CardMedia
                                component="img"
                                height="300"
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
                                <Typography sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase" }} variant="h5">Services</Typography>

                            </Box>
                        </Box>

                    </Card>
                    <List

                    >
                        <Typography variant="h5" mt={2} textTransform={"capitalize"} fontWeight={'700'}>  finance accounting</Typography>
                        {compliance.map(item => <ListItem sx={{ marginTop: 1, width: "60%" }}  >
                            {item.render()}
                        </ListItem>)}
                    </List>
                </Grid>

            </Grid>
        </Box>
    );
}

export default AllServices;