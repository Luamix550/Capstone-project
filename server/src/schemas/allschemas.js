import { z } from 'zod';

export const userRegisterSchema = z.object({
    name: z.string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a String'
    })
    .regex(/^[a-zA-Z\s]+$/, {
        message: 'The name can only contain letters.'
    }),
    lastname: z.string({
        required_error: 'Lastname is required'
    })
    .regex(/^[a-zA-Z\s]+$/, {
        message: 'The last name can only contain letters.'
    }),
    email: z.string({
        required_error: 'Email is required'
    })
    .trim()
    .email({
        required_error: 'Invalid Email'
    }),
    password: z.string({
        required_error: 'Password is required'
    })
    .regex(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/, {
        message: 'Password requirements include length between 8 to 16 characters, with at least one digit, one lowercase letter, and one uppercase letter.'
    })
})

export const userLoginSchema = z.object({
    email: z.string({
        required_error: 'Email is required'
    })
    .trim()
    .email({
        required_error: 'Invalid Email'
    }),
    password: z.string({
        required_error: 'Password is required'
    })
    .regex(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/, {
        message: 'Password requirements include length between 8 to 16 characters, with at least one digit, one lowercase letter, and one uppercase letter.'
    })
})

export const feedbackSchema = z.object({
    title: z.string({
        required_error: 'Title is required'
    })
    .regex(/[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}a-zA-Z ]*/ug)
    .max(50, {
        message: 'The maximum title length should be 50 characters',
    }),

    description: z.string({
        required_error: 'Description is required',
    })
    .regex(/[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}a-zA-Z ]*/ug)
    .max(200, {
        message: 'The maximum description length should be 200 characters',
    }),
});