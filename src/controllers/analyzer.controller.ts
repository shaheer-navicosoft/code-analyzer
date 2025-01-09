import AnalyzerService from "../services/analyzer.service";
import { Request, Response } from "express";
import BaseController from "./base.controller";
class AnalyzerController extends BaseController {
  private readonly analyzerService: AnalyzerService;

  constructor() {
    super();
    this.analyzerService = new AnalyzerService();
  }

  analyzeCode = async (req: Request, res: Response): Promise<void> => {
    try {
      const { code } = req.body;

      if (!code) {
        this.sendError({ res, status: 400, message: "Code field is required" });
      }

      const results = await this.analyzerService.analyzeCode(code);
      this.sendSuccess({
        res,
        message: "Code analyzed successfully",
        data: results,
      });
    } catch (error) {
      this.sendError({ res, status: 500, message: error as string });
    }
  };
}

export default new AnalyzerController();
