import type { Metadata, Viewport } from 'next';
import { Noto_Sans } from 'next/font/google';

import './globals.css';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-default',
});

export const metadata: Metadata = {
  title: "Kendrick's Adventure",
  description: "Kendrick Wong's Homepage",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSans.variable}>
      <body>{children}</body>
    </html>
  );
}
