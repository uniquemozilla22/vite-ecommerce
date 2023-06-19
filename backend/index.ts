import express from "express";
import { connectDatabase } from "./database/connection";
import { config } from "./../config.ts";

const app = express();

connectDatabase(config.CONNECTION_STRING_MONGODB);

app.listen(8000, () => console.log("Server has started at 8000"));
