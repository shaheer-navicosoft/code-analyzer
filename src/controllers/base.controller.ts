import { Response } from "express";

interface ErrorResponse {
  res: Response;
  status: number;
  message: string;
}
interface SuccessResponse {
  res: Response;
  message: string;
  data?: any;
}

class BaseController {
  sendError = ({ res, status, message }: ErrorResponse) => {
    res.status(status).json({ success: false, message, data: null });
    return;
  };

  sendSuccess = ({ res, message, data }: SuccessResponse) => {
    res.status(200).json({ success: true, message, data });
    return;
  };
}

export default BaseController;
