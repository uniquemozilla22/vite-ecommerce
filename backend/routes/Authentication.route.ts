import express from "express";
import { createUser } from "../Controller/UserController";
import { IUser, User } from "../database/Schema/User.schema";
import {
  comparePassword,
  encryptPassword,
} from "../services/passwordManager.services";
import { createToken } from "../services/jwt.services";

const AuthenticationRoute = express.Router();

AuthenticationRoute.get("/user", (_req, res) => {
  res.send("<h1>I am certainly not forgetting about my students </h1>");
});

AuthenticationRoute.post("/login", async (req, res) => {
  const { email, username, password } = req.body;

  let user;
  if (email) {
    user = await User.findOne({ email });
  } else if (username) {
    user = await User.findOne({ username });
  } else {
    user = null;
    res.send({ status: "Login Needs a email or a username" });
    return;
  }

  if (user) {
    const doesPasswordMatch = await comparePassword(password, user.password);
    if (doesPasswordMatch) {
      res.send({ token: createToken(user), status: "login successfull" });
    } else {
      res.send({ status: "Login failed Password dont match" });
    }
  }
});

AuthenticationRoute.post("/register", async (req, res) => {
  const { username, password, email } = req.body;

  const hashedPassword: string | undefined = await encryptPassword(password);

  if (hashedPassword) {
    const user: IUser = await createUser(username, hashedPassword, email);
    res.send({ username, password, status: "registered", user });
  } else {
    res.send({ status: "Rejected register" });
  }
});

export default AuthenticationRoute;
