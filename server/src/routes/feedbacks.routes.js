import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { allFeedbacks, filterFeedbackDate, newFeedback, updateFeedback, deleteFeedback } from "../controllers/feedbacks.controller.js";
import { feedbackSchema } from "../schemas/allschemas.js";
import { validateSchema } from "../middlewares/validateSchema.js";

const router = Router();

router.get('/', authRequired, allFeedbacks);
router.get('/filter', authRequired, filterFeedbackDate);
router.post('/', authRequired, validateSchema(feedbackSchema), newFeedback);
router.put('/:id', authRequired, updateFeedback);
router.delete('/:id', authRequired, deleteFeedback);

export default router;