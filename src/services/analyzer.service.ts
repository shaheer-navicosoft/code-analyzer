import { ESLint } from "eslint";
import BaseService from "./base.service";
class AnalyzerService extends BaseService {
  private readonly eslint: ESLint;
  constructor() {
    super();
    this.eslint = new ESLint({
      overrideConfigFile: true,
      overrideConfig: {
        rules: {
          semi: "error",
          quotes: ["error", "single"],
          "no-unused-vars": "error",
          "no-empty": "error",
        },
        languageOptions: {
          ecmaVersion: 2018,
          sourceType: "module",
        },
      },
    });
  }

  async analyzeCode(code: string): Promise<any> {
    try {
      const results = await this.eslint.lintText(code);
      return results;
    } catch (error) {
      this.sendError(error as string);
    }
  }
}

export default AnalyzerService;
