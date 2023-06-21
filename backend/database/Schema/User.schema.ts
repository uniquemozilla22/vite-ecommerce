import mongoose from "mongoose";

export interface IUser {
  username: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema<IUser>({
  username: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

export const User = mongoose.model<IUser>("users", UserSchema);
