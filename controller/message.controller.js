import Message from "../model/message.js";

export const sendmessage = async (req, res) => {
  try {
    const { text } = req.body;
    const receiverId = req.params.reciverId;
    const senderId = req.user.userId;

    if (!text || !text.trim()) {
      return res.status(400).json({ message: "Message text is required" });
    }

    const message = await Message.create({
      sender: senderId,
      reciver: receiverId,
      text: text.trim(),
    });

    return res.status(201).json(message);
  } catch (error) {
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
    })
      .sort({ createdAt: 1 })
      .populate("sender", "name email")
      .populate("reciver", "name email");

    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch messages",
      error: error.message,
    });
  }
};
