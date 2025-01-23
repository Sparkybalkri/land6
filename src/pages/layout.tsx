// Удалите 'use client', если файл должен быть серверным
import '../styles/globals.css';



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

