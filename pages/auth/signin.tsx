import React from 'react';
import { ClientSafeProvider, getProviders, signIn } from 'next-auth/client';

interface SignInProps {
  providers: Record<string, ClientSafeProvider>;
}

const SignIn = ({ providers }: SignInProps) => {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default SignIn;
