import BackgroundAnimation from 'components/background-animation';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <BackgroundAnimation />
      {children}
    </>
  );
};

export default Layout;
