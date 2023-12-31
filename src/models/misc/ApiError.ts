import { HttpStatusCodes } from '../../config/HttpStatusCodes';

/**
 * Error with status code and message
 */
export class ApiError extends Error {
  status: HttpStatusCodes;
  constructor(status: HttpStatusCodes, message: string) {
    super(message);
    this.status = status;
  }
}
