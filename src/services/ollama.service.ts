import BaseService from "./base.service";
import axios from "axios";
import { PROMPT_TEMPLATE } from "../constants/prompts";
class OllamaService extends BaseService {
  private readonly _baseUrl = "http://127.0.0.1:11434";
  private readonly _model = "gemma:2b";
  constructor() {
    super();
  }

  aiCodeReview = async (code: string) => {
    if (!code || typeof code !== "string") {
      throw new Error("Invalid code input");
    }

    try {
      const response = await axios.post(`${this._baseUrl}/api/generate`, {
        model: this._model,
        prompt: PROMPT_TEMPLATE.replace("{code}", code),
        stream: false,
        options: {
          temperature: 0,
        },
        format: {
          type: "object",
          properties: {
            issues: {
              type: "string",
            },
            suggestions: {
              type: "string",
            },
          },
          required: ["issues", "suggestions"],
        },
      });

      return response.data; // Ensure response is utilized
    } catch (error) {
      console.error("Error during AI code review:", error); // Log error for debugging
      throw new Error("Code review failed");
    }
  };
}

export default OllamaService;
