import mongoose from "mongoose";

export interface IUser {
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema<IUser>({
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
