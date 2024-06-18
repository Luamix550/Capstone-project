import User from '../models/user.model.js'
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../lib/createToken.js';
import { validationResult } from 'express-validator';

export const registerUser = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const { name, lastname, email, password } = req.body;
        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = User({
            name,
            lastname,
            email,
            password: passwordHash,
        });

        const userSave = await newUser.save();
        const token = await createAccessToken({ id: userSave._id });
        res.cookie('token', token);
        
        res.json({
            id: userSave._id,
            name: userSave.name,
            lastname: userSave.lastname,
            email: userSave.email,
            createdAt: userSave.createdAt,
            updatedAt: userSave.updatedAt,
        });
    }
    catch (error) {
        console.error('Error in registerUser:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const loginUser = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        const { email, password } = req.body;

        const userFound = await User.findOne({ email });
        if (!userFound) return res.status(404).json({ message: 'User not found' });

        const isPasswordValid = await bcrypt.compare(password, userFound.password);
        if (!isPasswordValid) return res.status(403).json({ message: 'Password incorrect' });

        const token = await createAccessToken({ id: userFound._id });
        res.cookie('token', token);
        
        res.json({
            id: userFound._id,
            name: userFound.name,
            lastname: userFound.lastname,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        });
    }
    catch (error) {
        console.error('Error in registerUser:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const profile = async (req, res) => {
    res.send('profile')
}