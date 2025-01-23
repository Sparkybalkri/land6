import type { AppProps } from 'next/app';
import { Manrope } from 'next/font/google';



export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}


