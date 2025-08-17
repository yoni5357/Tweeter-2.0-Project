import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../supabase";

export const AuthContext = createContext(null);

export function AuthProvider({children}){
    const [activeUser, setActiveUser] = useState(null)
    const navigate = useNavigate();

    const handleLogin = async (userEmail,userPassword) =>{
        let { data, error } = await supabase.auth.signInWithPassword({
        email: userEmail,
        password: userPassword
        })
        if(error){
            return error;
        }
        setActiveUser(data.user);
        navigate("/profile");
    }

    const handleLogout = async () => {
        const {error} = await supabase.auth.signOut();
        if (error){
            throw error
        } else {
            setActiveUser(null)
            navigate("/login");
        }
    }


    return (
        <AuthContext 
            value={{activeUser, onLogin:handleLogin, onLogout:handleLogout}}
        >
            {children}
        </AuthContext>
    );
}

export const useAuth = () => useContext(AuthContext);