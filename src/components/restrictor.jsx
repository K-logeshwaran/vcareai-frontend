import { Navigate } from "react-router";
function HomeRestrictor({ children }) {
    const LoggedIn = localStorage.getItem("authToken") != null
    if (LoggedIn)
        return  children 
    else return <Navigate to={"/login"} />

}

export default HomeRestrictor;