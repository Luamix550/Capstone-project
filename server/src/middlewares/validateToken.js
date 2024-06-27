import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config/config.js';

export const authRequired = (req, res, next) => {
    const { token } = req.cookies;
    
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    jwt.verify(token, TOKEN_SECRET, (error, decodedToken) => {
        if (error) return res.status(403).json({ message: 'Invalid Token' });
        req.userId = decodedToken.id;
        next();
    });
};

export const adminRequire = (req, res, next) => {
    const { token } = req.cookies;
    
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
    jwt.verify(token, TOKEN_SECRET, (error, decodedToken) => {
        if (error) return res.status(403).json({ message: 'Invalid Token' });
        if (decodedToken.rol === 'User') return res.status(401).json({ message: 'Unauthorized' });
        req.userId = decodedToken.id;
        next();
    })
}