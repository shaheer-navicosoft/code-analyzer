import { ESLint } from "eslint";
import BaseService from "./base.service";
/**
 * Service class for analyzing code using ESLint.
 *
 * @extends BaseService
 */
class AnalyzerService extends BaseService {
  /**
   * Instance of ESLint used for code analysis.
   * @private
   * @readonly
   */
  private readonly eslint: ESLint;

  /**
   * Constructs an instance of AnalyzerService.
   * Initializes the ESLint instance with specific configuration.
   */
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

  /**
   * Analyzes the provided code using ESLint.
   *
   * @param code - The code to be analyzed.
   * @returns A promise that resolves to the analysis results.
   */
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
