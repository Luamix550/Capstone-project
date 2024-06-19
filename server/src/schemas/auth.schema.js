import { z } from 'zod';

export const userRegisterSchema = z.object({
    name: z.string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a String'
    }),
    lastname: z.string({
        required_error: 'Lastname is required'
    }),
    email: z.string({
        required_error: 'Email is required'
    }).trim().email({
        required_error: 'Invalid Email'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(8, {
        required_error: 'Password must a be at least 8 characters'
    })
})

export const userLoginSchema = z.object({
    email: z.string({
        required_error: 'Email is required'
    }).trim().email({
        required_error: 'Invalid Email'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(8, {
        required_error: 'Password must a be at least 8 characters'
    })
})