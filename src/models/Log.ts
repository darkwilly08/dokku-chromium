import { Application, LogLevel } from '../enums';

export interface LogDto {
  level: LogLevel;
  application: Application;
  message: JSON;
  timestamp: number;
  tags?: string[] | null;
}

export interface LogEntity {
  level: LogLevel;
  application: Application;
  message: string; // Stringified JSON
  timestamp: Date;
  tags: string | null; // Stringfied JSON Array
}
