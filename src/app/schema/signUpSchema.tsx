import { z } from 'zod'   // zod = Typescript 1st Schema valudation , which does validation before mongoose like earlier checking of conditions

export const userNameValidation = z.string()  // is single then we can verify the schema validations direct
    .min(2, "2 char usi min")
    .max(20, "20 char is max")
    .regex(/.+\@.+\..+/, "UserName should not contain special Character")

export const signUpSchema = z.object({ //  multiple conditions checking i.e Chaining
    username: userNameValidation,
    email: z.string().email({ message: 'invalid email' }),
    password: z.string().min(6, { message: 'min 6 char in password is required' })
})