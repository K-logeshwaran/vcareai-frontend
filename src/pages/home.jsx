
import CssBaseline from '@mui/material/CssBaseline';
import { Stack, Typography, Box, Button, Grid, Hidden, CardMedia, Card, TextField, ThemeProvider, FormControl, InputLabel, Select, MenuItem, } from '@mui/material';
import ValueCard from '../components/values_card';
import vcfoImg from "../assets/images/vcfo.jpg"
import { themeOptions } from '../helpers/theme';
import { SelectAll } from '@mui/icons-material';
import SelectSmall from '../components/tests/select';
import { json, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';




export default function HomeComp() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [service, setService] = useState('CFO');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log({ email, phoneNumber, service });
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/mail/submit-service-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, phoneNumber, service })
      });

      if (!response.ok) {
        toast.error("Failed");
        throw new Error('Failed to submit service request');
      }

      const data = await response.json();
      toast.success("Success!");
      console.log('Service request submitted successfully:', data);
    } catch (error) {
      toast.error("Failed");
      console.error('Error submitting service request:', error);
    }
  };


  return (
    <ThemeProvider theme={themeOptions}>
      <Box component="main" maxWidth="xl">
        <CssBaseline />

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={1}
        >
          {/* section one */}
          <Hidden mdDown>
            <Box
              display={"flex"}
            >
              <Box flexBasis={"90%"}>
                <Card >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height={450} // Set xs height to auto to prevent conflicts

                      image={vcfoImg}
                    />

                    <Box
                      padding={"1rem"}
                      paddingTop={'3rem'}
                      display={'flex'}
                      flexDirection={'column'}

                      gap={4}
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
                      <Typography variant='h2' textTransform={"capitalize"}>Welcome to VCARE</Typography>
                      <Typography variant='h3' textTransform={"capitalize"} component={'h3'}>We provide you the right support to build a successful sustainable business!</Typography>
                      <Typography variant='h6' fontWeight={"500"}>CFO | Finance & Accounting | Compliance | Risk Management | Business Advisory</Typography>
                      <Box display={"flex"} justifyContent={"space-around"} width={"70%"}>
                        <Button variant='contained' sx={{ width: "30%" }} onClick={()=>navigate("/contact_career")}>Get In touch</Button>
                        <Button variant='contained' sx={{ width: "30%" }} onClick={()=>navigate("/services")}>Services</Button>
                      </Box>
                    </Box>
                  </Box>

                </Card>
              </Box>

              <Box flexBasis={"30%"}  >

                <Card>
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height={450}
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5P1gXaYNXczRsTUXOQWgogk_BuN6ciOtom6-mqHLLHQ&s"
                    //image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    //image={vcfoImg}
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

                      <Box
                        component="form"
                        className='help-frm'
                        paddingTop='2rem'
                        gap='1.5rem'
                        margin="auto"
                        width="90%"
                        display="flex"
                        flexDirection="column"
                        onSubmit={handleSubmit}
                      >
                        <h1>Need Help ?</h1>
                        <input
                          placeholder='Email'
                          type='text'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                          placeholder='Phone Number'
                          type='text'
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <select
                          name="service"
                          id="service"
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                        >
                          <option value="CFO">CFO</option>
                          <option value="Accounting">Accounting</option>
                          <option value="Consulting">Consulting</option>
                        </select>
                        <Button type='submit' variant='contained'>  {
                          isLoading === true ? <span class="loader"></span> : "Submit"
                        }</Button>
                      </Box>

                    </Box>
                  </Box>

                </Card>


              </Box>

            </Box>
          </Hidden>
          <Hidden mdUp>
            <Box
              display={"flex"}
              flexDirection={"column"}
            >
              <Box >
                <Card >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height={700} // Set xs height to auto to prevent conflicts
                      image={vcfoImg}
                    />

                    <Box
                      padding={"1rem"}
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
                      <h1>Welcome to VCARE</h1>
                      <h1>We provide you the right support to build a successful sustainable business!</h1>
                      <h1>CFO | Finance & Accounting | Compliance | Risk Management | Business Advisory</h1>
                      <Box display={"flex"} justifyContent={"space-around"} width={"70%"}>
                        <Button variant='contained' sx={{ width: "30%" }}>Click</Button>
                        <Button variant='contained' sx={{ width: "30%" }}>Click</Button>
                      </Box>
                    </Box>
                  </Box>

                </Card>
              </Box>

              <Box flexBasis={"30%"}  >

                <Card>
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="400"
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

                      <Box
                        component="form"
                        className='help-frm'
                        paddingTop='2rem'
                        gap='1.5rem'
                        margin="auto"
                        width="90%"
                        display="flex"
                        flexDirection="column"
                        onSubmit={handleSubmit}
                      >
                        <h1>Need Help ?</h1>
                        <input
                          placeholder='Email'
                          type='text'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                          placeholder='Phone Number'
                          type='text'
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <select
                          name="service"
                          id="service"
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                        >
                          <option value="CFO">CFO</option>
                          <option value="Accounting">Accounting</option>
                          <option value="Consulting">Consulting</option>
                        </select>
                        <Button type='submit' variant='contained'>
                          {isLoading === true ? <span class="loader"></span> : "Submit"}
                        </Button>
                      </Box>

                    </Box>
                  </Box>

                </Card>


              </Box>

            </Box>
          </Hidden>

          {/* section-2 */}
          <Stack
            direction="column"
            justifyContent="space-around"
            alignItems="stretch"
            spacing={1}
            sx={
              {
                padding: "1rem 0",
              }
            }
          >
            <Box component={"section"} display={"flex"} flexDirection={"column"} gap={5}>
              <Typography textAlign={"center"} fontWeight={"bold"} variant='h4' >Our core Values</Typography>
              <Grid container padding={'2rem 4rem'} rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3, xl: 5 }}>
                <Grid item xs={12} md={6} lg={4} >
                  <ValueCard
                    title={"Quality"}
                    imgLink={"https://www.svgrepo.com/show/216587/quality.svg"}
                    p={"We are committed to provide accurate, reliable data and methodologies, and providing a seamless, user-friendly experience whatever we do"}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4} >
                  <ValueCard
                    title={"Time"}
                    imgLink={"https://static.thenounproject.com/png/457558-200.png"}
                    p={"We are committed to provide prompt, efficient support and solutions, meeting their needs without delay."}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4} >
                  <ValueCard
                    title={"Response  "}
                    imgLink={"data:image/png;base64,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"}
                    p={"We are committed to respond to all inquiries within 24 hours. "}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4} >
                  <ValueCard
                    title={"Integrity"}
                    imgLink={"https://cdn.iconscout.com/icon/premium/png-256-thumb/integrity-1924668-1628197.png"}
                    p={"We are committed to be honest, trustworthy, and ethical in all our client dealings"}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4} >
                  <ValueCard
                    title={"Collaboration"}
                    imgLink={"https://freemiumicons.com/wp-content/uploads/2022/10/collaboration-hands-icon.png"}
                    p={"We foster expert relationships to collaborate with the best minds in the industry."}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4} >
                  <ValueCard
                    title={"Result Oriented"}
                    imgLink={"https://cdn3.iconfinder.com/data/icons/business-economy-2/1700/9284_-_Goal_Oriented-512.png"}
                    p={"We are client focused and dedicated to turning our actions into results."}
                  />
                </Grid>
              </Grid>
            </Box>

          </Stack>

          {/* section-3 */}
          <Stack
            direction="column"
            justifyContent="space-around"
            alignItems="stretch"
            spacing={1}
            sx={
              {
                padding: "1rem 0",
              }
            }
          >
            <Hidden xsDown smDown>
              <Box display="flex" justifyContent={"space-between"} flexDirection="row" gap={1} >
                <Box display="flex" flexBasis={"45%"} justifyContent={"center"} flexDirection="column" gap={3} padding={"1rem 2rem"}>
                  <Typography fontWeight={"bold"} variant='h3'>About Us</Typography>
                  <Typography component={"p"} variant="body1" >
                    To enable clients to manage their growing businesses Finances, Compliances, Corporate Governance and also address their Strategic requirements by providing timely and accurate professional advice thereby empowering them to achieve their organisational goals and objectives.
                    
                  </Typography>
                  <Button onClick={() => navigate("/aboutus")} sx={{ width: "40%" }} variant='contained'>Read more</Button>
                </Box>
                <Box component={"div"} flexBasis={"45%"} >
                  <img
                    src="https://sensiba.com/wp-content/uploads/2023/04/5-gers-with-the-center-on-having-CFO-on-it.png"
                    alt="Placeholder Image"
                    width={"100%"}
                  />
                </Box>

               


              </Box>
            </Hidden>
            <Hidden smUp>
              <Box display="flex" justifyContent={"center"} flexDirection="column" gap={3} padding={"1rem 2rem"}>
                <Typography variant='h4' fontWeight={"bold"}>About Us</Typography>
                <Typography component={"p"} variant="body1" >
                To enable clients to manage their growing businesses Finances, Compliances, Corporate Governance and also address their Strategic requirements by providing timely and accurate professional advice thereby empowering them to achieve their organisational goals and objectives.
                </Typography>
                <Button onClick={() => navigate("/aboutus")} sx={{ width: "40%" }} variant='contained'>Read more</Button>
              </Box>
            </Hidden>
          </Stack>
        </Stack>
        <ToastContainer />
      </Box>
    </ThemeProvider>
  );
}


