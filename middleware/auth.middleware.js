import JWT from "jsonwebtoken";
import User from "../model/user.js";


 export const AuthUser = async(req,res,next)=>{

        try{

            const token = req.cookies.Jwt;

            if(!token){
                res.status(401).json({
                    message:"Unauthorized No-Token"
                })
            }

          //decode the token 

            const decoded = JWT.verify(token,process.env.JWT_SECRET);

            //check the docoded token exists

            if(!decoded){
                 res.status(401).json({
                    message:"Unauthorized Invalid-token"
                 })
            };

            ////find user from database use decoeded userid

            const user = await User.findById(decoded.UserId).select("password");

            ////check user exists

            if(!user){
                res.status(404).json({
                    message:"User Not Found"
                })
            }

            req.user = user; // attach user to the request

            //IT GOOES TO THE NEXT MIDDLEWARE
            
            next();
        }catch(error){
            console.log("User Authentication Middleware Error:", error.message);
            res.status(401).json({
                message:"Unauthorized"
            });
        };
};


