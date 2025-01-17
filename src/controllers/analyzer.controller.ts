import AnalyzerService from "../services/analyzer.service";
import { Request, Response } from "express";
import BaseController from "./base.controller";
/**
 * Controller class responsible for handling code analysis requests.
 * Extends the BaseController class.
 */

class AnalyzerController extends BaseController {
  /**
   * Service instance used for analyzing code.
   * @private
   * @readonly
   */
  private readonly analyzerService: AnalyzerService;

  /**
   * Initializes a new instance of the AnalyzerController class.
   * Calls the constructor of the BaseController class and initializes the analyzerService.
   */
  constructor() {
    super();
    this.analyzerService = new AnalyzerService();
  }

  /**
   * Handles the code analysis request.
   * Expects a request body containing the code to be analyzed.
   * Sends a success response with the analysis results or an error response if the analysis fails.
   *
   * @param req - The request object.
   * @param res - The response object.
   * @returns A promise that resolves to void.
   */
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
