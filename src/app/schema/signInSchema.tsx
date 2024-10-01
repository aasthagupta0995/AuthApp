
import {z} from 'zod'

export const signInSchema = z.object({ //  multiple conditions checking i.e Chaining
    email: z.string().email({ message: 'invalid email' }),  // can sue identifies as a key 
    password: z.string().min(6, { message: 'min 6 char in password is required' })
})