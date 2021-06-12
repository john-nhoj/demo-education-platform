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
      <div
        className={cn(
          'providers',
          'grid',
          'place-content-center',
          'gap-4',
          'p-4'
        )}
      >
        <EmailSignIn csrfToken={csrfToken} />
        <Divider />
        <OAuthProviders providers={providers} callbackUrl={callbackUrl} />
      </div>
      <style jsx>{`
        .signin {
          grid-area: main;
          gap: 1rem;
          grid-template-columns: 1fr;
          grid-template-rows: auto 1fr;
          grid-template-areas:
            'title'
            'providers';
        }

        .title {
          grid-area: title;
        }

        .providers {
          grid-area: providers;
        }
      `}</style>
    </article>
  );
};

const EmailSignIn = ({ csrfToken }: Pick<SignInProps, 'csrfToken'>) => {
  return (
    <form
      className={cn('form', 'grid', 'gap-4')}
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
  );
};

const OAuthProviders = ({
  providers,
  callbackUrl,
}: Omit<SignInProps, 'csrfToken'>) => {
  return (
    <section
      className={cn(
        'oauth',
        'grid',
        'gap-4',
        'place-content-center',
        'place-items-center'
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
  );
};

const Divider = () => {
  return (
    <div
      className={cn(
        'grid',
        'gap-4',
        'place-content-center',
        'place-items-center'
      )}
    >
      <span className={cn('divider', 'relative')}>or</span>
      <style jsx>{`
        .divider:before {
          content: '';
          display: block;
          width: 120px;
          height: 2px;
          background: #000;
          left: -125px;
          top: 50%;
          position: absolute;
        }
        .divider:after {
          content: '';
          display: block;
          width: 120px;
          height: 2px;
          background: #000;
          right: -125px;
          top: 50%;
          position: absolute;
        }
      `}</style>
    </div>
  );
};

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const oauthProviders = Object.values(providers).filter(
    (provider) => provider.name.toLowerCase() !== 'email'
  );
  const csrfToken = await getCsrfToken(context);
  const callbackUrl = context.query.callbackUrl || '/';
  return {
    props: { providers: oauthProviders, csrfToken, callbackUrl },
  };
}

export default SignIn;
