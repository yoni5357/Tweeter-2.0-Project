import { useState } from "react"


export default function Profile({handleSave}){
    const [userName, setUserName] = useState("");

    const handleChange = (value) =>{
        setUserName(value);
    }

    return(
        <>
        <h1>Profile</h1>
        <div>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" value={userName} onChange={(e) => handleChange(e.target.value)} />
            <div className="bottom-section">
                <button onClick={() => handleSave(userName)}>Save</button>
            </div>
        </div>
        </>

    )
}