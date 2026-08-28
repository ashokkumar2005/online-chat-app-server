import User from "../model/user.js";

const GetUsers = async (req, res) => {
    try {
        const users = await User.find({
            _id: { $ne: req.user.id }
        }).select("-password");

        res.status(200).json({
            users
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

export {
    GetUsers
};