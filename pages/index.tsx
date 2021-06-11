import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import * as cn from 'classnames';

const Home = () => {
  const [session] = useSession();

  return (
    <main
      className={cn(
        'grid',
        'main-content',
        'justify-items-center',
        'items-center',
        'bg-yellow-200'
      )}
    >
      {!session && <button onClick={() => signIn()}>Sign in</button>}
      {session && (
        <>
          Signed in as {session.user.name} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
      <style jsx>{`
        .main-content {
          grid-area: main;
        }
      `}</style>
    </main>
  );
};

export default Home;
