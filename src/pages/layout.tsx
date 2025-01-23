// Удалите 'use client', если файл должен быть серверным
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={manrope.className}>
      <body>{children}</body>
    </html>
  );
}