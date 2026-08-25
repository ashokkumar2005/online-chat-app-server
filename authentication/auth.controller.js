import User from "../model/user.js";
import bcrypt from "bcrypt";
import genratetoken from "../util/genratetoken.js";

export const Register = async(req,res)=>{

    try{

        const{name,email,passsword} = req.body;

        //check any filed is empty
        if(!name || !email||!passsword){
            return res.ststus(400).json({
                message:" Filed is Empty"
            });
        };

        //if email already exists

        const existsemail = await User.fineOne({email});

        if(existsemail){
            return res.status(400).json({
                message:"Email already exists"
            });
        };

        //Hash the password

        const HashPassword = await bcrypt.hash(passsword,10);

        //create user
        const user = User.Create({
            name,
            email,
            passsword:HashPassword

        });
        //Gentrate JWT 
        genratetoken(user._id, res);

        //send the sucess responce

        res.status(201).json({
            message:"User Created Successfully",
            user:{
                _id:user._id,
                name:user.name,
                email:user.email
            }
        });
    }catch(error){
        res.ststus(500).json({
            message:"Server error",
            error:error.message
        })

    }

}