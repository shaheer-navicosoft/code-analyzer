import { Router } from "express";
import AnalyzerController from "../controllers/analyzer.controller";

const router = Router();

router.post("/analyze", AnalyzerController.analyzeCode);

export default router;
