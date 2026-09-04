import Message from "../model/message.js";
import User from "../model/user.js";
import { getIo, getReciverSocketId } from "../socket/socket.js";

export const sendmessage = async (req, res) => {
  try {
    const { text } = req.body;
    const receiverId = req.params.reciverId;
    const senderId = req.user.userId;

    if (!text || !text.trim()) {
      return res.status(400).json({ message: "Message text is required" });
    }

    if (receiverId === String(senderId)) {
      return res.status(400).json({ message: "You cannot message yourself" });
    }

    const receiverExists = await User.exists({ _id: receiverId });
    if (!receiverExists) {
      return res.status(404).json({ message: "Recipient not found" });
    }

    const message = await Message.create({
      sender: senderId,
      reciver: receiverId,
      text: text.trim(),
    });

    const targetSocketId = getReciverSocketId(receiverId);
    if (targetSocketId) {
      const io = getIo();
      if (io) {
        io.to(targetSocketId).emit("receiveMessage", message);
      }
    }

    return res.status(201).json(message);
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid recipient id" });
    }
    return res.status(500).json({
      message: "Failed to send message",
      error: error.message,
    });
  }
};

export const getmessage = async (req, res) => {
  try {
    const myId = req.user.userId;
    const otherUserId = req.params.userId;

    const messages = await Message.find({
      $or: [
        { sender: myId, reciver: otherUserId },
        { sender: otherUserId, reciver: myId },
      ],
    }).sort({ createdAt: 1 });

    return res.status(200).json(messages);
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid user id" });
    }
    return res.status(500).json({
      message: "Failed to fetch messages",
      error: error.message,
    });
  }
};
