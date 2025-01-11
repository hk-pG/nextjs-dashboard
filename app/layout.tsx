import '@/app/ui/global.css';
import type React from 'react';
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
