import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { databaseURI } from '../../../utils/db';

export default NextAuth({
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  // A database is optional, but required to persist accounts in a database
  database: databaseURI,
});
