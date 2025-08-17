import { NavLink } from "react-router"
import "./NavBar.css"
import { useAuth } from "../auth/AuthProvider"

export default function NavBar(){
    const {onLogout} = useAuth();

    return(
        <div className="nav-bar">
            <NavLink className="link" to="/login">Login</NavLink>
            <NavLink className="link" to="/profile">Profile</NavLink>
            <NavLink id="sec-to-last" className="link" to="/">Home</NavLink>
            <a id="last" className="link" onClick={onLogout}>Logout</a>
        </div>
    )
}