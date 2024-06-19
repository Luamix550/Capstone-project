import { z } from 'zod';

export const userRegisterSchema = z.object({
    name: z.string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a String'
    }).regex(/^[a-zA-Z]+$/, 'The name can only contain letters.'),
    lastname: z.string({
        required_error: 'Lastname is required'
    }).regex(/^[a-zA-Z]+$/, 'The last name can only contain letters.'),
    email: z.string({
        required_error: 'Email is required'
    }).trim().email({
        required_error: 'Invalid Email'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).regex(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/, 'Password requirements include length between 8 to 16 characters, with at least one digit, one lowercase letter, and one uppercase letter.'
    )
})

export const userLoginSchema = z.object({
    email: z.string({
        required_error: 'Email is required'
    }).trim().email({
        required_error: 'Invalid Email'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).regex(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/, 'Password requirements include length between 8 to 16 characters, with at least one digit, one lowercase letter, and one uppercase letter.')
})

export const feedbackSchema = z.object({
    title: z.string({
        required_error: 'Title is required'
    }).max(100, 'The maximum title length should be 100 characters'),
    description: z.string({
        required_error: 'Description is required'
    }).max(300, 'The maximum description length should be 300 characters'),
})