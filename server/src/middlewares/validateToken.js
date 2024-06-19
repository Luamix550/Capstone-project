import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config/config.js';

export const authRequired = (req, res, next) => {
    const { token } = req.cookies;
    
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    jwt.verify(token, TOKEN_SECRET, (error, token) => {
        if (error) res.status(403).json({ message: 'Invalid Token' });
        req.userId = token.id;
    })
    next();
    res.status(200);
}