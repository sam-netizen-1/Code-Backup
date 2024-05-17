import { compare, genSalt, hash, compareSync, genSaltSync, hashSync } from 'bcryptjs';

export const comparePassword = (password: string, hashedPassword: string) => {
   return compareSync(password, hashedPassword);
}

export const createHash = (password: string) => {
   try {
    const salt = genSaltSync();

    const hashedPassword =  hashSync(password, salt);

    return hashedPassword;

   }
    catch (error) {
      throw error;
   }
}