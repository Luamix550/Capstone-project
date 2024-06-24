import { Router } from "express";
import { allFeedbacks, feedbackUser, updateFeedback } from "../controllers/admin.controller.js";

const router = Router();

router.get('/', allFeedbacks);
router.get('/:id', feedbackUser);
router.put('/:id', updateFeedback);

export default router;