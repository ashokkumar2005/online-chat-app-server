 import dp from "mongoose";

 const connectdb = async()=>{

    try{
         await db.connectdb(process.env.MONGO_URI)
         console.log( "Mongodb is Connected Sucssfuly");

    }catch(error){
        console.log(error.message);
        process.exit(1);
    }

 }
 export default connectdb;
