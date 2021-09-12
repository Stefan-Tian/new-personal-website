import Appbar from 'components/Appbar';

import type { AppProps } from 'next/app';
import 'styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="global-container">
      <Appbar />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
