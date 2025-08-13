import { Link } from "react-router"
import "./NavBar.css"

export default function NavBar(){
    return(
        <div className="nav-bar">
            <Link to="/profile">Profile</Link>
            <Link to="/home">Home</Link>
        </div>
    )
}