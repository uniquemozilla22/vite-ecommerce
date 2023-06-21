import bcrypt from "bcryptjs";
import { config } from "../../config";

export const encryptPassword = async (
  password: string
): Promise<string | undefined> => {
  try {
    const salt: string = await bcrypt.genSalt(config.ENCRYPTSALT);
    const hash: string = await bcrypt.hash(password, salt);

    return hash;
  } catch (error) {
    console.log("Encrypttion failed.");
    console.error(error);
    return;
  }
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  const comparison = await bcrypt.compare(password, hashedPassword);
  console.log(comparison);
  if (comparison) {
    return true;
  }
  return false;
};
