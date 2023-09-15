import path from 'path';
import morgan from 'morgan';
import helmet from 'helmet';
import express, { Request, Response, NextFunction } from 'express';

import 'express-async-errors';

import { apiRouter } from './routes/api';

import EnvVars from './config/EnvVars';
import { HttpStatusCodes } from './config/HttpStatusCodes';
import { NodeEnvs } from './enums';
import { ApiError } from './models/misc/ApiError';

// **** Init express **** //

const app = express();

// **** Set basic express settings **** //

app.use(express.json());

// Show routes called in console during development
if (EnvVars.nodeEnv === NodeEnvs.DEV) {
  app.use(morgan('dev'));
}

// Security
if (EnvVars.nodeEnv === NodeEnvs.PROD) {
  app.use(helmet());
}

// **** Add API routes **** //

// Add APIs
app.use('/api', apiRouter);

// Setup error handler
app.use((err: Error, _: Request, res: Response, __: NextFunction) => {
  console.error(err, true);
  let status = HttpStatusCodes.BAD_REQUEST;
  if (err instanceof ApiError) {
    status = err.status;
  }
  return res.status(status).json({ error: err.message });
});

// Set static directory (js and css).
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));

export default app;
