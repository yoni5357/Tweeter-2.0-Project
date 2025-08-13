import { useState } from "react"
import "./Profile.css"


export default function Profile({handleSave}){
    const [userName, setUserName] = useState("");

    const handleChange = (value) =>{
        setUserName(value);
    }

    return(
        <div className="profile-container">
        <h1>Profile</h1>
        <div>
            <div className="field-set">
                <label htmlFor="userName">User Name</label>
                <input type="text" name="userName" value={userName} onChange={(e) => handleChange(e.target.value)} />
            </div>
            <div className="bottom-section">
                <button onClick={() => handleSave(userName)}>Save</button>
            </div>
        </div>
        </div>

    )
}