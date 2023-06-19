import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    required: true,
    type: "string",
  },
  password: {
    required: true,
    type: "string",
  },
});

export const User = mongoose.model("users", UserSchema);
