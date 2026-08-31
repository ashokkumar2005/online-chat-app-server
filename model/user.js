import mongoose from "mongoose";

const Usermodel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilepic: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const User = new mongoose.model("User", Usermodel);

export default User;