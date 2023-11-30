"use server";
import { input } from "@/components/general/Auth/AuthModalInputs";
import { getServerSession } from "next-auth/next";
import validator from "validator";
import { prisma } from "../prisma";
import { Prisma } from "@prisma/client";
import bcrypt from "bcrypt";
export async function CreateAccount(input: input) {
  let { firstName, lastName, city, email, password, phone } = input;
  const errors: string[] = [];
  const validationSchema = [
    {
      valid: validator.isLength(firstName, { min: 1 }),
      errorMessage: "first name cannot be empty",
    },
    {
      valid: validator.isLength(lastName, { min: 1 }),
      errorMessage: "last name cannot be empty",
    },
    {
      valid: validator.isLength(city, { min: 3 }),
      errorMessage: "City needs to have at least 3 characters",
    },
    {
      valid: validator.isEmail(email),
      errorMessage: "Email needs to be a valid email address",
    },
    // {
    //   valid: validator.isStrongPassword(password),
    //   errorMessage: "Password is not strong enough",
    // },
    {
      valid: validator.isMobilePhone(phone),
      errorMessage: "Phone needs to be a valid international phone number",
    },
  ];
  validationSchema.forEach((check) => {
    if (!check.valid) errors.push(check.errorMessage);
  });
  if (errors.length > 0) return { errors, errorCode: 0 };
  const session = await getServerSession();
  if (session) return { errors: ["User is already logged in"], errorCode: 1 };
  try {
    password = await (bcrypt.hash(password, 10) as Promise<string>);
    const user = await prisma.user.create({
      data: input,
      select: { password: false, id: true },
    });
    return { errors, user };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (error.code === "P2002") {
        return { errors: ["Email already exists."], errorCode: 2 };
      }
    }
    return { errors: ["Internal Server Error"], errorCode: 500 };
  }
}
