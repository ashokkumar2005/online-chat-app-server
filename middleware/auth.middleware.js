import JWT from "jsonwebtoken";
import User from "../model/user.js";

export const AuthUser = async (req, res, next) => {
  try {
    const token = req.cookies?.jwt || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const decoded = JWT.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = {
      userId: user._id,
      id: user._id,
      name: user.name,
      email: user.email,
    };

    next();
  } catch (error) {
    console.log("User Authentication Middleware Error:", error.message);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

