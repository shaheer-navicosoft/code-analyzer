import { Router } from "express";
import analyzerController from "../controllers/analyzer.controller";

const router = Router();

router.post("/analyze", analyzerController.analyzeCode);

export default router;