{/* <div className='forms-outer'>
<h2>Login</h2>
{error && <div style={{ color: 'red' }}>{error}</div>}
<form className='forms'>
    <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
    <button type="button" onClick={handleLogin}>
        Login
    </button>
    <p>already having an account ? <Link to={"/register"}>register</Link> </p>
</form>
</div> */}



// <div className='forms-outer'>
//                 <h2>Login</h2>
//                 {error && <div style={{ color: 'red' }}>{error}</div>}
//                 <form className='forms'>
//                     <div>
//                         <label>Email:</label>
//                         <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
//                     </div>
//                     <div>
//                         <label>Password:</label>
//                         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                     </div>
//                     <button type="button" onClick={handleLogin}>
//                         Login
//                     </button>
//                     <p>already having an account ? <Link to={"/register"}>register</Link> </p>
//                 </form>
//             </div>


{/* <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
              <Typography textAlign={"center"} marginBottom={'0'} variant='h3'>Our core value </Typography>
            </Grid>
            <Grid item xs={4} >
              <ValueCard
                title={"Quality"}
                p={"We are committed to be honest, trustworthy, and ethical in all our client dealings"}
              />
            </Grid>

            <Grid item xs={4} >
              <ValueCard
                title={"Quality"}
                p={"We are committed to provide accurate, reliable data and methodologies,  and providing a seamless, user-friendly experience whatever we do.  "}
              />
            </Grid>
            <Grid item xs={4} >
              <ValueCard
                title={"Quality"}
                p={"We are committed to provide accurate, reliable data and methodologies, and providing a seamless, user-friendly experience whatever we do.  "}
              />
            </Grid>
            <Grid item xs={4} >
              <ValueCard
                title={"Quality"}
                p={"We are committed to provide accurate, reliable data and methodologies, and providing a seamless, user-friendly experience whatever we do.  "}
              />
            </Grid>
            <Grid item xs={4} >
              <ValueCard
                title={"Quality"}
                p={"We are committed to provide accurate, reliable data and methodologies, and providing a seamless, user-friendly experience whatever we do.  "}
              />
            </Grid>
            <Grid item xs={4} >
              <ValueCard
                title={"Quality"}
                p={"We are committed to provide accurate, reliable data and methodologies, and providing a seamless, user-friendly experience whatever we do.  "}
              />
            </Grid>

          </Grid> */}