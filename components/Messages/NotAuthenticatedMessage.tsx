import React from 'react';
import * as cn from 'classnames';
import { signIn } from 'next-auth/client';

const NotAuthenticatedMessage = () => {
  return (
    <div
      className={cn('loader', 'grid', 'justify-items-center', 'items-center')}
    >
      <section>
        You are not authenticated. Please{' '}
        <button className="underline" onClick={() => signIn()}>
          sign in
        </button>{' '}
        to access the page.
      </section>
      <style>{`
        .loader {
          grid-area: main;
        }
      `}</style>
    </div>
  );
};

export { NotAuthenticatedMessage };
