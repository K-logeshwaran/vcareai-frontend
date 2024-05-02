import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom";

function AdminNav() {
    return (
        <header id="my-custom-nav-hd">
            <div className="container">
                <input type="checkbox" name="check" id="check" />
                <div className="logo-container">
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <h1>VCAREAI</h1>
                </div>
                <div className="nav-btn">
                    <div className="nav-links">
                        <ul>
                            <li className="nav-link" >
                                <Link to={'/admin'}>Home</Link>
                                {/* <a href="#">Home</a> */}
                            </li>
                            <li className="nav-link" >
                                <Link to={'/admin/uploadVideo'}>Video-Upload</Link>
                                {/* <a href="#">Home</a> */}
                            </li>
                            <li className="nav-link" >
                                <Link to={'/admin/gallery'}>Gallery</Link>
                                {/* <a href="#">Home</a> */}
                            </li>
                            <li className="nav-link" >
                                <Link to={'/admin/usersp'}>Users</Link>
                                {/* <a href="#">Home</a> */}
                            </li>

                            <li className="nav-link" >
                                <a href="#">Employee<i className="fas fa-caret-down" /></a>
                                <div className="dropdown">
                                    <ul>

                                        <li className="dropdown-link">

                                            <Link to={'/admin/employee/add'}>Add</Link>
                                        </li>

                                        <div className="arrow" />
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-link" >
                                <a href="#">Blog<i className="fas fa-caret-down" /></a>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <Link to={"/admin/blog"}>Blogs</Link>
                                        </li>
                                        <li className="dropdown-link">
                                            <Link to={'/admin/blog/create'}>Create</Link>
                                        </li>

                                        <div className="arrow" />
                                    </ul>
                                </div>
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
    );
}

export default AdminNav;