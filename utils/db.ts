import { loadEnvironment } from './env';

loadEnvironment();

const { DB_URI } = process.env;

if (!DB_URI) {
  throw new Error('Something is wrong with you environment variable DB_URI');
}

export const databaseURI = DB_URI;
