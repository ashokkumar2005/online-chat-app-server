 import mongoose from "mongoose";

 const Usermodel = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            uniqe:true
        },
        email:{
            type:String,
            required:true,
            uniqe:true
        },
        password:{
            type:String,
            required:true
        },
        profilepic:{
            type:String,
            default:""
        }},
    {
         timestamps:true
    })
 const User = new mongoose.model("User", Usermodel);

 export default User;