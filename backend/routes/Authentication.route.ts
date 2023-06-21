import express from "express";
import { createUser } from "../Controller/UserController";
import { IUser } from "../database/Schema/User.schema";

const AuthenticationRoute = express.Router();

AuthenticationRoute.post("/login", (req, res) => {
  const { username, password } = req.body;

  res.send({ username, password, status: "login successfull" });
});

AuthenticationRoute.post("/register", (req, res) => {
  const { username, password } = req.body;

  const user: IUser = createUser(username, password);

  res.send({ username, password, status: "registered", user });
});

export default AuthenticationRoute;
