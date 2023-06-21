import express from "express";
import { createUser } from "../Controller/UserController";
import { IUser } from "../database/Schema/User.schema";
import { encryptPassword } from "../services/passwordManager.services";

const AuthenticationRoute = express.Router();

AuthenticationRoute.post("/login", (req, res) => {
  const { username, password } = req.body;

  res.send({ username, password, status: "login successfull" });
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
