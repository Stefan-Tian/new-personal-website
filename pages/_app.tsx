import Appbar from 'components/Appbar';

import type { AppProps } from 'next/app';
import 'styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="global-container">
      <Appbar />
      <Component {...pageProps} />
      <div className="copyright">© since 2021 Stefan Tien</div>
    </div>
  );
}
export default MyApp;
