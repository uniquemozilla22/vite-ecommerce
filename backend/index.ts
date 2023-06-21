import express from "express";
import { connectDatabase } from "./database/connection";
import { config } from "./../config.ts";
import AuthenticationRoute from "./routes/Authentication.route.ts";

const app = express();

app.use(express.json());

connectDatabase(config.CONNECTION_STRING_MONGODB);

app.use("/user", AuthenticationRoute);

const server = app.listen(8000, () =>
  console.log("Server has started at 8000")
);

process.on("unhandledRejection", (reason) => {
  express.response.send(reason);

  server.close(() => console.log("server closed"));
});
