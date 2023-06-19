import mongoose from "mongoose";

export const connectDatabase = async (connectionString: string) => {
  const connection = await mongoose.connect(connectionString);

  if (connection) {
    console.log("Database connected");
  }
};
