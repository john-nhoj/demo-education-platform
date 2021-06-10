import dotenv from 'dotenv';

export const loadEnvironment = () => {
  const appEnv = process.env.NODE_ENV;
  let envFile = null;

  switch (appEnv) {
    case 'development':
      envFile = '.env.local';
      break;
    case 'production':
      // DO NOT USE dotenv to load .env file.
      // Set environment variables to playswarm instead
      break;
  }

  if (envFile !== null) {
    dotenv.config({ path: envFile });
  }
};
