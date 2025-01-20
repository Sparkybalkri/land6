// src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Single Page Website',
  description: 'A simple single-page website built with Next.js and TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
