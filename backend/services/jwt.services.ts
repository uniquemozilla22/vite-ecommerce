import jwt from "jsonwebtoken";
import { config } from "../../config";

export const createToken = (data: any) => {
  const token = jwt.sign({ ...data }, config.TOKEN_KEY, { expiresIn: "1h" });
  return token;
};
