 
 import Message from "../model/message.jsx";


 export const sendmessage = async()=>{

    try{

     const { reciver , text} = req.body;

     const  sender = req.user.id;

     const message = await Message.Create({
        sender,
        reciver,
        text
     })

    }catch(error){
        res.status(404).json({
            message:error.Message
        })
    }
  }

  export const getmessage = async()=>{
     
    try{

         const myid = req.user.id;
         const otheruser =req.params.id;
         const getmessage = await Message.find({
            $or:[
                {
                 sender:myid,
                 reciver:otheruser,
                 },
                 {
                    sender:otheruser,
                    reciver:myid
                 }
            ]
         }).sort({createdAt:1});

         res.json(message);

    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
