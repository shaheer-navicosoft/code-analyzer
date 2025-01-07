import { Router } from "express";
import AnalyzerController from "../controllers/Analyzer.controller";

const router = Router();

router.post("/analyze", AnalyzerController.analyzeCode);

export default router;
