import { useState } from "react"
import { useAuth } from "../auth/AuthProvider";

export default function Login(){

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const {onLogin} = useAuth();

    const loginUser = async () =>{  
        setErrorMsg("");      
        setLoading(true);
        const error = await onLogin(userEmail, userPassword);
        if(error){
            setErrorMsg(error.message);
        }
        setLoading(false);
    } 

    return(
        <>
        <h1>Login</h1>
        <div className="login-container">
            <div className="field-set">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    autoComplete="email"
                />
            </div>
            <div className="field-set">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                    autoComplete="current-password"
                />
            </div>
            <div className="button-container">
                <button className="login-button" onClick={loginUser}>
                    {loading ? "Logging in…" : "Login"}
                </button>
            </div>
            {errorMsg && <p style={{ color: "crimson" }}>{errorMsg}</p>}
        </div>
        </>
    )
}