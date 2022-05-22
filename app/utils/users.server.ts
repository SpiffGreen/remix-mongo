import { prisma } from "./db.server";
import { RegisterForm } from "./types.server";
import bcrypt from "bcryptjs";

export const createUser = async (user: RegisterForm) => {
  const passwordHash = await bcrypt.hash(user.password, 10);
  const newUser = await prisma.user.create({
    data: {
      passwordHash,
      email: user.email,
      name: user.name
    }
  });
  return { id: newUser.id, email: user.email };
};