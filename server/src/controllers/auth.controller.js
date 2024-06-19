import User from '../models/user.model.js'
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../lib/createToken.js';
import { validationResult } from 'express-validator';

/**
 * Register a new user.
 * 
 * Endpoint: POST /api/register
 * 
 * @param {string} req.body.name - User's first name.
 * @param {string} req.body.lastname - User's last name.
 * @param {string} req.body.email - Unique email address of the user.
 * @param {string} req.body.password - User's password.
 * 
 * @returns {Object} User data on successful registration:
 * {
 *    id: string,
 *    name: string,
 *    lastname: string,
 *    email: string,
 *    createdAt: Date,
 *    updatedAt: Date
 * }
 * 
 * @throws {400} If any required parameters are missing or invalid.
 * @throws {500} If there is a server error during registration.
 */
export const registerUser = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const { name, lastname, email, password } = req.body;
        const passwordHash = await bcrypt.hash(password, 12);

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
        return res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
}

/**
 * Authenticate a user.
 * 
 * Endpoint: POST /api/login
 * 
 * @param {string} req.body.email - User's email address.
 * @param {string} req.body.password - User's password.
 * 
 * @returns {Object} User data on successful authentication:
 * {
 *    name: string,
 *    lastname: string,
 *    email: string,
 *    createdAt: Date,
 *    updatedAt: Date
 * }
 * 
 * @throws {400} If any required parameters are missing or invalid.
 * @throws {404} If the user is not found.
 * @throws {403} If the password is incorrect.
 * @throws {500} If there is a server error during authentication.
 */
export const loginUser = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        const { email, password } = req.body;

        const userFound = await User.findOne({ email });
        if (!userFound) return res.status(404).json({ status: 'error', message: 'User not found' });

        const isPasswordValid = await bcrypt.compare(password, userFound.password);
        if (!isPasswordValid) return res.status(403).json({ status: 'error', message: 'Incorrect password' });

        const token = await createAccessToken({ id: userFound._id });
        res.cookie('token', token);
        
        res.json({
            name: userFound.name,
            lastname: userFound.lastname,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        });
    }
    catch (error) {
        console.error('Error in registerUser:', error);
        return res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
}

/**
 * Logout the current user by clearing the authentication token.
 * 
 * Endpoint: GET /api/logout
 * 
 * @returns {number} Status code 200 indicating successful logout.
 */
export const logout = async (req, res) => {
    res.cookie('token', '', {
        expires: new Date(0)
    });
    res.sendStatus(200);
} 

/**
 * Get profile information of the authenticated user.
 * 
 * Endpoint: GET /api/profile
 * 
 * @returns {Object} Profile information of the authenticated user:
 * {
 *    name: string,
 *    lastname: string,
 *    email: string,
 *    createdAt: Date,
 *    updatedAt: Date
 * }
 * 
 * @throws {401} If the user is not authenticated.
 * @throws {500} If there is a server error while fetching profile information.
 */
export const profile = async (req, res) => {
    const userId = req.userId;
    const userFound = await User.findById({ _id: userId });

    res.json({
        name: userFound.name,
        lastname: userFound.lastname,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
    });
}