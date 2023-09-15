import { Request } from 'express';

export interface GenericRequest<T = void> extends Request {
  body: T;
  query: Record<string, string>;
}
