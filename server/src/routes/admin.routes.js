import { Router } from "express";
import { allFeedbacks, allUsers, feedbackUser, updateFeedback, updateUserRol, user } from "../controllers/admin.controller.js";
import { adminRequire } from "../middlewares/validateToken.js";

const router = Router();

router.get('/feedbacks', adminRequire, allFeedbacks);
router.get('/feedback/:id', adminRequire, feedbackUser);
router.put('/feedback/:id', adminRequire, updateFeedback);
router.get('/users', adminRequire, allUsers);
router.get('/user/:id', adminRequire, user)
router.put('/user/:id', adminRequire, updateUserRol);

export default router;