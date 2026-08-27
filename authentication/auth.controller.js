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

export const Login =async(req,res)=>{

    try{

        const{email,password} = req.body;

        //any filed is empty
        if(!email ||!password){
            res.status(400).json({
                message:"Filed is Empty"
            })
        }

        const user = await User.findOne({email});

        //check user is not there
        if(!user){
            res.ststus(400).json({
                message:"Email is Not Found"
            })
        }

        //check password is correct or not

        const comparepass = await bcrypt.compare(
            password,
            user.password
        );

        if(!comparepass){
            res.status(400).json({
                message:"Password Incorrect"
            })
        };

        //gentrate token
        const token = genratetoken(user._id);

        //store token into cookie
        res.cookie("jwt",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV ==="production",
            sameSite:"strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        return res.status(200).json({
            message:"Login Successful",
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        })
    }catch(error){
        res.status(500).json({
            message:"Server Error",
            error:error.message
        })
    }
}

export const Getcurrentuser = async(req,res)=>{

    try{

        //find user 
        const user = await User.findById(req.user.userId).select("-password");

        if(!user){
            res.ststus(400).json({
                message:"User Not Found"
            })
        };

        res.ststus(200).json({
            user
        });

    }catch(error){
        res.ststus(500).json({
            message:"Server Error",
            error: error.message
        })
    }
}