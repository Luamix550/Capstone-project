import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config/config.js';

export const createAccessToken = (user) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
        user,
        TOKEN_SECRET, {
            expiresIn: '1d'
        }, (error, token) => {
            if (error) reject(error);
            resolve(token);
        })
    })
}