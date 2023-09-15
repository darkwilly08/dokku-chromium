/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable node/no-process-env */
export default {
  nodeEnv: process.env.NODE_ENV!,
  port: process.env.PORT!,
  mysql: {
    host: process.env.MYSQL_HOST!,
    port: Number(process.env.MYSQL_PORT!),
    user: process.env.MYSQL_USER!,
    password: process.env.MYSQL_PASSWORD!,
    database: process.env.MYSQL_DATABASE!,
  },
  rabbitmq: {
    url: process.env.RABBITMQ_URL!,
    enabled: false,
  },
  bcrypt: {
    saltRounds: 8 as number,
  },
} as const;
