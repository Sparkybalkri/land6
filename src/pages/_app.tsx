
import { Manrope } from '@next/font/google';
import '../styles/globals.css';





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



