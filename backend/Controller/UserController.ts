import { IUser, User } from "../database/Schema/User.schema";

export const createUser = (username: string, password: string) => {
  const user: IUser = new User({ username, password });

  return user;
};
