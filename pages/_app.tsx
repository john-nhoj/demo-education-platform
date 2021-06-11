import React from 'react';
import '../styles/global.css';
import { Provider } from 'next-auth/client';
import type { AppProps } from 'next/app';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Layout } from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </Provider>
  );
}

export default MyApp;
