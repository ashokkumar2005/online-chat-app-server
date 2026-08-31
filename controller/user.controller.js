import User from "../model/user.js";

const GetUsers = async (req, res) => {
  try {
    const users = await User.find({
      _id: { $ne: req.user.userId },
    }).select("-password");

    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

export { GetUsers };