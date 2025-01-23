import '../styles/globals.css';
import { Manrope } from '@next/font/google';





const manrope = Manrope({
  weight: ['400', '500', '700'], // Укажите нужные веса
  subsets: ['latin'], // Выберите поддерживаемый набор символов
});

export default function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <main className={manrope.className}>
      <Component {...pageProps} />
    </main>
  );
}


