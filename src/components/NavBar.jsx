import { NavLink } from "react-router"
import "./NavBar.css"

export default function NavBar(){
    return(
        <div className="nav-bar">
            <NavLink className="link" to="/profile">Profile</NavLink>
            <NavLink className="link" to="/">Home</NavLink>
        </div>
    )
}