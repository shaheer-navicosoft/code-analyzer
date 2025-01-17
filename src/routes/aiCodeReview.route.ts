import aiCodeReviewController from "../controllers/aiCodeReview.controller";
import { Router } from "express";

const router = Router();

router.post("/ai/review", aiCodeReviewController.reviewCode);

export default router;
