import { ESLint } from 'eslint';

class AnalyzerService {
  private eslint: ESLint;

  constructor() {
     this.eslint = new ESLint({
        overrideConfigFile: true,
        overrideConfig: {
            rules: {
                semi: 'error',
                quotes: ['error', 'single'],
                'no-unused-vars': 'error',
                'no-empty': 'error',
            },
            languageOptions: {
                ecmaVersion: 2018,
                sourceType: "module"
            }
        },
    });
  }

  async analyzeCode(code: string): Promise<any> {
    const results = await this.eslint.lintText(code);
    return results;
  }

}


export default AnalyzerService;