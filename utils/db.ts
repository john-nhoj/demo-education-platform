import { loadEnvironment } from './env';

loadEnvironment();

export const databaseURI =
  process.env.DB_URI ||
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
