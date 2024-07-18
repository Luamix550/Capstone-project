import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { allFeedbacks, filterFeedbackDate, newFeedback, updateFeedback, getFeedback } from "../controllers/feedbacks.controller.js";
import { feedbackSchema } from "../schemas/allschemas.js";
import { validateSchema } from "../middlewares/validateSchema.js";

const router = Router();

router.get('/', authRequired, allFeedbacks);
router.post('/filter', authRequired, filterFeedbackDate);
router.post('/', authRequired, validateSchema(feedbackSchema), newFeedback);
router.put('/:id', authRequired, updateFeedback);
router.get('/:id', getFeedback);

export default router;