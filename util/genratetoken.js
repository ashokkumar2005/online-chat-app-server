
import JWT from "jsonwebtoken";

const GentrateToken = (userid,res)=>{

    const token =JWT.sign(
        {userId},
        process.env.JWT_SECRET,
        {
            expiresIn:"7d"
        });
    
    res.cookie("JWT" ,token ,{
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite:"strict" ,
        secure: process.env.NODE_ENV === "production"
    } )
}

export default GentrateToken;
