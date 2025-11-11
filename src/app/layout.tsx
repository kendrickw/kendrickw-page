import type { Metadata, Viewport } from 'next';
import { Pixelify_Sans } from 'next/font/google';
import { twJoin } from 'tailwind-merge';

import './globals.css';

const font = Pixelify_Sans({
  subsets: ['latin'],
  variable: '--default-font-family',
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
    <html lang="en" className={twJoin(font.variable)}>
      <body>{children}</body>
    </html>
  );
}
