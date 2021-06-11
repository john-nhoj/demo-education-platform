import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import * as cn from 'classnames';

const Home = () => {
  const [session, loading] = useSession();

  return (
    <div
      className={cn(
        'min-h-screen',
        'grid',
        'grid-cols-1',
        'grid-rows-layout',
        'grid-template-areas',
        'gap-y-2',
        'bg-gray-500'
      )}
    >
      <header className={cn('col-start-1', 'header', 'bg-red-400')}>
        This is the header
      </header>
      <main
        className={cn(
          'grid',
          'main-content',
          'grid-rows-mobile',
          'grid-cols-mobile',
          'md:grid-rows-tablet',
          'md:grid-cols-tablet',
          'lg:grid-rows-desktop',
          'lg:grid-cols-desktop',
          'gap-y-3',
          'lg:gap-x-8',
          'bg-yellow-200'
        )}
      >
        <div
          className={cn(
            'col-start-1',
            'col-end-4',
            'row-start-1',
            'row-end-2',
            'lg:col-start-2',
            'lg:col-end-4',
            'w-full',
            'aspect-w-16',
            'aspect-h-9'
          )}
        >
          <iframe
            src="https://www.youtube.com/embed/9zBsdzdE4sM"
            title="Learn CSS Grid in 20 Minutes"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div
          className={cn(
            'content',
            'col-start-2',
            'col-end-3',
            'row-start-2',
            'row-end-3',
            'lg:row-start-2',
            'lg:row-end-3'
          )}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis
          aliquam faucibus purus in massa tempor nec. Neque laoreet suspendisse
          interdum consectetur libero. Id leo in vitae turpis. Vitae et leo duis
          ut diam quam nulla porttitor. Nunc pulvinar sapien et ligula
          ullamcorper. Senectus et netus et malesuada. Mattis rhoncus urna neque
          viverra justo nec ultrices dui. Gravida quis blandit turpis cursus.
          Donec pretium vulputate sapien nec. Integer enim neque volutpat ac
          tincidunt vitae semper quis. Nisi vitae suscipit tellus mauris. Dui ut
          ornare lectus sit amet. Faucibus scelerisque eleifend donec pretium
          vulputate sapien. In est ante in nibh mauris cursus mattis molestie.
          Curabitur gravida arcu ac tortor dignissim convallis aenean et. Arcu
          ac tortor dignissim convallis aenean et tortor at. Leo vel orci porta
          non. Quis varius quam quisque id diam vel. Fermentum dui faucibus in
          ornare quam viverra orci. Iaculis eu non diam phasellus vestibulum
          lorem sed risus. Fames ac turpis egestas maecenas pharetra convallis.
          Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Arcu
          cursus vitae congue mauris rhoncus aenean vel elit. Vitae suscipit
          tellus mauris a diam maecenas. In mollis nunc sed id semper risus.
          Risus nullam eget felis eget nunc lobortis mattis. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Mattis aliquam faucibus
          purus in massa tempor nec. Neque laoreet suspendisse interdum
          consectetur libero. Id leo in vitae turpis. Vitae et leo duis ut diam
          quam nulla porttitor. Nunc pulvinar sapien et ligula ullamcorper.
          Senectus et netus et malesuada. Mattis rhoncus urna neque viverra
          justo nec ultrices dui. Gravida quis blandit turpis cursus. Donec
          pretium vulputate sapien nec. Integer enim neque volutpat ac tincidunt
          vitae semper quis. Nisi vitae suscipit tellus mauris. Dui ut ornare
          lectus sit amet. Faucibus scelerisque eleifend donec pretium vulputate
          sapien. In est ante in nibh mauris cursus mattis molestie. Curabitur
          gravida arcu ac tortor dignissim convallis aenean et. Arcu ac tortor
          dignissim convallis aenean et tortor at. Leo vel orci porta non. Quis
          varius quam quisque id diam vel. Fermentum dui faucibus in ornare quam
          viverra orci. Iaculis eu non diam phasellus vestibulum lorem sed
          risus. Fames ac turpis egestas maecenas pharetra convallis. Arcu dui
          vivamus arcu felis bibendum ut tristique et egestas. Arcu cursus vitae
          congue mauris rhoncus aenean vel elit. Vitae suscipit tellus mauris a
          diam maecenas. In mollis nunc sed id semper risus. Risus nullam eget
          felis eget nunc lobortis mattis.
        </div>
        <aside
          className={cn(
            'row-start-3',
            'row-end-4',
            'col-start-2',
            'col-end-3',
            'lg:row-start-2',
            'lg:row-end-3',
            'lg:col-start-3',
            'lg:col-end-4'
          )}
        >
          Aside will be here. Risus nullam eget felis eget nunc lobortis mattis.
        </aside>
      </main>
      <footer className={cn('footer', 'bg-red-100')}>This is a footer</footer>
      {/* {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.name} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )} */}
      <style jsx>{`
        .grid-template-areas {
          grid-template-areas:
            'header'
            'main'
            'footer;
        }

        .header {
          grid-area: header;
        }

        .footer {
          grid-area: footer;
        }

        .main-content {
          grid-area: main;
        }

        .content {
          grid-area: content;
        }
      `}</style>
    </div>
  );
};

export default Home;
