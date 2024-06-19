import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { allFeedbacks, getFeedback, newFeedback, updateFeedback, deleteFeedback } from "../controllers/feedbacks.controller.js";
import { feedbackSchema } from "../schemas/auth.schema.js";
import { validateSchema } from "../middlewares/validateSchema.js";

const router = Router();

router.get('/feedbacks', authRequired, allFeedbacks);
router.get('/feedbacks/:id', authRequired, getFeedback);
router.post('/feedbacks', authRequired, validateSchema(feedbackSchema) , newFeedback);
router.put('/feedbacks/:id', authRequired, updateFeedback);
router.delete('/feedbacks/:id', authRequired, deleteFeedback);

export default router;