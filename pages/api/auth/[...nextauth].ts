import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { databaseURI } from '../../../utils/db';

const isEnabled = (flag: string): boolean => flag && flag === 'true';

const getProviders = () => {
  const providers = [];
  const { GITHUB_ENABLED, EMAIL_ENABLED, GOOGLE_ENABLED, FACEBOOK_ENABLED } =
    process.env;

  if (isEnabled(EMAIL_ENABLED)) {
    providers.push(
      Providers.Email({
        server: process.env.EMAIL_SERVER,
        from: process.env.EMAIL_FROM,
      })
    );
  }

  if (isEnabled(GITHUB_ENABLED)) {
    providers.push(
      Providers.GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      })
    );
  }

  if (isEnabled(GOOGLE_ENABLED)) {
    providers.push(
      Providers.Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      })
    );
  }

  if (isEnabled(FACEBOOK_ENABLED)) {
    providers.push(
      Providers.Facebook({
        clientId: process.env.FB_CLIENT_ID,
        clientSecret: process.env.FB_CLIENT_SECRET,
      })
    );
  }

  return providers;
};

export default NextAuth({
  providers: getProviders(),
  pages: {
    signIn: '/auth/signin',
  },
  // A database is optional, but required to persist accounts in a database
  database: databaseURI,
});
