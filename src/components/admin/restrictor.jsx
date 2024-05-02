import { Navigate } from "react-router";
function AdminRestrictor({children}) {
    const LoggedIn = sessionStorage.getItem("adminToken") != null
    if (LoggedIn)
        return children
    else return <Navigate to={"/admin/login"} />

}

export default AdminRestrictor;