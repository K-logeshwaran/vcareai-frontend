import { Hidden, Typography } from "@mui/material";
import "./styles.css"
import AdbIcon from '@mui/icons-material/Adb';
import MobileNavBar from "../mobNav";
import { Link } from "react-router-dom";
import logo from "../../../public/vcareCut.png"
function CustomNav() {

  return (
    <>
      <Hidden mdDown>

        <header id="my-custom-nav-hd">
          <div className="container">
            <input type="checkbox" name="check" id="check" />
            <div className="logo-container">
              {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
              <img width={"15%"} src={logo}/>
             <Link to="/"> <h2 className="logo">Vcare.<span>ai</span></h2></Link>
            </div>
            <div className="nav-btn">
              <div className="nav-links">
                <ul>
                  <li className="nav-link" >
                    <Link to={'/'}>Home</Link>
                    {/* <a href="#">Home</a> */}
                  </li>
                  <li className="nav-link" >
                    <Link to={'/aboutus'}>About</Link>
                    {/* <a href="#">About</a> */}
                  </li>
                  <li className="nav-link" >
                    <a href="#">Products<i className="fas fa-caret-down" /></a>
                    <div className="dropdown">
                      <ul>
                        <li className="dropdown-link">
                          <Link to={"/update"}>Client Management</Link>
                        </li>
                        <li className="dropdown-link">
                        <Link to={"/update"}>Work Management</Link>
                        </li>
                        {/* <li className="dropdown-link">
                          <a href="#">Link 4</a>
                        </li> */}
                        <div className="arrow" />
                      </ul>
                    </div>
                  </li>
                  <li className="nav-link" >
                    <a href="#">Services<i className="fas fa-caret-down" /></a>
                    <div className="dropdown">
                      <ul>
                        <li className="dropdown-link">
                          <a href="#">CFO<i className="fas fa-caret-down" /></a>

                          <div className="dropdown second">
                            <ul>
                              <li className="dropdown-link">
                                <Link to={"/services/cfo/virtualCfo"}>Virtual CFO</Link>
                              </li>
                              <li className="dropdown-link">

                                <Link to={"/services/cfo/interim-cfo"}>Interim CFO</Link>
                              </li>
                              <li className="dropdown-link">

                                <Link to={"/services/cfo/consultant"}>CFO  Consultancy</Link>
                              </li>
                              <li className="dropdown-link">

                                <Link to={"/services/cfo/small-business"}>CFO  Services for small business</Link>
                              </li>
                              <li className="dropdown-link">

                                <Link to={"/services/cfo/outsourced"}>Outsourced CFO  Service</Link>
                              </li>
                              <li className="dropdown-link">

                                <Link to={"/services/cfo/fractional"}>Part Time CFO  Service</Link>
                              </li>
                            </ul>
                          </div>




                        </li>



                        <li className="dropdown-link">
                          <a href="#" className="special">Finance and Accounting <i className="fas fa-caret-down" /></a>

                          <div className="dropdown second">
                            <ul>
                              <li className="dropdown-link">
                                <Link to={"/services/finance-accounting/mis"}>Management Information</Link>
                              </li>
                              <li className="dropdown-link">
                                <Link to={"/services/finance-accounting/cash-flow"}>Cashflow Monitoring & Cost</Link>
                              </li>
                              <li className="dropdown-link">
                                <Link to={"/services/finance-accounting/capital-management"}>Working Capital Management</Link>
                              </li>
                              <li className="dropdown-link">
                                <Link to={"/services/finance-accounting/treasury-management"}>Treasury Management</Link>
                              </li>

                            </ul>
                          </div>




                        </li>



                        <li className="dropdown-link">
                          <a href="#" className="special">Compliance <i className="fas fa-caret-down" /></a>

                          <div className="dropdown second">
                            <ul>
                              <li className="dropdown-link">
                                <Link to={"/services/compliance-management/company-information"}>Company Formation, LLP</Link>
                              </li>
                              <li className="dropdown-link">
                                <Link to={"/services/compliance-management/incomeTax-advisory"}>Income Tax Advisory</Link>
                              </li>
                              <li className="dropdown-link">
                                <Link to={"/services/compliance-management/legal-regulatory"}>Legal and Regulatory</Link>
                              </li>
                              <li className="dropdown-link">
                                <Link to={"/services/compliance-management/payroll-management"}>Payroll Management</Link>
                              </li>

                            </ul>
                          </div>




                        </li>





                        <li className="dropdown-link">
                          <Link to='/services/riskManagement'>Risk Management</Link>
                        </li>

                        <li className="dropdown-link">

                          <Link to='/services/business-advisory'>Business Advisory</Link>
                        </li>
                        <div className="arrow" />
                      </ul>
                    </div>
                  </li>


                  <li className="nav-link" >
                    <a href="#">Resources<i className="fas fa-caret-down" /></a>
                    <div className="dropdown">
                      <ul>
                        <li className="dropdown-link">
                          <Link to={'/resources/podcast'}>Podcast</Link>

                        </li>
                        <li className="dropdown-link">
                          <Link to="/resources/webniars">Webinar</Link>
                        </li>
                        <li className="dropdown-link">
                          <Link to="/resources/videos">Videos</Link>

                        </li>
                        <div className="arrow" />
                      </ul>
                    </div>
                  </li>


                  <li className="nav-link" >

                    <Link to='/blogs'>Blog</Link>
                  </li>

                  <li className="nav-link" >

                    <Link to='/gallery'>Press&Gallery</Link>
                  </li>



                  <li className="nav-link" >
                    <Link to='/contact_career'>Contact-Career</Link>
                  </li>


                </ul>
              </div>

            </div >
            <div className="hamburger-menu-container">
              <div className="hamburger-menu">
                <div />
              </div>
            </div>
          </div >
        </header >
      </Hidden>
      <Hidden mdUp>
        <header>
          <div className="container custom-css">
            <div className="app-heading">
              <h1>Vcare.ai</h1>
            </div>
            <MobileNavBar />
          </div>
        </header>
      </Hidden>
    </>

  );
}

export default CustomNav;


//  <li className="dropdown-link">
//                       <a href="#">Link 3<i className="fas fa-caret-down" /></a>
//                       <div className="dropdown second">
//                         <ul>
//                           <li className="dropdown-link">
//                             <a href="#">Link 1</a>
//                           </li>
//                           <li className="dropdown-link">
//                             <a href="#">Link 2</a>
//                           </li>
//                           <li className="dropdown-link">
//                             <a href="#">Link 3</a>
//                           </li>
//                           <li className="dropdown-link">
//                             <a href="#">More<i className="fas fa-caret-down" /></a>
//                             <div className="dropdown second">
//                               <ul>
//                                 <li className="dropdown-link">
//                                   <a href="#">Link 1</a>
//                                 </li>
//                                 <li className="dropdown-link">
//                                   <a href="#">Link 2</a>
//                                 </li>
//                                 <li className="dropdown-link">
//                                   <a href="#">Link 3</a>
//                                 </li>
//                                 <div className="arrow" />
//                               </ul>
//                             </div>
//                           </li>
//                           <div className="arrow" />
//                         </ul>
//                       </div>
//                     </li> 