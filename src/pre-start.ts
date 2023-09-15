/**
 * Pre-start is where we want to place things that must run BEFORE the express
 * server is started. This is useful for environment variables, command-line
 * arguments, and cron-jobs.
 */

import path from 'path';
import dotenv from 'dotenv';

// eslint-disable-next-line node/no-process-env
const nodeEnv = process.env.NODE_ENV;

if (!nodeEnv) {
  throw new Error('NODE_ENV not set.');
}

const result2 = dotenv.config({
  path: path.join(__dirname, `../env/${String(nodeEnv)}.env`),
});

if (result2.error) {
  throw result2.error;
}
