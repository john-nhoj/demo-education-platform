import React from 'react';
import * as cn from 'classnames';
import { signOut, useSession } from 'next-auth/client';

const Header = () => {
  const [session] = useSession();

  return (
    <header
      className={cn('header', 'grid', 'items-center', 'px-8', 'bg-red-400')}
    >
      {session ? (
        <HeaderContent user={session.user} />
      ) : (
        'You are not logged in.'
      )}
      <style>{`
        .header {
          grid-area: header;
        }
      `}</style>
    </header>
  );
};

const HeaderContent = ({
  user,
}: {
  user: {
    name?: string;
    email?: string;
    image?: string;
  };
}) => {
  return (
    <div className={cn('grid', 'header-content')}>
      <div className={cn('info', 'flex', 'items-center')}>
        You are logged in as {user.name || user.email}
        {user.image && (
          <img
            src={user.image}
            alt=""
            className={cn('h-10', 'w-10', 'rounded-full', 'ml-4')}
          />
        )}
      </div>
      <button onClick={() => signOut()}>Sign out</button>
      <style>{`
        .header-content {
          grid-template-columns: auto;
          grid-template-areas:
            'info signout';
        }

        .info {
          grid-area: info;
        }

        button {
          grid-area: signout;
        }
      `}</style>
    </div>
  );
};

export { Header };
