import type { AppProps } from 'next/app';
import { NextUIStyleProvider } from '@/configs/react/providers/NextUIStyleProvider';
import { QueryProvider } from '@/configs/react/providers/QueryProvider';
import '../configs/styles/globals.css';

const App = ({ Component, pageProps }: AppProps<any>) => {
  return (
    <NextUIStyleProvider>
      <QueryProvider>
        <Component {...pageProps} />
      </QueryProvider>
    </NextUIStyleProvider>
  );
};

export default App;
