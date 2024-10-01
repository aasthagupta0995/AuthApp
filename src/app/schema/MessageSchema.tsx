
import {z} from 'zod'

export const MessageSchema = z.object({ //  multiple conditions checking i.e Chaining
content:z.string().min(10,{message:'10 is min char'}).max(300, {message:'300 is max char'})

})