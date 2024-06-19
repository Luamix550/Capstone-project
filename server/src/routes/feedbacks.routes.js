import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { allFeedbacks, getFeedback, newFeedback, updateFeedback, deleteFeedback } from "../controllers/feedbacks.controller.js";

const router = Router();

router.get('/feedbacks', authRequired, allFeedbacks);
router.get('/feedbacks/:id', authRequired, getFeedback);
router.post('/feedbacks', authRequired, newFeedback);
router.put('/feedbacks/:id', authRequired, updateFeedback);
router.delete('/feedbacks/:id', authRequired, deleteFeedback);

export default router;