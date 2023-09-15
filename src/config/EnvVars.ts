/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable node/no-process-env */
export default {
  nodeEnv: process.env.NODE_ENV!,
  port: process.env.PORT!,
  chromeUrl: process.env.CHROME_URL!,
} as const;
