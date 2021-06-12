import React from 'react';
import * as cn from 'classnames';
import { useSession } from 'next-auth/client';
import { Loading } from '../../components/Loading/Loading';
import { NotAuthenticatedMessage } from '../../components/Messages/NotAuthenticatedMessage';

const ProtectedPage = () => {
  const [session, loading] = useSession();
  const isUser = !!session?.user;

  if (loading) {
    return <Loading />;
  }

  if (!isUser) {
    return <NotAuthenticatedMessage />;
  }

  return (
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
      <div className={cn('video', 'aspect-w-16', 'aspect-h-9')}>
        <iframe
          src="https://www.youtube.com/embed/9zBsdzdE4sM"
          title="Learn CSS Grid in 20 Minutes"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={cn('content')}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mattis aliquam
        faucibus purus in massa tempor nec. Neque laoreet suspendisse interdum
        consectetur libero. Id leo in vitae turpis. Vitae et leo duis ut diam
        quam nulla porttitor. Nunc pulvinar sapien et ligula ullamcorper.
        Senectus et netus et malesuada. Mattis rhoncus urna neque viverra justo
        nec ultrices dui. Gravida quis blandit turpis cursus. Donec pretium
        vulputate sapien nec. Integer enim neque volutpat ac tincidunt vitae
        semper quis. Nisi vitae suscipit tellus mauris. Dui ut ornare lectus sit
        amet. Faucibus scelerisque eleifend donec pretium vulputate sapien. In
        est ante in nibh mauris cursus mattis molestie. Curabitur gravida arcu
        ac tortor dignissim convallis aenean et. Arcu ac tortor dignissim
        convallis aenean et tortor at. Leo vel orci porta non. Quis varius quam
        quisque id diam vel. Fermentum dui faucibus in ornare quam viverra orci.
        Iaculis eu non diam phasellus vestibulum lorem sed risus. Fames ac
        turpis egestas maecenas pharetra convallis. Arcu dui vivamus arcu felis
        bibendum ut tristique et egestas. Arcu cursus vitae congue mauris
        rhoncus aenean vel elit. Vitae suscipit tellus mauris a diam maecenas.
        In mollis nunc sed id semper risus. Risus nullam eget felis eget nunc
        lobortis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Mattis aliquam faucibus purus in massa tempor nec. Neque laoreet
        suspendisse interdum consectetur libero. Id leo in vitae turpis. Vitae
        et leo duis ut diam quam nulla porttitor. Nunc pulvinar sapien et ligula
        ullamcorper. Senectus et netus et malesuada. Mattis rhoncus urna neque
        viverra justo nec ultrices dui. Gravida quis blandit turpis cursus.
        Donec pretium vulputate sapien nec. Integer enim neque volutpat ac
        tincidunt vitae semper quis. Nisi vitae suscipit tellus mauris. Dui ut
        ornare lectus sit amet. Faucibus scelerisque eleifend donec pretium
        vulputate sapien. In est ante in nibh mauris cursus mattis molestie.
        Curabitur gravida arcu ac tortor dignissim convallis aenean et. Arcu ac
        tortor dignissim convallis aenean et tortor at. Leo vel orci porta non.
        Quis varius quam quisque id diam vel. Fermentum dui faucibus in ornare
        quam viverra orci. Iaculis eu non diam phasellus vestibulum lorem sed
        risus. Fames ac turpis egestas maecenas pharetra convallis. Arcu dui
        vivamus arcu felis bibendum ut tristique et egestas. Arcu cursus vitae
        congue mauris rhoncus aenean vel elit. Vitae suscipit tellus mauris a
        diam maecenas. In mollis nunc sed id semper risus. Risus nullam eget
        felis eget nunc lobortis mattis.
      </div>
      <aside className={cn('aside')}>
        Aside will be here. Risus nullam eget felis eget nunc lobortis mattis.
      </aside>
      <style jsx>{`
        .main-content {
          grid-area: main;
          grid-template-areas:
            'video video video'
            '. content .'
            '. aside .';
        }

        .video {
          grid-area: video;
        }

        .content {
          grid-area: content;
        }

        .aside {
          grid-area: aside;
        }

        @media (min-width: 640px) {
          .main-content {
            grid-template-areas:
              'video video video'
              '. content .'
              '. aside .';
          }
        }

        @media (min-width: 768px) {
          .main-content {
            grid-template-areas:
              'video video video'
              '. content .'
              '. aside .';
          }
        }

        @media (min-width: 1024px) {
          .main-content {
            grid-template-areas:
              '. video video .'
              '. content aside .';
          }
        }
      `}</style>
    </main>
  );
};

export default ProtectedPage;
