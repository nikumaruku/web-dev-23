import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/User.js";

const router = express.Router();

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

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username: username });

  if (!user) return res.json({ message: "User does not exist!" });

  const passwordValid = await bcrypt.compare(password, user.password);

  if (!passwordValid)
    return res.json({ message: "Username or password is incorrect!" });

  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userID: user._id });
});

export { router as userRouter };
