import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config/config.js';

export const createAccessToken = (userId) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
        userId,
        TOKEN_SECRET, {
            expiresIn: '1d'
        }, (error, token) => {
            if (error) reject(error);
            resolve(token);
        })
    })
}