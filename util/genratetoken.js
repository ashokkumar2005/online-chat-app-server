import JWT from "jsonwebtoken";

const GentrateToken = (userid, res) => {
  const token = JWT.sign({ userId: userid }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  if (res) {
    res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
  }

  return token;
};

export default GentrateToken;
