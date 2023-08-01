import { z } from 'zod'

export const registerSchema = z.object({
    username : z.string({
        required_error: 'Username is a required field'
    }),
    email: z.string({
        required_error: 'Email Adress is a required field'

    }).email({
        required_error:' Invalid email'
    }),
    password: z.string({
        required_error:'Password id required field'
    }).min(6,{
        message: 'Password must be at least 6 characters long'
    })
});

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email Adress is a required field'

    }).email({
        required_error:' Invalid email'
    }),
    password: z.string({
        required_error:'Password id required field'
    }).min(6,{
        message: 'Password must be at least 6 characters long'
    })
});