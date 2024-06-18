import Router from 'express';
import { registerUser, loginUser, profile } from '../controllers/auth.controllers.js';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', profile);

export default router;