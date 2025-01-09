import BaseService from "./base.service";

class AuthService extends BaseService {
  login = async (email: string, password: string): Promise<string> => {
    // login logic here
    if (email !== "" && password !== "") {
    } else {
      this.sendError("Email and password are required");
    }
    return "Login successful";
  };

  register = async (email: string, password: string): Promise<string> => {
    // register logic here
    return "Registration successful";
  };

  forgotPassword = async (email: string): Promise<string> => {
    // forgot password logic here
    return "Password reset link sent to your email";
  };

  resetPassword = async (email: string, password: string): Promise<string> => {
    // reset password logic here
    return "Password reset successful";
  };
}

export default AuthService;
