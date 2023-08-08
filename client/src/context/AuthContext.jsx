import { createContext, useContext, useState } from "react";
import { registerRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth=()=>{
const context = useContext(AuthContext);
    if(!context){
        throw new Error ("useAuth must be used within an AuthProvider");
    }
    return context;
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticathed, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);


    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res)
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            setErrors(error.response.data);
            console.log(error)
        }
    }
    return(
    <AuthContext.Provider value={{
        signup,
        user,
        isAuthenticathed,
        errors
    }}>
        {children}
    </AuthContext.Provider>
    )
}