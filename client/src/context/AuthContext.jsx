import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest, registerRequest } from "../api/auth";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth=()=>{
const context = useContext(AuthContext);
    if(!context){
        throw new Error ("useAuth must be used within an AuthProvider");
    }
    return context;
}

// eslint-disable-next-line react/prop-types
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

    const signin = async (user) =>{
        try {
            const res = await loginRequest(user);
            console.log(res.data);
            setIsAuthenticated(true);
            setUser(res.data);
        } catch (error) {
            console.log(error)
            if(Array.isArray(error.response.data)){
                setErrors(error.response.data)
            }
            setErrors([error.response.data.message]);
        }
    }

    useEffect(()=>{
        if(errors.length>0){
            const timer = setTimeout(()=>{
                setErrors([]);
            },5000)
            return()=>clearTimeout(timer);
        }
    })

    return(
    <AuthContext.Provider value={{
        signup,
        signin,
        user,
        isAuthenticathed,
        errors
    }}>
        {children}
    </AuthContext.Provider>
    )
}