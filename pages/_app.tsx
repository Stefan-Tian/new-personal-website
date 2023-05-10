import Appbar from 'components/appbar';
import 'styles/globals.scss';
import localFont from 'next/font/local';
import type { AppProps } from 'next/app';
import Layout from './layout';

const golosFont = localFont({
  src: [
    {
      path: '/fonts/GolosText-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/GolosText-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/GolosText-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '/fonts/GolosText-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/fonts/GolosText-ExtraBold.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${golosFont.style.fontFamily}, sans-serif;
        }
      `}</style>
      <Layout>
        <Appbar />
        <main className="container">
          <Component {...pageProps} />
        </main>
        <footer className="container">
          <div>© since 2021 Stefan Tien</div>
        </footer>
      </Layout>
    </>
  );
}
