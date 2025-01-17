import OllamaService from "../services/ollama.service";
import BaseController from "./base.controller";
import { Response, Request } from "express";

class AiCodeReviewerController extends BaseController {
  private readonly ollamaService: OllamaService;
  constructor() {
    super();
    this.ollamaService = new OllamaService();
  }

  reviewCode = async (req: Request, res: Response) => {
    try {
      const { code } = req.body;
      if (!code && typeof code !== "string") {
        this.sendError({
          res,
          status: 403,
          message: "Code field is required",
        });
      }
      const response = await this.ollamaService.aiCodeReview(code);

      this.sendSuccess({
        message: "Code review generated successfully!",
        data: response,
        res,
      });
    } catch (error) {
      this.sendError({
        res,
        message: String(error),
        status: 500,
      });
    }
  };
}

export default new AiCodeReviewerController();
