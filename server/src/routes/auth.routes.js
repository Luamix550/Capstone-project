import Router from 'express';
import { registerUser, loginUser, profile, logout } from '../controllers/auth.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { userRegisterSchema, userLoginSchema} from '../schemas/auth.schema.js';

const router = Router();

router.post('/register', validateSchema(userRegisterSchema), registerUser);
router.post('/login', validateSchema(userLoginSchema), loginUser);
router.post('/logout', logout);
router.get('/profile', authRequired, profile);

export default router;