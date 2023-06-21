import { IUser, User } from "../database/Schema/User.schema";

export const createUser = async (
  username: string,
  password: string,
  email: string
) => {
  const user = new User<IUser>({ username, password, email });

  await user.save();

  return user;
};
