import React from 'react';
import * as cn from 'classnames';
import {
  ClientSafeProvider,
  getCsrfToken,
  getProviders,
  signIn,
} from 'next-auth/client';

interface SignInProps {
  providers: Record<string, ClientSafeProvider>;
  csrfToken: string;
  callbackUrl: string;
}

const buttonClassnames = cn(
  'border',
  'rounded-full',
  'bg-green-300',
  'py-2',
  'px-4',
  'place-self-center'
);

const SignIn = ({ providers, csrfToken, callbackUrl }: SignInProps) => {
  return (
    <article className="signin grid">
      <h1 className="title justify-self-center">Sign In</h1>
      <form
        className={cn(
          'form',
          'justify-self-center',
          'self-center',
          'grid',
          'gap-4'
        )}
        method="post"
        action="/api/auth/signin/email"
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          Email address
          <input
            type="email"
            id="email"
            name="email"
            className={cn('border', 'border-black', 'rounded-sm', 'ml-8')}
          />
        </label>
        <button className={buttonClassnames} type="submit">
          Sign in with Email
        </button>
      </form>
      <section
        className={cn(
          'oauth',
          // 'justify-self-center',
          // 'self-center',
          'place-items-center',
          'grid',
          'gap-4'
        )}
      >
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className={buttonClassnames}
              onClick={() => signIn(provider.id, { callbackUrl })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </section>
      <style jsx>{`
        .signin {
          grid-area: main;
          gap: 1rem;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr;
          grid-template-areas:
            'title title'
            'email oauth';
        }

        .title {
          grid-area: title;
        }

        .form {
          grid-area: email;
        }

        .oauth {
          grid-area: oauth;
        }
      `}</style>
    </article>
  );
};

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  const callbackUrl = context.query.callbackUrl || '/';
  return {
    props: { providers, csrfToken, callbackUrl },
  };
}

export default SignIn;
