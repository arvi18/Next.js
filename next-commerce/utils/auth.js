import jwt from "jsonwebtoken";

const signToken = (user) => {
  //Synchronously sign the given payload into a JSON Web Token string
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },

    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};

export { signToken };
