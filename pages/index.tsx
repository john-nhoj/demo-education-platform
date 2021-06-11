import React from 'react';
import * as cn from 'classnames';
import Link from 'next/link';

const Home = () => {
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
      <nav>
        <ul>
          <li>
            <Link href="/protected">Go to protected page</Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        .main-content {
          grid-area: main;
        }
      `}</style>
    </main>
  );
};

Home.auth = true;

export default Home;
