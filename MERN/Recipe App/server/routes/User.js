import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/User.js";

const router = express.Router();

//Register route
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username: username });

  if (user) return res.json({ message: "User already exists!" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({
    username: username,
    password: hashedPassword,
  });
  await newUser.save();
  res.json({ message: "User has been successfully registered!" });
});

//Login route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const user = await UserModel.findOne({ username: username });

    if (!user) {
      return res.status(401).json({ message: "Username or password is incorrect!" });
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      return res.status(401).json({ message: "Username or password is incorrect!" });
    }

    const token = jwt.sign({ id: user._id }, "secret");
    res.json({ token, userID: user._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});


export { router as userRouter };

//Middleware
export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "secret", (error) => {
      if (error) return res.sendStatus(403);
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
