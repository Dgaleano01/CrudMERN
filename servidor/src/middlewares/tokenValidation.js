import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const requiredAuth = (req, res, next) => {
    const { token } = req.cookies;
    if(!token)
    return res.status(401).json({ message : "No token, Authotization Denied" })

    Jwt.verify(token,TOKEN_SECRET,(err,user)=>{
        if(err) return res.status(400).json({message:'No valid token'})
        req.user=user;
        next()
    })
}
