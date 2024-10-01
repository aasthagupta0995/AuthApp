
import {z} from 'zod'

export const AcceptMessage = z.object({ //  multiple conditions checking i.e Chaining
    acceptMessages: z.boolean()
})