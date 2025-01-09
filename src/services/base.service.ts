/**
 * BaseService class provides basic service functionalities.
 */
class BaseService {
  /**
   * Sends an error by throwing an Error object with the provided message.
   *
   * @param error - The error message to be thrown.
   * @throws Will throw an error with the provided message.
   */
  sendError = (error: string) => {
    throw new Error(error);
  };
}
export default BaseService;
