import AnalyzerService from "../services/analyzer.service";
import { Request, Response } from "express";

class AnalyzerController {
  private readonly analyzerService: AnalyzerService;

  constructor() {
    this.analyzerService = new AnalyzerService();
  }

  analyzeCode = async (req: Request, res: Response): Promise<void> => {
    try {
      const { code } = req.body;

      if (!code) {
         res.status(400).json({ error: "Code snippet is required." });
         return;
      }

      const results = await this.analyzerService.analyzeCode(code);
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while analyzing the code. " + error });
    }
  };
}

export default new AnalyzerController();
