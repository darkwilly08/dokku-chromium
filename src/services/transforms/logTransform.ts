import { Application, LogLevel } from '../../enums';
import { LogDto, LogEntity } from '../../models/Log';

const isValidLogLevel = (level: LogLevel): boolean => Object.values(LogLevel).includes(level);
const isValidApplication = (application: Application): boolean => Object.values(Application).includes(application);

const logTransform = (log: LogDto): LogEntity => {
  if (!isValidLogLevel(log.level)) {
    throw new Error(`Invalid log level: ${log.level}`);
  }

  if (!isValidApplication(log.application)) {
    throw new Error(`Invalid application: ${log.application}`);
  }

  return {
    level: log.level,
    application: log.application,
    message: JSON.stringify(log.message),
    timestamp: new Date(log.timestamp),
    tags: log.tags ? JSON.stringify(log.tags) : null,
  };
};

export { logTransform };
