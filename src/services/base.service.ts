class BaseService {
  sendError = (error: string) => {
    throw new Error(error);
  };
}

export default BaseService;
