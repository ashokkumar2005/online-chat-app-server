
import mongoose from "mongoose";

const Messagemodel = new mongoose.Schema(
    {
        sender:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        reciver:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        text:{
           type:String,
           required:true
        }
    },
    {
        timestamps:true
    }
);

const Message = new mongoose.model( "Message", Messagemodel);

export default Message;