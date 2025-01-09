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

/**
 * BaseController class provides methods to send standardized success and error responses.
 */
class BaseController {
  /**
   * Sends an error response with the specified status and message.
   *
   * @param {ErrorResponse} param0 - The error response object.
   * @param {Response} param0.res - The response object.
   * @param {number} param0.status - The HTTP status code.
   * @param {string} param0.message - The error message.
   * @returns {void}
   */
  sendError = ({ res, status, message }: ErrorResponse): void => {
    res.status(status).json({ success: false, message, data: null });
    return;
  };

  /**
   * Sends a success response with the specified message and data.
   *
   * @param {SuccessResponse} param0 - The success response object.
   * @param {Response} param0.res - The response object.
   * @param {string} param0.message - The success message.
   * @param {any} param0.data - The data to be included in the response.
   * @returns {void}
   */
  sendSuccess = ({ res, message, data }: SuccessResponse): void => {
    res.status(200).json({ success: true, message, data });
    return;
  };
}

export default BaseController;
